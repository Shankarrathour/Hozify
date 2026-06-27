import React from 'react';
import { Megaphone, Bell, ShieldCheck, CircleHelp } from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';

export default function QuickActions() {
  const { navigate } = useApp();

  return (
    <div className="quick-panel">
      <h2>Quick Actions</h2>
      <p>Manage operations efficiently</p>
      <div className="quick-grid">
        <button type="button" onClick={() => navigate(ROUTES.banners)}>
          <Megaphone size={24} />
          Create Banner
        </button>
        <button type="button" onClick={() => navigate(ROUTES.notifications)}>
          <Bell size={24} />
          Send Push
        </button>
        <button type="button" onClick={() => navigate(ROUTES.kyc)}>
          <ShieldCheck size={24} />
          Review KYC
        </button>
        <button type="button" onClick={() => navigate(ROUTES.support)}>
          <CircleHelp size={24} />
          Review Ticket
        </button>
      </div>
    </div>
  );
}
