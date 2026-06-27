import React, { useState } from 'react';
import {
  LayoutGrid,
  Users,
  Handshake,
  ShieldCheck,
  ClipboardList,
  Settings,
  HelpCircle,
  SlidersHorizontal,
  Download,
  Box,
  GitMerge,
  FileText,
  Landmark,
  ShieldAlert,
  ChevronLeft,
  ChevronRight,
  GitBranch
} from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import KpiCard from '../../features/dashboard/KpiCard';
import AdminShell from '../../components/layouts/AdminShell';

// Queue specific navigation menu list mapping Image 5
const queueNavItems = [
  { label: 'Dashboard', route: ROUTES.dashboard, icon: LayoutGrid },
  { label: 'Users', route: '#', icon: Users },
  { label: 'Partners', route: ROUTES.partners, icon: Handshake },
  { label: 'KYC Verification', route: '#', icon: ShieldCheck },
  { label: 'Audit Logs', route: '#', icon: ClipboardList },
  { label: 'Settings', route: '#', icon: Settings },
  { label: 'Support', route: '#', icon: HelpCircle }
];

const approvalTasks = [
  {
    partnerName: 'Nexis Logistics',
    partnerId: 'ID: PRT-99201',
    partnerInitials: 'NX',
    logoBg: '#cbd5e1', // Slate gray
    type: 'ISP',
    pendingItem: 'KYC Verification',
    pendingIcon: ShieldCheck,
    submittedDate: 'Oct 24, 2023 09:12 AM',
    priority: 'High',
    priorityColor: 'red'
  },
  {
    partnerName: 'Blue Freight Inc.',
    partnerId: 'ID: PRT-88421',
    partnerInitials: 'BF',
    logoBg: '#c084fc', // Light purple
    type: 'BSP',
    pendingItem: 'Bank Verification',
    pendingIcon: Landmark,
    submittedDate: 'Oct 24, 2023 10:45 AM',
    priority: 'Medium',
    priorityColor: 'orange'
  },
  {
    partnerName: 'Swift Ventures',
    partnerId: 'ID: PRT-10293',
    partnerInitials: 'SV',
    logoBg: '#93c5fd', // Light blue
    type: 'ISP',
    pendingItem: 'Tax Documents',
    pendingIcon: FileText,
    submittedDate: 'Oct 23, 2023 04:30 PM',
    priority: 'Low',
    priorityColor: 'gray'
  },
  {
    partnerName: 'Global Reach Co.',
    partnerId: 'ID: PRT-20938',
    partnerInitials: 'GR',
    logoBg: '#fed7aa', // Light orange
    type: 'BSP',
    pendingItem: 'New Branch: Singapore',
    pendingIcon: GitBranch,
    submittedDate: 'Oct 23, 2023 01:15 PM',
    priority: 'Medium',
    priorityColor: 'orange'
  }
];

export default function ApprovalQueue() {
  const { navigate } = useApp();
  const [activeTab, setActiveTab] = useState('All Tasks');

  const handleBack = () => {
    navigate(ROUTES.partners);
  };

  const kpisData = [
    { title: 'Pending KYC', value: '24', topLabel: '! 8 Urgent', topLabelClass: 'red-text bg-red-soft font-bold', icon: Users },
    { title: 'Pending Services', value: '12', topLabel: '4 New Today', topLabelClass: 'blue-text bg-blue-soft font-bold', icon: Box },
    { title: 'Pending Branches', value: '08', topLabel: 'Stable flow', topLabelClass: 'gray-badge font-bold', icon: GitMerge },
    { title: 'Pending Documents', value: '45', topLabel: 'High volume', topLabelClass: 'blue-text bg-blue-soft font-bold', icon: FileText },
    { title: 'Bank Verification', value: '05', topLabel: 'Critical action', topLabelClass: 'red-text bg-red-soft font-bold', icon: Landmark }
  ];

  return (
    <AdminShell
      activeTab="Partners"
      brandText="Partner Admin"
      brandSubText="Management Suite"
      navItemsOverride={queueNavItems}
      headerTitle="PartnerConnect Enterprise"
      showGridIcon={true}
      customProfileName="Admin User"
      customProfileRole="SUPER ADMIN"
      customProfileAvatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
      searchPlaceholder="Search approvals, partners, or IDs..."
    >
      {/* View Header */}
      <div className="partners-page-header">
        <div>
          <span className="queue-verification-control-tag">VERIFICATION CONTROL</span>
          <h1 className="page-title margin-top-4">Partner Approval Queue</h1>
          <p className="page-subtitle">Manage and verify pending administrative requests from global partners.</p>
        </div>
        <div className="partners-header-buttons">
          <button className="secondary-action-btn font-bold" type="button">
            <SlidersHorizontal size={16} />
            <span>Filter Requests</span>
          </button>
          <button className="primary-action-btn font-bold" type="button">
            <Download size={16} />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* 5 KPI Cards Row */}
      <section className="kpi-grid queue-kpi-grid">
        {kpisData.map((kpi, idx) => (
          <KpiCard key={idx} {...kpi} />
        ))}
      </section>

      {/* Table Card */}
      <section className="panel approval-queue-directory-panel">
        <div className="directory-panel-header">
          <h2>Active Approval Queue</h2>
          <div className="approval-header-filters-wrap">
            <div className="segmented-tab-filter">
              <button
                className={activeTab === 'All Tasks' ? 'active' : ''}
                onClick={() => setActiveTab('All Tasks')}
                type="button"
              >
                All Tasks
              </button>
              <button
                className={activeTab === 'Assigned to Me' ? 'active' : ''}
                onClick={() => setActiveTab('Assigned to Me')}
                type="button"
              >
                Assigned to Me
              </button>
            </div>
            <span className="queue-showing-results-text">Showing 1-10 of 94 items</span>
          </div>
        </div>

        <div className="table-wrap">
          <table className="approval-queue-table">
            <thead>
              <tr>
                <th>PARTNER</th>
                <th>TYPE</th>
                <th>PENDING ITEM</th>
                <th>SUBMITTED DATE</th>
                <th>PRIORITY</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {approvalTasks.map((task, idx) => {
                const PendingIcon = task.pendingIcon;
                return (
                  <tr key={idx} className="partner-row-clickable" onClick={() => navigate(ROUTES.partnerDetails)}>
                    <td className="partner-name-cell">
                      <div className="partner-info-wrap">
                        <span className="queue-partner-avatar-logo" style={{ backgroundColor: task.logoBg }}>
                          {task.partnerInitials}
                        </span>
                        <div className="partner-name-meta">
                          <span className="partner-name-txt">{task.partnerName}</span>
                          <span className="partner-est-txt">{task.partnerId}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className={`partner-type-badge ${task.type.toLowerCase()}`}>
                        {task.type}
                      </span>
                    </td>
                    <td className="pending-item-cell-wrap">
                      <div className="pending-item-inner">
                        <PendingIcon size={16} className="pending-icon-indicator" />
                        <span>{task.pendingItem}</span>
                      </div>
                    </td>
                    <td className="submitted-date-cell">{task.submittedDate}</td>
                    <td>
                      <div className="priority-cell-wrap">
                        <span className={`priority-bullet-dot ${task.priorityColor}`} />
                        <span>{task.priority}</span>
                      </div>
                    </td>
                    <td className="actions-cell-wrap">
                      <div className="actions-buttons-cell-row" onClick={(e) => e.stopPropagation()}>
                        <button className="btn-action-circle approve-green" type="button" title="Approve">✔</button>
                        <button className="btn-action-circle reject-red" type="button" title="Reject">✘</button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="directory-table-footer">
          <div className="rows-per-page-combo">
            <span>Rows per page:</span>
            <select aria-label="Rows per page select">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>

          <div className="pagination-wrap">
            <button className="pag-nav-btn" type="button" disabled>
              <ChevronLeft size={16} />
            </button>
            <button className="pag-num-btn active" type="button">1</button>
            <button className="pag-num-btn" type="button">2</button>
            <button className="pag-num-btn" type="button">3</button>
            <span className="pag-ellipsis">...</span>
            <button className="pag-num-btn" type="button">10</button>
            <button className="pag-nav-btn" type="button">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Automate Queue Banner */}
      <section className="panel queue-automation-big-panel">
        <div className="automation-panel-left-content">
          <h2>Automate Your Queue</h2>
          <p>Enable Smart-Approval for trusted partners to bypass standard manual review for low-risk documents and branch updates.</p>
          <button className="btn-configure-rules" type="button">
            Configure Rules
          </button>
        </div>
        
        <div className="automation-panel-right-illustration">
          <img
            className="automation-robot-img"
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"
            alt="AI Robotics automation illustration preview"
          />
        </div>
      </section>
    </AdminShell>
  );
}
