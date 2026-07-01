import React from 'react';

export default function RecentBookings({ bookings = [], onViewAll }) {
  return (
    <div className="panel bookings-panel">
      <div className="panel-head">
        <h2>Recent Bookings</h2>
        <button type="button" onClick={onViewAll}>View All Bookings</button>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>ORDER ID</th><th>CUSTOMER</th><th>SERVICE</th><th>DATE</th><th>AMOUNT</th><th>STATUS</th></tr>
          </thead>
          <tbody>
            {bookings.map(([id, initials, customer, service, date, amount, status]) => (
              <tr key={id}>
                <td><strong>{id}</strong></td>
                <td><span className="customer"><em>{initials}</em>{customer}</span></td>
                <td>{service}</td>
                <td>{date}</td>
                <td><strong>{amount}</strong></td>
                <td><span className={`status ${status.toLowerCase().replace(' ', '-')}`}>{status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
