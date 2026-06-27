import React, { useState } from 'react';
import {
  Download,
  Calendar,
  ChevronRight,
  TrendingUp,
  Plus,
  Clock,
  FileText,
  Users,
  Building,
  User,
  MoreVertical,
  ArrowRight,
  DollarSign,
  ChevronDown,
  Info
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import { downloadDummyPDF } from '../../utils/downloadHelper';

export default function OperationalReports() {
  const { navigate } = useApp();
  
  // Custom header navigation tabs matching the screenshot
  const headerTabs = [
    { label: 'Live Tracking', route: ROUTES.liveDashboard },
    { label: 'Communications', route: ROUTES.communications },
    { label: 'Dispute Center', route: ROUTES.materialDisputes }
  ];

  const handleGenerateReport = () => {
    downloadDummyPDF('Operational Reports', 'Platform commission configuration rules, commissions metrics, and auto-settled transfers ledger.');
  };

  const handleNewSchedule = () => {
    alert('Opening schedule configuration...');
  };

  const handleRequestCustom = () => {
    alert('Requesting a custom dataset from the analytics team...');
  };

  return (
    <AdminShell
      activeTab="Reports & Analytics"
      brandText="OpsManager Pro"
      brandSubText="OPERATIONS HUB"
      headerTitle="Booking Management"
      searchPlaceholder="Search reports..."
      headerTabs={
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          {headerTabs.map((tab) => (
            <span
              key={tab.label}
              onClick={() => navigate(tab.route)}
              style={{
                fontSize: '13px',
                fontWeight: '700',
                color: 'var(--muted)',
                cursor: 'pointer',
                transition: 'color 0.15s ease'
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {tab.label}
            </span>
          ))}
        </div>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 0' }}>
        
        {/* Title area with Top Right Filter Panel */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h1 style={{ fontSize: '26px', fontWeight: '850', color: 'var(--text)', margin: 0, letterSpacing: '-0.5px' }}>
              Operational Reporting
            </h1>
            <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '4px', margin: 0 }}>
              Configure and generate detailed business intelligence exports.
            </p>
          </div>

          {/* Filter / Export Selector Box */}
          <div style={{
            display: 'flex',
            alignItems: 'stretch',
            background: '#ffffff',
            border: '1px solid var(--line)',
            borderRadius: '10px',
            padding: '8px',
            boxShadow: '0 4px 12px rgba(37, 16, 143, 0.03)',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            {/* DATE RANGE CARD */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '8px 20px',
              borderRight: '1px solid var(--lavender)',
              minWidth: '130px'
            }}>
              <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Date Range
              </span>
              <strong style={{ fontSize: '13px', color: 'var(--text)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                Last 30 Days
              </strong>
            </div>

            {/* BRANCH CARD */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '8px 20px',
              borderRight: '1px solid var(--lavender)',
              minWidth: '150px'
            }}>
              <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Branch
              </span>
              <strong style={{ fontSize: '13px', color: 'var(--text)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                All Global Branches
              </strong>
            </div>

            {/* GENERATE BUTTON */}
            <button
              onClick={handleGenerateReport}
              style={{
                background: '#25108f',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                padding: '0 20px',
                fontSize: '13px',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                boxShadow: '0 4px 10px rgba(37, 16, 143, 0.12)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.opacity = '0.9';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Download size={14} />
              <span>Generate & Export</span>
            </button>
          </div>
        </div>

        {/* 3 Report Cards Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          
          {/* Card 1: Revenue Report */}
          <div className="panel" style={{
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '210px',
            position: 'relative',
            transition: 'all 0.2s ease',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 8px 20px rgba(37, 16, 143, 0.08)')}
          onMouseOut={(e) => (e.currentTarget.style.boxShadow = 'none')}
          >
            {/* Tag Badge */}
            <span style={{
              position: 'absolute',
              top: '20px',
              right: '24px',
              fontSize: '10px',
              fontWeight: '850',
              background: '#e0e7ff',
              color: '#312e81',
              padding: '3px 8px',
              borderRadius: '4px',
              letterSpacing: '0.2px'
            }}>
              Popular
            </span>

            {/* Icon */}
            <div style={{
              height: '42px',
              width: '42px',
              borderRadius: '8px',
              background: '#f4eff8',
              color: '#25108f',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <DollarSign size={20} />
            </div>

            {/* Title & Description */}
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '850', color: 'var(--text)', margin: '0 0 6px' }}>
                Revenue Report
              </h3>
              <p style={{ fontSize: '12px', color: 'var(--muted)', margin: 0, lineHeight: '1.45' }}>
                Detailed breakdown of gross margins, net profit, and tax liabilities across all service categories.
              </p>
            </div>

            {/* Footer */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
              {/* Avatars */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=30&h=30&q=80" alt="Avatar" style={{ width: '22px', height: '22px', borderRadius: '50%', border: '2px solid #fff', objectFit: 'cover' }} />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=30&h=30&q=80" alt="Avatar" style={{ width: '22px', height: '22px', borderRadius: '50%', border: '2px solid #fff', marginLeft: '-6px', objectFit: 'cover' }} />
              </div>
              
              <div style={{ color: 'var(--muted)' }}>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

          {/* Card 2: Cancellation Audit */}
          <div className="panel" style={{
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '210px',
            transition: 'all 0.2s ease',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 8px 20px rgba(37, 16, 143, 0.08)')}
          onMouseOut={(e) => (e.currentTarget.style.boxShadow = 'none')}
          >
            {/* Icon */}
            <div style={{
              height: '42px',
              width: '42px',
              borderRadius: '8px',
              background: '#fef2f2',
              color: '#d32929',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <Calendar size={20} />
            </div>

            {/* Title & Description */}
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '850', color: 'var(--text)', margin: '0 0 6px' }}>
                Cancellation Audit
              </h3>
              <p style={{ fontSize: '12px', color: 'var(--muted)', margin: 0, lineHeight: '1.45' }}>
                Analyze churn patterns and reason codes for high-frequency cancellation events by territory.
              </p>
            </div>

            {/* Footer */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
              <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '750' }}>
                Updated 2h ago
              </span>
              
              <div style={{ color: 'var(--muted)' }}>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

          {/* Card 3: Employee Performance */}
          <div className="panel" style={{
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '210px',
            transition: 'all 0.2s ease',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 8px 20px rgba(37, 16, 143, 0.08)')}
          onMouseOut={(e) => (e.currentTarget.style.boxShadow = 'none')}
          >
            {/* Icon */}
            <div style={{
              height: '42px',
              width: '42px',
              borderRadius: '8px',
              background: '#eff6ff',
              color: '#1e40af',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <Users size={20} />
            </div>

            {/* Title & Description */}
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '850', color: 'var(--text)', margin: '0 0 6px' }}>
                Employee Performance
              </h3>
              <p style={{ fontSize: '12px', color: 'var(--muted)', margin: 0, lineHeight: '1.45' }}>
                Efficiency ratings, task completion speeds, and customer satisfaction scores for frontline staff.
              </p>
            </div>

            {/* Footer */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
              <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '750' }}>
                Updated Daily
              </span>
              
              <div style={{ color: 'var(--muted)' }}>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Split Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '20px', alignItems: 'stretch' }}>
          
          {/* LEFT: Scheduled Deliveries Card */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div>
                <h2 style={{ fontSize: '16px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                  Scheduled Deliveries
                </h2>
                <p style={{ fontSize: '12px', color: 'var(--muted)', margin: '4px 0 0' }}>
                  Manage automated report generation cycles.
                </p>
              </div>
              <button
                onClick={handleNewSchedule}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#25108f',
                  fontSize: '12px',
                  fontWeight: '900',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                <Plus size={14} />
                <span>New Schedule</span>
              </button>
            </div>

            {/* Scheduled Deliveries Table */}
            <div className="table-wrap" style={{ marginTop: '10px' }}>
              <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: '#f4eff8', borderBottom: '1px solid var(--line)' }}>
                    <th style={{ padding: '12px 16px', fontSize: '10px', fontWeight: '850', color: 'var(--muted)', letterSpacing: '0.3px', borderRadius: '4px 0 0 4px' }}>
                      Report Name
                    </th>
                    <th style={{ padding: '12px 16px', fontSize: '10px', fontWeight: '850', color: 'var(--muted)', letterSpacing: '0.3px' }}>
                      Frequency
                    </th>
                    <th style={{ padding: '12px 16px', fontSize: '10px', fontWeight: '850', color: 'var(--muted)', letterSpacing: '0.3px' }}>
                      Recipients
                    </th>
                    <th style={{ padding: '12px 16px', fontSize: '10px', fontWeight: '850', color: 'var(--muted)', letterSpacing: '0.3px', borderRadius: '0 4px 4px 0', textAlign: 'right' }}>
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  
                  {/* Row 1 */}
                  <tr style={{ borderBottom: '1px solid var(--lavender)' }}>
                    <td style={{ padding: '16px' }}>
                      <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>
                        Monthly Sales Recap
                      </strong>
                      <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block', marginTop: '2px' }}>
                        PDF • 12.4MB
                      </span>
                    </td>
                    <td style={{ padding: '16px', fontSize: '13px', color: 'var(--text)', fontWeight: '650' }}>
                      1st of month
                    </td>
                    <td style={{ padding: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=30&h=30&q=80" alt="Recip" style={{ width: '20px', height: '20px', borderRadius: '50%', border: '1.5px solid #fff', objectFit: 'cover' }} />
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=30&h=30&q=80" alt="Recip" style={{ width: '20px', height: '20px', borderRadius: '50%', border: '1.5px solid #fff', marginLeft: '-5px', objectFit: 'cover' }} />
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=30&h=30&q=80" alt="Recip" style={{ width: '20px', height: '20px', borderRadius: '50%', border: '1.5px solid #fff', marginLeft: '-5px', objectFit: 'cover' }} />
                        <span style={{
                          fontSize: '9px',
                          fontWeight: '800',
                          background: '#f4eff8',
                          color: '#25108f',
                          padding: '2px 5px',
                          borderRadius: '4px',
                          marginLeft: '4px'
                        }}>
                          +3
                        </span>
                      </div>
                    </td>
                    <td style={{ padding: '16px', textAlign: 'right' }}>
                      <span style={{
                        fontSize: '9px',
                        fontWeight: '850',
                        background: '#eff6ff',
                        color: '#1e40af',
                        padding: '3px 8px',
                        borderRadius: '4px'
                      }}>
                        ACTIVE
                      </span>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr>
                    <td style={{ padding: '16px' }}>
                      <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>
                        Daily Operations Log
                      </strong>
                      <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block', marginTop: '2px' }}>
                        Excel • 2.1MB
                      </span>
                    </td>
                    <td style={{ padding: '16px', fontSize: '13px', color: 'var(--text)', fontWeight: '650' }}>
                      Daily at 06:00
                    </td>
                    <td style={{ padding: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=30&h=30&q=80" alt="Recip" style={{ width: '20px', height: '20px', borderRadius: '50%', border: '1.5px solid #fff', objectFit: 'cover' }} />
                      </div>
                    </td>
                    <td style={{ padding: '16px', textAlign: 'right' }}>
                      <span style={{
                        fontSize: '9px',
                        fontWeight: '850',
                        background: '#fef3c7',
                        color: '#d97706',
                        padding: '3px 8px',
                        borderRadius: '4px'
                      }}>
                        PAUSED
                      </span>
                    </td>
                  </tr>

                </tbody>
              </table></div>
            </div>
          </div>

          {/* RIGHT: Export Utilization & Custom dataset stacks */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Export Utilization Card */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <span style={{ fontSize: '9px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Export Utilization
                </span>
                
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '8px' }}>
                  <strong style={{ fontSize: '32px', fontWeight: '850', color: 'var(--text)', letterSpacing: '-1px' }}>
                    1,284
                  </strong>
                  <span style={{
                    fontSize: '10px',
                    fontWeight: '850',
                    background: '#e6f4ea',
                    color: '#137333',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2px'
                  }}>
                    <TrendingUp size={10} />
                    <span>12%</span>
                  </span>
                </div>
                <span style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '4px', display: 'block' }}>
                  Reports generated this period
                </span>
              </div>

              {/* Progress sliders */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', borderTop: '1px solid var(--lavender)', paddingTop: '16px' }}>
                {/* PDF documents */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '750', marginBottom: '6px' }}>
                    <span style={{ color: 'var(--text)' }}>PDF Documents</span>
                    <span style={{ color: 'var(--muted)' }}>642 (50%)</span>
                  </div>
                  <div style={{ height: '6px', background: '#f4eff8', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '50%', height: '100%', background: '#25108f' }} />
                  </div>
                </div>

                {/* Excel / CSV */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '750', marginBottom: '6px' }}>
                    <span style={{ color: 'var(--text)' }}>Excel / CSV</span>
                    <span style={{ color: 'var(--muted)' }}>411 (32%)</span>
                  </div>
                  <div style={{ height: '6px', background: '#f4eff8', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '32%', height: '100%', background: '#c8c0d7' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Dataset promo card */}
            <div style={{
              background: 'linear-gradient(135deg, #0b0a26 0%, #171b30 100%)',
              borderRadius: '12px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '160px',
              boxShadow: '0 4px 14px rgba(11, 10, 38, 0.15)'
            }}>
              <div>
                <strong style={{ fontSize: '16px', color: '#ffffff', display: 'block', fontWeight: '850' }}>
                  Need a custom dataset?
                </strong>
                <p style={{ fontSize: '12px', color: '#a5a4bf', marginTop: '6px', margin: 0, lineHeight: '1.45' }}>
                  Our analytics team can build bespoke queries for your specific operational needs.
                </p>
              </div>

              <button
                onClick={handleRequestCustom}
                style={{
                  width: '100%',
                  background: '#ffffff',
                  color: '#0b0a26',
                  border: 'none',
                  borderRadius: '6px',
                  height: '38px',
                  fontSize: '12px',
                  fontWeight: '900',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  marginTop: '16px'
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
                onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Request Custom Report
              </button>
            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}
