import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, XCircle, X } from 'lucide-react';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[2000] flex flex-col gap-3">
        {toasts.map((toast) => (
          <div 
            key={toast.id}
            className={`flex items-center gap-3 rounded-xl border p-4 shadow-lg transition-all animate-in slide-in-from-bottom-5 ${
              toast.type === 'success' 
                ? 'border-emerald-200 bg-emerald-50 text-emerald-800' 
                : 'border-rose-200 bg-rose-50 text-rose-800'
            }`}
          >
            {toast.type === 'success' ? (
              <CheckCircle2 size={20} className="text-emerald-600" />
            ) : (
              <XCircle size={20} className="text-rose-600" />
            )}
            <p className="text-sm font-semibold">{toast.message}</p>
            <button 
              onClick={() => removeToast(toast.id)}
              className="ml-4 rounded-full p-1 opacity-70 hover:bg-black/5 hover:opacity-100 transition"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
