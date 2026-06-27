import React from 'react';

export default function KpiCard({
  title,
  value,
  trend,
  icon: Icon,
  positive,
  footer,
  action,
  negative,
  topLabel,
  topLabelClass
}) {
  return (
    <div className={footer ? 'kpi-card subtle' : 'kpi-card'}>
      <div className="kpi-card-left">
        <span className="kpi-title">{title}</span>
        <strong className={`kpi-value ${negative ? 'red' : ''}`}>{value}</strong>
        {trend && <em className={positive ? 'up' : 'down'}>↗ {trend}</em>}
        {footer === 'progress' && <div className="progress"><span /></div>}
        {footer && footer !== 'progress' && <small>{footer}</small>}
        {action && <button type="button">{action}</button>}
      </div>
      <div className="kpi-card-right">
        {topLabel && <span className={`kpi-top-label ${topLabelClass || ''}`}>{topLabel}</span>}
        {Icon && <span className="kpi-icon"><Icon size={24} /></span>}
      </div>
    </div>
  );
}
