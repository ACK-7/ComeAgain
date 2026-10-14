export interface GuideStory {
  title: string;
  location?: string;
  story: string;
}

export interface GuideDetailData {
  slug: string;
  name: string;
  role: string;
  subtitle: string;
  badge: string;
  experienceYears: string;
  languages: string[];
  favoriteWildlife: string[];
  favoriteBirds: string[];
  favoriteParks: string[];
  portraitImage: string;
  fieldImage: string;
  actionImage?: string;
  imagePosition?: string;
  summary: string;
  fullBio: string[];
  freeTime?: string;
  bushStories?: GuideStory[];
  whyGuiding: string;
  favoriteQuote?: string;
  guestReview?: {
    quote: string;
    traveler: string;
    country: string;
  };
  recommendedSafaris?: {
    title: string;
    slug: string;
    duration: string;
    image: string;
  }[];
}

export const guidesData: GuideDetailData[] = [
  {
    slug: 'issa-ssesanga',
    name: 'Ssesanga Issa',
    role: 'Head Safari Guide & Primate Specialist',
    subtitle: 'Tour Guide from Uganda',
    badge: 'Head Guide • 20+ Years Experience',
    experienceYears: '20+ Years in Field',
    languages: ['English', 'Swahili', 'Luganda', 'Lunyakitara', 'Arabic', 'Lusoga'],
    favoriteWildlife: ['Aardvark', 'Mongoose', 'Eland', 'Mountain Gorillas', 'Tree-Climbing Lions'],
    favoriteBirds: ['African Paradise Flycatcher', 'Northern Red Bishop', 'African Pied Wagtail', 'Shoebill Stork'],
    favoriteParks: ['Bwindi Impenetrable National Park', 'Kidepo Valley', 'Queen Elizabeth (Ishasha)'],
    portraitImage: `${import.meta.env.BASE_URL}images/Issa.webp`,
    fieldImage: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-26-at-09.39.51-1024x684.webp`,
    actionImage: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-26-at-09.39.51-1024x684.webp`,
    imagePosition: 'center 35%',
    summary: 'With over 20 years of hands-on experience in the field, Ssesanga Issa is a master tracker, multilingual naturalist, and Come Again Tours’ Head Guide.',
    fullBio: [
      'With over 20 years of hands-on experience in the field, I am a passionate safari guide dedicated to offering unforgettable wildlife and cultural experiences across Uganda and beyond.',
      'Fluent in six languages (English, Swahili, Luganda, Lunyakitara, Arabic, and Lusoga), I, Ssesanga Issa, can comfortably communicate with a diverse range of guests, making their safari both informative, safe, and deeply enjoyable.',
      'What I love most about tourism is the chance it gives me to connect with nature and continually learn. My journey into tourism was inspired by two key passions: a love for traveling and learning, and the desire to earn a living while contributing to conservation for future generations.'
    ],
    bushStories: [
      {
        title: 'Midnight Lion Encounter in Kidepo Valley',
        location: 'Kidepo Valley National Park',
        story: 'While on a night game drive in Kidepo Valley National Park, we spent over four hours searching for cats without success. As we returned to the lodge close to 11:00 PM, we were surprised by a pride of six lions right at the parking area! We couldn’t leave the vehicle until the lodge manager called in rangers to scare them away safely.'
      },
      {
        title: 'Quick Thinking & Anticipating Danger in Ishasha',
        location: 'Ishasha Sector, Queen Elizabeth National Park',
        story: 'On another occasion in the Ishasha sector of Queen Elizabeth National Park, our safari jeep overheated. When we stopped to check the issue, the clients asked to step out. I advised them to stay in the vehicle due to the park’s wildlife. As I slammed the bonnet shut, a lion hiding in a nearby thicket was startled and let out a loud roar. I quickly jumped into the vehicle, and the clients were amazed that I had anticipated the danger—they thanked me for keeping them safe.'
      }
    ],
    freeTime: 'In my free time, I enjoy reading and conducting research about tourism to continuously improve my knowledge and guiding skills.',
    whyGuiding: 'I chose to work with Come Again Tours & Travels because of the kindness, flexibility, and supportive spirit of the entire team. When I\'m with this team, I feel truly comfortable, valued, and motivated to deliver my absolute best for every guest.',
    favoriteQuote: 'In the bush, patience is not just a virtue—it is the lens through which Africa reveals its greatest secrets.',
    guestReview: {
      quote: 'I and my friends had an amazing 10 days Safari Tour in Uganda with Come Again Tour and Travel Team. Issa is such a friendly guy! Very knowledgeable about wildlife movements, patient, and always made sure we were comfortable. I highly recommended Issa for Safari Tour. Looking forward to traveling with him again.',
      traveler: 'Turaf N',
      country: 'TripAdvisor Verified Review'
    },
    recommendedSafaris: [
      {
        title: '11 Days Classic Uganda Safari',
        slug: '11-days-classic-uganda-safari',
        duration: '11 Days',
        image: `${import.meta.env.BASE_URL}images/gorilla1.webp`
      },
      {
        title: '3 Days Gorilla Trekking Express',
        slug: '3-days-fly-murchison-falls',
        duration: '3 Days',
        image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.00.49-1.webp`
      }
    ]
  },
  {
    slug: 'ramathan-muwonge',
    name: 'Ramathan Muwonge',
    role: 'Safari & Bush Guide',
    subtitle: 'Tour Guide from Uganda',
    badge: 'Safari Guide • 5+ Years Experience',
    experienceYears: '5+ Years in Field',
    languages: ['English', 'Swahili', 'Luganda', 'Runyankore'],
    favoriteWildlife: ['Leopards', 'Rothschild Giraffes', 'Elephants', 'Cape Buffalo'],
    favoriteBirds: ['Shoebill Stork', 'African Fish Eagle', 'Goliath Heron', 'Crested Crane'],
    favoriteParks: ['Murchison Falls National Park', 'Kidepo Valley', 'Lake Mburo'],
    portraitImage: `${import.meta.env.BASE_URL}images/Ramathan.webp`,
    fieldImage: `${import.meta.env.BASE_URL}images/murhison-drone.webp`,
    actionImage: `${import.meta.env.BASE_URL}images/murhison-drone.webp`,
    imagePosition: 'center 38%',
    summary: 'A dedicated savanna tracker with 5+ years traversing Uganda’s northern and western corridors, Ramathan is renowned for his predator sightings and birding knowledge.',
    fullBio: [
      'Guiding is more than a profession for me—it is a lifelong calling. Born and raised near the vast savannas of western Uganda, I developed an innate understanding of animal behavior, tracking spoor, and interpreting the calls of the wild from an early age.',
      'Over the past 5+ years, I have navigated thousands of kilometers through Murchison Falls, Queen Elizabeth, and the rugged wilderness of Kidepo Valley, introducing travelers from around the world to Africa’s most majestic wildlife.',
      'My primary focus is ensuring every guest feels safe, engaged, and leaves Uganda with a deep appreciation for the delicate ecosystems of our national parks.'
    ],
    bushStories: [
      {
        title: 'Tracking the Elusive Leopard of the Nile Delta',
        location: 'Murchison Falls National Park',
        story: 'Early one misty morning near the Albert Nile delta, after noticing fresh tracks and agitated vervet monkey alarms, we waited quietly under a sausage tree. Within ten minutes, a magnificent female leopard descended with a fresh kill. My guests captured once-in-a-lifetime high-speed photography from just 20 meters away in our pop-up 4x4.'
      }
    ],
    freeTime: 'I spend my personal time birdwatching in wetlands and mentoring young conservation enthusiasts in our local communities.',
    whyGuiding: 'Sharing the raw beauty of the Pearl of Africa with curious travelers is the greatest honor. At Come Again Tours, we take the time to immerse guests deeply in every landscape.',
    favoriteQuote: 'Every game drive is a blank page waiting to be written by the wild.',
    recommendedSafaris: [
      {
        title: '7 Days Fly The Pearl of Africa',
        slug: '7-days-fly-pearl-of-africa',
        duration: '7 Days',
        image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.05.20.webp`
      }
    ]
  },
  {
    slug: 'patrick-kikonyogo',
    name: 'Patrick John Kikonyogo',
    role: 'Professional Driver-Guide & Cross-Border Specialist',
    subtitle: 'Tour & Driver Guide (Uganda & Rwanda)',
    badge: 'Certified Driver-Guide • 2+ Years Experience',
    experienceYears: '2+ Years in Field',
    languages: ['English', 'Luganda', 'Swahili', 'Runyankore'],
    favoriteWildlife: ['Mountain Gorillas', 'Tree-Climbing Lions', 'African Elephants', 'Chimpanzees'],
    favoriteBirds: ['Great Blue Turaco', 'Crested Crane', 'African Fish Eagle'],
    favoriteParks: ['Murchison Falls National Park', 'Queen Elizabeth National Park', 'Bwindi Impenetrable', 'Volcanoes National Park (Rwanda)', 'Akagera National Park (Rwanda)'],
    portraitImage: `${import.meta.env.BASE_URL}images/kikonyogo.webp`,
    fieldImage: `${import.meta.env.BASE_URL}images/adventure11.webp`,
    actionImage: `${import.meta.env.BASE_URL}images/adventure11.webp`,
    imagePosition: 'center 35%',
    summary: 'A dedicated Ugandan certified professional driver-guide from Kakiri, Wakiso District with active operational knowledge of game parks across Uganda and Rwanda.',
    fullBio: [
      'My name is Kikonyogo Patrick John, a resident of Kakiri in Wakiso District. I am a dedicated, safety-conscious professional driver and tour guide with over 2 years of hands-on experience guiding international travelers across Uganda and regional routes.',
      'Having attended specialized tourism training programmes and attained essential passenger-safety and guiding skills, I bring dependable operational knowledge of our game parks and cultural routes. Throughout my journey in tourism, I focus on delivering smooth, comfortable driving and genuine guest care.',
      'To me, clear communication, dependable safety, and guest happiness are the true essence of tourism. When you travel with me, my commitment is to represent Come Again Tours with excellence and ensure your safari is seamless, safe, and deeply rewarding.'
    ],
    bushStories: [
      {
        title: 'Mastering the Savannah Tracks across Uganda and Rwanda',
        location: 'Queen Elizabeth & Akagera Game Corridors',
        story: 'Whether tracking tree-climbing lions in Ishasha or navigating through early morning savannah mists, my time behind the wheel has taught me that patience, sharp eyes, and absolute respect for animal behavior always reward guests with the most unforgettable wildlife moments.'
      }
    ],
    freeTime: 'I cherish spending time with my family in Kakiri, studying regional wildlife conservation, and connecting with fellow tourism professionals.',
    whyGuiding: 'Associating with people from all walks of life, continuous learning, and promoting the beauty and company values of Come Again Tours are of great value to me.',
    favoriteQuote: 'Knowledge about tour sites and genuine communication are the true heart of every great safari.',
    recommendedSafaris: [
      {
        title: '11 Days Classic Uganda Safari',
        slug: '11-days-classic-uganda-safari',
        duration: '11 Days',
        image: `${import.meta.env.BASE_URL}images/pic5.webp`
      }
    ]
  }
];
