import React, { useState } from 'react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import AdminShell from '../../components/layouts/AdminShell';
import BusinessHeaderTabs from './BusinessHeaderTabs';
import {
  Eye,
  Check,
  X,
  Search,
  SlidersHorizontal,
  Download,
  Printer,
  Plus,
  ArrowRight,
  ShieldAlert,
  FileText,
  Building2,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RefreshCw,
  MoreVertical,
  Edit2,
  UserCheck,
  Ban,
  Clock,
  RotateCcw,
  AlertOctagon
} from 'lucide-react';

export default function BusinessRegistry() {
  const { route, navigate } = useApp();
  const isComplianceTab = route === ROUTES.businessApproval;
  
  // Local toggles and filters
  const [showApprovalQueueOnly, setShowApprovalQueueOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [businessType, setBusinessType] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  // Hardcoded Directory List Data (All active businesses)
  const directoryBusinesses = [
    { id: 'BIZ-8829', name: 'Global Logistics Ltd', owner: 'Marcus Thorne', category: 'Logistics', regDate: 'Oct 12, 2023', score: 98, status: 'Active', location: 'Rotterdam, NL' },
    { id: 'BIZ-8849', name: 'Global Logistics Partners Inc.', owner: 'Sarah Jenkins', category: 'Logistics', regDate: 'Oct 14, 2021', score: 98, status: 'Active', location: 'Rotterdam, NL' },
    { id: 'BIZ-9901', name: 'Veridian Tech Solutions', owner: 'Sarah Chen', category: 'SaaS', regDate: 'Jan 15, 2022', score: 92, status: 'Active', location: 'Singapore' },
    { id: 'BIZ-4412', name: 'Apex Retail Partners', owner: 'Michael Rodriguez', category: 'Retail', regDate: 'Mar 10, 2023', score: 95, status: 'Active', location: 'London, UK' }
  ];

  // Screen 1 Business Management Grid Data
  const businessManagementList = [
    {
      id: '#ENT-99201',
      name: 'Luminary Systems',
      subCategory: 'Technology & AI',
      owner: 'Sarah Jenkins',
      location: 'Austin, TX',
      gstStatus: 'Verified',
      revenue: '$842,000',
      status: 'Active',
      logoColor: '#6366f1',
      logoBg: '#e0e7ff'
    },
    {
      id: '#ENT-88412',
      name: 'Aura Living',
      subCategory: 'Furniture / Retail',
      owner: 'Marcus Thorne',
      location: 'Portland, OR',
      gstStatus: 'Pending',
      revenue: '$156,200',
      status: 'Pending',
      logoColor: '#f59e0b',
      logoBg: '#fef3c7'
    },
    {
      id: '#ENT-44102',
      name: 'Velox Logistics',
      subCategory: 'Transport',
      owner: 'Elena Rodriguez',
      location: 'Miami, FL',
      gstStatus: 'Suspended',
      revenue: '$2,400,000',
      status: 'Suspended',
      logoColor: '#ef4444',
      logoBg: '#fee2e2'
    },
    {
      id: '#ENT-55231',
      name: 'BioStream Labs',
      subCategory: 'Healthcare',
      owner: 'David Chen',
      location: 'San Jose, CA',
      gstStatus: 'Verified',
      revenue: '$1,120,500',
      status: 'Active',
      logoColor: '#10b981',
      logoBg: '#d1fae5'
    }
  ];

  // Pending queue registration requests (Screen 5 from turn 1)
  const pendingBusinesses = [
    { id: 'QL-8829-X', name: 'Quantum Logistics Ltd', owner: 'Jonathan Miller', category: 'LOGISTICS', date: '2023-10-24', risk: 'High Risk', riskColor: '#ef4444', riskBg: '#fee2e2' },
    { id: 'VT-1033-A', name: 'Veridian Tech Solutions', owner: 'Sarah Chen', category: 'SAAS', date: '2023-10-25', risk: 'Medium Risk', riskColor: '#f59e0b', riskBg: '#fef3c7' },
    { id: 'AR-4412-M', name: 'Apex Retail Partners', owner: 'Michael Rodriguez', category: 'RETAIL', date: '2023-10-26', risk: 'Low Risk', riskColor: '#10b981', riskBg: '#ecfdf5' },
    { id: 'HC-9901-C', name: 'Helios Crypto Hedge', owner: 'Elena Volkov', category: 'FINTECH', date: '2023-10-26', risk: 'High Risk', riskColor: '#ef4444', riskBg: '#fee2e2' },
    { id: 'NH-2245-D', name: 'Nova Healthcare Corp', owner: 'David Brooks', category: 'HEALTHCARE', date: '2023-10-27', risk: 'Medium Risk', riskColor: '#f59e0b', riskBg: '#fef3c7' }
  ];

  const handleRowClick = (bus) => {
    localStorage.setItem('selectedBusiness', JSON.stringify({
      id: bus.id,
      name: bus.name,
      category: bus.subCategory || bus.category || 'Logistics',
      location: bus.location || 'Unknown',
      status: bus.status || 'Active',
      owner: bus.owner || 'Marcus Thorne'
    }));

    if (bus.status === 'Pending' || bus.gstStatus === 'Pending' || bus.risk) {
      navigate(ROUTES.businessReview);
    } else if (bus.status === 'Suspended' || bus.gstStatus === 'Suspended') {
      navigate(ROUTES.businessSuspension);
    } else {
      navigate(ROUTES.businessDetails);
    }
  };

  const handleReviewClick = (e, bus) => {
    e.stopPropagation();
    navigate(ROUTES.businessReview);
  };

  return (
    <AdminShell
      activeTab="Business"
      headerTitle="Business Registry"
      headerTabs={<BusinessHeaderTabs activeTab={isComplianceTab ? 'Compliance' : 'Directory'} />}
      searchPlaceholder="Search businesses..."
    >
      <div className="business-registry-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {isComplianceTab ? (
          /* ================= COMPLIANCE VIEW (SCREEN 1 & SCREEN 5 TOGGLE) ================= */
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h1 className="page-title" style={{ margin: 0, fontSize: '24px', fontWeight: '800' }}>
                  {showApprovalQueueOnly ? 'Business Approval Queue' : 'Business Management'}
                </h1>
                <p className="page-subtitle" style={{ margin: '4px 0 0', color: 'var(--muted)', fontSize: '13px' }}>
                  {showApprovalQueueOnly 
                    ? 'Review and manage pending entity registrations.' 
                    : 'Manage, audit, and approve enterprise-level business entities.'}
                </p>
              </div>
              
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button
                  className="secondary-action-btn"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid var(--line)', background: '#fff', fontSize: '12px', fontWeight: '700', height: '36px', padding: '0 12px', borderRadius: '6px' }}
                  onClick={() => window.location.reload()}
                  type="button"
                >
                  <RefreshCw size={14} /> Refresh
                </button>
                <button
                  className="secondary-action-btn"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid var(--line)', background: '#fff', fontSize: '12px', fontWeight: '700', height: '36px', padding: '0 12px', borderRadius: '6px' }}
                  onClick={() => alert('Exporting data...')}
                  type="button"
                >
                  Export
                </button>
                <button
                  className="secondary-action-btn"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid var(--line)', background: '#fff', fontSize: '12px', fontWeight: '700', height: '36px', padding: '0 12px', borderRadius: '6px' }}
                  onClick={() => alert('Bulk Actions menu opened.')}
                  type="button"
                >
                  Bulk Actions
                </button>
                <button
                  className="primary-btn"
                  style={{ height: '36px', width: 'auto', padding: '0 16px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '6px' }}
                  onClick={() => navigate(ROUTES.addBusiness)}
                  type="button"
                >
                  <Plus size={14} /> Add Business
                </button>
              </div>
            </div>

            {/* KPI Cards Row (Screen 1 Dashboard Overview) */}
            <div className="kpi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
              
              {/* Total Businesses */}
              <div className="panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', justifySelf: 'stretch', justifyContent: 'space-between', minHeight: '110px' }}>
                <div>
                  <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Total Businesses</span>
                  <strong style={{ display: 'block', fontSize: '24px', color: 'var(--text)', marginTop: '6px' }}>12,450</strong>
                </div>
                <span style={{ fontSize: '10px', color: '#4f46e5', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  📈 8.2% vs last month
                </span>
              </div>

              {/* Active */}
              <div className="panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', justifySelf: 'stretch', justifyContent: 'space-between', minHeight: '110px' }}>
                <div>
                  <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Active</span>
                  <strong style={{ display: 'block', fontSize: '24px', color: 'var(--text)', marginTop: '6px' }}>10,200</strong>
                </div>
                <div style={{ height: '4px', width: '100%', background: '#e2e8f0', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '82%', height: '100%', background: '#10b981' }} />
                </div>
              </div>

              {/* Pending - Triggers toggle to verification queue view */}
              <div 
                className="panel" 
                onClick={() => setShowApprovalQueueOnly(!showApprovalQueueOnly)}
                style={{ padding: '16px', display: 'flex', flexDirection: 'column', justifySelf: 'stretch', justifyContent: 'space-between', minHeight: '110px', cursor: 'pointer', border: showApprovalQueueOnly ? '2px solid #4f46e5' : '1px solid var(--line)', transition: 'all 0.2s ease' }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Pending</span>
                    <span style={{ fontSize: '7px', fontWeight: '900', color: '#b45309', background: '#fef3c7', padding: '1px 4px', borderRadius: '3px' }}>Queue</span>
                  </div>
                  <strong style={{ display: 'block', fontSize: '24px', color: 'var(--text)', marginTop: '6px' }}>850</strong>
                </div>
                <span style={{ fontSize: '10px', color: '#b45309', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '3px' }}>
                  ⏳ Action required soon
                </span>
              </div>

              {/* Suspended */}
              <div className="panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', justifySelf: 'stretch', justifyContent: 'space-between', minHeight: '110px' }}>
                <div>
                  <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Suspended</span>
                  <strong style={{ display: 'block', fontSize: '24px', color: 'var(--text)', marginTop: '6px' }}>120</strong>
                </div>
                <span style={{ fontSize: '10px', color: '#ef4444', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '3px' }}>
                  ⚠ Critical status
                </span>
              </div>

              {/* Top Revenue */}
              <div className="panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', justifySelf: 'stretch', justifyContent: 'space-between', minHeight: '110px' }}>
                <div>
                  <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Top Revenue</span>
                  <strong style={{ display: 'block', fontSize: '24px', color: 'var(--text)', marginTop: '6px' }}>$2.4M</strong>
                </div>
                <div>
                  <div style={{ height: '4px', width: '100%', background: '#e2e8f0', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ width: '80%', height: '100%', background: '#4f46e5' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', color: 'var(--muted)', marginTop: '4px', fontWeight: '700' }}>
                    <span>Current Target</span>
                    <span>$3.0M</span>
                  </div>
                </div>
              </div>

              {/* New Registrations */}
              <div className="panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', justifySelf: 'stretch', justifyContent: 'space-between', minHeight: '110px' }}>
                <div>
                  <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>New Registrations</span>
                  <strong style={{ display: 'block', fontSize: '24px', color: '#3b82f6', marginTop: '6px' }}>+45</strong>
                </div>
                <span style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: '700' }}>This week</span>
              </div>

            </div>

            {showApprovalQueueOnly ? (
              /* COMPLIANCE SUBVIEW: PENDING REGISTRATION QUEUE (SCREEN 5 TURN 1) */
              <section className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ background: '#dbeafe', color: '#1e40af', fontSize: '10px', fontWeight: '800', padding: '3px 8px', borderRadius: '4px' }}>PENDING TASKS</span>
                    <h2 style={{ fontSize: '15px', fontWeight: '800', margin: 0 }}>Active Registration Verification Queue</h2>
                  </div>
                  <button
                    onClick={() => setShowApprovalQueueOnly(false)}
                    style={{ border: 'none', background: 'transparent', color: '#4f46e5', fontWeight: '700', fontSize: '12px', cursor: 'pointer' }}
                    type="button"
                  >
                    ← Back to Dashboard
                  </button>
                </div>

                <div className="table-wrap">
                  <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="approval-queue-table">
                    <thead>
                      <tr>
                        <th>BUSINESS NAME</th>
                        <th>OWNER</th>
                        <th>CATEGORY</th>
                        <th>SUBMITTED DATE</th>
                        <th>RISK LEVEL</th>
                        <th style={{ textAlign: 'right' }}>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pendingBusinesses.map((bus) => (
                        <tr key={bus.id} className="partner-row-clickable" onClick={() => handleRowClick(bus)} style={{ cursor: 'pointer' }}>
                          <td>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <span style={{ height: '32px', width: '32px', borderRadius: '6px', background: '#dbeafe', color: '#1e40af', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800' }}>
                                {bus.name.charAt(0)}
                              </span>
                              <div>
                                <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>{bus.name}</strong>
                                <span style={{ fontSize: '10px', color: 'var(--muted)' }}>ID: {bus.id}</span>
                              </div>
                            </div>
                          </td>
                          <td style={{ fontSize: '13px', color: 'var(--text)' }}>{bus.owner}</td>
                          <td>
                            <span style={{ fontSize: '9px', fontWeight: '800', background: '#f1f5f9', color: '#475569', padding: '3px 8px', borderRadius: '4px' }}>
                              {bus.category}
                            </span>
                          </td>
                          <td style={{ fontSize: '12px', color: 'var(--muted)' }}>{bus.date}</td>
                          <td>
                            <span style={{ fontSize: '10px', fontWeight: '700', color: bus.riskColor, background: bus.riskBg, padding: '3px 8px', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                              <span style={{ height: '6px', width: '6px', borderRadius: '50%', background: bus.riskColor }} />
                              {bus.risk}
                            </span>
                          </td>
                          <td style={{ textAlign: 'right' }} onClick={(e) => e.stopPropagation()}>
                            <div style={{ display: 'inline-flex', gap: '6px' }}>
                              <button onClick={(e) => handleReviewClick(e, bus)} className="btn-action-circle" style={{ height: '28px', width: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5f9', border: 'none', color: '#334155' }} title="Review Page" type="button">
                                <Eye size={13} />
                              </button>
                              <button onClick={() => alert(`${bus.name} Approved.`)} className="btn-action-circle approve-green" type="button"><Check size={13} /></button>
                              <button onClick={() => alert(`${bus.name} Rejected.`)} className="btn-action-circle reject-red" type="button"><X size={13} /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table></div>
                </div>
              </section>
            ) : (
              /* MAIN COMPLIANCE DASHBOARD: BUSINESS MANAGEMENT VIEW (SCREEN 1) */
              <section className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                
                {/* Search & Filters row (Screen 1) */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr auto', gap: '12px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                  
                  {/* Search input */}
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '6px' }}>Search</label>
                    <div className="input-wrap" style={{ minHeight: '38px', padding: '0 10px' }}>
                      <Search size={16} />
                      <input
                        placeholder="Name, ID or Owner"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ fontSize: '13px' }}
                      />
                    </div>
                  </div>

                  {/* Business Type */}
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '6px' }}>Business Type</label>
                    <select
                      style={{ width: '100%', height: '38px', border: '1px solid var(--line)', borderRadius: '6px', background: '#fff', padding: '0 12px', fontSize: '12px', color: 'var(--text)', fontWeight: '700', outline: 'none' }}
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      aria-label="Filter Business Type"
                    >
                      <option value="All">All Types</option>
                      <option value="LLC">LLC</option>
                      <option value="Corporation">Corporation</option>
                    </select>
                  </div>

                  {/* Category */}
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '6px' }}>Category</label>
                    <select
                      style={{ width: '100%', height: '38px', border: '1px solid var(--line)', borderRadius: '6px', background: '#fff', padding: '0 12px', fontSize: '12px', color: 'var(--text)', fontWeight: '700', outline: 'none' }}
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value)}
                      aria-label="Filter Category"
                    >
                      <option value="All">All Categories</option>
                      <option value="Retail">Retail</option>
                      <option value="Logistics">Logistics</option>
                      <option value="SaaS">SaaS</option>
                      <option value="Tech">Tech</option>
                      <option value="Healthcare">Healthcare</option>
                    </select>
                  </div>

                  {/* Status */}
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '6px' }}>Status</label>
                    <select
                      style={{ width: '100%', height: '38px', border: '1px solid var(--line)', borderRadius: '6px', background: '#fff', padding: '0 12px', fontSize: '12px', color: 'var(--text)', fontWeight: '700', outline: 'none' }}
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      aria-label="Filter Status"
                    >
                      <option value="All">All Statuses</option>
                      <option value="Active">Active</option>
                      <option value="Pending">Pending</option>
                      <option value="Suspended">Suspended</option>
                    </select>
                  </div>

                  {/* Advanced Filters */}
                  <button
                    className="secondary-action-btn"
                    style={{ height: '38px', display: 'flex', alignItems: 'center', gap: '6px', padding: '0 12px', border: '1px solid #4f46e5', color: '#4f46e5', background: '#fff', fontWeight: '700', fontSize: '12px', borderRadius: '6px' }}
                    onClick={() => alert('Advanced filters toggled.')}
                    type="button"
                  >
                    <SlidersHorizontal size={14} /> Advanced Filters
                  </button>

                </div>

                {/* Table list */}
                <div className="table-wrap">
                  <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="approval-queue-table">
                    <thead>
                      <tr>
                        <th style={{ width: '40px', padding: '12px 16px' }}><input type="checkbox" aria-label="Select all businesses" /></th>
                        <th>BUSINESS ID</th>
                        <th>BUSINESS NAME</th>
                        <th>OWNER</th>
                        <th>CITY / STATE</th>
                        <th>GST STATUS</th>
                        <th>REVENUE</th>
                        <th>STATUS</th>
                        <th style={{ textAlign: 'right' }}>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {businessManagementList
                        .filter(b => {
                          const matchesSearch = b.name.toLowerCase().includes(searchTerm.toLowerCase()) || b.owner.toLowerCase().includes(searchTerm.toLowerCase()) || b.id.toLowerCase().includes(searchTerm.toLowerCase());
                          const matchesCategory = categoryFilter === 'All' || b.subCategory.includes(categoryFilter);
                          const matchesStatus = statusFilter === 'All' || b.status === statusFilter;
                          return matchesSearch && matchesCategory && matchesStatus;
                        })
                        .map((bus) => (
                          <tr key={bus.id} className="partner-row-clickable" onClick={() => handleRowClick(bus)} style={{ cursor: 'pointer' }}>
                            <td style={{ padding: '14px 16px' }} onClick={(e) => e.stopPropagation()}><input type="checkbox" aria-label={`Select ${bus.name}`} /></td>
                            <td style={{ color: 'var(--muted)', fontWeight: '700', fontSize: '12px' }}>{bus.id}</td>
                            <td>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ height: '32px', width: '32px', borderRadius: '6px', background: bus.logoBg, color: bus.logoColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800' }}>
                                  {bus.name.charAt(0)}
                                </span>
                                <div>
                                  <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>{bus.name}</strong>
                                  <span style={{ fontSize: '10px', color: 'var(--muted)' }}>{bus.subCategory}</span>
                                </div>
                              </div>
                            </td>
                            <td style={{ fontSize: '13px', color: 'var(--text)', fontWeight: '700' }}>{bus.owner}</td>
                            <td style={{ fontSize: '13px', color: 'var(--muted)' }}>{bus.location}</td>
                            <td>
                              <span style={{
                                fontSize: '10px',
                                fontWeight: '800',
                                padding: '3px 8px',
                                borderRadius: '4px',
                                background: bus.gstStatus === 'Verified' ? '#d1fae5' : bus.gstStatus === 'Pending' ? '#fef3c7' : '#fee2e2',
                                color: bus.gstStatus === 'Verified' ? '#065f46' : bus.gstStatus === 'Pending' ? '#b45309' : '#991b1b'
                              }}>
                                {bus.gstStatus}
                              </span>
                            </td>
                            <td style={{ fontSize: '13px', color: 'var(--text)', fontWeight: '700' }}>{bus.revenue}</td>
                            <td>
                              <span style={{
                                fontSize: '10px',
                                fontWeight: '800',
                                padding: '3px 8px',
                                borderRadius: '4px',
                                background: bus.status === 'Active' ? '#d1fae5' : bus.status === 'Pending' ? '#fef3c7' : '#fee2e2',
                                color: bus.status === 'Active' ? '#065f46' : bus.status === 'Pending' ? '#b45309' : '#991b1b'
                              }}>
                                {bus.status}
                              </span>
                            </td>
                            <td style={{ textAlign: 'right' }} onClick={(e) => e.stopPropagation()}>
                              <div style={{ display: 'inline-flex', gap: '6px' }}>
                                {bus.status === 'Pending' ? (
                                  <>
                                    <button onClick={() => navigate(ROUTES.businessReview)} className="btn-action-circle approve-green" type="button" title="Approve"><Check size={13} /></button>
                                    <button onClick={() => alert('Rejected.')} className="btn-action-circle reject-red" type="button" title="Reject"><X size={13} /></button>
                                  </>
                                ) : bus.status === 'Suspended' ? (
                                  <>
                                    <button onClick={() => navigate(ROUTES.businessSuspension)} className="btn-action-circle" style={{ background: '#f1f5f9', border: 'none', color: '#475569' }} type="button" title="Audit/History"><RotateCcw size={13} /></button>
                                    <button onClick={() => alert('Critical Review Alerts')} className="btn-action-circle reject-red" type="button" title="Alerts"><AlertOctagon size={13} /></button>
                                  </>
                                ) : (
                                  <>
                                    <button onClick={(e) => { e.stopPropagation(); handleRowClick(bus); }} className="btn-action-circle" style={{ background: '#f1f5f9', border: 'none', color: '#475569' }} type="button" title="View details"><Eye size={13} /></button>
                                    <button onClick={() => alert('Editing details...')} className="btn-action-circle" style={{ background: '#f1f5f9', border: 'none', color: '#475569' }} type="button" title="Edit"><Edit2 size={13} /></button>
                                  </>
                                )}
                                <button className="btn-action-circle" style={{ background: 'transparent', border: 'none', color: 'var(--muted)' }} type="button"><MoreVertical size={13} /></button>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table></div>
                </div>

                {/* Footer details */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '16px', flexWrap: 'wrap', gap: '12px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>Showing 1 to 10 of 12,450 entries</span>
                  <div className="pagination-wrap" style={{ display: 'flex', gap: '6px' }}>
                    <button className="pag-nav-btn" disabled type="button">Previous</button>
                    <button className="pag-num-btn active" type="button">1</button>
                    <button className="pag-num-btn" type="button">2</button>
                    <button className="pag-num-btn" type="button">3</button>
                    <span style={{ alignSelf: 'center', color: 'var(--muted)', padding: '0 4px' }}>...</span>
                    <button className="pag-num-btn" type="button">1,245</button>
                    <button className="pag-nav-btn" type="button">Next</button>
                  </div>
                </div>

              </section>
            )}
          </>
        ) : (
          /* ================= DIRECTORY VIEW (FROM TURN 1) ================= */
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h1 className="page-title" style={{ margin: 0, fontSize: '24px', fontWeight: '800' }}>Business Registry Directory</h1>
                <p className="page-subtitle" style={{ margin: '4px 0 0', color: 'var(--muted)', fontSize: '13px' }}>Monitor and audit operations for all active registered entities.</p>
              </div>
            </div>

            {/* Directory list panel */}
            <section className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              <div className="input-wrap" style={{ maxWidth: '400px', minHeight: '38px', padding: '0 10px' }}>
                <Search size={16} />
                <input
                  placeholder="Search active businesses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ fontSize: '13px' }}
                />
              </div>

              <div className="table-wrap">
                <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="partner-table">
                  <thead>
                    <tr>
                      <th style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', padding: '12px 16px' }}>BUSINESS ID</th>
                      <th style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', padding: '12px 16px' }}>BUSINESS NAME</th>
                      <th style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', padding: '12px 16px' }}>CATEGORY</th>
                      <th style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', padding: '12px 16px' }}>OWNER</th>
                      <th style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', padding: '12px 16px' }}>COMPLIANCE SCORE</th>
                      <th style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', padding: '12px 16px' }}>REGISTRATION DATE</th>
                      <th style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', padding: '12px 16px', textAlign: 'right' }}>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {directoryBusinesses
                      .filter(b => b.name.toLowerCase().includes(searchTerm.toLowerCase()))
                      .map((bus) => (
                        <tr
                          key={bus.id}
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleRowClick(bus)}
                        >
                          <td style={{ padding: '14px 16px' }}>
                            <strong style={{ color: '#4f46e5', textDecoration: 'underline', fontSize: '12px' }}>{bus.id}</strong>
                          </td>
                          <td style={{ padding: '14px 16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <Building2 size={16} style={{ color: 'var(--muted)' }} />
                              <strong style={{ fontSize: '13px', color: 'var(--text)' }}>{bus.name}</strong>
                              <span style={{ fontSize: '9px', fontWeight: '800', color: '#059669', background: '#ecfdf5', padding: '2px 6px', borderRadius: '4px' }}>Active</span>
                            </div>
                          </td>
                          <td style={{ padding: '14px 16px', fontSize: '13px' }}>{bus.category}</td>
                          <td style={{ padding: '14px 16px', fontSize: '13px' }}>{bus.owner}</td>
                          <td style={{ padding: '14px 16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <strong style={{ fontSize: '12px' }}>{bus.score}%</strong>
                              <div style={{ width: '60px', height: '4px', background: '#e2e8f0', borderRadius: '2px', overflow: 'hidden' }}>
                                <div style={{ width: `${bus.score}%`, height: '100%', background: '#10b981' }} />
                              </div>
                            </div>
                          </td>
                          <td style={{ padding: '14px 16px', fontSize: '12px', color: 'var(--muted)' }}>{bus.regDate}</td>
                          <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                            <button
                              style={{ border: 'none', background: 'transparent', color: '#4f46e5', fontWeight: '700', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                              onClick={(e) => { e.stopPropagation(); handleRowClick(bus); }}
                              type="button"
                            >
                              Manage <ArrowRight size={12} />
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table></div>
              </div>
            </section>
          </>
        )}

      </div>
    </AdminShell>
  );
}
