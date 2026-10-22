import { useEffect, useState, type FormEvent } from 'react';
import { apiRequest } from '../../services/apiClient';
import type { AdminUser, UserRole } from '../types/adminTypes';

export default function AdminStaff() {
  const [staff, setStaff] = useState<AdminUser[]>([]);
  const [editing, setEditing] = useState<AdminUser | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<UserRole>('content_editor');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const reload = () => apiRequest<AdminUser[]>('/admin/staff', {}, true).then(setStaff);
  useEffect(() => { apiRequest<AdminUser[]>('/admin/staff', {}, true).then(setStaff).catch(() => {}); }, []);
  function edit(user: AdminUser | null) {
    setEditing(user); setName(user?.name || ''); setEmail(user?.email || ''); setRole(user?.role || 'content_editor'); setPassword('');
  }
  async function save(event: FormEvent) {
    event.preventDefault(); setBusy(true);
    try {
      await apiRequest(`/admin/staff${editing ? `/${editing.id}` : ''}`, {
        method: editing ? 'PUT' : 'POST', body: JSON.stringify({ name, email, role, ...(password ? { password } : {}) }),
      }, true);
      edit(null); await reload();
    } catch { /* The dashboard displays the server error. */ }
    finally { setBusy(false); }
  }
  async function revoke(user: AdminUser) {
    if (!window.confirm(`Remove dashboard access for ${user.email}?`)) return;
    try { await apiRequest(`/admin/staff/${user.id}`, { method: 'DELETE' }, true); await reload(); }
    catch { /* The dashboard displays the server error. */ }
  }
  return <section className="space-y-6 max-w-4xl">
    <div><h1 className="text-2xl font-serif">Staff access</h1><p className="text-sm text-zinc-400 mt-2">Manage staff accounts and reset passwords. Saving an account signs out its existing sessions.</p></div>
    <div className="divide-y divide-zinc-700">{staff.map(user => <div key={user.id} className="flex flex-wrap justify-between gap-4 py-4">
      <div><p>{user.name}</p><p className="text-sm text-zinc-400">{user.email} · {user.role.replaceAll('_', ' ')}</p></div>
      <div className="flex gap-4"><button onClick={() => edit(user)}>Edit access</button><button onClick={() => revoke(user)} className="text-red-300">Revoke access</button></div>
    </div>)}</div>
    <form onSubmit={save} className="rounded-xl border border-zinc-700 p-5 space-y-4">
      <h2 className="text-lg">{editing ? 'Edit staff account' : 'Add staff account'}</h2>
      <label className="block text-sm">Name<input className="block w-full mt-1 p-3 bg-zinc-900 rounded" required value={name} onChange={e => setName(e.target.value)} /></label>
      <label className="block text-sm">Email<input className="block w-full mt-1 p-3 bg-zinc-900 rounded" type="email" required value={email} onChange={e => setEmail(e.target.value)} /></label>
      <label className="block text-sm">Role<select className="block w-full mt-1 p-3 bg-zinc-900 rounded" value={role} onChange={e => setRole(e.target.value as UserRole)}><option value="content_editor">Content editor</option><option value="safari_consultant">Safari consultant</option><option value="super_admin">Super administrator</option></select></label>
      <label className="block text-sm">{editing ? 'New password (leave blank to keep current password)' : 'Password (at least 12 characters)'}<input className="block w-full mt-1 p-3 bg-zinc-900 rounded" type="password" autoComplete="new-password" minLength={12} required={!editing} value={password} onChange={e => setPassword(e.target.value)} /></label>
      <div className="flex gap-4"><button disabled={busy} className="bg-brand-green text-black rounded px-5 py-2">{busy ? 'Saving...' : 'Save staff account'}</button>{editing && <button type="button" onClick={() => edit(null)}>Cancel</button>}</div>
    </form>
  </section>;
}
