export interface TourismNewsItem {
  id?: number;
  title: string;
  summary: string;
  content: string;
  category: string;
  emoji: string;
  source_name: string;
  source_url?: string;
  image_url?: string;
  published_at: string;
  is_featured?: boolean;
}

export const FALLBACK_TOURISM_NEWS: TourismNewsItem[] = [
  {
    id: 1,
    title: 'Bwindi Welcomes New Baby Gorilla in the Rushaga Sector',
    summary: 'Uganda Wildlife Authority rangers celebrate the birth of a healthy infant mountain gorilla, marking another milestone for conservation.',
    content: "Conservationists in Bwindi Impenetrable National Park are rejoicing after park rangers registered the birth of a healthy mountain gorilla infant in the famed Rushaga sector. The new arrival brings the family's total to 14 individuals, reflecting the steady success of dedicated community rangers and anti-poaching patrols.\n\nFor safari enthusiasts, this population boom confirms Bwindi as the world's premier gorilla trekking sanctuary. With over half of the globe's wild mountain gorillas calling Uganda home, trekkers booking with ComeAgain Safaris can look forward to intimate, unforgettable encounters with these gentle giants.",
    category: 'Wildlife',
    emoji: '🦍',
    source_name: 'Uganda Wildlife Authority',
    source_url: 'https://ugandawildlife.org',
    image_url: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80',
    published_at: new Date(Date.now() - 24 * 3600 * 1000).toISOString(),
    is_featured: true,
  },
  {
    id: 2,
    title: 'Uganda Airlines Expands Direct Flight Network to Entebbe Hub',
    summary: 'New regional and intercontinental flight routes make reaching Uganda’s safari circuits faster and more convenient than ever.',
    content: "Reaching the Pearl of Africa has never been more seamless. Uganda Airlines has expanded its route network, establishing new direct linkages and frequency boosts connecting Entebbe International Airport with key regional and international hubs.\n\nTravelers landing at Entebbe can now transition swiftly onto domestic bush flights directly into airstrips across Murchison Falls, Kidepo Valley, and Kihihi (for Bwindi), drastically reducing overland transit times and maximizing days spent observing wildlife.",
    category: 'Aviation',
    emoji: '✈️',
    source_name: 'Uganda Civil Aviation Authority',
    source_url: 'https://ugandatourismcenter.com',
    image_url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    published_at: new Date(Date.now() - 3 * 24 * 3600 * 1000).toISOString(),
    is_featured: true,
  },
  {
    id: 3,
    title: 'Ziwa Rhino Sanctuary Records Historic Population Growth',
    summary: 'Uganda’s sole wild rhino breeding sanctuary surpasses 40 southern white rhinos, moving closer to national park reintroduction.',
    content: "Ziwa Rhino Sanctuary, located en route to Murchison Falls National Park, has officially celebrated another successful birth, pushing its thriving population beyond 40 southern white rhinos. The sanctuary stands as a global beacon for community-centered conservation.\n\nEvery ComeAgain Safari heading north to Murchison Falls includes an exhilarating on-foot rhino trek at Ziwa, giving travelers the rare thrill of tracking these prehistoric megafauna alongside expert armed rangers.",
    category: 'Conservation',
    emoji: '🦏',
    source_name: 'Rhino Fund Uganda',
    source_url: 'https://ugandawildlife.org',
    image_url: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80',
    published_at: new Date(Date.now() - 5 * 24 * 3600 * 1000).toISOString(),
    is_featured: true,
  },
  {
    id: 4,
    title: 'Kidepo Valley Ranked Among Africa’s Most Spectacular Wildernesses',
    summary: 'International travel critics highlight Kidepo Valley for untouched wilderness, dramatic jagged horizons, and legendary cheetah sightings.',
    content: "Nestled in Uganda’s rugged northeastern corner, Kidepo Valley National Park has once again been crowned one of Africa’s top true wilderness destinations. Renowned for its sweeping golden savannas flanked by the Morungole mountain range, Kidepo offers game viewing that feels wild, untamed, and free from crowds.\n\nVisitors commonly witness vast herds of Cape buffalo, majestic ostriches, and tree-climbing lions. ComeAgain Safaris provides specialized fly-in and rugged overland expeditions for travelers yearning for Africa in its purest form.",
    category: 'Destinations',
    emoji: '🦁',
    source_name: 'Explore Uganda / UTB',
    source_url: 'https://exploreuganda.com',
    image_url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    published_at: new Date(Date.now() - 7 * 24 * 3600 * 1000).toISOString(),
    is_featured: false,
  },
  {
    id: 5,
    title: 'Uganda Tourism Board Unveils Enhanced E-Visa Guidelines',
    summary: 'Streamlined online visa processing offers international adventurers faster approvals and transparent tourist documentation.',
    content: "The Ministry of Internal Affairs alongside the Uganda Tourism Board has upgraded the electronic immigration portal, reducing processing turnaround times for single-entry tourist visas and the popular East Africa Tourist Visa.\n\nOur concierge travel specialists at ComeAgain Safaris assist all booked guests with personalized visa step-by-step guidance, ensuring a smooth, stress-free arrival at Entebbe.",
    category: 'Travel Advisory',
    emoji: '📋',
    source_name: 'Ministry of Internal Affairs',
    source_url: 'https://visas.immigration.go.ug',
    image_url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
    published_at: new Date(Date.now() - 9 * 24 * 3600 * 1000).toISOString(),
    is_featured: false,
  },
  {
    id: 6,
    title: 'Queen Elizabeth National Park Expands Lion Collaring & Monitoring',
    summary: 'Cutting-edge satellite telemetry collars empower rangers to safeguard the famous tree-climbing lions of Ishasha.',
    content: "In a proactive drive to mitigate human-wildlife conflict and monitor predator health, the Uganda Wildlife Authority and conservation partners have expanded satellite tracking collars across lion prides in Queen Elizabeth National Park.\n\nThis high-tech initiative ensures that prides roaming the Ishasha fig trees remain healthy, protected, and accessible for conscientious safari-goers seeking the iconic sight of lions lounging high above the savannah.",
    category: 'Conservation',
    emoji: '🌿',
    source_name: 'Uganda Carnivore Program',
    source_url: 'https://ugandawildlife.org',
    image_url: 'https://images.unsplash.com/photo-1614027164847-1b28caa142e9?auto=format&fit=crop&w=1200&q=80',
    published_at: new Date(Date.now() - 12 * 24 * 3600 * 1000).toISOString(),
    is_featured: false,
  },
];

export async function fetchTourismNews(): Promise<TourismNewsItem[]> {
  try {
    const baseUrl = (import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000').replace(/\/+$/, '');
    const endpoint = baseUrl.endsWith('/api') ? `${baseUrl}/tourism-news` : `${baseUrl}/api/tourism-news`;

    const res = await fetch(endpoint, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.data) && data.data.length > 0) {
        return data.data;
      }
    }
  } catch (err) {
    console.warn('Tourism news fetch fallback applied:', err);
  }

  return FALLBACK_TOURISM_NEWS;
}
