import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Calendar, 
  Play, 
  MoreVertical, 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp, 
  CheckCircle,
  Download,
  FileText,
  Search,
  Plus,
  Info,
  Check,
  X
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';

export default function WhatsAppCampaigns({ activeTab = 'Notification Center' }) {
  const [dateFilter, setDateFilter] = useState('Last 30 Days');
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewCampaignModal, setShowNewCampaignModal] = useState(false);

  const [campaigns, setCampaigns] = useState([
    { id: 'WAC-88219', name: 'Q4 Retention Drive', template: 're_engage_v2', volume: '45,000', status: 'Active', readRate: '92.4%', launchDate: 'Oct 24, 2023', iconType: 'chart' },
    { id: 'WAC-88224', name: 'Flash Sale Alert', template: 'promo_alert_L1', volume: '12,500', status: 'Scheduled', readRate: '—', launchDate: 'Oct 30, 2023', iconType: 'calendar' },
    { id: 'WAC-88210', name: 'Weekly Newsletter', template: 'content_digest', volume: '65,000', status: 'Completed', readRate: '78.1%', launchDate: 'Oct 18, 2023', iconType: 'chart' },
    { id: 'WAC-88195', name: 'Payment Reminder', template: 'bill_reminder', volume: '2,302', status: 'Paused', readRate: '88.9%', launchDate: 'Oct 12, 2023', iconType: 'play' },
    { id: 'WAC-88184', name: 'Welcome Onboarding', template: 'welcome_standard', volume: '18,450', status: 'Completed', readRate: '82.0%', launchDate: 'Oct 05, 2023', iconType: 'chart' },
    { id: 'WAC-88176', name: 'Feedback Survey', template: 'feedback_csat', volume: '9,120', status: 'Completed', readRate: '64.0%', launchDate: 'Sep 28, 2023', iconType: 'chart' }
  ]);

  const [newCampaign, setNewCampaign] = useState({
    name: '',
    template: 're_engage_v2',
    volume: '',
    status: 'Scheduled',
    launchDate: ''
  });

  const handleRefreshAnalytics = (campaignName) => {
    setToastMessage(`Campaign "${campaignName}" analytics refreshed.`);
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleCreateCampaign = (e) => {
    e.preventDefault();
    if (!newCampaign.name || !newCampaign.volume) return;

    const formattedVolume = Number(newCampaign.volume).toLocaleString();
    const created = {
      id: `WAC-${Math.floor(10000 + Math.random() * 90000)}`,
      name: newCampaign.name,
      template: newCampaign.template,
      volume: formattedVolume,
      status: newCampaign.status,
      readRate: newCampaign.status === 'Active' ? '100.0%' : '—',
      launchDate: newCampaign.launchDate || 'Oct 28, 2023',
      iconType: newCampaign.status === 'Active' ? 'chart' : 'calendar'
    };

    setCampaigns([created, ...campaigns]);
    setShowNewCampaignModal(false);
    setToastMessage(`Campaign "${newCampaign.name}" created successfully.`);
    setShowToast(true);
    setNewCampaign({ name: '', template: 're_engage_v2', volume: '', status: 'Scheduled', launchDate: '' });
  };

  const filteredCampaigns = campaigns.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.template.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminShell
      activeTab={activeTab}
      brandText="HOZIFY"
      brandSubText="Enterprise Admin"
      headerTitle="WhatsApp Campaigns"
      searchPlaceholder="Search campaigns or reports..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 0' }}>
        
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
              WhatsApp Campaigns
            </h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '4px 0 0' }}>
              Real-time performance metrics for high-conversion messaging outreach.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {/* Quick date filters */}
            <div style={{ display: 'flex', border: '1px solid var(--line)', borderRadius: '6px', background: '#fff', padding: '2px', gap: '2px' }}>
              {['Last 30 Days', 'Last Quarter', 'Year-to-date'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setDateFilter(tab)}
                  style={{
                    border: 'none',
                    height: '32px',
                    padding: '0 12px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '750',
                    cursor: 'pointer',
                    background: dateFilter === tab ? 'var(--primary)' : 'transparent',
                    color: dateFilter === tab ? '#fff' : 'var(--muted)',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowNewCampaignModal(true)}
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
              New Campaign
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          
          <div className="panel" style={{ padding: '20px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', letterSpacing: '0.5px' }}>MESSAGES SENT</span>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#07956f' }}>↗ +12.4%</span>
            </div>
            <strong style={{ fontSize: '28px', fontWeight: '850', color: 'var(--text)' }}>124,802</strong>
            <div style={{ height: '3px', background: 'var(--primary)', position: 'absolute', bottom: 0, left: 0, right: 0 }} />
          </div>

          <div className="panel" style={{ padding: '20px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', letterSpacing: '0.5px' }}>DELIVERED</span>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#07956f' }}>97.8%</span>
            </div>
            <strong style={{ fontSize: '28px', fontWeight: '850', color: 'var(--text)' }}>122,056</strong>
            <div style={{ height: '3px', background: '#07956f', position: 'absolute', bottom: 0, left: 0, right: 0 }} />
          </div>

          <div className="panel" style={{ padding: '20px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', letterSpacing: '0.5px' }}>READ RATE</span>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#07956f' }}>↗ +2.1%</span>
            </div>
            <strong style={{ fontSize: '28px', fontWeight: '850', color: 'var(--text)' }}>84.2%</strong>
            <div style={{ height: '3px', background: '#7c3aed', position: 'absolute', bottom: 0, left: 0, right: 0 }} />
          </div>

          <div className="panel" style={{ padding: '20px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', letterSpacing: '0.5px' }}>FAILED</span>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--red)' }}>↘ -0.4%</span>
            </div>
            <strong style={{ fontSize: '28px', fontWeight: '850', color: 'var(--text)' }}>2.2%</strong>
            <div style={{ height: '3px', background: 'var(--red)', position: 'absolute', bottom: 0, left: 0, right: 0 }} />
          </div>

        </div>

        {/* Table Panel */}
        <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: '15px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>Recent Campaigns</h2>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div style={{ position: 'relative' }}>
                <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
                <input
                  type="text"
                  placeholder="Filter campaigns..."
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
                <TrendingUp size={14} style={{ color: 'var(--muted)' }} />
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
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Template</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Volume</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Status</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Read Rate</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Launch Date</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCampaigns.slice(0, 4).map((c, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--lavender)' }}>
                    <td style={{ padding: '16px' }}>
                      <strong style={{ display: 'block', fontWeight: '800', color: 'var(--text)' }}>{c.name}</strong>
                      <span style={{ fontSize: '11px', color: 'var(--muted)' }}>ID: {c.id}</span>
                    </td>
                    <td style={{ padding: '16px' }}>
                      <span style={{
                        fontSize: '11.5px',
                        fontWeight: '750',
                        color: 'var(--primary)',
                        background: '#f4eff8',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        border: '1px solid var(--lavender)',
                        fontFamily: 'monospace'
                      }}>
                        {c.template}
                      </span>
                    </td>
                    <td style={{ padding: '16px', fontWeight: '750', color: 'var(--text)' }}>{c.volume}</td>
                    <td style={{ padding: '16px' }}>
                      <span style={{
                        fontSize: '11px',
                        fontWeight: '850',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        background: c.status === 'Active' ? '#ecfdf5' : c.status === 'Scheduled' ? '#eff6ff' : c.status === 'Completed' ? '#f1f5f9' : '#fffbeb',
                        color: c.status === 'Active' ? '#07956f' : c.status === 'Scheduled' ? 'var(--primary)' : c.status === 'Completed' ? 'var(--muted)' : '#b45309'
                      }}>
                        {c.status}
                      </span>
                    </td>
                    <td style={{ padding: '16px', fontWeight: '750', color: 'var(--text)' }}>{c.readRate}</td>
                    <td style={{ padding: '16px', color: 'var(--muted)' }}>{c.launchDate}</td>
                    <td style={{ padding: '16px', textAlign: 'right' }}>
                      <div style={{ display: 'inline-flex', gap: '8px', alignItems: 'center' }}>
                        <button
                          onClick={() => handleRefreshAnalytics(c.name)}
                          title="Refresh Analytics"
                          style={{
                            border: 'none',
                            background: 'transparent',
                            cursor: 'pointer',
                            color: 'var(--primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '28px',
                            width: '28px',
                            borderRadius: '4px'
                          }}
                        >
                          {c.iconType === 'chart' ? (
                            <BarChart3 size={15} />
                          ) : c.iconType === 'calendar' ? (
                            <Calendar size={15} />
                          ) : (
                            <Play size={15} />
                          )}
                        </button>
                        <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }}>
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table></div>
          </div>

          {/* Table Footer / Pagination */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
            <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
              Showing 4 of 24 active campaigns
            </span>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <button style={{ border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <ChevronLeft size={16} />
              </button>
              <span style={{ fontSize: '12.5px', fontWeight: '750', color: 'var(--text)' }}>Page 1 of 6</span>
              <button style={{ border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Analytics block */}
        <div style={{ display: 'grid', gridTemplateColumns: '2.2fr 1.1fr', gap: '24px' }}>
          
          {/* Messaging Trend Custom Area Chart */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '15px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>Messaging Trend</h2>
              
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', fontWeight: '750', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ height: '8px', width: '8px', borderRadius: '50%', background: 'var(--primary)' }} />
                  Sent
                </span>
                <span style={{ fontSize: '11px', fontWeight: '750', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ height: '8px', width: '8px', borderRadius: '50%', background: '#07956f' }} />
                  Read
                </span>
              </div>
            </div>

            {/* Custom Area Chart Canvas */}
            <div style={{ height: '220px', position: 'relative', border: '1px solid var(--lavender)', borderRadius: '6px', background: '#fcfbfe', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden' }}>
              <svg style={{ width: '100%', height: '100%' }}>
                <defs>
                  <linearGradient id="gradientSent" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="gradientRead" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#07956f" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#07956f" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Grid Lines */}
                <line x1="0%" y1="20%" x2="100%" y2="20%" stroke="var(--lavender)" strokeDasharray="3" />
                <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="var(--lavender)" strokeDasharray="3" />
                <line x1="0%" y1="80%" x2="100%" y2="80%" stroke="var(--lavender)" strokeDasharray="3" />

                {/* Sent Area & Line */}
                <path
                  d="M 0 170 Q 150 160 300 110 T 600 120 T 900 150 L 900 220 L 0 220 Z"
                  fill="url(#gradientSent)"
                />
                <path
                  d="M 0 170 Q 150 160 300 110 T 600 120 T 900 150"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="2.5"
                  strokeDasharray="4 2"
                />

                {/* Read Area & Line */}
                <path
                  d="M 0 180 Q 150 170 300 130 T 600 135 T 900 165 L 900 220 L 0 220 Z"
                  fill="url(#gradientRead)"
                />
                <path
                  d="M 0 180 Q 150 170 300 130 T 600 135 T 900 165"
                  fill="none"
                  stroke="#07956f"
                  strokeWidth="2.5"
                />
              </svg>

              <div style={{
                position: 'absolute',
                bottom: '12px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '11px',
                fontWeight: '800',
                color: 'var(--muted)',
                letterSpacing: '0.5px'
              }}>
                Last 30 Days Activity Matrix
              </div>
            </div>

          </div>

          {/* Top Templates List */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>Top Templates</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', fontWeight: '750', marginBottom: '6px' }}>
                  <span style={{ color: 'var(--text)' }}>
                    <span style={{ color: 'var(--muted)', marginRight: '6px' }}>01</span>
                    Order_Update_Gold
                  </span>
                  <span style={{ color: '#07956f', fontWeight: '850' }}>98% Read</span>
                </div>
                <div style={{ background: '#f1f5f9', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ background: 'var(--primary)', height: '100%', width: '98%' }} />
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', fontWeight: '750', marginBottom: '6px' }}>
                  <span style={{ color: 'var(--text)' }}>
                    <span style={{ color: 'var(--muted)', marginRight: '6px' }}>02</span>
                    Welcome_Standard
                  </span>
                  <span style={{ color: 'var(--muted)' }}>82% Read</span>
                </div>
                <div style={{ background: '#f1f5f9', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ background: 'var(--primary)', height: '100%', width: '82%' }} />
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', fontWeight: '750', marginBottom: '6px' }}>
                  <span style={{ color: 'var(--text)' }}>
                    <span style={{ color: 'var(--muted)', marginRight: '6px' }}>03</span>
                    Feedback_CSAT
                  </span>
                  <span style={{ color: 'var(--muted)' }}>64% Read</span>
                </div>
                <div style={{ background: '#f1f5f9', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ background: 'var(--primary)', height: '100%', width: '64%' }} />
                </div>
              </div>

            </div>

            <button
              onClick={() => alert("Redirecting to all templates center...")}
              style={{
                width: '100%',
                height: '38px',
                border: '1px solid var(--line)',
                background: '#fff',
                color: 'var(--text)',
                fontSize: '12.5px',
                fontWeight: '750',
                borderRadius: '6px',
                cursor: 'pointer',
                marginTop: '10px'
              }}
            >
              View All Templates
            </button>
          </div>

        </div>

      </div>

      {/* Floating Refresh Alert Toast */}
      {showToast && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          background: '#111827',
          color: '#fff',
          padding: '12px 18px',
          borderRadius: '8px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          zIndex: 10000,
          animation: 'fadeInUp 0.2s ease-out'
        }}>
          <div style={{ height: '18px', width: '18px', borderRadius: '50%', background: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Check size={12} style={{ color: '#fff' }} />
          </div>
          <span style={{ fontSize: '13px', fontWeight: '600' }}>{toastMessage}</span>
          <button
            onClick={() => setShowToast(false)}
            style={{
              border: 'none',
              background: 'transparent',
              color: '#9ca3af',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '2px',
              marginLeft: '8px'
            }}
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* New Campaign Creation Modal */}
      {showNewCampaignModal && (
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
              <h3 style={{ fontSize: '15px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>Create WhatsApp Campaign</h3>
              <button onClick={() => setShowNewCampaignModal(false)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <X size={18} style={{ color: 'var(--muted)' }} />
              </button>
            </div>

            <form onSubmit={handleCreateCampaign} style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '750', color: 'var(--text)', marginBottom: '6px' }}>Campaign Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Q4 Flash Sale Alert"
                  value={newCampaign.name}
                  onChange={(e) => setNewCampaign({ ...newCampaign, name: e.target.value })}
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
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '750', color: 'var(--text)', marginBottom: '6px' }}>Select Template</label>
                <select
                  value={newCampaign.template}
                  onChange={(e) => setNewCampaign({ ...newCampaign, template: e.target.value })}
                  style={{
                    width: '100%',
                    height: '36px',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    padding: '0 12px',
                    fontSize: '13px',
                    background: '#fff',
                    fontFamily: 'monospace'
                  }}
                >
                  <option value="re_engage_v2">re_engage_v2</option>
                  <option value="promo_alert_L1">promo_alert_L1</option>
                  <option value="content_digest">content_digest</option>
                  <option value="bill_reminder">bill_reminder</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '750', color: 'var(--text)', marginBottom: '6px' }}>Estimated Target Volume</label>
                <input
                  type="number"
                  required
                  placeholder="e.g. 50000"
                  value={newCampaign.volume}
                  onChange={(e) => setNewCampaign({ ...newCampaign, volume: e.target.value })}
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
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '750', color: 'var(--text)', marginBottom: '6px' }}>Launch Type</label>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="status"
                      checked={newCampaign.status === 'Active'}
                      onChange={() => setNewCampaign({ ...newCampaign, status: 'Active' })}
                    />
                    Launch Instantly
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="status"
                      checked={newCampaign.status === 'Scheduled'}
                      onChange={() => setNewCampaign({ ...newCampaign, status: 'Scheduled' })}
                    />
                    Schedule for later
                  </label>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '10px' }}>
                <button
                  type="button"
                  onClick={() => setShowNewCampaignModal(false)}
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
                  Create Campaign
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminShell>
  );
}
