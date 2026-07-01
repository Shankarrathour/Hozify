import React, { createContext, useContext, useState, useMemo } from 'react';
import { 
  subDays, startOfDay, endOfDay, 
  startOfWeek, endOfWeek, subWeeks, 
  startOfMonth, endOfMonth, subMonths, 
  startOfQuarter, endOfQuarter, subQuarters, 
  startOfYear, endOfYear 
} from 'date-fns';

export const DateFilterContext = createContext();

export function DateFilterProvider({ children }) {
  const [preset, setPreset] = useState('Last 30 Days');
  const [isFiltering, setIsFiltering] = useState(false);
  const [hasData, setHasData] = useState(true);
  const [dateRange, setDateRange] = useState({
    startDate: subDays(startOfDay(new Date()), 30),
    endDate: endOfDay(new Date()),
    key: 'selection'
  });

  const handleSetDateFilter = (newPreset, newDateRange) => {
    setPreset(newPreset);
    let resolvedRange = newDateRange;
    
    if (!resolvedRange) {
      const today = new Date();
      switch (newPreset) {
        case 'Today':
          resolvedRange = { startDate: startOfDay(today), endDate: endOfDay(today), key: 'selection' };
          break;
        case 'Yesterday':
          resolvedRange = { startDate: startOfDay(subDays(today, 1)), endDate: endOfDay(subDays(today, 1)), key: 'selection' };
          break;
        case 'Last 7 Days':
          resolvedRange = { startDate: subDays(startOfDay(today), 7), endDate: endOfDay(today), key: 'selection' };
          break;
        case 'Last 30 Days':
          resolvedRange = { startDate: subDays(startOfDay(today), 30), endDate: endOfDay(today), key: 'selection' };
          break;
        case 'This Week':
          resolvedRange = { startDate: startOfWeek(today), endDate: endOfWeek(today), key: 'selection' };
          break;
        case 'Last Week':
          resolvedRange = { startDate: startOfWeek(subWeeks(today, 1)), endDate: endOfWeek(subWeeks(today, 1)), key: 'selection' };
          break;
        case 'This Month':
          resolvedRange = { startDate: startOfMonth(today), endDate: endOfMonth(today), key: 'selection' };
          break;
        case 'Last Month':
          resolvedRange = { startDate: startOfMonth(subMonths(today, 1)), endDate: endOfMonth(subMonths(today, 1)), key: 'selection' };
          break;
        case 'This Quarter':
          resolvedRange = { startDate: startOfQuarter(today), endDate: endOfQuarter(today), key: 'selection' };
          break;
        case 'Last Quarter':
          resolvedRange = { startDate: startOfQuarter(subQuarters(today, 1)), endDate: endOfQuarter(subQuarters(today, 1)), key: 'selection' };
          break;
        case 'This Year':
          resolvedRange = { startDate: startOfYear(today), endDate: endOfYear(today), key: 'selection' };
          break;
        default:
          resolvedRange = { startDate: subDays(startOfDay(today), 30), endDate: endOfDay(today), key: 'selection' };
      }
    }

    setDateRange(resolvedRange);
    
    // Simulate loading data and empty state check
    setIsFiltering(true);
    
    // Mock Empty State: if the start date is before Jan 1, 2022
    const isBefore2022 = resolvedRange?.startDate && resolvedRange.startDate < new Date('2022-01-01');
    setHasData(!isBefore2022);

    setTimeout(() => {
      setIsFiltering(false);
    }, 800);
  };

  const value = useMemo(
    () => ({
      preset,
      dateRange,
      isFiltering,
      hasData,
      setDateFilter: handleSetDateFilter
    }),
    [preset, dateRange, isFiltering, hasData]
  );

  return (
    <DateFilterContext.Provider value={value}>
      {children}
    </DateFilterContext.Provider>
  );
}

export function useDateFilter() {
  const context = useContext(DateFilterContext);
  if (!context) {
    throw new Error('useDateFilter must be used within a DateFilterProvider');
  }
  return context;
}
