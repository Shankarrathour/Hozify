import React from 'react';

export default function KpiCard({ title, value, trend, icon: Icon, positive, footer, action, negative }) {
  return (
    <div className={footer ? 'kpi-card subtle' : 'kpi-card'}>
      <div>
        <span>{title}</span>
        <strong className={negative ? 'red' : ''}>{value}</strong>
        {trend && <em className={positive ? 'up' : 'down'}>↗ {trend}</em>}
        {footer === 'progress' && <div className="progress"><span /></div>}
        {footer && footer !== 'progress' && <small>{footer}</small>}
        {action && <button type="button">{action}</button>}
      </div>
      {Icon && <span className="kpi-icon"><Icon size={24} /></span>}
    </div>
  );
}
