import React, { useState } from 'react';
import { Star, MoreVertical, ChevronLeft, ChevronRight, SlidersHorizontal, Search } from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import AdminShell from '../../components/layouts/AdminShell';

const initialCandidates = [
  { id: 1, name: 'Eleanor Vance', role: 'Senior Ops Specialist', experience: '12 Years', sector: 'Logistics', loadVal: 2, loadMax: 5, rating: 4.9, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&h=60&q=80', status: 'Available' },
  { id: 2, name: 'Julian Thorne', role: 'Regional Lead', experience: '8 Years', sector: 'Retail', loadVal: 4, loadMax: 5, rating: 4.7, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&h=60&q=80', status: 'Assigned' },
  { id: 3, name: 'Sasha Kim', role: 'Project Coordinator', experience: '5 Years', sector: 'Tech Ops', loadVal: 1, loadMax: 5, rating: 4.2, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=60&h=60&q=80', status: 'Available' },
  { id: 4, name: 'Marcus Wei', role: 'Site Supervisor', experience: '15 Years', sector: 'Strategy', loadVal: 0, loadMax: 5, rating: 5.0, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=60&h=60&q=80', status: 'Available' }
];

export default function ManagerAssignment() {
  const { navigate } = useApp();
  const [candidates, setCandidates] = useState(initialCandidates);
  const [experience, setExperience] = useState('All Experience Levels');
  const [immediateStart, setImmediateStart] = useState(true);
  const [pendingAssignment, setPendingAssignment] = useState(false);

  const handleAction = (id, actionType) => {
    if (actionType === 'Assign') {
      alert(`Success: Manager assigned to target branch!`);
      navigate(ROUTES.branches);
    } else if (actionType === 'Remove') {
      setCandidates(candidates.map(c => c.id === id ? { ...c, loadVal: 0, status: 'Available' } : c));
    }
  };

  return (
    <AdminShell
      activeTab="Branches"
      headerTitle="Branch Manager"
      searchPlaceholder="Search managers..."
    >
      <div className="manager-assignment-wrapper">
        
        {/* Breadcrumbs */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTES.branches)}>Branch Listing</span>
          <span>&gt;</span>
          <span style={{ color: 'var(--text)', fontWeight: '700' }}>Manager Assignment</span>
        </div>

        {/* Title and Top KPIs */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
          <div>
            <h1 className="page-title" style={{ margin: 0 }}>North Sector Assignments</h1>
            <p className="page-subtitle" style={{ marginTop: '2px' }}>Select and manage operational leadership for branch expansion units.</p>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <div className="kpi-card" style={{ padding: '10px 16px', minWidth: '120px', background: '#fff', border: '1px solid var(--line)' }}>
              <span style={{ fontSize: '8px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Available Managers</span>
              <strong style={{ display: 'block', fontSize: '18px', color: 'var(--text)' }}>124 <span style={{ fontSize: '11px', color: '#10b981', fontWeight: '700' }}>↗ +8%</span></strong>
            </div>

            <div className="kpi-card" style={{ padding: '10px 16px', minWidth: '120px', background: '#fff', border: '1px solid var(--line)' }}>
              <span style={{ fontSize: '8px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Efficiency Index</span>
              <strong style={{ display: 'block', fontSize: '18px', color: 'var(--text)' }}>94.2 <span style={{ fontSize: '10px', color: 'var(--primary)', fontWeight: '800' }}>Top Tier</span></strong>
            </div>
          </div>
        </div>

        {/* Two-Column Grid */}
        <div className="fraud-top-grid" style={{ gap: '20px', alignItems: 'stretch' }}>
          
          {/* Left search & refine options column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Refine Search Form Card */}
            <div className="panel" style={{ padding: '20px' }}>
              <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: '0 0 16px' }}>
                Refine Search
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="experience-select" style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Experience Level</label>
                  <select
                    id="experience-select"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    style={{ height: '36px', border: '1px solid var(--line)', padding: '0 10px', borderRadius: '6px', fontSize: '13px', fontWeight: '700', outline: 'none', background: '#fff' }}
                  >
                    <option value="All Experience Levels">All Experience Levels</option>
                    <option value="Senior">10+ Years (Senior)</option>
                    <option value="Mid">5-10 Years (Mid)</option>
                  </select>
                </div>

                <div>
                  <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '8px' }}>Availability</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', fontWeight: '700' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={immediateStart}
                        onChange={(e) => setImmediateStart(e.target.checked)}
                      />
                      <span>Immediate Start</span>
                    </label>

                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={pendingAssignment}
                        onChange={(e) => setPendingAssignment(e.target.checked)}
                      />
                      <span>Pending Assignment</span>
                    </label>
                  </div>
                </div>

                <button
                  onClick={() => { setExperience('All Experience Levels'); setImmediateStart(true); setPendingAssignment(false); }}
                  className="secondary-action-btn font-bold"
                  style={{ width: '100%', height: '34px', justifyContent: 'center', fontSize: '12px' }}
                  type="button"
                >
                  Reset Filters
                </button>

              </div>
            </div>

            {/* Target Branch Dark Card */}
            <div className="panel" style={{ padding: '24px', backgroundColor: '#0f172a', color: '#fff', border: 'none', minHeight: '140px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative', overflow: 'hidden' }}>
              {/* Subtle background graphic overlay */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.15, background: 'radial-gradient(circle, #4f46e5 0%, transparent 80%)' }} />
              
              <div style={{ relative: 'zIndex 2' }}>
                <span style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Target Branch</span>
                <strong style={{ display: 'block', fontSize: '18px', margin: '4px 0 2px' }}>Toronto - HQ 02</strong>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)' }}>Bay Street Corridor, ON</span>
              </div>
            </div>

          </div>

          {/* Right Table Column */}
          <div className="panel" style={{ flex: 2, padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            
            <div>
              <div className="table-wrap">
                <table className="partner-table">
                  <thead>
                    <tr>
                      <th>MANAGER IDENTITY</th>
                      <th>EXPERIENCE</th>
                      <th>CURRENT LOAD</th>
                      <th>RATING</th>
                      <th style={{ textAlign: 'right', paddingRight: '20px' }}>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {candidates.map((c) => (
                      <tr key={c.id}>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <img src={c.avatar} alt={c.name} style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }} />
                            <div>
                              <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>{c.name}</strong>
                              <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{c.role}</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>{c.experience}</strong>
                          <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Sector: {c.sector}</span>
                        </td>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', width: '100px' }}>
                            <span style={{ fontSize: '12px', fontWeight: '700', width: '24px' }}>{c.loadVal}/{c.loadMax}</span>
                            <div style={{ flex: 1, height: '4px', background: '#f1f5f9', borderRadius: '2px', overflow: 'hidden' }}>
                              <div style={{ width: `${(c.loadVal/c.loadMax)*100}%`, height: '100%', background: c.loadVal > 3 ? '#ef4444' : c.loadVal > 1 ? '#4f46e5' : '#10b981' }} />
                            </div>
                          </div>
                        </td>
                        <td>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '800', fontSize: '13px', color: 'var(--text)' }}>
                            <Star size={12} fill="#eab308" stroke="#eab308" />
                            {c.rating}
                          </span>
                        </td>
                        <td style={{ textAlign: 'right', paddingRight: '20px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px' }}>
                            {c.loadVal === 0 ? (
                              <button
                                onClick={() => handleAction(c.id, 'Assign')}
                                style={{ border: '1px solid #4f46e5', background: '#4f46e5', color: '#fff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '800', cursor: 'pointer' }}
                              >
                                Assign
                              </button>
                            ) : c.loadVal === 4 ? (
                              <button
                                onClick={() => handleAction(c.id, 'Replace')}
                                style={{ border: '1px solid var(--line)', background: '#fff', color: 'var(--text)', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '800', cursor: 'pointer' }}
                              >
                                Replace
                              </button>
                            ) : (
                              <button
                                onClick={() => handleAction(c.id, 'Remove')}
                                style={{ border: '1px solid #fee2e2', background: '#fee2e2', color: '#ef4444', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '800', cursor: 'pointer' }}
                              >
                                Remove
                              </button>
                            )}
                            <button className="table-row-action-btn" type="button" aria-label="Action list">
                              <MoreVertical size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table Footer */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', fontSize: '13px', borderTop: '1px solid var(--line)', paddingTop: '14px' }}>
                <span style={{ color: 'var(--muted)' }}>Showing 4 of 124 potential candidates</span>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontWeight: '700' }}>
                  <button disabled style={{ border: 'none', background: 'transparent', color: '#cbd5e1', cursor: 'not-allowed' }}>&lt;</button>
                  <span>1</span>
                  <button style={{ border: 'none', background: 'transparent', color: 'var(--primary)', cursor: 'pointer' }}>&gt;</button>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Cards row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px', marginTop: '24px' }}>
          
          {/* Sector Load Forecast */}
          <div className="panel" style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ maxWidth: '65%' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '800', margin: '0 0 4px', color: 'var(--text)' }}>Sector Load Forecast</h3>
              <p style={{ fontSize: '11px', color: 'var(--muted)', margin: '0', lineHeight: '1.4' }}>Manager allocation is currently balanced. Hiring trends suggest a 4% increase in unit density over Q3.</p>
            </div>
            {/* Visual Micro Bar graph */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '36px' }}>
              <span style={{ height: '30%', width: '6px', background: '#cbd5e1', borderRadius: '1px' }} />
              <span style={{ height: '45%', width: '6px', background: '#cbd5e1', borderRadius: '1px' }} />
              <span style={{ height: '35%', width: '6px', background: '#4f46e5', borderRadius: '1px' }} />
              <span style={{ height: '70%', width: '6px', background: '#4f46e5', borderRadius: '1px' }} />
              <span style={{ height: '60%', width: '6px', background: '#4f46e5', borderRadius: '1px' }} />
            </div>
          </div>

          {/* Top-Rated Availability */}
          <div className="panel" style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '800', margin: '0 0 4px', color: 'var(--text)' }}>Top-Rated Availability</h3>
              <p style={{ fontSize: '11px', color: 'var(--muted)', margin: '0', lineHeight: '1.4' }}>3 Tier-1 managers with 5.0 ratings are currently unassigned and ready for branch onboarding.</p>
            </div>
            {/* User Avatars stacked */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=40&h=40&q=80" alt="Avatar" style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #fff' }} />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=40&h=40&q=80" alt="Avatar" style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #fff', marginLeft: '-6px' }} />
              <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#0f172a', color: '#fff', fontSize: '9px', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', marginLeft: '-6px' }}>+1</span>
            </div>
          </div>

        </div>

      </div>
    </AdminShell>
  );
}
