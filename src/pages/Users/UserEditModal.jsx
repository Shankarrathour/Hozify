import React, { useEffect, useState } from 'react';
import { Save, X } from 'lucide-react';

const statusOptions = ['Active', 'Suspended', 'Blocked'];
const membershipOptions = ['Standard User', 'Verified User', 'Premium User'];

export default function UserEditModal({ user, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    status: 'Active',
    membershipType: 'Standard User'
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        mobile: user.mobile,
        email: user.email,
        status: user.status,
        membershipType: user.membershipType || 'Standard User'
      });
      setErrors({});
    }
  }, [user]);

  if (!user) return null;

  const updateField = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Name is required.';
    if (!formData.mobile.trim()) nextErrors.mobile = 'Mobile is required.';
    if (!formData.email.trim()) nextErrors.email = 'Email is required.';
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    onSave({
      ...user,
      ...formData,
      name: formData.name.trim(),
      mobile: formData.mobile.trim(),
      email: formData.email.trim()
    });
  };

  return (
    <div className="user-management-modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="user-management-edit-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="user-edit-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="user-management-modal-header">
          <div>
            <span className="user-management-modal-kicker">Edit Customer</span>
            <h2 id="user-edit-title">{user.name}</h2>
          </div>
          <button className="user-management-icon-btn" type="button" aria-label="Close edit user" onClick={onClose}>
            <X size={18} />
          </button>
        </header>

        <form className="user-management-edit-form" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input value={formData.name} onChange={(event) => updateField('name', event.target.value)} />
            {errors.name && <small>{errors.name}</small>}
          </label>

          <label>
            <span>Mobile</span>
            <input value={formData.mobile} onChange={(event) => updateField('mobile', event.target.value)} />
            {errors.mobile && <small>{errors.mobile}</small>}
          </label>

          <label>
            <span>Email</span>
            <input type="email" value={formData.email} onChange={(event) => updateField('email', event.target.value)} />
            {errors.email && <small>{errors.email}</small>}
          </label>

          <label>
            <span>Status</span>
            <select value={formData.status} onChange={(event) => updateField('status', event.target.value)}>
              {statusOptions.map((status) => (
                <option value={status} key={status}>{status}</option>
              ))}
            </select>
          </label>

          <label>
            <span>Membership Type</span>
            <select value={formData.membershipType} onChange={(event) => updateField('membershipType', event.target.value)}>
              {membershipOptions.map((membership) => (
                <option value={membership} key={membership}>{membership}</option>
              ))}
            </select>
          </label>

          <div className="user-management-modal-actions">
            <button className="secondary-action-btn" type="button" onClick={onClose}>Cancel</button>
            <button className="primary-action-btn" type="submit">
              <Save size={16} />
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
