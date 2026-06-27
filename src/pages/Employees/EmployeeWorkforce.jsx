import React, { useState } from 'react';
import {
  Download,
  Plus,
  SlidersHorizontal,
  Star,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Filter
} from 'lucide-react';

const initialWorkforce = [
  {
    id: 'HZ - 9821',
    name: 'Marcus Thorne',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
    phone: '+1 (555) 012-9842',
    branch: 'New York HQ',
    city: 'Manhattan',
    rating: '4.9',
    bookings: '214',
    availability: '94.2%',
    kyc: 'VERIFIED',
    kycType: 'verified',
    status: 'Active',
    statusClass: 'active'
  },
  {
    id: 'HZ - 8441',
    name: 'Sienna Blake',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80',
    phone: '+44 20 7946 0148',
    branch: 'London East',
    city: 'Canary Wharf',
    rating: '4.7',
    bookings: '156',
    availability: '81.5%',
    kyc: 'PENDING',
    kycType: 'pending',
    status: 'On Leave',
    statusClass: 'pending'
  },
  {
    id: 'HZ - 7129',
    name: 'Julian Vane',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80',
    phone: '+49 30 1234567',
    branch: 'Berlin Center',
    city: 'Mitte',
    rating: '4.2',
    bookings: '89',
    availability: '44.0%',
    kyc: 'HIGH RISK',
    kycType: 'high-risk',
    status: 'Suspended',
    statusClass: 'suspended'
  },
  {
    id: 'HZ - 6002',
    name: 'Elena Kostic',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80',
    phone: '+81 3 1234 5678',
    branch: 'Tokyo Hub',
    city: 'Shibuya',
    rating: '5.0',
    bookings: '432',
    availability: '100%',
    kyc: 'VERIFIED',
    kycType: 'verified',
    status: 'Active',
    statusClass: 'active'
  }
];

export default function EmployeeWorkforce({ onSelectEmployee }) {
  const [branchFilter, setBranchFilter] = useState('All Branches');
  const [cityFilter, setCityFilter] = useState('All Cities');
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [kycFilter, setKycFilter] = useState('All Status');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle local filter logic
  const filteredList = initialWorkforce.filter(emp => {
    const matchesBranch = branchFilter === 'All Branches' || emp.branch.includes(branchFilter);
    const matchesCity = cityFilter === 'All Cities' || emp.city.includes(cityFilter);
    const matchesKyc = kycFilter === 'All Status' || emp.kyc === kycFilter.toUpperCase();
    const matchesSearch = emp.name.toLowerCase().includes(searchQuery.toLowerCase()) || emp.id.includes(searchQuery);

    return matchesBranch && matchesCity && matchesKyc && matchesSearch;
  });

  return (
    <div className="employee-workforce-flow">
      {/* Title Header */}
      <div className="partners-page-header">
        <div>
          <h1 className="page-title">Employee Workforce</h1>
          <p className="page-subtitle">Manage, filter, and track performance of 1,240 registered staff members.</p>
        </div>
        <div className="partners-header-buttons">
          <button className="secondary-action-btn" type="button">
            <Download size={16} />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Filter Options Controls Panel */}
      <div className="panel" style={{ padding: '16px 20px', marginBottom: '24px', background: '#fff', borderRadius: '8px', border: '1px solid var(--line)' }}>
        <div className="fraud-top-grid" style={{ gap: '14px', alignItems: 'center' }}>
          
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', marginBottom: '6px', textTransform: 'uppercase' }}>Branch Office</label>
            <select
              style={{ width: '100%', height: '38px', border: '1px solid var(--line)', borderRadius: '6px', padding: '0 10px', fontSize: '13px', background: '#fff', fontWeight: '700' }}
              value={branchFilter}
              onChange={(e) => setBranchFilter(e.target.value)}
              aria-label="Select Branch Office"
            >
              <option value="All Branches">All Branches</option>
              <option value="New York HQ">New York HQ</option>
              <option value="London East">London East</option>
              <option value="Berlin Center">Berlin Center</option>
              <option value="Tokyo Hub">Tokyo Hub</option>
            </select>
          </div>

          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', marginBottom: '6px', textTransform: 'uppercase' }}>Metropolitan City</label>
            <select
              style={{ width: '100%', height: '38px', border: '1px solid var(--line)', borderRadius: '6px', padding: '0 10px', fontSize: '13px', background: '#fff', fontWeight: '700' }}
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              aria-label="Select Metropolitan City"
            >
              <option value="All Cities">All Cities</option>
              <option value="Manhattan">Manhattan</option>
              <option value="Canary Wharf">Canary Wharf</option>
              <option value="Mitte">Mitte</option>
              <option value="Shibuya">Shibuya</option>
            </select>
          </div>

          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', marginBottom: '6px', textTransform: 'uppercase' }}>Employee Type</label>
            <select
              style={{ width: '100%', height: '38px', border: '1px solid var(--line)', borderRadius: '6px', padding: '0 10px', fontSize: '13px', background: '#fff', fontWeight: '700' }}
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              aria-label="Select Employee Type"
            >
              <option value="All Types">All Types</option>
              <option value="Field Tech">Field Tech</option>
              <option value="Operations">Operations</option>
              <option value="Support">Support</option>
            </select>
          </div>

          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', marginBottom: '6px', textTransform: 'uppercase' }}>KYC Verification</label>
            <select
              style={{ width: '100%', height: '38px', border: '1px solid var(--line)', borderRadius: '6px', padding: '0 10px', fontSize: '13px', background: '#fff', fontWeight: '700' }}
              value={kycFilter}
              onChange={(e) => setKycFilter(e.target.value)}
              aria-label="Select KYC status"
            >
              <option value="All Status">All Status</option>
              <option value="Verified">Verified</option>
              <option value="Pending">Pending</option>
              <option value="High Risk">High Risk</option>
            </select>
          </div>

          <button className="secondary-action-btn" style={{ height: '38px', alignSelf: 'flex-end', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '40px', padding: 0 }} aria-label="Toggle filters layout">
            <Filter size={18} />
          </button>
        </div>
      </div>

      {/* Directory Table Panel */}
      <section className="panel partner-directory-panel" style={{ marginBottom: '24px' }}>
        <div className="table-wrap">
          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="partner-table">
            <thead>
              <tr>
                <th>EMPLOYEE ID</th>
                <th>NAME & AVATAR</th>
                <th>CONTACT INFO</th>
                <th>BRANCH / CITY</th>
                <th>RATING</th>
                <th>BOOKINGS</th>
                <th>AVAILABILITY</th>
                <th>KYC</th>
                <th>STATUS</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredList.map((emp) => (
                <tr
                  key={emp.id}
                  className="partner-row-clickable"
                  onClick={() => onSelectEmployee(emp)}
                >
                  <td className="partner-id-cell">
                    <strong>{emp.id}</strong>
                  </td>
                  <td className="partner-name-cell">
                    <div className="partner-info-wrap">
                      <img src={emp.avatar} alt={emp.name} style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} />
                      <strong className="partner-name-txt" style={{ fontSize: '14px' }}>{emp.name}</strong>
                    </div>
                  </td>
                  <td className="partner-owner-cell" style={{ fontSize: '13px', color: 'var(--muted)' }}>
                    {emp.phone}
                  </td>
                  <td>
                    <div className="partner-name-meta">
                      <strong className="partner-name-txt" style={{ fontSize: '13px' }}>{emp.branch}</strong>
                      <span className="partner-est-txt" style={{ fontSize: '11px' }}>{emp.city}</span>
                    </div>
                  </td>
                  <td className="partner-rating-cell" style={{ fontWeight: '700' }}>
                    <Star size={13} fill="#4f46e5" stroke="#4f46e5" style={{ marginRight: '4px' }} />
                    <span style={{ color: '#4f46e5' }}>{emp.rating}</span>
                  </td>
                  <td>
                    <strong>{emp.bookings}</strong>
                  </td>
                  <td>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '800',
                        color: emp.availability.startsWith('100') ? '#059669' : emp.availability.startsWith('44') ? '#ef4444' : '#d97706',
                        background: emp.availability.startsWith('100') ? '#ecfdf5' : emp.availability.startsWith('44') ? '#fee2e2' : '#fef3c7',
                        padding: '3px 6px',
                        borderRadius: '4px'
                      }}
                    >
                      {emp.availability}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`status-badge`}
                      style={{
                        fontSize: '10px',
                        fontWeight: '800',
                        color: emp.kycType === 'verified' ? '#059669' : emp.kycType === 'pending' ? '#d97706' : '#ef4444',
                        background: emp.kycType === 'verified' ? '#ecfdf5' : emp.kycType === 'pending' ? '#fef3c7' : '#fee2e2',
                        border: 'none'
                      }}
                    >
                      {emp.kyc}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '700' }}>
                      <span
                        className="priority-bullet-dot"
                        style={{
                          background: emp.statusClass === 'active' ? '#10b981' : emp.statusClass === 'pending' ? '#f59e0b' : '#ef4444'
                        }}
                      />
                      <span>{emp.status}</span>
                    </div>
                  </td>
                  <td className="partner-actions-cell" onClick={(e) => e.stopPropagation()}>
                    <button className="table-row-action-btn" type="button" aria-label="More actions">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredList.length === 0 && (
                <tr>
                  <td colSpan="10" style={{ textAlign: 'center', padding: '32px' }}>
                    No staff records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table></div>
        </div>

        {/* Pager Footer */}
        <div className="directory-table-footer">
          <span className="footer-results-text">Showing 1-4 of 1,240 employees</span>
          <div className="pagination-wrap">
            <button className="pag-nav-btn" type="button" disabled>
              <ChevronLeft size={16} />
            </button>
            <button className="pag-num-btn active" type="button">1</button>
            <button className="pag-num-btn" type="button">2</button>
            <button className="pag-num-btn" type="button">3</button>
            <span className="pag-ellipsis">...</span>
            <button className="pag-num-btn" type="button">83</button>
            <button className="pag-nav-btn" type="button">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Bottom widgets with sparklines */}
      <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '20px' }}>
        {/* Utilization */}
        <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', minHeight: '120px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Workforce Utilization</span>
            <span style={{ fontSize: '11px', fontWeight: '800', color: '#10b981', background: '#ecfdf5', padding: '2px 6px', borderRadius: '4px' }}>+4.2%</span>
          </div>
          <strong style={{ fontSize: '26px', margin: '2px 0 10px' }}>88.4%</strong>
          <div style={{ width: '100%', height: '30px', marginTop: 'auto' }}>
            <svg width="100%" height="100%" viewBox="0 0 300 30" preserveAspectRatio="none">
              <path d="M 0 25 Q 75 15 150 20 T 300 5" fill="none" stroke="#4f46e5" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Avg Rating */}
        <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', minHeight: '120px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Avg Employee Rating</span>
            <span style={{ fontSize: '11px', fontWeight: '800', color: '#10b981', background: '#ecfdf5', padding: '2px 6px', borderRadius: '4px' }}>+0.1</span>
          </div>
          <strong style={{ fontSize: '26px', margin: '2px 0 10px' }}>4.65</strong>
          <div style={{ width: '100%', height: '30px', marginTop: 'auto' }}>
            <svg width="100%" height="100%" viewBox="0 0 300 30" preserveAspectRatio="none">
              <path d="M 0 15 Q 75 16 150 14 T 300 10" fill="none" stroke="#4f46e5" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Pending KYC */}
        <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', minHeight: '120px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pending KYC Requests</span>
            <span style={{ fontSize: '11px', fontWeight: '800', color: '#ef4444', background: '#fee2e2', padding: '2px 6px', borderRadius: '4px' }}>+12 today</span>
          </div>
          <strong style={{ fontSize: '26px', margin: '2px 0 10px' }}>48</strong>
          <div style={{ width: '100%', height: '30px', marginTop: 'auto' }}>
            <svg width="100%" height="100%" viewBox="0 0 300 30" preserveAspectRatio="none">
              <path d="M 0 25 Q 75 20 150 23 T 300 8" fill="none" stroke="#ef4444" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
}
