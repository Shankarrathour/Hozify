import React, { useState } from 'react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import AdminShell from '../../components/layouts/AdminShell';
import BusinessHeaderTabs from './BusinessHeaderTabs';
import {
  Plus,
  Edit2,
  Trash2,
  Tag,
  Scale,
  Activity,
  Briefcase,
  Layers,
  Sparkles,
  Search,
  ChevronRight,
  TrendingUp,
  FileText,
  HelpCircle,
  AlertTriangle,
  FileSpreadsheet,
  X,
  SlidersHorizontal
} from 'lucide-react';

export default function BusinessTaxonomy() {
  const { navigate } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  // Hardcoded categories list data
  const [categories, setCategories] = useState([
    { name: 'Financial Services', icon: '🏦', count: '1,248', status: 'ACTIVE', statusColor: '#059669', statusBg: '#ecfdf5' },
    { name: 'Healthcare & MedTech', icon: '➕', count: '842', status: 'ACTIVE', statusColor: '#059669', statusBg: '#ecfdf5' },
    { name: 'Legal & Corporate', icon: '⚖️', count: '539', status: 'PENDING', statusColor: '#d97706', statusBg: '#fef3c7' },
    { name: 'Retail & Commerce', icon: '🛍️', count: '2,104', status: 'ACTIVE', statusColor: '#059669', statusBg: '#ecfdf5' },
    { name: 'Energy & Utilities', icon: '⚡', count: '312', status: 'ARCHIVED', statusColor: '#ef4444', statusBg: '#fee2e2' }
  ]);

  // Hardcoded System Tags list
  const [systemTags, setSystemTags] = useState([
    'Premium Partner',
    'Verified',
    'Top Rated',
    'High Risk',
    'Enterprise',
    'Beta Tester'
  ]);

  // Hardcoded Metrics Tags list
  const [metricsTags, setMetricsTags] = useState([
    'High Revenue',
    'New Market',
    'Public Entity',
    'SME',
    'Exempt'
  ]);

  const handleAddCategory = () => {
    const name = prompt('Enter new Category Name:');
    if (name) {
      const newCat = {
        name,
        icon: '📁',
        count: '0',
        status: 'ACTIVE',
        statusColor: '#059669',
        statusBg: '#ecfdf5'
      };
      setCategories([...categories, newCat]);
    }
  };

  const handleRemoveCategory = (name) => {
    if (window.confirm(`Delete category ${name}?`)) {
      setCategories(categories.filter(c => c.name !== name));
    }
  };

  const handleAddTag = (type) => {
    const tag = prompt(`Enter new ${type} tag name:`);
    if (tag) {
      if (type === 'System') {
        setSystemTags([...systemTags, tag]);
      } else {
        setMetricsTags([...metricsTags, tag]);
      }
    }
  };

  const handleRemoveTag = (tag, type) => {
    if (type === 'System') {
      setSystemTags(systemTags.filter(t => t !== tag));
    } else {
      setMetricsTags(metricsTags.filter(t => t !== tag));
    }
  };

  return (
    <AdminShell
      activeTab="Business"
      headerTitle="Business Registry"
      headerTabs={<BusinessHeaderTabs activeTab="Taxonomy" />}
      searchPlaceholder="Search categories or tags..."
    >
      <div className="business-taxonomy-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Title row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 className="page-title" style={{ margin: 0, fontSize: '24px', fontWeight: '800' }}>Taxonomy & Metadata</h1>
            <p className="page-subtitle" style={{ margin: '4px 0 0', color: 'var(--muted)', fontSize: '13px' }}>Organize and manage the business categorization system and global labeling tags.</p>
          </div>

          <button
            onClick={handleAddCategory}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', border: 'none', background: '#3b82f6', color: '#fff', fontSize: '12px', fontWeight: '700', height: '36px', padding: '0 16px', borderRadius: '6px', cursor: 'pointer' }}
            type="button"
          >
            <Plus size={14} /> Add New Category
          </button>
        </div>

        {/* 2-Column layout */}
        <div className="fraud-top-grid" style={{ gap: '20px', alignItems: 'stretch' }}>
          
          {/* Column 1: Categories Management list table (Left) */}
          <div className="panel" style={{ flex: 1.4, padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Categories Management</h2>
              
              <div style={{ display: 'flex', gap: '10px' }}>
                <button style={{ height: '28px', width: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5f9', border: 'none', borderRadius: '4px', cursor: 'pointer' }} type="button" aria-label="Sort categories"><SlidersHorizontal size={12} style={{ color: 'var(--muted)' }} /></button>
                <button style={{ height: '28px', width: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5f9', border: 'none', borderRadius: '4px', cursor: 'pointer' }} type="button" aria-label="Export categories"><FileSpreadsheet size={12} style={{ color: 'var(--muted)' }} /></button>
              </div>
            </div>

            <div className="table-wrap">
              <table className="approval-queue-table">
                <thead>
                  <tr>
                    <th>CATEGORY NAME</th>
                    <th>ICON</th>
                    <th>BUSINESS COUNT</th>
                    <th>STATUS</th>
                    <th style={{ textAlign: 'right' }}>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((cat, idx) => (
                    <tr key={idx}>
                      <td><strong style={{ fontSize: '13px', color: 'var(--text)' }}>{cat.name}</strong></td>
                      <td>
                        <span style={{ fontSize: '16px', display: 'inline-block' }}>{cat.icon}</span>
                      </td>
                      <td style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '700' }}>{cat.count}</td>
                      <td>
                        <span style={{ fontSize: '9px', fontWeight: '900', color: cat.statusColor, background: cat.statusBg, padding: '3px 8px', borderRadius: '4px' }}>
                          {cat.status}
                        </span>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <div style={{ display: 'inline-flex', gap: '6px' }}>
                          <button
                            onClick={() => alert(`Edit category: ${cat.name}`)}
                            className="btn-action-circle"
                            style={{ height: '26px', width: '26px', background: '#f1f5f9', color: '#475569', border: 'none' }}
                            title="Edit"
                            type="button"
                          >
                            <Edit2 size={12} />
                          </button>
                          <button
                            onClick={() => handleRemoveCategory(cat.name)}
                            className="btn-action-circle"
                            style={{ height: '26px', width: '26px', background: '#fff1f1', color: '#ef4444', border: 'none' }}
                            title="Delete"
                            type="button"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination footer */}
            <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '16px', marginTop: 'auto' }}>
              <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Showing 5 of 42 categories</span>
              
              <div className="pagination-wrap" style={{ display: 'flex', gap: '6px' }}>
                <button className="pag-nav-btn" disabled type="button">Previous</button>
                <button className="pag-num-btn active" type="button">1</button>
                <button className="pag-num-btn" type="button">2</button>
                <button className="pag-nav-btn" type="button">Next</button>
              </div>
            </div>
          </div>

          {/* Column 2: Global Tags config panels (Right) */}
          <div style={{ flex: 0.8, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h2 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Global Tags</h2>
                <button
                  onClick={() => handleAddTag('System')}
                  style={{ border: 'none', background: 'transparent', color: '#4f46e5', fontWeight: '700', fontSize: '11px', cursor: 'pointer' }}
                  type="button"
                >
                  + Add Tag
                </button>
              </div>

              {/* System Tags */}
              <div>
                <span style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '8px' }}>System Tags</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {systemTags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '11px',
                        fontWeight: '700',
                        color: tag === 'High Risk' ? '#ef4444' : tag === 'Verified' ? '#10b981' : '#4f46e5',
                        background: tag === 'High Risk' ? '#fee2e2' : tag === 'Verified' ? '#ecfdf5' : '#eff6ff',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      {tag}
                      <X size={12} style={{ cursor: 'pointer', opacity: 0.7 }} onClick={() => handleRemoveTag(tag, 'System')} />
                    </span>
                  ))}
                </div>
              </div>

              {/* Business Metrics Tags */}
              <div>
                <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                  <span style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Business Metrics Tags</span>
                  <button
                    onClick={() => handleAddTag('Metrics')}
                    style={{ border: 'none', background: 'transparent', color: '#4f46e5', fontWeight: '700', fontSize: '10px', cursor: 'pointer' }}
                    type="button"
                  >
                    + Add Tag
                  </button>
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {metricsTags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '11px',
                        fontWeight: '700',
                        color: 'var(--muted)',
                        background: '#f1f5f9',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      {tag}
                      <X size={12} style={{ cursor: 'pointer', opacity: 0.7 }} onClick={() => handleRemoveTag(tag, 'Metrics')} />
                    </span>
                  ))}
                </div>
              </div>

              {/* Custom Tag logic box */}
              <div style={{ display: 'flex', gap: '10px', border: '1px dashed var(--line)', padding: '12px', borderRadius: '6px', background: '#f8fafc', marginTop: '10px', alignItems: 'center' }}>
                <Tag size={20} style={{ color: 'var(--muted)', flexShrink: 0 }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '11px' }}>Need a custom tag logic?</strong>
                  <a href="#logic" onClick={(e) => { e.preventDefault(); alert('Custom tag rules builder'); }} style={{ fontSize: '11px', color: '#4f46e5', textDecoration: 'underline', fontWeight: '700', marginTop: '2px', display: 'block' }}>
                    Configure Logic
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}
