import React from 'react';
import {
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  CircleHelp,
  ClipboardList,
  FileBox,
  Gift,
  MapPin,
  Package,
  Settings,
  ShieldCheck,
  Store,
  UserCog,
  Users,
  Wallet,
  Search,
  Bell,
  ArrowLeft
} from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import KpiCard from '../../features/dashboard/KpiCard';
import QuickActions from '../../features/dashboard/QuickActions';
import PendingKyc from '../../features/dashboard/PendingKyc';
import PartnerGrowth from '../../features/dashboard/PartnerGrowth';
import RecentBookings from '../../features/dashboard/RecentBookings';

// Static dashboard data lives here as requested
const navItems = [
  ['Dashboard', ClipboardList],
  ['Users', Users],
  ['Partners', Gift],
  ['KYC', ShieldCheck],
  ['Business', BriefcaseBusiness],
  ['Branches', Building2],
  ['Services', FileBox],
  ['Employees', ClipboardList],
  ['Bookings', CalendarCheck],
  ['Live Tracking', MapPin],
  ['Materials', Package],
  ['Wallet', Wallet]
];

const kpis = [
  { title: 'Total Users', value: '128,402', trend: '+8.2%', icon: Users, positive: true },
  { title: 'Total Partners', value: '4,810', trend: '+12.4%', icon: Gift, positive: true },
  { title: 'Total Sellers', value: '1,244', trend: '-2.1%', icon: Store, positive: false },
  { title: 'Total Bookings', value: '42,911', trend: '+22.5%', icon: CalendarCheck, positive: true },
  { title: 'Revenue (MTD)', value: '$2,482,100', footer: 'progress' },
  { title: 'Wallet Balance', value: '$412,055', footer: 'Ready for settlement' },
  { title: 'Pending Approvals', value: '124', footer: 'Applications', action: 'Review All →' },
  { title: 'Open Tickets', value: '18', footer: 'High Priority', negative: true }
];

const bookings = [
  ['#HZ-9102', 'JD', 'John Doe', 'Deep Cleaning', 'Oct 24, 10:30 AM', '$125.00', 'Completed'],
  ['#HZ-9101', 'SM', 'Sarah Miller', 'AC Maintenance', 'Oct 24, 11:15 AM', '$85.00', 'In Progress'],
  ['#HZ-9099', 'RK', 'Robert King', 'Plumbing Repair', 'Oct 24, 01:45 PM', '$210.00', 'Scheduled']
];

export default function Dashboard() {
  const { session, logout } = useApp();
  const roleLabel = session.user?.roleLabel || 'Enterprise Manager';
  return (
    <main className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <strong>HOZIFY</strong>
          <span>ENTERPRISE ADMIN</span>
        </div>
        <nav className="sidebar-nav">
          {navItems.map(([label, Icon], index) => (
            <button className={index === 0 ? 'active' : ''} type="button" key={label}>
              <Icon size={18} /> {label}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <button type="button"><UserCog size={18} /> Roles</button>
          <button type="button"><Settings size={18} /> Settings</button>
          <button type="button" onClick={logout}><ArrowLeft size={18} /> Logout</button>
        </div>
      </aside>
      <section className="dashboard-main">
        <header className="dash-header">
          <div className="dash-search">
            <Search size={20} />
            <input placeholder="Global search..." />
          </div>
          <div className="dash-actions">
            <button type="button"><Bell size={21} /><span className="dot" /></button>
            <button type="button"><ClipboardList size={23} /><span className="badge">12</span></button>
            <button type="button"><CircleHelp size={21} /></button>
            <div className="profile">
              <div>
                <strong>Admin User</strong>
                <span>{roleLabel}</span>
              </div>
              <span className="avatar">AU</span>
            </div>
          </div>
        </header>
        <div className="dash-content">
          <section className="kpi-grid">
            {kpis.map((kpi) => <KpiCard key={kpi.title} {...kpi} />)}
          </section>
          <section className="dash-columns">
            <div className="dash-left">
              <div className="panel trends-panel">
                <div className="panel-head">
                  <div>
                    <h2>Revenue & Booking Trends</h2>
                    <p>Last 30 days performance metrics</p>
                  </div>
                  <div className="segmented"><button className="active">Monthly</button><button>Weekly</button></div>
                </div>
                <div className="bar-chart">
                  {[45, 30, 54, 40, 68, 73, 49, 35, 59, 34, 64, 82].map((height, index) => (
                    <span key={index} style={{ height: `${height}%` }} className={index % 6 === 5 ? 'deep' : index % 2 ? 'mid' : 'light'} />
                  ))}
                </div>
                <div className="weeks"><span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span></div>
              </div>
              <RecentBookings bookings={bookings} />
            </div>
            <aside className="dash-right">
              <QuickActions />
              <PendingKyc />
              <PartnerGrowth />
            </aside>
          </section>
        </div>
      </section>
    </main>
  );
}
