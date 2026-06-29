import React, { useState } from 'react';
import {
  SlidersHorizontal,
  FolderTree,
  CheckCircle,
  Banknote,
  Percent,
  Eye,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  X,
  Save,
  DollarSign
} from 'lucide-react';

const initialCategories = [
  { id: 'CAT-2024-001', name: 'Facility Maintenance', total: 12, active: 8, revenue: 42500.00, status: 'VERIFIED', basePrice: 150 },
  { id: 'CAT-2024-002', name: 'HVAC Systems', total: 8, active: 8, revenue: 31200.00, status: 'VERIFIED', basePrice: 200 },
  { id: 'CAT-2024-003', name: 'Emergency Response', total: 15, active: 4, revenue: 12400.00, status: 'PENDING', basePrice: 350 },
  { id: 'CAT-2024-004', name: 'Groundskeeping', total: 22, active: 18, revenue: 18900.00, status: 'VERIFIED', basePrice: 90 },
  { id: 'CAT-2024-005', name: 'Compliance Audits', total: 5, active: 0, revenue: 0.00, status: 'SUSPENDED', basePrice: 500 },
  { id: 'CAT-2024-006', name: 'IT Infrastructure', total: 11, active: 11, revenue: 23400.00, status: 'VERIFIED', basePrice: 180 }
];

export default function ServiceCategories({ onAddCategory }) {
  const [categories, setCategories] = useState(initialCategories);
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  
  // Modals / Focused Actions State Engine
  const [activeModal, setActiveModal] = useState(null); // 'view' | 'edit' | 'price' | null
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Dynamic Multi-filter Handler
  const filteredCategories = categories.filter(cat => {
    if (statusFilter === 'ALL') return true;
    return cat.status === statusFilter;
  });

  // Calculate Dynamic KPIs based on real state data array loops
  const totalCategoriesCount = categories.length;
  const activeServicesCount = categories.reduce((acc, curr) => acc + curr.active, 0);
  const totalRevenueSum = categories.reduce((acc, curr) => acc + curr.revenue, 0);
  const totalServicesPossible = categories.reduce((acc, curr) => acc + curr.total, 0);
  const avgUtilizationRate = totalServicesPossible > 0 
    ? ((activeServicesCount / totalServicesPossible) * 100).toFixed(1) 
    : '0.0';

  // Action Engines
  const handleDelete = (id) => {
    if (window.confirm("Bhai, kya aap sach me is category ko delete karna chahte hain?")) {
      setCategories(categories.filter(cat => cat.id !== id));
    }
  };

  const openModal = (type, category) => {
    setSelectedCategory({ ...category });
    setActiveModal(type);
  };

  const handleSaveChanges = () => {
    setCategories(categories.map(cat => cat.id === selectedCategory.id ? selectedCategory : cat));
    setActiveModal(null);
  };

  const handleGlobalPriceSetup = () => {
    alert("Global Price Configuration Module triggered! Individual pricing can be set directly via action table rows.");
  };

  // Client side native CSV Downloader
  const handleExportCSV = () => {
    const headers = ["Category ID", "Name", "Total Services", "Active Services", "Revenue MTD", "Status", "Base Price"];
    const rows = filteredCategories.map(cat => [
      cat.id, cat.name, cat.total, cat.active, cat.revenue, cat.status, cat.basePrice || 0
    ]);

    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Service_Categories_Report.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrintPDF = () => {
    window.print();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative' }}>
      
      {/* CSS Styles for Clean Printing Print Engine Layout inside JS */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          .table-responsive, .table-responsive * { visibility: visible; }
          .table-responsive { position: absolute; left: 0; top: 0; width: 100%; }
          th:last-child, td:last-child { display: none !important; }
        }
      `}</style>

      {/* Title & Actions Row */}
      <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Service Categories</h1>
          <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '4px', margin: 0 }}>Manage and organize your service offerings across the enterprise.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px', position: 'relative' }}>
          
          {/* NEW: Add Price for Service Main Header Action Trigger Button */}
          <button
            onClick={handleGlobalPriceSetup}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: '#ffffff',
              color: '#25108f',
              border: '1px solid #25108f',
              borderRadius: '6px',
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#f4eff8'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#ffffff'; }}
            type="button"
          >
            <DollarSign size={16} />
            <span>Add Price for Service</span>
          </button>

          {/* Working Interactive Filter Dropdown Mechanism */}
          <button
            onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: showFilterDropdown ? '#f4eff8' : '#ffffff',
              color: 'var(--text)',
              border: showFilterDropdown ? '1px solid #25108f' : '1px solid var(--line)',
              borderRadius: '6px',
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: '700',
              cursor: 'pointer'
            }}
            type="button"
          >
            <SlidersHorizontal size={16} style={{ color: showFilterDropdown ? '#25108f' : 'inherit' }} />
            <span>Filter: {statusFilter}</span>
          </button>

          {showFilterDropdown && (
            <div style={{ position: 'absolute', top: '42px', left: 0, background: '#ffffff', border: '1px solid var(--line)', borderRadius: '6px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', zIndex: 10, minWidth: '160px', display: 'flex', flexDirection: 'column', padding: '4px 0' }}>
              {['ALL', 'VERIFIED', 'PENDING', 'SUSPENDED'].map((status) => (
                <button
                  key={status}
                  onClick={() => { setStatusFilter(status); setShowFilterDropdown(false); }}
                  style={{ padding: '8px 16px', textTransform: 'capitalize', fontSize: '13px', textAlign: 'left', background: statusFilter === status ? '#f4eff8' : 'transparent', color: statusFilter === status ? '#25108f' : 'var(--text)', border: 'none', cursor: 'pointer', fontWeight: statusFilter === status ? '700' : '500' }}
                >
                  {status.toLowerCase()}
                </button>
              ))}
            </div>
          )}
          
          <button
            onClick={onAddCategory}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: '#25108f',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: '700',
              cursor: 'pointer'
            }}
            type="button"
          >
            <span>+ Add Category</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="no-print" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
        <div className="panel" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--line)', padding: '20px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Categories</span>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', marginTop: '8px', fontWeight: '800' }}>{totalCategoriesCount}</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '8px', background: '#eff6ff', color: '#2563eb' }}>
              <FolderTree size={20} />
            </div>
          </div>
          <span style={{ fontSize: '11px', color: '#059669', fontWeight: '800', marginTop: '12px', display: 'block' }}>+2 FROM LAST MONTH</span>
        </div>

        <div className="panel" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--line)', padding: '20px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Active Services</span>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', marginTop: '8px', fontWeight: '800' }}>{activeServicesCount}</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '8px', background: '#ecfdf5', color: '#059669' }}>
              <CheckCircle size={20} />
            </div>
          </div>
          <span style={{ fontSize: '11px', color: '#059669', fontWeight: '800', marginTop: '12px', display: 'block' }}>+12% EFFICIENCY UP</span>
        </div>

        <div className="panel" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--line)', padding: '20px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Revenue</span>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', marginTop: '8px', fontWeight: '800' }}>${(totalRevenueSum / 1000).toFixed(1)}k</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '8px', background: '#fffbeb', color: '#d97706' }}>
              <Banknote size={20} />
            </div>
          </div>
          <span style={{ fontSize: '11px', color: '#059669', fontWeight: '800', marginTop: '12px', display: 'block' }}>+8.4% VS PREV PERIOD</span>
        </div>

        <div className="panel" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--line)', padding: '20px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Avg Utilization</span>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', marginTop: '8px', fontWeight: '800' }}>{avgUtilizationRate}%</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '8px', background: '#fef2f2', color: '#dc2626' }}>
              <Percent size={20} />
            </div>
          </div>
          <span style={{ fontSize: '11px', color: '#dc2626', fontWeight: '800', marginTop: '12px', display: 'block' }}>-1.2% PEAK LOAD DOWN</span>
        </div>
      </div>

      {/* Table Section */}
      <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
        <div className="table-responsive" style={{ overflowX: 'auto', width: '100%' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--line)' }}>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Category ID</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Name</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Total Services</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Active Services</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Base Price</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Revenue (MTD)</th>
                <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Status</th>
                <th className="no-print" style={{ padding: '12px 8px', width: '140px' }} />
              </tr>
            </thead>
            <tbody>
              {filteredCategories.map((cat) => (
                <tr key={cat.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '16px 8px', fontSize: '13px', fontWeight: '700', color: 'var(--text)' }}>{cat.id}</td>
                  <td style={{ padding: '16px 8px', fontSize: '14px', fontWeight: '700', color: 'var(--text)' }}>{cat.name}</td>
                  <td style={{ padding: '16px 8px', fontSize: '13px', color: 'var(--text)' }}>{String(cat.total).padStart(2, '0')}</td>
                  <td style={{ padding: '16px 8px', fontSize: '13px', color: 'var(--text)' }}>{cat.active}</td>
                  <td style={{ padding: '16px 8px', fontSize: '13px', fontWeight: '700', color: '#16a34a' }}>
                    ${cat.basePrice ? cat.basePrice.toFixed(2) : '0.00'}
                  </td>
                  <td style={{ padding: '16px 8px', fontSize: '13px', fontWeight: '700', color: 'var(--text)' }}>
                    ${cat.revenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                  <td style={{ padding: '16px 8px' }}>
                    <span style={{
                      fontSize: '10px', fontWeight: '800', padding: '4px 8px', borderRadius: '4px',
                      background: cat.status === 'VERIFIED' ? '#ecfdf5' : cat.status === 'PENDING' ? '#fffbeb' : '#fef2f2',
                      color: cat.status === 'VERIFIED' ? '#059669' : cat.status === 'PENDING' ? '#d97706' : '#dc2626'
                    }}>{cat.status}</span>
                  </td>
                  <td className="no-print" style={{ padding: '16px 8px' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      {/* NEW: Individual Action Button to Customize Price Matrix */}
                      <button 
                        onClick={() => openModal('price', cat)} 
                        style={{ border: 'none', background: 'transparent', color: '#16a34a', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center' }} 
                        type="button" 
                        title="Set Price"
                      >
                        <DollarSign size={16} strokeWidth={2.5} />
                      </button>
                      <button onClick={() => openModal('view', cat)} style={{ border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', padding: '4px' }} type="button" title="View"><Eye size={16} /></button>
                      <button onClick={() => openModal('edit', cat)} style={{ border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', padding: '4px' }} type="button" title="Edit"><Edit size={16} /></button>
                      <button onClick={() => handleDelete(cat.id)} style={{ border: 'none', background: 'transparent', color: '#dc2626', cursor: 'pointer', padding: '4px' }} type="button" title="Delete"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Row */}
        <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', flexWrap: 'wrap', gap: '16px' }}>
          <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
            Showing <strong>1 to {filteredCategories.length}</strong> of <strong>{filteredCategories.length}</strong> entries
          </span>
          <div style={{ display: 'flex', border: '1px solid var(--line)', borderRadius: '6px', overflow: 'hidden' }}>
            <button style={{ border: 'none', background: '#ffffff', color: 'var(--muted)', padding: '8px 10px', cursor: 'pointer' }} type="button"><ChevronLeft size={16} /></button>
            <button style={{ border: 'none', background: '#25108f', color: '#ffffff', padding: '8px 14px', fontSize: '13px', fontWeight: '800' }} type="button">1</button>
            <button style={{ border: 'none', background: '#ffffff', color: 'var(--muted)', padding: '8px 10px', cursor: 'pointer' }} type="button"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>

      {/* Bottom Insights */}
      <div className="no-print" style={{ display: 'grid', gridTemplateColumns: '1fr', mdGridTemplateColumns: '1.5fr 1fr', gap: '20px' }}>
        <div className="panel" style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '24px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px' }}>
            <Sparkles size={16} style={{ color: '#1e40af' }} />
            <h3 style={{ fontSize: '11px', fontWeight: '800', color: '#1e40af', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>Category Performance Insights</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px', fontWeight: '700' }}>
                <span style={{ color: '#1e40af' }}>Most Profitable</span>
                <span style={{ color: '#0f172a' }}>Facility Maintenance</span>
              </div>
              <div style={{ height: '6px', background: '#dbeafe', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '85%', height: '100%', background: '#4f46e5' }} />
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px', fontWeight: '700' }}>
                <span style={{ color: '#1e40af' }}>Highest Growth</span>
                <span style={{ color: '#0f172a' }}>HVAC Systems</span>
              </div>
              <div style={{ height: '6px', background: '#dbeafe', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '55%', height: '100%', background: '#4f46e5' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="panel" style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '24px', position: 'relative', overflow: 'hidden' }}>
          <h3 style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a', margin: 0 }}>QUICK ACTIONS</h3>
          <p style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '6px', marginBottom: '16px', lineHeight: '1.4' }}>
            Need to perform bulk operations or export this view?
          </p>
          <div style={{ display: 'flex', gap: '8px', zIndex: 1, position: 'relative' }}>
            <button onClick={handleExportCSV} style={{ height: '34px', padding: '0 12px', background: '#0f172a', color: '#ffffff', border: 'none', borderRadius: '6px', fontSize: '11px', fontWeight: '700', cursor: 'pointer' }} type="button">EXPORT CSV</button>
            <button onClick={handlePrintPDF} style={{ height: '34px', padding: '0 12px', background: '#ffffff', color: '#0f172a', border: '1px solid var(--line)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', cursor: 'pointer' }} type="button">PRINT PDF</button>
          </div>
        </div>
      </div>

      {/* Dynamic Modal Layer Framework (Supports View, Edit, and Price Config) */}
      {activeModal && selectedCategory && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(15,23,42,0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ background: '#ffffff', width: '100%', maxWidth: '450px', borderRadius: '12px', padding: '24px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '800' }}>
                {activeModal === 'view' && 'Category Details'}
                {activeModal === 'edit' && 'Modify Service Matrix'}
                {activeModal === 'price' && `Configure Pricing: ${selectedCategory.name}`}
              </h3>
              <button onClick={() => setActiveModal(null)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--muted)' }}>
                <X size={18} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              
              {/* PRICE CONFIGURATION MODAL VIEW SHEET */}
              {activeModal === 'price' ? (
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: '#25108f', marginBottom: '6px' }}>SET INDIVIDUAL SERVICE BASE PRICE ($)</label>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <span style={{ position: 'absolute', left: '12px', fontWeight: '700', color: 'var(--muted)' }}>$</span>
                    <input
                      type="number"
                      placeholder="0.00"
                      value={selectedCategory.basePrice || ''}
                      onChange={(e) => setSelectedCategory({ ...selectedCategory, basePrice: parseFloat(e.target.value) || 0 })}
                      style={{ width: '100%', padding: '10px 12px 10px 28px', borderRadius: '6px', border: '2px solid #25108f', outline: 'none', fontSize: '15px', fontWeight: '700' }}
                    />
                  </div>
                  <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '8px' }}>This value represents the flat-rate pricing applied natively per active operation instance.</p>
                </div>
              ) : (
                /* STANDARD MATRIX FIELDS */
                <>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', marginBottom: '4px' }}>CATEGORY NAME</label>
                    <input
                      type="text"
                      disabled={activeModal === 'view'}
                      value={selectedCategory.name}
                      onChange={(e) => setSelectedCategory({ ...selectedCategory, name: e.target.value })}
                      style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid var(--line)', background: activeModal === 'view' ? '#f8fafc' : '#fff', outline: 'none' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', marginBottom: '4px' }}>TOTAL SERVICES</label>
                      <input
                        type="number"
                        disabled={activeModal === 'view'}
                        value={selectedCategory.total}
                        onChange={(e) => setSelectedCategory({ ...selectedCategory, total: parseInt(e.target.value) || 0 })}
                        style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid var(--line)', background: activeModal === 'view' ? '#f8fafc' : '#fff' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', marginBottom: '4px' }}>ACTIVE SERVICES</label>
                      <input
                        type="number"
                        disabled={activeModal === 'view'}
                        value={selectedCategory.active}
                        onChange={(e) => setSelectedCategory({ ...selectedCategory, active: parseInt(e.target.value) || 0 })}
                        style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid var(--line)', background: activeModal === 'view' ? '#f8fafc' : '#fff' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', marginBottom: '4px' }}>STATUS CLASSIFICATION</label>
                    <select
                      disabled={activeModal === 'view'}
                      value={selectedCategory.status}
                      onChange={(e) => setSelectedCategory({ ...selectedCategory, status: e.target.value })}
                      style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid var(--line)', background: activeModal === 'view' ? '#f8fafc' : '#fff' }}
                    >
                      <option value="VERIFIED">VERIFIED</option>
                      <option value="PENDING">PENDING</option>
                      <option value="SUSPENDED">SUSPENDED</option>
                    </select>
                  </div>
                </>
              )}
            </div>

            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button onClick={() => setActiveModal(null)} style={{ padding: '8px 16px', borderRadius: '6px', border: '1px solid var(--line)', background: '#fff', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>
                Close
              </button>
              {(activeModal === 'edit' || activeModal === 'price') && (
                <button onClick={handleSaveChanges} style={{ padding: '8px 16px', borderRadius: '6px', border: 'none', background: '#25108f', color: '#fff', fontSize: '13px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
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