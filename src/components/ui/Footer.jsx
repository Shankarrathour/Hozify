import React from 'react';

export default function Footer({ leftCopyright = false }) {
  return (
    <footer className={leftCopyright ? 'app-footer footer-left' : 'app-footer'}>
      <strong>HOZIFY Admin</strong>
      <nav>
        <button type="button">Privacy Policy</button>
        <button type="button">Terms of Service</button>
        <button type="button">Security Standards</button>
      </nav>
      <span>© 2024 HOZIFY Admin. All rights reserved.</span>
    </footer>
  );
}
