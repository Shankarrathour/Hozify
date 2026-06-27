import React, { useState } from 'react';
import { Plus, Download, SlidersHorizontal, MoreVertical, ChevronLeft, ChevronRight, Calendar, DollarSign, Activity } from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import AdminShell from '../../components/layouts/AdminShell';

const mockBookings = [
  { id: 'BKG-9921', customer: 'Alice Cooper', service: 'Premium Cleaning', branch: 'Downtown Hub', date: '2023-10-25 14:00', amount: '$120.00', status: 'COMPLETED', statusBg: '#ecfdf5', statusColor: '#059669' },
  { id: 'BKG-9922', customer: 'John Doe', service: 'Equipment Repair', branch: 'Riverview North', date: '2023-10-25 15:30', amount: '$250.00', status: 'IN PROGRESS', statusBg: '#eff6ff', statusColor: '#3b82f6' },
  { id: 'BKG-9923', customer: 'Emma Watson', service: 'Pest Control', branch: 'Liberty Peak', date: '2023-10-26 09:00', amount: '$85.00', status: 'PENDING', statusBg: '#fef3c7', statusColor: '#d97706' },
  { id: 'BKG-9924', customer: 'Robert Stark', service: 'Security Audit', branch: 'East Side Depot', date: '2023-10-26 11:00', amount: '$500.00', status: 'PENDING', statusBg: '#fef3c7', statusColor: '#d97706' },
  { id: 'BKG-9925', customer: 'Sarah Connor', service: 'Express Delivery', branch: 'Pacific Shore Line', date: '2023-10-24 16:45', amount: '$45.00', status: 'CANCELLED', statusBg: '#fee2e2', statusColor: '#ef4444' },
];

export default function BranchBookings() {
  const { navigate } = useApp();
  const [search, setSearch] = useState('');

  const filteredBookings = mockBookings.filter(b =>
    b.id.toLowerCase().includes(search.toLowerCase()) ||
    b.customer.toLowerCase().includes(search.toLowerCase()) ||
    b.service.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminShell
      activeTab="Branch Management"
      headerTitle="Branch Bookings"
      searchPlaceholder="Search bookings..."
    >
      <div className="branch-inventory-container">
        {/* Page Header */}
        <div className="partners-page-header">
          <div>
            <h1 className="page-title">Branch Bookings</h1>
            <p className="page-subtitle">Track service requests, scheduling, and revenue across branches.</p>
          </div>
          <div className="partners-header-buttons">
            <button className="primary-action-btn font-bold" style={{ height: '36px' }}>
              <Plus size={14} style={{ marginRight: '4px' }} />
              <span>Create Booking</span>
            </button>
            <button className="secondary-action-btn font-bold" type="button" style={{ height: '36px' }}>
              <Download size={14} style={{ marginRight: '4px' }} />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Top Section KPIs Row */}
        <style>{`
          .branch-kpi-grid {
            display: grid;
            gap: 16px;
            margin-bottom: 24px;
          }
          @media (min-width: 1024px) { .branch-kpi-grid { grid-template-columns: repeat(6, 1fr); } }
          @media (min-width: 768px) and (max-width: 1023px) { .branch-kpi-grid { grid-template-columns: repeat(3, 1fr); } }
          @media (max-width: 767px) { .branch-kpi-grid { grid-template-columns: repeat(2, 1fr); } }
          .branch-kpi-card {
            padding: 16px;
            background: #fff;
            border: 1px solid var(--line);
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 105px;
          }
          .branch-kpi-card .truncate-text {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: block;
          }
        `}</style>
        <section className="branch-kpi-grid">
          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>Total Bookings</span>
              <span>📅</span>
            </span>
            <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', margin: '6px 0' }}>14,250</strong>
            <span style={{ fontSize: '11px', color: '#10b981', fontWeight: '700' }}>+15% MTD</span>
          </div>

          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>Today's Bookings</span>
              <span>🕒</span>
            </span>
            <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', margin: '6px 0' }}>342</strong>
            <div style={{ height: '4px', background: '#3b82f6', borderRadius: '2px', marginTop: '4px' }} />
          </div>

          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>Pending</span>
              <span>⏳</span>
            </span>
            <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', margin: '6px 0' }}>85</strong>
            <div style={{ height: '4px', background: '#f59e0b', borderRadius: '2px', marginTop: '4px' }} />
          </div>

          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>Completed</span>
              <span>✅</span>
            </span>
            <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', margin: '6px 0' }}>13,823</strong>
            <div style={{ height: '4px', background: '#10b981', borderRadius: '2px', marginTop: '4px' }} />
          </div>

          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>Revenue (MTD)</span>
              <span>💰</span>
            </span>
            <strong className="truncate-text" style={{ fontSize: '15px', color: '#059669', margin: '6px 0', fontWeight: '800' }}>$1,245,000</strong>
            <span className="truncate-text" style={{ fontSize: '11px', color: '#10b981', fontWeight: '700' }}>+8% vs last month</span>
          </div>

          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>Cancellation Rate</span>
              <span>❌</span>
            </span>
            <strong className="truncate-text" style={{ fontSize: '15px', color: '#ef4444', margin: '6px 0', fontWeight: '800' }}>2.4%</strong>
            <span className="truncate-text" style={{ fontSize: '11px', color: '#10b981', fontWeight: '700' }}>Within target limit</span>
          </div>
        </section>

        {/* Main Table Panel */}
        <section className="panel partner-directory-panel" style={{ padding: '24px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '0' }}>
              Recent Bookings
            </h2>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div className="dash-search" style={{ width: '220px', margin: 0, height: '32px' }}>
                <input
                  placeholder="Search ID, customer, service..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ fontSize: '12px', paddingLeft: '8px' }}
                />
              </div>
              <button className="secondary-action-btn" style={{ height: '32px', width: '32px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SlidersHorizontal size={14} />
              </button>
              <button className="secondary-action-btn" style={{ height: '32px', width: '32px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MoreVertical size={14} />
              </button>
            </div>
          </div>

          <div className="table-wrap">
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="partner-table">
              <thead>
                <tr>
                  <th>BOOKING ID</th>
                  <th>CUSTOMER</th>
                  <th>SERVICE</th>
                  <th>BRANCH</th>
                  <th>SCHEDULED DATE</th>
                  <th>AMOUNT</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <span style={{ color: '#4f46e5', fontWeight: '700', textDecoration: 'underline', cursor: 'pointer' }}>{row.id}</span>
                    </td>
                    <td style={{ color: 'var(--text)', fontWeight: '700' }}>{row.customer}</td>
                    <td style={{ color: 'var(--muted)' }}>{row.service}</td>
                    <td style={{ color: 'var(--text)' }}>{row.branch}</td>
                    <td style={{ color: 'var(--muted)' }}>{row.date}</td>
                    <td style={{ color: 'var(--text)', fontWeight: '800' }}>{row.amount}</td>
                    <td>
                      <span
                        style={{
                          fontSize: '9px',
                          fontWeight: '800',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          color: row.statusColor,
                          background: row.statusBg
                        }}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td>
                      <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }}>
                        <MoreVertical size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table></div>

            {filteredBookings.length === 0 && (
              <div style={{ padding: '40px', textAlign: 'center', color: 'var(--muted)', fontSize: '13px' }}>
                No bookings found matching your criteria.
              </div>
            )}
          </div>

          <div className="directory-table-footer" style={{ marginTop: '16px' }}>
            <span className="footer-results-text">Showing {filteredBookings.length} of 14,250 bookings</span>
            <div className="pagination-wrap">
              <button className="pag-nav-btn" type="button" disabled>
                <ChevronLeft size={16} />
              </button>
              <button className="pag-num-btn active" type="button">1</button>
              <button className="pag-num-btn" type="button">2</button>
              <button className="pag-num-btn" type="button">3</button>
              <span style={{ margin: '0 4px', color: 'var(--muted)' }}>...</span>
              <button className="pag-num-btn" type="button">285</button>
              <button className="pag-nav-btn" type="button">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </AdminShell>
  );
}
