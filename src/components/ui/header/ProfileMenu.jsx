import React, { useState, useEffect, useRef } from 'react';
import {
  User, Settings, Shield, KeyRound, Activity,
  LifeBuoy, LogOut, ChevronDown, ChevronRight,
  ShieldAlert, Check
} from 'lucide-react';
import { useApp } from '../../../hooks/useApp';
import { useToast } from '../../common/ToastNotification';

const ROLES = [
  'Super Admin',
  'Operations Admin',
  'Finance Admin',
  'Support Admin',
  'Approval Admin',
];

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showRoles, setShowRoles] = useState(false);
  const [activeRole, setActiveRole] = useState(ROLES[0]);
  const dropdownRef = useRef(null);
  const { session, logout, navigate } = useApp();
  const { addToast } = useToast();

  const userName = session?.user?.name || 'Alex Sterling';
  const email = session?.user?.email || 'alex.s@hozify.com';
  const avatarUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80";

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
        setShowRoles(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleLogout = () => {
    setIsOpen(false);
    logout();
    addToast('Logged out successfully.', 'success');
  };

  const handleRoleSwitch = (role) => {
    setActiveRole(role);
    setShowRoles(false);
    setIsOpen(false);
    addToast(`Role switched to ${role}`, 'success');
  };

  const navItems = [
    { label: 'My Profile', icon: User, route: '/my-profile' },
    { label: 'Account Settings', icon: Settings, route: '/settings' },
    { label: 'Change Password', icon: KeyRound, action: () => addToast('Change Password — coming soon', 'info') },
    { label: 'Activity Log', icon: Activity, action: () => addToast('Activity Log — coming soon', 'info') },
    { label: 'Help & Support', icon: LifeBuoy, route: '/support' },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar Trigger */}
      <button
        onClick={() => { setIsOpen(!isOpen); setShowRoles(false); }}
        className="flex items-center gap-2 rounded-full border border-white/15 bg-white/8 p-1 pr-2.5 transition-all hover:bg-white/20"
      >
        <img
          src={avatarUrl}
          alt={userName}
          className="h-8 w-8 rounded-full border border-white/25 object-cover shadow"
        />
        <ChevronDown size={13} className={`text-white/75 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2.5 w-68 min-w-[260px] origin-top-right rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200/60 animate-in slide-in-from-top-2 fade-in duration-200 z-[1000] overflow-hidden">

          {/* User Info Header */}
          <div className="flex flex-col items-center border-b border-slate-100 bg-gradient-to-b from-indigo-50 to-white px-5 py-4 text-center">
            <div className="relative mb-2">
              <img
                src={avatarUrl}
                alt={userName}
                className="h-14 w-14 rounded-full border-2 border-white object-cover shadow-md"
              />
              <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">{userName}</h4>
            <p className="text-xs text-slate-500">{email}</p>
            <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-indigo-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-indigo-700">
              <ShieldAlert size={9} /> {activeRole}
            </span>
          </div>

          {/* Role Switcher */}
          <div className="border-b border-slate-100">
            <button
              onClick={() => setShowRoles(!showRoles)}
              className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              <span className="flex items-center gap-2.5 text-slate-600">
                <ShieldAlert size={15} className="text-indigo-500" />
                Switch Role
              </span>
              <ChevronRight size={14} className={`text-slate-400 transition-transform duration-200 ${showRoles ? 'rotate-90' : ''}`} />
            </button>

            {showRoles && (
              <div className="bg-slate-50 border-t border-slate-100">
                {ROLES.map((role) => (
                  <button
                    key={role}
                    onClick={() => handleRoleSwitch(role)}
                    className="flex w-full items-center justify-between px-5 py-2.5 text-sm text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-700"
                  >
                    <span>{role}</span>
                    {activeRole === role && <Check size={14} className="text-indigo-600" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Navigation Items */}
          <div className="p-1.5">
            {navItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setIsOpen(false);
                    setShowRoles(false);
                    if (item.route) navigate(item.route);
                    else if (item.action) item.action();
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-700"
                >
                  <Icon size={15} className="text-slate-400" />
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Logout Footer */}
          <div className="border-t border-slate-100 p-1.5">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-rose-600 transition hover:bg-rose-50"
            >
              <LogOut size={15} />
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
