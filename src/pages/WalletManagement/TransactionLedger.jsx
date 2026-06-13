import React, { useState } from 'react';
import { Search, SlidersHorizontal, Download, ArrowRight } from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import { mockTransactions } from './data/mockData';

export default function TransactionLedger() {
  const { navigate } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const handleExport = () => {
    alert('Exporting Ledger in CSV format...');
  };

  const getFilteredTransactions = () => {
    return mockTransactions.filter((txn) => {
      const matchesSearch = txn.owner.toLowerCase().includes(searchTerm.toLowerCase()) || txn.id.toLowerCase().includes(searchTerm.toLowerCase()) || txn.reference.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = typeFilter === 'All' || txn.type === typeFilter;
      const matchesStatus = statusFilter === 'All' || txn.status === statusFilter;
      return matchesSearch && matchesType && matchesStatus;
    });
  };

  const filteredData = getFilteredTransactions();

  return (
    <AdminShell
      activeTab="Wallet Management"
      brandText="HOZIFY Wallet"
      brandSubText="Global Ledger v1.2"
      headerTitle="Financial Admin"
      searchPlaceholder="Search master ledger..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 0' }}>
        
        {/* Header Title */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
              Master Transaction Ledger
            </h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '4px 0 0' }}>
              Central audit log of all digital splits, credit adjustments, and penalties across the HOZIFY network.
            </p>
          </div>

          <button
            onClick={handleExport}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              border: 'none',
              background: '#25108f',
              color: '#fff',
              fontSize: '12px',
              fontWeight: '750',
              height: '36px',
              padding: '0 16px',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            <Download size={14} />
            <span>Export CSV</span>
          </button>
        </div>

        {/* Filters Panel */}
        <div className="panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            
            {/* Search Input */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--line)', background: '#fff', height: '36px', padding: '0 12px', borderRadius: '6px', flex: 1, minWidth: '200px' }}>
              <Search size={14} style={{ color: 'var(--muted)' }} />
              <input
                placeholder="Search by ID, owner, or references..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '13px', width: '100%' }}
              />
            </div>

            {/* Type Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--line)', background: '#fff', height: '36px', padding: '0 12px', borderRadius: '6px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Type</span>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}
                aria-label="Transaction Type Filter"
              >
                <option value="All">All Types</option>
                <option value="Credit">Credit Only</option>
                <option value="Debit">Debit Only</option>
                <option value="Transfer">Transfer Only</option>
              </select>
            </div>

            {/* Status Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--line)', background: '#fff', height: '36px', padding: '0 12px', borderRadius: '6px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Status</span>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}
                aria-label="Transaction Status Filter"
              >
                <option value="All">All Statuses</option>
                <option value="Success">Success</option>
                <option value="Pending">Pending</option>
                <option value="Failed">Failed</option>
              </select>
            </div>

          </div>
        </div>

        {/* Ledger Grid */}
        <div className="panel" style={{ padding: '24px' }}>
          <div className="table-wrap">
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#f4eff8', borderBottom: '1px solid var(--line)' }}>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Transaction ID</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Owner</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Source</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Amount Movement</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Balance</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Reference</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Date</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>Status</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10px', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((txn) => {
                  const isCredit = txn.type === 'Credit';
                  return (
                    <tr key={txn.id} style={{ borderBottom: '1px solid var(--lavender)' }}>
                      <td style={{ padding: '16px' }}>
                        <strong style={{ color: '#25108f' }}>#{txn.id}</strong>
                      </td>
                      <td style={{ padding: '16px', fontWeight: '700' }}>{txn.owner}</td>
                      <td style={{ padding: '16px' }}>
                        <span style={{ fontSize: '11px', fontWeight: '800', background: '#fafafa', border: '1px solid var(--line)', padding: '2px 6px', borderRadius: '4px' }}>
                          {txn.source}
                        </span>
                      </td>
                      <td style={{ padding: '16px', fontWeight: '850', color: isCredit ? '#07956f' : '#d32929' }}>
                        {isCredit ? '+' : '-'}₹{txn.amount.toLocaleString('en-IN')}
                      </td>
                      <td style={{ padding: '16px', color: 'var(--muted)', fontWeight: '750' }}>₹{txn.balance.toLocaleString('en-IN')}</td>
                      <td style={{ padding: '16px', color: 'var(--muted)' }}>{txn.reference}</td>
                      <td style={{ padding: '16px', color: 'var(--muted)' }}>{txn.date}</td>
                      <td style={{ padding: '16px' }}>
                        <span style={{
                          fontSize: '9px',
                          fontWeight: '850',
                          background: txn.status === 'Success' ? '#ecfdf5' : txn.status === 'Pending' ? '#fffbeb' : '#fee2e2',
                          color: txn.status === 'Success' ? '#07956f' : txn.status === 'Pending' ? '#b45309' : '#d32929',
                          padding: '3px 8px',
                          borderRadius: '4px'
                        }}>
                          {txn.status}
                        </span>
                      </td>
                      <td style={{ padding: '16px', textAlign: 'right' }}>
                        <button
                          onClick={() => navigate(ROUTES.transactionDetail.replace(':id', txn.id))}
                          style={{ border: 'none', background: 'transparent', color: '#25108f', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', marginLeft: 'auto' }}
                        >
                          <strong>View</strong>
                          <ArrowRight size={14} />
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
