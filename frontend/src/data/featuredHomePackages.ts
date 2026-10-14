export interface FeaturedPackage {
  slug: string;
  title: string;
  price: string;
  per: string;
  category: string;
  durationDays: number;
  wildlife: string[];
  description?: string;
  destination?: string;
  bestFor?: string;
  highlights: string[];
  image: string;
}

export const featuredHomePackages: FeaturedPackage[] = [
  {
    slug: '11-days-classic-uganda-safari',
    title: '11 Days Classic Uganda Safari',
    price: '4250$',
    per: '1 person',
    category: 'Multi-Park Circuits',
    durationDays: 11,
    wildlife: ['Gorilla', 'Chimp', 'Lion', 'Elephant', 'Buffalo'],
    description: "A comprehensive 11-day journey through the heart of the Pearl of Africa. From chimpanzee tracking in Kibale to mountain gorillas in Bwindi, and from the savannahs of Queen Elizabeth to the serene waters of Lake Bunyonyi and the unique wildlife of Lake Mburo.",
    destination: 'Kibale, Queen Elizabeth, Bwindi, Bunyonyi & Mburo',
    bestFor: 'Travelers seeking a complete Ugandan circuit with a mix of primates, savannah wildlife, and scenic relaxation.',
    highlights: ['Chimpanzee tracking in Kibale', 'Queen Elizabeth game drives & Kazinga boat cruise', 'Tree-climbing lions of Ishasha', 'Mountain Gorilla trekking in Bwindi', 'Canoeing & relaxation at Lake Bunyonyi', 'Walking safari in Lake Mburo National Park'],
    image: `${import.meta.env.BASE_URL}images/wildlife.webp`,
  },
  {
    slug: '7-days-fly-pearl-of-africa',
    title: '7 Days Fly Package: The Pearl of Africa',
    price: '5200$',
    per: '1 person',
    category: 'Fly-In & Premium',
    durationDays: 7,
    wildlife: ['Gorilla', 'Chimpanzee', 'Lion', 'Elephant', 'Bird'],
    description: "The ultimate Ugandan expedition. Fly across the country to witness the Great Blue Turaco in Bigodi, track Chimpanzees in Kibale's rainforests and Kyambura's sunken gorge, and culminate your journey with the legendary mountain gorillas of Bwindi.",
    destination: 'Fort Portal, Queen Elizabeth & Bwindi',
    bestFor: 'High-end travelers seeking the most comprehensive and comfortable primate and wildlife experience.',
    highlights: ['Scheduled flights to Kasese and Bwindi', 'Chimpanzee tracking (Kibale & Kyambura)', 'Bigodi Swamp birding walk', 'Queen Elizabeth game drives & boat cruise', 'Mountain Gorilla trekking', 'Papaya Lake & Mazike Valley stays'],
    image: `${import.meta.env.BASE_URL}images/ugra.webp`,
  },
  {
    slug: '3-days-fly-murchison-falls',
    title: '3 Days Murchison Falls Fly-in Safari',
    price: '2320$',
    per: '1 person',
    category: 'Fly-In & Premium',
    durationDays: 3,
    wildlife: ['Lion', 'Elephant', 'Giraffe', 'Hippo', 'Crocodile'],
    highlights: ['Scheduled Aerolink flight to Pakuba', 'Nile Delta cruise (Shoebill spotting)', 'Boat cruise to the "Bottom of the Falls"', 'Top of the Falls guided hike', 'Paraa Safari Lodge (Deluxe Room)'],
    image: `${import.meta.env.BASE_URL}images/murhison-drone.webp`,
  }
];
