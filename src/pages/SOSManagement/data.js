export const sosCases = [
  {
    id: 'SOS-9821',
    user: 'Sarah Jenkins',
    avatar: 'SJ',
    type: 'Medical Emergency',
    location: 'Times Square, NY',
    priority: 'Critical',
    status: 'Pending',
    created: '02m ago',
    city: 'New York',
    eta: '04:12',
    responder: 'Unit 21-A',
    distance: '1.8 km'
  },
  {
    id: 'SOS-9819',
    user: 'Mark Thompson',
    avatar: 'MT',
    type: 'Road Accident',
    location: 'M1 Highway, London',
    priority: 'High',
    status: 'Dispatched',
    created: '12m ago',
    city: 'London',
    eta: '06:30',
    responder: 'Paramedic Squad 02',
    distance: '3.2 km'
  },
  {
    id: 'SOS-9815',
    user: 'Elena Rodriguez',
    avatar: 'ER',
    type: 'Theft / Security',
    location: 'Ginza District, Tokyo',
    priority: 'Medium',
    status: 'On-Site',
    created: '45m ago',
    city: 'Tokyo',
    eta: '00:00',
    responder: 'Security P1',
    distance: '0.4 km'
  },
  {
    id: 'SOS-9811',
    user: 'Robert King',
    avatar: 'RK',
    type: 'Fire Hazard',
    location: 'Harbor District',
    priority: 'Critical',
    status: 'Escalated',
    created: '58m ago',
    city: 'Sydney',
    eta: '02:45',
    responder: 'Fire Sector B',
    distance: '2.6 km'
  }
];

export const responders = [
  { name: 'Tactical Team Alpha', type: 'Security Team', status: 'Ready', distance: '0.8 km', eta: '3m', load: '2/6', contact: '+1 555 1200' },
  { name: 'Paramedic Squad 02', type: 'Medical Team', status: 'Busy', distance: '1.2 km', eta: '4m', load: '4/4', contact: '+1 555 1290' },
  { name: 'Private Security P1', type: 'External Agency', status: 'Ready', distance: '2.5 km', eta: '8m', load: '3/10', contact: '+1 555 4421' },
  { name: 'State Patrol Unit', type: 'Police', status: 'Standby', distance: '5.0 km', eta: '14m', load: '1/6', contact: '+1 555 8812' }
];

export const vehicles = [
  { name: 'Interceptor SUV 04', location: 'Sector A Hub', capacity: '4 seats', status: 'Available', assignment: 'None' },
  { name: 'Med-Evac Chopper', location: 'Station North', capacity: '2 stretchers', status: 'Reserved', assignment: 'SOS-9819' },
  { name: 'Drone Relay D-8', location: 'Mobile Bay', capacity: 'Thermal feed', status: 'Available', assignment: 'SOS-9821' }
];

export const categories = [
  'Medical Emergency',
  'Accident',
  'Assault',
  'Theft',
  'Vehicle Breakdown',
  'Fire',
  'Harassment',
  'Security Threat',
  'Other Emergency'
].map((name, index) => ({
  id: `CAT-${index + 1}`,
  name,
  active: index !== 8,
  sla: ['5m', '8m', '7m', '12m'][index % 4],
  cases: [42, 31, 18, 24, 11, 8, 7, 15, 4][index]
}));

export const escalations = [
  { id: 'ESC-4201', title: 'Site-42 Structural Integrity Failure', level: 'Critical', owner: 'J. Miller', status: 'Open', elapsed: '01:42:15', note: 'Thermal spike beyond safe operational thresholds.' },
  { id: 'ESC-4198', title: 'Logistics Grid De-sync', level: 'Level 3', owner: 'A. Chen', status: 'Triage', elapsed: '12:15', note: 'Autonomous delivery fleet reporting local packet loss.' },
  { id: 'ESC-4190', title: 'Power Grid Instability - East', level: 'Level 2', owner: 'Unassigned', status: 'Monitoring', elapsed: '45:00', note: 'Minor voltage fluctuations across Residential Zone 4.' }
];

export const contacts = [
  { name: 'Maya Rodriguez', type: 'Family', phone: '+1 555 3201', relation: 'Mother', status: 'Verified' },
  { name: 'Central Police Desk', type: 'Local Authority', phone: '+1 911 1020', relation: 'NYPD', status: 'Verified' },
  { name: 'Ops Safety Lead', type: 'Company Contact', phone: '+1 555 8801', relation: 'HOZIFY Ops', status: 'Pending' }
];

export const communications = [
  { time: '14:22:01', channel: 'SMS', recipient: 'Unit 142', status: 'Delivered', message: 'SOS signal detected at Times Square.' },
  { time: '14:21:55', channel: 'Voice', recipient: 'Public Broadcast', status: 'Queued', message: 'Emergency response has been activated.' },
  { time: '14:20:12', channel: 'Push', recipient: 'Responder HQ', status: 'Acknowledged', message: 'Responder assigned to high priority incident.' },
  { time: '14:18:44', channel: 'SMS', recipient: '+1 (555) 012-3490', status: 'Failed', message: 'Emergency contact notification failed.' }
];

export const incidentReports = [
  { id: 'INC-8842', sos: 'SOS-9821', category: 'Medical Emergency', status: 'Under Investigation', date: 'Oct 24, 2026' },
  { id: 'INC-8838', sos: 'SOS-9819', category: 'Accident', status: 'Resolved', date: 'Oct 24, 2026' },
  { id: 'INC-8829', sos: 'SOS-9815', category: 'Security Threat', status: 'Closed', date: 'Oct 23, 2026' }
];

export const fraudAlerts = [
  { id: 'FRD-1201', user: 'Daniel Mora', indicator: 'Repeated False Alarms', score: 82, status: 'High Risk' },
  { id: 'FRD-1198', user: 'Priya Sharma', indicator: 'Location Spoofing', score: 64, status: 'Medium Risk' },
  { id: 'FRD-1192', user: 'Kevin Zhou', indicator: 'Abnormal Usage', score: 21, status: 'Safe' }
];

export const audits = [
  { id: 'AUD-9001', action: 'Dispatch Team Assigned', admin: 'A. Mercer', date: '14:22:01', sos: 'SOS-9821', device: 'Ops Console / 10.12.0.8' },
  { id: 'AUD-9002', action: 'Escalation Raised', admin: 'J. Miller', date: '14:25:14', sos: 'SOS-9811', device: 'Command Desk / 10.12.0.22' },
  { id: 'AUD-9003', action: 'Communication Sent', admin: 'System', date: '14:27:33', sos: 'SOS-9819', device: 'Automation Worker' }
];

export const timeline = [
  'SOS Triggered',
  'Emergency Alert Generated',
  'Operations Team Notified',
  'Nearest Resource Identified',
  'Emergency Response Dispatched',
  'Incident Monitored',
  'Resolution Updated'
];
