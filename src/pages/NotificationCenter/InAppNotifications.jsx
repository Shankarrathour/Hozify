import React, { useState } from 'react';
import { 
  Radio, 
  MailOpen, 
  Mail, 
  XCircle, 
  Filter, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Edit, 
  Trash2,
  Search,
  Plus,
  Download,
  Check,
  X
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';

export default function InAppNotifications({ activeTab = 'Notification Center' }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewTriggerModal, setShowNewTriggerModal] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  
  const [triggers, setTriggers] = useState([
    { id: 1, name: 'Quarterly Revenue Summary', desc: 'Scheduled for EOD Friday', type: 'Critical Alert', segment: 'C-Suite Executive', status: 'Active', ctr: '94.2%' },
    { id: 2, name: 'Data Sync Warning', desc: 'Triggered by latency > 500ms', type: 'System Info', segment: 'System Admins', status: 'Active', ctr: '12.5%' },
    { id: 3, name: 'Holiday Campaign Teaser', desc: 'Marketing promotion #42', type: 'Marketing', segment: 'Standard Users', status: 'Paused', ctr: '22.8%' },
    { id: 4, name: 'Security Protocol Update', desc: 'Mandatory MFA reminder', type: 'Urgent', segment: 'All Users', status: 'Active', ctr: '100.0%' },
    { id: 5, name: 'New Login Alert', desc: 'Triggered on new device sign-in', type: 'System Info', segment: 'All Users', status: 'Active', ctr: '98.3%' },
    { id: 6, name: 'Subscription Expiry Notice', desc: '7 days before billing renewal', type: 'Critical Alert', segment: 'Standard Users', status: 'Active', ctr: '67.4%' }
  ]);

  const [newTrigger, setNewTrigger] = useState({
    name: '',
    desc: '',
    type: 'Critical Alert',
    segment: 'All Users',
    status: 'Active'
  });

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(triggers.map(t => t.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id, checked) => {
    if (checked) {
      setSelectedIds([...selectedIds, id]);
    } else {
      setSelectedIds(selectedIds.filter(x => x !== id));
    }
  };

  const handleCreateTrigger = (e) => {
    e.preventDefault();
    if (!newTrigger.name) return;

    const created = {
      id: triggers.length + 1,
      name: newTrigger.name,
      desc: newTrigger.desc || 'Event triggered',
      type: newTrigger.type,
      segment: newTrigger.segment,
      status: newTrigger.status,
      ctr: '—'
    };

    setTriggers([created, ...triggers]);
    setShowNewTriggerModal(false);
    setNewTrigger({ name: '', desc: '', type: 'Critical Alert', segment: 'All Users', status: 'Active' });
  };

  const handleDeleteTrigger = (id) => {
    if (window.confirm("Are you sure you want to delete this in-app trigger rule?")) {
      setTriggers(triggers.filter(t => t.id !== id));
    }
  };

  const filteredTriggers = triggers.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.segment.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminShell
      activeTab={activeTab}
      brandText="HOZIFY"
      brandSubText="Enterprise Admin"
      headerTitle="In-App Notifications"
      searchPlaceholder="Search notifications..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 0' }}>
        
        {/* Header Title bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
              In-App Notifications
            </h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '4px 0 0' }}>
              Manage and monitor executive message delivery performance.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button
              onClick={() => alert("Downloading full trigger performance log CSV...")}
              style={{
                height: '38px',
                padding: '0 16px',
                border: '1px solid var(--line)',
                background: '#fff',
                color: 'var(--text)',
                borderRadius: '6px',
                fontWeight: '750',
                fontSize: '13px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Download size={14} />
              Export Report
            </button>
            <button
              onClick={() => setShowNewTriggerModal(true)}
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
              New Trigger
            </button>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          
          <div className="panel" style={{ padding: '20px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <span style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', marginBottom: '8px' }}>ACTIVE TRIGGERS</span>
              <strong style={{ fontSize: '28px', fontWeight: '850', color: 'var(--text)' }}>24</strong>
              <span style={{ display: 'block', fontSize: '11px', color: '#07956f', fontWeight: '750', marginTop: '4px' }}>↗ +12%</span>
            </div>
            <div style={{ height: '42px', width: '42px', borderRadius: '50%', background: '#eff6ff', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Radio size={20} />
            </div>
            <div style={{ height: '3px', background: 'var(--primary)', position: 'absolute', bottom: 0, left: 0, right: 0 }} />
          </div>

          <div className="panel" style={{ padding: '20px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <span style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', marginBottom: '8px' }}>TOTAL READ</span>
              <strong style={{ fontSize: '28px', fontWeight: '850', color: 'var(--text)' }}>1.2k</strong>
              <span style={{ display: 'block', fontSize: '11px', color: '#07956f', fontWeight: '750', marginTop: '4px' }}>↗ +4.2%</span>
            </div>
            <div style={{ height: '42px', width: '42px', borderRadius: '50%', background: '#ecfdf5', color: '#07956f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MailOpen size={20} />
            </div>
            <div style={{ height: '3px', background: '#07956f', position: 'absolute', bottom: 0, left: 0, right: 0 }} />
          </div>

          <div className="panel" style={{ padding: '20px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <span style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', marginBottom: '8px' }}>UNREAD</span>
              <strong style={{ fontSize: '28px', fontWeight: '850', color: 'var(--text)' }}>84</strong>
              <span style={{ display: 'block', fontSize: '11px', color: '#b45309', fontWeight: '750', marginTop: '4px' }}>↘ -1.5%</span>
            </div>
            <div style={{ height: '42px', width: '42px', borderRadius: '50%', background: '#fffbeb', color: '#b45309', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Mail size={20} />
            </div>
            <div style={{ height: '3px', background: '#fbbf24', position: 'absolute', bottom: 0, left: 0, right: 0 }} />
          </div>

          <div className="panel" style={{ padding: '20px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <span style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', marginBottom: '8px' }}>DISMISS RATE</span>
              <strong style={{ fontSize: '28px', fontWeight: '850', color: 'var(--text)' }}>8.4%</strong>
              <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', fontWeight: '750', marginTop: '4px' }}>Stable</span>
            </div>
            <div style={{ height: '42px', width: '42px', borderRadius: '50%', background: '#f1f5f9', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <XCircle size={20} />
            </div>
            <div style={{ height: '3px', background: '#64748b', position: 'absolute', bottom: 0, left: 0, right: 0 }} />
          </div>

        </div>

        {/* Triggers Table Area */}
        <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <button style={{ height: '34px', padding: '0 14px', border: '1px solid var(--line)', background: '#fff', borderRadius: '6px', fontSize: '12.5px', fontWeight: '750', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Filter size={14} />
                Filter
              </button>
              <button style={{ height: '34px', padding: '0 14px', border: '1px solid var(--line)', background: '#fff', borderRadius: '6px', fontSize: '12.5px', fontWeight: '750' }}>
                Recently Updated
              </button>
              {selectedIds.length > 0 && (
                <button
                  onClick={() => {
                    if (window.confirm(`Are you sure you want to delete ${selectedIds.length} trigger rules?`)) {
                      setTriggers(triggers.filter(t => !selectedIds.includes(t.id)));
                      setSelectedIds([]);
                    }
                  }}
                  style={{ height: '34px', padding: '0 14px', border: 'none', background: 'var(--red)', color: '#fff', borderRadius: '6px', fontSize: '12.5px', fontWeight: '750' }}
                >
                  Delete Selected ({selectedIds.length})
                </button>
              )}
            </div>

            <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Showing {filteredTriggers.length} of {triggers.length} Triggers</span>
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
            </div>
          </div>

          <div className="table-wrap">
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--soft)', borderBottom: '1px solid var(--line)' }}>
                  <th style={{ padding: '12px 16px', width: '40px' }}>
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      checked={selectedIds.length === triggers.length && triggers.length > 0}
                      style={{ cursor: 'pointer' }}
                    />
                  </th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Trigger Name</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Type</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Audience Segment</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Status</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>CTR</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTriggers.map((t, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--lavender)' }}>
                    <td style={{ padding: '16px' }}>
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(t.id)}
                        onChange={(e) => handleSelectOne(t.id, e.target.checked)}
                        style={{ cursor: 'pointer' }}
                      />
                    </td>
                    <td style={{ padding: '16px' }}>
                      <strong style={{ display: 'block', fontWeight: '800', color: 'var(--text)' }}>{t.name}</strong>
                      <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{t.desc}</span>
                    </td>
                    <td style={{ padding: '16px' }}>
                      <span style={{
                        fontSize: '11px',
                        fontWeight: '850',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        background: t.type === 'Critical Alert' ? '#fdf2f8' : t.type === 'System Info' ? '#eff6ff' : t.type === 'Marketing' ? '#fff7ed' : '#fef2f2',
                        color: t.type === 'Critical Alert' ? '#db2777' : t.type === 'System Info' ? '#2563eb' : t.type === 'Marketing' ? '#ea580c' : 'var(--red)'
                      }}>
                        {t.type}
                      </span>
                    </td>
                    <td style={{ padding: '16px', color: 'var(--text)', fontWeight: '750' }}>{t.segment}</td>
                    <td style={{ padding: '16px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', fontWeight: '750' }}>
                        <span style={{ height: '7px', width: '7px', borderRadius: '50%', background: t.status === 'Active' ? '#07956f' : '#64748b' }} />
                        {t.status}
                      </span>
                    </td>
                    <td style={{ padding: '16px', fontWeight: '800', color: 'var(--text)' }}>{t.ctr}</td>
                    <td style={{ padding: '16px', textAlign: 'right' }}>
                      <div style={{ display: 'inline-flex', gap: '12px', justifyContent: 'flex-end', width: '100%' }}>
                        <button
                          onClick={() => alert(`Editing trigger config: ${t.name}`)}
                          style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)', display: 'flex', alignItems: 'center' }}
                        >
                          <Edit size={15} />
                        </button>
                        <button
                          onClick={() => handleDeleteTrigger(t.id)}
                          style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--red)', display: 'flex', alignItems: 'center' }}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
            <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Page 1 of 3</span>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <button style={{ border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer' }}><ChevronLeft size={16} /></button>
              <button style={{ border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer' }}><ChevronRight size={16} /></button>
            </div>
          </div>
        </div>

        {/* Bottom analytics columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '2.2fr 1fr', gap: '24px' }}>
          
          {/* Delivery Performance Trends SVG Chart */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '15px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>Delivery Performance Trends</h2>
              
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', fontWeight: '750', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ height: '8px', width: '8px', borderRadius: '50%', background: '#25108f' }} />
                  SUCCESSFUL
                </span>
                <span style={{ fontSize: '11px', fontWeight: '750', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ height: '8px', width: '8px', borderRadius: '50%', background: '#db2777' }} />
                  FAILED
                </span>
              </div>
            </div>

            {/* Custom SVG Column Bar Chart */}
            <div style={{ height: '180px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '10px 20px', border: '1px solid var(--lavender)', borderRadius: '6px', background: '#fcfbfe' }}>
              {[
                { label: 'W1', success: 65, fail: 8 },
                { label: 'W2', success: 80, fail: 4 },
                { label: 'W3', success: 72, fail: 9 },
                { label: 'W4', success: 90, fail: 5 },
                { label: 'W5', success: 85, fail: 12 },
                { label: 'W6', success: 95, fail: 2 },
                { label: 'W7', success: 88, fail: 6 }
              ].map((week, idx) => (
                <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '120px', width: '28px' }}>
                    <div style={{ background: '#25108f', flex: 1, height: `${week.success}%`, borderRadius: '2px 2px 0 0' }} />
                    <div style={{ background: '#db2777', flex: 1, height: `${week.fail * 3}%`, borderRadius: '2px 2px 0 0' }} />
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: '750', color: 'var(--muted)' }}>{week.label}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Real-time Insights Panel */}
          <div className="panel" style={{ background: '#110c3c', color: '#fff', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '16px' }}>
            <div>
              <h3 style={{ fontSize: '13px', fontWeight: '800', color: '#b9aede', textTransform: 'uppercase', margin: '0 0 16px', letterSpacing: '0.5px' }}>
                Real-time Insights
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1f1b54', paddingBottom: '10px' }}>
                  <span style={{ fontSize: '13px', color: '#eee9f6', fontWeight: '700' }}>Revenue Reports</span>
                  <span style={{ fontSize: '13px', color: '#07956f', fontWeight: '850' }}>98% Reach</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1f1b54', paddingBottom: '10px' }}>
                  <span style={{ fontSize: '13px', color: '#eee9f6', fontWeight: '700' }}>Onboarding Flow</span>
                  <span style={{ fontSize: '13px', color: '#07956f', fontWeight: '850' }}>76% CTR</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '13px', color: '#eee9f6', fontWeight: '700' }}>System Updates</span>
                  <span style={{ fontSize: '13px', color: '#07956f', fontWeight: '850' }}>100% Read</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => alert("Opening full system-wide messaging analytics report...")}
              style={{
                width: '100%',
                height: '38px',
                border: 'none',
                background: '#fff',
                color: '#110c3c',
                fontSize: '12.5px',
                fontWeight: '800',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              View Detailed Analytics
            </button>
          </div>

        </div>

      </div>

      {/* Create New Trigger Dialog */}
      {showNewTriggerModal && (
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
              <h3 style={{ fontSize: '15px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>Add In-App Notification Trigger</h3>
              <button onClick={() => setShowNewTriggerModal(false)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <X size={18} style={{ color: 'var(--muted)' }} />
              </button>
            </div>

            <form onSubmit={handleCreateTrigger} style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '750', color: 'var(--text)', marginBottom: '6px' }}>Trigger Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Monthly Commission Statement"
                  value={newTrigger.name}
                  onChange={(e) => setNewTrigger({ ...newTrigger, name: e.target.value })}
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
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '750', color: 'var(--text)', marginBottom: '6px' }}>Trigger Condition / Description</label>
                <input
                  type="text"
                  placeholder="e.g. Triggered at EOD Friday"
                  value={newTrigger.desc}
                  onChange={(e) => setNewTrigger({ ...newTrigger, desc: e.target.value })}
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '750', color: 'var(--text)', marginBottom: '6px' }}>Trigger Type</label>
                  <select
                    value={newTrigger.type}
                    onChange={(e) => setNewTrigger({ ...newTrigger, type: e.target.value })}
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
                    <option value="Critical Alert">Critical Alert</option>
                    <option value="System Info">System Info</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Urgent">Urgent</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '750', color: 'var(--text)', marginBottom: '6px' }}>Audience Segment</label>
                  <select
                    value={newTrigger.segment}
                    onChange={(e) => setNewTrigger({ ...newTrigger, segment: e.target.value })}
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
                    <option value="All Users">All Users</option>
                    <option value="C-Suite Executive">C-Suite Executive</option>
                    <option value="System Admins">System Admins</option>
                    <option value="Standard Users">Standard Users</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '750', color: 'var(--text)', marginBottom: '6px' }}>Initial Status</label>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="status"
                      checked={newTrigger.status === 'Active'}
                      onChange={() => setNewTrigger({ ...newTrigger, status: 'Active' })}
                    />
                    Active
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="status"
                      checked={newTrigger.status === 'Paused'}
                      onChange={() => setNewTrigger({ ...newTrigger, status: 'Paused' })}
                    />
                    Paused
                  </label>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '10px' }}>
                <button
                  type="button"
                  onClick={() => setShowNewTriggerModal(false)}
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
                  Create Trigger
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminShell>
  );
}
