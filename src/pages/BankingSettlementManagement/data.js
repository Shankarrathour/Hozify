export const bankAccounts = [
  { id: 'ACC-9920114588', holder: 'Acme Marketing Ltd', type: 'Partner', bank: 'HDFC Bank', account: '8902', ifsc: 'HDFC0001234', verification: 'Verified', wallet: 'WLT-778122', status: 'Active', earnings: 12845000, withdrawals: 9210200 },
  { id: 'ACC-9920114591', holder: 'John Solomon', type: 'Seller', bank: 'ICICI Bank', account: '4412', ifsc: 'ICIC000982', verification: 'Pending', wallet: 'WLT-992100', status: 'Active', earnings: 8420000, withdrawals: 4200000 },
  { id: 'ACC-9920114594', holder: 'Tech-Edge Solutions', type: 'Partner', bank: 'SBI Bank', account: '1109', ifsc: 'SBIN0001992', verification: 'Failed', wallet: '-', status: 'Disabled', earnings: 6150000, withdrawals: 1200000 },
  { id: 'ACC-9920114597', holder: 'Oceanic Logistics', type: 'Seller', bank: 'HDFC Bank', account: '3390', ifsc: 'HDFC0002241', verification: 'Verified', wallet: 'WLT-110292', status: 'Active', earnings: 22840000, withdrawals: 16700000 },
  { id: 'ACC-9920114600', holder: 'Modern Kitchens', type: 'Seller', bank: 'Axis Bank', account: '5562', ifsc: 'UTIB0001092', verification: 'Pending', wallet: 'WLT-443211', status: 'Active', earnings: 3410000, withdrawals: 950000 }
];

export const verificationQueue = [
  { id: 'TX-99420-BK', holder: 'Apex Logistics Corp', bank: 'JP Morgan Chase', account: '8842', type: 'Checking', submitted: 'Aug 14, 2024 14:22 GMT', status: 'Pending', confidence: 98.2 },
  { id: 'TX-99421-BK', holder: 'Blue Horizon Ventures', bank: 'HSBC Holdings', account: '1120', type: 'Savings', submitted: 'Aug 14, 2024 11:05 GMT', status: 'Reupload Required', confidence: 42.1 },
  { id: 'TX-99422-BK', holder: 'Mainland Securities', bank: 'Barclays Bank', account: '4901', type: 'Operational', submitted: 'Aug 13, 2024 17:45 GMT', status: 'Pending', confidence: 89.9 },
  { id: 'TX-99423-BK', holder: 'Quantum Tech Partners', bank: 'Wells Fargo', account: '3318', type: 'Escrow', submitted: 'Aug 13, 2024 09:12 GMT', status: 'Pending', confidence: 94.5 }
];

export const beneficiaries = [
  { id: 'GLP-992384', name: 'Global Logistics Partners', type: 'Partner', method: 'UPI ID', account: 'gmq.setblme@axisbaol', bank: 'AXIS BANK', status: 'Verified', last: '24 Jul 2024, 14:30' },
  { id: 'NSI-110293', name: 'Nippon Steel India Ltd', type: 'Seller', method: 'Bank Acc', account: '9982 **** 4421', bank: 'HDFC BANK', status: 'Pending', last: 'N/A' },
  { id: 'APX-442200', name: 'Apex Infrastructure', type: 'Partner', method: 'Bank Acc', account: '5020 **** 8829', bank: 'ICICI BANK', status: 'Verified', last: '22 Jul 2024, 09:15' },
  { id: 'VTX-338811', name: 'Vertex Systems', type: 'Employee', method: 'UPI ID', account: 'verbex.sys@dcdcq', bank: 'ICICI BANK', status: 'Failed', last: '25 Jul 2024, 11:20' }
];

export const withdrawals = [
  { id: 'WR-2024-8192', user: 'Atlas Logistics GmbH', bank: 'Deutsche Bank AG', account: '8821', amount: 42500000, requested: '2024-09-12 14:02', status: 'Pending', risk: 'Low' },
  { id: 'WR-2024-8193', user: 'Cornerstone Real Estate', bank: 'HSBC Holding', account: '1042', amount: 120000000, requested: '2024-09-12 14:15', status: 'Held', risk: 'High' },
  { id: 'WR-2024-8194', user: 'Solaris Peak Capital', bank: 'Citibank N.A.', account: '3318', amount: 8432000, requested: '2024-09-12 14:48', status: 'Pending', risk: 'Medium' },
  { id: 'WR-2024-8195', user: 'Novus Ventures', bank: 'JP Morgan Chase', account: '4422', amount: 242018000, requested: '2024-09-12 15:01', status: 'Pending', risk: 'Low' }
];

export const settlements = [
  { id: 'SETL-99201-HV', partner: 'Goldman Sachs Global', bank: 'GSUS33XXXX', account: '8821', amount: 425000000, requested: 'Oct 24, 2024 09:12 AM', status: 'Verified', highValue: true },
  { id: 'SETL-99188-ST', partner: 'J.P. Morgan Asset Mgmt', bank: 'CHASEUS33', account: '1042', amount: 84250000, requested: 'Oct 24, 2024 10:45 AM', status: 'Pending Review', highValue: false },
  { id: 'SETL-99052-RG', partner: 'BNY Mellon Private', bank: 'BNYHUS33', account: '9931', amount: 12000000, requested: 'Oct 23, 2024 04:30 PM', status: 'Risk Alert', highValue: false },
  { id: 'SETL-99205-ST', partner: 'HSBC Private Banking', bank: 'HSBCGB2L', account: '4422', amount: 5520000, requested: 'Today 08:45 AM', status: 'Auto-Checked', highValue: false }
];

export const failedSettlements = [
  { id: 'SET-94021-X9', reason: 'Invalid IFSC', note: 'Branch code mismatch in node 04.', bank: 'HSBC Hong Kong', amount: 42850000, status: 'Unresolved' },
  { id: 'SET-94022-L1', reason: 'IBAN Mismatch', note: 'Checksum failed on European ledger.', bank: 'Deutsche Bank Frankfurt', amount: 112000000, status: 'Unresolved' },
  { id: 'SET-93988-A4', reason: 'Liquidity Lag', note: 'Waiting for intraday sweeps.', bank: 'Standard Chartered', amount: 7420000, status: 'In Review' },
  { id: 'SET-94025-Z2', reason: 'KYC Expired', note: 'Recipient documentation out of date.', bank: 'Santander Global', amount: 21000000, status: 'Unresolved' }
];

export const reconciliationIssues = [
  { id: 'TXN_98214532', customer: 'Alpha Corp Ltd.', gateway: 'Razorpay', mismatch: 'Amount Mismatch', platform: 425000, gatewayAmount: 422550, status: 'Completed' },
  { id: 'TXN_98214533', customer: 'James Wilson', gateway: 'Cashfree', mismatch: 'Not in Ledger', platform: 0, gatewayAmount: 120000, status: 'Pending' },
  { id: 'TXN_98214534', customer: 'Sarah Green', gateway: 'Razorpay', mismatch: 'Date Variance', platform: 87458, gatewayAmount: 87458, status: 'Partial Match' },
  { id: 'TXN_98214555', customer: 'Institutional Client ID #5', gateway: 'Gateway V2', mismatch: 'Partial Match', platform: 87458, gatewayAmount: 87458, status: 'Partial Match' }
];

export const approvals = [
  { id: 'TX-88291-P', type: 'Withdrawal', entity: 'Blackwood North Ltd.', bank: 'Wells Fargo', amount: 45023000, risk: 92, reviewer: 'A. Miller', status: 'Critical' },
  { id: 'TX-88244-S', type: 'Settlement', entity: 'Apex Partners Int.', bank: 'Chase Bank', amount: 122000000, risk: 24, reviewer: 'Unassigned', status: 'Pending' },
  { id: 'ADJ-1022-W', type: 'Adjustment', entity: 'SV Global Ventures', bank: 'System Wallet', amount: 1500000, risk: 8, reviewer: 'J. Stern', status: 'Low Risk' },
  { id: 'TX-88219-S', type: 'Settlement', entity: 'Tech Capital Solutions', bank: 'Barclays', amount: 8945000, risk: 62, reviewer: 'A. Miller', status: 'High Risk' }
];

export const bankPerformance = [
  { id: 'BNK-01', institution: 'JP Morgan Chase', success: 99.92, latency: '182ms', volume: 420105000, status: 'Optimal', gateway: 'Direct SWIFT-NET' },
  { id: 'BNK-02', institution: 'HSBC Global', success: 99.98, latency: '245ms', volume: 315880000, status: 'Optimal', gateway: 'RTGS-Node-02' },
  { id: 'BNK-03', institution: 'Barclays PLC', success: 94.12, latency: '1,250ms', volume: 192440000, status: 'Degraded', gateway: 'Legacy ISO8583' },
  { id: 'BNK-04', institution: 'BNP Paribas', success: 99.45, latency: '310ms', volume: 284500000, status: 'Optimal', gateway: 'Direct SEPA-Link' }
];

export const reports = [
  { id: 'Settlement Report', owner: 'Finance Ops', status: 'Verified', value: 452000000 },
  { id: 'Withdrawal Report', owner: 'Treasury', status: 'Pending', value: 128050000 },
  { id: 'Reconciliation Report', owner: 'Audit Desk', status: 'Verified', value: 1290000000 },
  { id: 'Bank Performance Report', owner: 'System Analytics', status: 'Verified', value: 1870050000 }
];

export const auditLogs = [
  { id: 'LOG-1', action: 'Withdrawal Requested', admin: 'System', date: '10:45 AM Today', remarks: 'Withdrawal of 400,000 requested to standard ledger.' },
  { id: 'LOG-2', action: 'Passbook Uploaded', admin: 'S. Deshmukh', date: 'Yesterday', remarks: 'passbook_aug_24.pdf attached to verification queue.' },
  { id: 'LOG-3', action: 'Profile Created', admin: 'Onboarding', date: '15 Aug 2024', remarks: 'Institutional account entity completed onboarding.' }
];
