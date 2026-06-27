import React from 'react';
import { useApp } from '../../hooks/useApp';
import PublicShell from '../../components/layouts/PublicShell';

export default function RoleSelection() {
  const { roles, chooseRole } = useApp();
  return (
    <PublicShell>
      <section className="roles-page">
        <div className="roles-heading">
          <h1>Select Your Role</h1>
          <p>Choose the administrative context to continue to your dashboard.<br />Access permissions are strictly tied to your selected role.</p>
        </div>
        <div className="role-grid">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <button className="role-card" key={role.id} type="button" onClick={() => chooseRole(role.id)}>
                <span className={`role-icon ${role.tone}`}>
                  <Icon size={26} />
                </span>
                <strong>{role.name}</strong>
                <span>{role.description}</span>
              </button>
            );
          })}
        </div>
        <div className="secure-strip">
          <strong>SECURE INFRASTRUCTURE</strong>
          <span>Authenticated Session • Encrypted Portal</span>
        </div>
      </section>
    </PublicShell>
  );
}
