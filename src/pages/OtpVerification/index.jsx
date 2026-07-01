import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock } from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import { DUMMY_OTP } from '../../constants/validation';
import PublicShell from '../../components/layouts/PublicShell';
import SecurityPlaceholder from '../../components/ui/SecurityPlaceholder';

export default function OtpVerification() {
  const { navigate, recovery, setRecovery } = useApp();
  const [digits, setDigits] = useState(Array(6).fill(''));
  const [timer, setTimer] = useState(58);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!recovery.otpSent) {
      navigate(ROUTES.forgotPassword);
      return undefined;
    }
    if (timer <= 0) return undefined;
    const id = setTimeout(() => setTimer(timer - 1), 1000);
    return () => clearTimeout(id);
  }, [timer, recovery.otpSent, navigate]);

  const code = digits.join('');
  const updateDigit = (index, value) => {
    const clean = value.replace(/\D/g, '').slice(-1);
    const next = [...digits];
    next[index] = clean;
    setDigits(next);
    if (clean) {
      const nextInput = document.querySelector(`[data-otp-index="${index + 1}"]`);
      nextInput?.focus();
    }
  };

  const onSubmit = (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    if (code.length !== 6) {
      setError('Enter the 6-digit OTP.');
      return;
    }
    // Accept 123456 or any 6 digits for demo purposes
    if (code !== DUMMY_OTP && code !== '000000') {
      setError('Invalid OTP. Use 123456 for this phase.');
      return;
    }
    setError('');
    setRecovery({ ...recovery, otpVerified: true });
    navigate(ROUTES.resetPassword);
  };

  const resend = () => {
    setDigits(Array(6).fill(''));
    setTimer(58);
    setError('');
  };

  return (
    <PublicShell footerLeft>
      <section className="otp-card">
        <div className="otp-art">
          <SecurityPlaceholder title="Verify Identity" subtitle="We've sent a 6-digit authentication code to your registered mobile number for secure access." />
        </div>
        <form className="otp-form" onSubmit={onSubmit}>
          <h1>One-Time Password</h1>
          <p>Please enter the security code below</p>
          <div className="otp-inputs">
            {digits.map((digit, index) => (
              <input
                key={index}
                data-otp-index={index}
                value={digit}
                onChange={(event) => updateDigit(index, event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Backspace' && !digits[index] && index > 0) {
                    document.querySelector(`[data-otp-index="${index - 1}"]`)?.focus();
                  }
                  if (event.key === 'Enter') {
                    event.preventDefault();
                    onSubmit();
                  }
                }}
                inputMode="numeric"
                maxLength={1}
              />
            ))}
          </div>
          {error && <div className="form-error">{error}</div>}
          <button className="primary-btn" type="button" onClick={onSubmit}>
            Verify Access <ShieldCheck size={20} />
          </button>
          <div className="resend">
            <span>Didn't receive the code?</span>
            <button type="button" onClick={resend} disabled={timer > 0}>Resend OTP</button>
            {timer > 0 && <strong>Resend in 00:{String(timer).padStart(2, '0')}</strong>}
          </div>
          <small><Lock size={13} /> Secured by HOZIFY Encryption Standards</small>
        </form>
      </section>
    </PublicShell>
  );
}
