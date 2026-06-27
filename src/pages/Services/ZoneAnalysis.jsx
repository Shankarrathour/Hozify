import React, { useState } from 'react';
import {
  MousePointer,
  Share2,
  Target,
  Trash2,
  Plus,
  Minus,
  Download,
  Info,
  ChevronRight
} from 'lucide-react';

export default function ZoneAnalysis() {
  const [activeSubTab, setActiveSubTab] = useState('GIS Mapper'); // 'Directory' | 'Analytics' | 'GIS Mapper'
  
  // Layer states
  const [layers, setLayers] = useState({
    zones: true,
    traffic: false,
    branches: true
  });

  const handleLayerChange = (layerKey) => {
    setLayers(prev => ({
      ...prev,
      [layerKey]: !prev[layerKey]
    }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Top Header Row with directory links */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Downtown Zone A</h2>
            <span style={{ fontSize: '10px', fontWeight: '800', color: '#25108f', background: '#e0e7ff', padding: '3px 8px', borderRadius: '4px' }}>
              LIVE DATA
            </span>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '2px', margin: 0 }}>Central Metropolitan Branch</p>
        </div>

        {/* Mapper tab selectors */}
        <div style={{ display: 'flex', gap: '4px', background: '#f1f5f9', padding: '4px', borderRadius: '8px', fontSize: '12px', fontWeight: '700' }}>
          {['Directory', 'Analytics', 'GIS Mapper'].map((t) => (
            <button
              key={t}
              onClick={() => setActiveSubTab(t)}
              style={{
                border: 'none',
                background: activeSubTab === t ? '#ffffff' : 'transparent',
                color: activeSubTab === t ? '#0f172a' : 'var(--muted)',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: activeSubTab === t ? '0 1px 3px rgba(0,0,0,0.05)' : 'none'
              }}
              type="button"
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Main content grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '2fr 1fr', gap: '24px', alignItems: 'stretch' }}>
        
        {/* Map column (Left) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 2 }}>
          
          {/* Map display */}
          <div className="panel" style={{ padding: '0', position: 'relative', overflow: 'hidden', height: '520px', background: '#e5e7eb', borderRadius: '12px', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            
            {/* SVG Interactive Manhattan Map drawing */}
            <svg width="100%" height="100%" viewBox="0 0 600 520" style={{ background: '#d4d4d8', position: 'absolute', top: 0, left: 0 }}>
              {/* Landmass background */}
              <rect width="100%" height="100%" fill="#e4e4e7" />
              
              {/* Waterway (Hudson / East River) */}
              <path d="M 0 0 C 120 120, 150 380, 100 520 L 0 520 Z" fill="#93c5fd" opacity="0.8" />
              <path d="M 600 120 C 500 240, 520 400, 480 520 L 600 520 Z" fill="#93c5fd" opacity="0.8" />
              
              {/* Major Roads Grid */}
              <path d="M 120 0 L 260 520" stroke="#ffffff" strokeWidth="6" fill="none" opacity="0.9" />
              <path d="M 220 0 L 320 520" stroke="#ffffff" strokeWidth="4" fill="none" opacity="0.9" />
              <path d="M 380 0 L 460 520" stroke="#ffffff" strokeWidth="5" fill="none" opacity="0.9" />
              <path d="M 100 140 Q 300 150, 550 180" stroke="#ffffff" strokeWidth="5" fill="none" opacity="0.9" />
              <path d="M 100 320 Q 320 330, 500 350" stroke="#ffffff" strokeWidth="4" fill="none" opacity="0.9" />
              
              {/* Minor Roads Grid */}
              <line x1="150" y1="50" x2="500" y2="70" stroke="#f4f4f5" strokeWidth="2" opacity="0.8" />
              <line x1="180" y1="220" x2="500" y2="240" stroke="#f4f4f5" strokeWidth="2" opacity="0.8" />
              <line x1="200" y1="380" x2="480" y2="400" stroke="#f4f4f5" strokeWidth="2" opacity="0.8" />
              <line x1="220" y1="460" x2="480" y2="480" stroke="#f4f4f5" strokeWidth="2" opacity="0.8" />
              
              <line x1="300" y1="100" x2="200" y2="500" stroke="#f4f4f5" strokeWidth="1.5" opacity="0.7" />
              <line x1="420" y1="100" x2="350" y2="500" stroke="#f4f4f5" strokeWidth="1.5" opacity="0.7" />

              {/* Shaded Service Zone Polygon (Midtown Manhattan / Washington Square Park) */}
              {layers.zones && (
                <g>
                  <polygon
                    points="280,140 400,160 380,330 250,280"
                    fill="rgba(79, 70, 229, 0.2)"
                    stroke="#4f46e5"
                    strokeWidth="3"
                    strokeDasharray="4,4"
                  />
                  {/* Polygon corner plots */}
                  <circle cx="280" cy="140" r="5" fill="#4f46e5" />
                  <circle cx="400" cy="160" r="5" fill="#4f46e5" />
                  <circle cx="380" cy="330" r="5" fill="#4f46e5" />
                  <circle cx="250" cy="280" r="5" fill="#4f46e5" />
                  
                  {/* Label tag */}
                  <g transform="translate(290, 200)">
                    <rect width="130" height="36" rx="6" fill="#1e1b4b" />
                    <text x="8" y="15" fill="#ffffff" fontSize="9" fontWeight="800" fontFamily="sans-serif">Washington Square Park</text>
                    <text x="8" y="27" fill="#818cf8" fontSize="8" fontFamily="sans-serif">Active Selection • Zone A</text>
                  </g>
                </g>
              )}

              {/* Branch Locators */}
              {layers.branches && (
                <g>
                  {/* Central Hub pin */}
                  <circle cx="340" cy="240" r="8" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="340" cy="240" r="14" fill="none" stroke="#10b981" strokeWidth="1.5" opacity="0.5" />
                  
                  {/* North Station pin */}
                  <circle cx="370" cy="120" r="8" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
                  
                  {/* West Annex pin */}
                  <circle cx="220" cy="380" r="8" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                </g>
              )}

              {/* Traffic Density overlay (heat circles) */}
              {layers.traffic && (
                <g opacity="0.6">
                  <circle cx="300" cy="150" r="45" fill="red" opacity="0.25" filter="blur(8px)" />
                  <circle cx="360" cy="260" r="60" fill="orange" opacity="0.2" filter="blur(8px)" />
                  <circle cx="280" cy="350" r="40" fill="yellow" opacity="0.3" filter="blur(8px)" />
                </g>
              )}
            </svg>

            {/* Left Floating Map Toolbar */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                background: '#0f172a',
                padding: '8px',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              {[
                { icon: MousePointer, title: 'Select' },
                { icon: Share2, title: 'Share' },
                { icon: Target, title: 'Focus' },
                { icon: Trash2, title: 'Delete' },
                { icon: Plus, title: 'Zoom In' },
                { icon: Minus, title: 'Zoom Out' }
              ].map((tool, index) => {
                const ToolIcon = tool.icon;
                return (
                  <button
                    key={index}
                    style={{
                      width: '28px',
                      height: '28px',
                      border: 'none',
                      background: 'transparent',
                      color: '#ffffff',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'background 0.2s'
                    }}
                    type="button"
                    title={tool.title}
                  >
                    <ToolIcon size={16} />
                  </button>
                );
              })}
            </div>

            {/* Map layers toggles bottom float */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(4px)',
                padding: '10px 16px',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                display: 'flex',
                gap: '20px',
                fontSize: '12px',
                fontWeight: '700',
                border: '1px solid var(--line)',
                zIndex: 1
              }}
            >
              <span style={{ color: 'var(--muted)' }}>LAYERS:</span>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', color: 'var(--text)' }}>
                <input
                  type="checkbox"
                  checked={layers.zones}
                  onChange={() => handleLayerChange('zones')}
                  style={{ cursor: 'pointer' }}
                />
                Service Zones
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', color: 'var(--text)' }}>
                <input
                  type="checkbox"
                  checked={layers.traffic}
                  onChange={() => handleLayerChange('traffic')}
                  style={{ cursor: 'pointer' }}
                />
                Traffic Density
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', color: 'var(--text)' }}>
                <input
                  type="checkbox"
                  checked={layers.branches}
                  onChange={() => handleLayerChange('branches')}
                  style={{ cursor: 'pointer' }}
                />
                Branch Locators
              </label>
            </div>

          </div>
        </div>

        {/* Sidebar Info Columns (Right) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
          
          {/* Main Info Card */}
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>Zone Analysis</h3>
              <span style={{ fontSize: '9px', fontWeight: '800', color: '#4f46e5', background: '#eff6ff', padding: '3px 8px', borderRadius: '4px' }}>
                LIVE DATA
              </span>
            </div>
            <p style={{ fontSize: '11px', color: 'var(--muted)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Active selection: Downtown Core (Polygon A)
            </p>

            {/* Est. Population Card */}
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Est. Population</span>
                  <strong style={{ display: 'block', fontSize: '24px', fontWeight: '800', color: 'var(--text)', marginTop: '4px' }}>1.28M</strong>
                </div>
                <span style={{ fontSize: '11px', fontWeight: '800', color: '#059669' }}>+2.4%</span>
              </div>
              
              {/* Wave SVG Sparkline */}
              <div style={{ height: '32px', marginTop: '12px' }}>
                <svg width="100%" height="32" viewBox="0 0 160 32">
                  <path
                    d="M 0 24 C 20 24, 40 8, 60 16 C 80 24, 100 12, 120 20 C 140 28, 150 4, 160 8"
                    fill="none"
                    stroke="#4f46e5"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>

            {/* Branch Count */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px' }}>
              <div>
                <span style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Branch Count</span>
                <strong style={{ display: 'block', fontSize: '20px', fontWeight: '800', color: 'var(--text)', marginTop: '4px' }}>24</strong>
                <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)', marginTop: '2px' }}>Across 12.4 sq miles</span>
              </div>
              <Info size={18} style={{ color: 'var(--muted)' }} />
            </div>

            {/* Coverage Density */}
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Coverage Density</span>
                <span style={{ fontSize: '10px', fontWeight: '800', color: '#c2410c' }}>Optimal</span>
              </div>
              <strong style={{ display: 'block', fontSize: '24px', fontWeight: '800', color: 'var(--text)' }}>88%</strong>
              
              <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden', marginTop: '8px' }}>
                <div style={{ width: '88%', height: '100%', background: '#4f46e5' }} />
              </div>
            </div>
          </div>

          {/* Active branches panel */}
          <div className="panel" style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h3 style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Active Branches in Zone
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'Central Hub', id: '4022-A', value: '92%', bg: '#ecfdf5', color: '#059669' },
                { name: 'North Station', id: '3110-B', value: '45%', bg: '#fffbeb', color: '#d97706' },
                { name: 'West Annex', id: '1055-F', value: '12%', bg: '#fee2e2', color: '#dc2626' }
              ].map((b, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: idx < 2 ? '1px solid #f1f5f9' : 'none' }}>
                  <div>
                    <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>{b.name}</strong>
                    <span style={{ display: 'block', fontSize: '10px', color: 'var(--muted)', marginTop: '2px' }}>ID: {b.id}</span>
                  </div>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: '800',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      background: b.bg,
                      color: b.color
                    }}
                  >
                    {b.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Actions button */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              style={{
                width: '100%',
                height: '42px',
                background: '#e0e7ff',
                color: '#25108f',
                border: 'none',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
              type="button"
            >
              <Download size={16} />
              <span>Export GIS Data</span>
            </button>

            <a
              href="#demographics"
              onClick={(e) => e.preventDefault()}
              style={{
                fontSize: '12px',
                color: '#25108f',
                fontWeight: '800',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px'
              }}
            >
              <span>View Detailed Demographics</span>
              <ChevronRight size={14} />
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
