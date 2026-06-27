import React, { useEffect, useRef } from 'react';
import { useShell } from './ShellContext';

function isEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== typeof b) return false;
  if (a && b && typeof a === 'object') {
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
        if (!isEqual(a[i], b[i])) return false;
      }
      return true;
    }
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    for (let key of keysA) {
      if (!isEqual(a[key], b[key])) return false;
    }
    return true;
  }
  return false;
}

export default function AdminShell({ children, ...props }) {
  const { setShellProps } = useShell();
  const prevProps = useRef(null);

  useEffect(() => {
    let changed = false;
    if (!prevProps.current) {
      changed = true;
    } else {
      const prev = prevProps.current;
      const keys = new Set([...Object.keys(prev), ...Object.keys(props)]);
      for (let key of keys) {
        if (!isEqual(prev[key], props[key])) {
          changed = true;
          break;
        }
      }
    }

    if (changed) {
      prevProps.current = props;
      setShellProps(props);
    }
  }, [props, setShellProps]);

  useEffect(() => {
    return () => setShellProps({});
  }, [setShellProps]);

  return <>{children}</>;
}
