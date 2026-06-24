import React, { useEffect, useMemo, useState } from 'react';
import {
  Ban,
  CheckCircle2,
  Edit3,
  Eye,
  RotateCcw,
  ShieldAlert,
  UserCheck,
  Users as UsersIcon,
  UserX
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';
import KpiCard from '../../features/dashboard/KpiCard';
import { ROUTES } from '../../config/routes';
import { useApp } from '../../hooks/useApp';
import { usersMockData } from './usersMockData';

import UserDetailsPage from './UserDetailsPage';
import UserEditModal from './UserEditModal';
import UserReviewsPage from './UserReviewsPage';

const statusOptions = ['All', 'Active', 'Suspended', 'Blocked'];

const formatDate = (value) =>
  new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(new Date(value));

function normalize(value) {
  return value.trim().toLowerCase();
}

function EmptyState() {
  return (
    <tr>
      <td colSpan="6" className="user-management-empty-state">
        No users found matching the selected filters.
      </td>
    </tr>
  );
}

export default function Users() {
  const { route, navigate } = useApp();
  const [users, setUsers] = useState(usersMockData);
  const [filters, setFilters] = useState({
    mobile: '',
    email: '',
    status: 'All',
    registrationDate: ''
  });
  const [selectedUserId, setSelectedUserId] = useState(null);

  const [editingUser, setEditingUser] = useState(null);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    setSelectedUserId(null);
    setEditingUser(null);

    setFilters((current) => ({
      ...current,
      status: route === ROUTES.blockedUsers ? 'Blocked' : 'All'
    }));
  }, [route]);

  const summary = useMemo(() => ({
    total: users.length,
    active: users.filter((user) => user.status === 'Active').length,
    suspended: users.filter((user) => user.status === 'Suspended').length,
    blocked: users.filter((user) => user.status === 'Blocked').length
  }), [users]);

  const filteredUsers = useMemo(() => {
    const mobileQuery = normalize(filters.mobile);
    const emailQuery = normalize(filters.email);

    return users.filter((user) => {
      const matchesMobile = !mobileQuery || normalize(user.mobile).includes(mobileQuery);
      const matchesEmail = !emailQuery || normalize(user.email).includes(emailQuery);
      const matchesStatus = filters.status === 'All' || user.status === filters.status;
      const matchesDate = !filters.registrationDate || user.registrationDate === filters.registrationDate;

      return matchesMobile && matchesEmail && matchesStatus && matchesDate;
    });
  }, [filters, users]);

  const showFeedback = (message) => {
    setFeedback(message);
    window.setTimeout(() => setFeedback(''), 2200);
  };

  const updateFilter = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      mobile: '',
      email: '',
      status: 'All',
      registrationDate: ''
    });
  };

  const updateUserStatus = (user, status) => {
    if (user.status === status) {
      showFeedback(`${user.name} is already ${status.toLowerCase()}.`);
      return;
    }

    const confirmed = window.confirm(`Change ${user.name}'s status to ${status}?`);
    if (!confirmed) return;

    setUsers((current) =>
      current.map((item) => (item.id === user.id ? { ...item, status } : item))
    );
    showFeedback(`${user.name} status updated to ${status}.`);
  };

  const saveEditedUser = (updatedUser) => {
    setUsers((current) =>
      current.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setEditingUser(null);
    showFeedback(`${updatedUser.name} updated successfully.`);
  };



  const selectedUser = selectedUserId ? users.find((user) => user.id === selectedUserId) : null;

  const kpiCardsData = [
    { title: 'Total Users', value: summary.total, topLabel: 'All', topLabelClass: 'gray-badge', icon: UsersIcon },
    { title: 'Active Users', value: summary.active, topLabel: 'Live', topLabelClass: 'green-text', icon: UserCheck },
    { title: 'Suspended Users', value: summary.suspended, topLabel: 'Review', topLabelClass: 'orange-badge', icon: ShieldAlert },
    { title: 'Blocked Users', value: summary.blocked, topLabel: 'Blocked', topLabelClass: 'red-text', icon: UserX }
  ];

  return (
    <AdminShell
      activeTab="User Management"
      searchPlaceholder="Search bookings, users, or partners..."
    >
      {feedback && (
        <div className="user-management-feedback" role="status">
          <CheckCircle2 size={16} />
          <span>{feedback}</span>
        </div>
      )}

      {selectedUser ? (
        <UserDetailsPage
          user={selectedUser}
          onBack={() => setSelectedUserId(null)}
          onEdit={() => setEditingUser(selectedUser)}
          onStatusChange={updateUserStatus}
        />
      ) : (
        <>
          <div className="partners-page-header user-management-page-header">
            <div>
              <h1 className="page-title">User Management</h1>
              <p className="page-subtitle">Manage customer accounts, statuses, activity, wallet, and documents.</p>
            </div>

          </div>

          <section className="kpi-grid user-management-kpis">
            {kpiCardsData.map((kpi) => (
              <KpiCard key={kpi.title} {...kpi} />
            ))}
          </section>

          <section className="panel partner-directory-panel user-management-directory-panel">
            <div className="directory-panel-header user-management-directory-header">
              <h2>Customer Accounts</h2>
              <span className="footer-results-text">Showing {filteredUsers.length} of {users.length} users</span>
            </div>

            <div className="user-management-filter-bar">
              <label>
                <span>Mobile</span>
                <input
                  value={filters.mobile}
                  onChange={(event) => updateFilter('mobile', event.target.value)}
                  placeholder="Search by mobile"
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  value={filters.email}
                  onChange={(event) => updateFilter('email', event.target.value)}
                  placeholder="Search by email"
                />
              </label>
              <label>
                <span>Status</span>
                <select value={filters.status} onChange={(event) => updateFilter('status', event.target.value)}>
                  {statusOptions.map((status) => (
                    <option value={status} key={status}>{status}</option>
                  ))}
                </select>
              </label>
              <label>
                <span>Registration Date</span>
                <input
                  type="date"
                  value={filters.registrationDate}
                  onChange={(event) => updateFilter('registrationDate', event.target.value)}
                />
              </label>
              <button className="secondary-action-btn user-management-reset-btn" type="button" onClick={resetFilters}>
                <RotateCcw size={16} />
                <span>Reset</span>
              </button>
            </div>

            <div className="table-wrap">
              <table className="partner-table user-management-table">
                <thead>
                  <tr>
                    <th>NAME</th>
                    <th>MOBILE</th>
                    <th>EMAIL</th>
                    <th>STATUS</th>
                    <th>REGISTRATION DATE</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.length === 0 ? (
                    <EmptyState />
                  ) : (
                    filteredUsers.map((user) => (
                      <tr key={user.id}>
                        <td className="partner-name-cell">
                          <div className="partner-info-wrap">
                            <span className="user-management-avatar">{user.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}</span>
                            <div className="partner-name-meta">
                              <span className="partner-name-txt">{user.name}</span>
                              <span className="partner-est-txt">{user.id}</span>
                            </div>
                          </div>
                        </td>
                        <td>{user.mobile}</td>
                        <td>{user.email}</td>
                        <td>
                          <span className={`status-badge ${user.status.toLowerCase()}`}>{user.status}</span>
                        </td>
                        <td>{formatDate(user.registrationDate)}</td>
                        <td>
                          <div className="user-management-actions">
                            <button className="user-management-action-btn" type="button" title="View" onClick={() => setSelectedUserId(user.id)}>
                              <Eye size={15} />
                              <span>View</span>
                            </button>
                            <button className="user-management-action-btn" type="button" title="Edit" onClick={() => setEditingUser(user)}>
                              <Edit3 size={15} />
                              <span>Edit</span>
                            </button>
                            <button className="user-management-action-btn warning" type="button" title="Suspend" onClick={() => updateUserStatus(user, 'Suspended')}>
                              <ShieldAlert size={15} />
                              <span>Suspend</span>
                            </button>
                            <button className="user-management-action-btn danger" type="button" title="Block" onClick={() => updateUserStatus(user, 'Blocked')}>
                              <Ban size={15} />
                              <span>Block</span>
                            </button>
                            <button className="user-management-action-btn success" type="button" title="Activate" onClick={() => updateUserStatus(user, 'Active')}>
                              <CheckCircle2 size={15} />
                              <span>Activate</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="directory-table-footer">
              <span className="footer-results-text">Frontend-only mock data, no API calls made.</span>
            </div>
          </section>
        </>
      )}
      <UserEditModal user={editingUser} onClose={() => setEditingUser(null)} onSave={saveEditedUser} />
    </AdminShell>
  );
}
