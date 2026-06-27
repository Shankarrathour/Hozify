import React, { useState, useEffect } from 'react';
import { EyeOff, Eye, ArrowRight, ArrowLeft } from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import PublicShell from '../../components/layouts/PublicShell';
import SecurityPlaceholder from '../../components/ui/SecurityPlaceholder';
import Requirement from '../../components/common/Requirement';

export default function ResetPassword() {
  const { navigate, recovery, setRecovery } = useApp();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!recovery.otpVerified) navigate(ROUTES.forgotPassword);
  }, [recovery.otpVerified, navigate]);

  const checks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /\d/.test(password),
    special: /[^A-Za-z0-9]/.test(password)
  };
  const valid = Object.values(checks).every(Boolean) && password === confirm && confirm.length > 0;

  const onSubmit = (event) => {
    event.preventDefault();
    if (!valid) {
      setError('Please satisfy all password requirements and confirm the password.');
      return;
    }
    setError('');
    setRecovery({ identifier: '', otpSent: false, otpVerified: false, resetDone: true });
    navigate(ROUTES.passwordResetSuccess);
  };

  return (
    <PublicShell>
      <section className="reset-card">
        <div className="reset-art">
          <SecurityPlaceholder variant="key" title="Secure Recovery" subtitle="Create a strong, unique password to ensure your administrative access remains protected and secure." />
        </div>
        <form className="auth-form reset-form" onSubmit={onSubmit}>
          <h1>Reset Password</h1>
          <p>Verify your identity and set a new secure credential.</p>
          <label>
            <span>New Password</span>
            <div className="input-wrap">
              <input value={password} onChange={(event) => setPassword(event.target.value)} type={showPassword ? 'text' : 'password'} placeholder="Enter new password" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label="Toggle password visibility">
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>
          </label>
          <label>
            <span>Confirm Password</span>
            <div className="input-wrap">
              <input value={confirm} onChange={(event) => setConfirm(event.target.value)} type="password" placeholder="Re-type new password" />
            </div>
          </label>
          <div className="requirements">
            <strong>PASSWORD REQUIREMENTS</strong>
            <Requirement ok={checks.length} label="At least 8 Characters" />
            <Requirement ok={checks.uppercase} label="One Uppercase Letter" />
            <Requirement ok={checks.number} label="One Number" />
            <Requirement ok={checks.special} label="One Special Character" />
          </div>
          {error && <div className="form-error">{error}</div>}
          <button className="primary-btn" type="submit">Reset Password <ArrowRight size={21} /></button>
          <button className="link-center" type="button" onClick={() => navigate(ROUTES.login)}><ArrowLeft size={15} /> Back to Login</button>
        </form>
      </section>
    </PublicShell>
  );
}
