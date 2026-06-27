import React, { useState } from 'react';
import { Moon, ShieldCheck, User, Lock, EyeOff, Eye, ArrowRight, CircleHelp } from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import { isValidIdentifier } from '../../utils/validation';
import Brand from '../../components/ui/Brand';
import SecurityPlaceholder from '../../components/ui/SecurityPlaceholder';

export default function Login() {
  const { login, navigate, selectedRole, roles } = useApp();
  const [identifier, setIdentifier] = useState('admin@hozify.com');
  const [password, setPassword] = useState('password');
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const roleName = roles.find((role) => role.id === selectedRole)?.name;

  const onSubmit = (event) => {
    event.preventDefault();
    const id = identifier.trim();
    if (!selectedRole) {
      navigate(ROUTES.roles);
      return;
    }
    if (!isValidIdentifier(id)) {
      setError('Enter a valid email or mobile number.');
      return;
    }
    if (!password.trim()) {
      setError('Password is required.');
      return;
    }
    setError('');
    login({ identifier: id, remember });
  };

  return (
    <main className="login-page">
      <div className="login-icons">
        <button className="icon-btn" type="button" aria-label="Toggle theme">
          <Moon size={21} />
        </button>
        <button className="icon-btn" type="button" aria-label="Language">
          <span className="globe">◎</span>
        </button>
      </div>
      <section className="login-left">
        <Brand compact />
        <div className="login-visual">
          <SecurityPlaceholder title="" />
        </div>
        <h1>Securely managing your enterprise ecosystem</h1>
        <p>Precision analytics and administrative control for the modern high-density corporate environment.</p>
        <ShieldCheck className="watermark" size={96} />
      </section>
      <section className="login-right">
        <form className="auth-form login-form" onSubmit={onSubmit} noValidate>
          <span className="role-context">{roleName || 'Select role'}</span>
          <h2>Welcome back</h2>
          <p>Enter your credentials to access the admin panel.</p>
          <label>
            <span>Mobile/Email</span>
            <div className="input-wrap">
              <User size={19} />
              <input value={identifier} onChange={(event) => setIdentifier(event.target.value)} placeholder="admin@hozify.com" />
            </div>
          </label>
          <label>
            <span>Password</span>
            <div className="input-wrap">
              <Lock size={19} />
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label="Toggle password visibility">
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </label>
          <div className="form-row">
            <label className="checkbox">
              <input type="checkbox" checked={remember} onChange={(event) => setRemember(event.target.checked)} />
              <span>Remember Me</span>
            </label>
            <button className="link-button" type="button" onClick={() => navigate(ROUTES.forgotPassword)}>
              Forgot Password?
            </button>
          </div>
          {error && <div className="form-error">{error}</div>}
          <button className="primary-btn" type="submit">
            Login <ArrowRight size={22} />
          </button>
          <div className="divider" />
          <button className="support-link" type="button">
            <CircleHelp size={15} /> Contact Support
          </button>
          <small>© 2024 HOZIFY Admin. Security Standards Verified.</small>
        </form>
      </section>
    </main>
  );
}
