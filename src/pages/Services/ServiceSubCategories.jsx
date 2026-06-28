import React, { useState } from 'react';
import { 
  Plus, 
  Download, 
  SlidersHorizontal, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  LayoutList, 
  Folder, 
  ShieldCheck, 
  Eye, 
  Edit, 
  X, 
  Save 
} from 'lucide-react';
import { useApp } from '../../hooks/useApp';

const initialSubCategories = [
  { id: 'SCAT-01', name: 'Home Cleaning', parent: 'Cleaning Services', serviceCount: 15, status: 'ACTIVE', statusBg: '#ecfdf5', statusColor: '#059669', date: '2023-10-15', icon: '🧹' },
  { id: 'SCAT-02', name: 'Plumbing Repair', parent: 'Maintenance', serviceCount: 8, status: 'ACTIVE', statusBg: '#ecfdf5', statusColor: '#059669', date: '2023-10-16', icon: '🔧' },
  { id: 'SCAT-03', name: 'Electrical Works', parent: 'Maintenance', serviceCount: 12, status: 'ACTIVE', statusBg: '#ecfdf5', statusColor: '#059669', date: '2023-10-17', icon: '⚡' },
  { id: 'SCAT-04', name: 'Appliance Repair', parent: 'Repairs', serviceCount: 5, status: 'INACTIVE', statusBg: '#fef3c7', statusColor: '#d97706', date: '2023-10-18', icon: '🧊' },
  { id: 'SCAT-05', name: 'Car Wash', parent: 'Automotive', serviceCount: 3, status: 'ACTIVE', statusBg: '#ecfdf5', statusColor: '#059669', date: '2023-10-19', icon: '🚗' },
];

export default function ServiceSubCategories({ onAddSubCategory }) {
  const [subCategories, setSubCategories] = useState(initialSubCategories);
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  
  // Modal states for View and Edit actions
  const [activeModal, setActiveModal] = useState(null); // 'view' | 'edit' | null
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  // Filter Engine
  const filteredSubCategories = subCategories.filter(item => {
    if (statusFilter === 'ALL') return true;
    return item.status === statusFilter;
  });

  // Dynamic Calculative KPIs
  const totalCount = subCategories.length;
  const activeCount = subCategories.filter(s => s.status === 'ACTIVE').length;
  const inactiveCount = subCategories.filter(s => s.status === 'INACTIVE').length;
  const uniqueParentsCount = new Set(subCategories.map(s => s.parent)).size;

  // Open view/edit popup modal handler
  const handleOpenModal = (type, item) => {
    setSelectedSubCategory({ ...item });
    setActiveModal(type);
  };

  // Save changes handler for edit mode
  const handleSaveChanges = () => {
    setSubCategories(subCategories.map(item => 
      item.id === selectedSubCategory.id ? selectedSubCategory : item
    ));
    setActiveModal(null);
  };

  // Client-Side CSV file exporter logic
  const handleExportCSV = () => {
    const headers = ["Sub Category ID", "Name", "Parent Category", "Services Count", "Created Date", "Status"];
    const rows = filteredSubCategories.map(item => [
      item.id, item.name, item.parent, item.serviceCount, item.date, item.status
    ]);

    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Sub_Categories_Report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="service-list-container" style={{ animation: 'fadeIn 0.3s ease-in-out', position: 'relative' }}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .premium-kpi-grid {
          display: grid;
          gap: 16px;
          margin-bottom: 24px;
        }
        @media (min-width: 1024px) { .premium-kpi-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (min-width: 768px) and (max-width: 1023px) { .premium-kpi-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 767px) { .premium-kpi-grid { grid-template-columns: repeat(1, 1fr); } }
        
        .premium-kpi-card {
          padding: 20px;
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 110px;
          transition: all 0.2s ease;
          box-shadow: 0 1px 3px rgba(0,0,0,0.02);
        }
        .premium-kpi-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.04);
          border-color: #cbd5e1;
        }
        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 8px;
        }
        .premium-table-row {
          transition: background-color 0.15s ease;
        }
        .premium-table-row:hover {
          background-color: #f8fafc;
        }
      `}</style>

      {/* Header section */}
      <div className="partners-page-header" style={{ marginBottom: '24px', alignItems: 'center' }}>
        <div>
          <h2 className="page-title" style={{ fontSize: '20px', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Layers size={20} color="#4f46e5" /> Sub Categories
          </h2>
          <p className="page-subtitle" style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '6px' }}>Manage specialized service groupings and hierarchies.</p>
        </div>
        <div className="partners-header-buttons">
          <button onClick={handleExportCSV} className="secondary-action-btn font-bold" type="button" style={{ height: '36px', borderRadius: '8px', cursor: 'pointer' }}>
            <Download size={14} style={{ marginRight: '6px' }} />
            <span>Export CSV</span>
          </button>
          <button className="primary-action-btn font-bold" type="button" onClick={onAddSubCategory} style={{ height: '36px', borderRadius: '8px', backgroundColor: '#0f172a', cursor: 'pointer' }}>
            <Plus size={14} style={{ marginRight: '6px' }} />
            <span>Add Sub Category</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <section className="premium-kpi-grid">
        <div className="premium-kpi-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Sub Categories</span>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', margin: '8px 0 0 0', lineHeight: 1 }}>{totalCount}</strong>
            </div>
            <div className="icon-wrapper" style={{ background: '#f1f5f9' }}>
              <Layers size={16} color="#475569" />
            </div>
          </div>
        </div>

        <div className="premium-kpi-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Active</span>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', margin: '8px 0 0 0', lineHeight: 1 }}>{activeCount}</strong>
            </div>
            <div className="icon-wrapper" style={{ background: '#ecfdf5' }}>
              <ShieldCheck size={16} color="#10b981" />
            </div>
          </div>
        </div>

        <div className="premium-kpi-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Inactive</span>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', margin: '8px 0 0 0', lineHeight: 1 }}>{inactiveCount}</strong>
            </div>
            <div className="icon-wrapper" style={{ background: '#fef3c7' }}>
              <LayoutList size={16} color="#d97706" />
            </div>
          </div>
        </div>

        <div className="premium-kpi-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Parent Categories</span>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', margin: '8px 0 0 0', lineHeight: 1 }}>{uniqueParentsCount}</strong>
            </div>
            <div className="icon-wrapper" style={{ background: '#eff6ff' }}>
              <Folder size={16} color="#3b82f6" />
            </div>
          </div>
        </div>
      </section>

      {/* Table Panel */}
      <section className="panel" style={{ padding: '0', overflow: 'hidden', borderRadius: '12px' }}>
        <div style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--line)' }}>
          <h2 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '0' }}>Sub Categories List</h2>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', position: 'relative' }}>
            
            {/* Functional Filter Action trigger */}
            <button 
              onClick={() => setShowFilterDropdown(!showFilterDropdown)} 
              className="secondary-action-btn" 
              style={{ height: '36px', padding: '0 12px', display: 'flex', alignItems: 'center', gap: '6px', borderRadius: '8px', cursor: 'pointer', background: showFilterDropdown ? '#f8fafc' : '#fff' }}
            >
              <SlidersHorizontal size={14} style={{ color: showFilterDropdown ? '#4f46e5' : 'inherit' }} />
              <span style={{ fontSize: '12px', fontWeight: '700' }}>Filter: {statusFilter}</span>
            </button>

            {showFilterDropdown && (
              <div style={{ position: 'absolute', top: '42px', right: 0, background: '#ffffff', border: '1px solid var(--line)', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', zIndex: 10, minWidth: '140px', display: 'flex', flexDirection: 'column', padding: '4px 0' }}>
                {['ALL', 'ACTIVE', 'INACTIVE'].map((status) => (
                  <button
                    key={status}
                    onClick={() => { setStatusFilter(status); setShowFilterDropdown(false); }}
                    style={{ padding: '8px 16px', fontSize: '13px', textAlign: 'left', background: statusFilter === status ? '#f1f5f9' : 'transparent', color: statusFilter === status ? '#4f46e5' : 'var(--text)', border: 'none', cursor: 'pointer', fontWeight: statusFilter === status ? '700' : '500' }}
                  >
                    {status}
                  </button>
                ))}
              </div>
            )}

          </div>
        </div>

        <div className="table-wrap">
          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}>
            <table className="partner-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ background: '#f8fafc' }}>
                <tr>
                  <th style={{ padding: '14px 24px', fontSize: '11px', color: '#64748b', fontWeight: '800', textAlign: 'left' }}>SUB CATEGORY INFO</th>
                  <th style={{ padding: '14px 24px', fontSize: '11px', color: '#64748b', fontWeight: '800', textAlign: 'left' }}>PARENT CATEGORY</th>
                  <th style={{ padding: '14px 24px', fontSize: '11px', color: '#64748b', fontWeight: '800', textAlign: 'left' }}>SERVICES</th>
                  <th style={{ padding: '14px 24px', fontSize: '11px', color: '#64748b', fontWeight: '800', textAlign: 'left' }}>CREATED DATE</th>
                  <th style={{ padding: '14px 24px', fontSize: '11px', color: '#64748b', fontWeight: '800', textAlign: 'left' }}>STATUS</th>
                  <th style={{ padding: '14px 24px', fontSize: '11px', color: '#64748b', fontWeight: '800', textAlign: 'right' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubCategories.map((row) => (
                  <tr key={row.id} className="premium-table-row" style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '16px 24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
                          {row.icon}
                        </div>
                        <div>
                          <strong style={{ display: 'block', fontSize: '14px', color: 'var(--text)' }}>{row.name}</strong>
                          <span style={{ display: 'block', fontSize: '11px', color: '#64748b', marginTop: '2px' }}>{row.id}</span>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '16px 24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Folder size={14} color="#94a3b8" />
                        <span style={{ color: 'var(--text)', fontSize: '13px', fontWeight: '600' }}>{row.parent}</span>
                      </div>
                    </td>
                    <td style={{ padding: '16px 24px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5f9', color: '#334155', fontWeight: '700', fontSize: '12px', padding: '4px 10px', borderRadius: '12px' }}>
                        {row.serviceCount} Services
                      </span>
                    </td>
                    <td style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>
                      {row.date}
                    </td>
                    <td style={{ padding: '16px 24px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '10px', fontWeight: '800', padding: '4px 8px', borderRadius: '6px', background: row.statusBg, color: row.statusColor }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: row.statusColor }}></span>
                        {row.status}
                      </span>
                    </td>
                    <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                      {/* View & Edit Actions added replacing old arrow/three dots */}
                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                        <button 
                          onClick={() => handleOpenModal('view', row)}
                          style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#64748b', padding: '6px', borderRadius: '6px', transition: 'background 0.2s ease' }} 
                          onMouseOver={(e) => e.currentTarget.style.background = '#e2e8f0'} 
                          onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                          title="View"
                        >
                          <Eye size={16} />
                        </button>
                        <button 
                          onClick={() => handleOpenModal('edit', row)}
                          style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#64748b', padding: '6px', borderRadius: '6px', transition: 'background 0.2s ease' }} 
                          onMouseOver={(e) => e.currentTarget.style.background = '#e2e8f0'} 
                          onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                          title="Edit"
                        >
                          <Edit size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredSubCategories.length === 0 && (
            <div style={{ padding: '60px', textAlign: 'center' }}>
              <Layers size={40} color="#cbd5e1" style={{ margin: '0 auto 16px auto', display: 'block' }} />
              <strong style={{ display: 'block', fontSize: '15px', color: 'var(--text)' }}>No sub categories found</strong>
              <p style={{ color: '#64748b', fontSize: '13px', marginTop: '4px' }}>Try adjusting your filter criteria.</p>
            </div>
          )}
        </div>

        <div className="directory-table-footer" style={{ padding: '16px 24px', background: '#fff', borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '600' }}>Showing {filteredSubCategories.length} of {totalCount} sub categories</span>
          <div className="pagination-wrap" style={{ display: 'flex', gap: '4px' }}>
            <button type="button" disabled style={{ padding: '6px 8px', border: '1px solid var(--line)', background: '#fff', borderRadius: '6px', color: '#cbd5e1', cursor: 'not-allowed' }}>
              <ChevronLeft size={16} />
            </button>
            <button type="button" style={{ padding: '6px 12px', border: '1px solid #4f46e5', background: '#4f46e5', color: '#fff', borderRadius: '6px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}>1</button>
            <button type="button" style={{ padding: '6px 8px', border: '1px solid var(--line)', background: '#fff', borderRadius: '6px', color: 'var(--text)', cursor: 'pointer' }}>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Action View / Edit Modal Box Dynamic Layer */}
      {activeModal && selectedSubCategory && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(15,23,42,0.35)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}>
          <div style={{ background: '#ffffff', width: '100%', maxWidth: '440px', borderRadius: '12px', padding: '24px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '800', color: '#0f172a' }}>
                {activeModal === 'view' ? 'Sub Category Details' : 'Edit Sub Category'}
              </h3>
              <button onClick={() => setActiveModal(null)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
                <X size={18} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: '#64748b', marginBottom: '4px' }}>SUB CATEGORY NAME</label>
                <input
                  type="text"
                  disabled={activeModal === 'view'}
                  value={selectedSubCategory.name}
                  onChange={(e) => setSelectedSubCategory({ ...selectedSubCategory, name: e.target.value })}
                  style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid var(--line)', background: activeModal === 'view' ? '#f8fafc' : '#fff', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: '#64748b', marginBottom: '4px' }}>PARENT CATEGORY</label>
                <input
                  type="text"
                  disabled={activeModal === 'view'}
                  value={selectedSubCategory.parent}
                  onChange={(e) => setSelectedSubCategory({ ...selectedSubCategory, parent: e.target.value })}
                  style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid var(--line)', background: activeModal === 'view' ? '#f8fafc' : '#fff', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: '#64748b', marginBottom: '4px' }}>SERVICES COUNT</label>
                  <input
                    type="number"
                    disabled={activeModal === 'view'}
                    value={selectedSubCategory.serviceCount}
                    onChange={(e) => setSelectedSubCategory({ ...selectedSubCategory, serviceCount: parseInt(e.target.value) || 0 })}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid var(--line)', background: activeModal === 'view' ? '#f8fafc' : '#fff', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: '#64748b', marginBottom: '4px' }}>STATUS</label>
                  <select
                    disabled={activeModal === 'view'}
                    value={selectedSubCategory.status}
                    onChange={(e) => {
                      const status = e.target.value;
                      const statusBg = status === 'ACTIVE' ? '#ecfdf5' : '#fef3c7';
                      const statusColor = status === 'ACTIVE' ? '#059669' : '#d97706';
                      setSelectedSubCategory({ ...selectedSubCategory, status, statusBg, statusColor });
                    }}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid var(--line)', background: activeModal === 'view' ? '#f8fafc' : '#fff', outline: 'none' }}
                  >
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="INACTIVE">INACTIVE</option>
                  </select>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button onClick={() => setActiveModal(null)} style={{ padding: '8px 14px', borderRadius: '6px', border: '1px solid var(--line)', background: '#fff', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}>
                Close
              </button>
              {activeModal === 'edit' && (
                <button onClick={handleSaveChanges} style={{ padding: '8px 14px', borderRadius: '6px', border: 'none', background: '#0f172a', color: '#fff', fontSize: '12px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Save size={14} />
                  <span>Save Changes</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}