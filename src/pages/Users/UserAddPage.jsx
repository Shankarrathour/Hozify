import React, { useState } from 'react';
import { ArrowLeft, Save, UserPlus } from 'lucide-react';

const initialForm = {
  name: '',
  mobile: '',
  email: '',
  dob: '',
  gender: '',
  state: '',
  city: '',
  pincode: '',
  mobileVerification: '',
  emailVerification: '',
  status: ''
};

const genderOptions = ['Male', 'Female', 'Other'];
const verificationOptions = ['Verified', 'Pending'];
const statusOptions = ['Active', 'Blocked'];

function formatDate(value) {
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(new Date(value));
}

function Field({ label, error, children }) {
  return (
    <label className="user-add-field">
      <span>{label}</span>
      {children}
      {error && <small>{error}</small>}
    </label>
  );
}

function FormSection({ title, children }) {
  return (
    <section className="user-add-section">
      <div className="user-add-section-head">
        <h2>{title}</h2>
      </div>
      <div className="user-add-grid">
        {children}
      </div>
    </section>
  );
}

export default function UserAddPage({ onBack, onSave }) {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const updateField = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
  };

  const validate = () => {
    const nextErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (!String(value).trim()) {
        nextErrors[key] = 'This field is required.';
      }
    });

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (formData.pincode.trim() && !/^\d{6}$/.test(formData.pincode.trim())) {
      nextErrors.pincode = 'Enter a valid 6 digit pincode.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const buildUser = () => {
    const now = new Date();
    const id = `USR-${Math.floor(1000 + Math.random() * 9000)}`;
    const registrationDate = now.toISOString().slice(0, 10);
    const referralCode = formData.name
      .trim()
      .slice(0, 3)
      .toUpperCase()
      .padEnd(3, 'X') + Math.floor(100 + Math.random() * 900);

    return {
      id,
      name: formData.name.trim(),
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=220&h=220&q=80',
      mobile: formData.mobile.trim(),
      email: formData.email.trim(),
      dob: formData.dob,
      gender: formData.gender,
      status: formData.status,
      registrationDate,
      membershipType: formData.mobileVerification === 'Verified' && formData.emailVerification === 'Verified' ? 'Verified User' : 'Standard User',
      addresses: [
        `${formData.city.trim()}, ${formData.state.trim()} - ${formData.pincode.trim()}`
      ],
      verification: {
        mobile: formData.mobileVerification,
        email: formData.emailVerification
      },
      wallet: {
        balance: 0,
        totalCredits: 0,
        totalDebits: 0,
        lastTransaction: {
          id: `${id}-TXN-1`,
          date: registrationDate,
          type: 'Credit',
          amount: 0,
          remarks: 'Wallet initialized'
        },
        transactions: [
          {
            id: `${id}-TXN-1`,
            date: registrationDate,
            type: 'Credit',
            amount: 0,
            remarks: 'Wallet initialized'
          }
        ]
      },
      referrals: {
        referralCode,
        totalReferrals: 0,
        earnedAmount: 0,
        referredUsers: []
      },
      bookingHistory: [],
      documents: [
        {
          name: 'Customer Profile',
          type: 'Account',
          verificationStatus: formData.emailVerification === 'Verified' ? 'Verified' : 'Pending',
          uploadedDate: registrationDate
        }
      ],
      logs: [
        {
          date: registrationDate,
          action: 'User created',
          performedBy: 'Admin User',
          remarks: `${formData.name.trim()} was created from User Management on ${formatDate(registrationDate)}.`
        }
      ]
    };
  };

  const handleSubmit = (mode) => {
    if (!validate()) return;

    onSave(buildUser(), mode);
    if (mode === 'addMore') {
      setFormData(initialForm);
      setErrors({});
    }
  };

  return (
    <div className="user-add-page">
      <div className="partner-details-nav user-add-nav">
        <button className="back-arrow-btn" type="button" onClick={onBack} aria-label="Go back to users">
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="page-title">Add User</h1>
          <p className="page-subtitle">Create a customer account with required profile, address, verification, and status details.</p>
        </div>
      </div>

      <form className="panel user-add-form-card" onSubmit={(event) => event.preventDefault()} noValidate>
        <FormSection title="Basic Information">
          <Field label="Name" error={errors.name}>
            <input value={formData.name} onChange={(event) => updateField('name', event.target.value)} placeholder="Enter full name" />
          </Field>
          <Field label="Mobile" error={errors.mobile}>
            <input value={formData.mobile} onChange={(event) => updateField('mobile', event.target.value)} placeholder="Enter mobile number" />
          </Field>
          <Field label="Email" error={errors.email}>
            <input type="email" value={formData.email} onChange={(event) => updateField('email', event.target.value)} placeholder="Enter email address" />
          </Field>
          <Field label="DOB" error={errors.dob}>
            <input type="date" value={formData.dob} onChange={(event) => updateField('dob', event.target.value)} />
          </Field>
          <Field label="Gender" error={errors.gender}>
            <select value={formData.gender} onChange={(event) => updateField('gender', event.target.value)}>
              <option value="">Select gender</option>
              {genderOptions.map((gender) => <option value={gender} key={gender}>{gender}</option>)}
            </select>
          </Field>
        </FormSection>

        <FormSection title="Address">
          <Field label="State" error={errors.state}>
            <input value={formData.state} onChange={(event) => updateField('state', event.target.value)} placeholder="Enter state" />
          </Field>
          <Field label="City" error={errors.city}>
            <input value={formData.city} onChange={(event) => updateField('city', event.target.value)} placeholder="Enter city" />
          </Field>
          <Field label="Pincode" error={errors.pincode}>
            <input value={formData.pincode} onChange={(event) => updateField('pincode', event.target.value)} placeholder="Enter pincode" />
          </Field>
        </FormSection>

        <FormSection title="Verification">
          <Field label="Mobile Verification" error={errors.mobileVerification}>
            <select value={formData.mobileVerification} onChange={(event) => updateField('mobileVerification', event.target.value)}>
              <option value="">Select verification</option>
              {verificationOptions.map((option) => <option value={option} key={option}>{option}</option>)}
            </select>
          </Field>
          <Field label="Email Verification" error={errors.emailVerification}>
            <select value={formData.emailVerification} onChange={(event) => updateField('emailVerification', event.target.value)}>
              <option value="">Select verification</option>
              {verificationOptions.map((option) => <option value={option} key={option}>{option}</option>)}
            </select>
          </Field>
        </FormSection>

        <FormSection title="Status">
          <Field label="Account Status" error={errors.status}>
            <select value={formData.status} onChange={(event) => updateField('status', event.target.value)}>
              <option value="">Select status</option>
              {statusOptions.map((status) => <option value={status} key={status}>{status}</option>)}
            </select>
          </Field>
        </FormSection>

        <div className="user-add-actions">
          <button className="secondary-action-btn" type="button" onClick={onBack}>Cancel</button>
          <button className="secondary-action-btn" type="button" onClick={() => handleSubmit('addMore')}>
            <UserPlus size={16} />
            <span>Save & Add More</span>
          </button>
          <button className="primary-action-btn" type="button" onClick={() => handleSubmit('save')}>
            <Save size={16} />
            <span>Save</span>
          </button>
        </div>
      </form>
    </div>
  );
}
