import React, { useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import { 
  Filter, Plus, FileText, BarChart2, MoreVertical, 
  ChevronLeft, ChevronRight, CheckCircle, TrendingUp
} from 'lucide-react';

export default function Blogs() {
  const [activeTab, setActiveTab] = useState('All Posts');

  const tabs = ['All Posts', 'Published', 'Drafts'];

  const posts = [
    {
      id: 'cms-post-id-7294',
      title: 'The Future of AI in Enterprise Workflows',
      author: 'Sarah Jenkins',
      category: 'Technology',
      status: 'Published',
      date: 'Oct 24, 2023',
      imgColor: '#1e293b' // Dark placeholder
    },
    {
      id: 'cms-post-id-8102',
      title: '10 Design Systems Every Team Needs',
      author: 'Marcus Thorne',
      category: 'Design',
      status: 'Draft',
      date: 'Oct 22, 2023',
      imgColor: '#334155'
    },
    {
      id: 'cms-post-id-9021',
      title: 'Optimizing CMS for Scale',
      author: 'Elena Rodriguez',
      category: 'Engineering',
      status: 'Published',
      date: 'Oct 20, 2023',
      imgColor: '#475569'
    },
    {
      id: 'cms-post-id-1042',
      title: 'Content Strategy in 2024',
      author: 'David Chen',
      category: 'Strategy',
      status: 'Archived',
      date: 'Oct 18, 2023',
      imgColor: '#0f172a'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Published': return '#10b981'; // Green
      case 'Draft': return '#f59e0b'; // Orange
      case 'Archived': return '#ef4444'; // Red
      default: return '#cbd5e1';
    }
  };

  return (
    <AdminShell activeTab="CMS Management" searchPlaceholder="Search resources">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '40px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Inter, sans-serif' }}>
        
        {/* Top Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', fontWeight: '600', color: '#475569', cursor: 'pointer' }}>
              <Filter size={16} /> Filters
            </button>
            <div style={{ display: 'flex', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '6px', overflow: 'hidden' }}>
              {tabs.map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{ 
                    padding: '8px 16px', fontSize: '13px', fontWeight: activeTab === tab ? '700' : '600',
                    color: activeTab === tab ? '#0f172a' : '#64748b',
                    background: activeTab === tab ? '#f8fafc' : '#fff',
                    border: 'none', borderRight: tab !== 'Drafts' ? '1px solid #e2e8f0' : 'none',
                    cursor: 'pointer'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: '#0f172a', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '600', color: '#fff', cursor: 'pointer' }}>
            <Plus size={16} /> Add New Post
          </button>
        </div>

        {/* Summary Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr', gap: '24px' }}>
          {/* Card 1 */}
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TOTAL POSTS</span>
              <FileText size={18} color="#94a3b8" />
            </div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '32px', fontWeight: '800', color: '#0f172a' }}>1,284</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: '600', color: '#10b981' }}>
              <TrendingUp size={14} /> +12% this month
            </div>
          </div>

          {/* Card 2 */}
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>AVG. ENGAGEMENT</span>
              <BarChart2 size={18} color="#94a3b8" />
            </div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '32px', fontWeight: '800', color: '#0f172a' }}>8.4%</h3>
            <div style={{ fontSize: '12px', color: '#64748b' }}>
              Stable activity
            </div>
          </div>

          {/* Card 3 */}
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ maxWidth: '60%' }}>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '800', color: '#0f172a' }}>Content Health Score</h4>
              <p style={{ margin: '0 0 16px 0', fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>Your blog SEO performance is above the enterprise benchmark.</p>
              <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: '85%', height: '100%', background: '#0f172a', borderRadius: '4px' }} />
              </div>
            </div>
            <div style={{ width: '80px', height: '80px', background: '#f8fafc', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid #f1f5f9', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '-4px', border: '4px solid #e2e8f0', borderRadius: '50%', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 50%)' }} />
              <CheckCircle size={32} color="#cbd5e1" />
            </div>
          </div>
        </div>

        {/* Table Area */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
          
          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TITLE</th>
                <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>AUTHOR</th>
                <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>CATEGORY</th>
                <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>STATUS</th>
                <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>DATE</th>
                <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, idx) => (
                <tr key={post.id} style={{ borderBottom: idx !== posts.length - 1 ? '1px solid #e2e8f0' : 'none' }}>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                      <div style={{ width: '48px', height: '36px', borderRadius: '4px', background: post.imgColor, flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
                        {/* Mock image content */}
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(255,255,255,0.1), transparent)' }} />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'rgba(255,255,255,0.2)', transform: 'skewY(-10deg)', transformOrigin: 'bottom right' }} />
                      </div>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a', marginBottom: '4px' }}>{post.title}</div>
                        <div style={{ fontSize: '12px', color: '#64748b' }}>{post.id}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: '700', color: '#fff', overflow: 'hidden' }}>
                        {/* Placeholder avatar */}
                        <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&background=random&color=fff&size=24`} alt={post.author} />
                      </div>
                      <span style={{ fontSize: '13px', color: '#334155' }}>{post.author}</span>
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <span style={{ padding: '4px 8px', background: '#f1f5f9', borderRadius: '4px', fontSize: '11px', fontWeight: '700', color: '#475569' }}>
                      {post.category}
                    </span>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: getStatusColor(post.status) }} />
                      <span style={{ fontSize: '13px', color: '#334155' }}>{post.status}</span>
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px', fontSize: '13px', color: '#64748b' }}>
                    {post.date}
                  </td>
                  <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                    <button style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: '4px' }}>
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table></div>

          {/* Pagination */}
          <div style={{ padding: '16px 24px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc' }}>
            <div style={{ fontSize: '13px', color: '#64748b' }}>
              Showing 1 to 4 of 1,284 results
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <button style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '4px', color: '#64748b', cursor: 'pointer' }}>
                <ChevronLeft size={16} />
              </button>
              <button style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', border: '1px solid #0f172a', borderRadius: '4px', color: '#fff', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>
                1
              </button>
              <button style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '4px', color: '#475569', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>
                2
              </button>
              <button style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '4px', color: '#475569', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>
                3
              </button>
              <span style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontSize: '13px' }}>...</span>
              <button style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '4px', color: '#475569', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>
                32
              </button>
              <button style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '4px', color: '#64748b', cursor: 'pointer' }}>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}
