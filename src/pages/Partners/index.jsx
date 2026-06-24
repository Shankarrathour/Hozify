import React, { useState } from 'react';
import {
  Users,
  CheckSquare,
  Clock,
  AlertTriangle,
  Star,
  Landmark,
  Download,
  Layers,
  MoreVertical,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import KpiCard from '../../features/dashboard/KpiCard';
import AdminShell from '../../components/layouts/AdminShell';

// Render styled logos directly using inline SVGs to match the Figma mockups pixel-perfectly
function PartnerLogo({ style }) {
  if (style === 'nexus') {
    return (
      <svg className="partner-logo-svg" width="32" height="32" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="6" fill="#232526" />
        <line x1="8" y1="11" x2="24" y2="11" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="8" y1="16" x2="24" y2="16" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="8" y1="21" x2="24" y2="21" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (style === 'swift') {
    return (
      <svg className="partner-logo-svg" width="32" height="32" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="6" fill="#0b0f19" />
        <circle cx="16" cy="16" r="6" fill="none" stroke="#38bdf8" strokeWidth="2" />
        <circle cx="16" cy="16" r="2" fill="#38bdf8" />
      </svg>
    );
  }
  if (style === 'global') {
    return (
      <svg className="partner-logo-svg" width="32" height="32" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="6" fill="#0d1b15" />
        <circle cx="16" cy="16" r="8" fill="none" stroke="#10b981" strokeWidth="2" />
        <path d="M10 13 A 6 6 0 0 0 22 13" fill="none" stroke="#10b981" strokeWidth="1.5" />
        <path d="M10 19 A 6 6 0 0 1 22 19" fill="none" stroke="#10b981" strokeWidth="1.5" />
      </svg>
    );
  }
  if (style === 'metro') {
    return (
      <svg className="partner-logo-svg" width="32" height="32" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="6" fill="#111827" />
        <line x1="6" y1="26" x2="26" y2="6" stroke="#f97316" strokeWidth="4.5" strokeLinecap="round" />
        <circle cx="9" cy="9" r="2.5" fill="#ffffff" />
      </svg>
    );
  }
  return (
    <div className="partner-logo-placeholder">
      <span>P</span>
    </div>
  );
}

const partnersList = [
  {
    id: '#PRT-9021',
    name: 'Nexus Logistics',
    established: 2018,
    owner: 'Marcus Thorne',
    logoStyle: 'nexus',
    type: 'ISP',
    city: 'Chicago, IL',
    rating: 4.9,
    wallet: '$12,450.00',
    status: 'Active'
  },
  {
    id: '#PRT-7842',
    name: 'Swift Delivery Co',
    established: 2021,
    owner: 'Elena Rodriguez',
    logoStyle: 'swift',
    type: 'BSP',
    city: 'Austin, TX',
    rating: 4.7,
    wallet: '$5,820.00',
    status: 'Pending'
  },
  {
    id: '#PRT-5510',
    name: 'Global Retail Solutions',
    established: 2015,
    owner: 'David Chen',
    logoStyle: 'global',
    type: 'Seller',
    city: 'Seattle, WA',
    rating: 4.2,
    wallet: '$22,900.00',
    status: 'Suspended'
  },
  {
    id: '#PRT-1123',
    name: 'Metro Freight Systems',
    established: 2019,
    owner: 'Sarah Jenkins',
    logoStyle: 'metro',
    type: 'ISP',
    city: 'Denver, CO',
    rating: 4.8,
    wallet: '$3,150.00',
    status: 'Active'
  }
];

export default function Partners() {
  const { navigate, setCurrentPartnerId } = useApp();
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const handlePartnerClick = (partner) => {
    // Save the clicked partner context (use fixed ID to showcase the precise detailed mockup)
    setCurrentPartnerId(partner.id);
    navigate(ROUTES.partnerDetails);
  };



  const filteredPartners = partnersList.filter((p) => {
    const matchesFilter = filter === 'All' || p.status === filter;
    const matchesSearch = 
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toLowerCase().includes(search.toLowerCase()) ||
      p.city.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const kpiCardsData = [
    { title: 'Total Partners', value: '1,284', topLabel: '+4%', topLabelClass: 'green-text trend-icon', icon: Users },
    { title: 'Active Partners', value: '1,102', topLabel: 'Active', topLabelClass: 'gray-badge', icon: CheckSquare },
    { title: 'Pending Approvals', value: '45', topLabel: '12 New', topLabelClass: 'orange-badge', icon: Clock },
    { title: 'Suspended', value: '28', topLabel: '-2%', topLabelClass: 'red-text trend-icon-down', icon: AlertTriangle },
    { title: 'Top Rated', value: '210', topLabel: '4.8 Avg', topLabelClass: 'yellow-badge', icon: Star },
    { title: 'Settlement Pending', value: '$42k', icon: Landmark }
  ];

  return (
    <AdminShell
      activeTab="Partners"
      searchPlaceholder="Search partners, IDs, or cities..."
      searchValue={search}
      onSearchChange={setSearch}
    >
      <div className="partners-page-header">
        <div>
          <h1 className="page-title">Partner Management</h1>
          <p className="page-subtitle">Manage and monitor service providers across the HOZIFY network.</p>
        </div>
        <div className="partners-header-buttons">
          <button className="secondary-action-btn" type="button">
            <Download size={16} />
            <span>Export</span>
          </button>
          <button className="secondary-action-btn" type="button">
            <Layers size={16} />
            <span>Bulk Actions</span>
          </button>
        </div>
      </div>

      <section className="kpi-grid partners-kpis">
        {kpiCardsData.map((kpi, idx) => (
          <KpiCard key={idx} {...kpi} />
        ))}
      </section>

      <section className="panel partner-directory-panel">
        <div className="directory-panel-header">
          <h2>Partner Directory</h2>
          <div className="segmented-tab-filter">
            <button
              className={filter === 'All' ? 'active' : ''}
              onClick={() => setFilter('All')}
              type="button"
            >
              All
            </button>
            <button
              className={filter === 'Active' ? 'active' : ''}
              onClick={() => setFilter('Active')}
              type="button"
            >
              Active
            </button>
            <button
              className={filter === 'Pending' ? 'active' : ''}
              onClick={() => setFilter('Pending')}
              type="button"
            >
              Pending
            </button>
          </div>
        </div>

        <div className="table-wrap">
          <table className="partner-table">
            <thead>
              <tr>
                <th>PARTNER ID</th>
                <th>BUSINESS NAME</th>
                <th>OWNER</th>
                <th>TYPE</th>
                <th>CITY</th>
                <th>RATING</th>
                <th>WALLET BALANCE</th>
                <th>STATUS</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredPartners.map((partner) => (
                <tr key={partner.id} className="partner-row-clickable" onClick={() => handlePartnerClick(partner)}>
                  <td className="partner-id-cell">
                    <strong>{partner.id}</strong>
                  </td>
                  <td className="partner-name-cell">
                    <div className="partner-info-wrap">
                      <PartnerLogo style={partner.logoStyle} />
                      <div className="partner-name-meta">
                        <span className="partner-name-txt">{partner.name}</span>
                        <span className="partner-est-txt">Established {partner.established}</span>
                      </div>
                    </div>
                  </td>
                  <td className="partner-owner-cell">{partner.owner}</td>
                  <td>
                    <span className={`partner-type-badge ${partner.type.toLowerCase()}`}>
                      {partner.type}
                    </span>
                  </td>
                  <td>{partner.city}</td>
                  <td className="partner-rating-cell">
                    <Star size={14} fill="#f59e0b" stroke="#f59e0b" />
                    <span>{partner.rating}</span>
                  </td>
                  <td className="partner-balance-cell">{partner.wallet}</td>
                  <td>
                    <span className={`status-badge ${partner.status.toLowerCase()}`}>
                      {partner.status}
                    </span>
                  </td>
                  <td className="partner-actions-cell" onClick={(e) => e.stopPropagation()}>
                    <button className="table-row-action-btn" type="button">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredPartners.length === 0 && (
                <tr>
                  <td colSpan="9" style={{ textAlign: 'center', padding: '32px' }}>
                    No partners found matching the criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="directory-table-footer">
          <span className="footer-results-text">Showing 1-4 of 1,284 results</span>
          <div className="pagination-wrap">
            <button className="pag-nav-btn" type="button" disabled>
              <ChevronLeft size={16} />
            </button>
            <button className="pag-num-btn active" type="button">1</button>
            <button className="pag-num-btn" type="button">2</button>
            <button className="pag-num-btn" type="button">3</button>
            <span className="pag-ellipsis">...</span>
            <button className="pag-num-btn" type="button">321</button>
            <button className="pag-nav-btn" type="button">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <footer className="partner-page-bottom-strip">
        <div className="strip-left">
          <span className="status-dot-green">●</span>
          <span>SYSTEM ONLINE</span>
          <span className="vertical-sep">|</span>
          <span>VERSION 2.4.0-ENTERPRISE</span>
        </div>
        <div className="strip-right">
          <span>LAST SYNC: 2 MINS AGO</span>
        </div>
      </footer>
    </AdminShell>
  );
}
