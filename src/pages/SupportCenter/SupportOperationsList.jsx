import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Filter,
  MoreVertical,
  Plus,
  Search,
  ChevronLeft,
  ChevronRight,
  Download,
  X,
  Eye,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import AdminShell from '../../components/layouts/AdminShell';

export default function SupportOperationsList({ activeTab = 'Support Center', defaultFilter = 'all' }) {
  const { navigate } = useApp();
  const [selectedPriority, setSelectedPriority] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAgent, setSelectedAgent] = useState('All');
  const [dateRange, setDateRange] = useState('Oct 1, 2023 - Oct 31, 2023');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMenuId, setActiveMenuId] = useState(null);

  // Initial mockup ticket data from screenshots
  const [tickets, setTickets] = useState([
    {
      id: '#TK-8842',
      user: { name: 'Jared Smith', email: 'jared.s@gmail.com', initials: 'JS', color: '#3b82f6', bg: '#eff6ff' },
      category: 'Technical',
      priority: 'Critical',
      status: 'OPEN',
      agent: { name: 'Sarah J.', initials: 'SJ', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop&q=80' },
      createdDate: 'Oct 12, 09:42 AM'
    },
    {
      id: '#TK-8843',
      user: { name: 'Maria Lopez', email: 'm.lopez@corporate.com', initials: 'ML', color: '#25108f', bg: '#f1ebfa' },
      category: 'Billing',
      priority: 'Medium',
      status: 'IN PROGRESS',
      agent: { name: 'Mark T.', initials: 'MT', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&q=80' },
      createdDate: 'Oct 12, 10:15 AM'
    },
    {
      id: '#TK-8844',
      user: { name: 'Elena Fischer', email: 'elena.f@techhub.io', initials: 'EF', color: '#10b981', bg: '#ecfdf5' },
      category: 'Account',
      priority: 'High',
      status: 'OPEN',
      agent: { name: 'Unassigned', initials: 'UN', avatar: null },
      createdDate: 'Oct 12, 11:30 AM'
    },
    {
      id: '#TK-8845',
      user: { name: 'Robert Brown', email: 'rb@fasttrack.com', initials: 'RB', color: '#f59e0b', bg: '#fef3c7' },
      category: 'Technical',
      priority: 'Low',
      status: 'ON HOLD',
      agent: { name: 'Sarah J.', initials: 'SJ', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop&q=80' },
      createdDate: 'Oct 12, 01:55 PM'
    }
  ]);

  // Synchronise or add dynamic ticket if added from supportCreate
  useEffect(() => {
    const stored = localStorage.getItem('hozify_new_tickets');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge avoiding duplicates
          setTickets(prev => {
            const existingIds = new Set(prev.map(t => t.id));
            const newOnes = parsed.filter(t => !existingIds.has(t.id));
            return [...newOnes, ...prev];
          });
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleResetFilters = () => {
    setSelectedPriority('All');
    setSelectedCategory('All');
    setSelectedAgent('All');
    setSearchQuery('');
    setDateRange('Oct 1, 2023 - Oct 31, 2023');
  };

  const handleActionClick = (ticketId, action) => {
    setActiveMenuId(null);
    if (action === 'view') {
      navigate(ROUTES.supportDetails.replace(':id', ticketId.replace('#', '')));
    } else if (action === 'assign') {
      const name = prompt('Enter agent name to assign to:');
      if (!name) return;
      setTickets(prev => prev.map(t => {
        if (t.id === ticketId) {
          return { ...t, agent: { name, initials: name.substring(0, 2).toUpperCase(), avatar: null } };
        }
        return t;
      }));
    } else if (action === 'close') {
      setTickets(prev => prev.map(t => {
        if (t.id === ticketId) {
          return { ...t, status: 'CLOSED' };
        }
        return t;
      }));
    }
  };

  // Filter tickets
  const filteredTickets = tickets.filter(t => {
    // Priority filter
    if (selectedPriority !== 'All' && t.priority !== selectedPriority) return false;
    
    // Category filter
    if (selectedCategory !== 'All' && t.category !== selectedCategory) return false;
    
    // Agent filter
    if (selectedAgent !== 'All') {
      if (selectedAgent === 'Unassigned' && t.agent.name !== 'Unassigned') return false;
      if (selectedAgent !== 'Unassigned' && t.agent.name === 'Unassigned') return false;
      if (selectedAgent !== 'Unassigned' && t.agent.name !== selectedAgent) return false;
    }

    // Default Filter from route prop
    if (defaultFilter !== 'all') {
      if (defaultFilter === 'open' && t.status !== 'OPEN') return false;
      if (defaultFilter === 'in-progress' && t.status !== 'IN PROGRESS') return false;
      if (defaultFilter === 'closed' && t.status !== 'CLOSED') return false;
      
      // Issue type mapping
      if (defaultFilter === 'bookings' && t.category.toLowerCase() !== 'bookings') {
        // Fallback for demo: if category contains technical or others, match if exact
        if (t.category.toLowerCase() !== 'booking' && t.category.toLowerCase() !== 'bookings') return false;
      }
      if (defaultFilter === 'payments' && t.category.toLowerCase() !== 'payments' && t.category.toLowerCase() !== 'billing') return false;
      if (defaultFilter === 'wallet' && t.category.toLowerCase() !== 'wallet') return false;
      if (defaultFilter === 'technical' && t.category.toLowerCase() !== 'technical') return false;
      if (defaultFilter === 'kyc' && t.category.toLowerCase() !== 'kyc' && t.category.toLowerCase() !== 'account') return false;
    }

    // Search query
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return t.id.toLowerCase().includes(q) || 
             t.subject?.toLowerCase().includes(q) ||
             t.user.name.toLowerCase().includes(q) ||
             t.user.email.toLowerCase().includes(q) ||
             t.category.toLowerCase().includes(q);
    }

    return true;
  });

  return (
    <AdminShell
      activeTab={activeTab}
      brandText="HOZIFY"
      brandSubText="Enterprise Admin"
      headerTitle="Support Operations"
      searchPlaceholder="Search tickets, IDs, or users..."
      searchValue={searchQuery}
      onSearchChange={(val) => setSearchQuery(val)}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 0', position: 'relative' }}>
        
        {/* Page Title & Actions */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
              Support Operations
            </h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '4px 0 0' }}>
              Manage and resolve high-priority enterprise support requests.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={() => alert('Exporting ticket reports...')}
              style={{
                height: '38px',
                padding: '0 16px',
                borderRadius: '6px',
                border: '1px solid var(--line)',
                background: '#fff',
                color: 'var(--text)',
                fontWeight: '700',
                fontSize: '13px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
              type="button"
            >
              <Download size={14} />
              <span>Export Data</span>
            </button>

            <button
              onClick={() => navigate(ROUTES.supportCreate)}
              style={{
                height: '38px',
                padding: '0 16px',
                borderRadius: '6px',
                border: 'none',
                background: 'var(--primary)',
                color: '#fff',
                fontWeight: '700',
                fontSize: '13px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 2px 4px rgba(37, 16, 143, 0.1)'
              }}
              type="button"
            >
              <Plus size={16} />
              <span>New Ticket</span>
            </button>
          </div>
        </div>

        {/* Filter Card Grid */}
        <div className="panel" style={{ padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', alignItems: 'center', background: '#fff' }}>
          
          {/* Date Range */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--muted)' }}>Date Range</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--line)', padding: '8px 12px', borderRadius: '6px', background: '#fff' }}>
              <Calendar size={14} style={{ color: 'var(--muted)' }} />
              <input
                type="text"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '13px', color: 'var(--text)', width: '100%', fontWeight: '600' }}
                aria-label="Filter Date Range"
              />
            </div>
          </div>

          {/* Priority dropdown */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--muted)' }}>Priority</span>
            <select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              style={{ border: '1px solid var(--line)', padding: '8px 12px', borderRadius: '6px', background: '#fff', outline: 'none', fontSize: '13px', color: 'var(--text)', fontWeight: '600', width: '100%' }}
              aria-label="Filter Priority"
            >
              <option value="All">All Priorities</option>
              <option value="Critical">Critical</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          {/* Category dropdown */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--muted)' }}>Category</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{ border: '1px solid var(--line)', padding: '8px 12px', borderRadius: '6px', background: '#fff', outline: 'none', fontSize: '13px', color: 'var(--text)', fontWeight: '600', width: '100%' }}
              aria-label="Filter Category"
            >
              <option value="All">All Categories</option>
              <option value="Technical">Technical</option>
              <option value="Billing">Billing</option>
              <option value="Account">Account</option>
            </select>
          </div>

          {/* Agent dropdown */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--muted)' }}>Agent</span>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <select
                value={selectedAgent}
                onChange={(e) => setSelectedAgent(e.target.value)}
                style={{ border: '1px solid var(--line)', padding: '8px 12px', borderRadius: '6px', background: '#fff', outline: 'none', fontSize: '13px', color: 'var(--text)', fontWeight: '600', width: '100%' }}
                aria-label="Filter Agent"
              >
                <option value="All">All Agents</option>
                <option value="Sarah J.">Sarah J.</option>
                <option value="Mark T.">Mark T.</option>
                <option value="Unassigned">Unassigned</option>
              </select>

              <button
                onClick={handleResetFilters}
                style={{
                  height: '35px',
                  width: '35px',
                  borderRadius: '6px',
                  border: '1px solid var(--line)',
                  background: '#f4eff8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  cursor: 'pointer'
                }}
                title="Reset Filters"
                type="button"
              >
                <X size={15} />
              </button>
            </div>
          </div>

        </div>

        {/* Tickets Queue Table */}
        <div className="panel" style={{ padding: '0', background: '#fff', overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px', textAlign: 'left', minWidth: '850px' }}>
              <thead>
                <tr style={{ background: 'var(--soft)', borderBottom: '1px solid var(--line)' }}>
                  <th style={{ padding: '16px 20px', width: '40px' }}>
                    <input type="checkbox" aria-label="Select all tickets" />
                  </th>
                  <th style={{ padding: '16px 20px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10.5px' }}>Ticket ID</th>
                  <th style={{ padding: '16px 20px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10.5px' }}>User</th>
                  <th style={{ padding: '16px 20px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10.5px' }}>Category</th>
                  <th style={{ padding: '16px 20px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10.5px' }}>Priority</th>
                  <th style={{ padding: '16px 20px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10.5px' }}>Status</th>
                  <th style={{ padding: '16px 20px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10.5px' }}>Assigned Agent</th>
                  <th style={{ padding: '16px 20px', color: 'var(--muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '10.5px' }}>Created Date</th>
                  <th style={{ padding: '16px 20px', width: '50px' }}></th>
                </tr>
              </thead>
              <tbody>
                {filteredTickets.length === 0 ? (
                  <tr>
                    <td colSpan={9} style={{ padding: '48px', textAlign: 'center', color: 'var(--muted)' }}>
                      No support tickets found matching the search criteria or filters.
                    </td>
                  </tr>
                ) : (
                  filteredTickets.map((tk) => (
                    <tr key={tk.id} style={{ borderBottom: '1px solid var(--lavender)', position: 'relative' }}>
                      <td style={{ padding: '16px 20px' }}>
                        <input type="checkbox" aria-label={`Select ticket ${tk.id}`} />
                      </td>
                      
                      {/* Ticket ID Link */}
                      <td style={{ padding: '16px 20px' }}>
                        <button
                          onClick={() => navigate(ROUTES.supportDetails.replace(':id', tk.id.replace('#', '')))}
                          style={{
                            border: 'none',
                            background: 'transparent',
                            fontWeight: '850',
                            color: 'var(--primary)',
                            padding: 0,
                            cursor: 'pointer',
                            fontSize: '13.5px'
                          }}
                          type="button"
                        >
                          {tk.id}
                        </button>
                      </td>

                      {/* User Column */}
                      <td style={{ padding: '16px 20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{
                            height: '32px',
                            width: '32px',
                            borderRadius: '50%',
                            background: tk.user.bg,
                            color: tk.user.color,
                            fontSize: '11px',
                            fontWeight: '850',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            {tk.user.initials}
                          </div>
                          <div>
                            <strong style={{ display: 'block', color: 'var(--text)', fontSize: '13px' }}>
                              {tk.user.name}
                            </strong>
                            <span style={{ fontSize: '11px', color: 'var(--muted)' }}>
                              {tk.user.email}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Category */}
                      <td style={{ padding: '16px 20px' }}>
                        <span style={{
                          fontSize: '11px',
                          fontWeight: '750',
                          color: '#4638af',
                          background: 'rgba(70, 56, 175, 0.08)',
                          padding: '3px 8px',
                          borderRadius: '4px'
                        }}>
                          {tk.category}
                        </span>
                      </td>

                      {/* Priority */}
                      <td style={{ padding: '16px 20px' }}>
                        <span style={{
                          fontSize: '9.5px',
                          fontWeight: '900',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          textTransform: 'uppercase',
                          background: tk.priority === 'Critical' ? '#fee2e2' : tk.priority === 'High' ? '#ffe8e8' : tk.priority === 'Medium' ? '#eff6ff' : '#f3f4f6',
                          color: tk.priority === 'Critical' ? '#dc2626' : tk.priority === 'High' ? '#ef4444' : tk.priority === 'Medium' ? '#2563eb' : '#4b5563'
                        }}>
                          {tk.priority}
                        </span>
                      </td>

                      {/* Status */}
                      <td style={{ padding: '16px 20px' }}>
                        <span style={{
                          fontSize: '9.5px',
                          fontWeight: '900',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          background: tk.status === 'OPEN' ? '#d1fae5' : tk.status === 'IN PROGRESS' ? '#dbeafe' : '#f3f4f6',
                          color: tk.status === 'OPEN' ? '#07956f' : tk.status === 'IN PROGRESS' ? '#1e40af' : '#4b5563'
                        }}>
                          {tk.status}
                        </span>
                      </td>

                      {/* Agent */}
                      <td style={{ padding: '16px 20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          {tk.agent.avatar ? (
                            <img
                              src={tk.agent.avatar}
                              alt={tk.agent.name}
                              style={{ height: '24px', width: '24px', borderRadius: '50%', objectFit: 'cover' }}
                            />
                          ) : (
                            <div style={{
                              height: '24px',
                              width: '24px',
                              borderRadius: '50%',
                              background: '#e5e7eb',
                              color: '#6b7280',
                              fontSize: '9.5px',
                              fontWeight: '800',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              {tk.agent.initials}
                            </div>
                          )}
                          <span style={{ color: tk.agent.name === 'Unassigned' ? '#9ca3af' : 'var(--text)', fontWeight: '600' }}>
                            {tk.agent.name}
                          </span>
                        </div>
                      </td>

                      {/* Created Date */}
                      <td style={{ padding: '16px 20px', color: 'var(--muted)', fontWeight: '600' }}>
                        {tk.createdDate}
                      </td>

                      {/* Actions Menu */}
                      <td style={{ padding: '16px 20px', position: 'relative' }}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveMenuId(activeMenuId === tk.id ? null : tk.id);
                          }}
                          style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }}
                          aria-label="More actions"
                        >
                          <MoreVertical size={16} />
                        </button>

                        {/* Inline Actions dropdown */}
                        {activeMenuId === tk.id && (
                          <div style={{
                            position: 'absolute',
                            right: '30px',
                            top: '40px',
                            background: '#fff',
                            border: '1px solid var(--line)',
                            borderRadius: '6px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                            zIndex: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            minWidth: '130px'
                          }}>
                            <button
                              onClick={() => handleActionClick(tk.id, 'view')}
                              style={{ padding: '10px 14px', border: 'none', background: 'transparent', cursor: 'pointer', fontSize: '12.5px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text)' }}
                              type="button"
                            >
                              <Eye size={13} />
                              <span>View Details</span>
                            </button>
                            <button
                              onClick={() => handleActionClick(tk.id, 'assign')}
                              style={{ padding: '10px 14px', border: 'none', background: 'transparent', cursor: 'pointer', fontSize: '12.5px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text)', borderTop: '1px solid var(--soft)' }}
                              type="button"
                            >
                              <User size={13} />
                              <span>Assign Agent</span>
                            </button>
                            <button
                              onClick={() => handleActionClick(tk.id, 'close')}
                              style={{ padding: '10px 14px', border: 'none', background: 'transparent', cursor: 'pointer', fontSize: '12.5px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '8px', color: '#dc2626', borderTop: '1px solid var(--soft)' }}
                              type="button"
                            >
                              <CheckCircle size={13} />
                              <span>Close Ticket</span>
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table></div>
          </div>

          {/* Table pagination footer */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 20px',
            borderTop: '1px solid var(--lavender)',
            background: '#fff',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <span style={{ fontSize: '12.5px', color: 'var(--muted)', fontWeight: '600' }}>
              Showing {filteredTickets.length} of 2,482 results
            </span>

            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              <button style={{ height: '28px', width: '28px', borderRadius: '4px', border: '1px solid var(--line)', background: '#fff', display: 'flex', alignItems: 'center', justifyCenter: 'center', cursor: 'pointer', color: 'var(--muted)' }} disabled aria-label="Previous page">
                <ChevronLeft size={14} style={{ margin: 'auto' }} />
              </button>
              
              <button style={{ height: '28px', width: '28px', borderRadius: '4px', border: 'none', background: 'var(--primary)', color: '#fff', fontSize: '12.5px', fontWeight: '800', cursor: 'pointer' }}>
                1
              </button>
              <button style={{ height: '28px', width: '28px', borderRadius: '4px', border: '1px solid var(--line)', background: '#fff', color: 'var(--muted)', fontSize: '12.5px', fontWeight: '750', cursor: 'pointer' }}>
                2
              </button>
              <button style={{ height: '28px', width: '28px', borderRadius: '4px', border: '1px solid var(--line)', background: '#fff', color: 'var(--muted)', fontSize: '12.5px', fontWeight: '750', cursor: 'pointer' }}>
                3
              </button>
              <span style={{ fontSize: '12.5px', color: 'var(--muted)', padding: '0 4px' }}>...</span>
              <button style={{ height: '28px', width: '28px', borderRadius: '4px', border: '1px solid var(--line)', background: '#fff', color: 'var(--muted)', fontSize: '12.5px', fontWeight: '750', cursor: 'pointer' }}>
                124
              </button>

              <button style={{ height: '28px', width: '28px', borderRadius: '4px', border: '1px solid var(--line)', background: '#fff', display: 'flex', alignItems: 'center', justifyCenter: 'center', cursor: 'pointer', color: 'var(--muted)' }} aria-label="Next page">
                <ChevronRight size={14} style={{ margin: 'auto' }} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </AdminShell>
  );
}
