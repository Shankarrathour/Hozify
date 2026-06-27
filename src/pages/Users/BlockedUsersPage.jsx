import React, { useMemo, useState } from 'react';
import { Ban, CheckCircle2, Eye, Search, ShieldAlert, UserX } from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';
import KpiCard from '../../features/dashboard/KpiCard';
import { usersMockData } from './usersMockData';
import UserDetailsPage from './UserDetailsPage';
import UserEditModal from './UserEditModal';

const formatDate = (value) =>
  new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(new Date(value));

export default function BlockedUsersPage() {
  const [users, setUsers] = useState(usersMockData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [feedback, setFeedback] = useState('');

  const blockedUsers = useMemo(
    () => users.filter((user) => user.status === 'Blocked'),
    [users]
  );

  const filteredBlockedUsers = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const rows = query
      ? blockedUsers.filter((user) =>
          user.name.toLowerCase().includes(query) ||
          user.mobile.toLowerCase().includes(query)
        )
      : blockedUsers;

    return [...rows].sort((first, second) => {
      if (!query) return first.name.localeCompare(second.name);

      const firstNameStarts = first.name.toLowerCase().startsWith(query) ? 0 : 1;
      const secondNameStarts = second.name.toLowerCase().startsWith(query) ? 0 : 1;
      if (firstNameStarts !== secondNameStarts) return firstNameStarts - secondNameStarts;

      return first.name.localeCompare(second.name);
    });
  }, [blockedUsers, searchQuery]);

  const blockedWalletBalance = blockedUsers.reduce(
    (total, user) => total + user.wallet.balance,
    0
  );

  const selectedUser = selectedUserId ? users.find((user) => user.id === selectedUserId) : null;

  const showFeedback = (message) => {
    setFeedback(message);
    window.setTimeout(() => setFeedback(''), 2200);
  };

  const updateUserStatus = (user, status) => {
    if (user.status === status) {
      showFeedback(`${user.name} is already ${status.toLowerCase()}.`);
      return;
    }

    setUsers((current) =>
      current.map((item) => (item.id === user.id ? { ...item, status } : item))
    );
    setSelectedUserId(null);
    showFeedback(`${user.name} status updated to ${status}.`);
  };

  const saveEditedUser = (updatedUser) => {
    setUsers((current) =>
      current.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setEditingUser(null);
    showFeedback(`${updatedUser.name} updated successfully.`);
  };

  const kpiCardsData = [
    { title: 'Blocked Users', value: blockedUsers.length, topLabel: 'Restricted', topLabelClass: 'red-text', icon: UserX },
    { title: 'Frozen Wallet Value', value: `Rs ${blockedWalletBalance.toLocaleString('en-IN')}`, topLabel: 'Wallet', topLabelClass: 'gray-badge', icon: Ban },
    { title: 'Cancelled Bookings', value: blockedUsers.reduce((total, user) => total + user.bookingHistory.filter((booking) => booking.status === 'Cancelled').length, 0), topLabel: 'Risk', topLabelClass: 'orange-badge', icon: ShieldAlert }
  ];

  return (
    <AdminShell
      activeTab="User Management"
      headerTitle="Blocked Users Console"
      searchPlaceholder="Search blocked users..."
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
          <h1 className="page-title">Blocked Users</h1>
          <p className="page-subtitle">Review customer accounts that are currently blocked from platform activity.</p>
        </div>
      </div>

      <section className="kpi-grid blocked-users-kpis">
        {kpiCardsData.map((kpi) => (
          <KpiCard key={kpi.title} {...kpi} />
        ))}
      </section>

      <section className="panel partner-directory-panel user-management-directory-panel">
        <div className="directory-panel-header user-management-directory-header">
          <h2>Blocked Customer Accounts</h2>
          <span className="footer-results-text">Showing {filteredBlockedUsers.length} of {blockedUsers.length} blocked users</span>
        </div>

        <div className="blocked-users-toolbar">
          <label className="blocked-users-search">
            <Search size={16} />
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search by name or mobile number"
            />
          </label>
        </div>

        <div className="table-wrap blocked-users-table-wrap">
          <div className="table-responsive" style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}><table className="partner-table user-management-table blocked-users-table">
            <thead>
              <tr>
                <th>NAME</th>
                <th>MOBILE</th>
                <th>EMAIL</th>
                <th>ACCOUNT STATUS</th>
                <th>WALLET BALANCE</th>
                <th>LAST BOOKING STATUS</th>
                <th>REGISTRATION DATE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredBlockedUsers.length === 0 ? (
                <tr>
                  <td colSpan="8" className="user-management-empty-state">
                    No blocked users found for this search.
                  </td>
                </tr>
              ) : filteredBlockedUsers.map((user) => {
                const latestBooking = user.bookingHistory[0];

                return (
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
                      <span className="status-badge blocked">{user.status}</span>
                    </td>
                    <td>Rs {user.wallet.balance.toLocaleString('en-IN')}</td>
                    <td>
                      <span className={`status-badge ${latestBooking?.status.toLowerCase() || 'blocked'}`}>
                        {latestBooking?.status || 'No Activity'}
                      </span>
                    </td>
                    <td>{formatDate(user.registrationDate)}</td>
                    <td>
                      <div className="user-management-actions blocked-users-actions">
                        <button className="user-management-action-btn" type="button" title="Review blocked user" onClick={() => setSelectedUserId(user.id)}>
                          <Eye size={15} />
                          <span>Review</span>
                        </button>
                        <button className="user-management-action-btn success" type="button" title="Activate user" onClick={() => updateUserStatus(user, 'Active')}>
                          <CheckCircle2 size={15} />
                          <span>Activate</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table></div>
        </div>

        <div className="directory-table-footer">
          <span className="footer-results-text">This screen only lists users with blocked account status.</span>
        </div>
      </section>
        </>
      )}
      <UserEditModal user={editingUser} onClose={() => setEditingUser(null)} onSave={saveEditedUser} />
    </AdminShell>
  );
}
