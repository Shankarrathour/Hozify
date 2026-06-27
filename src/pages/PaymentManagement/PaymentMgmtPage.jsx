import React, { useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import { useToast } from '../../components/common/ToastNotification';
import { 
  AddEditModal, DeleteConfirmationModal, PreviewModal, SuccessModal 
} from '../../components/common/popups/Modals';
import { triggerDownload, generateCSV } from '../../utils/downloadHelper';
import { 
  Search, Plus, Download, Eye, CheckCircle2, AlertCircle, RefreshCw, CircleDollarSign, ShieldAlert, CreditCard
} from 'lucide-react';

const INITIAL_PAYMENTS = [
  { id: 'TXN-801', date: '2026-06-27 10:15 AM', user: 'Sarah Miller', amount: 45.00, method: 'UPI', status: 'Success', details: 'AC Maintenance base service payment.' },
  { id: 'TXN-802', date: '2026-06-27 09:30 AM', user: 'John Doe', amount: 120.00, method: 'Card', status: 'Failed', details: 'Insufficient card credit buffer limit.' },
  { id: 'TXN-803', date: '2026-06-26 04:45 PM', user: 'Rajesh Kumar', amount: 25.00, method: 'NetBanking', status: 'Success', details: 'Plumbing leak inspection call charge.' },
  { id: 'TXN-804', date: '2026-06-25 11:20 AM', user: 'Sunil Dutt', amount: 75.00, method: 'Wallet', status: 'Refunded', details: 'Cancelled booking ref-99302.' },
  { id: 'TXN-805', date: '2026-06-25 09:00 AM', user: 'Amit Shah', amount: 250.00, method: 'UPI', status: 'Settled', details: 'Partner weekly payout batch settlement.' }
];

export default function PaymentMgmtPage() {
  const { addToast } = useToast();
  const [payments, setPayments] = useState(INITIAL_PAYMENTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  
  // Modals
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handleExportCSV = () => {
    const csvContent = generateCSV(['Transaction ID', 'Timestamp', 'User', 'Amount', 'Method', 'Status', 'Details'], payments);
    triggerDownload(csvContent, 'transactions.csv', 'text/csv');
    addToast('Payment transaction ledger downloaded!', 'success');
  };

  const handleResolveFailed = (row) => {
    addToast(`Initiating failover retry for transaction ${row.id}...`, 'info');
    setTimeout(() => {
      setPayments(payments.map(p => p.id === row.id ? { ...p, status: 'Success', details: 'Manual operator override success.' } : p));
      addToast(`Transaction ${row.id} successfully updated to Success state.`, 'success');
    }, 1200);
  };

  const filteredPayments = payments.filter(p => {
    const matchesSearch = p.user.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesStatus = true;
    if (statusFilter === 'Failed Payments') matchesStatus = p.status === 'Failed';
    else if (statusFilter === 'Refunds') matchesStatus = p.status === 'Refunded';
    else if (statusFilter === 'Settlements') matchesStatus = p.status === 'Settled';
    else if (statusFilter !== 'All') matchesStatus = p.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminShell activeTab="Payments" headerTitle="Financial Ledger">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          Finance &gt; <span style={{ color: '#2A2454' }}>Payment Management</span>
        </div>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="custom-page-heading">Payment &amp; Transaction Management</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Monitor booking payments, failed transaction retry overrides, refunds, and partner batch settlements.</p>
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
              <CircleDollarSign size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Transactions</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>{payments.length} Txns</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#fee2e2', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldAlert size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Failed Payments</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#ef4444', margin: '2px 0 0 0' }}>{payments.filter(p => p.status === 'Failed').length} Failures</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle2 size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Settled Batches</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#059669', margin: '2px 0 0 0' }}>{payments.filter(p => p.status === 'Settled').length} Settled</h2>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <input 
              type="text" 
              placeholder="Search user, txn ID..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '10px 16px 10px 40px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px', outline: 'none' }}
            />
            <Search size={16} style={{ position: 'absolute', left: '14px', top: '12px', color: '#94a3b8' }} />
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            {['All', 'Failed Payments', 'Refunds', 'Settlements', 'Success'].map(tab => (
              <button 
                key={tab} 
                onClick={() => setStatusFilter(tab)}
                style={{
                  padding: '8px 14px',
                  border: statusFilter === tab ? '1.5px solid #2A2454' : '1px solid #cbd5e1',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: '700',
                  background: statusFilter === tab ? '#e0e7ff' : '#fff',
                  color: '#2A2454',
                  cursor: 'pointer'
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
            <thead>
              <tr className="custom-table-header">
                <th style={{ padding: '16px 24px' }}>TRANSACTION ID</th>
                <th style={{ padding: '16px 24px' }}>TIMESTAMP</th>
                <th style={{ padding: '16px 24px' }}>USER</th>
                <th style={{ padding: '16px 24px' }}>METHOD</th>
                <th style={{ padding: '16px 24px' }}>AMOUNT</th>
                <th style={{ padding: '16px 24px' }}>STATUS</th>
                <th style={{ padding: '16px 24px', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.length > 0 ? (
                filteredPayments.map(row => (
                  <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace', color: '#4f46e5' }}>{row.id}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '600' }}>{row.date}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700' }}>{row.user}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '600', color: 'var(--muted)' }}>{row.method}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace' }}>${row.amount.toFixed(2)}</td>
                    <td style={{ padding: '18px 24px' }}>
                      <span style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '10px',
                        fontWeight: '800',
                        background: row.status === 'Success' || row.status === 'Settled' ? '#d1fae5' : row.status === 'Failed' ? '#fee2e2' : '#fffbeb',
                        color: row.status === 'Success' || row.status === 'Settled' ? '#065f46' : row.status === 'Failed' ? '#ef4444' : '#d97706'
                      }}>
                        {row.status}
                      </span>
                    </td>
                    <td style={{ padding: '18px 24px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', alignItems: 'center' }}>
                        {row.status === 'Failed' && (
                          <button 
                            onClick={() => handleResolveFailed(row)}
                            className="custom-btn-secondary"
                            style={{ padding: '4px 10px', height: '28px', fontSize: '11px', borderColor: '#10b981', color: '#10b981' }}
                          >
                            Resolve Override
                          </button>
                        )}
                        <button onClick={() => { setSelectedPayment(row); setIsPreviewOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Preview"><Eye size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>No transaction records found matching filters.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>

      {/* Preview Dialog */}
      <PreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        title="Transaction Summary details" 
        data={{
          'Transaction ID': selectedPayment?.id,
          'Timestamp Logged': selectedPayment?.date,
          'User Recipient': selectedPayment?.user,
          'Payment Gateway Channel': selectedPayment?.method,
          'Amount Paid': `$${selectedPayment?.amount.toFixed(2)}`,
          'Status State': selectedPayment?.status,
          'Context Detail': selectedPayment?.details
        }} 
      />

    </AdminShell>
  );
}
