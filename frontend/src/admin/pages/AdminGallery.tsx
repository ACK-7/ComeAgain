import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUp, Eye, EyeOff, Images, Pencil, Plus, Search, Trash2, Upload, X } from 'lucide-react';
import { galleryApi, type GalleryPage, type GalleryMutation, type GalleryItem } from '../../services/gallery';

const field = 'w-full rounded-xl border border-[#2d4420] bg-[#10190e] px-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-green';
const action = 'rounded-lg border border-[#2d4420] p-2 text-zinc-300 hover:text-white hover:bg-white/10 disabled:opacity-30';

function errorMessage(error: unknown): string {
  if (error instanceof TypeError) return 'Could not connect to the server. Check your connection and try again.';
  if (error instanceof Error && ['TimeoutError', 'AbortError'].includes(error.name)) return 'The request took too long. Please try again.';
  return error instanceof Error ? error.message : 'Please try again.';
}

export default function AdminGallery() {
  const [collection, setCollection] = useState<GalleryPage | null>(null);
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');
  const [perPage, setPerPage] = useState(12);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(0);
  const [query, setQuery] = useState('');
  const [editing, setEditing] = useState<GalleryItem | null>(null);
  const [busy, setBusy] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [uploadNotice, setUploadNotice] = useState('');
  const feedback = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const load = () => setReload(value => value + 1);
  useEffect(() => {
    let active = true;
    const timer = window.setTimeout(() => {
      setLoading(true); setError('');
      galleryApi.load(page, filter, query, perPage).then(data => { if (active) setCollection(data); })
        .catch(e => { if (active) setError(errorMessage(e)); })
        .finally(() => { if (active) setLoading(false); });
    }, 250);
    return () => { active = false; window.clearTimeout(timer); };
  }, [page, filter, query, perPage, reload]);
  useEffect(() => { if (editing) dialog.current?.showModal(); else dialog.current?.close(); }, [editing]);

  function openEditor(item: GalleryItem) {
    setError(''); setNotice(''); setUploadNotice(''); setEditing(item);
  }

  async function persist(mutation: GalleryMutation, message: string) {
    if (!collection) return false;
    setBusy(true); setError(''); setNotice('');
    try { await galleryApi.mutate(mutation, collection.revision); setLoading(true); load(); setNotice(message); requestAnimationFrame(() => feedback.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })); return true; }
    catch (e) { setError(`Changes were not saved. ${errorMessage(e)}`); requestAnimationFrame(() => feedback.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })); return false; }
    finally { setBusy(false); }
  }

  async function upload(file: File, thumbnail = false) {
    setUploadNotice('');
    const image = ['image/jpeg', 'image/png', 'image/webp'].includes(file.type);
    const video = ['video/mp4', 'video/webm'].includes(file.type);
    if ((thumbnail || editing?.type === 'image') ? !image : !video) { setError(thumbnail || editing?.type === 'image' ? 'Choose a JPG, PNG or WebP image.' : 'Choose an MP4 or WebM video.'); return; }
    if (file.size > (image ? 5 : 50) * 1024 * 1024) { setError(`Please choose a file under ${image ? 5 : 50} MB.`); return; }
    setUploading(true); setError('');
    try { const result = await galleryApi.upload(file); setEditing(previous => previous ? { ...previous, [thumbnail ? 'thumbnail' : 'url']: result.url } : null); setUploadNotice(`${thumbnail ? 'Cover image' : 'File'} uploaded. Save changes to update the gallery.`); }
    catch (e) { setError(`Upload failed. ${errorMessage(e)} Your other edits are still here.`); }
    finally { setUploading(false); }
  }

  function move(item: GalleryItem, direction: number) {
    if (!collection) return;
    void persist({ operation: 'move', id: item.id, direction }, `Moved "${item.title}" in the gallery.`);
  }

  const items = collection?.items ?? [];
  const visible = loading ? [] : items;
  return <div className="space-y-6">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div><div className="flex items-center gap-3"><Images className="text-brand-green" /><h1 className="text-3xl font-serif font-bold">Gallery</h1></div><p className="mt-2 text-sm text-zinc-400">Manage the photos and videos visitors see on your gallery page.</p></div>
      <div className="flex gap-3"><a href="/gallery" target="_blank" rel="noreferrer" className="rounded-xl border border-[#2d4420] px-4 py-2.5 text-sm">View gallery ↗</a><button disabled={!collection || busy || loading} onClick={() => { openEditor({ id: crypto.randomUUID(), type: filter === 'video' ? 'video' : 'image', title: '', url: '', description: '', thumbnail: '', active: true }); }} className="flex items-center gap-2 rounded-xl bg-brand-green px-4 py-2.5 text-sm font-semibold text-black disabled:opacity-40"><Plus size={17} />Add media</button></div>
    </div>
    <div ref={feedback} className="space-y-3">
    {busy && !editing && <p role="status" className="text-sm text-zinc-300">Updating gallery…</p>}
    {error && !editing && <div role="alert" className="rounded-xl border border-red-500/40 bg-red-950/40 p-4 text-sm">{error} <button onClick={load} className="ml-3 underline">Reload gallery</button></div>}
    {notice && !editing && <p role="status" className="rounded-xl border border-brand-green/30 bg-brand-green/10 p-3 text-sm text-green-300">{notice} <button type="button" onClick={() => setNotice('')} aria-label="Dismiss success message" className="ml-3 underline">Dismiss</button></p>}
    </div>
    <div className="grid grid-cols-3 gap-3">{[['Photos', collection?.counts.photos ?? 0], ['Videos', collection?.counts.videos ?? 0], ['Published', collection?.counts.published ?? 0]].map(([label, count]) => <div key={label} className="rounded-2xl border border-[#223518] bg-[#111b0e] p-4"><p className="text-xs uppercase tracking-wide text-zinc-400">{label}</p><p className="mt-2 text-2xl font-semibold">{count}</p></div>)}</div>
    <div className="flex flex-wrap justify-between gap-4"><div className="flex gap-2">{(['all', 'image', 'video'] as const).map(value => <button key={value} onClick={() => { if (filter === value) return; setLoading(true); setPage(1); setFilter(value); }} className={`rounded-xl px-4 py-2 text-sm ${filter === value ? 'bg-brand-green text-black' : 'border border-[#2d4420] text-zinc-300'}`}>{value === 'all' ? 'All media' : value === 'image' ? 'Photos' : 'Videos'}</button>)}</div><label className="flex items-center gap-2 rounded-xl border border-[#2d4420] px-3"><Search size={16} className="text-zinc-400" /><input aria-label="Search gallery" value={query} onChange={e => { setLoading(true); setPage(1); setQuery(e.target.value); }} placeholder="Search gallery…" className="bg-transparent py-2 text-sm outline-none" /></label></div>
    <label className="flex items-center gap-3 text-sm text-zinc-300">
      <span>Items per page</span>
      <select value={perPage} disabled={busy} onChange={e => { setLoading(true); setPage(1); setPerPage(Number(e.target.value)); }} className="rounded-lg border border-[#2d4420] bg-[#10190e] px-3 py-2 text-white focus:outline-none focus:border-brand-green disabled:opacity-40">
        {[12, 24, 36, 48].map(size => <option key={size} value={size}>{size}</option>)}
      </select>
    </label>
    {loading && !error && <p role="status" className="py-12 text-center text-zinc-400">Loading gallery…</p>}
    {collection && !loading && !error && !visible.length && <div className="rounded-2xl border border-dashed border-[#2d4420] py-16 text-center text-zinc-400">{items.length ? 'No matching media. Try another search or filter.' : 'Your gallery is empty. Add your first photo or video.'}</div>}
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">{visible.map(item => {
      return <article key={item.id} className="overflow-hidden rounded-2xl border border-[#223518] bg-[#111b0e]">
        <div className="relative aspect-[4/3] bg-black/40">{item.type === 'image' ? <img loading="lazy" src={item.url} alt={item.title} className="h-full w-full object-cover" /> : <video src={item.url} poster={item.thumbnail || undefined} controls preload="none" className="h-full w-full object-contain" />}<span className="absolute left-3 top-3 rounded-full bg-black/80 px-2.5 py-1 text-[10px] uppercase tracking-wider">{item.active ? 'Published' : 'Hidden'} · {item.type === 'image' ? 'Photo' : 'Video'}</span></div>
        <div className="space-y-3 p-4"><h2 className="font-semibold truncate">{item.title}</h2>{item.description && <p className="line-clamp-2 text-xs text-zinc-400">{item.description}</p>}<div className="flex flex-wrap gap-2">
          <button className={action} disabled={busy || loading} onClick={() => { openEditor({ ...item }); }} aria-label={`Edit ${item.title}`}><Pencil size={16} /></button>
          <button className={action} disabled={busy || loading} onClick={() => void persist({ operation: 'upsert', id: item.id, item: { ...item, active: !item.active } }, `“${item.title}” ${item.active ? 'hidden from' : 'published to'} the public gallery.`)} aria-label={`${item.active ? 'Hide' : 'Publish'} ${item.title}`}>{item.active ? <Eye size={16} /> : <EyeOff size={16} />}</button>
          <button className={action} disabled={busy || loading} onClick={() => move(item, -1)} aria-label={`Move ${item.title} earlier`}><ArrowUp size={16} /></button>
          <button className={action} disabled={busy || loading} onClick={() => move(item, 1)} aria-label={`Move ${item.title} later`}><ArrowDown size={16} /></button>
          <button className={`${action} ml-auto text-rose-400`} disabled={busy || loading} onClick={() => { if (window.confirm(`Remove “${item.title}” from the gallery?`)) void persist({ operation: 'delete', id: item.id }, `“${item.title}” removed from the gallery.`); }} aria-label={`Remove ${item.title}`}><Trash2 size={16} /></button>
        </div></div>
      </article>;
    })}</div>
    {collection && <nav aria-label="Gallery pagination" className="flex items-center justify-center gap-4">
      <button className={action} disabled={busy || loading || collection.page <= 1} onClick={() => { setLoading(true); setPage(collection.page - 1); }}>Previous</button>
      <span role="status" className="text-sm text-zinc-400">Page {collection.page} of {collection.last_page} / {collection.total} items</span>
      <button className={action} disabled={busy || loading || collection.page >= collection.last_page} onClick={() => { setLoading(true); setPage(collection.page + 1); }}>Next</button>
    </nav>}
    <dialog ref={dialog} onCancel={e => { if (busy || uploading) e.preventDefault(); else setEditing(null); }} className="m-auto max-h-[90vh] w-[calc(100%_-_2rem)] max-w-xl overflow-y-auto rounded-2xl border border-[#2d4420] bg-[#111b0e] p-6 text-white backdrop:bg-black/80">
      {editing && <form onSubmit={async e => { e.preventDefault(); if (busy || uploading) return; const existing = items.some(i => i.id === editing.id); if (await persist({ operation: 'upsert', id: editing.id, item: editing }, `“${editing.title}” ${existing ? 'updated' : 'added'}. ${editing.active ? 'It is now visible on the public gallery.' : 'It is saved as hidden.'}`)) { setEditing(null); setQuery(''); setPage(1); setFilter(editing.type); } }} className="space-y-4">
        <div className="flex items-center justify-between"><h2 className="text-xl font-serif">{items.some(i => i.id === editing.id) ? 'Edit gallery media' : 'Add to gallery'}</h2><button type="button" disabled={busy || uploading} aria-label="Close editor" onClick={() => setEditing(null)}><X size={20} /></button></div>
        {error && <p role="alert" className="rounded-lg bg-red-950 p-3 text-sm">{error}</p>}
        {uploadNotice && <p role="status" className="rounded-lg border border-brand-green/30 bg-brand-green/10 p-3 text-sm text-green-300">{uploadNotice}</p>}
        {uploading && <p role="status" className="text-sm text-zinc-300">Uploading file… Please keep this editor open.</p>}
        {busy && <p role="status" className="text-sm text-zinc-300">Saving your changes…</p>}
        <fieldset disabled={busy || uploading} className="space-y-4 disabled:opacity-60">
          <label className="block space-y-2 text-sm"><span>Media type</span><select value={editing.type} onChange={e => setEditing({ ...editing, type: e.target.value as 'image' | 'video', url: '', thumbnail: '' })} className={field}><option value="image">Photo</option><option value="video">Video</option></select></label>
          <label className="block space-y-2 text-sm"><span>Title / image description</span><input autoFocus required maxLength={255} value={editing.title} onChange={e => setEditing({ ...editing, title: e.target.value })} className={field} placeholder="e.g. Gorilla trekking in Bwindi" /></label>
          <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-brand-green/50 p-5 text-sm text-brand-green"><Upload size={18} />Upload {editing.type === 'image' ? 'photo (up to 5 MB)' : 'video (up to 50 MB)'}<input type="file" className="sr-only" accept={editing.type === 'image' ? 'image/jpeg,image/png,image/webp' : 'video/mp4,video/webm'} onChange={e => { const file = e.target.files?.[0]; if (file) void upload(file); e.target.value = ''; }} /></label>
          <label className="block space-y-2 text-sm"><span>Or paste a direct {editing.type} link</span><input required maxLength={2048} value={editing.url} onChange={e => setEditing({ ...editing, url: e.target.value })} className={field} placeholder="https://… or /images/…" /></label>
          {editing.url && (editing.type === 'image' ? <img src={editing.url} alt={editing.title} className="max-h-52 w-full rounded-xl object-contain bg-black/40" /> : <video key={editing.url} src={editing.url} poster={editing.thumbnail || undefined} controls preload="metadata" className="max-h-52 w-full rounded-xl" />)}
          {editing.type === 'video' && <><label className="block space-y-2 text-sm"><span>Video cover image link (optional)</span><input maxLength={2048} value={editing.thumbnail ?? ''} onChange={e => setEditing({ ...editing, thumbnail: e.target.value })} className={field} /></label><label className="block text-sm text-brand-green cursor-pointer">Upload cover image<input type="file" accept="image/jpeg,image/png,image/webp" className="mt-2 block w-full text-xs" onChange={e => { const file = e.target.files?.[0]; if (file) void upload(file, true); e.target.value = ''; }} /></label></>}
          <label className="block space-y-2 text-sm"><span>Caption (optional)</span><textarea maxLength={2000} rows={3} value={editing.description ?? ''} onChange={e => setEditing({ ...editing, description: e.target.value })} className={field} /></label>
          <label className="flex gap-2 text-sm"><input type="checkbox" checked={editing.active} onChange={e => setEditing({ ...editing, active: e.target.checked })} />Visible on the public gallery</label>
        </fieldset>
        <p className="text-xs text-zinc-400">Saving publishes your changes immediately. Video links must point to MP4 or WebM files.</p>
        <div className="flex justify-end gap-3"><button type="button" disabled={busy || uploading} onClick={() => setEditing(null)} className="px-4 py-2 text-sm">Cancel</button><button disabled={busy || uploading} className="rounded-xl bg-brand-green px-5 py-2.5 text-sm font-semibold text-black disabled:opacity-50">{uploading ? 'Uploading…' : busy ? 'Saving…' : 'Save changes'}</button></div>
      </form>}
    </dialog>
  </div>;
}
