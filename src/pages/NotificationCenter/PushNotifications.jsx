import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  MailOpen, 
  MousePointerClick, 
  Filter, 
  Download, 
  Search, 
  Bell, 
  HelpCircle, 
  Plus, 
  Clock, 
  Smartphone, 
  Lightbulb,
  MoreVertical,
  X,
  Check
} from 'lucide-react';

import AdminShell from '../../components/layouts/AdminShell';

export default function PushNotifications({ activeTab = 'Notification Center' }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewPushModal, setShowNewPushModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [campaigns, setCampaigns] = useState([
    { id: 1, name: 'Q4 Revenue Pulse', sentAt: 'Sent 2h ago', segment: 'Tier 1 Executives', status: 'Active', rate: '99.2%' },
    { id: 2, name: 'New Feature Announcement', sentAt: 'Sent 12h ago', segment: 'All Active Users', status: 'Completed', rate: '97.8%' },
    { id: 3, name: 'Retention Alert - V2', sentAt: 'Scheduled for Nov 24', segment: 'Risk Segment', status: 'Scheduled', rate: '-' },
    { id: 4, name: 'Weekly Performance Digest', sentAt: 'Sent 3 days ago', segment: 'Standard Tier', status: 'Completed', rate: '98.1%' },
    { id: 5, name: 'Flash Sale Reminder', sentAt: 'Sent 4 days ago', segment: 'Standard Tier', status: 'Completed', rate: '95.4%' },
    { id: 6, name: 'System Maintenance Notice', sentAt: 'Sent 5 days ago', segment: 'All Active Users', status: 'Completed', rate: '99.7%' },
  ]);

  const [newPush, setNewPush] = useState({
    name: '',
    segment: 'All Active Users',
    message: '',
    status: 'Scheduled'
  });

  const handleCreatePush = (e) => {
    e.preventDefault();
    if (!newPush.name) return;
    
    const created = {
      id: campaigns.length + 1,
      name: newPush.name,
      sentAt: newPush.status === 'Active' ? 'Sent just now' : 'Scheduled for tomorrow',
      segment: newPush.segment,
      status: newPush.status,
      rate: newPush.status === 'Active' ? '100.0%' : '-'
    };

    setCampaigns([created, ...campaigns]);
    setShowNewPushModal(false);
    setNewPush({ name: '', segment: 'All Active Users', message: '', status: 'Scheduled' });
  };

  const filteredCampaigns = campaigns.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.segment.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const itemsPerPage = 4;
  const totalPages = Math.ceil(filteredCampaigns.length / itemsPerPage);
  const paginatedCampaigns = filteredCampaigns.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <AdminShell
      activeTab={activeTab}
      brandText="HOZIFY"
      brandSubText="Enterprise Admin"
      headerTitle="Push Notifications"
      searchPlaceholder="Search notifications, segments..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 0' }}>
        
        {/* Header Title Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
              Push Notifications Dashboard
            </h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '4px 0 0' }}>
              Manage and monitor your executive-level communication channels.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button
              onClick={() => setShowNewPushModal(true)}
              style={{
                background: 'var(--primary)',
                color: '#fff',
                border: 'none',
                height: '38px',
                padding: '0 16px',
                borderRadius: '6px',
                fontWeight: '700',
                fontSize: '13px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 2px 4px rgba(37, 16, 143, 0.08)'
              }}
            >
              <Plus size={16} />
              New Push
            </button>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          
          <div className="panel" style={{ padding: '20px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', letterSpacing: '0.5px' }}>PUSH SENT</span>
              <span style={{ fontSize: '10px', fontWeight: '850', color: '#07956f', background: '#ecfdf5', padding: '2px 6px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '2px' }}>
                ↗ +12.4%
              </span>
            </div>
            <strong style={{ fontSize: '28px', fontWeight: '850', color: 'var(--text)' }}>428,902</strong>
            <div style={{ height: '3px', background: 'var(--primary)', position: 'absolute', bottom: 0, left: 0, right: 0 }} />
          </div>

          <div className="panel" style={{ padding: '20px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', letterSpacing: '0.5px' }}>DELIVERED</span>
              <span style={{ fontSize: '10px', fontWeight: '850', color: '#07956f', background: '#ecfdf5', padding: '2px 6px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '2px' }}>
                ↗ +3.1%
              </span>
            </div>
            <strong style={{ fontSize: '28px', fontWeight: '850', color: 'var(--text)' }}>98.4%</strong>
            <div style={{ height: '3px', background: '#07956f', position: 'absolute', bottom: 0, left: 0, right: 0 }} />
          </div>

          <div className="panel" style={{ padding: '20px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', letterSpacing: '0.5px' }}>OPENED</span>
              <span style={{ fontSize: '10px', fontWeight: '850', color: '#d32929', background: '#fef2f2', padding: '2px 6px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '2px' }}>
                ↘ -0.8%
              </span>
            </div>
            <strong style={{ fontSize: '28px', fontWeight: '850', color: 'var(--text)' }}>24,510</strong>
            <div style={{ height: '3px', background: '#d32929', position: 'absolute', bottom: 0, left: 0, right: 0 }} />
          </div>

          <div className="panel" style={{ padding: '20px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', letterSpacing: '0.5px' }}>CTR</span>
              <span style={{ fontSize: '10px', fontWeight: '850', color: '#07956f', background: '#ecfdf5', padding: '2px 6px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '2px' }}>
                ↗ +5.2%
              </span>
            </div>
            <strong style={{ fontSize: '28px', fontWeight: '850', color: 'var(--text)' }}>4.2%</strong>
            <div style={{ height: '3px', background: '#7c3aed', position: 'absolute', bottom: 0, left: 0, right: 0 }} />
          </div>

        </div>

        {/* Columns Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2.2fr 1fr', gap: '24px', alignItems: 'start' }}>
          
          {/* Left Table Panel */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '15px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>Recent Campaigns</h2>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ position: 'relative' }}>
                  <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
                  <input
                    type="text"
                    placeholder="Quick search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      border: '1px solid var(--line)',
                      borderRadius: '6px',
                      height: '32px',
                      padding: '0 10px 0 30px',
                      fontSize: '12px',
                      width: '180px',
                      background: '#fff'
                    }}
                  />
                </div>
                <button style={{ height: '32px', width: '32px', border: '1px solid var(--line)', background: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <Filter size={14} style={{ color: 'var(--muted)' }} />
                </button>
                <button style={{ height: '32px', width: '32px', border: '1px solid var(--line)', background: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <Download size={14} style={{ color: 'var(--muted)' }} />
                </button>
              </div>
            </div>

            <div className="table-wrap">
              <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: 'var(--soft)', borderBottom: '1px solid var(--line)' }}>
                    <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Campaign Name</th>
                    <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Audience Segment</th>
                    <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Status</th>
                    <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Delivery Rate</th>
                    <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedCampaigns.length > 0 ? (
                    paginatedCampaigns.map((c, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid var(--lavender)' }}>
                        <td style={{ padding: '16px' }}>
                          <strong style={{ display: 'block', fontWeight: '800', color: 'var(--text)' }}>{c.name}</strong>
                          <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{c.sentAt}</span>
                        </td>
                        <td style={{ padding: '16px' }}>
                          <span style={{
                            fontSize: '11px',
                            fontWeight: '750',
                            background: 'var(--soft)',
                            color: 'var(--primary)',
                            padding: '4px 10px',
                            borderRadius: '4px',
                            border: '1px solid var(--lavender)'
                          }}>
                            {c.segment}
                          </span>
                        </td>
                        <td style={{ padding: '16px' }}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '750' }}>
                            <span style={{
                              height: '8px',
                              width: '8px',
                              borderRadius: '50%',
                              background: c.status === 'Active' ? '#07956f' : c.status === 'Scheduled' ? '#7c3aed' : '#565365'
                            }} />
                            {c.status}
                          </span>
                        </td>
                        <td style={{ padding: '16px', fontWeight: '750', color: 'var(--text)' }}>{c.rate}</td>
                        <td style={{ padding: '16px', textAlign: 'right' }}>
                          <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }}>
                            <MoreVertical size={16} />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" style={{ padding: '24px', textAlign: 'center', color: 'var(--muted)' }}>
                        No campaigns found matching your query.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table></div>
            </div>

            {/* Pagination Controls */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
              <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
                Showing {Math.min(filteredCampaigns.length, (currentPage - 1) * itemsPerPage + 1)} to {Math.min(filteredCampaigns.length, currentPage * itemsPerPage)} of {filteredCampaigns.length} campaigns
              </span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => prev - 1)}
                  style={{
                    height: '32px',
                    padding: '0 12px',
                    border: '1px solid var(--line)',
                    background: '#fff',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '750',
                    cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                    opacity: currentPage === 1 ? 0.5 : 1
                  }}
                >
                  Previous
                </button>
                <button
                  disabled={currentPage >= totalPages}
                  onClick={() => setCurrentPage(prev => prev + 1)}
                  style={{
                    height: '32px',
                    padding: '0 12px',
                    border: '1px solid var(--line)',
                    background: '#fff',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '750',
                    cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer',
                    opacity: currentPage >= totalPages ? 0.5 : 1
                  }}
                >
                  Next
                </button>
              </div>
            </div>

          </div>

          {/* Right Summary Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Executive Summary Card */}
            <div className="panel" style={{ background: '#110c3c', color: '#fff', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '800', color: '#b9aede', textTransform: 'uppercase', margin: 0, letterSpacing: '0.5px' }}>
                Executive Summary
              </h3>
              <p style={{ fontSize: '12px', color: '#eee9f6', margin: 0 }}>
                Last 30 days performance
              </p>
              
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                <strong style={{ fontSize: '36px', fontWeight: '900' }}>92.4%</strong>
                <span style={{
                  fontSize: '10px',
                  fontWeight: '850',
                  background: '#07956f',
                  color: '#fff',
                  padding: '2px 8px',
                  borderRadius: '12px'
                }}>
                  Good
                </span>
              </div>

              <p style={{ fontSize: '12px', color: '#b9aede', lineHeight: '1.5', margin: 0 }}>
                Delivery efficiency is trending higher than industry benchmarks for financial services.
              </p>
            </div>

            {/* Audience Engagement Info */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                Audience Engagement
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div style={{ height: '36px', width: '36px', borderRadius: '50%', background: '#f4eff8', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Clock size={16} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)' }}>Best Send Time</span>
                    <strong style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text)' }}>Tuesdays, 09:15 AM EST</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div style={{ height: '36px', width: '36px', borderRadius: '50%', background: '#e0f2fe', color: '#0369a1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Smartphone size={16} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)' }}>Primary Platform</span>
                    <strong style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text)' }}>iOS (84.2%)</strong>
                  </div>
                </div>

              </div>

              {/* Dotted block suggestion */}
              <div style={{
                border: '1.5px dashed var(--line)',
                borderRadius: '8px',
                padding: '12px',
                background: '#faf9fc',
                display: 'flex',
                gap: '8px'
              }}>
                <Lightbulb size={14} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                <p style={{ fontSize: '11.5px', fontStyle: 'italic', color: 'var(--muted)', margin: 0, lineHeight: '1.4' }}>
                  Performance Tip: Tailoring copy for mobile executives increases CTR by 1.2%.
                </p>
              </div>

            </div>

            {/* Premium Templates Preview */}
            <div className="panel" style={{
              backgroundImage: 'linear-gradient(to bottom, rgba(17, 12, 60, 0.4), rgba(17, 12, 60, 0.95)), url("https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              padding: '48px 20px 20px',
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              gap: '6px',
              minHeight: '180px',
              position: 'relative'
            }}>
              <h3 style={{ fontSize: '14px', fontWeight: '850', color: '#fff', margin: 0 }}>
                Premium Templates
              </h3>
              <p style={{ fontSize: '11.5px', color: '#eee9f6', margin: 0 }}>
                Access the Executive Design Library
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* New Push creation Dialog Overlay */}
      {showNewPushModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(17, 12, 60, 0.5)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px'
        }}>
          <div style={{
            background: '#fff',
            borderRadius: '8px',
            border: '1px solid var(--line)',
            width: '100%',
            maxWidth: '480px',
            boxShadow: '0 8px 24px rgba(17, 12, 60, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid var(--line)' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>Create New Push Campaign</h3>
              <button onClick={() => setShowNewPushModal(false)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <X size={18} style={{ color: 'var(--muted)' }} />
              </button>
            </div>

            <form onSubmit={handleCreatePush} style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '750', color: 'var(--text)', marginBottom: '6px' }}>Campaign Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Q4 Executive Report Reminder"
                  value={newPush.name}
                  onChange={(e) => setNewPush({ ...newPush, name: e.target.value })}
                  style={{
                    width: '100%',
                    height: '36px',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    padding: '0 12px',
                    fontSize: '13px'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '750', color: 'var(--text)', marginBottom: '6px' }}>Target Segment</label>
                <select
                  value={newPush.segment}
                  onChange={(e) => setNewPush({ ...newPush, segment: e.target.value })}
                  style={{
                    width: '100%',
                    height: '36px',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    padding: '0 12px',
                    fontSize: '13px',
                    background: '#fff'
                  }}
                >
                  <option value="All Active Users">All Active Users</option>
                  <option value="Tier 1 Executives">Tier 1 Executives</option>
                  <option value="Standard Tier">Standard Tier</option>
                  <option value="Risk Segment">Risk Segment</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '750', color: 'var(--text)', marginBottom: '6px' }}>Notification Message</label>
                <textarea
                  placeholder="Type your notification copy here..."
                  rows="3"
                  value={newPush.message}
                  onChange={(e) => setNewPush({ ...newPush, message: e.target.value })}
                  style={{
                    width: '100%',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    padding: '8px 12px',
                    fontSize: '13px',
                    resize: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '750', color: 'var(--text)', marginBottom: '6px' }}>Publish Mode</label>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="status"
                      checked={newPush.status === 'Active'}
                      onChange={() => setNewPush({ ...newPush, status: 'Active' })}
                    />
                    Send Instantly
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="status"
                      checked={newPush.status === 'Scheduled'}
                      onChange={() => setNewPush({ ...newPush, status: 'Scheduled' })}
                    />
                    Schedule Campaign
                  </label>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '10px' }}>
                <button
                  type="button"
                  onClick={() => setShowNewPushModal(false)}
                  style={{
                    height: '36px',
                    padding: '0 16px',
                    border: '1px solid var(--line)',
                    background: '#fff',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: '750'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    height: '36px',
                    padding: '0 16px',
                    border: 'none',
                    background: 'var(--primary)',
                    color: '#fff',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: '750'
                  }}
                >
                  Save Trigger
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminShell>
  );
}
