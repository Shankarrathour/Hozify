import React from 'react';
import { X } from 'lucide-react';

export default function DynamicPopup({ isOpen, onClose, title, data, actionLabel, onAction }) {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 z-[1000] bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="fixed left-1/2 top-1/2 z-[1001] w-full max-w-md -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100 transition-all">
        <div className="overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200">
          <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/50 px-6 py-4">
            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
            <button 
              onClick={onClose}
              className="rounded-full p-1 text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="px-6 py-6">
            {data && Object.keys(data).length > 0 ? (
              <div className="space-y-4">
                {Object.entries(data).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-slate-50 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm font-medium text-slate-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="text-sm font-semibold text-slate-900">{value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-500 text-center py-4">Loading dynamic data...</p>
            )}
          </div>

          <div className="border-t border-slate-100 bg-slate-50 px-6 py-4">
            <button 
              onClick={() => {
                if (onAction) onAction();
                onClose();
              }}
              className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-sm font-bold text-white shadow-md shadow-indigo-200 hover:from-indigo-500 hover:to-purple-500 transition-all hover:-translate-y-0.5"
            >
              {actionLabel || 'Proceed'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
