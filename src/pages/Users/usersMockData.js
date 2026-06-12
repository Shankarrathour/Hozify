const baseUsers = [
  {
    id: 'USR-1001',
    name: 'Ishaan Mehta',
    mobile: '+91 98765 43210',
    email: 'ishaan.mehta@example.com',
    status: 'Active',
    registrationDate: '2024-10-12',
    addresses: [
      'A-1204, Skyview Heights, Andheri West, Mumbai',
      '14 Palm Avenue, Koramangala, Bengaluru'
    ],
    wallet: {
      balance: 1840,
      totalCredits: 7650,
      totalDebits: 5810
    },
    referrals: {
      referralCode: 'ISH941',
      totalReferrals: 9,
      earnedAmount: 1350
    },
    bookingHistory: [
      { id: 'BK-90210', serviceName: 'Deep Home Cleaning', date: '2026-05-21', amount: 2499, status: 'Completed' },
      { id: 'BK-90144', serviceName: 'AC Service', date: '2026-04-18', amount: 899, status: 'Completed' }
    ],
    documents: [
      { name: 'Aadhaar Card', type: 'Identity', verificationStatus: 'Verified' },
      { name: 'Address Proof', type: 'Residence', verificationStatus: 'Verified' }
    ]
  },
  {
    id: 'USR-1002',
    name: 'Ananya Rao',
    mobile: '+91 99887 76655',
    email: 'ananya.rao@example.com',
    status: 'Active',
    registrationDate: '2025-01-08',
    addresses: [
      'Flat 7B, Green Park Residency, Hyderabad',
      '22 Lake Road, Jubilee Hills, Hyderabad'
    ],
    wallet: {
      balance: 620,
      totalCredits: 4300,
      totalDebits: 3680
    },
    referrals: {
      referralCode: 'ANA214',
      totalReferrals: 4,
      earnedAmount: 600
    },
    bookingHistory: [
      { id: 'BK-88452', serviceName: 'Sofa Cleaning', date: '2026-05-09', amount: 1299, status: 'Completed' },
      { id: 'BK-87619', serviceName: 'Bathroom Cleaning', date: '2026-03-29', amount: 699, status: 'Completed' }
    ],
    documents: [
      { name: 'PAN Card', type: 'Identity', verificationStatus: 'Verified' },
      { name: 'Utility Bill', type: 'Residence', verificationStatus: 'Pending' }
    ]
  },
  {
    id: 'USR-1003',
    name: 'Rohan Kapoor',
    mobile: '+91 91234 56780',
    email: 'rohan.kapoor@example.com',
    status: 'Suspended',
    registrationDate: '2023-11-25',
    addresses: [
      'House 42, Sector 57, Gurugram',
      'Tower C, Golf Course Road, Gurugram'
    ],
    wallet: {
      balance: 0,
      totalCredits: 2100,
      totalDebits: 2100
    },
    referrals: {
      referralCode: 'ROH557',
      totalReferrals: 1,
      earnedAmount: 150
    },
    bookingHistory: [
      { id: 'BK-87113', serviceName: 'Plumbing Repair', date: '2026-02-14', amount: 549, status: 'Refunded' },
      { id: 'BK-86001', serviceName: 'Kitchen Cleaning', date: '2026-01-22', amount: 999, status: 'Completed' }
    ],
    documents: [
      { name: 'Aadhaar Card', type: 'Identity', verificationStatus: 'Verified' },
      { name: 'Rental Agreement', type: 'Residence', verificationStatus: 'Rejected' }
    ]
  },
  {
    id: 'USR-1004',
    name: 'Priya Nair',
    mobile: '+91 90123 45678',
    email: 'priya.nair@example.com',
    status: 'Blocked',
    registrationDate: '2024-07-19',
    addresses: [
      'Villa 18, ECR Road, Chennai',
      '10 Bay View Apartments, Besant Nagar, Chennai'
    ],
    wallet: {
      balance: 310,
      totalCredits: 1900,
      totalDebits: 1590
    },
    referrals: {
      referralCode: 'PRI828',
      totalReferrals: 2,
      earnedAmount: 300
    },
    bookingHistory: [
      { id: 'BK-85247', serviceName: 'Pest Control', date: '2025-12-12', amount: 1499, status: 'Cancelled' },
      { id: 'BK-84710', serviceName: 'Laundry Pickup', date: '2025-11-05', amount: 399, status: 'Completed' }
    ],
    documents: [
      { name: 'PAN Card', type: 'Identity', verificationStatus: 'Pending' },
      { name: 'Electricity Bill', type: 'Residence', verificationStatus: 'Pending' }
    ]
  },
  {
    id: 'USR-1005',
    name: 'Kabir Singh',
    mobile: '+91 98989 12345',
    email: 'kabir.singh@example.com',
    status: 'Active',
    registrationDate: '2025-04-03',
    addresses: [
      'B-504, Rivera Towers, Pune',
      'Office 302, Baner High Street, Pune'
    ],
    wallet: {
      balance: 2575,
      totalCredits: 9800,
      totalDebits: 7225
    },
    referrals: {
      referralCode: 'KAB310',
      totalReferrals: 12,
      earnedAmount: 1800
    },
    bookingHistory: [
      { id: 'BK-83902', serviceName: 'Car Wash', date: '2026-06-02', amount: 499, status: 'Completed' },
      { id: 'BK-83218', serviceName: 'Home Sanitization', date: '2026-04-30', amount: 1699, status: 'Completed' }
    ],
    documents: [
      { name: 'Aadhaar Card', type: 'Identity', verificationStatus: 'Verified' },
      { name: 'Passport', type: 'Identity', verificationStatus: 'Verified' }
    ]
  },
  {
    id: 'USR-1006',
    name: 'Meera Iyer',
    mobile: '+91 97654 32109',
    email: 'meera.iyer@example.com',
    status: 'Suspended',
    registrationDate: '2024-02-28',
    addresses: [
      '908 Lotus Enclave, Kochi',
      '16 Marine Drive, Ernakulam'
    ],
    wallet: {
      balance: 95,
      totalCredits: 1250,
      totalDebits: 1155
    },
    referrals: {
      referralCode: 'MEE502',
      totalReferrals: 0,
      earnedAmount: 0
    },
    bookingHistory: [
      { id: 'BK-82004', serviceName: 'Electrician Visit', date: '2026-01-11', amount: 449, status: 'Completed' },
      { id: 'BK-81772', serviceName: 'Appliance Repair', date: '2025-12-20', amount: 799, status: 'Disputed' }
    ],
    documents: [
      { name: 'Voter ID', type: 'Identity', verificationStatus: 'Verified' },
      { name: 'Address Proof', type: 'Residence', verificationStatus: 'Verified' }
    ]
  },
  {
    id: 'USR-1007',
    name: 'Arjun Desai',
    mobile: '+91 95555 44433',
    email: 'arjun.desai@example.com',
    status: 'Active',
    registrationDate: '2025-08-16',
    addresses: [
      '302 Sapphire Square, Ahmedabad',
      'Plot 11, Prahlad Nagar, Ahmedabad'
    ],
    wallet: {
      balance: 740,
      totalCredits: 3600,
      totalDebits: 2860
    },
    referrals: {
      referralCode: 'ARJ771',
      totalReferrals: 5,
      earnedAmount: 750
    },
    bookingHistory: [
      { id: 'BK-80561', serviceName: 'Gardening Service', date: '2026-05-27', amount: 1199, status: 'Completed' },
      { id: 'BK-80195', serviceName: 'Furniture Assembly', date: '2026-04-07', amount: 699, status: 'Completed' }
    ],
    documents: [
      { name: 'Driving License', type: 'Identity', verificationStatus: 'Verified' },
      { name: 'Gas Bill', type: 'Residence', verificationStatus: 'Verified' }
    ]
  },
  {
    id: 'USR-1008',
    name: 'Sara Thomas',
    mobile: '+91 94444 22110',
    email: 'sara.thomas@example.com',
    status: 'Blocked',
    registrationDate: '2023-09-04',
    addresses: [
      '11 Heritage Homes, Indiranagar, Bengaluru',
      'C-19, Brigade Road, Bengaluru'
    ],
    wallet: {
      balance: 0,
      totalCredits: 2750,
      totalDebits: 2750
    },
    referrals: {
      referralCode: 'SAR609',
      totalReferrals: 3,
      earnedAmount: 450
    },
    bookingHistory: [
      { id: 'BK-79081', serviceName: 'Packers Support', date: '2025-10-15', amount: 2199, status: 'Cancelled' },
      { id: 'BK-78430', serviceName: 'Window Cleaning', date: '2025-09-01', amount: 599, status: 'Completed' }
    ],
    documents: [
      { name: 'PAN Card', type: 'Identity', verificationStatus: 'Rejected' },
      { name: 'Bank Statement', type: 'Residence', verificationStatus: 'Pending' }
    ]
  }
];

const avatars = {
  'USR-1001': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=220&h=220&q=80',
  'USR-1002': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=220&h=220&q=80',
  'USR-1003': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=220&h=220&q=80',
  'USR-1004': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=220&h=220&q=80',
  'USR-1005': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=220&h=220&q=80',
  'USR-1006': 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=220&h=220&q=80',
  'USR-1007': 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=220&h=220&q=80',
  'USR-1008': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=220&h=220&q=80'
};

const memberships = {
  'USR-1001': 'Premium User',
  'USR-1002': 'Verified User',
  'USR-1003': 'Standard User',
  'USR-1004': 'Standard User',
  'USR-1005': 'Premium User',
  'USR-1006': 'Verified User',
  'USR-1007': 'Premium User',
  'USR-1008': 'Standard User'
};

const referredUsers = {
  'USR-1001': ['Aarav Shah', 'Neha Batra', 'Vivek Nair'],
  'USR-1002': ['Tanvi Menon', 'Ritika Jain'],
  'USR-1003': ['Manav Sethi'],
  'USR-1004': ['Gauri Nair', 'Dev Patel'],
  'USR-1005': ['Sana Ali', 'Omkar Rao', 'Rhea Sen'],
  'USR-1006': [],
  'USR-1007': ['Nikhil Joshi', 'Pooja Shah'],
  'USR-1008': ['Aisha Khan']
};

function buildTransactions(user) {
  return [
    {
      id: `${user.id}-TXN-1`,
      date: user.bookingHistory[0]?.date || user.registrationDate,
      type: 'Debit',
      amount: user.bookingHistory[0]?.amount || 0,
      remarks: user.bookingHistory[0] ? `${user.bookingHistory[0].serviceName} booking payment` : 'Service payment'
    },
    {
      id: `${user.id}-TXN-2`,
      date: user.registrationDate,
      type: 'Credit',
      amount: user.referrals.earnedAmount,
      remarks: 'Referral rewards credited'
    }
  ];
}

function buildLogs(user) {
  return [
    {
      date: '2026-06-12',
      action: 'Profile reviewed',
      performedBy: 'Admin User',
      remarks: `${user.name} profile opened from User Management.`
    },
    {
      date: user.registrationDate,
      action: 'Account registered',
      performedBy: 'System',
      remarks: 'Customer account created successfully.'
    },
    {
      date: user.bookingHistory[0]?.date || user.registrationDate,
      action: 'Booking activity',
      performedBy: 'System',
      remarks: user.bookingHistory[0] ? `${user.bookingHistory[0].id} marked ${user.bookingHistory[0].status}.` : 'No recent booking activity.'
    }
  ];
}

export const usersMockData = baseUsers.map((user) => {
  const transactions = buildTransactions(user);

  return {
    ...user,
    avatar: avatars[user.id],
    membershipType: memberships[user.id],
    wallet: {
      ...user.wallet,
      lastTransaction: transactions[0],
      transactions
    },
    referrals: {
      ...user.referrals,
      referredUsers: referredUsers[user.id]
    },
    documents: user.documents.map((document, index) => ({
      ...document,
      uploadedDate: index === 0 ? user.registrationDate : user.bookingHistory[0]?.date || user.registrationDate
    })),
    logs: buildLogs(user)
  };
});
