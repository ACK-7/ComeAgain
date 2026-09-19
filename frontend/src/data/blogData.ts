export interface BlogPostSection {
  heading?: string;
  paragraphs: string[];
  quote?: string;
  tips?: string[];
  image?: string;
  imageCaption?: string;
}

export interface LinkedPackage {
  title: string;
  slug: string;
  duration: string;
  price: string;
  image: string;
  highlights: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  category: 'Wildlife' | 'Culture' | 'Safari Tips' | 'Destinations';
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  featuredImage: string;
  featured?: boolean;
  sections: BlogPostSection[];
  linkedPackage?: LinkedPackage;
  faqs?: { question: string; answer: string }[];
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'tracking-mountain-gorillas',
    title: 'Tracking the Majestic Mountain Gorillas of Bwindi',
    subtitle: 'Everything you need to know about permit booking, fitness levels, and the magical 60-minute encounter in the mist.',
    excerpt: 'An unforgettable morning in the mists of Bwindi Impenetrable Forest — what it truly feels like to sit face-to-face with one of our closest wild relatives.',
    metaTitle: 'Bwindi Gorilla Trekking Guide 2026/27 | Come Again Tours',
    metaDescription: 'Expert insider guide to tracking mountain gorillas in Bwindi Impenetrable National Park, Uganda. Permit costs, packing list, fitness rules, and best lodges.',
    category: 'Wildlife',
    readTime: '6 min read',
    publishedDate: 'March 15, 2026',
    featured: true,
    author: {
      name: 'Asiima & Senior Ranger Team',
      role: 'Lead Safari Expedition Planners',
      image: `${import.meta.env.BASE_URL}images/asiima.png`,
    },
    featuredImage: `${import.meta.env.BASE_URL}images/ug-gorilla.jpg`,
    tags: ['Gorilla Trekking', 'Bwindi Forest', 'Uganda Wildlife', 'Safari Planning'],
    linkedPackage: {
      title: '3 Days Bwindi Gorilla Trekking Safari',
      slug: '3-days-gorilla-safari',
      duration: '3 Days / 2 Nights',
      price: '$1,450',
      image: `${import.meta.env.BASE_URL}images/Gorillaa.jpeg`,
      highlights: [
        'Guaranteed official UWA Mountain Gorilla permit included',
        'Private 4x4 Safari Land Cruiser with pop-up roof',
        'Luxury or Comfort eco-lodge inside Buhoma / Rushaga sector',
        'Scenic transit via the Equator and rolling green terraced hills',
      ],
    },
    sections: [
      {
        heading: 'The Sacred Silence of the Impenetrable Forest',
        paragraphs: [
          'Nothing in the natural world quite prepares you for the moment the dense jungle canopy parts, and you find yourself less than seven metres from a 200-kilogram Silverback mountain gorilla. In the ancient rainforest of Bwindi Impenetrable National Park, home to nearly half of the world’s surviving mountain gorillas, time seemingly suspends itself.',
          'The forest is alive with primordial energy: tangled vines, giant tree ferns dripping with morning dew, and the rhythmic sound of your ranger guide quietly macheteing a passage through the undergrowth. When you finally locate the gorilla family, the dominant silverback sits peacefully chewing wild bamboo shoots, while curious infants tumble over each other in playful somersaults.',
        ],
        quote: 'To lock eyes with a wild silverback is not just a safari sighting — it is a profound biological reconnection with our own evolutionary past.',
      },
      {
        heading: 'Permit Realities: Why Early Booking is Critical',
        paragraphs: [
          'The Uganda Wildlife Authority (UWA) strictly caps gorilla encounters to eight tourists per habituated gorilla group per day, with each group permitted only one single hour of human presence to protect the animals from respiratory diseases and stress.',
          'For peak travel months (June through September and December through February), permits frequently sell out 6 to 9 months in advance. Securing your permit through a licensed Association of Uganda Tour Operators (AUTO) partner guarantees you are booked in the sector that best aligns with your lodge and fitness capabilities.',
        ],
        tips: [
          'Permit Price: Foreign non-resident permits are $800 per person in Uganda (compared to $1,500 in neighboring Rwanda).',
          'Sectors Matter: Bwindi is divided into four distinct trailheads — Buhoma, Ruhija, Rushaga, and Nkuringo. Always coordinate your lodge with your permit sector to avoid 3-hour dawn transfers.',
          'Porter Advantage: Always hire a local community porter ($15–$20) at the briefing point. Not only does this assist your balance on steep volcanic slopes, but it directly finances education for local families.',
        ],
        image: `${import.meta.env.BASE_URL}images/Gorillaa.jpeg`,
        imageCaption: 'A habituated mountain gorilla resting peacefully on the slopes of Bwindi Impenetrable Forest.',
      },
      {
        heading: 'What You Must Pack for the Trek',
        paragraphs: [
          'Trekking duration can range from 90 minutes to 6 hours depending on where the family nested the previous night and how far they wandered foraging for food. Proper gear transforms an arduous hike into an exhilarating adventure.',
          'Sturdy, broken-in waterproof hiking boots with deep tread are mandatory. Pair these with lightweight gardening gloves (for gripping thorny vines), long breathable trousers tucked into socks (to deter biting safari ants), and a breathable rain jacket, as downpours can occur regardless of the season.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How physically demanding is gorilla trekking in Bwindi?',
        answer: 'Treks range from moderate to strenuous. Altitudes range from 1,160m to 2,600m above sea level with slippery slopes and dense foliage. However, with the assistance of walking sticks and local porters, travelers in their 70s regularly complete the trek comfortably.',
      },
      {
        question: 'What is the minimum age for gorilla permits?',
        answer: 'The official statutory minimum age set by the Uganda Wildlife Authority is 15 years old, strictly enforced to safeguard both gorilla health and youth visitor safety.',
      },
    ],
  },
  {
    slug: 'murchison-falls-guide',
    title: 'A Complete Guide to the Murchison Falls Safari',
    subtitle: 'Discover the world’s most powerful waterfall, teeming Nile river safaris, and legendary Big 5 savanna game drives.',
    excerpt: 'Discover the sheer power of the Nile crashing through a 7-metre gorge, and the diverse wildlife roaming Uganda\'s oldest and largest national park.',
    metaTitle: 'Murchison Falls Safari Complete Guide | Come Again Tours',
    metaDescription: 'Complete travel guide to Murchison Falls National Park in Uganda. Boat cruises to the base of the falls, top of the falls hike, delta cruises, lions, and rhinos.',
    category: 'Destinations',
    readTime: '8 min read',
    publishedDate: 'February 28, 2026',
    author: {
      name: 'Ramathan & Expedition Team',
      role: 'Senior Safari Field Director',
      image: `${import.meta.env.BASE_URL}images/Ramathan.jpeg`,
    },
    featuredImage: `${import.meta.env.BASE_URL}images/murhison-drone.webp`,
    tags: ['Murchison Falls', 'River Nile', 'Big 5 Safari', 'Boat Cruise'],
    linkedPackage: {
      title: '3 Days Murchison Falls Big 5 Safari',
      slug: '3-days-murchison-falls-safari',
      duration: '3 Days / 2 Nights',
      price: '$1,450',
      image: `${import.meta.env.BASE_URL}images/Murchison.jpeg`,
      highlights: [
        'Ziwa Rhino Sanctuary on-foot tracking en-route',
        'Private boat cruise along the Victoria Nile to the base of the falls',
        'Top of the Falls thunderous canyon viewpoint',
        'Morning & evening savanna game drives for lions, elephants, and leopards',
      ],
    },
    sections: [
      {
        heading: 'Where the River Nile Squeezes Through a 7-Metre Eye',
        paragraphs: [
          'Murchison Falls National Park is Uganda’s crown jewel of savanna wilderness. At its geographical and emotional heart lies the legendary waterfall itself: the entire volume of the mighty River Nile — the world’s longest river — is violently compressed into a narrow 7-metre cleft in the rift valley rocks before plummeting 43 metres into the churning ‘Devil’s Cauldron’.',
          'Standing on the cliff’s edge at the Top of the Falls, the ground literally trembles beneath your hiking boots. A perpetual rainbow arches through the rising mist, creating one of the most awe-inspiring natural spectacles on the African continent.',
        ],
        quote: 'The roar of the Victoria Nile at Murchison is nature at its most raw and untamed. You do not simply hear it; you feel it vibrate in your chest.',
      },
      {
        heading: 'The Victoria Nile Boat Safari: Floating Amongst Giants',
        paragraphs: [
          'While standard savanna game drives are thrilling, Murchison Falls offers an extraordinary waterborne perspective. A two-to-three hour boat cruise upstream to the base of the falls brings you within metres of enormous pods of hippos, basks of colossal Nile crocodiles, and herds of African elephants wading into the river to drink and bathe in the afternoon heat.',
          'For birders, this stretch of water is heaven: African fish eagles announce their presence with haunting calls from overhanging mahogany branches, while the elusive prehistoric Shoebill stork can occasionally be spotted stalking the papyrus beds of the Nile Delta.',
        ],
        tips: [
          'Ziwa Rhino Stopover: Because rhinos were historically poached out of national parks, always take the route via Ziwa Rhino Sanctuary to complete your Big 5 sighting on foot before entering Murchison.',
          'Northern Sector Drives: The game-rich tracks lie north of the Victoria Nile. Book lodges located on the northern side (or select our fly-in packages) to maximize early morning predator activity without queueing for ferries.',
        ],
        image: `${import.meta.env.BASE_URL}images/Murchison.jpeg`,
        imageCaption: 'The mighty Victoria Nile plunging 43 metres into the canyon below.',
      },
    ],
    faqs: [
      {
        question: 'How far is Murchison Falls from Entebbe / Kampala?',
        answer: 'By road, the journey takes approximately 5 to 6 hours in our private 4x4 cruiser via Masindi. Alternatively, domestic scheduled flights from Entebbe International Airport land at Pakuba airstrip in just 60 minutes.',
      },
      {
        question: 'Can I see the Big Five in Murchison Falls?',
        answer: 'Yes! Combining Murchison Falls with the Ziwa Rhino Sanctuary (which sits directly on the road from Kampala) allows you to encounter all Big Five: lions, leopards, elephants, cape buffaloes, and white rhinos.',
      },
    ],
  },
  {
    slug: 'top-10-safari-tips',
    title: 'Top 10 Tips for Your First East African Safari',
    subtitle: 'Practical insider advice on luggage restrictions, cash vs card, safari etiquette, and photography.',
    excerpt: 'Everything you need to know before stepping onto the savanna — from packing essentials to respecting wildlife in their natural habitat.',
    metaTitle: '10 Essential Tips for First-Time African Safari | Come Again Tours',
    metaDescription: 'First-time African safari packing guide, etiquette, tips on gratuities, yellow fever, photography, and vehicle packing by Uganda licensed tour operators.',
    category: 'Safari Tips',
    readTime: '5 min read',
    publishedDate: 'January 10, 2026',
    author: {
      name: 'Come Again Concierge Desk',
      role: 'Client Experience Specialists',
      image: `${import.meta.env.BASE_URL}images/asiima.png`,
    },
    featuredImage: `${import.meta.env.BASE_URL}images/cars.jpeg`,
    tags: ['Safari Tips', 'Packing List', 'First Time Africa', 'Travel Advice'],
    linkedPackage: {
      title: '7 Days Uganda Highlights & Gorilla Circuit',
      slug: '7-days-uganda-classic',
      duration: '7 Days / 6 Nights',
      price: '$2,850',
      image: `${import.meta.env.BASE_URL}images/lions-tree.jpeg`,
      highlights: [
        'Comprehensive Big 5 wildlife game drives across Queen Elizabeth National Park',
        'Famous tree-climbing lions of Ishasha sector',
        'Bwindi Mountain Gorilla permit & guided trek',
        'Chimpanzee tracking in Kalinzu / Kibale forest canopy',
      ],
    },
    sections: [
      {
        heading: '1. Embrace Soft-Sided Duffel Bags',
        paragraphs: [
          'Hard-shell suitcases are the bane of safari cruiser luggage compartments and bush flight aircraft (like Cessna Caravans operated by Aerolink). Most domestic bush flights enforce a strict 15 kg (33 lbs) weight limit per passenger in soft-sided bags.',
          'Duffel bags squeeze effortlessly into cruiser footwells and aircraft holds. Quality lodges offer daily laundry services (often complimentary or for a nominal fee), meaning you only need 3–4 days of safari clothing even for a two-week expedition.',
        ],
      },
      {
        heading: '2. Neutral Colors Keep Tsetse Flies Away',
        paragraphs: [
          'Leave the dark blue and black clothing at home. In dense woodlands and along riverbanks, dark blue and black actively attract biting tsetse flies. Bright neon colors can startle nervous wildlife.',
          'Instead, pack earth tones: khaki, olive green, beige, stone, and tan. Lightweight long-sleeved linen or technical UPF-rated safari shirts protect against harsh tropical sun and evening mosquitoes.',
        ],
        tips: [
          'Bring USD printed after 2013: East African foreign exchange bureaus and banks strictly reject older US Dollar notes or bills with slight tears.',
          'Telephoto Lens vs Smart Phone: Modern smartphones capture breathtaking landscape photos, but for wildlife, an optical zoom lens (70–300mm or 100–400mm) is required to capture lion expressions and elusive primates.',
          'Tipping Etiquette: Tipping is customary and deeply appreciated. Standard guidance is $15–$20 per day for your lead driver-guide from the group, and $10–$15 per gorilla trek for park rangers.',
        ],
      },
    ],
  },
  {
    slug: 'chimpanzee-trekking',
    title: 'Chimpanzee Trekking in Kibale Forest',
    subtitle: 'Walking in the shadows of man’s closest biological cousins in the primate capital of the world.',
    excerpt: 'Kibale National Park is home to the highest density of primates in Africa. Here is what to expect on a full-day chimpanzee habituation experience.',
    metaTitle: 'Kibale Chimpanzee Trekking Guide | Come Again Tours',
    metaDescription: 'Experience wild chimpanzee trekking in Kibale National Park Uganda. Habituation permits, primate capital of the world, behavior, and photography.',
    category: 'Wildlife',
    readTime: '7 min read',
    publishedDate: 'November 18, 2025',
    author: {
      name: 'Asiima & Senior Ranger Team',
      role: 'Primate Safari Specialists',
      image: `${import.meta.env.BASE_URL}images/asiima.png`,
    },
    featuredImage: `${import.meta.env.BASE_URL}images/chimp.jpeg`,
    tags: ['Chimpanzee Trekking', 'Kibale Forest', 'Primates', 'Uganda Safari'],
    linkedPackage: {
      title: '5 Days Primates & Wildlife Safari',
      slug: '5-days-primates-safari',
      duration: '5 Days / 4 Nights',
      price: '$2,150',
      image: `${import.meta.env.BASE_URL}images/chimpazee.jpeg`,
      highlights: [
        'Kibale Forest chimpanzee tracking permit',
        'Queen Elizabeth National Park savanna safari & tree-climbing lions',
        'Kazinga Channel boat cruise with world’s highest hippo concentration',
        'Bigodi Wetland birding sanctuary walk',
      ],
    },
    sections: [
      {
        heading: 'The Echoing Pant-Hoot Through the Canopy',
        paragraphs: [
          'Long before you spot a chimpanzee in Kibale National Park, you hear them. A single high-pitched pant-hoot begins deep in the forest, quickly echoing into an explosive chorus as the entire community communicates across the canopy, drumming their hands and feet on the giant buttress roots of ironwood trees.',
          'With over 1,500 chimpanzees inhabiting this lush tropical sanctuary, Kibale boasts an astonishing 95% success rate for tracking encounters, earning its undisputed title as the Primate Capital of the World.',
        ],
      },
    ],
  },
  {
    slug: 'white-water-rafting-jinja',
    title: 'White Water Rafting on the Nile at Jinja',
    subtitle: 'Grade 5 adrenaline on the legendary waters of the Nile — safety, rapids, and scenic river calm.',
    excerpt: 'Jinja is the adventure capital of East Africa for a reason. We take you through the rapids, the calm stretches, and everything in between.',
    metaTitle: 'Jinja White Water Rafting on River Nile | Come Again Tours',
    metaDescription: 'Grade 5 white water rafting in Jinja, Uganda. Source of the Nile river adventures, safety briefings, kayaking, and riverside eco-retreats.',
    category: 'Destinations',
    readTime: '4 min read',
    publishedDate: 'December 5, 2025',
    author: {
      name: 'Come Again Adventure Desk',
      role: 'Expedition Coordinators',
      image: `${import.meta.env.BASE_URL}images/asiima.png`,
    },
    featuredImage: `${import.meta.env.BASE_URL}images/rafting.jpg`,
    tags: ['Jinja', 'River Nile', 'White Water Rafting', 'Adventure Uganda'],
    sections: [
      {
        heading: 'Conquering the Source of the Nile',
        paragraphs: [
          'Known universally as the Adventure Capital of East Africa, Jinja is where Lake Victoria drains into the historic River Nile to begin its 6,600 km epic journey north to the Mediterranean Sea.',
          'For adventure travelers, Jinja represents some of the safest and most thrilling Grade 4 and Grade 5 commercial white-water rapids in the world. Warm water, massive deep pools between rapids, and world-class river safety kayakers ensure heart-pumping thrills with absolute peace of mind.',
        ],
      },
    ],
  },
  {
    slug: 'ugandan-culture-kampala',
    title: 'Discovering Kampala: Culture, Food & History',
    subtitle: 'Beyond the national parks — markets, royal tombs, drum makers, and the warm hospitality of the Pearl of Africa.',
    excerpt: 'Beyond the game parks, Uganda\'s capital is a vibrant city full of colour, music, and history. A guide to its must-see cultural spots.',
    metaTitle: 'Kampala Cultural Guide & City Sights | Come Again Tours',
    metaDescription: 'Explore the vibrant cultural spots of Kampala: Kasubi Royal Tombs, craft markets, Uganda National Museum, Bahai Temple, and local culinary delicacies.',
    category: 'Culture',
    readTime: '5 min read',
    publishedDate: 'October 30, 2025',
    author: {
      name: 'Cultural Concierge',
      role: 'Heritage Guides',
      image: `${import.meta.env.BASE_URL}images/asiima.png`,
    },
    featuredImage: `${import.meta.env.BASE_URL}images/Kampala.jpg`,
    tags: ['Kampala', 'Uganda Culture', 'Buganda Heritage', 'African Food'],
    sections: [
      {
        heading: 'The Warm Pulse of the Pearl of Africa',
        paragraphs: [
          'While lions and gorillas dominate safari brochures, travelers frequently cite the genuine warmth of the Ugandan people as the most indelible memory of their journey.',
          'From the historic Kasubi Royal Tombs of the ancient Buganda Kingdom to the buzzing spice stalls of Nakasero Market and the artisan drum makers of Mpambire, Kampala offers a colorful and heartfelt introduction to East African life.',
        ],
      },
    ],
  },
];
