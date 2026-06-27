import React, { useState } from 'react';
import { Calendar, SlidersHorizontal, Plus, Clock, ShieldAlert, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import AdminShell from '../../components/layouts/AdminShell';

export default function BranchSchedule() {
  const { navigate, currentBranchId } = useApp();
  const [viewMode, setViewMode] = useState('Month');

  // We can look up active branch name or default to Manhattan Central Hub
  const branchName = currentBranchId === 'BR-90210' ? 'Manhattan Central Hub (B-104)' :
                     currentBranchId === 'BR-7842' ? 'Uptown Service Hub (B-7842)' :
                     currentBranchId === 'BR-5510' ? 'Industrial Zone East (B-5510)' : 'Bayside Operations (B-405)';

  const calendarDays = [
    { day: 29, active: false }, { day: 30, active: false },
    { day: 1, active: true, events: [{ title: 'Working: 08:00 - 18:00', type: 'work' }] },
    { day: 2, active: true, events: [{ title: 'Working: 08:00 - 18:00', type: 'work' }] },
    { day: 3, active: true, events: [{ title: 'Working: 08:00 - 18:00', type: 'work' }, { title: 'Maintenance (2h)', type: 'maintenance' }] },
    { day: 4, active: true, events: [{ title: 'Working: 08:00 - 18:00', type: 'work' }] },
    { day: 5, active: true },
    { day: 6, active: true },
    { day: 7, active: true, events: [{ title: 'Working: 08:00 - 18:00', type: 'work' }, { title: 'Staff Leave: Marcus', type: 'leave' }] },
    { day: 8, active: true, events: [{ title: 'Working: 08:00 - 18:00', type: 'work' }] },
    { day: 9, active: true, events: [{ title: 'Regional Audit', type: 'audit' }] },
    { day: 10, active: true, events: [{ title: 'Working: 08:00 - 18:00', type: 'work' }] },
    { day: 11, active: true, events: [{ title: 'Working: 08:00 - 18:00', type: 'work' }] },
    { day: 12, active: true },
    { day: 13, active: true, isRed: true, events: [{ title: 'Public Holiday', type: 'holiday' }] },
    { day: 14, active: true, events: [{ title: 'Working: 08:00 - 18:00', type: 'work' }] },
    { day: 15, active: true, events: [{ title: 'Working: 08:00 - 18:00', type: 'work' }] },
    { day: 16, active: true, events: [{ title: 'Working: 08:00 - 18:00', type: 'work' }] },
    { day: 17, active: true, events: [{ title: 'Working: 08:00 - 18:00', type: 'work' }] },
    { day: 18, active: true, events: [{ title: 'Working: 08:00 - 18:00', type: 'work' }] },
    { day: 19, active: true },
    { day: 20, active: true }, { day: 21, active: true }, { day: 22, active: true },
    { day: 23, active: true }, { day: 24, active: true }, { day: 25, active: true },
    { day: 26, active: true }
  ];

  return (
    <AdminShell
      activeTab="Branches"
      headerTitle="Branch Manager"
      searchPlaceholder="Search operations..."
    >
      <div className="branch-schedule-wrapper">
        
        {/* Title Header */}
        <div className="partners-page-header">
          <div>
            <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '700', cursor: 'pointer' }} onClick={() => navigate(ROUTES.branches)}>
              &lt; Back to Branches
            </span>
            <h1 className="page-title" style={{ marginTop: '4px' }}>Branch Schedule & Availability</h1>
            <p className="page-subtitle">Managing: <span style={{ color: '#4f46e5', fontWeight: '700' }}>{branchName}</span></p>
          </div>

          <div style={{ display: 'flex', gap: '8px', background: '#f1f5f9', padding: '4px', borderRadius: '6px' }}>
            {['Day', 'Week', 'Month'].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                style={{ border: 'none', padding: '4px 12px', background: viewMode === mode ? '#4f46e5' : 'transparent', color: viewMode === mode ? '#fff' : 'var(--muted)', fontWeight: '700', fontSize: '12px', borderRadius: '4px', cursor: 'pointer' }}
                type="button"
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Main Two-Column Content */}
        <div className="fraud-top-grid" style={{ gap: '20px', alignItems: 'stretch' }}>
          
          {/* Calendar Block (Left) */}
          <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Calendar Controls Panel */}
            <div className="panel" style={{ padding: '16px 24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} aria-label="Previous month"><ChevronLeft size={18} /></button>
                  <strong style={{ fontSize: '16px', color: 'var(--text)' }}>October 2024</strong>
                  <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} aria-label="Next month"><ChevronRight size={18} /></button>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button className="secondary-action-btn font-bold" type="button" style={{ height: '32px' }}>
                    <SlidersHorizontal size={14} style={{ marginRight: '4px' }} />
                    <span>Filters</span>
                  </button>
                  <button className="primary-action-btn font-bold" type="button" style={{ height: '32px', backgroundColor: '#0f172a', color: '#fff' }}>
                    <Plus size={14} style={{ marginRight: '4px' }} />
                    <span>New Event</span>
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div style={{ marginTop: '20px', border: '1px solid var(--line)', borderRadius: '8px', overflow: 'hidden' }}>
                {/* Day Titles */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', background: '#f8fafc', borderBottom: '1px solid var(--line)', textAlign: 'center', fontWeight: '700', fontSize: '11px', color: 'var(--muted)', padding: '10px 0' }}>
                  <span>SUN</span>
                  <span>MON</span>
                  <span>TUE</span>
                  <span>WED</span>
                  <span>THU</span>
                  <span>FRI</span>
                  <span>SAT</span>
                </div>

                {/* Day Cells */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', background: '#fff' }}>
                  {calendarDays.map((dayObj, i) => (
                    <div
                      key={i}
                      style={{
                        minHeight: '80px',
                        borderRight: '1px solid var(--line)',
                        borderBottom: '1px solid var(--line)',
                        padding: '6px',
                        backgroundColor: dayObj.active ? '#fff' : '#f8fafc',
                        color: dayObj.active ? (dayObj.isRed ? '#ef4444' : 'var(--text)') : '#cbd5e1',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      <strong style={{ fontSize: '12px' }}>{dayObj.day}</strong>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
                        {dayObj.events?.map((evt, idx) => (
                          <span
                            key={idx}
                            style={{
                              fontSize: '8px',
                              fontWeight: '800',
                              padding: '2px 4px',
                              borderRadius: '3px',
                              display: 'block',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              color: evt.type === 'maintenance' ? '#ef4444' : evt.type === 'holiday' ? '#ef4444' : evt.type === 'leave' ? '#fff' : evt.type === 'audit' ? '#fff' : '#4f46e5',
                              background: evt.type === 'maintenance' ? '#fee2e2' : evt.type === 'holiday' ? '#fee2e2' : evt.type === 'leave' ? '#334155' : evt.type === 'audit' ? '#6366f1' : '#e0e7ff'
                            }}
                          >
                            {evt.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Row Statistics */}
            <style>{`
              .schedule-kpi-grid {
                display: grid;
                gap: 16px;
                margin-top: 16px;
              }
              @media (min-width: 1024px) { .schedule-kpi-grid { grid-template-columns: repeat(4, 1fr); } }
              @media (min-width: 768px) and (max-width: 1023px) { .schedule-kpi-grid { grid-template-columns: repeat(2, 1fr); } }
              @media (max-width: 767px) { .schedule-kpi-grid { grid-template-columns: repeat(1, 1fr); } }
              .schedule-kpi-card {
                padding: 20px;
                background: #fff;
                border: 1px solid var(--line);
                border-radius: 8px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                min-height: 120px;
                overflow: hidden;
              }
              .schedule-kpi-card-header {
                font-size: 10px;
                font-weight: 800;
                color: var(--muted);
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }
              .schedule-kpi-card-value {
                font-size: 32px;
                font-weight: 700;
                color: var(--text);
                margin: 8px 0;
                word-break: break-word;
                line-height: 1.1;
              }
              .schedule-kpi-card-footer {
                font-size: 11px;
                font-weight: 700;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            `}</style>
            <div className="schedule-kpi-grid">
              <div className="schedule-kpi-card">
                <span className="schedule-kpi-card-header">Active Staff</span>
                <strong className="schedule-kpi-card-value">12/14</strong>
                <span className="schedule-kpi-card-footer" style={{ color: '#10b981' }}>+2 from last month</span>
              </div>
              <div className="schedule-kpi-card">
                <span className="schedule-kpi-card-header">Monthly Uptime</span>
                <strong className="schedule-kpi-card-value">98.2%</strong>
                <span className="schedule-kpi-card-footer" style={{ color: '#ef4444' }}>-0.4% Maintenance</span>
              </div>
              <div className="schedule-kpi-card">
                <span className="schedule-kpi-card-header">Public Holidays</span>
                <strong className="schedule-kpi-card-value">02</strong>
                <span className="schedule-kpi-card-footer" style={{ color: 'var(--muted)' }}>Next: Oct 13</span>
              </div>
              <div className="schedule-kpi-card">
                <span className="schedule-kpi-card-header">Leave Pending</span>
                <strong className="schedule-kpi-card-value">05</strong>
                <span className="schedule-kpi-card-footer" style={{ color: '#3b82f6' }}>Requires Approval</span>
              </div>
            </div>

          </div>

          {/* Sidebar Block (Right) */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Working Hours Card */}
            <div className="panel" style={{ padding: '20px' }}>
              <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={16} /> Working Hours
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '12px', fontWeight: '700' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--muted)' }}>Mon - Fri</span>
                  <span style={{ background: '#f1f5f9', padding: '3px 8px', borderRadius: '4px' }}>08:00 - 18:00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--muted)' }}>Sat</span>
                  <span style={{ background: '#f1f5f9', padding: '3px 8px', borderRadius: '4px' }}>10:00 - 14:00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--muted)' }}>Sun</span>
                  <span style={{ color: '#ef4444' }}>Closed</span>
                </div>
              </div>

              <button className="secondary-action-btn font-bold" style={{ width: '100%', height: '36px', justifyContent: 'center', marginTop: '16px', fontSize: '12px' }} type="button">
                Edit Global Hours
              </button>
            </div>

            {/* Special Controls Card */}
            <div className="panel" style={{ padding: '20px' }}>
              <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: '0 0 16px' }}>
                Special Controls
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  onClick={() => navigate(ROUTES.branchSuspend)}
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', border: '1px solid #f1f5f9', borderRadius: '8px', background: '#fff', textAlign: 'left', width: '100%', cursor: 'pointer', transition: 'background 0.2s' }}
                  type="button"
                >
                  <span style={{ color: '#ef4444', display: 'flex', padding: '6px', borderRadius: '6px', background: '#fee2e2' }}><ShieldAlert size={16} /></span>
                  <div style={{ flex: 1 }}>
                    <strong style={{ display: 'block', fontSize: '12px', color: 'var(--text)' }}>Emergency Closure</strong>
                    <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: 'normal' }}>Instant app notification</span>
                  </div>
                  <span style={{ color: 'var(--muted)' }}>&gt;</span>
                </button>

                <button
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', border: '1px solid #f1f5f9', borderRadius: '8px', background: '#fff', textAlign: 'left', width: '100%', cursor: 'pointer' }}
                  type="button"
                >
                  <span style={{ color: '#0ea5e9', display: 'flex', padding: '6px', borderRadius: '6px', background: '#e0f2fe' }}><Clock size={16} /></span>
                  <div style={{ flex: 1 }}>
                    <strong style={{ display: 'block', fontSize: '12px', color: 'var(--text)' }}>Manage Leaves</strong>
                    <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: 'normal' }}>Staff vacancy schedule</span>
                  </div>
                  <span style={{ color: 'var(--muted)' }}>&gt;</span>
                </button>

                <button
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', border: '1px solid #f1f5f9', borderRadius: '8px', background: '#fff', textAlign: 'left', width: '100%', cursor: 'pointer' }}
                  type="button"
                >
                  <span style={{ color: '#eab308', display: 'flex', padding: '6px', borderRadius: '6px', background: '#fef3c7' }}><Calendar size={16} /></span>
                  <div style={{ flex: 1 }}>
                    <strong style={{ display: 'block', fontSize: '12px', color: 'var(--text)' }}>Holiday Calendar</strong>
                    <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: 'normal' }}>Sync regional holidays</span>
                  </div>
                  <span style={{ color: 'var(--muted)' }}>&gt;</span>
                </button>
              </div>
            </div>

            {/* Staffing Alert Card */}
            <div className="panel" style={{ padding: '20px', backgroundColor: '#0f172a', color: '#fff', border: 'none', position: 'relative', overflow: 'hidden' }}>
              <h2 style={{ fontSize: '13px', fontWeight: '800', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <AlertCircle size={16} style={{ color: '#ef4444' }} /> Staffing Alert
              </h2>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', margin: '0 0 16px', lineHeight: '1.4' }}>
                You have 2 overlapping leave requests on Oct 14th that may result in service delays.
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button style={{ border: 'none', background: '#fff', color: '#0f172a', padding: '6px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: '800', cursor: 'pointer' }} type="button">
                  View Conflict
                </button>
                <button style={{ border: 'none', background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '6px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: '800', cursor: 'pointer' }} type="button">
                  Dismiss
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}
