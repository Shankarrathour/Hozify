import React, { useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import { useToast } from '../../components/common/ToastNotification';
import { 
  AddEditModal, DeleteConfirmationModal, PreviewModal, SuccessModal 
} from '../../components/common/popups/Modals';
import { triggerDownload, generateCSV } from '../../utils/downloadHelper';
import { 
  Search, Plus, Download, Edit, Trash2, Eye, Trophy, Award, Gift, Clock, CheckCircle2
} from 'lucide-react';

const INITIAL_REWARDS = [
  { id: 'REW-201', user: 'Sarah Miller', type: 'Cashback', value: '$10.00', status: 'Setted', date: '2026-06-27' },
  { id: 'REW-202', user: 'John Doe', type: 'Loyalty Points', value: '250 pts', status: 'Pending Approval', date: '2026-06-26' },
  { id: 'REW-203', user: 'Rajesh Kumar (ISP)', type: 'Referral Reward', value: '$25.00', status: 'Setted', date: '2026-06-25' },
  { id: 'REW-204', user: 'Anjali Sharma (Influencer)', type: 'Influencer Reward', value: '$150.00', status: 'Pending Approval', date: '2026-06-24' }
];

export default function RewardMgmtPage() {
  const { addToast } = useToast();
  const [rewards, setRewards] = useState(INITIAL_REWARDS);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  
  // Modals
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');

  const formFields = [
    { name: 'user', label: 'User / Partner / Influencer', type: 'text', placeholder: 'e.g. Sarah Miller', required: true },
    { name: 'type', label: 'Reward Type', type: 'select', required: true, options: [
      { value: 'Cashback', label: 'Cashback' },
      { value: 'Loyalty Points', label: 'Loyalty Points' },
      { value: 'Referral Reward', label: 'Referral Reward' },
      { value: 'Influencer Reward', label: 'Influencer Reward' }
    ]},
    { name: 'value', label: 'Reward Value (e.g. $15.00 or 100 pts)', type: 'text', placeholder: '$15.00', required: true },
    { name: 'status', label: 'Status', type: 'select', required: true, options: [
      { value: 'Setted', label: 'Setted' },
      { value: 'Pending Approval', label: 'Pending Approval' }
    ]}
  ];

  const handleAddSave = (val) => {
    const newRew = {
      ...val,
      id: `REW-${Math.floor(200 + Math.random() * 100)}`,
      date: new Date().toISOString().split('T')[0]
    };
    setRewards([newRew, ...rewards]);
    setSuccessMsg('Reward added successfully!');
    setIsSuccessOpen(true);
  };

  const handleEditSave = (updatedVal) => {
    setRewards(rewards.map(r => r.id === selectedReward.id ? { ...r, ...updatedVal } : r));
    setSuccessMsg('Reward record updated successfully!');
    setIsSuccessOpen(true);
  };

  const handleDeleteConfirm = () => {
    setRewards(rewards.filter(r => r.id !== selectedReward.id));
    setSuccessMsg('Reward record deleted.');
    setIsSuccessOpen(true);
  };

  const handleApprove = (row) => {
    setRewards(rewards.map(r => r.id === row.id ? { ...r, status: 'Setted' } : r));
    addToast(`Reward payout of ${row.value} for ${row.user} approved!`, 'success');
  };

  const handleExportCSV = () => {
    const csvContent = generateCSV(['ID', 'User', 'Category', 'Value', 'Status', 'Date'], rewards);
    triggerDownload(csvContent, 'rewards.csv', 'text/csv');
    addToast('Reward ledger CSV downloaded!', 'success');
  };

  const filteredRewards = rewards.filter(r => {
    const matchesSearch = r.user.toLowerCase().includes(searchTerm.toLowerCase()) || r.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'All' || r.type === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <AdminShell activeTab="Reward Management" headerTitle="Rewards Console">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          Loyalty &gt; <span style={{ color: '#2A2454' }}>Reward Management</span>
        </div>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="custom-page-heading">Loyalty &amp; Reward Management</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Configure and settle user cashback, loyalty programs, referral milestones, and influencer commissions.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={handleExportCSV} className="custom-btn-secondary">
              <Download size={16} strokeWidth={2.5} /> Export CSV
            </button>
            <button onClick={() => setIsAddOpen(true)} className="custom-btn-primary">
              <Plus size={16} strokeWidth={2.5} /> Settle Reward
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="custom-kpi-card-container">
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Trophy size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Rewards</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>{rewards.length}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Clock size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pending Approval</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#d97706', margin: '2px 0 0 0' }}>{rewards.filter(r => r.status === 'Pending Approval').length} Settle</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle2 size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Settled</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#059669', margin: '2px 0 0 0' }}>{rewards.filter(r => r.status === 'Setted').length} Settled</h2>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <input 
              type="text" 
              placeholder="Search user, category..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '10px 16px 10px 40px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px', outline: 'none' }}
            />
            <Search size={16} style={{ position: 'absolute', left: '14px', top: '12px', color: '#94a3b8' }} />
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            {['All', 'Cashback', 'Loyalty Points', 'Referral Reward', 'Influencer Reward'].map(tab => (
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
                <th style={{ padding: '16px 24px' }}>REWARD ID</th>
                <th style={{ padding: '16px 24px' }}>DATE</th>
                <th style={{ padding: '16px 24px' }}>ASSOCIATED USER</th>
                <th style={{ padding: '16px 24px' }}>REWARD CATEGORY</th>
                <th style={{ padding: '16px 24px' }}>PAYOUT VALUE</th>
                <th style={{ padding: '16px 24px' }}>STATUS</th>
                <th style={{ padding: '16px 24px', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredRewards.length > 0 ? (
                filteredRewards.map(row => (
                  <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace', color: '#4f46e5' }}>{row.id}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '600' }}>{row.date}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700' }}>{row.user}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '600' }}>{row.type}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700', color: '#059669', fontFamily: 'monospace' }}>{row.value}</td>
                    <td style={{ padding: '18px 24px' }}>
                      <span style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '10px',
                        fontWeight: '800',
                        background: row.status === 'Setted' ? '#d1fae5' : '#fffbeb',
                        color: row.status === 'Setted' ? '#065f46' : '#d97706'
                      }}>
                        {row.status}
                      </span>
                    </td>
                    <td style={{ padding: '18px 24px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', alignItems: 'center' }}>
                        {row.status === 'Pending Approval' && (
                          <button 
                            onClick={() => handleApprove(row)}
                            className="custom-btn-secondary"
                            style={{ padding: '4px 10px', height: '28px', fontSize: '11px', borderColor: '#10b981', color: '#10b981' }}
                          >
                            Approve Settle
                          </button>
                        )}
                        <button onClick={() => { setSelectedReward(row); setIsPreviewOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Preview"><Eye size={16} /></button>
                        <button onClick={() => { setSelectedReward(row); setIsEditOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Edit"><Edit size={16} /></button>
                        <button onClick={() => { setSelectedReward(row); setIsDeleteOpen(true); }} style={{ border: 'none', background: '#fef2f2', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#ef4444' }} title="Delete"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>No reward records found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>

      {/* Modals */}
      <AddEditModal 
        isOpen={isAddOpen} 
        onClose={() => setIsAddOpen(false)} 
        title="Disburse Reward" 
        fields={formFields} 
        onSave={handleAddSave} 
      />

      <AddEditModal 
        isOpen={isEditOpen} 
        onClose={() => setIsEditOpen(false)} 
        title="Edit Reward Details" 
        fields={formFields} 
        initialValues={selectedReward} 
        onSave={handleEditSave} 
      />

      <DeleteConfirmationModal 
        isOpen={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)} 
        onConfirm={handleDeleteConfirm} 
        itemName={`reward ledger "${selectedReward?.id}"`} 
      />

      <PreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        title="Reward Ledger Preview" 
        data={{
          'Reward ID': selectedReward?.id,
          'Disbursed Date': selectedReward?.date,
          'Target Recipient': selectedReward?.user,
          'Reward Category': selectedReward?.type,
          'Payout Value': selectedReward?.value,
          'Status State': selectedReward?.status
        }} 
      />

      <SuccessModal 
        isOpen={isSuccessOpen} 
        onClose={() => setIsSuccessOpen(false)} 
        message={successMsg} 
      />

    </AdminShell>
  );
}
