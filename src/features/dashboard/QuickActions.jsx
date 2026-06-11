import React from 'react';
import { Megaphone, Bell, ShieldCheck, CircleHelp } from 'lucide-react';

export default function QuickActions() {
  return (
    <div className="quick-panel">
      <h2>Quick Actions</h2>
      <p>Manage operations efficiently</p>
      <div className="quick-grid">
        <button type="button"><Megaphone size={24} />Create Banner</button>
        <button type="button"><Bell size={24} />Send Push</button>
        <button type="button"><ShieldCheck size={24} />Review KYC</button>
        <button type="button"><CircleHelp size={24} />Review Ticket</button>
      </div>
    </div>
  );
}
