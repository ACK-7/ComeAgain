export type UserRole = 'super_admin' | 'safari_consultant' | 'content_editor';

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
}

export type InquiryStatus = 'new' | 'contacted' | 'itinerary_sent' | 'confirmed' | 'completed' | 'lost';
export type InquirySource = 'contact_form' | 'safari_planner' | 'package_booking' | 'whatsapp' | 'car_hire' | 'custom_quote';

export interface SafariInquiry {
  id: string;
  clientName: string;
  email: string;
  phone: string;
  country: string;
  source: InquirySource;
  packageInterest?: string;
  travelDate?: string;
  durationDays?: number;
  travelersCount: number;
  estimatedBudget?: string;
  status: InquiryStatus;
  message: string;
  notes: { id: string; author: string; text: string; createdAt: string }[];
  assignedTo?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  meals: string;
  stay: string;
}

export interface SafariPackageDetails {
  duration: string;
  location: string;
  transport: string;
  accommodation: string;
  gallery: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  testimonial?: {
    quote: string;
    author: string;
    platform: string;
    headline: string;
  };
}

export interface SafariPackageItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  durationDays: number;
  durationNights?: number;
  price: string;
  priceUSD: number;
  priceUGX?: number;
  per: string;
  wildlife: string[];
  highlights: string[];
  image: string;
  featured: boolean;
  status: 'published' | 'draft' | 'archived';
  details: SafariPackageDetails;
}

export interface FleetVehicle {
  id: string;
  name: string;
  category: '4x4_safari_land_cruiser' | 'safari_van' | 'super_custom' | 'coaster_bus' | 'rav4';
  capacityPassengers: number;
  dailyRateSelfDriveUSD: number;
  dailyRateWithDriverUSD: number;
  features: string[];
  status: 'available' | 'on_safari' | 'maintenance';
  licensePlate: string;
  imageUrl: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  source: string;
  isActive: boolean;
  subscribedAt: string;
  ipAddress?: string;
}

export interface CustomerReview {
  id: string;
  authorName: string;
  author?: string;
  authorCountry?: string;
  country?: string;
  avatar?: string;
  rating: number; // 1-5
  source: 'TripAdvisor' | 'Google' | 'Direct Safari Feedback' | string;
  safariTaken?: string;
  guideMentioned?: string;
  reviewTitle: string;
  headline?: string;
  reviewText: string;
  text?: string;
  isFeatured: boolean;
  status: 'approved' | 'pending' | 'rejected';
  date: string;
  tripadvisorReviewUrl?: string;
}

export interface TourismNewsAdminItem {
  id: number;
  title: string;
  summary: string;
  content: string;
  category: string;
  emoji: string;
  source_name: string;
  source_url?: string;
  image_url?: string;
  published_at: string;
  is_featured: boolean;
  is_active?: boolean;
  status?: 'active' | 'hidden';
}

export interface BusinessSettings {
  companyName: string;
  tagline: string;
  primaryEmail: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappDisplay: string;
  whatsappRaw: string;
  physicalAddress: string;
  city: string;
  country: string;
  currencyRates: {
    USD_TO_UGX: number;
    USD_TO_EUR: number;
    USD_TO_GBP: number;
  };
  licenses: string[];
  socials: {
    facebook: string;
    instagram: string;
    tripadvisor: string;
  };
}

export interface DashboardStats {
  totalInquiries: number;
  activeLeads: number;
  confirmedBookings: number;
  estimatedPipelineUSD: number;
  totalSubscribers: number;
  packagesCount: number;
  fleetCount: number;
  publishedArticlesCount: number;
}
