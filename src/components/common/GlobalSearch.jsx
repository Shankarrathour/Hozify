import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X, Loader2, BookOpen, Users, Activity, FileText } from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { sidebarNavigation } from '../../config/sidebarNavigation';

export default function GlobalSearch() {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const { navigate } = useApp();

  // Handle Ctrl+K and / shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClear = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.trim()) {
      setIsLoading(true);
      // Simulate live search delay
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    } else {
      setIsLoading(false);
    }
  };

  const executeSearch = () => {
    if (query.trim()) {
      setIsFocused(false);
    }
  };

  // Flatten the navigation for search
  const searchItems = useMemo(() => {
    return sidebarNavigation.reduce((acc, module) => {
      const Icon = module.icon || FileText;
      if (module.children) {
        module.children.forEach(child => {
          acc.push({
            label: child.label,
            category: module.label,
            route: child.route,
            icon: Icon
          });
          if (child.children) {
            child.children.forEach(subchild => {
              acc.push({
                label: subchild.label,
                category: `${module.label} > ${child.label}`,
                route: subchild.route,
                icon: Icon
              });
            });
          }
        });
      } else if (module.route) {
        acc.push({
          label: module.label,
          category: 'Module',
          route: module.route,
          icon: Icon
        });
      }
      return acc;
    }, []);
  }, []);

  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    return searchItems.filter(item => 
      item.label.toLowerCase().includes(lowerQuery) || 
      item.category.toLowerCase().includes(lowerQuery)
    ).slice(0, 8); // Max 8 results
  }, [query, searchItems]);

  const showResults = isFocused && query.trim().length > 0 && !isLoading;

  return (
    <div className="global-search-container" style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
      <div 
        className={`global-search-input-wrapper ${isFocused ? 'focused' : ''}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 0.15)',
          border: isFocused ? '1px solid rgba(255,255,255,0.4)' : '1px solid rgba(255,255,255,0.2)',
          borderRadius: '24px',
          padding: '0 14px',
          height: '38px',
          transition: 'all 0.25s ease',
          boxShadow: isFocused ? '0 0 0 3px rgba(255, 255, 255, 0.1)' : 'none',
        }}
      >
        <Search size={16} color="#ffffff" style={{ flexShrink: 0, opacity: 0.8 }} />
        
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleSearch}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') executeSearch();
            if (e.key === 'Escape') inputRef.current?.blur();
          }}
          placeholder="Global search operations..."
          style={{
            border: 'none',
            background: 'transparent',
            outline: 'none',
            width: '100%',
            padding: '0 12px',
            fontSize: '13px',
            color: '#ffffff',
            fontWeight: '500'
          }}
        />
        
        {query ? (
          isLoading ? (
            <Loader2 size={16} className="spinner" style={{ color: 'var(--muted)', animation: 'spin 1s linear infinite' }} />
          ) : (
            <button 
              type="button" 
              onClick={handleClear}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--muted)',
                padding: '4px'
              }}
            >
              <X size={16} />
            </button>
          )
        ) : null}
      </div>

      {showResults && (
        <div 
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: 0,
            right: 0,
            background: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            border: '1px solid var(--line)',
            padding: '12px',
            zIndex: 1000,
            maxHeight: '400px',
            overflowY: 'auto'
          }}
        >
          <div style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px', padding: '0 8px' }}>
            Quick Results for "{query}"
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {filteredResults.length > 0 ? (
              filteredResults.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button 
                    key={index} 
                    className="search-result-item" 
                    type="button" 
                    onMouseDown={(e) => {
                      // use onMouseDown instead of onClick to prevent onBlur from firing before navigation
                      e.preventDefault(); 
                      if (item.route) {
                        navigate(item.route);
                        setQuery('');
                        setIsFocused(false);
                        inputRef.current?.blur();
                      }
                    }}
                  >
                    <Icon size={16} style={{ color: '#4f46e5' }} />
                    <div style={{ flex: 1, textAlign: 'left' }}>
                      <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>{item.label}</strong>
                      <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{item.category}</span>
                    </div>
                  </button>
                );
              })
            ) : (
              <div style={{ padding: '16px', textAlign: 'center', color: 'var(--muted)', fontSize: '13px' }}>
                No matching pages or modules found for "{query}"
              </div>
            )}
          </div>
        </div>
      )}
      <style>{`
        @keyframes spin { 100% { transform: rotate(360deg); } }
        .search-result-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border: none;
          background: transparent;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .search-result-item:hover {
          background: #f8fafc;
        }
      `}</style>
    </div>
  );
}
