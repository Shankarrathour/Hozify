import React, { useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import { useApp } from '../../hooks/useApp';
import { useToast } from '../../components/common/ToastNotification';
import { Save, X, Eye, EyeOff, Lock, CheckCircle, Shield } from 'lucide-react';

export default function ChangePasswordPage() {
  const { navigate } = useApp();
  const { addToast } = useToast();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Strength Check
  const getPasswordStrength = () => {
    if (!newPassword) return { label: 'None', color: '#cbd5e1', percent: 0 };
    let score = 0;
    if (newPassword.length >= 8) score++;
    if (/[A-Z]/.test(newPassword)) score++;
    if (/[0-9]/.test(newPassword)) score++;
    if (/[^A-Za-z0-9]/.test(newPassword)) score++;

    if (score === 1) return { label: 'Weak', color: '#ef4444', percent: 25 };
    if (score === 2) return { label: 'Fair', color: '#f59e0b', percent: 50 };
    if (score === 3) return { label: 'Strong', color: '#3b82f6', percent: 75 };
    return { label: 'Very Strong', color: '#10b981', percent: 100 };
  };

  const strength = getPasswordStrength();

  const handleSave = (e) => {
    e.preventDefault();
    if (newPassword.length < 8) {
      addToast('New password must be at least 8 characters long.', 'error');
      return;
    }
    if (newPassword !== confirmPassword) {
      addToast('Confirm password does not match new password.', 'error');
      return;
    }
    
    addToast('Your password has been changed successfully!', 'success');
    navigate('/my-profile');
  };

  return (
    <AdminShell activeTab="Settings" headerTitle="Change Security Password">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '40px', maxWidth: '600px', margin: '0 auto' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          Settings &gt; <span style={{ color: '#2A2454' }}>Change Password</span>
        </div>

        {/* Heading */}
        <div>
          <h1 className="custom-page-heading" style={{ margin: '0 0 6px 0' }}>Change Account Password</h1>
          <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Protect your administrative account credentials with strong and safe password configurations.</p>
        </div>

        {/* Editor */}
        <form onSubmit={handleSave} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Lock size={16} /> Update Password Credentials
          </h3>

          {/* Current Password */}
          <div>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '6px' }}>Current Password</label>
            <div style={{ position: 'relative' }}>
              <input 
                type={showCurrent ? 'text' : 'password'}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter current password"
                style={{ width: '100%', padding: '8px 40px 8px 12px', border: '1px solid var(--line)', borderRadius: '6px', fontSize: '13px' }}
                required
              />
              <button 
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)' }}
              >
                {showCurrent ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '6px' }}>New Password</label>
            <div style={{ position: 'relative' }}>
              <input 
                type={showNew ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter strong new password"
                style={{ width: '100%', padding: '8px 40px 8px 12px', border: '1px solid var(--line)', borderRadius: '6px', fontSize: '13px' }}
                required
              />
              <button 
                type="button"
                onClick={() => setShowNew(!showNew)}
                style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)' }}
              >
                {showNew ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            
            {/* Strength Meter */}
            {newPassword && (
              <div style={{ marginTop: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Password Strength: <strong style={{ color: strength.color }}>{strength.label}</strong></span>
                  <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{strength.percent}%</span>
                </div>
                <div style={{ height: '4px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: `${strength.percent}%`, height: '100%', background: strength.color, borderRadius: '4px', transition: 'width 0.3s ease' }} />
                </div>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '6px' }}>Confirm New Password</label>
            <div style={{ position: 'relative' }}>
              <input 
                type={showConfirm ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                style={{ width: '100%', padding: '8px 40px 8px 12px', border: '1px solid var(--line)', borderRadius: '6px', fontSize: '13px' }}
                required
              />
              <button 
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)' }}
              >
                {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Action Row */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '10px' }}>
            <button type="button" onClick={() => navigate('/my-profile')} className="custom-btn-secondary" style={{ height: '38px', padding: '0 20px' }}>
              Cancel
            </button>
            <button onClick={(e) => { e.preventDefault(); alert("Action performed successfully"); }} type="submit" className="custom-btn-primary" style={{ height: '38px', padding: '0 20px' }}>
              <Save size={14} style={{ marginRight: '6px' }} /> Update Password
            </button>
          </div>

        </form>

      </div>
    </AdminShell>
  );
}
