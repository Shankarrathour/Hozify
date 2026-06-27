import React from 'react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';

export default function BusinessHeaderTabs({ activeTab }) {
  const { navigate } = useApp();

  const tabs = [
    { label: 'Directory', route: ROUTES.business },
    { label: 'Compliance', route: ROUTES.businessApproval },
    { label: 'Risk Management', route: ROUTES.businessRisk },
    { label: 'Taxonomy', route: ROUTES.businessTaxonomy }
  ];

  return (
    <div style={{ display: 'flex', gap: '8px', background: '#f1f5f9', padding: '4px', borderRadius: '6px', fontSize: '11px', fontWeight: '700' }}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.label;
        return (
          <button
            key={tab.label}
            onClick={() => tab.route !== '#' && navigate(tab.route)}
            style={{
              border: 'none',
              padding: '4px 10px',
              background: isActive ? '#fff' : 'transparent',
              color: isActive ? '#0f172a' : 'var(--muted)',
              borderRadius: '4px',
              boxShadow: isActive ? '0 1px 3px rgba(0,0,0,0.05)' : 'none',
              cursor: tab.route !== '#' ? 'pointer' : 'default',
              outline: 'none',
              transition: 'all 0.15s ease'
            }}
            type="button"
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
