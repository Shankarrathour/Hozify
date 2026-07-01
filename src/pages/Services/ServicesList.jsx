import React, { useState } from 'react';
import {
  SlidersHorizontal,
  Search,
  Eye,
  Edit,
  Download,
  Star,
  Plus
} from 'lucide-react';

const initialServices = [
  {
    id: '#SRV-9821',
    name: 'Premium HVAC Maintenance',
    category: 'Engineering & Facilities',
    basePrice: '$185.00',
    bookings: '1,240',
    revenue: '$229,400',
    rating: '4.9',
    status: 'Verified',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=80&h=80&q=80'
  },
  {
    id: '#SRV-4412',
    name: 'Cloud Infrastructure Audit',
    category: 'IT & Cybersecurity',
    basePrice: '$850.00',
    bookings: '312',
    revenue: '$265,200',
    rating: '4.7',
    status: 'Pending',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=80&h=80&q=80'
  },
  {
    id: '#SRV-1029',
    name: 'Standard Office Cleaning',
    category: 'Cleaning Services',
    basePrice: '$45.00',
    bookings: '2,850',
    revenue: '$128,250',
    rating: '4.5',
    status: 'Verified',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=80&h=80&q=80'
  },
  {
    id: '#SRV-5561',
    name: 'Operational Strategy Audit',
    category: 'Consulting',
    basePrice: '$1,200.00',
    bookings: '84',
    revenue: '$100,800',
    rating: '5.0',
    status: 'High Risk',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=80&h=80&q=80'
  }
];

export default function ServicesList({ onAddService, onViewProfile, onViewApprovals }) {
  const [services, setServices] = useState(initialServices);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedCity, setSelectedCity] = useState('All Locations');
  const [statusFilter, setStatusFilter] = useState('Active'); // 'Active' | 'Pending' | 'Disabled'

  // Computed Filtering
  const filteredServices = services.filter((service) => {
    // Basic match by category
    const matchCat = selectedCategory === 'All Categories' || service.category === selectedCategory;
    
    // Status match
    // Map initial statuses to filter buttons if needed (Verified -> Active)
    let sStatus = service.status;
    if (sStatus === 'Verified') sStatus = 'Active';
    if (sStatus === 'High Risk') sStatus = 'Disabled'; // Example mapping

    const matchStatus = statusFilter === 'All' || sStatus === statusFilter;
    
    return matchCat && matchStatus;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* KPI Stats widgets */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        
        {/* Active Services */}
        <div className="panel" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--line)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Active Services</span>
          <strong style={{ fontSize: '28px', color: 'var(--text)', fontWeight: '800' }}>{services.filter(s => s.status === 'Verified' || s.status === 'Active').length}</strong>
          <span style={{ fontSize: '12px', color: '#059669', fontWeight: '700', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            📈 +12% vs last month
          </span>
        </div>

        {/* Total Revenue */}
        <div className="panel" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--line)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Revenue</span>
          <strong style={{ fontSize: '28px', color: 'var(--text)', fontWeight: '800' }}>$42.8k</strong>
          <span style={{ fontSize: '12px', color: '#059669', fontWeight: '700', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            📈 +4.5% month-to-date
          </span>
        </div>

        {/* Avg. Rating */}
        <div className="panel" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--line)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Avg. Rating</span>
          <strong style={{ fontSize: '28px', color: 'var(--text)', fontWeight: '800' }}>4.82</strong>
          <div style={{ display: 'flex', gap: '2px', color: '#4f46e5', marginTop: '6px' }}>
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={14} fill="currentColor" stroke="none" />
            ))}
          </div>
        </div>

        {/* Pending Review */}
        <div className="panel" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--line)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pending Review</span>
          <strong style={{ fontSize: '28px', color: 'var(--text)', fontWeight: '800' }}>{services.filter(s => s.status === 'Pending').length}</strong>
          <span style={{ fontSize: '12px', color: '#d97706', fontWeight: '700', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            ⚠️ Action Required
          </span>
        </div>
      </div>

      {/* Main Filter Section */}
      <div className="panel" style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--line)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        
        {/* Top search & basic filters */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          
          <div style={{ flex: '1 1 300px', position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
            <input 
              type="text"
              placeholder="Search services by ID, Name or Keyword..."
              style={{ width: '100%', height: '42px', paddingLeft: '40px', paddingRight: '16px', borderRadius: '8px', border: '1px solid var(--line)', fontSize: '13px', background: '#f8fafc', outline: 'none' }}
            />
          </div>

          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ height: '42px', padding: '0 16px', borderRadius: '8px', border: '1px solid var(--line)', fontSize: '13px', background: '#f8fafc', fontWeight: '600', color: 'var(--text)', outline: 'none', minWidth: '180px' }}
          >
            <option>All Categories</option>
            <option>Engineering & Facilities</option>
            <option>IT & Cybersecurity</option>
            <option>Cleaning Services</option>
            <option>Consulting</option>
          </select>

          <select 
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            style={{ height: '42px', padding: '0 16px', borderRadius: '8px', border: '1px solid var(--line)', fontSize: '13px', background: '#f8fafc', fontWeight: '600', color: 'var(--text)', outline: 'none', minWidth: '160px' }}
          >
            <option>All Locations</option>
            <option>New York</option>
            <option>London</option>
            <option>Singapore</option>
          </select>

        </div>

        {/* Secondary filters line */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', paddingTop: '16px', borderTop: '1px dashed var(--line)' }}>
          
          {/* Status selector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Status</label>
            <div style={{ display: 'flex', border: '1px solid var(--line)', borderRadius: '6px', overflow: 'hidden', height: '38px' }}>
              {['Active', 'Pending', 'Disabled'].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  style={{
                    padding: '0 20px',
                    fontSize: '13px',
                    fontWeight: '700',
                    border: 'none',
                    background: statusFilter === status ? '#4f46e5' : '#ffffff',
                    color: statusFilter === status ? '#ffffff' : 'var(--muted)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    borderRight: status !== 'Disabled' ? '1px solid var(--line)' : 'none'
                  }}
                  type="button"
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              style={{
                height: '38px',
                padding: '0 16px',
                background: '#ffffff',
                color: 'var(--text)',
                border: '1px solid var(--line)',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              type="button"
            >
              <Download size={16} />
              <span>Export CSV</span>
            </button>
            
            <button
              onClick={onAddService}
              style={{
                height: '38px',
                padding: '0 16px',
                background: '#25108f',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
              type="button"
            >
              <Plus size={16} />
              <span>Add Service</span>
            </button>
          </div>

        </div>
      </div>

      {/* Services Table Card */}
      <div className="panel user-detail-table-panel">
        <div className="table-wrap">
          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}>
            <table className="user-management-inner-table user-detail-wide-table" style={{ width: '100%', minWidth: '900px', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Service ID</th>
                  <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Service Name</th>
                  <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Base Price</th>
                  <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Bookings</th>
                  <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Revenue</th>
                  <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Rating</th>
                  <th style={{ padding: '12px 8px', fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Status</th>
                  <th style={{ padding: '12px 8px', width: '90px' }} />
                </tr>
              </thead>
              <tbody>
                {filteredServices.length === 0 ? (
                  <tr>
                    <td colSpan={8} style={{ padding: '30px', textAlign: 'center', color: 'var(--muted)', fontSize: '13px' }}>
                      No services match your active filters.
                    </td>
                  </tr>
                ) : filteredServices.map((service) => (
                  <tr key={service.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    {/* ID */}
                    <td style={{ padding: '16px 8px', fontSize: '13px', fontWeight: '700', color: 'var(--text)' }}>
                      {service.id}
                    </td>
                  
                    {/* Image + Name + Category */}
                    <td style={{ padding: '16px 8px' }}>
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <img
                          src={service.image}
                          alt={service.name}
                          style={{ width: '40px', height: '40px', borderRadius: '8px', objectFit: 'cover', border: '1px solid var(--line)' }}
                        />
                      <div>
                        <strong style={{ display: 'block', fontSize: '14px', color: 'var(--text)' }}>{service.name}</strong>
                        <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>
                          {service.category}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Base Price */}
                  <td style={{ padding: '16px 8px', fontSize: '13px', color: 'var(--text)', fontWeight: '600' }}>
                    {service.basePrice}
                  </td>

                  {/* Bookings */}
                  <td style={{ padding: '16px 8px', fontSize: '13px', color: 'var(--text)' }}>
                    {service.bookings}
                  </td>

                  {/* Revenue */}
                  <td style={{ padding: '16px 8px', fontSize: '13px', fontWeight: '700', color: 'var(--text)' }}>
                    {service.revenue}
                  </td>

                  {/* Rating */}
                  <td style={{ padding: '16px 8px', fontSize: '13px', fontWeight: '700', color: '#4f46e5' }}>
                    {service.rating} ★
                  </td>

                  {/* Status */}
                  <td style={{ padding: '16px 8px' }}>
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: '800',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        background:
                          service.status === 'Verified'
                            ? '#ecfdf5'
                            : service.status === 'Pending'
                            ? '#fffbeb'
                            : '#fef2f2',
                        color:
                          service.status === 'Verified'
                            ? '#059669'
                            : service.status === 'Pending'
                            ? '#d97706'
                            : '#dc2626',
                        border:
                          service.status === 'High Risk'
                            ? '1px solid #fee2e2'
                            : 'none'
                      }}
                    >
                      {service.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td style={{ padding: '16px 8px' }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        onClick={onViewProfile}
                        style={{
                          width: '28px',
                          height: '28px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'transparent',
                          border: 'none',
                          color: 'var(--muted)',
                          cursor: 'pointer',
                          borderRadius: '4px'
                        }}
                        type="button"
                        title="View details"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        style={{
                          width: '28px',
                          height: '28px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'transparent',
                          border: 'none',
                          color: 'var(--muted)',
                          cursor: 'pointer',
                          borderRadius: '4px'
                        }}
                        type="button"
                        title="Edit service"
                      >
                        <Edit size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table></div>
        </div>

        {/* Bottom table actions & pagination */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', flexWrap: 'wrap', gap: '16px' }}>
          <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
            Showing <strong>1-4</strong> of <strong>128</strong> services
          </span>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ display: 'flex', border: '1px solid var(--line)', borderRadius: '6px', overflow: 'hidden' }}>
              <button style={{ border: 'none', background: '#fff', color: 'var(--muted)', padding: '8px 12px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }} type="button">
                Previous
              </button>
              <button style={{ border: 'none', background: '#e0e7ff', color: '#4f46e5', padding: '8px 12px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }} type="button">
                1
              </button>
              <button style={{ border: 'none', background: '#fff', color: 'var(--muted)', padding: '8px 12px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }} type="button">
                2
              </button>
              <button style={{ border: 'none', background: '#fff', color: 'var(--muted)', padding: '8px 12px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }} type="button">
                3
              </button>
              <button style={{ border: 'none', background: '#fff', color: 'var(--muted)', padding: '8px 12px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }} type="button">
                Next
              </button>
            </div>

            <button
              style={{
                height: '34px',
                padding: '0 16px',
                background: '#0f172a',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
              type="button"
            >
              <Download size={14} />
              <span>Export Dataset</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
