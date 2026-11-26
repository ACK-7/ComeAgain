import { apiRequest } from './apiClient';

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  title: string;
  url: string;
  thumbnail?: string;
  description?: string;
  active: boolean;
}
export interface GalleryCollection { items: GalleryItem[]; revision: string }
export interface GalleryPage extends GalleryCollection { page: number; last_page: number; total: number; counts: { photos: number; videos: number; published: number } }
export interface GalleryMutation { operation: 'upsert' | 'delete' | 'move'; id: string; item?: GalleryItem; direction?: number }
const params = (page: number, type: string, q = '', perPage = 12) => new URLSearchParams({ page: String(page), per_page: String(perPage), type, q }).toString();
export const galleryApi = {
  publicItems: (page: number, type: string, perPage = 12) => apiRequest<Omit<GalleryPage, 'revision'>>(`/gallery?${params(page, type, '', perPage)}`),
  load: (page: number, type: string, q: string, perPage = 12) => apiRequest<GalleryPage>(`/admin/gallery?${params(page, type, q, perPage)}`, {}, true),
  mutate: (mutation: GalleryMutation, revision: string) => apiRequest<{ revision: string }>('/admin/gallery', { method: 'PUT', body: JSON.stringify({ ...mutation, revision }) }, true),
  save: (collection: GalleryCollection) => apiRequest<GalleryCollection>('/admin/gallery', { method: 'PUT', body: JSON.stringify(collection) }, true),
  upload: (file: File) => {
    const form = new FormData();
    form.append('file', file);
    return apiRequest<{ url: string }>('/admin/media', { method: 'POST', body: form, signal: AbortSignal.timeout(180000) }, true);
  },
};
