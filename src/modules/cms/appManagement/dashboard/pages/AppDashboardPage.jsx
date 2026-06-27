import React, { useState } from 'react';
import AdminShell from '../../../../../components/layouts/AdminShell';
import { AddEditModal, SuccessModal } from '../../../../../components/common/popups/Modals';
import { triggerDownload, downloadDummyPDF } from '../../../../../utils/downloadHelper';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  PieChart, Pie, Legend
} from 'recharts';
import { RefreshCw, Download, Layers, ShieldCheck, Activity, Smartphone, Play, Plus } from 'lucide-react';

const VERSION_DATA = [
  { name: 'v2.1.0 (Old)', value: 1400, fill: '#ef4444' },
  { name: 'v3.0.0 (Stable)', value: 8900, fill: '#4f46e5' },
  { name: 'v3.2.0 (Latest)', value: 4500, fill: '#059669' },
  { name: 'v3.3.0-beta', value: 340, fill: '#d97706' }
];

const CONFIG_DATA = {
  Weekly: [
    { name: 'Banners', value: 8 },
    { name: 'Features', value: 12 },
    { name: 'Menus', value: 24 },
    { name: 'Roles', value: 6 }
  ],
  Monthly: [
    { name: 'Banners', value: 18 },
    { name: 'Features', value: 16 },
    { name: 'Menus', value: 28 },
    { name: 'Roles', value: 6 }
  ],
  Yearly: [
    { name: 'Banners', value: 45 },
    { name: 'Features', value: 32 },
    { name: 'Menus', value: 38 },
    { name: 'Roles', value: 8 }
  ]
};

export default function AppDashboardPage() {
  const [timeframe, setTimeframe] = useState('Monthly');
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const activeData = CONFIG_DATA[timeframe] || CONFIG_DATA.Monthly;

  const handleDownloadReport = () => {
    downloadDummyPDF('App Configuration Audit Report', `Active Banners: 18\nActive Feature Flags: 16\nActive User Menus: 28\nActive Partner Roles: 6\nApp Version Compliance: 92.4%`);
    setSuccessMessage('App configuration audit report exported successfully! "app_configuration_audit_report_export.txt" downloaded.');
    setIsSuccessOpen(true);
  };

  const handleClearCache = () => {
    setSuccessMessage('Client application configurations cache purged successfully! All mobile clients will ingest fresh JSON arrays on next session load.');
    setIsSuccessOpen(true);
  };

  const handleAddGlobalConfig = (val) => {
    setSuccessMessage(`Global config key "${val.keyName}" defined successfully under App Management!`);
    setIsSuccessOpen(true);
  };

  return (
    <AdminShell activeTab="CMS" headerTitle="App Management Console">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
          CMS &gt; App Management &gt; <span style={{ color: '#4f46e5' }}>Dashboard</span>
        </div>

        {/* Page Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="custom-page-heading">App Config Dashboard</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Review active mobile app layouts, client-side feature toggles, and API configurations.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={handleClearCache} className="custom-btn-secondary">
              <RefreshCw size={16} strokeWidth={2.5} /> Purge App Cache
            </button>
            <button onClick={handleDownloadReport} className="custom-btn-secondary">
              <Download size={16} strokeWidth={2.5} /> Export CSV
            </button>
            <button onClick={() => setIsAddOpen(true)} className="custom-btn-primary">
              <Plus size={16} strokeWidth={2.5} /> Define Global Config
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="custom-kpi-card-container">
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Layers size={22} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Active Banners</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>18 Banners</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={22} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Feature Toggles</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>16 Active</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Activity size={22} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Layout Nodes</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>28 Menus</h2>
            </div>
          </div>
          <div className="custom-kpi-card">
            <div style={{ padding: '10px', borderRadius: '10px', background: '#f1f5f9', color: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Smartphone size={22} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Min App Version</span>
              <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text)', margin: '2px 0 0 0' }}>v3.0.0</h2>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '24px' }}>
          
          {/* Chart 1: Active Configuration Items */}
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Active Configuration Elements</h3>
              <select 
                value={timeframe} 
                onChange={(e) => setTimeframe(e.target.value)}
                className="custom-select"
              >
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div style={{ height: '280px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activeData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: '700' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: '700' }} />
                  <Tooltip cursor={{ fill: '#f8fafc' }} />
                  <Bar dataKey="value" fill="#4f46e5" radius={[4, 4, 0, 0]} barSize={36} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 2: Client App Version Dispersion */}
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '0 0 20px 0' }}>Mobile App Client Version Ingestion</h3>
            <div style={{ height: '280px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie 
                    data={VERSION_DATA} 
                    cx="50%" 
                    cy="50%" 
                    innerRadius={60}
                    outerRadius={80} 
                    paddingAngle={5} 
                    dataKey="value"
                  >
                    {VERSION_DATA.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

        {/* Live Monitoring Logs */}
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: '0 0 16px 0' }}>Configuration Deployment Logs</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { time: '10 mins ago', author: 'Alex Sterling', action: 'Modified target forced update version to v3.0.0 in User App Configurations.' },
              { time: '45 mins ago', author: 'Deepak Rao', action: 'Toggled "BETA_SOS_DIRECT_DIAL" to enabled for 10% test users.' },
              { time: '2 hours ago', author: 'Sarah Jenkins', action: 'Uploaded new promotional banner "Monsoon Offer" under marketing banners.' },
              { time: '1 day ago', author: 'System Trigger', action: 'Re-ordered User App Navigation menu items.' }
            ].map((log, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid #f1f5f9' }}>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text)' }}>{log.author}</span>
                  <p style={{ fontSize: '12px', color: 'var(--muted)', margin: '4px 0 0 0' }}>{log.action}</p>
                </div>
                <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{log.time}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <AddEditModal 
        isOpen={isAddOpen} 
        onClose={() => setIsAddOpen(false)} 
        title="Define Global Config Parameter" 
        fields={[
          { name: 'keyName', label: 'Config Key Name', type: 'text', placeholder: 'e.g. USER_PROMO_SLIDER_SPEED', required: true, maxLength: 40 },
          { name: 'keyValue', label: 'Config Value', type: 'text', placeholder: 'e.g. 5000', required: true, maxLength: 30 },
          { name: 'desc', label: 'Key Description', type: 'textarea', placeholder: 'Describe setting effect...', required: true, maxLength: 100 }
        ]} 
        onSave={handleAddGlobalConfig} 
      />

      <SuccessModal 
        isOpen={isSuccessOpen} 
        onClose={() => setIsSuccessOpen(false)} 
        message={successMessage} 
      />
    </AdminShell>
  );
}
