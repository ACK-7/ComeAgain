import type { SafariInquiry, SafariPackageItem, FleetVehicle, NewsletterSubscriber, CustomerReview, BusinessSettings, DashboardStats, TourismNewsAdminItem } from '../types/adminTypes';
import type { BlogPost } from '../../data/blogData';
import { apiRequest, getApiBaseUrl } from '../../services/apiClient';
import { normalizeBlogArticle, normalizeBlogArticles } from '../../services/blogArticles';
export const getEffectiveBaseUrl = getApiBaseUrl;
const request = <T,>(path: string, options?: RequestInit) => apiRequest<T>(`/admin${path}`, options, true);
const body = (method: string, data?: unknown): RequestInit => ({ method, ...(data === undefined ? {} : { body: JSON.stringify(data) }) });
const key = encodeURIComponent;
export interface SystemHealthCheckResult {
  apiOnline: boolean; endpointTested: string; latencyMs: number; environment: 'local' | 'production_cpanel';
  newsApiStatus: 'healthy' | 'degraded' | 'offline'; contactApiStatus: 'healthy' | 'degraded' | 'offline'; message: string;
}
export const adminApi = {
  getBaseUrl: getApiBaseUrl,
  getInquiries: () => request<SafariInquiry[]>('/inquiries'),
  saveInquiry: (item: SafariInquiry) => request<SafariInquiry>(`/inquiries${item.id && !item.id.startsWith('new_') ? `/${key(item.id)}` : ''}`, body(item.id && !item.id.startsWith('new_') ? 'PUT' : 'POST', item)),
  deleteInquiry: (id: string) => request<void>(`/inquiries/${key(id)}`, body('DELETE')),
  getPackages: () => request<SafariPackageItem[]>('/packages'),
  savePackage: (item: SafariPackageItem) => request<SafariPackageItem>(`/packages${item.id && !item.id.startsWith('new_') ? `/${key(item.id)}` : ''}`, body(item.id && !item.id.startsWith('new_') ? 'PUT' : 'POST', item)),
  togglePackageFeatured: (id: string) => request<SafariPackageItem>(`/packages/${key(id)}/toggle-featured`, body('PATCH')),
  deletePackage: (id: string) => request<void>(`/packages/${key(id)}`, body('DELETE')),
  getFleet: () => request<FleetVehicle[]>('/fleet'),
  saveFleetVehicle: async (item: FleetVehicle) => {
    const existing = (await request<FleetVehicle[]>('/fleet')).some(v => v.id === item.id);
    return request<FleetVehicle>(`/fleet${existing ? `/${key(item.id)}` : ''}`, body(existing ? 'PUT' : 'POST', item));
  },
  deleteFleetVehicle: (id: string) => request<void>(`/fleet/${key(id)}`, body('DELETE')),
  getSubscribers: () => request<NewsletterSubscriber[]>('/subscribers'),
  addSubscriber: (email: string, source = 'admin_entry') => request<NewsletterSubscriber>('/subscribers', body('POST', { email, source })),
  toggleSubscriberStatus: (id: string) => request<void>(`/subscribers/${key(id)}/toggle`, body('PATCH')),
  deleteSubscriber: (id: string) => request<void>(`/subscribers/${key(id)}`, body('DELETE')),
  getReviews: () => request<CustomerReview[]>('/reviews'),
  saveReview: async (item: CustomerReview) => {
    const existing = (await request<CustomerReview[]>('/reviews')).some(v => v.id === item.id);
    return request<CustomerReview>(`/reviews${existing ? `/${key(item.id)}` : ''}`, body(existing ? 'PUT' : 'POST', item));
  },
  deleteReview: (id: string) => request<void>(`/reviews/${key(id)}`, body('DELETE')),
  getBlog: () => request<BlogPost[]>('/blog').then(normalizeBlogArticles),
  saveBlog: (post: BlogPost, originalSlug?: string) => request<BlogPost>(`/blog${originalSlug ? `/${key(originalSlug)}` : ''}`, body(originalSlug ? 'PUT' : 'POST', normalizeBlogArticle(post))).then(normalizeBlogArticle),
  deleteBlog: (slug: string) => request<void>(`/blog/${key(slug)}`, body('DELETE')),
  getTourismNews: () => request<TourismNewsAdminItem[]>('/news'),
  updateNews: (id: number, data: { is_featured?: boolean; is_active?: boolean }) => request<TourismNewsAdminItem>(`/news/${id}`, body('PATCH', data)),
  getSettings: () => request<BusinessSettings>('/settings'),
  saveSettings: (settings: BusinessSettings) => request<BusinessSettings>('/settings', body('PUT', settings)),
  getStats: () => request<DashboardStats>('/dashboard/stats'),
  uploadImage: (file: File) => {
    const form = new FormData(); form.append('image', file);
    return request<{ url: string }>('/media', { method: 'POST', body: form });
  },
  testTelegram: () => request<void>('/test-telegram', body('POST')),
  async runHealthCheck(): Promise<SystemHealthCheckResult> {
    const start = performance.now();
    const data = await request<{ database: boolean; storageWritable: boolean; mailConfigured: boolean; telegramConfigured: boolean }>('/health');
    return {
      apiOnline: data.database, endpointTested: `${getApiBaseUrl()}/admin/health`, latencyMs: Math.round(performance.now() - start),
      environment: ['localhost', '127.0.0.1'].includes(window.location.hostname) ? 'local' : 'production_cpanel',
      newsApiStatus: data.database ? 'healthy' : 'offline', contactApiStatus: data.storageWritable ? 'healthy' : 'degraded',
      message: `Database: connected. Storage: ${data.storageWritable ? 'writable' : 'not writable'}. Mail: ${data.mailConfigured ? 'configured' : 'not configured'}. Telegram: ${data.telegramConfigured ? 'configured' : 'not configured'}. Delivery requires a real send test.`,
    };
  },
};
