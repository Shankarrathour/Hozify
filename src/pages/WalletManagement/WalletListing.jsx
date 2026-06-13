import React, { useState } from 'react';
import { Search, Eye, Filter, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import { mockWallets } from './data/mockData';

export default function WalletListing({ defaultType = 'All' }) {
  const { navigate } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState(defaultType);
  const [statusFilter, setStatusFilter] = useState('All');

  const handleCreateWallet = () => {
    alert('Creating a new wallet placeholder...');
  };

  const getFilteredWallets = () => {
    return mockWallets.filter((w) => {
      const matchesSearch = w.owner.toLowerCase().includes(searchTerm.toLowerCase()) || w.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = typeFilter === 'All' || w.type === typeFilter;
      const matchesStatus = statusFilter === 'All' || w.status === statusFilter;
      return matchesSearch && matchesType && matchesStatus;
    });
  };

  const filteredWallets = getFilteredWallets();

  return (
    <AdminShell
      activeTab="Wallet Management"
      brandText="HOZIFY Wallet"
      brandSubText="Global Ledger v1.2"
      headerTitle="Wallet Directory"
      searchPlaceholder="Search all wallets..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 0' }}>
        
        {/* Title Block */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
              Wallet Listing Dashboard
            </h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '4px 0 0' }}>
              Complete listing directory of all registered partner, customer, employee, and seller digital wallets.
            </p>
          </div>

          <button
            onClick={handleCreateWallet}
            style={{
              border: 'none',
              background: '#25108f',
              color: '#fff',
              fontSize: '12px',
              fontWeight: '750',
              height: '38px',
              padding: '0 16px',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Create Digital Wallet
          </button>
        </div>

        {/* Filter bar */}
        <div className="panel" style={{ padding: '16px', display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--line)', background: '#fff', height: '36px', padding: '0 12px', borderRadius: '6px', flex: 1, minWidth: '200px' }}>
            <Search size={14} style={{ color: 'var(--muted)' }} />
            <input
              placeholder="Search by wallet ID or owner name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '13px', width: '100%' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--line)', background: '#fff', height: '36px', padding: '0 12px', borderRadius: '6px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Type</span>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}
              aria-label="Filter by wallet type"
            >
              <option value="All">All Roles</option>
              <option value="Partner">Partner</option>
              <option value="User">User</option>
              <option value="Seller">Seller</option>
              <option value="Employee">Employee</option>
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--line)', background: '#fff', height: '36px', padding: '0 12px', borderRadius: '6px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Status</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}
              aria-label="Filter by wallet status"
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Frozen">Frozen</option>
            </select>
          </div>

        </div>

        {/* Directory Table */}
        <div className="panel" style={{ padding: '24px' }}>
          <div className="table-wrap">
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#f4eff8', borderBottom: '1px solid var(--line)' }}>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Wallet ID</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Owner</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Entity Type</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Available Balance</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Frozen Balance</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Lifetime Earnings</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>KYC Status</th>
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
                      <td style={{ padding: '16px', fontWeight: '700' }}>{w.type}</td>
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
                          style={{
                            border: 'none',
                            background: 'transparent',
                            color: '#25108f',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            marginLeft: 'auto'
                          }}
                        >
                          <Eye size={13} />
                          <strong>Inspect Details</strong>
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
