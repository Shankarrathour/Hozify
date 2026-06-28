import React, { useState, useRef, useEffect } from 'react';
import { ShieldAlert } from 'lucide-react';
import { useToast } from '../../common/ToastNotification';

const availableRoles = [
  'Super Admin',
  'Operations Admin',
  'Finance Admin',
  'Support Admin',
  'Approval Admin'
];

export default function RoleBadge() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeRole, setActiveRole] = useState(availableRoles[0]);
  const dropdownRef = useRef(null);
  const { addToast } = useToast();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleRoleSelect = (role) => {
    setActiveRole(role);
    setIsOpen(false);
    addToast(`Role switched to ${role}`, 'success');
    // Here you would typically dispatch an action or update context to actually change the user's role/permissions in the app
  };

  return (
    <div className="relative hidden sm:block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-white/30 bg-transparent py-1.5 pl-2.5 pr-4 text-sm font-semibold text-white transition-all hover:bg-white/10"
      >
        <ShieldAlert size={16} />
        {activeRole}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 animate-in slide-in-from-top-2 fade-in duration-200 z-[1000] overflow-hidden">
          <div className="py-1">
            {availableRoles.map((role, idx) => (
              <button
                key={idx}
                onClick={() => handleRoleSelect(role)}
                className={`block w-full px-4 py-2 text-left text-sm transition-colors ${
                  activeRole === role
                    ? 'bg-[#1a73e8] text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
