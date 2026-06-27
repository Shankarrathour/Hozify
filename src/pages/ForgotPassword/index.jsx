import React, { useState } from 'react';
import { User, Lock, ShieldCheck, ArrowRight, ArrowLeft, CircleHelp } from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import { isValidIdentifier } from '../../utils/validation';
import Brand from '../../components/ui/Brand';
import SecurityPlaceholder from '../../components/ui/SecurityPlaceholder';

export default function ForgotPassword() {
  const { navigate, setRecovery } = useApp();
  const [identifier, setIdentifier] = useState('');
  const [error, setError] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const id = identifier.trim();
    if (!isValidIdentifier(id)) {
      setError('Enter a valid email or mobile number.');
      return;
    }
    setError('');
    setRecovery({ identifier: id, otpSent: true, otpVerified: false, resetDone: false });
    navigate(ROUTES.otpVerification);
  };

  return (
    <main className="recovery-page">
      <section className="recovery-card forgot-card">
        <div className="recovery-art purple-panel">
          <Brand compact />
          <SecurityPlaceholder title="Enterprise-Grade Security" subtitle="Manage your operations with the peace of mind that comes from protected access protocols." />
          <div className="panel-bottom">
            <span>SECURITY PLACEHOLDER</span>
            <div>
              <Lock size={18} />
              <ShieldCheck size={18} />
            </div>
          </div>
        </div>
        <form className="auth-form recovery-form" onSubmit={onSubmit} noValidate>
          <h1>Forgot Password?</h1>
          <p>Enter your registered email or mobile number. We'll send a one-time password to verify your identity.</p>
          <label>
            <span>Email / Mobile Number</span>
            <div className="input-wrap">
              <User size={19} />
              <input value={identifier} onChange={(event) => setIdentifier(event.target.value)} placeholder="e.g. admin@hozify.com" />
            </div>
          </label>
          {error && <div className="form-error">{error}</div>}
          <button className="primary-btn" type="submit">
            Send OTP <ArrowRight size={21} />
          </button>
          <div className="divider" />
          <button className="link-center" type="button" onClick={() => navigate(ROUTES.login)}>
            <ArrowLeft size={15} /> Back to login
          </button>
          <button className="support-link muted" type="button">
            <CircleHelp size={14} /> Need help? Contact support
          </button>
        </form>
      </section>
    </main>
  );
}
