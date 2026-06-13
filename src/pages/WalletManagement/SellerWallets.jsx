import React, { useState } from 'react';
import { Search, Eye, ShoppingBag } from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import { mockWallets } from './data/mockData';

export default function SellerWallets() {
  const { navigate } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const sellerWallets = mockWallets.filter(w => w.type === 'Seller');

  const filteredWallets = sellerWallets.filter(w => {
    const matchesSearch = w.owner.toLowerCase().includes(searchTerm.toLowerCase()) || w.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || w.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminShell
      activeTab="Wallet Management"
      brandText="HOZIFY Wallet"
      brandSubText="Global Ledger v1.2"
      headerTitle="Seller Wallets"
      searchPlaceholder="Search seller wallets..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 0' }}>
        
        {/* Header */}
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
            Seller Wallets Dashboard
          </h1>
          <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '4px 0 0' }}>
            Index of business/seller product digital wallets. Audit payout approvals, transaction chargeback reserves, and merchant listings.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          <div className="panel" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ height: '36px', width: '36px', borderRadius: '50%', background: '#fffbeb', color: '#b45309', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShoppingBag size={18} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Active Seller Wallets</span>
              <strong style={{ display: 'block', fontSize: '20px', fontWeight: '850', color: 'var(--text)', marginTop: '2px' }}>
                {sellerWallets.length} Accounts
              </strong>
            </div>
          </div>
          <div className="panel" style={{ padding: '16px' }}>
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Merchant Sales Splitting</span>
            <strong style={{ display: 'block', fontSize: '20px', fontWeight: '850', color: '#25108f', marginTop: '4px' }}>
              ₹{sellerWallets.reduce((sum, w) => sum + w.lifetimeEarnings, 0).toLocaleString('en-IN')}
            </strong>
          </div>
          <div className="panel" style={{ padding: '16px' }}>
            <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Merchant Reserve Hold</span>
            <strong style={{ display: 'block', fontSize: '20px', fontWeight: '850', color: '#d32929', marginTop: '4px' }}>
              ₹{sellerWallets.reduce((sum, w) => sum + w.frozen, 0).toLocaleString('en-IN')}
            </strong>
          </div>
        </div>

        {/* Filter bar */}
        <div className="panel" style={{ padding: '16px', display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--line)', background: '#fff', height: '36px', padding: '0 12px', borderRadius: '6px', flex: 1, minWidth: '200px' }}>
            <Search size={14} style={{ color: 'var(--muted)' }} />
            <input
              placeholder="Search merchant name or wallet ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '13px', width: '100%' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--line)', background: '#fff', height: '36px', padding: '0 12px', borderRadius: '6px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Status</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}
              aria-label="Filter by status"
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Frozen">Frozen</option>
            </select>
          </div>
        </div>

        {/* Seller Table */}
        <div className="panel" style={{ padding: '24px' }}>
          <div className="table-wrap">
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#f4eff8', borderBottom: '1px solid var(--line)' }}>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Wallet ID</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Merchant Owner</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Available Balance</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Reserve Hold Balance</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Lifetime Earnings</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>KYC Level</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Status</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredWallets.map((w) => {
                  const isActive = w.status === 'Active';
                  return (
                    <tr key={w.id} style={{ borderBottom: '1px solid var(--lavender)' }}>
                      <td style={{ padding: '16px', fontWeight: '750' }}>#{w.id}</td>
                      <td style={{ padding: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <img src={w.avatar} alt={w.owner} style={{ height: '32px', width: '32px', borderRadius: '50%', objectFit: 'cover' }} />
                          <div>
                            <strong style={{ display: 'block', color: 'var(--text)' }}>{w.owner}</strong>
                            <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{w.email}</span>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '16px', fontWeight: '800', color: 'var(--text)' }}>₹{w.available.toLocaleString('en-IN')}</td>
                      <td style={{ padding: '16px', fontWeight: '700', color: w.frozen > 0 ? '#d32929' : 'var(--muted)' }}>₹{w.frozen.toLocaleString('en-IN')}</td>
                      <td style={{ padding: '16px', fontWeight: '700', color: '#07956f' }}>₹{w.lifetimeEarnings.toLocaleString('en-IN')}</td>
                      <td style={{ padding: '16px', color: 'var(--muted)' }}>{w.kyc}</td>
                      <td style={{ padding: '16px' }}>
                        <span style={{
                          fontSize: '9px',
                          fontWeight: '850',
                          background: isActive ? '#ecfdf5' : '#fee2e2',
                          color: isActive ? '#07956f' : '#d32929',
                          padding: '3px 8px',
                          borderRadius: '4px'
                        }}>
                          {w.status.toUpperCase()}
                        </span>
                      </td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>
                        <button
                          onClick={() => navigate(ROUTES.walletDetails.replace(':id', w.id))}
                          style={{ border: 'none', background: 'transparent', color: '#25108f', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', marginLeft: 'auto' }}
                        >
                          <Eye size={13} />
                          <strong>Inspect Wallet</strong>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}
