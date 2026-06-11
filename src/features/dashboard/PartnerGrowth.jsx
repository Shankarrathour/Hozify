import React from 'react';

export default function PartnerGrowth() {
  return (
    <div className="panel growth-panel">
      <h2>Partner Growth</h2>
      <div className="mini-bars">
        {[38, 58, 34, 78, 68, 92, 82].map((height, index) => <span key={index} style={{ height: `${height}%` }} className={index === 6 ? 'deep' : ''} />)}
      </div>
      <div className="growth-footer"><span>New this week:</span><strong>+128 Partners</strong></div>
    </div>
  );
}
