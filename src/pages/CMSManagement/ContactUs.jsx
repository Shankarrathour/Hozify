import React, { useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import { 
  Mail, Phone, MapPin, Plus, GripVertical, Trash2, 
  Maximize2, Share2, Globe, Camera 
} from 'lucide-react';

export default function ContactUs() {
  const [email, setEmail] = useState('support@enterprise-cms.com');
  const [phone, setPhone] = useState('+1 (555) 012-3456');
  const [address, setAddress] = useState('123 Enterprise Plaza, Innovation District, Suite 400, San Francisco, CA 94105');
  
  const [lat, setLat] = useState('37.7749° N');
  const [lng, setLng] = useState('122.4194° W');

  const [linkedin, setLinkedin] = useState('linkedin.com/company/enterprise-cms');
  const [twitter, setTwitter] = useState('@enterprise_cms');
  const [instagram, setInstagram] = useState('@enterprise.cms.official');

  const [formFields, setFormFields] = useState([
    { id: 1, name: 'Full Name', type: 'Text Input', required: true },
    { id: 2, name: 'Email Address', type: 'Email Input', required: true },
    { id: 3, name: 'Subject', type: 'Dropdown', required: false },
    { id: 4, name: 'Message', type: 'Text Area', required: true }
  ]);

  const removeField = (idToRemove) => {
    setFormFields(formFields.filter(f => f.id !== idToRemove));
  };

  const toggleRequired = (id) => {
    setFormFields(formFields.map(f => f.id === id ? { ...f, required: !f.required } : f));
  };

  return (
    <AdminShell 
      activeTab="CMS Management" 
      searchPlaceholder="Search resources..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '40px', maxWidth: '1200px' }}>
        
        {/* Page Heading */}
        <div style={{ marginBottom: '8px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', background: '#e0e7ff', color: '#4f46e5', padding: '4px 8px', borderRadius: '4px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '8px' }}>
            ENTERPRISE CORE
          </span>
          <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#1e1b4b', margin: '0 0 8px 0', letterSpacing: '-0.5px' }}>
            Contact Us
          </h1>
          <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>
            Manage how your customers connect with your brand across all communication channels.
          </p>
        </div>

        {/* Top Actions Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', background: '#fff', padding: '16px 24px', borderRadius: '12px', border: '1px solid var(--line)' }}>
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text)', margin: '0 0 4px 0' }}>Configure Reachability</h2>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Update contact details and map integration.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button style={{ padding: '10px 20px', background: '#fff', border: '1px solid var(--line)', color: 'var(--text)', borderRadius: '6px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>
              Discard Changes
            </button>
            <button style={{ padding: '10px 20px', background: '#312e81', border: 'none', color: '#fff', borderRadius: '6px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>
              Save Configurations
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '7fr 3fr', gap: '24px' }}>
          
          {/* LEFT COLUMN: Main Configuration Area */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: '7' }}>
            
            {/* Core Business Details */}
            <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Core Business Details</h3>
                <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Live Preview Enabled
                </span>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '8px' }}>Official Email Address</label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
                    <input 
                      type="text" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '12px 16px 12px 40px', fontSize: '13px', color: 'var(--text)', outline: 'none' }}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '8px' }}>Primary Phone Number</label>
                  <div style={{ position: 'relative' }}>
                    <Phone size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
                    <input 
                      type="text" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '12px 16px 12px 40px', fontSize: '13px', color: 'var(--text)', outline: 'none' }}
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: 'var(--text)', textTransform: 'uppercase', marginBottom: '8px' }}>Physical Office Address</label>
                <div style={{ position: 'relative' }}>
                  <MapPin size={16} style={{ position: 'absolute', left: '14px', top: '14px', color: 'var(--muted)' }} />
                  <textarea 
                    rows={3}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '12px 16px 12px 40px', fontSize: '13px', color: 'var(--text)', outline: 'none', resize: 'vertical', lineHeight: '1.5' }}
                  />
                </div>
              </div>
            </div>

            {/* Inquiry Form Builder */}
            <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Inquiry Form Builder</h3>
                <button style={{ background: '#fff', border: '1px solid var(--line)', color: 'var(--text)', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                  <Plus size={14} /> Add New Field
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {formFields.map((field) => (
                  <div key={field.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', background: '#f8fafc', border: '1px solid var(--line)', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <button style={{ background: 'transparent', border: 'none', color: 'var(--muted)', cursor: 'grab', display: 'flex', padding: '4px' }}>
                        <GripVertical size={16} />
                      </button>
                      <strong style={{ fontSize: '13px', color: 'var(--text)', minWidth: '120px' }}>{field.name}</strong>
                      <span style={{ fontSize: '10px', fontWeight: '700', background: '#e2e8f0', color: 'var(--muted)', padding: '4px 8px', borderRadius: '12px' }}>
                        {field.type}
                      </span>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px', color: 'var(--text)', fontWeight: '600' }}>
                        <div style={{ 
                          width: '16px', height: '16px', borderRadius: '4px', 
                          border: field.required ? 'none' : '2px solid var(--line)', 
                          background: field.required ? '#0f172a' : 'transparent',
                          display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                          {field.required && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                        </div>
                        <input 
                          type="checkbox" 
                          checked={field.required} 
                          onChange={() => toggleRequired(field.id)}
                          style={{ display: 'none' }}
                        />
                        Required
                      </label>
                      
                      <button onClick={() => removeField(field.id)} style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '4px', display: 'flex' }}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Integrations & Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: '3' }}>
            
            {/* Map Integration */}
            <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Map Integration</h3>
                <button style={{ background: 'transparent', border: 'none', color: 'var(--text)', cursor: 'pointer', padding: '4px' }}>
                  <Maximize2 size={16} />
                </button>
              </div>
              
              <div style={{ background: '#f1f5f9', height: '160px', borderRadius: '8px', marginBottom: '20px', border: '1px solid var(--line)', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'flex-end' }}>
                {/* Mock Map Background */}
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")', backgroundSize: '60px', opacity: 0.1, backgroundColor: '#94a3b8' }} />
                
                {/* Map Details Overlay */}
                <div style={{ position: 'relative', background: 'rgba(255,255,255,0.95)', padding: '12px 16px', width: 'calc(100% - 24px)', margin: '0 12px 12px 12px', borderRadius: '6px', border: '1px solid rgba(0,0,0,0.1)' }}>
                  <strong style={{ display: 'block', fontSize: '12px', color: 'var(--text)' }}>Preview: Live Location</strong>
                  <span style={{ fontSize: '10px', color: 'var(--muted)' }}>Provider: Google Maps Engine</span>
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '8px' }}>Coordinates (Lat, Lng)</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <input 
                    type="text" 
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                    style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '10px 12px', fontSize: '12px', color: 'var(--text)', outline: 'none' }}
                  />
                  <input 
                    type="text" 
                    value={lng}
                    onChange={(e) => setLng(e.target.value)}
                    style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '10px 12px', fontSize: '12px', color: 'var(--text)', outline: 'none' }}
                  />
                </div>
              </div>
              
              <button style={{ width: '100%', padding: '12px', background: 'transparent', border: '1px dashed var(--line)', borderRadius: '6px', fontSize: '12px', fontWeight: '800', color: 'var(--muted)', cursor: 'pointer' }}>
                Update Pin Location
              </button>
            </div>

            {/* Social Channels */}
            <div className="panel" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', margin: '0 0 24px 0' }}>Social Channels</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '6px', background: '#0f172a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '20px' }}>
                    <Share2 size={16} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--text)', marginBottom: '6px' }}>LinkedIn URL</label>
                    <input 
                      type="text" 
                      value={linkedin}
                      onChange={(e) => setLinkedin(e.target.value)}
                      style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '10px 12px', fontSize: '12px', color: 'var(--text)', outline: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '6px', background: '#fff', border: '1px solid var(--line)', color: 'var(--text)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '20px' }}>
                    <Globe size={16} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--text)', marginBottom: '6px' }}>X (Twitter) Handle</label>
                    <input 
                      type="text" 
                      value={twitter}
                      onChange={(e) => setTwitter(e.target.value)}
                      style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '10px 12px', fontSize: '12px', color: 'var(--text)', outline: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '6px', background: '#fff', border: '1px solid var(--line)', color: 'var(--text)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '20px' }}>
                    <Camera size={16} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--text)', marginBottom: '6px' }}>Instagram Profile</label>
                    <input 
                      type="text" 
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                      style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '6px', padding: '10px 12px', fontSize: '12px', color: 'var(--text)', outline: 'none' }}
                    />
                  </div>
                </div>
              </div>

              <button style={{ width: '100%', padding: '12px', background: '#eff6ff', border: 'none', borderRadius: '6px', fontSize: '12px', fontWeight: '800', color: '#1e293b', cursor: 'pointer' }}>
                Verify Connections
              </button>
            </div>

          </div>
          
        </div>
      </div>
    </AdminShell>
  );
}
