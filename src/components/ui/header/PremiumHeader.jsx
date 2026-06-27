import React, { useMemo, useCallback } from 'react';
import { Menu, Maximize, Minimize } from 'lucide-react';
import { useApp } from '../../../hooks/useApp';

import HeaderSearch from './HeaderSearch';
import NotificationPanel from './NotificationPanel';
import ProfileMenu from './ProfileMenu';

export default function PremiumHeader({ onMenuClick }) {
  const { route } = useApp();
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  // Dynamic Title based on route
  const pageTitle = useMemo(() => {
    const path = route || '/';
    if (path === '/' || path === '/dashboard') return 'Dashboard';
    const segment = path.split('/').filter(Boolean)[0];
    if (!segment) return 'Dashboard';
    return segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }, [route]);

  // Fullscreen handler
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  }, []);

  React.useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  return (
    <header className="sticky top-0 z-[100] flex h-[68px] w-full shrink-0 items-center justify-between bg-gradient-to-r from-[#2A2454] to-[#18152E] px-4 shadow-lg sm:px-6">
      {/* LEFT: Mobile toggle + Page Title */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/80 transition-all hover:bg-white/15 hover:text-white lg:hidden"
          onClick={onMenuClick}
          aria-label="Toggle Sidebar"
        >
          <Menu size={20} />
        </button>
        <h1 className="hidden truncate text-lg font-bold tracking-tight text-white lg:block">
          {pageTitle}
        </h1>
      </div>

      {/* CENTER: Global Search */}
      <div className="flex flex-1 items-center justify-center px-3 lg:px-10">
        <HeaderSearch />
      </div>

      {/* RIGHT: Fullscreen + Notifications + Profile */}
      <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
        {/* Fullscreen Button */}
        <button
          onClick={toggleFullscreen}
          className="flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition-all hover:bg-white/15 hover:text-white"
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          aria-label="Toggle Fullscreen"
        >
          {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
        </button>

        {/* Divider */}
        <div className="h-5 w-px bg-white/15 hidden sm:block" />

        {/* Notifications */}
        <NotificationPanel />

        {/* Profile (contains role switcher inside) */}
        <ProfileMenu />
      </div>
    </header>
  );
}
