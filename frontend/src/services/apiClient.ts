export function getApiBaseUrl(): string {
  const configured = import.meta.env.VITE_API_URL as string | undefined;
  const base = configured || (['localhost', '127.0.0.1'].includes(window.location.hostname)
    ? 'http://127.0.0.1:8000/api' : `${window.location.origin}/api`);
  return `${base.replace(/\/+$/, '').replace(/\/api$/, '')}/api`;
}
export const TOKEN_KEY = 'comeagain_staff_token';
export async function apiRequest<T>(path: string, options: RequestInit = {}, authenticated = false): Promise<T> {
  const headers = new Headers(options.headers);
  headers.set('Accept', 'application/json');
  if (options.body && !(options.body instanceof FormData)) headers.set('Content-Type', 'application/json');
  if (authenticated) {
    const token = sessionStorage.getItem(TOKEN_KEY);
    if (token) headers.set('Authorization', `Bearer ${token}`);
  }
  try {
    const response = await fetch(`${getApiBaseUrl()}${path}`, { ...options, headers, signal: options.signal ?? AbortSignal.timeout(30000) });
    const json = await response.json().catch(() => null);
    if (!response.ok || !json || json.success === false) {
      if (authenticated && response.status === 401) {
        sessionStorage.removeItem(TOKEN_KEY);
        window.dispatchEvent(new Event('admin-session-expired'));
      }
      const errors = json?.errors as Record<string, string[]> | undefined;
      throw new Error(errors ? Object.values(errors).flat().join(' ') : json?.message || `Request failed (${response.status}). Please try again.`);
    }
    return json.data as T;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'The server could not be reached.';
    if (authenticated) window.dispatchEvent(new CustomEvent('admin-api-error', { detail: message }));
    throw error;
  }
}
