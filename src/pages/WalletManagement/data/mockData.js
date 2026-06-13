// Centralized mock data for the Wallet Management Module (Rupee ₹ currency formatted)

export const mockWallets = [
  { id: 'WLT-99201', owner: 'Alexander Davis', email: 'alex.d@finmail.com', type: 'Partner', available: 124500.00, frozen: 0.00, lifetimeEarnings: 450000.00, lifetimeWithdrawals: 325500.00, status: 'Active', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=40&h=40&q=80', kyc: 'Verified Level 3', riskScore: 8 },
  { id: 'WLT-88123', owner: 'Sarah Chen', email: 's.chen@globalpay.io', type: 'User', available: 12420.50, frozen: 5000.00, lifetimeEarnings: 82000.00, lifetimeWithdrawals: 64579.50, status: 'Frozen', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=40&h=40&q=80', kyc: 'Verified Level 2', riskScore: 78 },
  { id: 'WLT-44021', owner: 'Marcus Rodriguez', email: 'm.rod@techcorp.com', type: 'Partner', available: 540000.00, frozen: 0.00, lifetimeEarnings: 1240000.00, lifetimeWithdrawals: 700000.00, status: 'Active', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=40&h=40&q=80', kyc: 'Verified Level 3', riskScore: 12 },
  { id: 'WLT-22910', owner: 'James Kim', email: 'j.kim@wealthmgt.net', type: 'User', available: 2100.00, frozen: 0.00, lifetimeEarnings: 18000.00, lifetimeWithdrawals: 15900.00, status: 'Active', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=40&h=40&q=80', kyc: 'Verified Level 3', riskScore: 4 },
  { id: 'WLT-77382', owner: 'Deepak Sharma', email: 'd.sharma@quickserv.in', type: 'Seller', available: 89400.00, frozen: 20000.00, lifetimeEarnings: 520000.00, lifetimeWithdrawals: 410600.00, status: 'Active', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=40&h=40&q=80', kyc: 'Verified Level 2', riskScore: 45 },
  { id: 'WLT-11094', owner: 'Priya Patel', email: 'p.patel@cleanpro.co', type: 'Employee', available: 15600.00, frozen: 0.00, lifetimeEarnings: 94000.00, lifetimeWithdrawals: 78400.00, status: 'Active', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=40&h=40&q=80', kyc: 'Verified Level 3', riskScore: 2 }
];

export const mockTransactions = [
  { id: 'TXN-7741092', walletId: 'WLT-99201', owner: 'Alexander Davis', type: 'Credit', amount: 12500.00, balance: 248102.45, reference: 'Invoice #INV-2024-001', source: 'Booking', status: 'Success', date: '2023-10-24 14:22' },
  { id: 'TXN-7741088', walletId: 'WLT-99201', owner: 'Alexander Davis', type: 'Debit', amount: 2400.00, balance: 235602.45, reference: 'Utility Payout - Q3', source: 'Settlement', status: 'Failed', date: '2023-10-23 09:15' },
  { id: 'TXN-7741071', walletId: 'WLT-99201', owner: 'Alexander Davis', type: 'Credit', amount: 450.00, balance: 238002.45, reference: 'Cashback - Promo V2', source: 'Adjustment', status: 'Success', date: '2023-10-22 18:40' },
  { id: 'TXN-7741065', walletId: 'WLT-99201', owner: 'Alexander Davis', type: 'Transfer', amount: 0.00, balance: 237551.95, reference: 'Internal Rebalancing', source: 'Adjustment', status: 'Pending', date: '2023-10-22 11:02' },
  { id: 'TXN-9988221', walletId: 'WLT-88123', owner: 'Sarah Chen', type: 'Debit', amount: 5000.00, balance: 12420.50, reference: 'Suspicious Refund Chargeback', source: 'Refund', status: 'Success', date: '2023-10-21 17:30' },
  { id: 'TXN-4499102', walletId: 'WLT-77382', owner: 'Deepak Sharma', type: 'Debit', amount: 12000.00, balance: 89400.00, reference: 'Rule SLA Violation Penalty', source: 'Penalty', status: 'Success', date: '2023-10-20 10:14' },
  { id: 'TXN-2210883', walletId: 'WLT-11094', owner: 'Priya Patel', type: 'Credit', amount: 8400.00, balance: 15600.00, reference: 'Salary Payout Cycle #09', source: 'Settlement', status: 'Success', date: '2023-10-18 16:45' }
];

export const mockSettlements = [
  { id: 'SET-99021', partnerName: 'Nexis Logistics', bankName: 'HDFC Bank Ltd', accNo: '******9902', amount: 24800.00, requestDate: '2023-10-24 10:15', processedDate: '2023-10-24 14:00', status: 'Approved', statusColor: 'green' },
  { id: 'SET-98911', partnerName: 'Sarah Chen', bankName: 'ICICI Bank', accNo: '******1128', amount: 15450.00, requestDate: '2023-10-23 11:02', processedDate: '-', status: 'Pending', statusColor: 'blue' },
  { id: 'SET-98520', partnerName: 'Marcus Rodriguez', bankName: 'State Bank of India', accNo: '******3402', amount: 8500.00, requestDate: '2023-10-22 09:12', processedDate: '-', status: 'Hold', statusColor: 'orange' },
  { id: 'SET-98114', partnerName: 'Deepak Sharma', bankName: 'Axis Bank', accNo: '******8842', amount: 4200.00, requestDate: '2023-10-20 16:30', processedDate: '2023-10-21 11:15', status: 'Processed', statusColor: 'gray' }
];

export const mockRefunds = [
  { id: 'RFD-2024-991', bookingId: 'BK-88291', customer: 'Johnathan Doe', amount: 1240.00, reason: 'Duplicate service booked', status: 'Pending', date: '2023-10-24 09:15' },
  { id: 'RFD-2024-992', bookingId: 'BK-77543', customer: 'Sarah McPhee', amount: 45.50, reason: 'Partner late by 1 hour', status: 'Pending', date: '2023-10-24 11:00' },
  { id: 'RFD-2024-880', bookingId: 'BK-55201', customer: 'Arthur Pendragon', amount: 8500.00, reason: 'Service cancellation post-deposit', status: 'Approved', date: '2023-10-22 14:10' },
  { id: 'RFD-2024-712', bookingId: 'BK-22910', customer: 'Lois Lane', amount: 350.00, reason: 'Incorrect billing', status: 'Rejected', date: '2023-10-20 12:45' }
];

export const mockPenalties = [
  { id: 'PEN-88902', owner: 'Deepak Sharma', walletId: 'WLT-77382', reason: 'No-show for urgent plumbing assignment', amount: 5000.00, appliedBy: 'Admin (Sarah J.)', date: '2023-10-24', status: 'Active' },
  { id: 'PEN-88901', owner: 'Alexander Davis', walletId: 'WLT-99201', reason: 'SLA delay over 120 minutes', amount: 1500.00, appliedBy: 'System Auto-Monitor', date: '2023-10-23', status: 'Active' },
  { id: 'PEN-88710', owner: 'Marcus Rodriguez', walletId: 'WLT-44021', reason: 'Client dispute resolution deduction', amount: 3000.00, appliedBy: 'Admin (Michael C.)', date: '2023-10-21', status: 'Removed' }
];

export const mockFraudAlerts = [
  { id: 'FRD-102', walletId: 'WLT-88123', owner: 'Sarah Chen', riskScore: 78, type: 'Multiple Refunds', description: 'Initiated 4 refunds in less than 24 hours under WLT-88123.', status: 'High Risk', date: '2023-10-24' },
  { id: 'FRD-101', walletId: 'WLT-77382', owner: 'Deepak Sharma', riskScore: 45, type: 'Fake Transactions', description: 'Detected 2 transaction references with invalid digital signatures.', status: 'Under Review', date: '2023-10-23' },
  { id: 'FRD-100', walletId: 'WLT-99201', owner: 'Alexander Davis', riskScore: 8, type: 'Chargeback Risk', description: 'Credit card chargeback warning from Stripe payment provider.', status: 'Resolved', date: '2023-10-20' }
];

export const mockReconciliation = [
  { id: 'REC-0922', date: '2023-10-24', gatewayTotal: 1245000.00, walletTotal: 1245000.00, difference: 0.00, status: 'Matched' },
  { id: 'REC-0921', date: '2023-10-23', gatewayTotal: 845200.50, walletTotal: 846042.60, difference: 842.10, status: 'Unmatched' },
  { id: 'REC-0920', date: '2023-10-22', gatewayTotal: 991200.00, walletTotal: 991200.00, difference: 0.00, status: 'Matched' },
  { id: 'REC-0919', date: '2023-10-21', gatewayTotal: 560400.00, walletTotal: 559200.00, difference: -1200.00, status: 'Pending Review' }
];

export const mockAuditLogs = [
  { id: 'LOG-7729', action: 'Wallet Frozen', admin: 'Sarah Jenkins', date: '2023-10-24 15:45', remarks: 'Suspected refund manipulation rule RFD-88' },
  { id: 'LOG-7728', action: 'Credit Adjustment', admin: 'Michael Chang', date: '2023-10-24 11:20', remarks: 'Manual credit adjustment for client satisfaction #BK-9402' },
  { id: 'LOG-7712', action: 'Settlement Approval', admin: 'Sarah Jenkins', date: '2023-10-23 16:30', remarks: 'Batch settlement approved for Nexis Logistics' }
];

export const mockTimelineEvents = [
  { id: 1, type: 'created', label: 'Wallet Created', date: '2023-01-15 10:00' },
  { id: 2, type: 'credit', label: 'Initial Credit Added', date: '2023-01-15 11:30' },
  { id: 3, type: 'debit', label: 'First Booking Split Processed', date: '2023-02-01 14:20' },
  { id: 4, type: 'settlement', label: 'Settlement Requested', date: '2023-03-01 09:15' },
  { id: 5, type: 'refund', label: 'Refund Issued', date: '2023-05-12 16:45' },
  { id: 6, type: 'penalty', label: 'Late Delivery Penalty Applied', date: '2023-07-22 11:00' },
  { id: 7, type: 'frozen', label: 'Wallet Frozen', date: '2023-10-24 15:45' },
  { id: 8, type: 'reactivated', label: 'Wallet Reactivated', date: 'Pending Investigation' }
];

export const mockSettings = {
  minimumWithdrawal: 1000,
  maximumWithdrawal: 200000,
  settlementCycle: 'Weekly (Every Monday)',
  penaltyRuleRate: '15% of service ticket',
  autoSettlementThreshold: 50000,
  riskAlertThreshold: 75
};
