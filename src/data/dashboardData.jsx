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
  Wallet
} from 'lucide-react';

export const navItems = [
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

export const sidebarUtilityItems = [
  ['Roles', UserCog],
  ['Settings', Settings]
];

export const kpis = [
  { title: 'Total Users', value: '128,402', trend: '+8.2%', icon: Users, positive: true },
  { title: 'Total Partners', value: '4,810', trend: '+12.4%', icon: Gift, positive: true },
  { title: 'Total Sellers', value: '1,244', trend: '-2.1%', icon: Store, positive: false },
  { title: 'Total Bookings', value: '42,911', trend: '+22.5%', icon: CalendarCheck, positive: true },
  { title: 'Revenue (MTD)', value: '$2,482,100', footer: 'progress' },
  { title: 'Wallet Balance', value: '$412,055', footer: 'Ready for settlement' },
  { title: 'Pending Approvals', value: '124', footer: 'Applications', action: 'Review All ->' },
  { title: 'Open Tickets', value: '18', footer: 'High Priority', negative: true }
];

export const chartBars = [45, 30, 54, 40, 68, 73, 49, 35, 59, 34, 64, 82];

export const bookings = [
  ['#HZ-9102', 'JD', 'John Doe', 'Deep Cleaning', 'Oct 24, 10:30 AM', '$125.00', 'Completed'],
  ['#HZ-9101', 'SM', 'Sarah Miller', 'AC Maintenance', 'Oct 24, 11:15 AM', '$85.00', 'In Progress'],
  ['#HZ-9099', 'RK', 'Robert King', 'Plumbing Repair', 'Oct 24, 01:45 PM', '$210.00', 'Scheduled']
];

export const pendingKyc = [
  ['Urban Cleaners LLC', 'Business Verification', 'UC'],
  ['Michael Scott', 'Identity Documents', 'MS'],
  ['Apex Maintenance', 'Insurance Certificate', 'AM']
];

export const partnerGrowthBars = [38, 58, 34, 78, 68, 92, 82];

export const quickActions = [
  ['Create Banner', CircleHelp],
  ['Send Push', CircleHelp],
  ['Review KYC', ShieldCheck],
  ['Review Ticket', CircleHelp]
];
