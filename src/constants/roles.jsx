import { CheckSquare, CreditCard, Headphones, Shield, ShieldCheck, Wrench } from 'lucide-react';

export const ROLES = [
  {
    id: 'super-admin',
    name: 'Super Admin',
    description: 'Full system override and global configurations.',
    icon: ShieldCheck,
    tone: 'purple'
  },
  {
    id: 'admin',
    name: 'Admin',
    description: 'Manage organizational settings and user hierarchies.',
    icon: Shield,
    tone: 'blue'
  },
  {
    id: 'support',
    name: 'Support Team',
    description: 'Handle tickets, user inquiries, and troubleshooting.',
    icon: Headphones,
    tone: 'gray'
  },
  {
    id: 'finance',
    name: 'Finance Team',
    description: 'Monitor transactions, payouts, and revenue metrics.',
    icon: CreditCard,
    tone: 'peach'
  },
  {
    id: 'operations',
    name: 'Operations Team',
    description: 'Core logistics, fleet monitoring, and system health.',
    icon: Wrench,
    tone: 'lavender'
  },
  {
    id: 'kyc',
    name: 'KYC Team',
    description: 'Identity verification and compliance risk auditing.',
    icon: CheckSquare,
    tone: 'sky'
  }
];
