import React, { useState, useEffect, useRef } from 'react';
import { Search, Command, X } from 'lucide-react';
import { useApp } from '../../../hooks/useApp';

const searchData = [
  { group: 'Operations', items: ['Dashboard', 'Bookings', 'Orders', 'Payments', 'Wallets', 'Reports'] },
  { group: 'Management', items: ['Users', 'Service Providers', 'Business Sellers', 'Settings', 'Roles', 'Permissions'] },
  { group: 'System', items: ['Notifications'] }
];

export default function HeaderSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const searchRef = useRef(null);
  const { navigate } = useApp();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (item) => {
    setIsOpen(false);
    setQuery('');
    // Dummy navigation logic based on item
    navigate(`/${item.toLowerCase().replace(/\s+/g, '-')}`);
  };

  const filteredData = searchData.map(group => ({
    ...group,
    items: group.items.filter(item => item.toLowerCase().includes(query.toLowerCase()))
  })).filter(group => group.items.length > 0);

  return (
    <div className="relative w-full max-w-md" ref={searchRef}>
      {/* Search Input Button (acts as trigger) */}
      <div 
       className="flex h-10 w-full cursor-pointer items-center gap-2 rounded-full bg-white border border-slate-300 px-4 text-sm text-slate-700 shadow-sm transition-all focus-within:ring-2 focus-within:ring-indigo-500"        onClick={() => setIsOpen(true)}
      >
        <Search size={18} className="text-slate-500 flex-shrink-0" />
        <input 
          type="text" 
          placeholder="Global search operations..." 
          className="w-full bg-transparent text-slate-700 placeholder-slate-400 outline-none"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
        {/* Close / Clear button — only shown when search is active */}
        {(isOpen || query) && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
              setQuery('');
            }}
className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200"            title="Close search"
          >
            <X size={13} />
          </button>
        )}
      </div>

      {/* Command Palette Dropdown */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-full min-w-[320px] origin-top rounded-xl bg-white shadow-2xl ring-1 ring-black/5 animate-in slide-in-from-top-2 fade-in duration-200 z-[1000] overflow-hidden">
          <div className="max-h-[400px] overflow-y-auto p-2 custom-scrollbar">
            {filteredData.length > 0 ? (
              filteredData.map((group, idx) => (
                <div key={idx} className="mb-2 last:mb-0">
                  <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {group.group}
                  </div>
                  <div className="flex flex-col gap-1">
                    {group.items.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => handleSelect(item)}
                        className="flex w-full items-center rounded-lg px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-indigo-50 hover:text-indigo-700 text-left"
                      >
                        <Search size={14} className="mr-2 text-slate-400 opacity-50" />
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="py-6 text-center text-sm text-slate-500">
                No results found for "{query}"
              </div>
            )}
          </div>
          <div className="border-t border-slate-100 bg-slate-50 px-4 py-2.5 text-xs text-slate-500 flex justify-between items-center">
            <span>Use <strong className="font-semibold text-slate-700">up/down</strong> to navigate</span>
            <span><strong className="font-semibold text-slate-700">esc</strong> to close</span>
          </div>
        </div>
      )}
    </div>
  );
}
