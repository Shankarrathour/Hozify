import React, { useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import { useToast } from '../../components/common/ToastNotification';
import { 
  AddEditModal, DeleteConfirmationModal, PreviewModal, SuccessModal 
} from '../../components/common/popups/Modals';
import { triggerDownload, generateCSV } from '../../utils/downloadHelper';
import { 
  Search, Plus, Download, Edit, Trash2, Eye, Truck, CheckCircle2, ChevronLeft, ChevronRight, Package, ShoppingBag, ShoppingCart
} from 'lucide-react';

const INITIAL_ORDERS = [
  { id: 'ORD-501', date: '2026-06-27', client: 'Sarah Miller', items: 'Washing Machine Inlet Pipe', total: 18.50, seller: 'Urban Spares India', status: 'Created' },
  { id: 'ORD-502', date: '2026-06-26', client: 'Rajesh Kumar', items: 'Heavy Duty Wall Bracket (TV)', total: 32.00, seller: 'Durasteel Hardware', status: 'Processing' },
  { id: 'ORD-503', date: '2026-06-25', client: 'Sunil Dutt', items: 'AC Copper Piping Kit (3m)', total: 75.00, seller: 'Carrier Cooling Parts', status: 'Dispatched' },
  { id: 'ORD-504', date: '2026-06-25', client: 'Amit Shah', items: 'Electric Geyser Heating Element', total: 24.90, seller: 'Havells Service Hub', status: 'Delivered' },
  { id: 'ORD-505', date: '2026-06-24', client: 'John Doe', items: 'Water Purifier RO Membrane', total: 45.00, seller: 'Aquafit Filtration', status: 'Installed' },
  { id: 'ORD-506', date: '2026-06-23', client: 'Robert King', items: 'Plumbing Tap Valve Replacement', total: 9.50, seller: 'Urban Spares India', status: 'Closed' }
];

export default function OrderMgmtPage() {
  const { addToast } = useToast();
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  
  // Modals
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');

  const formFields = [
    { name: 'client', label: 'Client Name', type: 'text', placeholder: 'e.g. Amit Kumar', required: true },
    { name: 'items', label: 'Material Items Order List', type: 'text', placeholder: 'e.g. Copper pipes (2)', required: true },
    { name: 'total', label: 'Total Value ($)', type: 'number', placeholder: '45.00', required: true },
    { name: 'seller', label: 'Material Seller Source', type: 'text', required: true },
    { name: 'status', label: 'Order Status Flow', type: 'select', required: true, options: [
      { value: 'Created', label: 'Created' },
      { value: 'Processing', label: 'Processing' },
      { value: 'Dispatched', label: 'Dispatched' },
      { value: 'Delivered', label: 'Delivered' },
      { value: 'Installed', label: 'Installed' },
      { value: 'Closed', label: 'Closed (Complete)' }
    ]}
  ];

  const handleAddSave = (val) => {
    const newOrd = {
      ...val,
      id: `ORD-${Math.floor(500 + Math.random() * 100)}`,
      date: new Date().toISOString().split('T')[0]
    };
    setOrders([newOrd, ...orders]);
    setSuccessMsg('Material order created successfully!');
    setIsSuccessOpen(true);
  };

  const handleEditSave = (updatedVal) => {
    setOrders(orders.map(o => o.id === selectedOrder.id ? { ...o, ...updatedVal } : o));
    setSuccessMsg('Material order updated successfully!');
    setIsSuccessOpen(true);
  };

  const handleDeleteConfirm = () => {
    setOrders(orders.filter(o => o.id !== selectedOrder.id));
    setSuccessMsg('Order record deleted successfully.');
    setIsSuccessOpen(true);
  };

  const handleExportCSV = () => {
    const csvContent = generateCSV(['Order ID', 'Date', 'Client', 'Items', 'Total Value', 'Seller', 'Status'], orders);
    triggerDownload(csvContent, 'material_orders.csv', 'text/csv');
    addToast('Orders report downloaded!', 'success');
  };

  const triggerNextState = (order) => {
    const states = ['Created', 'Processing', 'Dispatched', 'Delivered', 'Installed', 'Closed'];
    const currentIdx = states.indexOf(order.status);
    if (currentIdx < states.length - 1) {
      const nextStatus = states[currentIdx + 1];
      setOrders(orders.map(o => o.id === order.id ? { ...o, status: nextStatus } : o));
      addToast(`Order ${order.id} status transitioned to "${nextStatus}"!`, 'success');
    }
  };

  const filteredOrders = orders.filter(o => {
    const matchesSearch = o.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          o.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          o.items.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || o.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminShell activeTab="Orders" headerTitle="Material Order Logistics">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          Logistics &gt; <span style={{ color: '#2A2454' }}>Order Management</span>
        </div>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="custom-page-heading">Material Order Management</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Track material sales, dispatch intervals, delivery tracking, and installation statuses.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={handleExportCSV} className="custom-btn-secondary">
              <Download size={16} strokeWidth={2.5} /> Export CSV
            </button>
            <button onClick={() => setIsAddOpen(true)} className="custom-btn-primary">
              <Plus size={16} strokeWidth={2.5} /> Create Order
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="custom-kpi-card-container">
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Package size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Material Orders</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>{orders.length}</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Truck size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>In Transit (Dispatched)</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#d97706', margin: '2px 0 0 0' }}>{orders.filter(o => o.status === 'Dispatched').length} Orders</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle2 size={20} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Completed / Closed</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#059669', margin: '2px 0 0 0' }}>{orders.filter(o => o.status === 'Closed' || o.status === 'Installed').length} Orders</h2>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <input 
              type="text" 
              placeholder="Search order ID, client, items..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '10px 16px 10px 40px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px', outline: 'none' }}
            />
            <Search size={16} style={{ position: 'absolute', left: '14px', top: '12px', color: '#94a3b8' }} />
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            {['All', 'Created', 'Processing', 'Dispatched', 'Delivered', 'Installed', 'Closed'].map(tab => (
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
          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
            <thead>
              <tr className="custom-table-header">
                <th style={{ padding: '16px 24px' }}>ORDER ID</th>
                <th style={{ padding: '16px 24px' }}>DATE</th>
                <th style={{ padding: '16px 24px' }}>CLIENT</th>
                <th style={{ padding: '16px 24px' }}>ITEMS</th>
                <th style={{ padding: '16px 24px' }}>SELLER</th>
                <th style={{ padding: '16px 24px' }}>VALUE</th>
                <th style={{ padding: '16px 24px' }}>STATUS</th>
                <th style={{ padding: '16px 24px', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map(row => (
                  <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace', color: '#4f46e5' }}>{row.id}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '600' }}>{row.date}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700' }}>{row.client}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '600' }}>{row.items}</td>
                    <td style={{ padding: '18px 24px', color: 'var(--muted)' }}>{row.seller}</td>
                    <td style={{ padding: '18px 24px', fontWeight: '700', fontFamily: 'monospace' }}>${row.total.toFixed(2)}</td>
                    <td style={{ padding: '18px 24px' }}>
                      <span style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '10px',
                        fontWeight: '800',
                        background: row.status === 'Closed' ? '#d1fae5' : row.status === 'Dispatched' ? '#fffbeb' : '#f1f5f9',
                        color: row.status === 'Closed' ? '#065f46' : row.status === 'Dispatched' ? '#d97706' : '#475569'
                      }}>
                        {row.status}
                      </span>
                    </td>
                    <td style={{ padding: '18px 24px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', alignItems: 'center' }}>
                        {row.status !== 'Closed' && (
                          <button 
                            onClick={() => triggerNextState(row)}
                            className="custom-btn-secondary"
                            style={{ padding: '4px 10px', height: '28px', fontSize: '11px' }}
                          >
                            Progress Status
                          </button>
                        )}
                        <button onClick={() => { setSelectedOrder(row); setIsPreviewOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Preview"><Eye size={16} /></button>
                        <button onClick={() => { setSelectedOrder(row); setIsEditOpen(true); }} style={{ border: 'none', background: '#f1f5f9', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#334155' }} title="Edit"><Edit size={16} /></button>
                        <button onClick={() => { setSelectedOrder(row); setIsDeleteOpen(true); }} style={{ border: 'none', background: '#fef2f2', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#ef4444' }} title="Delete"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>No orders matching filters found.</td>
                </tr>
              )}
            </tbody>
          </table></div>
        </div>

      </div>

      {/* Modals */}
      <AddEditModal 
        isOpen={isAddOpen} 
        onClose={() => setIsAddOpen(false)} 
        title="Add Material Order" 
        fields={formFields} 
        onSave={handleAddSave} 
      />

      <AddEditModal 
        isOpen={isEditOpen} 
        onClose={() => setIsEditOpen(false)} 
        title="Edit Order Details" 
        fields={formFields} 
        initialValues={selectedOrder} 
        onSave={handleEditSave} 
      />

      <DeleteConfirmationModal 
        isOpen={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)} 
        onConfirm={handleDeleteConfirm} 
        itemName={`order registry "${selectedOrder?.id}"`} 
      />

      <PreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        title="Material Order Summary" 
        data={{
          'Order ID': selectedOrder?.id,
          'Date Ordered': selectedOrder?.date,
          'Customer Recipient': selectedOrder?.client,
          'Material Spares': selectedOrder?.items,
          'Authorized Seller': selectedOrder?.seller,
          'Total Amount': `$${selectedOrder?.total.toFixed(2)}`,
          'Status Flow': selectedOrder?.status
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
