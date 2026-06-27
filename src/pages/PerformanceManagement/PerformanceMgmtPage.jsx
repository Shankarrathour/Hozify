import React, { useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import { useToast } from '../../components/common/ToastNotification';
import { 
  AddEditModal, DeleteConfirmationModal, PreviewModal, SuccessModal 
} from '../../components/common/popups/Modals';
import { triggerDownload, generateCSV } from '../../utils/downloadHelper';
import { 
  Search, Plus, Download, Edit, Trash2, Eye, Award, Activity, Star, CheckCircle2, AlertCircle
} from 'lucide-react';

const INITIAL_PERFS = [
  { id: 'PERF-101', name: 'Rajesh Kumar', type: 'ISP', rating: 4.8, acceptance: 96, completion: 94, earnings: 4200.00 },
  { id: 'PERF-102', name: 'Electro Solutions Ltd', type: 'BSP', rating: 4.5, acceptance: 89, completion: 87, earnings: 18500.00 },
  { id: 'PERF-103', name: 'Delhi Goods Corp', type: 'BS', rating: 4.2, acceptance: 92, completion: 85, earnings: 9200.00 },
  { id: 'PERF-104', name: 'Sunil Dutt', type: 'ISP', rating: 4.9, acceptance: 98, completion: 97, earnings: 5100.00 },
  { id: 'PERF-105', name: 'Urban Spares Store', type: 'BS', rating: 3.8, acceptance: 75, completion: 72, earnings: 2400.00 }
];

export default function PerformanceMgmtPage() {
  const { addToast } = useToast();
  const [perfs, setPerfs] = useState(INITIAL_PERFS);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  
  // Modals
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedPerf, setSelectedPerf] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');

  const handleExportCSV = () => {
    const csvContent = generateCSV(['ID', 'Name', 'Partner Type', 'Rating', 'Acceptance %', 'Completion %', 'Earnings'], perfs);
    triggerDownload(csvContent, 'partner_performance.csv', 'text/csv');
    addToast('Performance directory exported successfully!', 'success');
  };

  const filteredPerfs = perfs.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'All' || p.type === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <AdminShell activeTab="Performance Management" headerTitle="Partner Performance Console">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          Operations &gt; <span style={{ color: '#2A2454' }}>Performance Management</span>
        </div>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="custom-page-heading">Partner Performance Console</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Audit partner acceptance rates, completion indices, ratings, and platform earnings.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={handleExportCSV} className="custom-btn-secondary">
              <Download size={16} strokeWidth={2.5} /> Export CSV
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="custom-kpi-card-container">
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Award size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Top Performers (&gt;4.5)</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>{perfs.filter(p => p.rating >= 4.5).length} Partners</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#fee2e2', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AlertCircle size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Under Review (&lt;80% Comp)</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#ef4444', margin: '2px 0 0 0' }}>{perfs.filter(p => p.completion < 80).length} Partners</h2>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <input 
              type="text" 
              placeholder="Search partner name..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '10px 16px 10px 40px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px', outline: 'none' }}
            />
            <Search size={16} style={{ position: 'absolute', left: '14px', top: '12px', color: '#94a3b8' }} />
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            {['All', 'ISP', 'BSP', 'BS'].map(tab => (
              <button 
                key={tab} 
                onClick={() => setTypeFilter(tab)}
                style={{
                  padding: '8px 14px',
                  border: typeFilter === tab ? '1.5px solid #2A2454' : '1px solid #cbd5e1',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: '700',
                  background: typeFilter === tab ? '#e0e7ff' : '#fff',
                  color: '#2A2454',
                  cursor: 'pointer'
                }}
              >
                {tab === 'All' ? 'All Partners' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', overflow: 'hidden' }}>
          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
            <thead>
              <tr className="custom-table-header">
                <th style={{ padding: '16px 24px' }}>PARTNER ID</th>
                <th style={{ padding: '16px 24px' }}>NAME</th>
                <th style={{ padding: '16px 24px' }}>PARTNER TYPE</th>
                <th style={{ padding: '16px 24px' }}>RATING</th>
                <th style={{ padding: '16px 24px' }}>ACCEPTANCE</th>
                <th style={{ padding: '16px 24px' }}>COMPLETION</th>
                <th style={{ padding: '16px 24px' }}>EARNINGS</th>
                <th style={{ padding: '16px 24px', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredPerfs.length > 0 ? (
                filteredPerfs.map(row => (
                  <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace', color: '#4f46e5' }}>{row.id}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700', color: '#1e1b4b' }}>{row.name}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '600' }}>{row.type}</td>
                    <td style={{ padding: '18px 24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '700', color: row.rating >= 4.5 ? '#059669' : '#d97706' }}>
                        <Star size={14} fill="currentColor" /> {row.rating}
                      </div>
                    </td>
                    <td style={{ padding: '18px 24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ flex: 1, width: '60px', height: '6px', background: '#eee9f6', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ width: `${row.acceptance}%`, height: '100%', background: '#4f46e5' }} />
                        </div>
                        <span style={{ fontWeight: '700' }}>{row.acceptance}%</span>
                      </div>
                    </td>
                    <td style={{ padding: '18px 24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ flex: 1, width: '60px', height: '6px', background: '#eee9f6', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ width: `${row.completion}%`, height: '100%', background: row.completion >= 85 ? '#059669' : '#ef4444' }} />
                        </div>
                        <span style={{ fontWeight: '700', color: row.completion >= 85 ? '#059669' : '#ef4444' }}>{row.completion}%</span>
                      </div>
                    </td>
                    <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace' }}>${row.earnings.toLocaleString()}</td>
                    <td style={{ padding: '18px 24px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                        <button onClick={() => { setSelectedPerf(row); setIsPreviewOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Preview"><Eye size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>No partner performance records found.</td>
                </tr>
              )}
            </tbody>
          </table></div>
        </div>

      </div>

      {/* Modals */}
      <PreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        title="Partner Performance Metrics" 
        data={{
          'Partner ID': selectedPerf?.id,
          'Partner Name': selectedPerf?.name,
          'Partner Category': selectedPerf?.type,
          'Fulfillment Rating': `${selectedPerf?.rating} Stars`,
          'Acceptance Rate': `${selectedPerf?.acceptance}%`,
          'Completion Rate': `${selectedPerf?.completion}%`,
          'Total Wallet Earnings': `$${selectedPerf?.earnings.toLocaleString()}`
        }} 
      />

    </AdminShell>
  );
}
