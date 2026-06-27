import React, { useState } from 'react';
import {
  Search, ListFilter, Download, FileText, TrendingUp, TrendingDown, Star, Users, CheckCircle2,
  Calendar, MapPin, Briefcase, Activity, Target, Award, MoreVertical
} from 'lucide-react';

// MOCK DATA
const MOCK_TOP_PERFORMERS = [
  { id: 1, name: 'Elena Novak', branch: 'Indore', score: '92%', rating: '4.9/5', performance: 'Top 1%', revenue: '$8,450', status: 'High Performer' },
  { id: 2, name: 'Kaelen Miller', branch: 'Bhopal', score: '88%', rating: '4.7/5', performance: 'Top 5%', revenue: '$6,320', status: 'High Performer' },
  { id: 3, name: 'Sarah Chen', branch: 'Jaipur', score: '85%', rating: '4.5/5', performance: 'Top 8%', revenue: '$5,100', status: 'High Performer' },
  { id: 4, name: 'Robert Bell', branch: 'Pune', score: '82%', rating: '4.4/5', performance: 'Top 12%', revenue: '$4,800', status: 'High Performer' },
  { id: 5, name: 'Aria Lee', branch: 'Ahmedabad', score: '79%', rating: '4.2/5', performance: 'Top 15%', revenue: '$4,100', status: 'Average Performer' },
];

const MOCK_EMPLOYEES = [
  ...MOCK_TOP_PERFORMERS,
  { id: 6, name: 'Marcus Smith', branch: 'Indore', score: '68%', rating: '3.8/5', performance: 'Average', revenue: '$3,200', status: 'Average Performer' },
  { id: 7, name: 'Tom King', branch: 'Bhopal', score: '55%', rating: '2.9/5', performance: 'Bottom 10%', revenue: '$1,800', status: 'Needs Improvement' },
  { id: 8, name: 'Jane Doe', branch: 'Pune', score: '71%', rating: '4.0/5', performance: 'Average', revenue: '$3,500', status: 'Average Performer' },
];

const MOCK_BRANCH_LEADERBOARD = [
  { rank: 1, branch: 'Indore', count: 145, score: '89%', rating: '4.6' },
  { rank: 2, branch: 'Pune', count: 210, score: '86%', rating: '4.5' },
  { rank: 3, branch: 'Bhopal', count: 98, score: '82%', rating: '4.3' },
  { rank: 4, branch: 'Ahmedabad', count: 165, score: '78%', rating: '4.1' },
  { rank: 5, branch: 'Jaipur', count: 124, score: '74%', rating: '3.9' },
];

export default function EmployeeAnalytics() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const getStatusBadge = (status) => {
    switch(status) {
      case 'High Performer':
        return <span style={{ fontSize: '10px', fontWeight: '800', padding: '4px 8px', borderRadius: '12px', background: '#d1fae5', color: '#059669' }}>High Performer</span>;
      case 'Average Performer':
        return <span style={{ fontSize: '10px', fontWeight: '800', padding: '4px 8px', borderRadius: '12px', background: '#e0e7ff', color: '#4f46e5' }}>Average Performer</span>;
      case 'Needs Improvement':
        return <span style={{ fontSize: '10px', fontWeight: '800', padding: '4px 8px', borderRadius: '12px', background: '#fef3c7', color: '#d97706' }}>Needs Improvement</span>;
      default:
        return null;
    }
  };

  const filteredEmployees = MOCK_EMPLOYEES.filter(emp => emp.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '40px' }}>
      
      {/* Top Filter Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', background: '#fff', padding: '16px', borderRadius: '12px', border: '1px solid var(--line)' }}>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <select className="dash-select" style={{ height: '36px', border: '1px solid var(--line)', borderRadius: '6px', padding: '0 12px', fontSize: '13px', fontWeight: '600', color: 'var(--text)', background: '#f8fafc', minWidth: '140px' }}>
            <option>All Branches</option>
            <option>Indore</option>
            <option>Bhopal</option>
            <option>Jaipur</option>
            <option>Pune</option>
            <option>Ahmedabad</option>
          </select>
          <select className="dash-select" style={{ height: '36px', border: '1px solid var(--line)', borderRadius: '6px', padding: '0 12px', fontSize: '13px', fontWeight: '600', color: 'var(--text)', background: '#f8fafc', minWidth: '140px' }}>
            <option>All Departments</option>
            <option>Operations</option>
            <option>Cleaning</option>
            <option>Plumbing</option>
            <option>Electrical</option>
            <option>Support</option>
            <option>Administration</option>
          </select>
          <button style={{ height: '36px', padding: '0 12px', border: '1px solid var(--line)', background: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '600', color: 'var(--text)', cursor: 'pointer' }}>
            <Calendar size={14} /> Oct 1 - Oct 31, 2026
          </button>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={{ height: '36px', padding: '0 16px', border: 'none', background: '#e0e7ff', color: '#4f46e5', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>
            <Download size={14} /> EXPORT CSV
          </button>
          <button style={{ height: '36px', padding: '0 16px', border: 'none', background: '#1e293b', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>
            <FileText size={14} /> PDF REPORT
          </button>
        </div>
      </div>

      {/* KPI Cards (Style mimicking the reference) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
        
        {/* Card 1: Productivity */}
        <div style={{ padding: '20px', borderRadius: '12px', background: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)', color: '#fff', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 4px 12px rgba(79, 70, 229, 0.2)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Productivity Score</span>
            <Activity size={16} style={{ opacity: 0.9 }} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <strong style={{ fontSize: '28px', fontWeight: '900' }}>88.4%</strong>
              <span style={{ fontSize: '12px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '2px', background: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: '4px' }}>
                <TrendingUp size={12} /> +2.4%
              </span>
            </div>
            <div style={{ height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px', marginTop: '12px', overflow: 'hidden' }}>
              <div style={{ width: '88.4%', height: '100%', background: '#fff', borderRadius: '2px' }} />
            </div>
          </div>
        </div>

        {/* Card 2: Efficiency */}
        <div style={{ padding: '20px', borderRadius: '12px', background: '#1e293b', color: '#fff', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 4px 12px rgba(15, 23, 42, 0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Avg Efficiency</span>
            <Target size={16} style={{ opacity: 0.9 }} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <strong style={{ fontSize: '28px', fontWeight: '900' }}>92.1%</strong>
              <span style={{ fontSize: '12px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '2px', color: '#34d399' }}>
                <TrendingUp size={12} /> +1.2%
              </span>
            </div>
            <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', marginTop: '12px', overflow: 'hidden' }}>
              <div style={{ width: '92.1%', height: '100%', background: '#3b82f6', borderRadius: '2px' }} />
            </div>
          </div>
        </div>

        {/* Card 3: Satisfaction / Rating */}
        <div className="kpi-card" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Avg Rating</span>
            <Star size={16} style={{ color: '#4f46e5' }} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <strong style={{ fontSize: '28px', fontWeight: '900', color: 'var(--text)' }}>4.92</strong>
              <span style={{ fontSize: '12px', fontWeight: '700', color: '#4f46e5' }}>Top 5%</span>
            </div>
            <div style={{ display: 'flex', gap: '4px', marginTop: '8px' }}>
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill={i <= 4 ? '#f59e0b' : '#e2e8f0'} color={i <= 4 ? '#f59e0b' : '#cbd5e1'} />)}
            </div>
          </div>
        </div>

        {/* Card 4: Attendance */}
        <div className="kpi-card" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Attendance Compliance</span>
            <Calendar size={16} style={{ color: '#ef4444' }} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <strong style={{ fontSize: '28px', fontWeight: '900', color: 'var(--text)' }}>94.1%</strong>
              <span style={{ fontSize: '12px', fontWeight: '700', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '2px' }}>
                <TrendingDown size={12} /> -1.2%
              </span>
            </div>
            <div style={{ height: '4px', background: '#f1f5f9', borderRadius: '2px', marginTop: '12px', overflow: 'hidden' }}>
              <div style={{ width: '94.1%', height: '100%', background: '#ef4444', borderRadius: '2px' }} />
            </div>
          </div>
        </div>

        {/* Card 5: Retention */}
        <div className="kpi-card" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--line)', background: '#fff', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Retention Rate</span>
            <Users size={16} style={{ color: '#10b981' }} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <strong style={{ fontSize: '28px', fontWeight: '900', color: 'var(--text)' }}>96.5%</strong>
              <span style={{ fontSize: '12px', fontWeight: '700', color: '#10b981', display: 'flex', alignItems: 'center', gap: '2px' }}>
                <TrendingUp size={12} /> +0.5%
              </span>
            </div>
            <div style={{ height: '4px', background: '#f1f5f9', borderRadius: '2px', marginTop: '12px', overflow: 'hidden' }}>
              <div style={{ width: '96.5%', height: '100%', background: '#10b981', borderRadius: '2px' }} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        
        {/* Left Main Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: '2' }}>
          
          {/* Charts Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {/* Chart 1: Productivity Trends */}
            <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px', minHeight: '320px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Department Productivity Trends</h3>
                <div style={{ background: '#f1f5f9', borderRadius: '20px', padding: '4px', display: 'flex', gap: '4px' }}>
                  <button style={{ background: '#fff', border: 'none', borderRadius: '16px', padding: '4px 12px', fontSize: '11px', fontWeight: '700', color: '#4f46e5', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', cursor: 'pointer' }}>Weekly</button>
                  <button style={{ background: 'transparent', border: 'none', borderRadius: '16px', padding: '4px 12px', fontSize: '11px', fontWeight: '600', color: 'var(--muted)', cursor: 'pointer' }}>Monthly</button>
                </div>
              </div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '16px', paddingTop: '20px' }}>
                {[60, 45, 75, 50, 90, 65, 85].map((h, i) => (
                  <div key={i} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '100%', height: `${h}%`, background: i === 4 ? '#4f46e5' : '#e0e7ff', borderRadius: '6px 6px 0 0', transition: 'height 0.3s ease' }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Chart 2: Attendance Heatmap / Line */}
            <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px', minHeight: '320px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Attendance Analytics</h3>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center' }}>
                {[
                  { label: 'Present', val: 85, color: '#10b981' },
                  { label: 'Absent', val: 5, color: '#ef4444' },
                  { label: 'Late Entries', val: 8, color: '#f59e0b' },
                  { label: 'On Leave', val: 2, color: '#3b82f6' }
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text)', width: '80px' }}>{item.label}</span>
                    <div style={{ flex: 1, height: '8px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: `${item.val}%`, height: '100%', background: item.color, borderRadius: '4px' }} />
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: '800', color: item.color, width: '40px', textAlign: 'right' }}>{item.val}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Employee Efficiency Matrix Table */}
          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Employee Efficiency Matrix</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <div className="dash-search" style={{ margin: 0, height: '34px', border: '1px solid var(--line)', borderRadius: '6px', width: '220px', display: 'flex', alignItems: 'center' }}>
                  <Search size={14} style={{ marginLeft: '12px', color: 'var(--muted)' }} />
                  <input
                    placeholder="Search employees..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ fontSize: '12px', border: 'none', background: 'transparent', outline: 'none', paddingLeft: '8px', flex: 1 }}
                  />
                </div>
                <button style={{ height: '34px', padding: '0 12px', border: '1px solid var(--line)', background: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '700', color: 'var(--text)', cursor: 'pointer' }}>
                  <ListFilter size={14} /> Filter
                </button>
              </div>
            </div>

            <div className="table-wrap" style={{ overflowX: 'auto' }}>
              <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="partner-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Employee</th>
                    <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', textAlign: 'right' }}>Productivity</th>
                    <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', textAlign: 'right' }}>Rev. Contribution</th>
                    <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', textAlign: 'center' }}>CSAT / Rating</th>
                    <th style={{ padding: '12px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Status</th>
                    <th style={{ padding: '12px', width: '40px' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEmployees.map((row) => (
                      <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '12px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '16px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800' }}>
                              {row.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>{row.name}</strong>
                              <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <MapPin size={10} /> {row.branch}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td style={{ padding: '12px', textAlign: 'right' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }}>
                            <strong style={{ fontSize: '13px', color: 'var(--text)' }}>{row.score}</strong>
                            <div style={{ width: '40px', height: '4px', background: '#f1f5f9', borderRadius: '2px', overflow: 'hidden' }}>
                              <div style={{ width: row.score, height: '100%', background: '#4f46e5' }} />
                            </div>
                          </div>
                        </td>
                        <td style={{ padding: '12px', fontSize: '13px', color: 'var(--text)', fontWeight: '700', textAlign: 'right' }}>{row.revenue}</td>
                        <td style={{ padding: '12px', fontSize: '13px', color: 'var(--text)', fontWeight: '700', textAlign: 'center' }}>{row.rating}</td>
                        <td style={{ padding: '12px' }}>
                          {getStatusBadge(row.status)}
                        </td>
                        <td style={{ padding: '12px', textAlign: 'center' }}>
                          <button style={{ background: 'transparent', border: 'none', color: 'var(--muted)', cursor: 'pointer', padding: '4px' }}>
                            <MoreVertical size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {filteredEmployees.length === 0 && (
                      <tr>
                        <td colSpan="6" style={{ padding: '24px', textAlign: 'center', color: 'var(--muted)', fontSize: '13px' }}>
                          No employees found.
                        </td>
                      </tr>
                    )}
                </tbody>
              </table></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', fontSize: '12px', color: 'var(--muted)' }}>
              <span>Showing {filteredEmployees.length} of {MOCK_EMPLOYEES.length} employees</span>
              <div style={{ display: 'flex', gap: '4px' }}>
                <button style={{ padding: '4px 8px', border: '1px solid var(--line)', background: '#fff', borderRadius: '4px', cursor: 'pointer' }}>Prev</button>
                <button style={{ padding: '4px 8px', border: '1px solid var(--line)', background: '#fff', borderRadius: '4px', cursor: 'pointer' }}>Next</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content / Side Panels */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: '1' }}>
          
          {/* Top Performers Leaders Panel */}
          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <Award size={18} style={{ color: '#10b981' }} />
              <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Revenue Leaders</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {MOCK_TOP_PERFORMERS.slice(0,4).map((emp, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '18px', background: i === 0 ? '#fef3c7' : '#f1f5f9', color: i === 0 ? '#d97706' : 'var(--text)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '800' }}>
                      {emp.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>{emp.name}</strong>
                      <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{emp.status}</span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <strong style={{ display: 'block', fontSize: '13px', color: '#4f46e5' }}>{emp.revenue}</strong>
                    <span style={{ fontSize: '11px', color: '#10b981', fontWeight: '700' }}>{emp.performance}</span>
                  </div>
                </div>
              ))}
            </div>
            <button style={{ width: '100%', marginTop: '20px', padding: '10px', background: 'transparent', border: '1px solid var(--line)', borderRadius: '8px', fontSize: '12px', fontWeight: '800', color: 'var(--text)', cursor: 'pointer' }}>
              VIEW FULL RANKING
            </button>
          </div>

          {/* Branch Performance Leaderboard */}
          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <MapPin size={18} style={{ color: '#ec4899' }} />
              <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Branch Leaderboard</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {MOCK_BRANCH_LEADERBOARD.map((b) => (
                <div key={b.rank} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderRadius: '8px', background: '#f8fafc', border: '1px solid var(--line)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '12px', background: b.rank === 1 ? '#d1fae5' : '#e2e8f0', color: b.rank === 1 ? '#059669' : 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '800' }}>
                      #{b.rank}
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>{b.branch}</strong>
                      <span style={{ fontSize: '10px', color: 'var(--muted)' }}>{b.count} Employees</span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>{b.score}</strong>
                    <span style={{ fontSize: '10px', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '2px', justifyContent: 'flex-end' }}>
                      <Star size={10} style={{ color: '#f59e0b', fill: '#f59e0b' }} /> {b.rating}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rating Distribution (Pie/Doughnut Placeholder) */}
          <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <Star size={18} style={{ color: '#f59e0b' }} />
              <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Rating Distribution</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { label: '5 Stars', val: 55, color: '#10b981' },
                { label: '4 Stars', val: 30, color: '#3b82f6' },
                { label: '3 Stars', val: 10, color: '#f59e0b' },
                { label: '1-2 Stars', val: 5, color: '#ef4444' }
              ].map(item => (
                <div key={item.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: '700', marginBottom: '6px' }}>
                    <span style={{ color: 'var(--text)' }}>{item.label}</span>
                    <span style={{ color: 'var(--muted)' }}>{item.val}%</span>
                  </div>
                  <div style={{ height: '6px', background: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: `${item.val}%`, height: '100%', background: item.color, borderRadius: '3px' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
