import React, { useState, useEffect, useRef } from 'react';
import { Bell, Check, Clock, ShieldAlert, UserPlus, FileText } from 'lucide-react';

const initialNotifications = [
  { id: 1, type: 'alert', title: 'Suspicious Login Attempt', time: '2 mins ago', unread: true, icon: ShieldAlert, color: 'text-rose-500', bg: 'bg-rose-50' },
  { id: 2, type: 'user', title: 'New Partner Registration', time: '1 hr ago', unread: true, icon: UserPlus, color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { id: 3, type: 'system', title: 'Daily Settlement Complete', time: '4 hrs ago', unread: false, icon: Check, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { id: 4, type: 'report', title: 'Monthly Revenue Report Ready', time: '1 day ago', unread: false, icon: FileText, color: 'text-amber-500', bg: 'bg-amber-50' },
];

export default function NotificationPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);
  const dropdownRef = useRef(null);

  const unreadCount = notifications.filter(n => n.unread).length;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition-all hover:bg-white/10 hover:text-white"
        title="Notifications"
      >
        <Bell size={20} />
        {unreadCount > 0 && (
          <span className="absolute right-2.5 top-2.5 flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose-500 ring-2 ring-[#3B2BFF]"></span>
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-3 w-80 origin-top-right rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200 animate-in slide-in-from-top-2 fade-in duration-200 z-[1000] overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/50 px-4 py-3">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-slate-900">Notifications</h3>
              {unreadCount > 0 && (
                <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-bold text-rose-600">{unreadCount} New</span>
              )}
            </div>
            {unreadCount > 0 && (
              <button 
                onClick={markAllRead}
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition"
              >
                Mark all read
              </button>
            )}
          </div>

          <div className="max-h-[340px] overflow-y-auto custom-scrollbar">
            {notifications.length > 0 ? (
              <div className="flex flex-col">
                {notifications.map((notif) => {
                  const Icon = notif.icon;
                  return (
                    <button 
                      key={notif.id}
                      className={`flex items-start gap-3 border-b border-slate-50 px-4 py-3 text-left transition hover:bg-slate-50 ${notif.unread ? 'bg-indigo-50/30' : ''}`}
                    >
                      <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${notif.bg} ${notif.color}`}>
                        <Icon size={14} />
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm ${notif.unread ? 'font-bold text-slate-900' : 'font-medium text-slate-700'}`}>
                          {notif.title}
                        </p>
                        <div className="mt-1 flex items-center gap-1 text-[11px] font-medium text-slate-400">
                          <Clock size={10} />
                          {notif.time}
                        </div>
                      </div>
                      {notif.unread && (
                        <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-indigo-600"></div>
                      )}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="py-8 text-center text-sm text-slate-500">
                You're all caught up!
              </div>
            )}
          </div>
          <div className="border-t border-slate-100 p-2 bg-slate-50">
            <button className="w-full rounded-xl px-4 py-2 text-xs font-bold text-indigo-600 transition hover:bg-indigo-100">
              View All Notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
