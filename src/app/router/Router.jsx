import React from 'react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import RoleSelection from '../../pages/RoleSelection';
import Login from '../../pages/Login';
import ForgotPassword from '../../pages/ForgotPassword';
import OtpVerification from '../../pages/OtpVerification';
import ResetPassword from '../../pages/ResetPassword';
import PasswordResetSuccess from '../../pages/PasswordResetSuccess';
import Dashboard from '../../pages/Dashboard';
import RevenueDashboard from '../../pages/Dashboard/RevenueDashboard';
import BookingAnalytics from '../../pages/Dashboard/BookingAnalytics';
import UserAnalytics from '../../pages/Dashboard/UserAnalytics';
import PartnerAnalytics from '../../pages/Dashboard/PartnerAnalytics';
import ApprovalsDashboard from '../../pages/Dashboard/ApprovalsDashboard';
import SystemHealth from '../../pages/Dashboard/SystemHealth';
import ActivityCenter from '../../pages/Dashboard/ActivityCenter';
import MaterialRequests from '../../pages/MaterialRequests';
import NewMaterialRequest from '../../pages/MaterialRequests/NewRequest';
import MaterialRequestDetails from '../../pages/MaterialRequests/Details';
import ApprovalPipeline from '../../pages/MaterialRequests/Approvals';
import InventoryDashboard from '../../pages/MaterialRequests/InventoryDashboard';
import InventoryListing from '../../pages/MaterialRequests/InventoryListing';
import MaterialCategories from '../../pages/MaterialRequests/Categories';
import Restocking from '../../pages/MaterialRequests/Restocking';
import VendorRecommendation from '../../pages/MaterialRequests/VendorRecommendation';
import ConsumptionTracking from '../../pages/MaterialRequests/ConsumptionTracking';
import DeliveryTracking from '../../pages/MaterialRequests/DeliveryTracking';
import PurchaseOrders from '../../pages/MaterialRequests/PurchaseOrders';
import CostOptimization from '../../pages/MaterialRequests/CostOptimization';
import SupplierComparison from '../../pages/MaterialRequests/SupplierComparison';
import MaterialReports from '../../pages/MaterialRequests/MaterialReports';
import DisputeCenter from '../../pages/MaterialRequests/DisputeCenter';
import MaterialReturns from '../../pages/MaterialRequests/MaterialReturns';
import MaterialAnalytics from '../../pages/MaterialRequests/MaterialAnalytics';
import Partners from '../../pages/Partners';
import PartnerDetails from '../../pages/PartnerDetails';

import ApprovalQueue from '../../pages/ApprovalQueue';
import FraudCenter from '../../pages/FraudCenter';
import CommunicationsCenter from '../../pages/CommunicationsCenter';
import Settlements from '../../pages/Settlements';
import WalletDashboard from '../../pages/WalletManagement/WalletDashboard';
import WalletAnalytics from '../../pages/WalletManagement/WalletAnalytics';
import TransactionLedger from '../../pages/WalletManagement/TransactionLedger';
import FraudMonitoringCenter from '../../pages/WalletManagement/FraudMonitoringCenter';
import SettlementRequestQueue from '../../pages/WalletManagement/SettlementRequestQueue';
import FinancialReconciliation from '../../pages/WalletManagement/FinancialReconciliation';
import RefundApprovalQueue from '../../pages/WalletManagement/RefundApprovalQueue';
import TransactionDetail from '../../pages/WalletManagement/TransactionDetail';
import WalletAdjustmentCenter from '../../pages/WalletManagement/WalletAdjustmentCenter';
import PenaltyManagement from '../../pages/WalletManagement/PenaltyManagement';
import FrozenWalletListing from '../../pages/WalletManagement/FrozenWalletListing';
import WalletListing from '../../pages/WalletManagement/WalletListing';
import WalletDetails from '../../pages/WalletManagement/WalletDetails';
import WalletFreezeCenter from '../../pages/WalletManagement/WalletFreezeCenter';
import EarningsDashboard from '../../pages/WalletManagement/EarningsDashboard';
import UserWallets from '../../pages/WalletManagement/UserWallets';
import PartnerWallets from '../../pages/WalletManagement/PartnerWallets';
import SellerWallets from '../../pages/WalletManagement/SellerWallets';
import EmployeeWallets from '../../pages/WalletManagement/EmployeeWallets';
import SupplierPerformance from '../../pages/MaterialRequests/SupplierPerformance';
import ServiceCancellation from '../../pages/Bookings/ServiceCancellation';
import SlaCompliance from '../../pages/Bookings/SlaCompliance';
import OperationalReports from '../../pages/Analytics/OperationalReports';
import Analytics from '../../pages/Analytics';
import Users from '../../pages/Users';
import BlockedUsersPage from '../../pages/Users/BlockedUsersPage';
import BookingManagement from '../../pages/BookingManagement';
import Placeholder from '../../pages/Placeholder';
import Employees from '../../pages/Employees';
import KYCModule from '../../pages/KYC';
import Branches from '../../pages/Branches';
import BranchSchedule from '../../pages/Branches/BranchSchedule';
import BranchSuspend from '../../pages/Branches/BranchSuspend';

import BranchProfile from '../../pages/Branches/BranchProfile';
import ManagerAssignment from '../../pages/Branches/ManagerAssignment';
import CoverageMapping from '../../pages/Branches/CoverageMapping';
import BranchServices from '../../pages/Branches/BranchServices';
import BranchEmployees from '../../pages/Branches/BranchEmployees';
import BranchBookings from '../../pages/Branches/BranchBookings';
import BranchReviews from '../../pages/Branches/BranchReviews';
import BranchAuditLogs from '../../pages/Branches/BranchAuditLogs';
import ServiceAreas from '../../pages/ServiceAreas';
import ServiceAreaCoverage from '../../pages/Services/ServiceAreaCoverage';
import Services from '../../pages/Services';
import BusinessRegistry from '../../pages/Business';
import BusinessDetails from '../../pages/Business/BusinessDetails';
import BusinessRevenue from '../../pages/Business/BusinessRevenue';
import BusinessEmployees from '../../pages/Business/BusinessEmployees';
import ComplianceCenter from '../../pages/Business/ComplianceCenter';
// import FraudInvestigation from '../../pages/Business/FraudInvestigation';
import BusinessVerify from '../../pages/Business/BusinessVerify';
import BusinessSuspension from '../../pages/Business/BusinessSuspension';
import BusinessRisk from '../../pages/Business/BusinessRisk';
import AddBusiness from '../../pages/Business/AddBusiness';
import BusinessDocReview from '../../pages/Business/BusinessDocReview';
import BusinessTaxonomy from '../../pages/Business/BusinessTaxonomy';
import QuotationManagement from '../../pages/QuotationManagement';
import BankingSettlementManagement from '../../pages/BankingSettlementManagement';
import SOSManagement from '../../pages/SOSManagement';

// Dashboard sub-routes
import ChannelPerformance from '../../pages/Dashboard/ChannelPerformance';
import ConversionAnalytics from '../../pages/Dashboard/ConversionAnalytics';

// Notification Center sub-routes
import PushNotifications from '../../pages/NotificationCenter/PushNotifications';
import SmsCampaigns from '../../pages/NotificationCenter/SmsCampaigns';
import WhatsAppCampaigns from '../../pages/NotificationCenter/WhatsAppCampaigns';
import AutomationDashboard from '../../pages/NotificationCenter/AutomationDashboard';
import DeliveryReports from '../../pages/NotificationCenter/DeliveryReports';
import InAppNotifications from '../../pages/NotificationCenter/InAppNotifications';
import NotificationApprovalQueue from '../../pages/NotificationCenter/NotificationApprovalQueue';
import NotificationReports from '../../pages/NotificationCenter/NotificationReports';
import NotificationCostCenter from '../../pages/NotificationCenter/NotificationCostCenter';
import GlobalNotificationSettings from '../../pages/NotificationCenter/GlobalNotificationSettings';
import NotificationPreferenceManagement from '../../pages/NotificationCenter/NotificationPreferenceManagement';
import CommunicationLogs from '../../pages/NotificationCenter/CommunicationLogs';

// Support Center sub-routes
import SupportDashboard from '../../pages/SupportCenter/SupportDashboard';
import SupportOperationsList from '../../pages/SupportCenter/SupportOperationsList';
import EscalationCommandCenter from '../../pages/SupportCenter/EscalationCommandCenter';
import SlaMonitoring from '../../pages/SupportCenter/SlaMonitoring';
import CustomerSatisfaction from '../../pages/SupportCenter/CustomerSatisfaction';
import SupportTicketDetails from '../../pages/SupportCenter/SupportTicketDetails';
import SupportTicketCreate from '../../pages/SupportCenter/SupportTicketCreate';
import SupportKnowledgeBaseList from '../../pages/SupportCenter/SupportKnowledgeBaseList';
import SupportKbArticle from '../../pages/SupportCenter/SupportKbArticle';
import SupportFinancialResolutions from '../../pages/SupportCenter/SupportFinancialResolutions';
import SupportOperationsCenter from '../../pages/SupportCenter/SupportOperationsCenter';
import SupportOperationsOverview from '../../pages/SupportCenter/SupportOperationsOverview';
import SupportAgentWorkspace from '../../pages/SupportCenter/SupportAgentWorkspace';
import SupportAutomationRules from '../../pages/SupportCenter/SupportAutomationRules';
import SupportCommunicationsDashboard from '../../pages/SupportCenter/SupportCommunicationsDashboard';
import RevenueOverview from '../../pages/RevenueManagement/RevenueOverview';
import DailyRevenue from '../../pages/RevenueManagement/DailyRevenue';
import WeeklyRevenue from '../../pages/RevenueManagement/WeeklyRevenue';
import MonthlyRevenue from '../../pages/RevenueManagement/MonthyRevenue';
import YearlyRevenue from '../../pages/RevenueManagement/YearlyRevenue';
import PartnerRevenue from '../../pages/RevenueManagement/PartnerRevenue';
import SellerRevenue from '../../pages/RevenueManagement/SellerRevenue';
import BranchRevenue from '../../pages/RevenueManagement/BranchRevenue';
import EmployeeRevenue from '../../pages/RevenueManagement/EmployeeRevenue';
import ServiceRevenue from '../../pages/RevenueManagement/ServiceRevenue';
import ProfitAndLossRevenue from '../../pages/RevenueManagement/Profit&LossRevenue';
import Expenses from '../../pages/RevenueManagement/Expenses';
import RevenueForecasting from '../../pages/RevenueManagement/RevenueForecasting';
import Targets from '../../pages/RevenueManagement/Targets';
import ExecutiveDashboard from '../../pages/RevenueManagement/ExecutiveDashboard';
import BusinessIntelligence from '../../pages/RevenueManagement/BusinessIntelligence';
import FinancialHealth from '../../pages/RevenueManagement/FinancialHealth';
import LiveDashboard from '../../pages/LiveTracking/LiveDashboard';
import OperationalMap from '../../pages/LiveTracking/OperationalMap';
import ActiveJobs from '../../pages/LiveTracking/ActiveJobs';
import EmployeeTracking from '../../pages/LiveTracking/EmployeeTracking';
import RouteTracking from '../../pages/LiveTracking/RouteTracking';
import ETAMonitoring from '../../pages/LiveTracking/ETAmonitoring';
import DelayMonitoring from '../../pages/LiveTracking/DelayMonitoring';
import GeofenceManagement from '../../pages/LiveTracking/GeofenceManagement';
import GeofenceLogs from '../../pages/LiveTracking/GeofenceLogs';
import MovementHistory from '../../pages/LiveTracking/MovementHistory';
import Heatmaps from '../../pages/LiveTracking/Heatmaps';
import TrackingAnalytics from '../../pages/LiveTracking/TrackingAnalytics';
import SOStracking from '../../pages/LiveTracking/SOStracking';
import AllRoles from '../../pages/RoleSelection/AllRoles';
import CreateRole from '../../pages/RoleSelection/CreateRole';
import PermissionMatrix from '../../pages/RoleSelection/PermissionMatrix';
import ModuleAccess from '../../pages/RoleSelection/ModuleAccess';
import ActionPermissions from '../../pages/RoleSelection/ActionPermission';
import UserAccessLogs from '../../pages/RoleSelection/UserAccessLogs';
import RoleAuditLogs from '../../pages/RoleSelection/RoleAuditLogs';
import UserReviews from '../../pages/ReviewsandRatings/UserReviews';
import PartnerReviews from '../../pages/ReviewsandRatings/PartnerReviews';
import EmployeeReviews from '../../pages/ReviewsandRatings/EmployeeReviews';
import ReviewModeration from '../../pages/ReviewsandRatings/ReviewModeration';
import RatingAnalytics from '../../pages/ReviewsandRatings/RatingAnalytics';
import BusinessHeaderTabs from '../../pages/Business/BusinessHeaderTabs';
import BusinessReviews from '../../pages/Business/BusinessReviews';
import BusinessServices from '../../pages/Business/BusinessServices';
import FraudInvestigation from '../../pages/Business/FraudInvestigation';
const dynamicRoutePatterns = Object.values(ROUTES)
  .filter((route) => typeof route === 'string' && route.includes(':'))
  .map((route) => ({
    route,
    regex: new RegExp(`^${route.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/:id/g, '[^/]+')}$`)
  }));

function resolveCurrentRoute(route) {
  return dynamicRoutePatterns.find((item) => item.regex.test(route))?.route || route;
}

export function Router() {
  const { route } = useApp();
  const currentRoute = resolveCurrentRoute(route);

  switch (currentRoute) {
    case ROUTES.root:
    case ROUTES.roles:
      return <RoleSelection />;
    case ROUTES.login:
      return <Login />;
    case ROUTES.forgotPassword:
      return <ForgotPassword />;
    case ROUTES.otpVerification:
      return <OtpVerification />;
    case ROUTES.resetPassword:
      return <ResetPassword />;
    case ROUTES.passwordResetSuccess:
      return <PasswordResetSuccess />;
    case ROUTES.dashboard:
      return <Dashboard />;
    case ROUTES.partners:
      return <Partners />;
    case ROUTES.partnerDetails:
      return <PartnerDetails />;
    

      
    case ROUTES.approvalQueue:
      return <ApprovalQueue />;
    case ROUTES.communications:
      return <CommunicationsCenter />;
    case ROUTES.settlements:
      return <SettlementRequestQueue />;
    case ROUTES.users:
      return <Users />;
      
    // KYC Management routing
    case ROUTES.kyc:
    case ROUTES.kycPending:
    case ROUTES.kycApproved:
    case ROUTES.kycRejected:
    case ROUTES.kycReupload:
    case ROUTES.kycAadhaar:
    case ROUTES.kycPan:
    case ROUTES.kycGst:
    case ROUTES.kycDriving:
    case ROUTES.kycVoter:
    case ROUTES.kycSelfie:
    case ROUTES.kycFaceMatch:
    case ROUTES.kycVideo:
    case ROUTES.kycRisk:
    case ROUTES.kycManual:
    case ROUTES.kycAnalytics:
    case ROUTES.kycAuditLogs:
    case ROUTES.kycReviewers:
      return <KYCModule />;
      
    case ROUTES.business:
    case ROUTES.businessApproval:
      return <BusinessRegistry />;
    case ROUTES.businessDetails:
      return <BusinessDetails />;
    case ROUTES.businessReview:
      return <BusinessReview />;
    case ROUTES.businessVerify:
      return <BusinessVerify />;
    case ROUTES.businessSuspension:
      return <BusinessSuspension />;
    case ROUTES.businessRisk:
      return <BusinessRisk />;
    case ROUTES.addBusiness:
      return <AddBusiness />;
    case ROUTES.businessDocReview:
      return <BusinessDocReview />;
    case ROUTES.businessTaxonomy:
      return <BusinessTaxonomy />;
    case ROUTES.branches:
      return <Branches />;
    case ROUTES.branchPerformance:
      return <Branches defaultTab="Performance" />;
    case ROUTES.branchApproval:
      return <Branches defaultTab="ApprovalQueue" />;
    case ROUTES.branchAnalytics:
      return <Branches defaultTab="Analytics" />;
    case ROUTES.branchSchedule:
      return <BranchSchedule />;
    case ROUTES.branchSuspend:
      return <BranchSuspend />;
    case ROUTES.branchCompliance:
      return <Branches defaultTab="Compliance" />;

    case ROUTES.branchProfile:
      return <BranchProfile />;
    case ROUTES.branchManagerAssignment:
      return <ManagerAssignment />;
    case ROUTES.serviceAreas:
    case ROUTES.branchServiceAreas:
      return <ServiceAreas />;
    case ROUTES.branchCoverage:
      return <CoverageMapping />;
      
    // Services module & service areas mapping
    case ROUTES.serviceAreaCoverage:
      return <ServiceAreaCoverage />;
    case ROUTES.serviceAreasList:
      return <Services defaultTab="zones" />;
    case ROUTES.services:
      return <Services />;
      
    case ROUTES.employees:
      return <Employees />;
    case ROUTES.bookings:
      return <BookingManagement />;
    case ROUTES.liveTracking:
      return <Placeholder title="Live Tracking" activeTab="Live Tracking" />;
    case ROUTES.materials:
      return <Placeholder title="Materials" activeTab="Materials" />;
    case ROUTES.quotations:
      return <QuotationManagement />;
    case ROUTES.wallet:
      return <Placeholder title="Wallet" activeTab="Wallet" />;
    case ROUTES.banking:
      return <BankingSettlementManagement />;
    case ROUTES.revenue:
      return <Placeholder title="Revenue" activeTab="Revenue" />;

    case ROUTES.referrals:
      return <Placeholder title="Referrals" activeTab="Referrals" />;
    case ROUTES.notifications:
      return <Placeholder title="Notifications" activeTab="Notifications" />;
    case ROUTES.banners:
      return <Placeholder title="Banners" activeTab="Banners" />;
    case ROUTES.cms:
      return <Placeholder title="CMS" activeTab="CMS" />;
    case ROUTES.reviews:
      return <Placeholder title="Reviews" activeTab="Reviews" />;
    case ROUTES.sos:
      return <SOSManagement />;
    case ROUTES.support:
      return <SupportDashboard activeTab="Support Center" />;
    case ROUTES.settings:
      return <Placeholder title="Settings" activeTab="Settings" />;
    case ROUTES.performance:
      return <Employees />;
    case ROUTES.reports:
      return <Employees />;
    case ROUTES.attendance:
      return <Employees />;
    case ROUTES.leaveManagement:
      return <Employees />;

    // --- NEW MODULE SUB-ROUTES ---

    // Dashboard sub-routes
    case ROUTES.dashboardRevenue:
      return <RevenueDashboard activeTab="Dashboard" />;
    case ROUTES.dashboardBookings:
      return <BookingAnalytics activeTab="Dashboard" />;
    case ROUTES.dashboardUsers:
      return <UserAnalytics activeTab="Dashboard" />;
    case ROUTES.dashboardPartners:
      return <PartnerAnalytics activeTab="Dashboard" />;
    case ROUTES.dashboardApprovals:
      return <ApprovalsDashboard activeTab="Dashboard" />;
    case ROUTES.dashboardActivity:
      return <ActivityCenter activeTab="Dashboard" />;
    case ROUTES.dashboardSystemHealth:
      return <SystemHealth activeTab="Dashboard" />;
    case ROUTES.dashboardChannelPerformance:
      return <ChannelPerformance activeTab="Dashboard" />;
    case ROUTES.dashboardConversionAnalytics:
      return <ConversionAnalytics activeTab="Dashboard" />;

    // User Management sub-routes
    case ROUTES.userApprovals:
      return <Placeholder title="User Approvals" activeTab="User Management" />;
    case ROUTES.blockedUsers:
      return <BlockedUsersPage />;
    case ROUTES.userWallets:
      return <Placeholder title="User Wallets" activeTab="User Management" />;
    case ROUTES.userReferrals:
      return <Placeholder title="User Referrals" activeTab="User Management" />;
    case ROUTES.userDocuments:
      return <Placeholder title="User Documents" activeTab="User Management" />;
    case ROUTES.userComplaints:
      return <Placeholder title="User Complaints" activeTab="User Management" />;
    case ROUTES.userReviews:
      return <Placeholder title="User Reviews" activeTab="User Management" />;
    case ROUTES.userTimeline:
      return <Placeholder title="User Timeline" activeTab="User Management" />;
    case ROUTES.userActivityLogs:
      return <Placeholder title="User Activity Logs" activeTab="User Management" />;
    case ROUTES.userFraudMonitoring:
      return <Placeholder title="User Fraud Monitoring" activeTab="User Management" />;
    case ROUTES.userAuditLogs:
      return <Placeholder title="User Audit Logs" activeTab="User Management" />;

    // Partner Management sub-routes
    case ROUTES.ispPartners:
      return <Placeholder title="ISP Partners" activeTab="Partner Management" />;
    case ROUTES.bspPartners:
      return <Placeholder title="BSP Partners" activeTab="Partner Management" />;
    case ROUTES.businessSellers:
      return <Placeholder title="Business Sellers" activeTab="Partner Management" />;
    case ROUTES.partnerApprovals:
      return <Placeholder title="Partner Approvals" activeTab="Partner Management" />;
    case ROUTES.kycApprovals:
      return <Placeholder title="KYC Approvals" activeTab="Partner Management" />;
    case ROUTES.partnerServiceApprovals:
      return <Placeholder title="Service Approvals" activeTab="Partner Management" />;
    case ROUTES.branchApprovals:
      return <Placeholder title="Branch Approvals" activeTab="Partner Management" />;
    case ROUTES.partnerWallets:
      return <Placeholder title="Partner Wallets" activeTab="Partner Management" />;
    case ROUTES.partnerBanking:
      return <Placeholder title="Partner Banking" activeTab="Partner Management" />;
    case ROUTES.partnerEmployees:
      return <Placeholder title="Partner Employees" activeTab="Partner Management" />;
    case ROUTES.partnerBranches:
      return <Placeholder title="Partner Branches" activeTab="Partner Management" />;
    case ROUTES.partnerServices:
      return <Placeholder title="Partner Services" activeTab="Partner Management" />;
    case ROUTES.partnerReviews:
      return <Placeholder title="Partner Reviews" activeTab="Partner Management" />;
    case ROUTES.partnerRevenue:
      return <Placeholder title="Partner Revenue" activeTab="Partner Management" />;
    case ROUTES.partnerFraud:
      return <Placeholder title="Partner Fraud" activeTab="Partner Management" />;
    case ROUTES.partnerAuditLogs:
      return <Placeholder title="Partner Audit Logs" activeTab="Partner Management" />;

    // Business Management sub-routes
    case ROUTES.businessAll:
      return <Placeholder title="All Businesses" activeTab="Business Management" />;
    case ROUTES.businessGst:
      return <Placeholder title="GST Verification" activeTab="Business Management" />;
    case ROUTES.businessPan:
      return <Placeholder title="PAN Verification" activeTab="Business Management" />;
    case ROUTES.businessRegVerification:
      return <Placeholder title="Registration Verification" activeTab="Business Management" />;
    case ROUTES.businessOwnership:
      return <Placeholder title="Ownership Verification" activeTab="Business Management" />;
    case ROUTES.businessBranches:
      return <Placeholder title="Business Branches" activeTab="Business Management" />;
    case ROUTES.businessServices:
      return <BusinessServices/>
    case ROUTES.businessEmployees:
      return <BusinessEmployees/>
    case ROUTES.businessRevenue:
      return <BusinessRevenue/>
   
    case ROUTES.businessReviews:
      return <BusinessReviews/>
    case ROUTES.businessCompliance:
      return <ComplianceCenter/>
    case ROUTES.businessFraud:
      return <FraudInvestigation/>
    case ROUTES.businessAuditLogs:
      return <Placeholder title="Audit Logs" activeTab="Business Management" />;

    // Branch Management sub-routes
    case ROUTES.branchAll:
      return <Placeholder title="All Branches" activeTab="Branch Management" />;
    case ROUTES.branchServices:
      return <BranchServices />;
    case ROUTES.branchEmployees:
      return <BranchEmployees />;
    case ROUTES.branchBookings:
      return <BranchBookings />;
    case ROUTES.branchReviews:
      return <BranchReviews />;
    case ROUTES.branchAuditLogs:
      return <BranchAuditLogs />;

    // Service Management sub-routes
    case ROUTES.serviceCategories:
      return <Services defaultTab="categories" />;
    case ROUTES.serviceSubCategories:
      return <Services defaultTab="subcategories" />;
    case ROUTES.serviceAll:
      return <Services defaultTab="services" />;
    case ROUTES.serviceAdd:
      return <Services defaultTab="wizard" />;
    case ROUTES.serviceApprovals:
      return <Services defaultTab="approvals" />;
    case ROUTES.servicePricing:
      return <Services defaultTab="pricing" />;
    case ROUTES.serviceCommission:
      return <Services defaultTab="pricing" />;
    case ROUTES.servicePerformance:
      return <Services defaultTab="dashboard" />;
    case ROUTES.serviceAnalytics:
      return <Services defaultTab="comparison" />;
    case ROUTES.serviceFeatured:
      return <Services defaultTab="featured" />;
    case ROUTES.serviceMedia:
      return <Services defaultTab="media" />;
    case ROUTES.serviceAuditLogs:
      return <Services defaultTab="audit-logs" />;

    // Employee Management sub-routes
    case ROUTES.employeeAll:
      return <Employees defaultTab="Workforce" />;
    case ROUTES.employeeAvailability:
      return <Employees defaultTab="Availability" />;
    case ROUTES.branchManagers:
      return <Placeholder title="Branch Managers" activeTab="Employee Management" />;
    case ROUTES.employeeAssignments:
      return <Placeholder title="Assignments" activeTab="Employee Management" />;
    case ROUTES.employeeDocuments:
      return <Placeholder title="Employee Documents" activeTab="Employee Management" />;
    case ROUTES.employeeEarnings:
      return <Placeholder title="Earnings" activeTab="Employee Management" />;
    case ROUTES.employeeRatings:
      return <Placeholder title="Ratings & Reviews" activeTab="Employee Management" />;
    case ROUTES.employeeKyc:
      return <Placeholder title="Employee KYC" activeTab="Employee Management" />;
    case ROUTES.employeeAnalytics:
      return <Placeholder title="Employee Analytics" activeTab="Employee Management" />;
    case ROUTES.employeeAuditLogs:
      return <Placeholder title="Audit Logs" activeTab="Employee Management" />;

    // Booking Management sub-routes
    case ROUTES.bookingAll:
    case ROUTES.bookingPending:
    case ROUTES.bookingAssigned:
    case ROUTES.bookingAccepted:
    case ROUTES.bookingInProgress:
    case ROUTES.bookingMaterialPending:
    case ROUTES.bookingQuotationPending:
    case ROUTES.bookingOtpPending:
    case ROUTES.bookingCompleted:
    case ROUTES.bookingCancelled:
    case ROUTES.bookingCancellation:
    case ROUTES.bookingRefunded:
    case ROUTES.bookingEscalated:
    case ROUTES.bookingDisputed:
    case ROUTES.bookingAssignmentCenter:
    case ROUTES.bookingOtpVerification:
    case ROUTES.bookingCalendar:
    case ROUTES.bookingMap:
    case ROUTES.bookingPayments:
    case ROUTES.bookingInvoices:
    case ROUTES.bookingRefunds:
    case ROUTES.bookingSla:
    case ROUTES.bookingAnalytics:
    case ROUTES.bookingCommunications:
    case ROUTES.bookingReports:
    case ROUTES.bookingFraud:
    case ROUTES.bookingArchive:
      return <BookingManagement />;
   
    // Live Tracking sub-routes
    case ROUTES.liveDashboard:
      // return <Placeholder title="Live Dashboard" activeTab="Live Tracking" />;
      return <LiveDashboard/>
    case ROUTES.liveOpsMap:
     return <OperationalMap/>
    case ROUTES.liveActiveJobs:
    return <ActiveJobs/>
    case ROUTES.liveEmployeeTracking:
      return <EmployeeTracking/>
    case ROUTES.liveRouteTracking:
      return <RouteTracking/>
    case ROUTES.liveEta:
      return <ETAMonitoring />;
    case ROUTES.liveDelay:
      return <DelayMonitoring/>
    case ROUTES.liveGeofence:
      return <GeofenceManagement/>
    case ROUTES.liveGeofenceLogs:
      return <GeofenceLogs/>
    case ROUTES.liveHistory:
      return <MovementHistory/>
    case ROUTES.liveHeatmaps:
      return <Heatmaps/>;
    case ROUTES.liveSos:
      return <SOStracking/>
    case ROUTES.liveAnalytics:
      return <TrackingAnalytics/>

    // Material Management sub-routes
    case ROUTES.materialRequests:
      return <MaterialRequests />;
    case ROUTES.materialCreate:
      return <NewMaterialRequest />;
    case ROUTES.materialDetails:
      return <MaterialRequestDetails />;
    case ROUTES.materialApprovals:
      return <ApprovalPipeline />;
    case ROUTES.materialInventory:
      return <InventoryDashboard />;
    case ROUTES.materialListing:
      return <InventoryListing />;
    case ROUTES.materialCategories:
      return <MaterialCategories />;
    case ROUTES.materialRestocking:
      return <Restocking />;
    case ROUTES.materialVendors:
      return <VendorRecommendation />;
    case ROUTES.materialSupplierComparison:
      return <SupplierComparison />;
    case ROUTES.materialPurchaseOrders:
      return <PurchaseOrders />;
    case ROUTES.materialDelivery:
      return <DeliveryTracking />;
    case ROUTES.materialConsumption:
      return <ConsumptionTracking />;
    case ROUTES.materialReturns:
      return <MaterialReturns />;
    case ROUTES.materialSupplierPerformance:
      return <SupplierPerformance />;
    case ROUTES.materialAnalytics:
      return <MaterialAnalytics />;
    case ROUTES.materialReports:
      return <MaterialReports />;
    case ROUTES.materialDisputes:
      return <DisputeCenter />;
    case ROUTES.materialCostOptimization:
      return <CostOptimization />;

    // Quotation Management sub-routes
    case ROUTES.quotationSeller:
    case ROUTES.quotationCustomer:
    case ROUTES.quotationCustomerDetails:
    case ROUTES.quotationRfq:
    case ROUTES.quotationCreateRfq:
    case ROUTES.quotationDetails:
    case ROUTES.quotationApprovals:
    case ROUTES.quotationApprovalDetail:
    case ROUTES.quotationComparison:
    case ROUTES.quotationWinner:
    case ROUTES.quotationNegotiation:
    case ROUTES.quotationRevisions:
    case ROUTES.quotationExpired:
    case ROUTES.quotationRejected:
    case ROUTES.quotationGeneratePo:
    case ROUTES.quotationOrders:
    case ROUTES.quotationOrderDetails:
    case ROUTES.quotationCommunication:
    case ROUTES.quotationCostOptimization:
    case ROUTES.quotationSellerPerformance:
    case ROUTES.quotationAnalytics:
    case ROUTES.quotationPricingAnalytics:
    case ROUTES.quotationDisputes:
    case ROUTES.quotationHighValue:
    case ROUTES.quotationBulkApproval:
    case ROUTES.quotationReports:
      return <QuotationManagement />;

    // Wallet Management sub-routes
    case ROUTES.walletDashboard:
    case ROUTES.wallet:
      return <WalletDashboard />;
    case ROUTES.walletAll:
      return <WalletListing defaultType="All" />;
    case ROUTES.walletUser:
      return <UserWallets />;
    case ROUTES.walletPartner:
      return <PartnerWallets />;
    case ROUTES.walletSeller:
      return <SellerWallets />;
    case ROUTES.walletEmployee:
      return <EmployeeWallets />;
    case ROUTES.walletTransactions:
      return <TransactionLedger />;
    case ROUTES.walletRefunds:
      return <RefundApprovalQueue />;
    case ROUTES.walletPenalties:
      return <PenaltyManagement />;
    case ROUTES.walletFreeze:
      return <FrozenWalletListing />;
    case ROUTES.walletFraud:
      return <FraudMonitoringCenter />;
    case ROUTES.walletAnalytics:
      return <WalletAnalytics />;
    case ROUTES.walletReconciliation:
      return <FinancialReconciliation />;
    case ROUTES.walletEarnings:
      return <EarningsDashboard />;
    case ROUTES.walletDetails:
      return <WalletDetails />;
    case ROUTES.transactionDetail:
      return <TransactionDetail />;
    case ROUTES.walletAdjustment:
      return <WalletAdjustmentCenter />;
    case ROUTES.walletFreezeCenter:
      return <WalletFreezeCenter />;
    case ROUTES.walletUnfreezeApproval:
      return <WalletFreezeCenter />;
    case ROUTES.refundDashboard:
      return <RefundApprovalQueue />;
    case ROUTES.penaltyDetail:
      return <PenaltyManagement />;
    case ROUTES.walletSettlementDashboard:
    case ROUTES.walletSettlementDetail:
      return <SettlementRequestQueue />;
    case ROUTES.riskInvestigation:
      return <FraudMonitoringCenter />;
    case ROUTES.chargebackManagement:
      return <WalletAnalytics activeTab="Wallet Management" />;
    case ROUTES.walletReports:
      return <Placeholder title="Wallet Reports" activeTab="Wallet Management" />;
    case ROUTES.walletCommunication:
      return <Placeholder title="Wallet Communication Center" activeTab="Wallet Management" />;

    // Banking & Settlements sub-routes
    case ROUTES.bankingDashboard:
    case ROUTES.bankAccounts:
    case ROUTES.bankAccountDetails:
    case ROUTES.bankAccountAdd:
    case ROUTES.bankAccountEdit:
    case ROUTES.bankBeneficiaries:
    case ROUTES.bankUpi:
    case ROUTES.bankVerificationQueue:
    case ROUTES.bankVerificationDetail:
    case ROUTES.withdrawalDashboard:
    case ROUTES.withdrawalRequests:
    case ROUTES.withdrawalDetail:
    case ROUTES.withdrawalApprovals:
    case ROUTES.settlementDashboard:
    case ROUTES.settlementQueue:
    case ROUTES.settlementDetail:
    case ROUTES.bulkSettlements:
    case ROUTES.failedSettlements:
    case ROUTES.bankingReconciliation:
    case ROUTES.reconciliationDetails:
    case ROUTES.payoutProcessing:
    case ROUTES.financeApprovals:
    case ROUTES.bankingAnalytics:
    case ROUTES.bankPerformance:
    case ROUTES.bankingReports:
    case ROUTES.bankingSettings:
      return <BankingSettlementManagement />;

    // Revenue Management sub-routes
    case ROUTES.revenueDashboard:
      return <RevenueDashboard activeTab="Revenue Management" />;
    case ROUTES.revenueOverview:
      // return <Placeholder title="Revenue Overview" activeTab="Revenue Management" />;
      return <RevenueOverview/>
    case ROUTES.revenueDaily:
      // return <Placeholder title="Daily Revenue" activeTab="Revenue Management" />;
      return <DailyRevenue/>
    case ROUTES.revenueWeekly:
      // return <Placeholder title="Weekly Revenue" activeTab="Revenue Management" />;
      return <WeeklyRevenue/>
    case ROUTES.revenueMonthly:
      // return <Placeholder title="Monthly Revenue" activeTab="Revenue Management" />;
      return <MonthlyRevenue/>
    case ROUTES.revenueYearly:
      // return <Placeholder title="Yearly Revenue" activeTab="Revenue Management" />;
      return <YearlyRevenue/>
    case ROUTES.revenuePartner:
      // return <Placeholder title="Partner Revenue" activeTab="Revenue Management" />;
      return <PartnerRevenue/>
    case ROUTES.revenueSeller:
      // return <Placeholder title="Seller Revenue" activeTab="Revenue Management" />;
      return <SellerRevenue/>
    case ROUTES.revenueBranch:
      return <BranchRevenue/>
    case ROUTES.revenueEmployee:
      return <EmployeeRevenue/>
    case ROUTES.revenueService:
    return <ServiceRevenue/>
    case ROUTES.revenueProfitLoss:
      return <ProfitAndLossRevenue/>
    case ROUTES.revenueExpenses:
     return <Expenses/>
    case ROUTES.revenueForecasting:
     return <RevenueForecasting/>
    case ROUTES.revenueTargets:
    return <Targets/>
    case ROUTES.revenueExecutive:
     return <ExecutiveDashboard/>
    case ROUTES.revenueBI:
      return <BusinessIntelligence/>
    case ROUTES.revenueHealth:
     return <FinancialHealth/>

    // Referral Management sub-routes
    case ROUTES.referralDashboard:
      return <Placeholder title="Referral Dashboard" activeTab="Referral Management" />;
    case ROUTES.referralListing:
      return <Placeholder title="Referral Listing" activeTab="Referral Management" />;
    case ROUTES.referralCampaignDashboard:
      return <Placeholder title="Campaign Dashboard" activeTab="Referral Management" />;
    case ROUTES.referralCampaignListing:
      return <Placeholder title="Campaign Listing" activeTab="Referral Management" />;
    case ROUTES.referralCreateCampaign:
      return <Placeholder title="Create Campaign" activeTab="Referral Management" />;
    case ROUTES.referralRewardApprovals:
      return <Placeholder title="Reward Approval Queue" activeTab="Referral Management" />;
    case ROUTES.referralRewardSettlements:
      return <Placeholder title="Reward Settlements" activeTab="Referral Management" />;
    case ROUTES.referralConversionAnalytics:
      return <Placeholder title="Conversion Analytics" activeTab="Referral Management" />;
    case ROUTES.referralSources:
      return <Placeholder title="Referral Sources" activeTab="Referral Management" />;
    case ROUTES.referralLeaderboard:
      return <Placeholder title="Leaderboard" activeTab="Referral Management" />;
    case ROUTES.referralFraud:
      return <Placeholder title="Referral Fraud Detection" activeTab="Referral Management" />;
    case ROUTES.referralInvestigations:
      return <Placeholder title="Investigations" activeTab="Referral Management" />;
    case ROUTES.referralCoupons:
      return <Placeholder title="Coupon Management" activeTab="Referral Management" />;
    case ROUTES.referralQr:
      return <Placeholder title="QR Management" activeTab="Referral Management" />;

    // Notification Center sub-routes
    case ROUTES.notificationsPush:
      return <PushNotifications activeTab="Notification Center" />;
    case ROUTES.notificationsSms:
      return <SmsCampaigns activeTab="Notification Center" />;
    case ROUTES.notificationsWhatsapp:
      return <WhatsAppCampaigns activeTab="Notification Center" />;
    case ROUTES.notificationsEmail:
      return <Placeholder title="Email Campaigns" activeTab="Notification Center" />;
    case ROUTES.notificationsTemplates:
      return <Placeholder title="Notification Templates" activeTab="Notification Center" />;
    case ROUTES.notificationsAudience:
      return <Placeholder title="Audience Segments" activeTab="Notification Center" />;
    case ROUTES.notificationsScheduled:
      return <Placeholder title="Scheduled Campaigns" activeTab="Notification Center" />;
    case ROUTES.notificationsAutomation:
      return <AutomationDashboard activeTab="Notification Center" />;
    case ROUTES.notificationsDelivery:
      return <DeliveryReports activeTab="Notification Center" />;
    case ROUTES.notificationsInApp:
      return <InAppNotifications activeTab="Notification Center" />;
    case ROUTES.notificationsApprovalQueue:
      return <NotificationApprovalQueue activeTab="Notification Center" />;
    case ROUTES.notificationsReports:
      return <NotificationReports activeTab="Notification Center" />;
    case ROUTES.notificationsNotificationCostCenter:
      return <NotificationCostCenter activeTab="Notification Center" />;
    case ROUTES.notificationsGlobalNotifications:
      return <GlobalNotificationSettings activeTab="Notification Center" />;
    case ROUTES.notificationsNotificationPreferences:
      return <NotificationPreferenceManagement activeTab="Notification Center" />;
    case ROUTES.notificationsCommunicationLogs:
      return <CommunicationLogs activeTab="Notification Center" />;

    // Banner Management sub-routes
    case ROUTES.bannersHomepage:
      return <Placeholder title="Homepage Banners" activeTab="Banner Management" />;
    case ROUTES.bannersOffer:
      return <Placeholder title="Offer Banners" activeTab="Banner Management" />;
    case ROUTES.bannersCategory:
      return <Placeholder title="Category Banners" activeTab="Banner Management" />;
    case ROUTES.bannersPopup:
      return <Placeholder title="Popup Banners" activeTab="Banner Management" />;
    case ROUTES.bannersScheduling:
      return <Placeholder title="Banner Scheduling" activeTab="Banner Management" />;
    case ROUTES.bannersAnalytics:
      return <Placeholder title="Banner Analytics" activeTab="Banner Management" />;

    // CMS Management sub-routes
    case ROUTES.cmsAboutUs:
      return <Placeholder title="About Us" activeTab="CMS Management" />;
    case ROUTES.cmsTerms:
      return <Placeholder title="Terms & Conditions" activeTab="CMS Management" />;
    case ROUTES.cmsPrivacy:
      return <Placeholder title="Privacy Policy" activeTab="CMS Management" />;
    case ROUTES.cmsRefund:
      return <Placeholder title="Refund Policy" activeTab="CMS Management" />;
    case ROUTES.cmsContactUs:
      return <Placeholder title="Contact Us" activeTab="CMS Management" />;
    case ROUTES.cmsFaqs:
      return <Placeholder title="FAQs" activeTab="CMS Management" />;
    case ROUTES.cmsBlogs:
      return <Placeholder title="Blogs" activeTab="CMS Management" />;
    case ROUTES.cmsSeo:
      return <Placeholder title="SEO Settings" activeTab="CMS Management" />;

    // Reviews & Ratings sub-routes
    case ROUTES.reviewsUser:
      return <UserReviews/>
    case ROUTES.reviewsPartner:
      return <PartnerReviews/>
    case ROUTES.reviewsEmployee:
      return <EmployeeReviews/>
    case ROUTES.reviewsModeration:
      return <ReviewModeration/>
    case ROUTES.reviewsAnalytics:
      return <RatingAnalytics/>

    // SOS Management sub-routes
    case ROUTES.sosDashboard:
    case ROUTES.sosActive:
    case ROUTES.sosDetails:
    case ROUTES.sosDispatch:
    case ROUTES.sosResolved:
    case ROUTES.sosEscalated:
    case ROUTES.sosTracking:
    case ROUTES.sosIncidentReports:
    case ROUTES.sosResponseQueue:
    case ROUTES.sosCategories:
    case ROUTES.sosContacts:
    case ROUTES.sosCommunication:
    case ROUTES.sosResources:
    case ROUTES.sosInvestigationCenter:
    case ROUTES.sosHeatmap:
    case ROUTES.sosIncidentReportDetails:
    case ROUTES.sosResolution:
    case ROUTES.sosPerformance:
    case ROUTES.sosAnalytics:
    case ROUTES.sosFraud:
    case ROUTES.sosInvestigation:
    case ROUTES.sosReports:
    case ROUTES.sosSettings:
    case ROUTES.sosAuthority:
    case ROUTES.sosAudit:
    case ROUTES.sosCommandCenter:
      return <SOSManagement />;

    // Support Center sub-routes
    case ROUTES.supportAll:
      return <SupportOperationsList activeTab="Support Center" />;
    case ROUTES.supportOpen:
      return <SupportOperationsList activeTab="Support Center" defaultFilter="open" />;
    case ROUTES.supportInProgress:
      return <SupportOperationsList activeTab="Support Center" defaultFilter="in-progress" />;
    case ROUTES.supportEscalated:
      return <EscalationCommandCenter activeTab="Support Center" />;
    case ROUTES.supportClosed:
      return <SupportOperationsList activeTab="Support Center" defaultFilter="closed" />;
    case ROUTES.supportBookingIssues:
      return <SupportOperationsList activeTab="Support Center" defaultFilter="bookings" />;
    case ROUTES.supportPaymentIssues:
      return <SupportOperationsList activeTab="Support Center" defaultFilter="payments" />;
    case ROUTES.supportWalletIssues:
      return <SupportOperationsList activeTab="Support Center" defaultFilter="wallet" />;
    case ROUTES.supportTechnicalIssues:
      return <SupportOperationsList activeTab="Support Center" defaultFilter="technical" />;
    case ROUTES.supportKycIssues:
      return <SupportOperationsList activeTab="Support Center" defaultFilter="kyc" />;
    case ROUTES.supportSla:
      return <SlaMonitoring activeTab="Support Center" />;
    case ROUTES.supportAnalytics:
      return <CustomerSatisfaction activeTab="Support Center" />;
    case ROUTES.supportDetails:
      return <SupportTicketDetails activeTab="Support Center" />;
    case ROUTES.supportCreate:
      return <SupportTicketCreate activeTab="Support Center" />;
    case ROUTES.supportKb:
      return <SupportKnowledgeBaseList activeTab="Support Center" />;
    case ROUTES.supportKbCreate:
      return <SupportKbArticle activeTab="Support Center" />;
    case ROUTES.supportFinancial:
      return <SupportFinancialResolutions activeTab="Support Center" />;
    case ROUTES.supportOpsDashboard:
      return <SupportOperationsCenter activeTab="Support Center" />;
    case ROUTES.supportOverview:
      return <SupportOperationsOverview activeTab="Support Center" />;
    case ROUTES.supportAgentWorkspace:
      return <SupportAgentWorkspace activeTab="Support Center" />;
    case ROUTES.supportAutomation:
      return <SupportAutomationRules activeTab="Support Center" />;
    case ROUTES.supportCommunications:
      return <SupportCommunicationsDashboard activeTab="Support Center" />;

    // Fraud Management routing cases
    case ROUTES.fraudCenter:
    case ROUTES.fraudDashboard:
    case ROUTES.fraudCases:
    case ROUTES.fraudCaseDetails:
    case ROUTES.fraudRiskMonitoring:
    case ROUTES.fraudUser:
    case ROUTES.fraudPartner:
    case ROUTES.fraudEmployee:
    case ROUTES.fraudWallet:
    case ROUTES.fraudPayment:
    case ROUTES.fraudReferral:
    case ROUTES.fraudKyc:
    case ROUTES.fraudDevice:
    case ROUTES.fraudIp:
    case ROUTES.fraudGeo:
    case ROUTES.fraudBooking:
    case ROUTES.fraudInvestigations:
    case ROUTES.fraudWorkspace:
    case ROUTES.fraudAlerts:
    case ROUTES.fraudRisk:
    case ROUTES.fraudCompliance:
    case ROUTES.fraudAml:
    case ROUTES.fraudAnalytics:
    case ROUTES.fraudHeatmap:
    case ROUTES.fraudReports:
    case ROUTES.fraudResolution:
    case ROUTES.blacklistManagement:
    case ROUTES.whitelistManagement:
    case ROUTES.fraudAutomation:
    case ROUTES.fraudCommunication:
    case ROUTES.fraudAudit:
    case ROUTES.fraudExecutive:
    case ROUTES.fraudAssignment:
    case ROUTES.fraudRecovery:
    case ROUTES.fraudIntegrations:
    case ROUTES.fraudSettings:
      return <FraudCenter />;

    // Reports & Analytics landing and sub-routes
    case ROUTES.reportsOperational:
      return <OperationalReports />;
    case ROUTES.analytics:
    case ROUTES.reportsBooking:
    case ROUTES.reportsUser:
    case ROUTES.reportsPartner:
    case ROUTES.reportsEmployee:
    case ROUTES.reportsFinancial:
    case ROUTES.reportsRevenue:
    case ROUTES.reportsWallet:
    case ROUTES.reportsSettlement:
    case ROUTES.reportsMarketing:
    case ROUTES.reportsReferral:
    case ROUTES.reportsCampaign:
    case ROUTES.exportCenter:
    case ROUTES.pdfExports:
    case ROUTES.excelExports:
    case ROUTES.csvExports:
      return <Analytics />;

    // Role & Permission admin sub-routes
    case ROUTES.rolePermissions:
      return <AllRoles/>;
    case ROUTES.createRole:
      return <CreateRole/>;
    case ROUTES.permissionMatrix:
      return <PermissionMatrix/>
    case ROUTES.moduleAccess:
      return <ModuleAccess/>
    case ROUTES.actionPermissions:
      return <ActionPermissions/>
    case ROUTES.userAccessLogs:
      return <UserAccessLogs/>
    case ROUTES.roleAuditLogs:
      return <RoleAuditLogs/>

    // Settings sub-routes
    case ROUTES.settingsPlatformGeneral:
      return <Placeholder title="Platform General Settings" activeTab="Settings" />;
    case ROUTES.settingsPlatformConfig:
      return <Placeholder title="Platform Configuration" activeTab="Settings" />;
    case ROUTES.settingsFinancialCommission:
      return <Placeholder title="Commission Settings" activeTab="Settings" />;
    case ROUTES.settingsFinancialTax:
      return <Placeholder title="Tax Settings" activeTab="Settings" />;
    case ROUTES.settingsFinancialWallet:
      return <Placeholder title="Wallet Settings" activeTab="Settings" />;
    case ROUTES.settingsFinancialSettlement:
      return <Placeholder title="Settlement Settings" activeTab="Settings" />;
    case ROUTES.settingsIntegrationPayment:
      return <Placeholder title="Payment Gateway Integration" activeTab="Settings" />;
    case ROUTES.settingsIntegrationSms:
      return <Placeholder title="SMS Gateway Integration" activeTab="Settings" />;
    case ROUTES.settingsIntegrationWhatsapp:
      return <Placeholder title="WhatsApp API Integration" activeTab="Settings" />;
    case ROUTES.settingsIntegrationEmail:
      return <Placeholder title="Email SMTP Integration" activeTab="Settings" />;
    case ROUTES.settingsIntegrationGoogleMaps:
      return <Placeholder title="Google Maps API Integration" activeTab="Settings" />;
    case ROUTES.settingsSecurityGeneral:
      return <Placeholder title="Security Settings" activeTab="Settings" />;
    case ROUTES.settingsSecurityPassword:
      return <Placeholder title="Password Policies" activeTab="Settings" />;
    case ROUTES.settingsSecuritySession:
      return <Placeholder title="Session Management" activeTab="Settings" />;
    case ROUTES.settingsSecurityAudit:
      return <Placeholder title="Audit Logs" activeTab="Settings" />;
    case ROUTES.settingsSystemBackup:
      return <Placeholder title="Backup Management" activeTab="Settings" />;
    case ROUTES.settingsSystemMaintenance:
      return <Placeholder title="Maintenance Mode" activeTab="Settings" />;
    case ROUTES.settingsSystemLogs:
      return <Placeholder title="System Logs" activeTab="Settings" />;

    default:
      return <RoleSelection />;
  }
}
