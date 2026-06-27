import React, { useState } from 'react';
import {
  ArrowLeft,
  ChevronRight,
  Zap,
  AlertOctagon,
  FileText,
  Trash2,
  Upload,
  Clock,
  Lock,
  Smile,
  CheckCircle,
  HelpCircle,
  Bold,
  Italic,
  List,
  Link,
  Code
} from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import AdminShell from '../../components/layouts/AdminShell';

export default function SupportTicketCreate({ activeTab = 'Support Center' }) {
  const { navigate } = useApp();
  const [ticketType, setTicketType] = useState('Technical Issue');
  const [category, setCategory] = useState('Platform Downtime');
  const [customerSearch, setCustomerSearch] = useState('');
  const [selectedCustomers, setSelectedCustomers] = useState(['Acme Corp International']);
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('High');
  const [attachments, setAttachments] = useState([
    { name: 'error_log_screenshot.png', size: '1.2 MB', status: 'UPLOADED' }
  ]);

  // Compute live progress percentage based on fields filled
  const getProgress = () => {
    let progress = 0;
    if (ticketType) progress += 15;
    if (category) progress += 15;
    if (selectedCustomers.length > 0) progress += 20;
    if (description.trim().length > 10) progress += 30;
    if (priority) progress += 10;
    if (attachments.length > 0) progress += 10;
    return progress;
  };

  const handleAddCustomer = (e) => {
    if (e.key === 'Enter' && customerSearch.trim()) {
      if (!selectedCustomers.includes(customerSearch.trim())) {
        setSelectedCustomers([...selectedCustomers, customerSearch.trim()]);
      }
      setCustomerSearch('');
    }
  };

  const handleRemoveCustomer = (indexToRemove) => {
    setSelectedCustomers(selectedCustomers.filter((_, idx) => idx !== indexToRemove));
  };

  const handleFileUpload = (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      const sizeMB = (files[0].size / (1024 * 1024)).toFixed(1);
      setAttachments([...attachments, {
        name: files[0].name,
        size: `${sizeMB} MB`,
        status: 'UPLOADED'
      }]);
    }
  };

  const handleRemoveAttachment = (idxToRemove) => {
    setAttachments(attachments.filter((_, idx) => idx !== idxToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCustomers.length === 0) {
      alert('Please select at least one customer.');
      return;
    }
    if (!description.trim()) {
      alert('Please enter a description of the issue.');
      return;
    }

    // Save ticket locally in localStorage to persist across views
    const newTk = {
      id: `#TK-${Math.floor(8000 + Math.random() * 1000)}`,
      user: {
        name: selectedCustomers[0],
        email: `${selectedCustomers[0].toLowerCase().replace(/\s+/g, '')}@corp.com`,
        initials: selectedCustomers[0].substring(0, 2).toUpperCase(),
        color: '#25108f',
        bg: '#f1ebfa'
      },
      category: category.split(' ')[0], // Billing, Technical, Onboarding, etc.
      priority,
      status: 'OPEN',
      agent: { name: 'Unassigned', initials: 'UN', avatar: null },
      createdDate: 'Oct 12, Just now',
      subject: description.substring(0, 40) + '...'
    };

    const existingStr = localStorage.getItem('hozify_new_tickets') || '[]';
    try {
      const existing = JSON.parse(existingStr);
      localStorage.setItem('hozify_new_tickets', JSON.stringify([newTk, ...existing]));
    } catch (err) {
      localStorage.setItem('hozify_new_tickets', JSON.stringify([newTk]));
    }

    alert('Ticket submitted successfully!');
    navigate(ROUTES.supportAll);
  };

  return (
    <AdminShell
      activeTab={activeTab}
      brandText="HOZIFY"
      brandSubText="Enterprise Admin"
      headerTitle="New Support Ticket"
      searchPlaceholder="Search support guidelines..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 0', position: 'relative' }}>
        
        {/* Back and Breadcrumb navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <button
            onClick={() => navigate(ROUTES.supportAll)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              border: 'none',
              background: 'transparent',
              fontSize: '13px',
              fontWeight: '750',
              color: 'var(--primary)',
              cursor: 'pointer'
            }}
            type="button"
          >
            <ArrowLeft size={16} />
            <span>Cancel and Go Back</span>
          </button>

          <div style={{ fontSize: '12px', fontWeight: '750', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Support Center</span>
            <ChevronRight size={12} />
            <span style={{ color: 'var(--primary)' }}>Create Ticket</span>
          </div>
        </div>

        {/* Page Title & Progress */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', borderBottom: '1px solid var(--line)', paddingBottom: '16px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
              Create Support Ticket
            </h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '4px 0 0' }}>
              Initiate a new support request for enterprise clients. Ensure all mandatory fields are accurate for efficient routing.
            </p>
          </div>

          {/* Progress Indicator */}
          <div style={{ width: '220px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase' }}>
              <span>Progress</span>
              <span>{getProgress()}%</span>
            </div>
            <div style={{ height: '6px', background: '#eee9f6', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ width: `${getProgress()}%`, height: '100%', background: 'var(--primary)', transition: 'width 0.3s ease' }} />
            </div>
          </div>
        </div>

        {/* Create Ticket Form Layout */}
        <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '2fr 1fr', gap: '24px', alignItems: 'stretch' }}>
          
          {/* Left Column Fields */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Ticket Identity Card */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', background: '#fff' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '850', color: 'var(--text)', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={16} style={{ color: 'var(--primary)' }} />
                Ticket Identity
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {/* Ticket Type */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--muted)' }}>TICKET TYPE</span>
                  <select
                    value={ticketType}
                    onChange={(e) => setTicketType(e.target.value)}
                    style={{ border: '1px solid var(--line)', padding: '10px 12px', borderRadius: '6px', background: '#fff', outline: 'none', fontSize: '13px', color: 'var(--text)', fontWeight: '600' }}
                  >
                    <option value="Technical Issue">Technical Issue</option>
                    <option value="Billing Dispute">Billing Dispute</option>
                    <option value="Account Lockout">Account Lockout</option>
                    <option value="Feature Request">Feature Request</option>
                  </select>
                </div>

                {/* Category */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--muted)' }}>CATEGORY</span>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{ border: '1px solid var(--line)', padding: '10px 12px', borderRadius: '6px', background: '#fff', outline: 'none', fontSize: '13px', color: 'var(--text)', fontWeight: '600' }}
                  >
                    <option value="Platform Downtime">Platform Downtime</option>
                    <option value="Payment Processing">Payment Processing</option>
                    <option value="KYC Verification">KYC Verification</option>
                    <option value="API Integration">API Integration</option>
                  </select>
                </div>
              </div>

              {/* Customer Selection */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--muted)' }}>CUSTOMER SELECTION</span>
                
                <div style={{
                  border: '1px solid var(--line)',
                  borderRadius: '6px',
                  padding: '8px 12px',
                  background: '#fff',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  alignItems: 'center'
                }}>
                  {selectedCustomers.map((cust, idx) => (
                    <span key={idx} style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      background: '#ecfdf5',
                      color: '#047857',
                      fontSize: '12px',
                      fontWeight: '800',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      border: '1px solid #d1fae5'
                    }}>
                      {cust}
                      <button
                        type="button"
                        onClick={() => handleRemoveCustomer(idx)}
                        style={{ border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', color: '#047857', padding: 0 }}
                      >
                        <Trash2 size={11} />
                      </button>
                    </span>
                  ))}
                  
                  <input
                    placeholder="Search customer name or ID... (Press Enter)"
                    value={customerSearch}
                    onChange={(e) => setCustomerSearch(e.target.value)}
                    onKeyDown={handleAddCustomer}
                    style={{ border: 'none', outline: 'none', fontSize: '13px', color: 'var(--text)', flex: 1, minWidth: '150px' }}
                  />
                </div>
              </div>

            </div>

            {/* Detailed Description Editor */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', background: '#fff' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                Detailed Description
              </h3>

              <div style={{ border: '1px solid var(--line)', borderRadius: '8px', overflow: 'hidden' }}>
                {/* Editor Toolbar layout mock */}
                <div style={{ display: 'flex', gap: '12px', background: 'var(--soft)', borderBottom: '1px solid var(--line)', padding: '10px 14px' }}>
                  <button type="button" style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }} title="Bold">
                    <Bold size={15} />
                  </button>
                  <button type="button" style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }} title="Italic">
                    <Italic size={15} />
                  </button>
                  <button type="button" style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }} title="Bullet List">
                    <List size={15} />
                  </button>
                  <button type="button" style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }} title="Insert Link">
                    <Link size={15} />
                  </button>
                  <button type="button" style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }} title="Code View">
                    <Code size={15} />
                  </button>
                </div>

                <textarea
                  placeholder="Describe the issue in detail. Include steps to reproduce if applicable..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={10}
                  style={{ width: '100%', border: 'none', outline: 'none', padding: '16px', fontSize: '13.5px', color: 'var(--text)', resize: 'vertical' }}
                  required
                />
              </div>
            </div>

          </div>

          {/* Right Column Fields */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Set Priority */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', background: '#fff' }}>
              <h3 style={{ fontSize: '14.5px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                Set Priority
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { key: 'Urgent', label: 'Urgent', desc: 'Immediate response required', icon: Zap, color: '#dc2626', bg: '#fee2e2' },
                  { key: 'High', label: 'High', desc: 'Business critical impact', icon: AlertOctagon, color: '#ef4444', bg: '#ffe8e8' },
                  { key: 'Medium', label: 'Medium', desc: 'Standard operational issue', icon: CheckCircle, color: '#2563eb', bg: '#eff6ff' },
                  { key: 'Low', label: 'Low', desc: 'Non-essential maintenance', icon: Smile, color: '#4b5563', bg: '#f3f4f6' }
                ].map((item) => {
                  const isChecked = priority === item.key;
                  const Icon = item.icon;
                  return (
                    <label
                      key={item.key}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '14px',
                        borderRadius: '8px',
                        border: isChecked ? `2px solid ${item.color}` : '1px solid var(--line)',
                        background: isChecked ? item.bg : '#fff',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <input
                        type="radio"
                        name="priority"
                        value={item.key}
                        checked={isChecked}
                        onChange={() => setPriority(item.key)}
                        style={{ display: 'none' }}
                      />
                      
                      {/* Custom Radio Dot indicator */}
                      <div style={{
                        height: '16px',
                        width: '16px',
                        borderRadius: '50%',
                        border: `2px solid ${isChecked ? item.color : 'var(--line)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        {isChecked && (
                          <div style={{ height: '8px', width: '8px', borderRadius: '50%', background: item.color }} />
                        )}
                      </div>

                      <div style={{ flex: 1 }}>
                        <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>{item.label}</strong>
                        <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{item.desc}</span>
                      </div>

                      <Icon size={16} style={{ color: item.color }} />
                    </label>
                  );
                })}
              </div>
            </div>

            {/* File Attachments */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', background: '#fff' }}>
              <h3 style={{ fontSize: '14.5px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                File Attachments
              </h3>

              {/* Drag Drop Zone */}
              <label style={{
                border: '2px dashed var(--line)',
                borderRadius: '8px',
                padding: '24px 16px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                background: 'rgba(37, 16, 143, 0.01)'
              }}>
                <input
                  type="file"
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                  aria-label="Upload file attachment"
                />
                <Upload size={24} style={{ color: 'var(--primary)' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>
                    Drag & drop files
                  </strong>
                  <span style={{ fontSize: '11px', color: 'var(--muted)' }}>
                    or click to browse local storage
                  </span>
                </div>
                <span style={{ fontSize: '10px', color: 'var(--muted)' }}>
                  Max 25MB per file (PDF, PNG, JPG, JSON)
                </span>
              </label>

              {/* Uploaded List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {attachments.map((file, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '10px 12px',
                      borderRadius: '6px',
                      border: '1px solid var(--line)',
                      background: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '12px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
                      <FileText size={15} style={{ color: 'var(--muted)', flexShrink: 0 }} />
                      <div style={{ overflow: 'hidden' }}>
                        <span style={{ display: 'block', fontWeight: '700', color: 'var(--text)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }} title={file.name}>
                          {file.name}
                        </span>
                        <span style={{ fontSize: '10.5px', color: 'var(--muted)' }}>
                          {file.size} • {file.status}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRemoveAttachment(idx)}
                      style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#dc2626', padding: 0 }}
                      aria-label="Delete attachment"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Buttons block */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                type="submit"
                style={{
                  width: '100%',
                  height: '42px',
                  border: 'none',
                  background: 'var(--primary)',
                  color: '#fff',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '800',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 6px rgba(37, 16, 143, 0.15)'
                }}
              >
                <span>Submit Ticket</span>
              </button>

              <button
                type="button"
                onClick={() => { alert('Ticket saved as draft.'); navigate(ROUTES.supportAll); }}
                style={{
                  width: '100%',
                  height: '40px',
                  border: '1px solid var(--line)',
                  background: '#fff',
                  color: 'var(--text)',
                  borderRadius: '6px',
                  fontSize: '13.5px',
                  fontWeight: '750',
                  cursor: 'pointer'
                }}
              >
                Save as Draft
              </button>
            </div>

            {/* Footer Metadata */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              fontSize: '10px',
              color: 'var(--muted)',
              fontWeight: '750',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              textAlign: 'center',
              marginTop: '12px'
            }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                <Clock size={11} />
                SLA Response: 4 Hours
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                <Lock size={11} />
                Security: SOC2 Compliant
              </span>
              <span>Hozify Support SCC • v2.4.1</span>
            </div>

          </div>

        </form>

      </div>
    </AdminShell>
  );
}
