import type {
  SafariInquiry,
  SafariPackageItem,
  FleetVehicle,
  NewsletterSubscriber,
  CustomerReview,
  BusinessSettings,
  DashboardStats,
  AdminUser,
} from '../types/adminTypes';
import { businessConfig } from '../../data/businessConfig';

const STORAGE_KEYS = {
  INQUIRIES: 'comeagain_admin_inquiries',
  PACKAGES: 'comeagain_admin_packages',
  FLEET: 'comeagain_admin_fleet',
  SUBSCRIBERS: 'comeagain_admin_subscribers',
  REVIEWS: 'comeagain_admin_reviews',
  SETTINGS: 'comeagain_admin_settings',
  AUTH_USER: 'comeagain_admin_user',
};

// Initial Seed Users
export const DEMO_ADMIN_USERS: AdminUser[] = [
  {
    id: 'user_1',
    name: 'Ronald Crisen',
    email: 'admin@comeagaintoursandtravels.com',
    role: 'super_admin',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    phone: '+256 774 243 747',
  },
  {
    id: 'user_2',
    name: 'Sarah Namubiru',
    email: 'safari@comeagaintoursandtravels.com',
    role: 'safari_consultant',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    phone: '+256 786 016 031',
  },
  {
    id: 'user_3',
    name: 'David Ochieng',
    email: 'content@comeagaintoursandtravels.com',
    role: 'content_editor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    phone: '+256 701 999 888',
  },
];

// Initial Seed Inquiries
const INITIAL_INQUIRIES: SafariInquiry[] = [
  {
    id: 'inq_001',
    clientName: 'Alexander Wright',
    email: 'alex.wright@gmail.com',
    phone: '+44 7911 123456',
    country: 'United Kingdom',
    source: 'safari_planner',
    packageInterest: '3-Day Bwindi Gorilla Trekking Fly-in Safari',
    travelDate: '2026-11-14',
    durationDays: 3,
    travelersCount: 2,
    estimatedBudget: '$3,800 - $4,500',
    status: 'itinerary_sent',
    message: 'Looking for a private 3-day fly-in gorilla trek from Entebbe to Kihihi. We prefer luxury lodge accommodation (Clouds Mountain Gorilla Lodge or Sanctuary Gorilla Forest Camp).',
    notes: [
      {
        id: 'n_1',
        author: 'Ronald Crisen',
        text: 'Sent customized quote including 2 UWA Gorilla Permits ($800 each) and Aerolink flight vouchers.',
        createdAt: '2026-10-14T09:30:00Z',
      },
    ],
    assignedTo: 'Ronald Crisen',
    createdAt: '2026-10-12T14:22:00Z',
    updatedAt: '2026-10-14T09:30:00Z',
  },
  {
    id: 'inq_002',
    clientName: 'Dr. Elena Rostova',
    email: 'elena.rostova@travelbio.de',
    phone: '+49 170 555 4321',
    country: 'Germany',
    source: 'contact_form',
    packageInterest: '10-Day Complete Pearl of Uganda Grand Wildlife Safari',
    travelDate: '2026-12-05',
    durationDays: 10,
    travelersCount: 4,
    estimatedBudget: '$12,000 - $14,000',
    status: 'new',
    message: 'Family of 4 planning a comprehensive wildlife, chimpanzee tracking in Kibale, and mountain gorilla safari. Need comfortable 4x4 pop-up roof vehicle with seasoned guide.',
    notes: [],
    assignedTo: 'Sarah Namubiru',
    createdAt: '2026-10-15T08:15:00Z',
    updatedAt: '2026-10-15T08:15:00Z',
  },
  {
    id: 'inq_003',
    clientName: 'Mark van der Merwe',
    email: 'mark@capetownadventures.co.za',
    phone: '+27 82 444 9876',
    country: 'South Africa',
    source: 'car_hire',
    packageInterest: 'Self-Drive 4x4 Land Cruiser with Rooftop Tent',
    travelDate: '2026-10-28',
    durationDays: 14,
    travelersCount: 2,
    estimatedBudget: '$2,200',
    status: 'confirmed',
    message: 'Requesting 14-day car hire for Murchison, Kidepo Valley and Sipi Falls. Need satellite GPS, dual spare tires, and camping gear.',
    notes: [
      {
        id: 'n_2',
        author: 'Sarah Namubiru',
        text: 'Deposit received. Land Cruiser V8 (UAX 892C) reserved and inspected.',
        createdAt: '2026-10-13T16:00:00Z',
      },
    ],
    assignedTo: 'Sarah Namubiru',
    createdAt: '2026-10-10T11:45:00Z',
    updatedAt: '2026-10-13T16:00:00Z',
  },
  {
    id: 'inq_004',
    clientName: 'Chloe Bennett',
    email: 'chloe.bennett@nycphoto.org',
    phone: '+1 212 555 0199',
    country: 'United States',
    source: 'package_booking',
    packageInterest: '5-Day Queen Elizabeth & Bwindi Primates Expedition',
    travelDate: '2027-01-10',
    durationDays: 5,
    travelersCount: 1,
    estimatedBudget: '$2,950',
    status: 'contacted',
    message: 'Solo professional wildlife photographer looking to photograph tree-climbing lions in Ishasha and one gorilla family in Rushaga sector.',
    notes: [
      {
        id: 'n_3',
        author: 'Ronald Crisen',
        text: 'Spoke via WhatsApp. Sent recommendations for photography window seats in our safari Land Cruiser.',
        createdAt: '2026-10-14T11:00:00Z',
      },
    ],
    assignedTo: 'Ronald Crisen',
    createdAt: '2026-10-13T19:20:00Z',
    updatedAt: '2026-10-14T11:00:00Z',
  },
  {
    id: 'inq_005',
    clientName: 'Jean-Luc Moreau',
    email: 'jl.moreau@orange.fr',
    phone: '+33 6 12 34 56 78',
    country: 'France',
    source: 'whatsapp',
    packageInterest: 'Custom Birding & Chimpanzee Habituation',
    travelDate: '2026-11-20',
    durationDays: 7,
    travelersCount: 2,
    estimatedBudget: '$4,200',
    status: 'new',
    message: 'Inquiring through WhatsApp about Shoebill Stork tracking in Mabamba Swamp and Chimpanzee Habituation Experience (CHEX) in Kibale.',
    notes: [],
    assignedTo: 'Ronald Crisen',
    createdAt: '2026-10-15T07:45:00Z',
    updatedAt: '2026-10-15T07:45:00Z',
  },
];

// Initial Seed Packages matching siteData.packagesPage.sections
const INITIAL_PACKAGES: SafariPackageItem[] = [
  {
    id: 'pkg_001',
    slug: '3-day-bwindi-gorilla-trekking',
    title: '3-Day Bwindi Impenetrable Mountain Gorilla Trekking Expedition',
    category: 'Gorilla Trekking',
    durationDays: 3,
    durationNights: 2,
    price: '1450$',
    priceUSD: 1450,
    priceUGX: 5400000,
    per: '1 person',
    wildlife: ['Mountain Gorilla', 'Black-and-White Colobus', 'L\'Hoest\'s Monkey'],
    highlights: [
      'Official UWA Mountain Gorilla Habituation / Trekking Permit included',
      'Scenic drive through the terraced green hills of Kigezi ("Switzerland of Africa")',
      'Equator water experiment experience and photography stop',
      'Community walk with the Batwa indigenous cultural guides',
    ],
    image: `${import.meta.env.BASE_URL}images/Gorillaa.webp`,
    featured: true,
    status: 'published',
    details: {
      duration: '3 Days / 2 Nights',
      location: 'Bwindi Impenetrable National Park',
      transport: '4x4 Custom Safari Land Cruiser with Pop-up Roof',
      accommodation: 'Rushaga Gorilla Lodge / Mahogany Springs',
      gallery: [
        `${import.meta.env.BASE_URL}images/Gorillaa.webp`,
        `${import.meta.env.BASE_URL}images/pic1.webp`,
        `${import.meta.env.BASE_URL}images/pic11.webp`,
        `${import.meta.env.BASE_URL}images/scene.webp`,
      ],
      itinerary: [
        {
          day: 1,
          title: 'Kampala/Entebbe to Bwindi Impenetrable Forest (Equator Stopover)',
          description: 'Morning pickup by your safari driver-guide. Journey southwest across the Equator, passing rolling hills and long-horned Ankole cattle.',
          meals: 'Lunch, Dinner',
          stay: 'Rushaga Gorilla Lodge / Mahogany Springs',
        },
        {
          day: 2,
          title: 'The Gorilla Trekking Experience of a Lifetime',
          description: 'Early breakfast, ranger briefing at UWA sector headquarters, and trek into the dense jungle. Spend one life-affirming hour with a wild gorilla family.',
          meals: 'Breakfast, Packed Lunch, Dinner',
          stay: 'Rushaga Gorilla Lodge / Mahogany Springs',
        },
        {
          day: 3,
          title: 'Scenic Return Journey to Entebbe / Airport Drop-off',
          description: 'Leisurely breakfast before departing the highlands back towards Entebbe for your evening outbound international flight.',
          meals: 'Breakfast, Lunch',
          stay: 'N/A',
        },
      ],
      inclusions: [
        'Official UWA Gorilla Trekking Permit ($800 value)',
        '4x4 Safari Land Cruiser with pop-up roof and fuel',
        'Full board lodge accommodation for 2 nights',
        'Services of a dedicated English-speaking certified safari guide',
        'All national park entry fees and government taxes',
        'Bottled drinking water in the safari vehicle throughout',
      ],
      exclusions: [
        'International flights and Uganda tourist visa',
        'Personal travel & medical insurance',
        'Gratuities and tips for rangers, guides, and lodge staff',
        'Alcoholic and premium beverages',
      ],
    },
  },
  {
    id: 'pkg_002',
    slug: '5-day-queen-elizabeth-bwindi-safari',
    title: '5-Day Savannah Wildlife & Gorilla Trekking Classic',
    category: 'Wildlife Safaris',
    durationDays: 5,
    durationNights: 4,
    price: '2350$',
    priceUSD: 2350,
    priceUGX: 8750000,
    per: '1 person',
    wildlife: ['Lion', 'Leopard', 'Elephant', 'Mountain Gorilla', 'Hippo'],
    highlights: [
      'Two-hour Kazinga Channel boat safari with world-class elephant and hippo sightings',
      'Search for unique tree-climbing lions resting in massive fig trees of Ishasha',
      'Guaranteed gorilla trekking permit in Bwindi Impenetrable Forest',
      'Scenic crater lake explosion drive in Queen Elizabeth',
    ],
    image: `${import.meta.env.BASE_URL}images/tree-lion.webp`,
    featured: true,
    status: 'published',
    details: {
      duration: '5 Days / 4 Nights',
      location: 'Queen Elizabeth National Park & Bwindi',
      transport: '4x4 Extended Safari Land Cruiser',
      accommodation: 'Mweya Safari Lodge / Bwindi Haven Lodge',
      gallery: [
        `${import.meta.env.BASE_URL}images/tree-lion.webp`,
        `${import.meta.env.BASE_URL}images/Gorillaa.webp`,
        `${import.meta.env.BASE_URL}images/pic8.webp`,
        `${import.meta.env.BASE_URL}images/lions-tree.webp`,
      ],
      itinerary: [
        {
          day: 1,
          title: 'Entebbe to Queen Elizabeth National Park via Fort Portal',
          description: 'Drive along the Rwenzori Mountain foothills, arriving at Queen Elizabeth for an evening sunset game drive.',
          meals: 'Lunch, Dinner',
          stay: 'Mweya Safari Lodge / Buffalo Safari Lodge',
        },
        {
          day: 2,
          title: 'Kasenyi Plains Game Drive & Kazinga Channel Boat Cruise',
          description: 'Morning game drive in search of lions, leopards, Uganda kobs. Afternoon boat cruise on the Kazinga Channel.',
          meals: 'Breakfast, Lunch, Dinner',
          stay: 'Mweya Safari Lodge / Buffalo Safari Lodge',
        },
        {
          day: 3,
          title: 'Tree-Climbing Lions of Ishasha to Bwindi High Forest',
          description: 'Traverse the southern Ishasha sector tracking tree-climbing lions, then climb into the mist-covered peaks of Bwindi.',
          meals: 'Breakfast, Lunch, Dinner',
          stay: 'Bwindi Haven Lodge',
        },
        {
          day: 4,
          title: 'Gorilla Trekking in Bwindi Impenetrable National Park',
          description: 'Trek with expert rangers into the rainforest and spend one hour with the mountain gorillas.',
          meals: 'Breakfast, Packed Lunch, Dinner',
          stay: 'Bwindi Haven Lodge',
        },
        {
          day: 5,
          title: 'Return to Entebbe via Lake Mburo Highway',
          description: 'Scenic journey back through Mbarara, stopping for traditional lunch and equator photos before airport transfer.',
          meals: 'Breakfast, Lunch',
          stay: 'N/A',
        },
      ],
      inclusions: [
        '1x UWA Mountain Gorilla Trekking Permit',
        'Kazinga Channel Boat Cruise ticket',
        'All park entrance fees and game drive vehicle fees',
        '4x4 custom safari vehicle with guide & fuel',
        '4 nights full board accommodation',
      ],
      exclusions: [
        'International flights and visas',
        'Tips & porter fees during gorilla trekking',
        'Personal souvenirs and drinks',
      ],
    },
  },
  {
    id: 'pkg_003',
    slug: '3-days-murchison-falls-safari',
    title: '3-Day Murchison Falls Big Five Safari & Nile Cruise',
    category: 'Wildlife Safaris',
    durationDays: 3,
    durationNights: 2,
    price: '980$',
    priceUSD: 980,
    priceUGX: 3650000,
    per: '1 person',
    wildlife: ['White Rhino', 'Elephant', 'Rothchild Giraffe', 'Nile Crocodile'],
    highlights: [
      'On-foot White Rhino tracking at Ziwa Rhino Sanctuary',
      'Hike to the dramatic Top of Murchison Falls',
      'Boat cruise to the base of the falls along the historic Victoria Nile',
      'Sightings of Rothschild’s giraffes, elephants, lions, and shoebill storks',
    ],
    image: `${import.meta.env.BASE_URL}images/Murchison.webp`,
    featured: true,
    status: 'published',
    details: {
      duration: '3 Days / 2 Nights',
      location: 'Murchison Falls National Park',
      transport: '4x4 Pop-up Safari Van / Land Cruiser',
      accommodation: 'Parkside Safari Lodge / Paraa Safari Lodge',
      gallery: [
        `${import.meta.env.BASE_URL}images/Murchison.webp`,
        `${import.meta.env.BASE_URL}images/pic11.webp`,
        `${import.meta.env.BASE_URL}images/pic1.webp`,
        `${import.meta.env.BASE_URL}images/pic8.webp`,
      ],
      itinerary: [
        {
          day: 1,
          title: 'Kampala to Ziwa Rhino Sanctuary & Murchison Falls',
          description: 'Early morning start, trek rhinos on foot at Ziwa, proceed to Murchison and visit the roaring Top of the Falls.',
          meals: 'Lunch, Dinner',
          stay: 'Parkside Safari Lodge',
        },
        {
          day: 2,
          title: 'Northern Delta Game Drive & Nile River Boat Cruise',
          description: 'Dawn game drive across the Buligi savannah circuit. Afternoon boat safari to the bottom of Murchison Falls.',
          meals: 'Breakfast, Lunch, Dinner',
          stay: 'Parkside Safari Lodge',
        },
        {
          day: 3,
          title: 'Morning Game Drive & Return to Kampala',
          description: 'Optional brief morning game drive before driving back to Kampala or Entebbe.',
          meals: 'Breakfast, Lunch',
          stay: 'N/A',
        },
      ],
      inclusions: [
        'Ziwa Rhino Sanctuary tracking fees',
        'Murchison Falls boat safari and park entry',
        '4x4 safari cruiser with pop-up roof',
        '2 nights full board accommodation',
      ],
      exclusions: ['Personal items, tips, international flights'],
    },
  },
];

// Initial Seed Fleet
const INITIAL_FLEET: FleetVehicle[] = [
  {
    id: 'veh_001',
    name: 'Toyota Land Cruiser V8 Safari Edition (Pop-up Roof)',
    category: '4x4_safari_land_cruiser',
    capacityPassengers: 7,
    dailyRateSelfDriveUSD: 160,
    dailyRateWithDriverUSD: 200,
    features: ['Pop-up roof for 360° game viewing', 'Dual fuel tanks & dual spare tires', 'Onboard fridge/cooler box', 'Inverter for camera charging', 'High-lift jack & winch'],
    status: 'available',
    licensePlate: 'UBM 412K',
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'veh_002',
    name: 'Custom 4x4 Safari Land Cruiser Extended (9-Seater)',
    category: '4x4_safari_land_cruiser',
    capacityPassengers: 9,
    dailyRateSelfDriveUSD: 190,
    dailyRateWithDriverUSD: 240,
    features: ['Extended chassis for maximum legroom', 'Window seat for every guest', 'Large pop-up observation roof', 'Heavy-duty suspension'],
    status: 'on_safari',
    licensePlate: 'UBA 982E',
    imageUrl: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'veh_003',
    name: 'Toyota HiAce Safari Minivan (4x4 Pop-up)',
    category: 'safari_van',
    capacityPassengers: 8,
    dailyRateSelfDriveUSD: 90,
    dailyRateWithDriverUSD: 130,
    features: ['Pop-up roof', 'Full-time 4WD', 'Air conditioning', 'Luggage roof rack'],
    status: 'available',
    licensePlate: 'UBJ 731H',
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'veh_004',
    name: 'Toyota Super Custom 4WD Luxury Van',
    category: 'super_custom',
    capacityPassengers: 6,
    dailyRateSelfDriveUSD: 85,
    dailyRateWithDriverUSD: 120,
    features: ['Reclining plush velvet seats', 'Panoramic glass moonroof', 'Smooth highway cruiser'],
    status: 'maintenance',
    licensePlate: 'UBC 104M',
    imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'veh_005',
    name: 'Toyota Coaster Bus (28-Seater)',
    category: 'coaster_bus',
    capacityPassengers: 28,
    dailyRateSelfDriveUSD: 220,
    dailyRateWithDriverUSD: 280,
    features: ['Large group safari transit', 'Public address microphone system', 'Overhead luggage racks', 'Air conditioned'],
    status: 'available',
    licensePlate: 'UBD 309P',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
  },
];

// Initial Seed Subscribers
const INITIAL_SUBSCRIBERS: NewsletterSubscriber[] = [
  {
    id: 'sub_001',
    email: 'traveler.john@gmail.com',
    source: 'blog',
    isActive: true,
    subscribedAt: '2026-10-14T11:20:00Z',
    ipAddress: '102.134.45.12',
  },
  {
    id: 'sub_002',
    email: 'safari.enthusiast@yahoo.co.uk',
    source: 'footer',
    isActive: true,
    subscribedAt: '2026-10-12T09:14:00Z',
    ipAddress: '86.15.22.90',
  },
  {
    id: 'sub_003',
    email: 'nature.lover99@gmail.com',
    source: 'gorilla-permits-guide',
    isActive: true,
    subscribedAt: '2026-10-10T16:45:00Z',
    ipAddress: '197.239.5.101',
  },
  {
    id: 'sub_004',
    email: 'adventures_with_sophia@outlook.com',
    source: 'cost_calculator',
    isActive: true,
    subscribedAt: '2026-10-08T18:02:00Z',
    ipAddress: '24.112.98.54',
  },
  {
    id: 'sub_005',
    email: 'bruce.wayne@gothamcorp.com',
    source: 'footer',
    isActive: false,
    subscribedAt: '2026-09-29T14:30:00Z',
    ipAddress: '156.0.4.88',
  },
];

// Initial Seed Customer Reviews
const INITIAL_REVIEWS: CustomerReview[] = [
  {
    id: 'rev_001',
    authorName: 'Marcus & Emma Lindqvist',
    authorCountry: 'Sweden',
    rating: 5,
    source: 'TripAdvisor',
    safariTaken: '3-Day Bwindi Mountain Gorilla Trekking',
    reviewTitle: 'A life-changing encounter with the gentle giants!',
    reviewText: 'From the minute Ronald picked us up in Entebbe, we knew we were in the best hands. The 4x4 cruiser was immaculate and our driver-guide was like an encyclopedia of Ugandan wildlife and culture.',
    isFeatured: true,
    status: 'approved',
    date: '2026-10-02',
  },
  {
    id: 'rev_002',
    authorName: 'Sarah Jenkins',
    authorCountry: 'Australia',
    rating: 5,
    source: 'Google',
    safariTaken: '10-Day Complete Pearl of Africa Wildlife Tour',
    reviewTitle: 'Unbeatable service, incredible knowledge, unforgettable memories',
    reviewText: 'Saw the big five, tree-climbing lions, chimps in Kibale and the gorilla family in Rushaga. Come Again Safaris delivered 110% of what was promised. Highly recommended to anyone visiting Uganda!',
    isFeatured: true,
    status: 'approved',
    date: '2026-09-24',
  },
  {
    id: 'rev_003',
    authorName: 'Jean-Pierre Dubois',
    authorCountry: 'Belgium',
    rating: 5,
    source: 'Direct Safari Feedback',
    safariTaken: 'Car Hire Uganda — 4x4 Land Cruiser Self-Drive',
    reviewTitle: 'Top-tier 4x4 vehicle that conquered Murchison and Kidepo',
    reviewText: 'Car was in stellar mechanical condition with excellent all-terrain tires. Ronald was always available on WhatsApp for advice on routes. We will come again without hesitation.',
    isFeatured: true,
    status: 'approved',
    date: '2026-09-18',
  },
];

// Initial Seed Settings
const INITIAL_SETTINGS: BusinessSettings = {
  companyName: businessConfig.name,
  tagline: businessConfig.tagline,
  primaryEmail: businessConfig.email.primary,
  phoneDisplay: businessConfig.phone.display,
  phoneRaw: businessConfig.phone.raw,
  whatsappDisplay: businessConfig.whatsapp.display,
  whatsappRaw: businessConfig.whatsapp.rawWithPlus,
  physicalAddress: `${businessConfig.address.street}, ${businessConfig.address.city}`,
  city: businessConfig.address.city,
  country: businessConfig.address.country,
  currencyRates: {
    USD_TO_UGX: 3750,
    USD_TO_EUR: 0.92,
    USD_TO_GBP: 0.78,
  },
  licenses: [...businessConfig.licenses],
  socials: {
    facebook: businessConfig.socials.facebook,
    instagram: businessConfig.socials.instagram,
    tripadvisor: businessConfig.socials.tripadvisor,
  },
};

// LocalStorage Persistence Helpers
function getStored<T>(key: string, fallback: T): T {
  try {
    const val = localStorage.getItem(key);
    if (!val) {
      localStorage.setItem(key, JSON.stringify(fallback));
      return fallback;
    }
    return JSON.parse(val) as T;
  } catch (e) {
    console.warn(`Error reading localStorage for ${key}:`, e);
    return fallback;
  }
}

function setStored<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error(`Error saving localStorage for ${key}:`, e);
  }
}

export const MockAdminService = {
  // Auth
  getCurrentUser(): AdminUser | null {
    return getStored<AdminUser | null>(STORAGE_KEYS.AUTH_USER, DEMO_ADMIN_USERS[0]);
  },
  setCurrentUser(user: AdminUser | null): void {
    if (user) {
      setStored(STORAGE_KEYS.AUTH_USER, user);
    } else {
      localStorage.removeItem(STORAGE_KEYS.AUTH_USER);
    }
  },

  // Inquiries
  getInquiries(): SafariInquiry[] {
    return getStored<SafariInquiry[]>(STORAGE_KEYS.INQUIRIES, INITIAL_INQUIRIES);
  },
  saveInquiry(inquiry: SafariInquiry): SafariInquiry {
    const inquiries = this.getInquiries();
    const idx = inquiries.findIndex((i) => i.id === inquiry.id);
    if (idx >= 0) {
      inquiries[idx] = { ...inquiry, updatedAt: new Date().toISOString() };
    } else {
      inquiries.unshift(inquiry);
    }
    setStored(STORAGE_KEYS.INQUIRIES, inquiries);
    return inquiry;
  },
  deleteInquiry(id: string): void {
    const inquiries = this.getInquiries().filter((i) => i.id !== id);
    setStored(STORAGE_KEYS.INQUIRIES, inquiries);
  },

  // Packages
  getPackages(): SafariPackageItem[] {
    return getStored<SafariPackageItem[]>(STORAGE_KEYS.PACKAGES, INITIAL_PACKAGES);
  },
  savePackage(pkg: SafariPackageItem): SafariPackageItem {
    const packages = this.getPackages();
    const idx = packages.findIndex((p) => p.id === pkg.id);
    if (idx >= 0) {
      packages[idx] = pkg;
    } else {
      packages.unshift(pkg);
    }
    setStored(STORAGE_KEYS.PACKAGES, packages);
    return pkg;
  },
  deletePackage(id: string): void {
    const packages = this.getPackages().filter((p) => p.id !== id);
    setStored(STORAGE_KEYS.PACKAGES, packages);
  },

  // Fleet
  getFleet(): FleetVehicle[] {
    return getStored<FleetVehicle[]>(STORAGE_KEYS.FLEET, INITIAL_FLEET);
  },
  saveFleetVehicle(vehicle: FleetVehicle): FleetVehicle {
    const fleet = this.getFleet();
    const idx = fleet.findIndex((v) => v.id === vehicle.id);
    if (idx >= 0) {
      fleet[idx] = vehicle;
    } else {
      fleet.unshift(vehicle);
    }
    setStored(STORAGE_KEYS.FLEET, fleet);
    return vehicle;
  },
  deleteFleetVehicle(id: string): void {
    const fleet = this.getFleet().filter((v) => v.id !== id);
    setStored(STORAGE_KEYS.FLEET, fleet);
  },

  // Subscribers
  getSubscribers(): NewsletterSubscriber[] {
    return getStored<NewsletterSubscriber[]>(STORAGE_KEYS.SUBSCRIBERS, INITIAL_SUBSCRIBERS);
  },
  addSubscriber(email: string, source = 'admin_entry'): NewsletterSubscriber {
    const subs = this.getSubscribers();
    const existing = subs.find((s) => s.email.toLowerCase() === email.toLowerCase());
    if (existing) return existing;

    const newSub: NewsletterSubscriber = {
      id: `sub_${Date.now()}`,
      email,
      source,
      isActive: true,
      subscribedAt: new Date().toISOString(),
    };
    subs.unshift(newSub);
    setStored(STORAGE_KEYS.SUBSCRIBERS, subs);
    return newSub;
  },
  toggleSubscriberStatus(id: string): void {
    const subs = this.getSubscribers().map((s) => (s.id === id ? { ...s, isActive: !s.isActive } : s));
    setStored(STORAGE_KEYS.SUBSCRIBERS, subs);
  },
  deleteSubscriber(id: string): void {
    const subs = this.getSubscribers().filter((s) => s.id !== id);
    setStored(STORAGE_KEYS.SUBSCRIBERS, subs);
  },

  // Reviews
  getReviews(): CustomerReview[] {
    const raw = getStored<any[]>(STORAGE_KEYS.REVIEWS, INITIAL_REVIEWS);
    return raw.map((r) => ({
      id: String(r.id || `rev_${Math.random()}`),
      authorName: r.authorName || r.author || 'Safari Guest',
      authorCountry: r.authorCountry || r.country || 'Verified Traveler',
      rating: typeof r.rating === 'number' ? r.rating : 5,
      source: r.source || 'TripAdvisor',
      safariTaken: r.safariTaken || (r.guideMentioned ? `Safari Guide: ${r.guideMentioned}` : 'Uganda Wildlife Safari'),
      reviewTitle: r.reviewTitle || r.headline || 'Verified Safari Experience',
      reviewText: r.reviewText || r.text || '',
      isFeatured: r.isFeatured !== undefined ? r.isFeatured : true,
      status: r.status || 'approved',
      date: r.date || 'Recent',
      tripadvisorReviewUrl: r.tripadvisorReviewUrl,
    }));
  },
  saveReview(rev: CustomerReview): CustomerReview {
    const reviews = this.getReviews();
    const idx = reviews.findIndex((r) => r.id === rev.id);
    if (idx >= 0) {
      reviews[idx] = rev;
    } else {
      reviews.unshift(rev);
    }
    setStored(STORAGE_KEYS.REVIEWS, reviews);
    return rev;
  },
  deleteReview(id: string): void {
    const reviews = this.getReviews().filter((r) => r.id !== id);
    setStored(STORAGE_KEYS.REVIEWS, reviews);
  },

  // Settings
  getSettings(): BusinessSettings {
    return getStored<BusinessSettings>(STORAGE_KEYS.SETTINGS, INITIAL_SETTINGS);
  },
  saveSettings(settings: BusinessSettings): BusinessSettings {
    setStored(STORAGE_KEYS.SETTINGS, settings);
    return settings;
  },

  // Dashboard Stats
  getStats(): DashboardStats {
    const inquiries = this.getInquiries();
    const activeLeads = inquiries.filter((i) => i.status !== 'completed' && i.status !== 'lost').length;
    const confirmed = inquiries.filter((i) => i.status === 'confirmed').length;
    const packages = this.getPackages();
    const fleet = this.getFleet();
    const subs = this.getSubscribers().filter((s) => s.isActive).length;

    // Estimate pipeline: total value of active inquiries
    const estimatedPipelineUSD = inquiries
      .filter((i) => i.status === 'new' || i.status === 'contacted' || i.status === 'itinerary_sent')
      .reduce((acc, curr) => {
        const match = curr.estimatedBudget?.match(/\$([\d,]+)/);
        const val = match ? parseInt(match[1].replace(/,/g, ''), 10) : 2500;
        return acc + val;
      }, 0);

    return {
      totalInquiries: inquiries.length,
      activeLeads,
      confirmedBookings: confirmed,
      estimatedPipelineUSD,
      totalSubscribers: subs,
      packagesCount: packages.length,
      fleetCount: fleet.length,
      publishedArticlesCount: 6,
    };
  },
};
