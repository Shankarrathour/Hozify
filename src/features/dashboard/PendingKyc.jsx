import React from 'react';

export default function PendingKyc() {
  return (
    <div className="panel kyc-panel">
      <div className="widget-title"><h2>Pending KYC</h2><span>8 New</span></div>
      {[
        ['Urban Cleaners LLC', 'Business Verification', 'UC'],
        ['Michael Scott', 'Identity Documents', 'MS'],
        ['Apex Maintenance', 'Insurance Certificate', 'AM']
      ].map(([name, label, initials]) => (
        <div className="kyc-row" key={name}>
          <span>{initials}</span>
          <div><strong>{name}</strong><small>{label}</small></div>
        </div>
      ))}
    </div>
  );
}
