import React from 'react';
import Brand from '../ui/Brand';
import TopIcons from '../ui/TopIcons';
import Footer from '../ui/Footer';

export default function PublicShell({ children, footerLeft = false, globe = false, noFooter = false }) {
  return (
    <main className="public-page">
      <header className="public-header">
        <Brand />
        <TopIcons globe={globe} />
      </header>
      {children}
      {!noFooter && <Footer leftCopyright={footerLeft} />}
    </main>
  );
}
