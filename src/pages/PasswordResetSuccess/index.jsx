import React from 'react';
import { ArrowRight, Shield, KeyRound } from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import PublicShell from '../../components/layouts/PublicShell';
import SecurityPlaceholder from '../../components/ui/SecurityPlaceholder';

export default function PasswordResetSuccess() {
  const { navigate } = useApp();
  return (
    <PublicShell>
      <section className="success-page">
        <div className="success-art">
          <SecurityPlaceholder variant="success" title="Security Verified" subtitle="Your administrative credentials have been updated successfully." />
        </div>
        <div className="success-copy">
          <span className="pill">UPDATE COMPLETE</span>
          <h1>Password successfully reset</h1>
          <p>Your account security is our priority. You can now use your new password to access the HOZIFY Admin dashboard.</p>
          <button className="primary-btn" type="button" onClick={() => navigate(ROUTES.login)}>Login Again <ArrowRight size={22} /></button>
          <button className="support-link" type="button">Need help? Contact support</button>
          <div className="divider" />
          <div className="encryption-note">
            <span><Shield size={14} /></span>
            <span><KeyRound size={14} /></span>
            <strong>Encryption: AES-256 standard</strong>
          </div>
        </div>
      </section>
    </PublicShell>
  );
}
