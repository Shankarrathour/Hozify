import React, { useState } from 'react';
import {
  Wallet,
  Download,
  Calendar,
  Search,
  SlidersHorizontal,
  Landmark,
  CheckCircle,
  AlertTriangle,
  Play,
  Pause,
  X,
  CreditCard,
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import KpiCard from '../../features/dashboard/KpiCard';
import AdminShell from '../../components/layouts/AdminShell';

const settlementRequestsList = [
  {
    id: 'SET-99021',
    bankName: 'JP Morgan Chase',
    partnerName: 'Nexis Logistics',
    accNo: '******9902',
    amount: '$24,800.00',
    status: 'Approved',
    statusColor: 'green'
  },
  {
    id: 'SET-98911',
    bankName: 'HSBC Bank PLC',
    partnerName: 'Blue Freight Inc.',
    accNo: '******1128',
    amount: '$15,450.00',
    status: 'Pending',
    statusColor: 'blue'
  },
  {
    id: 'SET-98520',
    bankName: 'Barclays Bank',
    partnerName: 'Swift Ventures',
    accNo: '******3402',
    amount: '$8,500.00',
    status: 'Hold',
    statusColor: 'orange'
  },
  {
    id: 'SET-98114',
    bankName: 'Citibank NA',
    partnerName: 'Global Reach Co.',
    accNo: '******8842',
    amount: '$4,200.00',
    status: 'Paid',
    statusColor: 'gray'
  }
];

export default function Settlements() {
  const { navigate } = useApp();
  const [selectedMonth, setSelectedMonth] = useState('October 2023');
  const [filterStatus, setFilterStatus] = useState('All');
  const [requests, setRequests] = useState(settlementRequestsList);

  const handleStatusAction = (id, newStatus) => {
    setRequests(
      requests.map((req) => (req.id === id ? { ...req, status: newStatus, statusColor: newStatus === 'Approved' ? 'green' : newStatus === 'Hold' ? 'orange' : newStatus === 'Paid' ? 'gray' : 'blue' } : req))
    );
  };

  const getFilteredRequests = () => {
    if (filterStatus === 'All') return requests;
    return requests.filter(r => r.status.toLowerCase() === filterStatus.toLowerCase());
  };

  const settlementKPIs = [
    { title: 'Total Paid out', value: '$428,920.00', topLabel: 'Oct Settled', topLabelClass: 'gray-badge font-bold', icon: CheckCircle },
    { title: 'Pending Approval', value: '$15,450.00', topLabel: '1 Awaiting', topLabelClass: 'blue-text bg-blue-soft font-bold', icon: Landmark },
    { title: 'Approved in Queue', value: '$24,800.00', topLabel: 'Ready for batch', topLabelClass: 'green-badge font-bold', icon: Wallet },
    { title: 'Audit / On Hold', value: '$8,500.00', topLabel: 'Risk check', topLabelClass: 'red-text bg-red-soft font-bold', icon: AlertTriangle }
  ];

  return (
    <AdminShell
      activeTab="Settlements"
      searchPlaceholder="Search banks, transactions, or account IDs..."
      headerTitle="Financial Ledger Services"
      pageTitle="Settlements & Payouts"
      pageSubtitle="Monitor transaction ledgers, partner payouts and financial reconciliation in real-time."
    >
      {/* Page Header */}
      <div className="partners-page-header">
        <div>
          <span className="queue-verification-control-tag font-bold green-text bg-green-soft" style={{ padding: '4px 8px', borderRadius: '4px', color: '#047857', background: '#ecfdf5' }}>
            LEDGER CONTROL
          </span>
          <h1 className="page-title margin-top-4">Settlement Management</h1>
          <p className="page-subtitle">Process batch payments, verify bank accounts, and configure auto-compliance payout criteria.</p>
        </div>
        
        <div className="partners-header-buttons">
          <div className="date-select-picker-wrap" style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--line)', padding: '6px 12px', borderRadius: '6px', background: '#fff' }}>
            <Calendar size={16} />
            <select
              style={{ border: 'none', background: 'transparent', outline: 'none', fontWeight: '700', fontSize: '13px', cursor: 'pointer' }}
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              aria-label="Settlement month selection"
            >
              <option value="October 2023">October 2023</option>
              <option value="September 2023">September 2023</option>
              <option value="August 2023">August 2023</option>
            </select>
          </div>

          <button className="primary-action-btn font-bold" type="button">
            <Download size={16} />
            <span>Download CSV</span>
          </button>
        </div>
      </div>

      {/* 4 Financial KPIs */}
      <section className="kpi-grid queue-kpi-grid" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}>
        {settlementKPIs.map((kpi, idx) => (
          <KpiCard key={idx} {...kpi} />
        ))}
      </section>

      {/* Settlement Requests list */}
      <section className="panel approval-queue-directory-panel">
        <div className="directory-panel-header">
          <h2>Settlement Request Queue</h2>
          <div className="approval-header-filters-wrap">
            <div className="segmented-tab-filter">
              <button
                className={filterStatus === 'All' ? 'active' : ''}
                onClick={() => setFilterStatus('All')}
                type="button"
              >
                All
              </button>
              <button
                className={filterStatus === 'Pending' ? 'active' : ''}
                onClick={() => setFilterStatus('Pending')}
                type="button"
              >
                Pending
              </button>
              <button
                className={filterStatus === 'Hold' ? 'active' : ''}
                onClick={() => setFilterStatus('Hold')}
                type="button"
              >
                On Hold
              </button>
            </div>
            <span className="queue-showing-results-text">Showing {getFilteredRequests().length} requests</span>
          </div>
        </div>

        <div className="table-wrap">
          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="approval-queue-table">
            <thead>
              <tr>
                <th>RECIPIENT BANK</th>
                <th>PARTNER ACCOUNT</th>
                <th>ACCOUNT DETAILS</th>
                <th>SETTLEMENT AMOUNT</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {getFilteredRequests().map((req) => (
                <tr key={req.id}>
                  <td className="partner-name-cell">
                    <div className="partner-info-wrap">
                      <div className="title-icon-circle blue-bg" style={{ width: '32px', height: '32px' }}>
                        <Landmark size={14} />
                      </div>
                      <div className="partner-name-meta">
                        <span className="partner-name-txt">{req.bankName}</span>
                        <span className="partner-est-txt">{req.id}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <strong>{req.partnerName}</strong>
                  </td>
                  <td>
                    <span className="acc-details-lbl">{req.accNo}</span>
                  </td>
                  <td>
                    <strong className="settlement-amount-lbl">{req.amount}</strong>
                  </td>
                  <td>
                    <span className={`kyc-status-badge ${req.statusColor} status-cell-badge`}>
                      {req.status}
                    </span>
                  </td>
                  <td>
                    <div className="actions-buttons-cell-row">
                      <button
                        className="btn-action-circle approve-green"
                        type="button"
                        title="Approve / Pay"
                        onClick={() => handleStatusAction(req.id, 'Approved')}
                        disabled={req.status === 'Approved'}
                      >
                        ✔
                      </button>
                      <button
                        className="btn-action-circle reject-red"
                        type="button"
                        title="Hold for Audit"
                        onClick={() => handleStatusAction(req.id, 'Hold')}
                        disabled={req.status === 'Hold'}
                        style={{ background: '#fef3c7', color: '#b45309' }}
                      >
                        <Pause size={12} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table></div>
        </div>

        <div className="directory-table-footer">
          <div className="rows-per-page-combo">
            <span>Rows per page:</span>
            <select aria-label="Rows per page select">
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>

          <div className="pagination-wrap">
            <button className="pag-nav-btn" type="button" disabled>
              <ChevronLeft size={16} />
            </button>
            <button className="pag-num-btn active" type="button">1</button>
            <button className="pag-nav-btn" type="button" disabled>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Auto Settlement Compliance Card */}
      <section className="panel queue-automation-big-panel" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', border: '1px solid #334155' }}>
        <div className="automation-panel-left-content">
          <h2>Automated Settlement Rules</h2>
          <p>
            Settlement requests from partners with high compliance status (<strong>&gt;90% KYC Score</strong>) and no outstanding security flags bypass standard manual hold reviews automatically.
          </p>
          <div className="rule-adjust-buttons-row" style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            <button className="btn-configure-rules" type="button" style={{ background: 'var(--primary)', color: '#fff' }}>
              Modify Compliance Rule
            </button>
            <button className="btn-configure-rules" type="button" style={{ background: 'transparent', color: '#fff', border: '1px solid #475569' }}>
              <Settings size={14} style={{ marginRight: '6px', display: 'inline' }} />
              Configure Batch Payout Timing
            </button>
          </div>
        </div>

        <div className="automation-panel-right-illustration" style={{ background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CreditCard size={80} style={{ color: 'var(--primary-3)' }} />
        </div>
      </section>
    </AdminShell>
  );
}
