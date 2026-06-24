import React, { useEffect, useState } from 'react';
import AdminShell from '../../components/layouts/AdminShell';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import EmployeeOverview from './EmployeeOverview';
import EmployeeWorkforce from './EmployeeWorkforce';
import EmployeeProfile from './EmployeeProfile';
import AvailabilityBoard from './AvailabilityBoard';
import PerformanceDashboard from './PerformanceDashboard';
import EmployeeReports from './EmployeeReports';
import AttendanceDashboard from './AttendanceDashboard';
import LeaveManagement from './LeaveManagement';

// New imported components
import BranchManagers from './BranchManagers';
import EmployeeAssignments from './EmployeeAssignments';
import EmployeeDocuments from './EmployeeDocuments';
import EmployeeKyc from './EmployeeKyc';
import EmployeeRatings from './EmployeeRatings';
import EmployeeEarnings from './EmployeeEarnings';
import EmployeeAuditLogs from './EmployeeAuditLogs';
import EmployeeAnalytics from './EmployeeAnalytics';

export default function Employees({ defaultTab }) {
  const { route, navigate } = useApp();
  
  const getDefaultTab = () => {
    if (defaultTab) return defaultTab;
    if (route === ROUTES.employeeAll) return 'Workforce';
    if (route === ROUTES.employeeAvailability) return 'Availability';
    if (route === ROUTES.branchManagers) return 'BranchManagers';
    if (route === ROUTES.employeeAssignments) return 'EmployeeAssignments';
    if (route === ROUTES.employeeDocuments) return 'EmployeeDocuments';
    if (route === ROUTES.employeeKyc) return 'EmployeeKyc';
    if (route === ROUTES.employeeRatings) return 'EmployeeRatings';
    if (route === ROUTES.employeeEarnings) return 'EmployeeEarnings';
    if (route === ROUTES.employeeAuditLogs) return 'EmployeeAuditLogs';
    if (route === ROUTES.employeeAnalytics) return 'EmployeeAnalytics';
    if (route === ROUTES.performance) return 'Performance';
    if (route === ROUTES.reports) return 'Reports';
    if (route === ROUTES.attendance) return 'Attendance';
    if (route === ROUTES.leaveManagement) return 'LeaveManagement';
    return 'Overview';
  };

  const [activeTab, setActiveTab] = useState(getDefaultTab);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    setActiveTab(getDefaultTab());
  }, [route, defaultTab]);

  const handleSelectEmployee = (emp) => {
    setSelectedEmployee(emp);
    setActiveTab('Profile');
  };

  const employeeTabRoutes = {
    Overview: ROUTES.employees,
    Workforce: ROUTES.employeeAll,
    BranchManagers: ROUTES.branchManagers,
    EmployeeAssignments: ROUTES.employeeAssignments,
    Availability: ROUTES.employeeAvailability,
    Attendance: ROUTES.attendance,
    LeaveManagement: ROUTES.leaveManagement,
    EmployeeDocuments: ROUTES.employeeDocuments,
    EmployeeKyc: ROUTES.employeeKyc,
    Performance: ROUTES.performance,
    EmployeeRatings: ROUTES.employeeRatings,
    EmployeeEarnings: ROUTES.employeeEarnings,
    Reports: ROUTES.reports,
    EmployeeAnalytics: ROUTES.employeeAnalytics,
    EmployeeAuditLogs: ROUTES.employeeAuditLogs
  };

  const handleTabClick = (tabId) => {
    navigate(employeeTabRoutes[tabId] || ROUTES.employees);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <EmployeeOverview
            onNavigateToWorkforce={() => navigate(ROUTES.employeeAll)}
          />
        );
      case 'Workforce':
        return (
          <EmployeeWorkforce
            onSelectEmployee={handleSelectEmployee}
          />
        );
      case 'BranchManagers':
        return <BranchManagers />;
      case 'EmployeeAssignments':
        return <EmployeeAssignments />;
      case 'EmployeeDocuments':
        return <EmployeeDocuments />;
      case 'EmployeeKyc':
        return <EmployeeKyc />;
      case 'EmployeeRatings':
        return <EmployeeRatings />;
      case 'EmployeeEarnings':
        return <EmployeeEarnings />;
      case 'EmployeeAuditLogs':
        return <EmployeeAuditLogs />;
      case 'EmployeeAnalytics':
        return <EmployeeAnalytics />;
      case 'Availability':
        return (
          <AvailabilityBoard />
        );
      case 'Performance':
        return (
          <PerformanceDashboard />
        );
      case 'Attendance':
        return (
          <AttendanceDashboard />
        );
      case 'LeaveManagement':
        return (
          <LeaveManagement />
        );
      case 'Reports':
        return (
          <EmployeeReports />
        );
      case 'Profile':
        return (
          <EmployeeProfile
            employee={selectedEmployee}
            onBack={() => {
              setSelectedEmployee(null);
              setActiveTab('Workforce');
            }}
          />
        );
      default:
        return (
          <EmployeeOverview
            onNavigateToWorkforce={() => navigate(ROUTES.employeeAll)}
          />
        );
    }
  };

  const showTabHeader = [
    'Overview',
    'Workforce',
    'BranchManagers',
    'EmployeeAssignments',
    'Availability',
    'Attendance',
    'LeaveManagement',
    'EmployeeDocuments',
    'EmployeeKyc',
    'Performance',
    'EmployeeRatings',
    'EmployeeEarnings',
    'Reports',
    'EmployeeAnalytics',
    'EmployeeAuditLogs'
  ].includes(activeTab);

  return (
    <AdminShell
      activeTab="Employees"
      headerTitle="Employee Management"
      searchPlaceholder="Search in employee suite..."
    >
      {/* Sub-tab selection bar */}
      {showTabHeader && (
        <div style={{ display: 'flex', gap: '16px', borderBottom: '1px solid var(--line)', marginBottom: '24px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
          {[
            { id: 'Overview', label: 'Overview' },
            { id: 'Workforce', label: 'Workforce Directory' },
            { id: 'BranchManagers', label: 'Branch Managers' },
            { id: 'EmployeeAssignments', label: 'Assignments' },
            { id: 'Availability', label: 'Availability Board' },
            { id: 'Attendance', label: 'Attendance' },
            { id: 'LeaveManagement', label: 'Leave Management' },
            { id: 'EmployeeDocuments', label: 'Documents' },
            { id: 'EmployeeKyc', label: 'KYC & Verification' },
            { id: 'Performance', label: 'Performance' },
            { id: 'EmployeeRatings', label: 'Ratings & Reviews' },
            { id: 'EmployeeEarnings', label: 'Earnings' },
            { id: 'Reports', label: 'Reports' },
            { id: 'EmployeeAnalytics', label: 'Analytics' },
            { id: 'EmployeeAuditLogs', label: 'Audit Logs' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              type="button"
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: activeTab === tab.id ? '2px solid #4f46e5' : '2px solid transparent',
                color: activeTab === tab.id ? '#4f46e5' : 'var(--muted)',
                fontWeight: '700',
                fontSize: '13px',
                padding: '10px 4px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                marginRight: '8px'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* Render sub-view component */}
      {renderContent()}
    </AdminShell>
  );
}
