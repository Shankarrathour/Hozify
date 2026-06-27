import React, { useState } from 'react';
import { Landmark, Search, HelpCircle, Check, X, ShieldAlert } from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';
import { mockSettlements } from './data/mockData';

export default function SettlementRequestQueue() {
  const [settlements, setSettlements] = useState(mockSettlements);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modal states
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [actionType, setActionType] = useState(''); // 'Approve', 'Reject', 'Hold'
  const [notes, setNotes] = useState('');

  const handleOpenConfirm = (item, type) => {
    setSelectedItem(item);
    setActionType(type);
    setShowConfirm(true);
  };

  const handleCloseConfirm = () => {
    setShowConfirm(false);
    setSelectedItem(null);
    setNotes('');
  };

  const handleAction = () => {
    setSettlements(
      settlements.map((s) => (s.id === selectedItem.id ? { ...s, status: actionType === 'Approve' ? 'Approved' : actionType === 'Reject' ? 'Rejected' : 'Hold', statusColor: actionType === 'Approve' ? 'green' : actionType === 'Reject' ? 'red' : 'orange' } : s))
    );
    alert(`Settlement request ${selectedItem.id} marked as ${actionType}. Remarks: ${notes}`);
    handleCloseConfirm();
  };

  const filteredSettlements = settlements.filter(s => 
    s.partnerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminShell
      activeTab="Wallet Management"
      brandText="HOZIFY Wallet"
      brandSubText="Global Ledger v1.2"
      headerTitle="Financial Admin"
      searchPlaceholder="Search settlements..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 0' }}>
        
        {/* Title */}
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
            Settlement Request Queue
          </h1>
          <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '4px 0 0' }}>
            Process and verify partner/seller payout requests. Secure bank credential masking enabled.
          </p>
        </div>

        {/* Filter bar */}
        <div className="panel" style={{ padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--line)', background: '#fff', height: '36px', padding: '0 12px', borderRadius: '6px', maxWidth: '400px' }}>
            <Search size={14} style={{ color: 'var(--muted)' }} />
            <input
              placeholder="Search by ID or partner..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '13px', width: '100%' }}
            />
          </div>
        </div>

        {/* Table Queue */}
        <div className="panel" style={{ padding: '24px' }}>
          <div className="table-wrap">
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#f4eff8', borderBottom: '1px solid var(--line)' }}>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Settlement ID</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Partner</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Bank Name</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Bank Account</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Amount</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Status</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredSettlements.map((req) => (
                  <tr key={req.id} style={{ borderBottom: '1px solid var(--lavender)' }}>
                    <td style={{ padding: '16px' }}>
                      <strong style={{ color: '#25108f' }}>{req.id}</strong>
                    </td>
                    <td style={{ padding: '16px', fontWeight: '700' }}>{req.partnerName}</td>
                    <td style={{ padding: '16px', color: 'var(--muted)' }}>{req.bankName}</td>
                    <td style={{ padding: '16px', color: 'var(--muted)' }}>
                      <code>{req.accNo}</code>
                    </td>
                    <td style={{ padding: '16px', fontWeight: '850', color: 'var(--text)' }}>
                      ₹{req.amount.toLocaleString('en-IN')}
                    </td>
                    <td style={{ padding: '16px' }}>
                      <span style={{
                        fontSize: '9px',
                        fontWeight: '850',
                        background: req.status === 'Approved' || req.status === 'Processed' ? '#ecfdf5' : req.status === 'Pending' ? '#fffbeb' : '#fee2e2',
                        color: req.status === 'Approved' || req.status === 'Processed' ? '#07956f' : req.status === 'Pending' ? '#b45309' : '#d32929',
                        padding: '2px 6px',
                        borderRadius: '4px'
                      }}>
                        {req.status}
                      </span>
                    </td>
                    <td style={{ padding: '16px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                        <button
                          onClick={() => handleOpenConfirm(req, 'Approve')}
                          disabled={req.status === 'Approved' || req.status === 'Processed'}
                          style={{ border: 'none', background: '#ecfdf5', color: '#07956f', height: '26px', width: '26px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                          <Check size={14} />
                        </button>
                        <button
                          onClick={() => handleOpenConfirm(req, 'Hold')}
                          disabled={req.status === 'Approved' || req.status === 'Processed'}
                          style={{ border: 'none', background: '#fffbeb', color: '#b45309', height: '26px', width: '26px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                          <HelpCircle size={14} />
                        </button>
                        <button
                          onClick={() => handleOpenConfirm(req, 'Reject')}
                          disabled={req.status === 'Approved' || req.status === 'Processed'}
                          style={{ border: 'none', background: '#fee2e2', color: '#d32929', height: '26px', width: '26px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                          <X size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table></div>
          </div>
        </div>

        {/* Confirmation Modal */}
        {showConfirm && selectedItem && (
          <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}>
            <div className="panel" style={{ width: '450px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Landmark size={20} style={{ color: '#25108f' }} />
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '850', color: 'var(--text)' }}>
                  Confirm Settlement Payout: {actionType}
                </h3>
              </div>
              <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
                You are about to mark settlement <strong>{selectedItem.id}</strong> (₹{selectedItem.amount.toLocaleString('en-IN')}) for partner <strong>{selectedItem.partnerName}</strong> as <strong>{actionType}d</strong>.
              </span>

              {/* Approval Notes */}
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Compliance Audit Notes
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Enter notes for audit compliance trail..."
                  style={{ width: '100%', height: '80px', border: '1px solid var(--line)', borderRadius: '6px', padding: '12px', fontSize: '13px', resize: 'none', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button
                  onClick={handleCloseConfirm}
                  style={{ height: '36px', padding: '0 16px', border: '1px solid var(--line)', background: '#fff', borderRadius: '6px', fontSize: '12px', fontWeight: '750', cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleAction}
                  style={{ height: '36px', padding: '0 16px', border: 'none', background: '#25108f', color: '#fff', borderRadius: '6px', fontSize: '12px', fontWeight: '750', cursor: 'pointer' }}
                >
                  Confirm Action
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </AdminShell>
  );
}
