import React, { useState } from 'react';
import { Plus, Download, SlidersHorizontal, MoreVertical, ChevronLeft, ChevronRight, Star, MessageSquare, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import AdminShell from '../../components/layouts/AdminShell';

const mockReviews = [
  { id: 'REV-091', customer: 'Alice Cooper', service: 'Premium Cleaning', branch: 'Downtown Hub', rating: 5, comment: 'Excellent service, highly recommended!', date: '2023-10-25', status: 'PUBLISHED', statusBg: '#ecfdf5', statusColor: '#059669' },
  { id: 'REV-092', customer: 'John Doe', service: 'Equipment Repair', branch: 'Riverview North', rating: 4, comment: 'Good work but arrived a bit late.', date: '2023-10-24', status: 'PUBLISHED', statusBg: '#ecfdf5', statusColor: '#059669' },
  { id: 'REV-093', customer: 'Emma Watson', service: 'Pest Control', branch: 'Liberty Peak', rating: 2, comment: 'Issue was not fully resolved.', date: '2023-10-23', status: 'FLAGGED', statusBg: '#fee2e2', statusColor: '#ef4444' },
  { id: 'REV-094', customer: 'Robert Stark', service: 'Security Audit', branch: 'East Side Depot', rating: 5, comment: 'Very thorough and professional.', date: '2023-10-22', status: 'PUBLISHED', statusBg: '#ecfdf5', statusColor: '#059669' },
  { id: 'REV-095', customer: 'Sarah Connor', service: 'Express Delivery', branch: 'Pacific Shore Line', rating: 3, comment: 'Average experience.', date: '2023-10-21', status: 'PENDING', statusBg: '#fef3c7', statusColor: '#d97706' },
];

export default function BranchReviews() {
  const { navigate } = useApp();
  const [search, setSearch] = useState('');

  const filteredReviews = mockReviews.filter(r =>
    r.customer.toLowerCase().includes(search.toLowerCase()) ||
    r.comment.toLowerCase().includes(search.toLowerCase()) ||
    r.branch.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminShell
      activeTab="Branch Management"
      headerTitle="Branch Reviews"
      searchPlaceholder="Search reviews..."
    >
      <div className="branch-inventory-container">
        {/* Page Header */}
        <div className="partners-page-header">
          <div>
            <h1 className="page-title">Branch Reviews & Ratings</h1>
            <p className="page-subtitle">Monitor customer satisfaction, feedback, and branch reputation.</p>
          </div>
          <div className="partners-header-buttons">
            <button className="primary-action-btn font-bold" style={{ height: '36px' }}>
              <MessageSquare size={14} style={{ marginRight: '4px' }} />
              <span>Request Review</span>
            </button>
            <button className="secondary-action-btn font-bold" type="button" style={{ height: '36px' }}>
              <Download size={14} style={{ marginRight: '4px' }} />
              <span>Export Report</span>
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
              <span>Total Reviews</span>
              <span>💬</span>
            </span>
            <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', margin: '6px 0' }}>8,420</strong>
            <span style={{ fontSize: '11px', color: '#10b981', fontWeight: '700' }}>+120 this week</span>
          </div>

          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>Avg Rating</span>
              <span>⭐</span>
            </span>
            <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', margin: '6px 0' }}>4.7</strong>
            <div style={{ height: '4px', background: '#eab308', borderRadius: '2px', marginTop: '4px' }} />
          </div>

          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>Positive (4-5⭐)</span>
              <span>👍</span>
            </span>
            <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', margin: '6px 0' }}>82%</strong>
            <div style={{ height: '4px', background: '#10b981', borderRadius: '2px', marginTop: '4px' }} />
          </div>

          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>Negative (1-2⭐)</span>
              <span>👎</span>
            </span>
            <strong style={{ display: 'block', fontSize: '22px', color: 'var(--text)', margin: '6px 0' }}>8%</strong>
            <div style={{ height: '4px', background: '#ef4444', borderRadius: '2px', marginTop: '4px' }} />
          </div>

          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>Highest Rated</span>
              <span>🏆</span>
            </span>
            <strong className="truncate-text" style={{ fontSize: '15px', color: '#4f46e5', margin: '6px 0', fontWeight: '800' }}>Downtown Hub</strong>
            <span className="truncate-text" style={{ fontSize: '11px', color: 'var(--muted)' }}>4.9 Avg Rating</span>
          </div>

          <div className="branch-kpi-card">
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
              <span>Needs Attention</span>
              <span>⚠️</span>
            </span>
            <strong className="truncate-text" style={{ fontSize: '15px', color: '#ef4444', margin: '6px 0', fontWeight: '800' }}>Liberty Peak</strong>
            <span className="truncate-text" style={{ fontSize: '11px', color: '#ef4444', fontWeight: '700' }}>3.2 Avg Rating</span>
          </div>
        </section>

        {/* Main Table Panel */}
        <section className="panel partner-directory-panel" style={{ padding: '24px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '0' }}>
              Recent Reviews
            </h2>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div className="dash-search" style={{ width: '220px', margin: 0, height: '32px' }}>
                <input
                  placeholder="Search customer, comment..."
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
                  <th>DATE</th>
                  <th>CUSTOMER</th>
                  <th>BRANCH</th>
                  <th>SERVICE</th>
                  <th>RATING</th>
                  <th style={{ width: '30%' }}>COMMENT</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredReviews.map((row) => (
                  <tr key={row.id}>
                    <td style={{ color: 'var(--muted)' }}>{row.date}</td>
                    <td style={{ color: 'var(--text)', fontWeight: '700' }}>{row.customer}</td>
                    <td style={{ color: 'var(--text)' }}>{row.branch}</td>
                    <td style={{ color: 'var(--muted)' }}>{row.service}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '2px' }}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} fill={i < row.rating ? '#eab308' : '#e2e8f0'} stroke={i < row.rating ? '#eab308' : '#e2e8f0'} />
                        ))}
                      </div>
                    </td>
                    <td style={{ color: 'var(--text)', fontSize: '12px' }}>
                      <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '250px' }}>
                        {row.comment}
                      </div>
                    </td>
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

            {filteredReviews.length === 0 && (
              <div style={{ padding: '40px', textAlign: 'center', color: 'var(--muted)', fontSize: '13px' }}>
                No reviews found matching your criteria.
              </div>
            )}
          </div>

          <div className="directory-table-footer" style={{ marginTop: '16px' }}>
            <span className="footer-results-text">Showing {filteredReviews.length} of 8,420 reviews</span>
            <div className="pagination-wrap">
              <button className="pag-nav-btn" type="button" disabled>
                <ChevronLeft size={16} />
              </button>
              <button className="pag-num-btn active" type="button">1</button>
              <button className="pag-num-btn" type="button">2</button>
              <button className="pag-num-btn" type="button">3</button>
              <span style={{ margin: '0 4px', color: 'var(--muted)' }}>...</span>
              <button className="pag-num-btn" type="button">168</button>
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
