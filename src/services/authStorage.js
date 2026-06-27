import { STORAGE_KEYS } from '../config/storageKeys';

export function getStoredSession() {
  const local = localStorage.getItem(STORAGE_KEYS.session);
  const session = sessionStorage.getItem(STORAGE_KEYS.session);
  return local || session ? JSON.parse(local || session) : null;
}

export function getPendingRole() {
  return sessionStorage.getItem(STORAGE_KEYS.pendingRole);
}

export function storePendingRole(roleId) {
  sessionStorage.setItem(STORAGE_KEYS.pendingRole, roleId);
}

export function clearPendingRole() {
  sessionStorage.removeItem(STORAGE_KEYS.pendingRole);
}

export function storeSession(session, remember) {
  localStorage.removeItem(STORAGE_KEYS.session);
  sessionStorage.removeItem(STORAGE_KEYS.session);
  const storage = remember ? localStorage : sessionStorage;
  storage.setItem(STORAGE_KEYS.session, JSON.stringify(session));
}

export function clearSession() {
  localStorage.removeItem(STORAGE_KEYS.session);
  sessionStorage.removeItem(STORAGE_KEYS.session);
}
