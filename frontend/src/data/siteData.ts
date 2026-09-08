export const siteData = {
  logo: `${import.meta.env.BASE_URL}images/logo.png`,
  regulatoryPartners: {
    heading: 'We Are Proud To Be Associated With',
    note: 'Come Again Tours & Travels operates in line with Uganda Tourism Board guidelines, Uganda Wildlife Authority park regulations, and as a member of the Uganda Tourism Operators association.',
    partners: [
      {
        id: 'utb',
        name: 'Uganda Tourism Board',
        shortName: 'Uganda Tourism Board',
        logo: `${import.meta.env.BASE_URL}images/UTB.png`,
        url: 'https://www.visituganda.com/',
      },
      {
        id: 'uwa',
        name: 'Uganda Wildlife Authority',
        shortName: 'Uganda Wildlife Authority',
        logo: `${import.meta.env.BASE_URL}images/uwa.png`,
        url: 'https://www.ugandawildlife.org/',
      },
      {
        id: 'uto',
        name: 'Uganda Tourism Operators',
        shortName: 'Uganda Tourism Operators',
        logo: `${import.meta.env.BASE_URL}images/UTO.png`,
        url: 'https://www.ugandatourismoperators.org/',
      },
    ],
    uwaPermitNote:
      'Gorilla and chimpanzee permits, park entry, and trekking on this safari follow Uganda Wildlife Authority regulations.',
  },
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Destination', href: '/destination' },
    { name: 'Services', href: '/services' },
    { name: 'Packages', href: '/packages' },
    { 
      name: 'About Us', 
      href: '/about',
      dropdown: [
        { name: 'Vision & Mission', href: '/about/vision-mission' },
        { name: 'Team', href: '/about/our-team' }
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' }
  ],
  heroSlides: [
    {
      title: 'Come Again <span style="color:#6ab43e">Tours</span><br/>& Travels',
      subtitle: "More Than a Safari — It's a Story",
      backgroundImage: `${import.meta.env.BASE_URL}images/gorilla1.jpeg`
    },
    {
      title: 'Experience <span style="color:#6ab43e">Majestic</span><br/>Encounters',
      subtitle: 'Connecting You to the Heart of Africa',
      backgroundImage: `${import.meta.env.BASE_URL}images/hero1.jpg`
    },
    {
      title: 'Discover The <span style="color:#6ab43e">Wild</span><br/>Spirit',
      subtitle: 'Unforgettable Journeys in the Pearl of Africa',
      backgroundImage: `${import.meta.env.BASE_URL}images/scene.jpeg`
    }
  ],
  home: {
    packagesIntro: {
      title: 'Our Packages',
      description: 'At Come Again Tours and Travels, we offer carefully designed safari packages that suit different travel needs, budgets, and interests. Whether you are looking for a short weekend adventure, gorilla trekking, wildlife experiences, cultural encounters, or a full Uganda tour, we have the perfect package for you.'
    },
    about: {
      heading: 'Discover The World With Us',
      subheading: 'ABOUT US',
      description: 'Come Again Tours and Travels is a tour and travel company based in Uganda. We offer a wide range of services including tour packages, car hire, hotel bookings, and airport transfers. We are dedicated to providing our clients with the best travel experiences in Uganda and beyond.',
      image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-20-at-20.30.59.jpeg`
    },
    services: {
      header: 'Our Services',
      promise: 'We promise to provide every client with a well-organized, enjoyable, and memorable safari experience.',
      items: [
        {
          title: 'Gorilla Trekking Safaris',
          description: 'Uganda is home to the rare and endangered mountain gorillas found in Bwindi Impenetrable National Park and Mgahinga Gorilla National Park. Come Again Tours and Travels organizes well-planned gorilla trekking packages.',
          image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.00.49-1.jpeg`
        },
        {
          title: 'Wildlife Safaris',
          description: 'We offer classic wildlife safaris to Uganda\'s most famous national parks including:',
          bullets: ['Queen Elizabeth National Park', 'Murchison Falls National Park', 'Kidepo Valley National Park'],
          image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.05.20.jpeg`
        },
        {
          title: 'Chimpanzee Tracking and Primate Safaris',
          description: 'Uganda is known as the primate capital of the world. We provide thrilling chimpanzee tracking experiences in:',
          bullets: ['Kibale Forest National Park'],
          image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.06.18-1.jpeg`
        },
        {
          title: 'Airport Pickups and Transportation Services',
          description: 'We provide reliable transport services with professional drivers and well-maintained vehicles. Our transport services include:',
          bullets: ['Airport transfers (Entebbe International Airport)'],
          image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-26-at-09.39.51-1024x684.jpeg`
        },
        {
          title: 'Adventure and Leisure Travel',
          description: 'For thrill seekers and fun lovers, we offer adventure packages including:',
          bullets: ['White water rafting in Jinja', 'Bungee jumping and zip-lining'],
          image: `${import.meta.env.BASE_URL}images/adventure11.jpg`
        }
      ]
    },
    whyChooseUs: {
      heading: 'Choosing Come Again Tours and Travels means choosing quality, reliability, and a unique experience. We stand out because',
      subheading: 'Why Choose Come Again Tours and travels?',
      image: `${import.meta.env.BASE_URL}images/lions-tree.jpeg`,
      featuresColumn1: [
        'We offer personalized safari packages tailored to your needs',
        'We have experienced guides and professional drivers',
        'We provide affordable and flexible pricing',
        'We ensure safe travel and quality transport'
      ],
      featuresColumn2: [
        'We understand Uganda deeply and promote authentic experiences',
        'We support local communities and sustainable tourism',
        'We deliver excellent customer care from start to finish'
      ]
    },
    testimonials: {
      heading: 'Reviews from Tripadvisor',
      subheading: "At Come Again Tours and Travels, we don't just take you on a trip—we help you create memories that last forever.",
      tripadvisorUrl: 'https://www.tripadvisor.com/Attraction_Review-g293841-d23932600-Reviews-Come_Again_Tours_and_Travel-Kampala_Central_Region.html',
      tripadvisorRating: '5.0',
      items: [
        {
          rating: '5.0',
          text: 'Yes, the tour was excellent, the driver was so cooperative, customer understanding, hassle-free journey, feel like your own, very honest and loyal.',
          author: 'Jtripaf',
          source: 'Tripadvisor'
        },
        {
          rating: '5.0',
          text: 'I and my friends had an amazing 10 days Safari Tour in Uganda with Come Again Tour and Travel Team. Issa is such a friendly guy! I highly recommended Issa for Safari Tour. Looking forward to traveling with him again.',
          author: 'Turaf N',
          source: 'Tripadvisor'
        },
        {
          rating: '5.0',
          text: 'We spent a beautiful time during our tour in Uganda. All 12 days were well organized and we could enjoy amazing moments there. I recommend to all travelers any tour with Come Again Tours and Travel.',
          author: 'Rosti',
          source: 'Tripadvisor'
        }
      ]
    },
    cta: {
      heading: 'Taking you anywhere you can imagine.',
      description: 'Come Again Tours and Travels proudly offers tours across Uganda and selected destinations in East Africa, including: Uganda Rwanda Kenya Tanzania Burundi and others',
      phone: '+256-774-243-747',
      backgroundImage: `${import.meta.env.BASE_URL}images/hills.jpeg`
    },
    footer: {
      // backgroundImage: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-25-at-18.19.43-1.jpeg`,
      contact: {
        tel: '+256-774-243-747',
        office: '+256-701-281-624',
        email: 'info@comeagaintoursandtravels.com',
        postal: '157101',
        location: 'Kampala, Uganda'
      },
      socials: [
        { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/profile.php?id=100080915697458' },
        { name: 'X', icon: 'twitter', href: 'https://x.com/ComeAgainTours' },
        // { name: 'Instagram', icon: 'instagram', href: '#' },
        { name: 'Tiktok', icon: 'music', href: 'https://www.tiktok.com/@come_again_tours_travel' },
        { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/come-again-tours-travels-14b211404/' },
        // { name: 'YouTube', icon: 'youtube', href: '#' }
      ]
    }
  },
  destinationPage: {
    hero: {
      title: 'Our Destinations',
      image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-26-at-09.39.51-1024x684.jpeg`
    },
    destinations: [
      {
        name: 'MURCHISON FALL NATIONAL PARK',
        description: 'Expect powerful waterfalls where the Nile squeezes through a narrow gorge, exciting game drives with elephants, giraffes, lions and buffaloes, and a scenic boat cruise to the base of the falls filled with hippos and crocodiles.',
        image: `${import.meta.env.BASE_URL}images/Murchison.jpeg`
      },
      {
        name: 'QUEEN ELIZABETH NATIONAL PARK',
        description: 'Expect diverse wildlife, the famous tree-climbing lions of Ishasha, boat cruises along the Kazinga Channel, crater lakes, and beautiful savannah landscapes rich in elephants, antelopes and birdlife.',
        image: `${import.meta.env.BASE_URL}images/tree-lion.jpeg`
      },
      {
        name: 'KIBALE FOREST NATIONAL PARK',
        description: 'Known as the primate capital of the world. Expect chimpanzee tracking, forest walks, monkeys, birds, and the beautiful Bigodi Wetland Sanctuary experience.',
        image: `${import.meta.env.BASE_URL}images/monkey.jpeg`
      },
      {
        name: 'BWINDI IMPENETRABLE FOREST NATIONAL PARK',
        description: 'A UNESCO World Heritage Site famous for mountain gorilla trekking. Expect dense rainforest, breathtaking hills, rare bird species, and unforgettable close encounters with gorillas.',
        image: `${import.meta.env.BASE_URL}images/Gorillaa.jpeg`
      },
      {
        name: 'KIDEPO VALLEY NATIONAL PARK',
        description: 'Uganda’s most remote and wild park. Expect untouched wilderness, large herds of buffaloes, lions, cheetahs, ostriches, and cultural encounters with the Karamojong people.',
        image: `${import.meta.env.BASE_URL}images/buffaloes.jpeg`
      },
      {
        name: 'TORO SEMULIKI GAME RESERVE',
        description: 'Expect hot springs, tropical lowland forest, unique bird species, and wildlife such as elephants and antelopes in a less crowded, peaceful setting.',
        image: `${import.meta.env.BASE_URL}images/antelope.jpeg`
      },
      {
        name: 'SEMPAYA HOT SPRINGS',
        description: 'Expect boiling hot natural springs, scenic forest surroundings, and the unique experience of seeing water bubble from deep underground.',
        image: `${import.meta.env.BASE_URL}images/Sempaya.jpeg`
      },
      {
        name: 'JINJA WHITE NILE WATER RAFTING',
        description: 'Expect thrilling white-water rafting adventures, boat cruises to the Source of the Nile, bungee jumping, quad biking, and beautiful river views.',
        image: `${import.meta.env.BASE_URL}images/Nile.jpg`
      },
      {
        name: 'SIPI FALLS AND COFFEE TOURS',
        description: 'Expect stunning waterfalls, hiking trails with panoramic views of Mount Elgon, and authentic Arabica coffee tours with local farmers.',
        image: `${import.meta.env.BASE_URL}images/sipifalls.jpg`
      },
      {
        name: 'LAKE MBURO NATIONAL PARK',
        description: 'Expect zebras, impalas, giraffes, horseback safaris, cycling tours, boat rides, and a relaxed, scenic savannah experience.',
        image: `${import.meta.env.BASE_URL}images/girrafe.jpeg`
      },
      {
        name: 'KATONGA GAME RESERVE',
        description: 'Expect a quiet nature experience with hippopotamus, antelopes, wetland birdlife, and guided walking safaris in a peaceful environment.',
        image: `${import.meta.env.BASE_URL}images/image9.jpeg`
      },
      {
        name: 'PADIDI BUDONGO CHIMP TRACKING',
        description: 'Expect guided chimp tracking, mahogany forest walks, birdwatching, and close encounters with playful chimpanzees.',
        image: `${import.meta.env.BASE_URL}images/chimp.jpeg`
      },
      {
        name: 'BUGOMA FOREST CHIMP TRACKING',
        description: 'Expect chimp tracking adventures, scenic forest trails, and birdlife in one of Uganda’s emerging eco-tourism forests.',
        image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.00.49-1.jpeg`
      },
      {
        name: 'PIAN UPE GAME RESERVE',
        description: 'Expect open plains, ostriches, cheetahs, antelopes, and breathtaking semi-arid landscapes ideal for photography.',
        image: `${import.meta.env.BASE_URL}images/leopard-footer.jpeg`
      },
      {
        name: 'BUKORA GAME RESERVE',
        description: 'Expect wildlife such as birds, antelopes, zebras, and opportunities to experience authentic Karamoja culture.',
        image: `${import.meta.env.BASE_URL}images/bird.jpeg`
      },
      {
        name: 'Rwenzori Tracking',
        description: 'Expect snow-capped peaks, glacier views, alpine vegetation, waterfalls, and challenging but rewarding mountain trekking.',
        image: `${import.meta.env.BASE_URL}images/Rwenzori.jpg`
      },
      {
        name: 'Elgon Tracking',
        description: 'Expect caves, waterfalls, scenic hiking trails, and one of Africa’s largest volcanic calderas.',
        image: `${import.meta.env.BASE_URL}images/Elgon.webp`
      },
      {
        name: 'Matheniko Game Reserve',
        description: 'Expect dry savannah wildlife, buffaloes, unique bird species, and cultural experiences with the Karamojong communities.',
        image: `${import.meta.env.BASE_URL}images/buffaloes.jpeg`
      },
      {
        name: 'AJAI GAME RESERVE',
        description: 'Expect rhinos (in nearby conservation areas), antelopes, and scenic river landscapes near the Nile region.',
        image: `${import.meta.env.BASE_URL}images/rhino.jpeg`
      },
      {
        name: 'KYAMBURA GAME RESERVE',
        description: 'Expect chimpanzee tracking in a dramatic underground forest gorge within Queen Elizabeth National Park.',
        image: `${import.meta.env.BASE_URL}images/chimpazee.jpeg`
      },
      {
        name: 'KALINZU FOREST CHIMP TRACKING',
        description: 'Expect chimpanzee tracking, birdwatching, and peaceful forest walks near Queen Elizabeth National Park.',
        image: `${import.meta.env.BASE_URL}images/Baboon.jpeg`
      },
      {
        name: 'Mugahinga National Park',
        description: 'Expect mountain gorillas, golden monkey tracking, volcanic scenery, and stunning views of the Virunga Mountains.',
        image: `${import.meta.env.BASE_URL}images/golden monkey.jpg`
      },
      {
        name: 'Volcano National Park',
        description: 'Expect gorilla trekking, golden monkey tracking, and scenic volcanic mountain views in Rwanda’s premier conservation park.',
        image: `${import.meta.env.BASE_URL}images/gorilla-volcano.jpg`
      },
      {
        name: 'Nyungwe Forest National Park',
        description: 'Expect chimpanzee tracking, canopy walks high above the forest, waterfalls, and rich biodiversity.',
        image: `${import.meta.env.BASE_URL}images/nyungwe.jpeg`
      },
      {
        name: 'Akagera National Park',
        description: 'Expect classic savannah safaris with lions, elephants, giraffes, zebras, and boat cruises on Lake Ihema.',
        image: `${import.meta.env.BASE_URL}images/elephant-akagera.jpeg`
      },
      {
        name: 'Kampala City Tour',
        description: 'Expect visits to cultural landmarks, markets, mosques, temples, Kabaka’s Palace, museums, and vibrant city life.',
        image: `${import.meta.env.BASE_URL}images/Kampala.jpg`
      },
      {
        name: 'Kigali City Tour',
        description: 'Expect a clean, modern African city experience with cultural sites, art centers, local markets, and the Kigali Genocide Memorial.',
        image: `${import.meta.env.BASE_URL}images/kigali.jpg`
      },
      {
        name: 'Kasubi Tombs',
        description: 'Expect a UNESCO cultural heritage site and royal burial grounds of Buganda kings, rich in tradition and history.',
        image: `${import.meta.env.BASE_URL}images/kasubi.jpeg`
      },
      {
        name: 'Mt Moroto Tracking',
        description: 'Expect rugged mountain hikes, scenic Karamoja landscapes, and authentic cultural interactions.',
        image: `${import.meta.env.BASE_URL}images/Moroto.jpg`
      },
      {
        name: 'Kasenda Craters',
        description: 'Expect breathtaking crater lake views, scenic hills, and nature photography opportunities near Fort Portal.',
        image: `${import.meta.env.BASE_URL}images/kasenda.webp`
      },
      {
        name: 'Kings Palaces',
        description: 'Expect royal heritage tours, traditional architecture, and insights into Uganda’s kingdoms and cultural leadership systems.',
        image: `${import.meta.env.BASE_URL}images/palace.jpg`
      },
      {
        name: 'Tea Farm Tours',
        description: 'Expect guided tours through lush tea plantations, learning about tea processing, and tasting fresh local tea.',
        image: `${import.meta.env.BASE_URL}images/tea.webp`
      },
      {
        name: 'Batwa and Community Tour',
        description: 'Expect cultural storytelling, traditional dances, forest survival skills demonstrations, and authentic interaction with indigenous communities.',
        image: `${import.meta.env.BASE_URL}images/batwa.jpg`
      }
    ]
  },
  packagesPage: {
    hero: {
      title: 'Our Packages',
      description: 'Explore our carefully designed safari packages tailored to your needs. From gorilla trekking to full Uganda tours, we have the perfect adventure for every traveler.',
      image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-26-at-09.39.51-1024x684.jpeg`
    },
    sections: [
      {
        title: 'Safari Packages',
        packages: [
          {
            slug: '3-days-murchison-falls-safari',
            title: '3 Days Murchison Falls Safari',
            price: '1450$',
            per: '1 person',
            category: 'Wildlife Safaris',
            durationDays: 3,
            wildlife: ['Lion', 'Elephant', 'Giraffe', 'Hippo', 'Crocodile'],
            highlights: ['Game drives (lions, elephants, giraffes)', 'Boat cruise to the base of the falls', 'Top of the falls hike', 'Optional rhino tracking at Ziwa'],
            image: `${import.meta.env.BASE_URL}images/Murchison.jpeg`,
            details: {
              duration: '3 Days',
              location: 'Murchison Falls National Park',
              transport: '4x4 Safari Land Cruiser',
              accommodation: 'Parkside Safari Lodge',
              routeCoordinates: [
                { name: 'Kampala', lat: 0.3476, lng: 32.5825, description: 'Starting Point' },
                { name: 'Ziwa Rhino Sanctuary', lat: 1.4697, lng: 32.1221, description: 'Rhino Tracking & Lunch' },
                { name: 'Murchison Falls National Park', lat: 2.2505, lng: 31.7828, description: 'Top of the Falls' },
                { name: 'Northern Sector (Lodge)', lat: 2.2921, lng: 31.5451, description: 'Day 1 & 2 Stay' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/Murchison.jpeg`,
                `${import.meta.env.BASE_URL}images/pic11.jpg`,
                `${import.meta.env.BASE_URL}images/pic1.jpg`,
                `${import.meta.env.BASE_URL}images/pic8.jpg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'Pickup and Transfer to Murchison Falls (via Ziwa Rhinos)',
                  description: "Very early in the morning around 7:00 am, your guide/driver will pick you up and proceed to Murchison Falls National Park, located in the North Western part of Uganda, about 300 Kms from Kampala. On your way, you will visit the Ziwa Rhino Sanctuary in Nakasongola district, the home of Uganda's rhinos. Here, you will see white rhinos in their natural environment up close, providing an unforgettable experience. You will have a chance to see them on foot with a ranger guide for a maximum of one hour, taking as many photos as you can. After tracking, proceed to the Ziwa Rhino restaurant for lunch. Thereafter, drive to Murchison Falls National Park—the source of happiness for nature lovers. You will be welcomed by many olive baboons lined along the road. On arrival, visit the top of the falls to enjoy the breathtaking views and the great sound as the water squeezes through a narrow gorge of only 7 meters wide, dropping 43 meters into a pool with a lovely, thunderous sound. After 30 minutes at the falls, cross the River Nile to the Northern sector and check in at Parkside Safari Lodge for dinner and overnight.",
                  meals: 'Lunch, Dinner',
                  stay: 'Parkside Safari Lodge'
                },
                {
                  day: 2,
                  title: 'Early Morning Game Drive & Nile Boat Cruise',
                  description: "Wake up very early for breakfast and set out for a morning game drive. Starting early provides a better chance of sighting species like lions, leopards, spotted hyenas, and jackals while they are still active before returning to their hideouts. You will also see elephants, buffaloes, giraffes, and birds like the Northern Red Bishop, Woodland Kingfisher, and African Paradise Flycatcher. After 5 hours, return to the lodge to relax and have lunch. At 1:00 pm, proceed to the River Nile for an afternoon boat cruise. This cruise offers an array of wildlife sightings, including Nile crocodiles, hippos, and lizards. As you cruise towards the bottom of the falls, you will encounter many huge Nile crocodiles. After 3 hours on the Nile, return to the landing site to meet your guide and head back to the lodge for dinner and overnight.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Parkside Safari Lodge'
                },
                {
                  day: 3,
                  title: 'Return to Kampala',
                  description: "On this day, wake up early, pack your luggage, and have breakfast before embarking on your journey back to Kampala. You will enjoy a stopover for a hot lunch on the way. After lunch, proceed to Kampala, reaching in the evening, where your unforgettable 3-day safari comes to an end.",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              inclusions: [
                'Professional Driver-Guide',
                '4x4 Safari Land Cruiser with Pop-up roof',
                'Fuel for the entire trip',
                'Accommodation (Parkside Safari Lodge)',
                'All meals as per itinerary',
                'Park entrance fees',
                'Ziwa Rhino Tracking fees',
                'Boat cruise to the bottom of the falls',
                'Top of the falls visit',
              ],
              exclusions: [
                'International flights',
                'Uganda Visa fees',
                'Travel insurance',
                'Personal expenses (laundry, drinks, telephone)',
                'Tips for guides and staff',
                'Optional activities not mentioned'
              ],
              testimonial: {
                quote: "The attention to detail and professional guide in Murchison Falls were unforgettable. The boat cruise to the base of the falls is a must!",
                author: "Marika Zem",
                platform: "Excellence on TripAdvisor",
                headline: "A Thundering Experience!"
              }
            }
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
            details: {
              duration: '3 Days',
              location: 'Murchison Falls National Park',
              transport: 'Scheduled Flight (Aerolink) & 4x4 Safari Van',
              accommodation: 'Paraa Safari Lodge (Deluxe Room)',
              routeCoordinates: [
                { name: 'Entebbe Airport', lat: 0.0424, lng: 32.4435, description: 'Flight Departure' },
                { name: 'Pakuba Airfield', lat: 2.3325, lng: 31.4883, description: 'Landing & Meet' },
                { name: 'Paraa Safari Lodge', lat: 2.2889, lng: 31.5647, description: 'Lodge Check-in' },
                { name: 'Nile Delta', lat: 2.2217, lng: 31.4083, description: 'Birding & Shoebill Spotting' },
                { name: 'Murchison Falls (Bottom)', lat: 2.2505, lng: 31.7828, description: 'Boat Cruise' },
                { name: 'Top of the Falls', lat: 2.2520, lng: 31.7850, description: 'Guided Hike' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/murhison-drone.webp`,
                `${import.meta.env.BASE_URL}images/pic1.jpg`,
                `${import.meta.env.BASE_URL}images/pic11.jpg`,
                `${import.meta.env.BASE_URL}images/pic8.jpg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'Flight to Murchison Falls & Nile Delta Cruise',
                  description: "Pick up from Kampala or Entebbe and transfer to Entebbe airport (between 10 to 40 minutes approx.) for your scheduled flight with Aerolink to Pakuba/Murchison Falls NP at 12:30. Arrive at 13:30, where you will be met by the lodge's 4x4 safari van and transferred to the lodge for lunch. In the afternoon, we will take a Nile Delta cruise to Lake Albert—a paradise for bird watching. Keep a keen eye out for the rare Shoebill Stork if lucky. Return to the lodge for a relaxing evening.",
                  meals: 'Lunch, Dinner',
                  stay: 'Paraa Safari Lodge (Deluxe Room)'
                },
                {
                  day: 2,
                  title: 'Morning Game Drive & Boat Cruise to the Bottom of the Falls',
                  description: "Set out for an early morning game drive on the northern bank of the River Nile. Look out for elephants, lions, Cape buffaloes, Rothschild's giraffes, hartebeests, Oribi, spotted hyenas, and the elusive leopard. Return to the lodge for breakfast and lunch. In the afternoon (14:00), take a boat cruise upstream to the 'Bottom of the Falls'. Stop a few meters from the 'Devil's Cauldron' to witness the Nile squeezing through a 6-meter canyon with a thunderous roar. Spot hippos, crocodiles, and diverse bird species like the Goliath heron and Kingfisher along the 17km stretch. Disembark for a guided 1.5-hour hike to the 'Top of the Falls' for breathtaking views. The lodge car will pick you up from the top for the transfer back.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Paraa Safari Lodge (Deluxe Room)'
                },
                {
                  day: 3,
                  title: 'Final Game Drive & Flight Back to Entebbe',
                  description: "After breakfast, enjoy one last morning game drive in the wilderness before being transferred to Pakuba airfield for your scheduled flight with Aerolink to Entebbe at 13:45. Arrive at 16:30 to connect to your departure flight.",
                  meals: 'Breakfast',
                  stay: 'N/A'
                }
              ],
              inclusions: [
                'Scheduled Aerolink flights (Entebbe - Pakuba - Entebbe)',
                'Airport transfers in Entebbe & Pakuba',
                'Accommodation at Paraa Safari Lodge (Deluxe Room)',
                'All meals as per itinerary',
                'Ground transport in a 4x4 Safari Van',
                'Nile Delta cruise',
                'Bottom of the Falls boat cruise',
                'Top of the Falls guided hike',
                'Park entrance fees'
              ],
              exclusions: [
                'International flights',
                'Uganda Visa fees',
                'Travel insurance',
                'Personal expenses (drinks, laundry)',
                'Tips for guides and staff'
              ],
              testimonial: {
                quote: "The flight saved us so much time, and landing right in the heart of the park was incredible. Paraa Safari Lodge is simply stunning.",
                author: "Robert T.",
                platform: "TripAdvisor",
                headline: "The Only Way to See Murchison!"
              }
            }
          },
          {
            title: '3 Days Queen Elizabeth Safari',
            slug: '3-days-queen-elizabeth-safari',
            price: '1500$',
            per: '1 person',
            category: 'Wildlife Safaris',
            durationDays: 3,
            wildlife: ['Lion', 'Elephant', 'Hippo', 'Crocodile', 'Buffalo'],
            highlights: ['Tree-climbing lions (Ishasha sector)', 'Kazinga Channel boat cruise', 'Volcanic Crater Lakes', 'Savannah mammal tracking'],
            image: `${import.meta.env.BASE_URL}images/Elizabeth.jpeg`,
            details: {
              duration: '3 Days',
              location: 'Queen Elizabeth National Park',
              transport: '4x4 Safari Van',
              accommodation: 'Aardvark Safari Lodge',
              routeCoordinates: [
                { name: 'Kampala', lat: 0.3476, lng: 32.5825, description: 'Starting Point' },
                { name: 'Uganda Equator', lat: -0.0022, lng: 32.0622, description: 'Photo Stop & Water Experiment' },
                { name: 'Mbarara City', lat: -0.6072, lng: 30.6545, description: 'En-route Lunch' },
                { name: 'Aardvark Safari Lodge', lat: -0.1986, lng: 30.0000, description: 'Lodge Check-in' },
                { name: 'Kasenyi Plains', lat: -0.1500, lng: 30.0900, description: 'Morning Game Drive' },
                { name: 'Kazinga Channel', lat: -0.1747, lng: 29.9500, description: 'Afternoon Boat Cruise' },
                { name: 'Twin Lakes (Rubirizi)', lat: -0.2312, lng: 30.1111, description: 'Scenic Crater Lakes' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/Elizabeth.jpeg`,
                `${import.meta.env.BASE_URL}images/pic14.jpg`,
                `${import.meta.env.BASE_URL}images/pic21.jpg`,
                `${import.meta.env.BASE_URL}images/pic9.jpg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'Pickup and Transfer to Queen Elizabeth NP',
                  description: "You will be picked up by the company driver-guide. After the briefing with the guide, our 3-day safari in Queen Elizabeth National Park begins in a 4x4 safari van. The amazing journey to Queen Elizabeth National Park — also known as the 'Medley of Wonders' — starts heading towards the west of the country. A stop-over can be made at the Uganda Equator at Kayabwe for taking photos, the famous water experiment, and easing yourself. You will then proceed to Mbarara City, the biggest city in Western Uganda, for an en-route lunch, and then proceed to Queen Elizabeth NP, reaching the lodge in the evening for check-in and relaxation.",
                  meals: 'Lunch, Dinner',
                  stay: 'Aardvark Safari Lodge'
                },
                {
                  day: 2,
                  title: 'Game Drive in Kasenyi Plains & Kazinga Channel Boat Cruise',
                  description: "After an early breakfast, the guide will take you to the park for a game drive in the Kasenyi plains in search of various animals. Nature is unpredictable — whatsoever mother nature gives us is what we receive from her. The drive will also take you to the crater lake Bunyampaka where you can even buy some souvenirs for yourself. After here, you will go back to the lodge for lunch. After lunch you will embark on a boat cruise on the Kazinga Channel, which connects the two lakes Edward and George, for various animals and birds. On a good day, large herds of elephants are spotted on the river bank, hippos, crocodiles, and various water birds which are permanent inhabitants of the channel. After the boat cruise, enjoy a game drive as you go out of the park back to the lodge for relaxing and overnight.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Aardvark Safari Lodge'
                },
                {
                  day: 3,
                  title: 'Twin Crater Lakes Visit and Return to Kampala/Entebbe',
                  description: "After morning breakfast, you will check out of the lodge and drive through the beautiful rolling hills of Rubirizi district. Rubirizi is blessed with a number of crater lakes; out of these you will be able to make a stop-over at the twin lakes in Kichwamba — also known as the 'Lakes in Love' — for photography and scenic views. You then proceed towards Kampala with an en-route lunch in Mbarara City. After lunch you will proceed back to Entebbe for your flight back home. The trip is over!",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              inclusions: [
                'Professional Driver-Guide',
                '4x4 Safari Van with Pop-up roof',
                'Fuel for the entire trip',
                'Accommodation (Aardvark Safari Lodge)',
                'All meals as per itinerary',
                'Park entrance fees',
                'Kazinga Channel Boat Cruise',
                'Twin Crater Lakes visit',
                'Bottled mineral water on board'
              ],
              exclusions: [
                'International flights',
                'Uganda Visa fees',
                'Travel insurance',
                'Personal expenses (laundry, drinks, telephone)',
                'Tips for guides and staff',
                'Optional activities not mentioned'
              ],
              testimonial: {
                quote: "Seeing the elephants and hippos on the Kazinga Channel was the highlight of our trip. The 'medley of wonders' is a fitting name!",
                author: "David L.",
                platform: "TripAdvisor",
                headline: "The Medley of Wonders!"
              }
            }
          },
          {
            title: '3 Days Bwindi Gorilla Trekking Adventure',
            slug: '3-days-bwindi-gorilla-trekking',
            price: '2100$',
            per: '1 person',
            category: 'Gorilla & Primate',
            durationDays: 3,
            wildlife: ['Gorilla', 'Monkey', 'Bird'],
            highlights: ['Gorilla trekking experience', 'Batwa cultural visit', 'Scenic mountain landscapes'],
            image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.02.10.jpeg`,
            details: {
              duration: '3 Days',
              location: 'Bwindi Impenetrable Forest National Park',
              transport: '4x4 Safari Jeep',
              accommodation: 'Rushaga Gorilla Haven Lodge',
              routeCoordinates: [
                { name: 'Kampala', lat: 0.3476, lng: 32.5825, description: 'Departure Point' },
                { name: 'Uganda Equator', lat: -0.0022, lng: 32.0622, description: 'Photo Stop & Water Experiment' },
                { name: 'Mbarara', lat: -0.6072, lng: 30.6545, description: 'En-route Lunch' },
                { name: 'Kabale / Rubanda', lat: -1.2499, lng: 29.9894, description: 'Scenic Hills' },
                { name: 'Bwindi (Rushaga)', lat: -1.0475, lng: 29.7022, description: 'Gorilla Trekking' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.02.10.jpeg`,
                `${import.meta.env.BASE_URL}images/pic5.jpg`,
                `${import.meta.env.BASE_URL}images/batwa.jpg`,
                `${import.meta.env.BASE_URL}images/pic4.jpg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'Transfer to Bwindi Impenetrable Forest NP',
                  description: "You will be picked up by the company driver-guide. After the briefing with the guide, our 3-day primate safari begins in a 4x4 safari jeep. The amazing journey to Bwindi Impenetrable Forest National Park — also known as the Gorilla Trip — heads towards Kabale and Kisoro in South-Western Uganda. A stop-over can be made at the Kayabwe Equator for taking photos and the famous water experiment. You then proceed to Mbarara for an en-route lunch, and proceed to Bwindi through the beautiful sceneries of Kabale and Rubanda, reaching the lodge in the late evening for dinner and overnight.",
                  meals: 'Lunch, Dinner',
                  stay: 'Rushaga Gorilla Haven Lodge'
                },
                {
                  day: 2,
                  title: 'Gorilla Trekking in Bwindi Forest',
                  description: "After an early morning breakfast, you will drive to the park headquarters for briefing and registration of gorilla tracking. You will be given a packed lunch box and 1.5 litres of water, then drive to the park headquarters. On arrival, your guide will ask for your passport and gorilla permits to register and allocate you to a gorilla group. You will then wait for a briefing from the ranger guide. After the briefing you will be given your gorilla group and go for trekking — the activity takes between 3 to 4 hours depending on the gorillas' location. Once you find them, you will spend one magical hour with the gorillas taking photos. After that, you will go back to the starting point for certificate rewards, then drive back to the lodge for relaxing, dinner, and overnight.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Rushaga Gorilla Haven Lodge'
                },
                {
                  day: 3,
                  title: 'Batwa Community Visit & Return to Entebbe',
                  description: "After an early morning breakfast, you will go and visit the Batwa (Pigmy) community for one hour, experiencing their traditional way of life and forest survival skills. You then embark on the journey back to Entebbe with an en-route lunch. After lunch, drive back to Entebbe. The end of a truly unforgettable trip!",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              inclusions: [
                'Gorilla Trekking Permit',
                'Professional Driver-Guide',
                '4x4 Safari Jeep',
                'Accommodation (Rushaga Gorilla Haven Lodge)',
                'All meals as per itinerary',
                'Packed lunch for trekking day',
                'Batwa community visit',
                'Trekking certificate',
                'Bottled water on board'
              ],
              exclusions: [
                'International Flights',
                'Tips',
                'Visas',
                'Personal Insurance'
              ],
              testimonial: {
                quote: "Meeting the gorillas was the best experience of my life. Come Again Tours handled all the permits and logistics perfectly.",
                author: "Sarah M.",
                platform: "TripAdvisor",
                headline: "Simply Unforgettable!"
              }
            }
          },
          {
            title: '3 Days Kibale Chimpanzee Safari',
            slug: '3-days-kibale-chimpanzee-tour',
            price: '1580$',
            per: '1 person',
            category: 'Gorilla & Primate',
            durationDays: 3,
            wildlife: ['Chimpanzee', 'Monkey', 'Bird'],
            highlights: ['Chimpanzee Tracking (1,500+ population)', 'Bigodi Wetland Sanctuary Walk', 'Amabere Caves & Crater Lakes', '12 Primate Species'],
            image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.06.18-1.jpeg`,
            details: {
              duration: '3 Days',
              location: 'Kibale Forest & Fort Portal',
              transport: 'Private 4x4 Safari Vehicle',
              accommodation: 'Primate Lodge / Isunga Safari Lodge / Chimpanzee Forest Guest House',
              routeCoordinates: [
                { name: 'Kampala/Entebbe', lat: 0.3476, lng: 32.5825, description: 'Starting Point' },
                { name: 'Mubende', lat: 0.5633, lng: 31.3897, description: 'Scenic Route Stop' },
                { name: 'Fort Portal (Amabere Caves)', lat: 0.6931, lng: 30.2762, description: 'Caves & Crater Lakes' },
                { name: 'Kanyanchu Visitor Centre', lat: 0.4431, lng: 30.3844, description: 'Chimp Trekking Base' },
                { name: 'Bigodi Wetland', lat: 0.3800, lng: 30.4100, description: 'Birding & Nature Walk' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/pic3.jpg`,
                `${import.meta.env.BASE_URL}images/pic20.jpg`,
                `${import.meta.env.BASE_URL}images/pic22.jpg`,
                `${import.meta.env.BASE_URL}images/tea.webp`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'KAMPALA → FORT PORTAL → KIBALE FOREST',
                  description: "Depart Kampala/Entebbe at 7:00 AM in a private 4×4 safari vehicle for a scenic 5–6 hr drive via the Mubende–Fort Portal route, passing through lush tea estates and banana plantations. Enjoy an en-route stop in Fort Portal town for lunch and a visit to the famous Amabere Caves and surrounding Crater Lakes. Arrive in the Kibale Forest area in the afternoon and check in to your lodge. In the evening, attend an orientation briefing by your guide covering rules, safety, and what to expect during the chimp trekking adventure.",
                  meals: 'Lunch, Dinner',
                  stay: 'Primate Lodge (Luxury) | Isunga Safari Lodge (Mid-Range) | Chimpanzee Forest Guest House (Budget)'
                },
                {
                  day: 2,
                  title: 'CHIMPANZEE TREKKING & BIGODI WETLAND WALK',
                  description: "After an early breakfast, head to Kanyanchu Visitor Centre by 6:45 AM for a ranger briefing on rules of engagement and chimp behaviour. Enter the forest with your UWA ranger, following vocalisations and tracks to locate habituated chimp communities. Spend a magical hour observing them at close range. You may also encounter 12 other primate species, including red-tailed monkeys and black-and-white colobus. In the afternoon, take a guided walk through Bigodi Wetland Sanctuary to spot over 200 bird species (like the Great Blue Turaco), sitatunga antelopes, and otters. Conclude with a community village walk to meet local Batoro people and visit craft markets.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Primate Lodge (Luxury) | Isunga Safari Lodge (Mid-Range) | Chimpanzee Forest Guest House (Budget)'
                },
                {
                  day: 3,
                  title: 'NATURE WALK, TEA ESTATES & RETURN TO KAMPALA',
                  description: "Enjoy a leisurely breakfast followed by an optional early-morning birding walk or a guided nature walk to discover medicinal plants and ancient rainforest trees. Optionally, embark on a cycling adventure through the Mpanga Tea Estate with scenic crater lake views. Depart Kibale mid-morning for the return drive. Enjoy an en-route lunch in Fort Portal or Mbarara and make a memorable photo stop at the Uganda Equator monument to straddle two hemispheres. Arrive in Kampala/Entebbe by early evening for drop-off at your hotel or the airport.",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              inclusions: [
                'Private 4×4 safari vehicle & fuel',
                'English-speaking professional driver/guide',
                '1× Chimpanzee trekking permit (USD 250)',
                '2 nights lodge accommodation',
                'All meals: breakfast, lunch & dinner',
                'Bigodi Wetland Sanctuary guided walk',
                'Pure bottled drinking water & soft drinks',
                'Park entry fees',
                'Airport/hotel pickup & drop-off'
              ],
              exclusions: [
                'International flights & Uganda visa',
                'Travel/medical insurance',
                'Chimpanzee Habituation permit (USD 300)',
                'Porter fees during trekking',
                'Personal expenses & laundry',
                'Alcoholic beverages',
                'Tips for guides, rangers & lodge staff'
              ],
              testimonial: {
                quote: "Being so close to the chimpanzees in the wild was a life-changing experience. The Bigodi walk was equally stunning with its incredible birdlife.",
                author: "Elena V.",
                platform: "TripAdvisor",
                headline: "A Primate Lover's Dream!"
              }
            }
          },
          {
            title: '5 Days Gorilla Trekking & Queen Elizabeth Safari',
            slug: '5-days-gorilla-queen-combo',
            price: '2600$',
            per: '1 person',
            category: 'Multi-Park Circuits',
            durationDays: 5,
            wildlife: ['Gorilla', 'Lion', 'Elephant', 'Hippo'],
            highlights: ['Mountain Gorilla Trekking (Bwindi)', 'Kazinga Channel Boat Cruise', 'Ishasha Tree-Climbing Lions', 'Kyambura Gorge Chimpanzee Tracking'],
            image: `${import.meta.env.BASE_URL}images/goril.jpg`,
            details: {
              duration: '5 Days',
              location: 'Southwestern Uganda',
              transport: 'Private 4x4 Safari Vehicle',
              accommodation: 'Mweya Safari Lodge / Enganzi Lodge / Mahogany Springs',
              routeCoordinates: [
                { name: 'Kampala/Entebbe', lat: 0.3476, lng: 32.5825, description: 'Starting Point' },
                { name: 'Kayabwe (Equator)', lat: -0.0022, lng: 32.0622, description: 'Photo Stop' },
                { name: 'Mbarara', lat: -0.6022, lng: 30.6482, description: 'Lunch Stop' },
                { name: 'Kasenyi Plains (QENP)', lat: -0.0245, lng: 30.1345, description: 'Game Drives' },
                { name: 'Ishasha Sector', lat: -0.7333, lng: 29.7333, description: 'Tree-climbing Lions' },
                { name: 'Buhoma (Bwindi)', lat: -0.9900, lng: 29.6100, description: 'Gorilla Trekking Base' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.02.10.jpeg`,
                `${import.meta.env.BASE_URL}images/Elizabeth.jpeg`,
                `${import.meta.env.BASE_URL}images/lions-tree.jpeg`,
                `${import.meta.env.BASE_URL}images/image3.jpeg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'ENTEBBE/KAMPALA – QUEEN ELIZABETH NATIONAL PARK',
                  description: "Early morning pickup and depart at 7:00 am for the 6–7 hour drive southwest. En route, stop at the Equator monument in Kayabwe for photographs and the Coriolis effect experiment. Continue through the rolling hills of Mbarara, the land of milk and long-horned Ankole cattle. Drive through tea plantations at Igara and Kalinzu Forest Reserve before arriving at a magnificent viewpoint of Queen Elizabeth National Park. Check in to your lodge and enjoy a brief evening game drive in the Kasenyi plains.",
                  meals: 'Lunch, Dinner',
                  stay: 'Mweya Safari Lodge (Luxury) / Enganzi Lodge (Mid-range) / Kazinga View Resort (Budget)'
                },
                {
                  day: 2,
                  title: 'QUEEN ELIZABETH NATIONAL PARK – GAME DRIVE & KAZINGA CHANNEL CRUISE',
                  description: "Rise early for a game drive in the Kasenyi plains to spot lions, elephants, buffaloes, Uganda kobs, and leopards. After lunch, embark on a 2-hour boat cruise on the Kazinga Channel, linking Lake George and Lake Edward. The banks teem with massive herds of hippos and buffaloes, while Nile crocodiles bask on the shore. With over 600 bird species, look out for African fish eagles, pink-backed pelicans, and African skimmers.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mweya Safari Lodge (Luxury) / Enganzi Lodge (Mid-range) / Kazinga View Resort (Budget)'
                },
                {
                  day: 3,
                  title: 'KYAMBURA GORGE CHIMP TRACKING – TRANSFER TO BWINDI IMPENETRABLE FOREST',
                  description: "Drive to Kyambura Gorge, the 'Valley of Apes', to track habituated chimpanzees through the lush forested ravine. Also encounter red-tailed monkeys and black-and-white colobus. In the afternoon, depart southward through the Ishasha sector for a game drive in search of the famous tree-climbing lions lounging on fig trees. Continue through the Kigezi highlands, passing terraced hillsides, arriving at Bwindi in the evening.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mahogany Springs Lodge / Silverback Lodge (Mid-range) / Buhoma Community Rest Camp (Budget)'
                },
                {
                  day: 4,
                  title: 'BWINDI IMPENETRABLE FOREST – MOUNTAIN GORILLA TREKKING',
                  description: "After a 8:00 am briefing at park headquarters, trek into the dense rainforest with armed rangers and guides. The trek can take 1 to 8 hours depending on the gorillas' movements. Once located, spend a precious 1 hour observing a habituated gorilla family as they feed, play, and nurse. This profound encounter is limited to 8 people per family per day. Receive your certificate and enjoy a free afternoon to relax or explore the local community.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mahogany Springs Lodge / Silverback Lodge (Mid-range) / Buhoma Community Rest Camp (Budget)'
                },
                {
                  day: 5,
                  title: 'BWINDI – KAMPALA/ENTEBBE DEPARTURE',
                  description: "After breakfast, begin the return drive through the hills of Kigezi and Mbarara. Stop at the Uganda Equator monument for a final photo opportunity before arriving in Kampala or Entebbe in the evening for your departure flight.",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              usefulInfo: {
                bestTime: "June–September and December–February (dry seasons).",
                whatToWear: "Long-sleeved shirt, trousers, waterproof hiking boots, rain jacket, and garden gloves for stinging nettles.",
                health: "Yellow fever vaccination required. Malaria prophylaxis is strongly recommended.",
                fitness: "Moderate to high. Trekking involves steep, muddy terrain up to 7,500 feet. Porters are available for hire.",
                gorillaPermit: "USD 800 per person. Should be booked well in advance."
              },
              inclusions: [
                'Private 4x4 safari vehicle with fuel',
                'English-speaking professional driver/guide',
                '1x Mountain Gorilla trekking permit (USD 800)',
                '1x Chimpanzee tracking permit (Kyambura Gorge)',
                'All park entry fees',
                'Kazinga Channel boat cruise',
                '4 nights lodge accommodation',
                'All meals as indicated',
                'Bottled drinking water in the vehicle',
                'All game drives as per itinerary'
              ],
              exclusions: [
                'International flights and Uganda entry visa',
                'Travel and medical insurance',
                'Alcoholic and premium beverages',
                'Porter fees (approx. USD 15-20)',
                'Tips and gratuities',
                'Personal expenses'
              ],
              testimonial: {
                quote: "Meeting the mountain gorillas was a spiritual experience. Combining it with the tree-climbing lions of Ishasha made this the perfect 5-day safari.",
                author: "Linda K.",
                platform: "TripAdvisor",
                headline: "Primates & Predators Perfected!"
              }
            }
          },
          {
            title: '5 Days Murchison Falls & Chimpanzee Safari',
            slug: '5-days-murchison-chimps',
            price: '2340$',
            per: '1 person',
            category: 'Multi-Park Circuits',
            durationDays: 5,
            wildlife: ['Chimpanzee', 'Lion', 'Elephant', 'Giraffe', 'Rhino'],
            highlights: ['On-foot Rhino Tracking (Ziwa)', "World's Most Powerful Waterfall", 'Victoria Nile Boat Cruise', 'Chimpanzee Tracking (Budongo Forest)'],
            image: `${import.meta.env.BASE_URL}images/murchison1.webp`,
            details: {
              duration: '5 Days',
              location: 'Northern Uganda',
              transport: 'Private 4x4 Safari Land Cruiser',
              accommodation: 'Paraa Safari Lodge / Nile Safari Lodge / Murchison River Lodge',
              routeCoordinates: [
                { name: 'Kampala/Entebbe', lat: 0.3476, lng: 32.5825, description: 'Starting Point' },
                { name: 'Ziwa Rhino Sanctuary', lat: 1.4500, lng: 32.1333, description: 'Rhino Tracking' },
                { name: 'Top of Murchison Falls', lat: 2.2783, lng: 31.7658, description: 'Powerful Cascade' },
                { name: 'Paraa Safari Lodge', lat: 2.2618, lng: 31.6963, description: 'Game Drive Base' },
                { name: 'Budongo Forest', lat: 1.7833, lng: 31.6667, description: 'Chimp Trekking' },
                { name: 'Nile Delta', lat: 2.2333, lng: 31.3833, description: 'Shoebill Stork Search' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/murchison1.webp`,
                `${import.meta.env.BASE_URL}images/pic1.jpg`,
                `${import.meta.env.BASE_URL}images/pic11.jpg`,
                `${import.meta.env.BASE_URL}images/pic3.jpg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'KAMPALA/ENTEBBE – ZIWA RHINO SANCTUARY – MURCHISON FALLS NATIONAL PARK',
                  description: "Early morning pick-up at 7:00 am. Drive northward through the Luwero Triangle, stopping for fresh organic fruits from local farmers. En route, stop at Ziwa Rhino Sanctuary—the only place in Uganda to track wild white rhinos on foot. Accompanied by UWA rangers, observe these restored animals in their natural habitat. After lunch in Masindi, proceed to Murchison Falls to witness the entire volume of the River Nile force through an 8-metre gorge before plunging 43 metres. Enjoy the thunderous sound and permanent rainbow at the Top of the Falls.",
                  meals: 'Lunch, Dinner',
                  stay: 'Paraa Safari Lodge / Nile Safari Lodge (Luxury) / Murchison River Lodge (Mid-range) / Red Chilli Rest Camp (Budget)'
                },
                {
                  day: 2,
                  title: 'MORNING GAME DRIVE – AFTERNOON BOAT CRUISE TO THE BASE OF THE FALLS',
                  description: "Rise early for a game drive across the northern bank, home to large herds of elephants, Rothschild's giraffes, lions, and Jackson's hartebeests. In the afternoon, board a launch for a 2–3 hour boat cruise on the Victoria Nile. Spot hundreds of hippos, Nile crocodiles, and elephants bathing along the banks. As you approach the base of the falls, the roar of the water and the spray create one of Africa's most dramatic natural spectacles. Optional: Hike to the top for sunset views.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Paraa Safari Lodge / Nile Safari Lodge (Luxury) / Murchison River Lodge (Mid-range) / Red Chilli Rest Camp (Budget)'
                },
                {
                  day: 3,
                  title: 'NILE DELTA BOAT CRUISE – AFTERNOON GAME DRIVE',
                  description: "Head out for the Nile Delta boat cruise, an exceptional birding destination and the best spot to search for the elusive, prehistoric-looking shoebill stork. Look for Goliath herons, African skimmers, and saddle-billed storks. In the afternoon, cross the Nile for a game drive in the Kaniyo Pabidi area. Spot olive baboons, black-and-white colobus monkeys, and forest birds—a preview of tomorrow's chimpanzee habitat.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Paraa Safari Lodge / Nile Safari Lodge (Luxury) / Murchison River Lodge (Mid-range) / Red Chilli Rest Camp (Budget)'
                },
                {
                  day: 4,
                  title: 'BUDONGO FOREST – CHIMPANZEE TREKKING',
                  description: "Transfer to Budongo Central Forest Reserve, home to over 800 chimpanzees and the largest collection of mahogany trees in Africa. Briefing at the Royal Mile trailhead before entering the forest with your ranger. Spend 1 hour observing habituated chimps as they feed and groom. You may also see red-tailed monkeys and blue monkeys. The afternoon is at leisure to relax by the Nile or take an optional nature walk in this top birding destination.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Paraa Safari Lodge / Nile Safari Lodge (Luxury) / Murchison River Lodge (Mid-range) / Red Chilli Rest Camp (Budget)'
                },
                {
                  day: 5,
                  title: 'MORNING GAME DRIVE – RETURN TO KAMPALA/ENTEBBE',
                  description: "A final short game drive to spot any missed wildlife, including leopards or even a cheetah. After breakfast, begin the return journey. Optional stop at the sacred Nakayima Tree in Mubende, associated with the Buganda kingdom. Arrive in Kampala or Entebbe by early evening for your onward flight.",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              usefulInfo: {
                bestTime: "December–February and June–September (dry seasons) for game viewing. Wet seasons offer lush scenery and birding.",
                whatToPack: "Long-sleeved shirts/trousers for chimp trekking, sturdy boots, rain jacket, binoculars, and zoom lens.",
                health: "Yellow fever vaccination required. Malaria prophylaxis is strongly recommended.",
                aboutBudongo: "Uganda's largest tropical forest (825 km²) with 800+ chimpanzees. Famous for its mahogany giants.",
                aboutFalls: "The world's most powerful waterfall by flow rate (up to 300 cubic metres per second)."
              },
              inclusions: [
                'Private 4x4 safari vehicle with fuel',
                'English-speaking professional driver/guide',
                '1x Chimpanzee trekking permit (Budongo Forest)',
                'Rhino tracking at Ziwa Sanctuary',
                'All park entry fees',
                'Boat cruise to the base of the falls',
                'Nile Delta boat cruise',
                '4 nights lodge accommodation',
                'All meals as indicated',
                'Bottled drinking water in the vehicle',
                'All game drives as per itinerary'
              ],
              exclusions: [
                'International flights and Uganda entry visa',
                'Travel and medical insurance',
                'Alcoholic and premium beverages',
                'Tips and gratuities',
                'Porter fees (approx. USD 10-15)',
                'Personal expenses'
              ],
              testimonial: {
                quote: "Watching the River Nile explode through that narrow gorge was incredible. Tracking rhinos at Ziwa was a powerful experience to start the trip.",
                author: "Peter S.",
                platform: "TripAdvisor",
                headline: "Powerful Nature & Primate Magic!"
              }
            }
          },
          {
            title: '7 Days Uganda Wildlife Classic Safari',
            slug: '7-days-uganda-wildlife-classic',
            price: '2820$',
            per: '1 person',
            category: 'Multi-Park Circuits',
            durationDays: 7,
            wildlife: ['Gorilla', 'Chimpanzee', 'Lion', 'Elephant', 'Hippo'],
            highlights: ['On-foot Rhino Tracking', 'Murchison Falls (World\'s Most Powerful)', 'Chimpanzee Trekking (Kibale)', 'Tree-climbing Lions (Ishasha)', 'Mountain Gorilla Trekking (Bwindi)', 'Lake Bunyonyi Relaxation'],
            image: `${import.meta.env.BASE_URL}images/pearl.jpeg`,
            details: {
              duration: '7 Days',
              location: 'Uganda Safari Circuit',
              transport: 'Private 4x4 Safari Land Cruiser',
              accommodation: 'Paraa Safari Lodge / Primate Lodge / Mweya Safari Lodge / Mahogany Springs',
              routeCoordinates: [
                { name: 'Kampala/Entebbe', lat: 0.3476, lng: 32.5825, description: 'Starting Point' },
                { name: 'Ziwa Rhino Sanctuary', lat: 1.4500, lng: 32.1333, description: 'Rhino Tracking' },
                { name: 'Murchison Falls NP', lat: 2.2618, lng: 31.6963, description: 'Big Game Safari' },
                { name: 'Kibale Forest', lat: 0.4431, lng: 30.3844, description: 'Chimp Trekking' },
                { name: 'Queen Elizabeth NP', lat: -0.1500, lng: 30.0900, description: 'Kazinga Channel' },
                { name: 'Ishasha Sector', lat: -0.6500, lng: 29.6500, description: 'Tree-climbing Lions' },
                { name: 'Bwindi NP', lat: -1.0475, lng: 29.7022, description: 'Gorilla Trekking' },
                { name: 'Lake Bunyonyi', lat: -1.2833, lng: 29.9167, description: 'Switzerland of Africa' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/pic11.jpg`,
                `${import.meta.env.BASE_URL}images/pic1.jpg`,
                `${import.meta.env.BASE_URL}images/pic3.jpg`,
                `${import.meta.env.BASE_URL}images/pic14.jpg`,
                `${import.meta.env.BASE_URL}images/pic5.jpg`,
                `${import.meta.env.BASE_URL}images/pic21.jpg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'ENTEBBE/KAMPALA – ZIWA RHINO SANCTUARY – MURCHISON FALLS NATIONAL PARK',
                  description: "Depart from your hotel at 6:30–7:00 am for the drive northward to Murchison Falls National Park. Head through the Luwero Triangle, passing roadside markets selling tropical fruits. First stop: Ziwa Rhino Sanctuary—the only place in Uganda where you can track wild Southern White Rhinoceroses on foot. Accompanied by armed UWA rangers, walk through the open savannah to observe these magnificent animals at close range. Continue to Masindi for lunch, then proceed to Murchison Falls NP. Stop at the top of the falls to witness the entire volume of the Victoria Nile force itself through an 8-metre rock cleft and plunge 43 metres in a thundering cascade. The roar and power of the water create an unforgettable first impression.",
                  meals: 'Lunch, Dinner',
                  stay: 'Paraa Safari Lodge / Nile Safari Lodge / Baker\'s Lodge (Luxury) / Murchison River Lodge / Fort Murchison Lodge (Mid-range) / Red Chilli Rest Camp (Budget)'
                },
                {
                  day: 2,
                  title: 'MORNING GAME DRIVE – NILE BOAT CRUISE TO THE BASE OF THE FALLS',
                  description: "Rise before dawn for a pre-breakfast game drive on the northern bank. Spot massive elephant herds, Rothschild's giraffes, Cape buffaloes, Uganda kobs, and scan for lions and leopards. Return to the lodge for a full breakfast. Mid-morning, board the park launch for the famous 2–3 hour boat cruise along the Victoria Nile to the base of the falls. Pass through a panorama of wildlife: hippo pods, Nile crocodiles, and elephants wading in the shallows. As you approach the base, the roar grows louder. Disembark for a steep hike to the top of the falls before your guide collects you. Optional: Nile Delta boat cruise for shoebill stork sightings.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Paraa Safari Lodge / Nile Safari Lodge / Baker\'s Lodge (Luxury) / Murchison River Lodge / Fort Murchison Lodge (Mid-range) / Red Chilli Rest Camp (Budget)'
                },
                {
                  day: 3,
                  title: 'MURCHISON FALLS – TRANSFER TO KIBALE FOREST NATIONAL PARK',
                  description: "After an early breakfast and a final morning game drive, begin the 6–7 hour drive southward to Kibale Forest via the Albert Nile escarpment and Fort Portal. Descend from the savannah into the Albertine Rift Valley, passing through the lush crater lake region. Cross the Nile by ferry, often spotting hippos and monitor lizards. Stop at the Fort Portal crater lakes viewpoint for photographs of the volcanic landscape. Arrive at Kibale Forest in the late afternoon, check in and enjoy a forest evening walk.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Primate Lodge / Papaya Lake Lodge (Luxury) / Kibale Forest Camp / Isunga Safari Lodge (Mid-range) / Chimpanzee Forest Guesthouse (Budget)'
                },
                {
                  day: 4,
                  title: 'KIBALE FOREST – CHIMPANZEE TREKKING – BIGODI WETLAND SANCTUARY – QUEEN ELIZABETH',
                  description: "Transfer to Kanyanchu Visitor Centre for a briefing before entering Kibale Forest—Uganda's Primate Capital. Home to over 1,500 chimpanzees, you'll track a habituated community through the ancient rainforest. Spend one extraordinary hour observing them feeding, grooming, and swinging through the canopy. After lunch, visit Bigodi Wetland Sanctuary for a 3-hour guided walk through papyrus swamp. Spot additional primates like colobus and red-tailed monkeys, and birds like the great blue turaco. Later, drive 2.5–3 hours to Queen Elizabeth National Park, arriving for sunset views over the Kazinga Channel.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mweya Safari Lodge (Luxury) / Enganzi Lodge / Ihamba Lakeside Safari Lodge (Mid-range) / Kazinga Channel View Resort / Pumba Safari Cottages (Budget)'
                },
                {
                  day: 5,
                  title: 'QUEEN ELIZABETH – KASENYI GAME DRIVE – KAZINGA CHANNEL CRUISE – ISHASHA LIONS',
                  description: "Rise early for a game drive through the Kasenyi Plains—the park's prime predator circuit. Spot lions, elephants, buffaloes, and thousands of Uganda kobs. Return for breakfast before boarding a boat at Mweya jetty for the 2-hour Kazinga Channel boat cruise. See massive hippo pods, Nile crocodiles, and a procession of waterbirds. After lunch, drive southward to the Ishasha sector to search for the famous tree-climbing lions. Witnessing a pride sprawled across the branches of large fig trees is a highlight of the trip. Continue through the Kigezi highlands to Bwindi, arriving in the evening.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mahogany Springs Lodge / Bwindi Lodge / Clouds Mountain Gorilla Lodge (Luxury) / Silverback Lodge / Chameleon Hill Lodge (Mid-range) / Buhoma Community Rest Camp / Broadbill Forest Camp (Budget)'
                },
                {
                  day: 6,
                  title: 'BWINDI IMPENETRABLE FOREST – MOUNTAIN GORILLA TREKKING – LAKE BUNYONYI',
                  description: "The peak of the safari. After an early breakfast and briefing at park headquarters, enter Bwindi Impenetrable Forest—a UNESCO World Heritage Site. Hike through the dense, ancient rainforest (1–8 hours) to find your assigned gorilla family. Spend one precious, strictly timed hour observing these gentle giants. Watching a silverback or a mother tending her infant is a profound experience. Return for your trekking certificate and lunch before driving 2–3 hours to Lake Bunyonyi. Arrive as the evening light falls over the water, a serene transition from the morning's intensity.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Arcadia Cottages / Birdnest at Bunyonyi Resort (Luxury) / Bunyonyi Safaris Resort / Bunyonyi Overland Resort (Mid-range) / Bushara Island Camp / Byoona Amagara (Budget)'
                },
                {
                  day: 7,
                  title: 'LAKE BUNYONYI – ISLAND CANOE CRUISE – RETURN TO KAMPALA/ENTEBBE',
                  description: "A final morning at Lake Bunyonyi, Africa's second deepest lake. Completely safe for swimming, its 29 islands are scattered across the still blue water. Take a traditional wooden dugout canoe for a guided cruise to Punishment Island, Bwama Island (former leprosy centre), and Njuyeera Island. After the tour, climb to a hilltop viewpoint for a final panoramic view of the shimmering water and terraced hills. After a lakeside lunch, begin the 7–8 hour return drive to Kampala or Entebbe, stopping at the Equator for photos and souvenirs. Arrive in the evening for drop-off at your hotel or the airport.",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              safariHighlights: [
                'On-foot White Rhino tracking at Ziwa Sanctuary',
                'Visit the world\'s most powerful waterfall (Murchison)',
                'Big Game Safari: Elephants, Rothschild\'s giraffes, Lions',
                'Nile & Kazinga Channel boat wildlife cruises',
                'Chimpanzee tracking in the Primate Capital (Kibale)',
                'Tree-climbing lions of Ishasha',
                'UNESCO World Heritage Mountain Gorilla trekking',
                'Island hopping on Lake Bunyonyi (Switzerland of Africa)'
              ],
              usefulInfo: {
                bestTime: "June–September and December–February (dry seasons). Activities operate year-round.",
                fitness: "Moderate to High. Gorilla trekking (Day 6) can be demanding (1-8 hours hiking).",
                whatToPack: "Sturdy hiking boots, long-sleeved clothing, garden gloves for trekking, rain jacket, and warm fleece.",
                permits: "Gorilla (USD 800) and Chimp (USD 250) permits must be booked 4-6 months in advance.",
                whyClassic: "It delivers the five most celebrated Uganda safari experiences in a single, well-paced week."
              },
              inclusions: [
                'Private 4x4 safari vehicle with pop-up roof & fuel',
                'English-speaking professional driver/guide',
                'All UWA park entry fees (Murchison, Kibale, QE, Bwindi)',
                'White rhino tracking at Ziwa Sanctuary',
                'Nile boat cruise (Murchison Falls)',
                '1x Chimpanzee trekking permit (Kibale - USD 250)',
                'Bigodi Wetland Sanctuary guided walk',
                'Kazinga Channel boat cruise (Queen Elizabeth)',
                'Ishasha sector game drive (Tree-climbing lions)',
                '1x Mountain gorilla trekking permit (Bwindi - USD 800)',
                'Gorilla trekking completion certificate',
                'Lake Bunyonyi canoe hire & guided island tour',
                '6 nights lodge accommodation & all meals as indicated',
                'Bottled drinking water in the vehicle',
                'Airport/hotel pickup and drop-off'
              ],
              exclusions: [
                'International flights and Uganda entry visa (USD 50)',
                'Travel and medical/evacuation insurance',
                'Optional activities (Nile Delta boat, night drives, etc.)',
                'Porter fees (recommended USD 10-20 per trek)',
                'Alcoholic and premium beverages',
                'Tips and gratuities',
                'Personal expenses'
              ],
              testimonial: {
                quote: "No two days were alike. From the power of the Nile to the silence of Bunyonyi, this safari delivered the full Pearl of Africa experience.",
                author: "Classic Explorer",
                platform: "TripAdvisor",
                headline: "The Definitive Uganda Week!"
              }
            }
          },
          {
            title: '12 Days Uganda Wildlife & Primate Adventures',
            slug: '12-days-uganda-wildlife-adventure',
            price: '4200$',
            per: '1 person',
            description: "The 12 Days Uganda Wildlife & Primate Adventures is the most comprehensive Uganda safari itinerary available — a fully immersive journey through every major national park and wildlife destination in the Pearl of Africa, designed for travellers who want to experience Uganda in its entirety. Over 12 extraordinary days, this safari covers white rhino tracking, the world's most powerful waterfall, the source of the Nile, three separate chimpanzee trekking experiences, the tree-climbing lions of Ishasha, mountain gorilla trekking in Bwindi, golden monkey tracking in Mgahinga, and walking safaris in Lake Mburo.",
            destination: 'Ziwa, Murchison, Jinja, Kibale, QE, Bwindi, Mgahinga, Mburo & Bunyonyi',
            category: 'Multi-Park Circuits',
            durationDays: 12,
            wildlife: ['Gorilla', 'Chimpanzee', 'Lion', 'Elephant', 'Rhino', 'Leopard'],
            highlights: ['Every Major National Park', 'Every Major Primate', 'Source of the Nile', 'Three Chimp Trekking Sites', 'Mountain Gorilla Trekking', 'Golden Monkey Tracking'],
            image: `${import.meta.env.BASE_URL}images/adventure.jpg`,
            details: {
              duration: '12 Days',
              location: 'Uganda Full Circuit',
              transport: 'Private 4x4 Safari Land Cruiser',
              accommodation: 'Paraa Safari Lodge / Primate Lodge / Mweya Safari Lodge / Mahogany Springs / Mount Gahinga Lodge',
              routeCoordinates: [
                { name: 'Entebbe/Kampala', lat: 0.3476, lng: 32.5825, description: 'Starting Point' },
                { name: 'Ziwa Rhino Sanctuary', lat: 1.4500, lng: 32.1333, description: 'Rhino Tracking' },
                { name: 'Murchison Falls NP', lat: 2.2618, lng: 31.6963, description: 'World\'s Most Powerful Waterfall' },
                { name: 'Jinja (Source of the Nile)', lat: 0.4478, lng: 33.2026, description: 'Adventure Capital' },
                { name: 'Kibale Forest', lat: 0.4431, lng: 30.3844, description: 'Primate Capital' },
                { name: 'Queen Elizabeth NP', lat: -0.1500, lng: 30.0900, description: 'Savannah Safari' },
                { name: 'Kyambura Gorge', lat: -0.1764, lng: 30.1000, description: 'Valley of Apes' },
                { name: 'Ishasha Sector', lat: -0.6500, lng: 29.6500, description: 'Tree-climbing Lions' },
                { name: 'Bwindi NP', lat: -1.0475, lng: 29.7022, description: 'Gorilla Trekking' },
                { name: 'Mgahinga Gorilla NP', lat: -1.3667, lng: 29.6500, description: 'Virunga Volcanoes' },
                { name: 'Lake Mburo NP', lat: -0.6139, lng: 30.9347, description: 'Walking Safari' },
                { name: 'Lake Bunyonyi', lat: -1.2833, lng: 29.9167, description: 'Relaxation' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/rhino.jpeg`,
                `${import.meta.env.BASE_URL}images/waterfalls.jpg`,
                `${import.meta.env.BASE_URL}images/rafting.jpg`,
                `${import.meta.env.BASE_URL}images/chimp.jpeg`,
                `${import.meta.env.BASE_URL}images/lions-tree.jpeg`,
                `${import.meta.env.BASE_URL}images/ug-gorilla.jpg`,
                `${import.meta.env.BASE_URL}images/golden monkey.jpg`,
                `${import.meta.env.BASE_URL}images/Mburo.webp`,
                `${import.meta.env.BASE_URL}images/bunyonyi.jpg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'ENTEBBE/KAMPALA – ZIWA RHINO SAN – MURCHISON FALLS',
                  image: `${import.meta.env.BASE_URL}images/rhino.jpeg`,
                  description: "Depart Entebbe or Kampala northward for Murchison Falls National Park. En route, stop at Ziwa Rhino Sanctuary — the only place in Uganda to track wild Southern White Rhinos on foot. Walk with armed UWA rangers through open savannah to observe rhinos at close range. Continue to Masindi for lunch and proceed to Murchison Falls National Park. Stop at the top of the falls — the world's most powerful waterfall, where the entire volume of the Nile forces through an 8-metre rock cleft. Transfer to your lodge for dinner.",
                  meals: 'Lunch, Dinner',
                  stay: 'Paraa Safari Lodge / Nile Safari Lodge (Luxury) / Murchison River Lodge (Mid-range) / Red Chilli Rest Camp (Budget)'
                },
                {
                  day: 2,
                  title: 'MURCHISON FALLS – GAME DRIVE – NILE BOAT CRUISE – BUDONGO CHIMPS',
                  image: `${import.meta.env.BASE_URL}images/waterfalls.jpg`,
                  description: "Pre-dawn game drive on the northern savannah bank to spot Rothschild's giraffes, elephants, lions, and leopards. After breakfast, board the park launch for the famous 2–3 hour Nile boat cruise to the base of Murchison Falls. After lunch, cross the Nile ferry and drive to Budongo Central Forest Reserve for an afternoon chimpanzee trekking experience along the Royal Mile trail.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Paraa Safari Lodge / Nile Safari Lodge (Luxury) / Murchison River Lodge (Mid-range) / Red Chilli Rest Camp (Budget)'
                },
                {
                  day: 3,
                  title: 'MURCHISON FALLS – TRANSFER TO JINJA – SOURCE OF THE NILE',
                  image: `${import.meta.env.BASE_URL}images/Nile.jpg`,
                  description: "Final dawn game drive before driving eastward toward Jinja — Uganda's Adventure Capital. Pass through Mabira Forest, stopping for a roadside birding walk. Arrive in Jinja in the late afternoon. Board a sunset boat cruise to the Source of the Nile — the exact point where the river begins its 6,650 km journey to the Mediterranean. Watch fish eagles and pelicans over the water as the sun sets over Lake Victoria.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Nile Safari Lodge / Jinja Nile Resort (Luxury) / Haven Lodge / Nile Porch (Mid-range) / Jinja Backpackers (Budget)'
                },
                {
                  day: 4,
                  title: 'JINJA – MABAMBA SWAMP SHOEBILL – KIBALE FOREST',
                  image: `${import.meta.env.BASE_URL}images/bird.jpeg`,
                  description: "Depart early for Mabamba Bay Wetland on Lake Victoria—one of Africa's most reliable sites for the prehistoric Shoebill Stork. Board traditional wooden canoes to find this Vulnerable giant in the papyrus channels. Afterward, begin the drive westward to Kibale Forest NP via Fort Portal. The route climbs into the Rwenzori foothills and crater lake region.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Primate Lodge / Papaya Lake Lodge (Luxury) / Kibale Forest Camp / Isunga Lodge (Mid-range) / Chimpanzee Forest Guesthouse (Budget)'
                },
                {
                  day: 5,
                  title: 'KIBALE FOREST – CHIMPANZEE TREKKING – BIGODI WALK',
                  image: `${import.meta.env.BASE_URL}images/chimp.jpeg`,
                  description: "Track chimpanzees in Kibale Forest (home to over 1,500 chimps). Spend one unforgettable hour with a habituated community, observing their social interactions at close range. Return for lunch before the Bigodi Wetland Sanctuary community walk—a 3-hour trail through papyrus swamp. Spot up to five additional primate species.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Primate Lodge / Papaya Lake Lodge (Luxury) / Kibale Forest Camp / Isunga Lodge (Mid-range) / Chimpanzee Forest Guesthouse (Budget)'
                },
                {
                  day: 6,
                  title: 'QUEEN ELIZABETH NP – KASENYI GAME DRIVE – KAZINGA CRUISE',
                  image: `${import.meta.env.BASE_URL}images/Elizabeth.jpeg`,
                  description: "Drive to Queen Elizabeth NP, descending into the Rift Valley. Enjoy an afternoon game drive through the Kasenyi Plains to spot lions and elephants. Later, embark on a 2-hour Kazinga Channel boat cruise. Pass extraordinary concentrations of hippos and crocodiles.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mweya Safari Lodge (Luxury) / Enganzi Lodge / Ihamba Lakeside Safari Lodge (Mid-range) / Pumba Safari Cottages (Budget)'
                },
                {
                  day: 7,
                  title: 'QUEEN ELIZABETH – KYAMBURA GORGE CHIMPS – ISHASHA LIONS',
                  image: `${import.meta.env.BASE_URL}images/lions-tree.jpeg`,
                  description: "Track chimpanzees in the dramatic 100-metre-deep Kyambura Gorge ('Valley of Apes'). In the late afternoon, drive to the Ishasha sector to search for the famous tree-climbing lions draped across giant fig trees.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Ishasha Wilderness Camp / Kyambura Gorge Lodge (Luxury/Mid-range) / Ishasha Jungle Lodge (Budget)'
                },
                {
                  day: 8,
                  title: 'ISHASHA – TRANSFER TO BWINDI IMPENETRABLE FOREST',
                  image: `${import.meta.env.BASE_URL}images/tree-lion.jpeg`,
                  description: "Final Ishasha dawn game drive to spot lions. After breakfast, drive southward through the dramatic Kigezi highlands toward Bwindi. The landscape transitions from savannah to montane forest. Arrive in the early afternoon for an optional community walk.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mahogany Springs Lodge / Bwindi Lodge / Clouds Mountain Gorilla Lodge (Luxury) / Silverback Lodge / Chameleon Hill Lodge (Mid-range) / Buhoma Community Rest Camp (Budget)'
                },
                {
                  day: 9,
                  title: 'BWINDI FOREST – MOUNTAIN GORILLA TREKKING',
                  image: `${import.meta.env.BASE_URL}images/ug-gorilla.jpg`,
                  description: "The defining day. Trek through Bwindi's dense, ancient rainforest to find your assigned gorilla family. Spend one irreplaceable hour at close range watching silverbacks and juveniles. Receive your completion certificate before an afternoon Batwa Cultural Experience.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mahogany Springs Lodge / Bwindi Lodge / Clouds Mountain Gorilla Lodge (Luxury) / Silverback Lodge / Chameleon Hill Lodge (Mid-range) / Buhoma Community Rest Camp (Budget)'
                },
                {
                  day: 10,
                  title: 'MGAHINGA GORILLA NP – GOLDEN MONKEY TRACKING',
                  image: `${import.meta.env.BASE_URL}images/golden monkey.jpg`,
                  description: "Drive to Mgahinga Gorilla NP, nestled at the base of the Virunga Volcanoes. Afternoon: Track the Endangered Golden Monkey into the bamboo forest at 3,000 metres. Watch these energetic, golden-orange primates leap through the canopy.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mount Gahinga Safari Lodge (Luxury/Mid-range) / Kisoro Tourist Hotel / Amajambere Iwacu Community Camp (Budget)'
                },
                {
                  day: 11,
                  title: 'LAKE MBURO NP – WALKING SAFARI – BOAT CRUISE',
                  image: `${import.meta.env.BASE_URL}images/Mburo.webp`,
                  description: "Drive to Lake Mburo NP. Arrive for a boat cruise to spot hippos and crocodiles. Later, set out for a guided walking safari. Lake Mburo is the only park in Uganda with impalas and Burchell's zebras.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mweya Safari Lodge (Luxury) / Enganzi Lodge / Ihamba Lakeside Safari Lodge (Mid-range) / Pumba Safari Cottages (Budget)'
                },
                {
                  day: 12,
                  title: 'LAKE BUNYONYI – CANOE CRUISE – RETURN',
                  image: `${import.meta.env.BASE_URL}images/bunyonyi.jpg`,
                  description: "Explore the 29 islands of Lake Bunyonyi in a traditional wooden canoe. After a lakeside lunch, begin the 7–8 hour return drive to Kampala or Entebbe, stopping at the Equator for final photos.",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              safariHighlights: [
                'White rhino tracking at Ziwa Sanctuary',
                'World\'s most powerful waterfall (Murchison)',
                'Source of the Nile sunset cruise (Jinja)',
                'Shoebill Stork canoe search (Mabamba Bay)',
                'Three different Chimpanzee trekking ecosystems',
                'Mountain Gorilla trekking (UNESCO Bwindi)',
                'Endangered Golden Monkey tracking (Virunga Volcanoes)',
                'Guided walking safari in Lake Mburo NP',
                'Island hopping on Lake Bunyonyi'
              ],
              primateEncounters: [
                'Chimpanzees (Budongo, Kibale, & Kyambura Gorge)',
                'Mountain Gorillas (Bwindi Impenetrable Forest)',
                'Golden Monkeys (Virunga Bamboo Forest)',
                'Black-and-white Colobus & Red-tailed Monkeys',
                'Grey-cheeked Mangabeys & Olive Baboons',
                'L\'Hoest\'s Monkeys & Vervet Monkeys'
              ],
              usefulInfo: {
                bestTime: "June–September and December–February (dry seasons). Activities operate year-round.",
                fitness: "Moderate to High. Requires endurance for gorilla and three chimpanzee treks.",
                permits: "Includes Budongo ($150), Kibale ($250), Bwindi Gorilla ($800), and Mgahinga Golden Monkey ($60).",
                whatToPack: "Hiking boots, long-sleeved clothes, garden gloves for gorillas, rain jacket, and warm fleece for highlands.",
                primateDiversity: "Uganda has 13 primate species; this safari encounters 10-12 of them across 6 habitats."
              },
              inclusions: [
                'Private 4x4 safari vehicle & fuel',
                'English-speaking professional driver/guide',
                'All park entry fees and game drives',
                'White rhino tracking (Ziwa)',
                'Nile & Source of the Nile boat cruises',
                'Mabamba Shoebill canoe search',
                'Budongo, Kibale, & Kyambura Chimp permits',
                'Mountain Gorilla permit (USD 800)',
                'Golden Monkey tracking permit (USD 60)',
                'Batwa cultural experience',
                'Lake Bunyonyi canoe tour',
                '11 nights accommodation & all meals as indicated',
                'Bottled water in the vehicle',
                'Airport/hotel pickup and drop-off'
              ],
              exclusions: [
                'International flights and Uganda visa ($50)',
                'Travel and medical insurance',
                'Optional Chimp Habituation upgrade ($300)',
                'Optional Gahinga Volcano hike',
                'Porter fees (recommended $10-20 per trek)',
                'Alcoholic and premium beverages',
                'Tips and gratuities',
                'Personal expenses'
              ],
              testimonial: {
                quote: "The most comprehensive Uganda safari. Every park, every primate, and every landscape. Truly the journey of a lifetime.",
                author: "The Adventure Family",
                platform: "TripAdvisor",
                headline: "The Complete Pearl of Africa!"
              }
            }
          },
          {
            title: '3 Days Jinja Adventure Escape',
            slug: '3-days-jinja-adventure',
            price: '1200$',
            per: '1 person',
            category: 'Adventure & Active',
            durationDays: 3,
            wildlife: ['Shoebill', 'Primates', 'Birds'],
            description: "Experience the adrenaline capital of East Africa. From the thundering Grade 5 rapids of the Victoria Nile to the cultural serenity of Sezibwa Falls and the ancient canopy of Mabira Forest, this package is the ultimate adventure getaway.",
            destination: 'Jinja - The Adventure Capital',
            bestFor: 'Adrenaline junkies, youth groups, and adventure-seeking travelers.',
            highlights: ['Grade 5 White Water Rafting', 'Source of the Nile Boat Cruise', 'Sezibwa Falls Cultural Tour', 'Mabira Forest Canopy Walk'],
            image: `${import.meta.env.BASE_URL}images/rafting.jpg`,
            details: {
              duration: '3 Days',
              location: 'Jinja & Eastern Uganda',
              transport: 'Private 4x4 Safari Vehicle',
              accommodation: 'Nile Safari Lodge / Haven Lodge / Nile Bridge Cottages',
              routeCoordinates: [
                { name: 'Kampala/Entebbe', lat: 0.3476, lng: 32.5825, description: 'Starting Point' },
                { name: 'Sezibwa Falls', lat: 0.3833, lng: 32.8667, description: 'Cultural Heritage Site' },
                { name: 'Mabira Forest', lat: 0.3833, lng: 32.9833, description: 'Forest Walk & Zip-lining' },
                { name: 'Jinja (Source of Nile)', lat: 0.4244, lng: 33.1992, description: 'Adventure Capital' },
                { name: 'Bujagali (Rafting Base)', lat: 0.4833, lng: 33.1833, description: 'Rapid Central' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/pic23.jpg`,
                `${import.meta.env.BASE_URL}images/pic24.jpg`,
                `${import.meta.env.BASE_URL}images/pic1.jpg`,
                `${import.meta.env.BASE_URL}images/image5.jpeg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'KAMPALA/ENTEBBE – SEZIBWA FALLS – MABIRA FOREST – JINJA',
                  description: "Depart eastward on the Kampala–Jinja highway—a scenic 2–3 hour drive through sugarcane plantations and rural markets. First stop is Sezibwa Falls, a culturally significant waterfall where the name derives from 'sizibwa kkubo' (my way cannot be blocked). Explore sacred shrines and riverside trails. Continue to Mabira Forest, Uganda's largest natural forest in Central Uganda. Trek through shaded trails alive with grey-cheeked mangabeys and over 300 bird species. Optional: Experience Uganda's first zip-line canopy walkway through ancient trees. Arrive in Jinja for a late lunch and enjoy a sunset boat cruise to the exact spot where the Nile begins its 6,650 km journey. Watch for African fish eagles and egrets as the sun sets over Lake Victoria.",
                  meals: 'Lunch, Dinner',
                  stay: 'Nile Safari Lodge / Jinja Nile Resort (Luxury) / Haven Lodge (Mid-range) / Nile Bridge Cottages (Budget)'
                },
                {
                  day: 2,
                  title: 'WHITE WATER RAFTING – QUAD BIKING – BUNGEE JUMPING',
                  description: "Today is your full adrenaline day. After a safety briefing, embark on an unforgettable white water rafting experience on the Victoria Nile. Navigate through thundering Grade 4 and 5 rapids like 'The Bad Place', 'Itanda Falls', and 'Silverback'. The 31 km stretch offers world-class thrills. After lunch at base camp, choose your afternoon adventure: Quad Biking through local villages and farms, a 44-metre Bungee Jump over the Nile, Kayaking/Tubing through gentle rapids, or a high-speed Nile Jet Boat ride. Return to the lodge for a well-earned rest or a quiet sundowner cruise.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Nile Safari Lodge / Jinja Nile Resort (Luxury) / Haven Lodge (Mid-range) / Nile Bridge Cottages (Budget)'
                },
                {
                  day: 3,
                  title: 'JINJA TOWN TOUR – SOURCE OF THE NILE – RETURN TO KAMPALA/ENTEBBE',
                  description: "Enjoy a guided walk or cycle through Jinja town, exploring its colonial heritage and the Uganda Railway Museum. Visit the Mahatma Gandhi Monument at the point where his ashes were scattered into the Nile. Optional: Morning fishing excursion for Nile Perch and Tilapia on Lake Victoria, or a final relaxed boat cruise visiting nearby islands. After a riverside lunch, begin the return drive to Kampala or Entebbe, stopping at Busowoko Waterfalls for a final photograph. Arrive in the evening for drop-off at your hotel or the airport.",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              inclusions: [
                'Private safari vehicle with fuel for all transfers',
                'English-speaking professional driver/guide',
                'Full day White Water Rafting (Grade 4 & 5)',
                'Sunset boat cruise to the Source of the Nile',
                'Guided nature walk in Mabira Forest',
                'Guided walk at Sezibwa Falls cultural site',
                'Guided Jinja town tour',
                '2 nights lodge accommodation',
                'All meals as indicated',
                'Bottled drinking water in the vehicle'
              ],
              exclusions: [
                'International flights and Uganda entry visa',
                'Travel and medical insurance',
                'Optional activities: bungee jumping, quad biking, zip-lining',
                'Alcoholic and premium beverages',
                'Tips and gratuities',
                'Personal expenses'
              ],
              testimonial: {
                quote: "The rafting was insane! Navigating 'The Bad Place' was the thrill of a lifetime, and the sunset over the Source of the Nile was the perfect way to end the day.",
                author: "Tom & Adventure Group",
                platform: "TripAdvisor",
                headline: "Adrenaline Capital at its Best!"
              }
            }
          },
          {
            title: '2 Days Lake Mburo Getaway',
            slug: '2-days-lake-mburo-safari',
            price: '900$',
            per: '1 person',
            category: 'Wildlife Safaris',
            durationDays: 2,
            wildlife: ['Zebra', 'Impala', 'Hippo', 'Crocodile'],
            description: "Uganda's smallest savannah national park, yet it packs an extraordinary variety of wildlife into its acacia woodlands, open savannah, rocky outcrops, seasonal swamps and lakeshores. It is the only national park in Uganda where you can see impalas and Burchell's zebras.",
            destination: 'Lake Mburo National Park',
            bestFor: 'Short-stay travelers, weekend escapes, and nature walkers.',
            highlights: ['Equator photo stop', 'Boat cruise on Lake Mburo', 'Guided morning nature walk', 'Zebra & Impala sightings'],
            image: `${import.meta.env.BASE_URL}images/Mburo.webp`,
            details: {
              duration: '2 Days',
              location: 'Western Uganda',
              transport: '4x4 Safari Land Cruiser',
              accommodation: 'Mihingo Lodge / Rwakobo Rock / Eagle\'s Nest',
              routeCoordinates: [
                { name: 'Kampala/Entebbe', lat: 0.3476, lng: 32.5825, description: 'Starting Point' },
                { name: 'Mpambire Drum Village', lat: 0.2222, lng: 32.3222, description: 'Cultural Stop' },
                { name: 'Uganda Equator', lat: -0.0022, lng: 32.0622, description: 'Photo Stop' },
                { name: 'Nshara Gate (Mburo)', lat: -0.5891, lng: 30.8252, description: 'Park Entry' },
                { name: 'Lake Mburo Jetty', lat: -0.6120, lng: 30.9300, description: 'Boat Cruise' },
                { name: 'Salt Lick', lat: -0.6167, lng: 30.9167, description: 'Wildlife Viewing' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/pic12.jpg`,
                `${import.meta.env.BASE_URL}images/pic2.jpg`,
                `${import.meta.env.BASE_URL}images/pic17.jpg`,
                `${import.meta.env.BASE_URL}images/pic13.jpg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'KAMPALA/ENTEBBE – EQUATOR – MPAMBIRE DRUM VILLAGE – LAKE MBURO NATIONAL PARK',
                  description: "After an early breakfast, your driver/guide will pick you up from Kampala or Entebbe at 7:00–7:30 am for the approximately 3–4 hour drive westward to Lake Mburo National Park. The route takes you through the towns of Mpigi, Masaka, Lyantonde and Kiruhura, passing through Uganda's lush green countryside of banana plantations, rolling hills and small rural trading centres. Keep an eye out for the distinctive long-horned Ankole cattle grazing beside the road — a symbol of western Uganda's rich pastoral culture.\n\nEn route, stop at Mpambire Drum Makers' Village — a fascinating cultural stop where you can watch local artisans hand-craft traditional Ugandan drums from cowhide and select timber. The craft has been passed down through generations and the village supplies drums to the entire country, including to the royal courts of Uganda's kingdoms. Browse the workshop and pick up a handmade souvenir if you wish.\n\nContinue to the Uganda Equator monument at Kayabwe — the point where the road crosses the 0° latitude line. Stop for photographs, pick up souvenirs from the craft stalls and watch the fascinating water-flow experiment that demonstrates the Coriolis effect on either side of the Equator. A quick snack or refreshment break here before the final leg to the park.\n\nArrive at Lake Mburo National Park through Nshara Gate — and enjoy a game drive through the park en route to your lodge, as the tracks pass through prime wildlife territory. Lake Mburo is Uganda's smallest savannah national park, covering 370 km², yet it packs an extraordinary variety of wildlife into its acacia woodlands, open savannah, rocky outcrops, seasonal swamps and lakeshores. Check in to your lodge and enjoy a relaxed lunch.\n\nAfter lunch, head to the jetty for a 2-hour afternoon boat cruise on Lake Mburo — the largest of the park's five lakes. The boat follows the eastern and southern shores of the lake, bringing you close to large schools of hippos wallowing in the shallows and Nile crocodiles basking on the banks. The lakeshores are a birdwatcher's paradise — with over 315 recorded species, look out for African fish eagles, malachite kingfishers, African finfoot, grey crowned cranes, papyrus gonoleks, blue-headed coucals and a variety of herons and egrets. The boat cruise also offers beautiful views of the surrounding savannah hills and acacia canopy.\n\nReturn to shore and head out for a late afternoon game drive through the park's open grasslands and acacia woodland. This is an excellent time to spot zebras, impalas, topis, Defassa waterbucks, warthogs, Cape buffaloes, bushbucks and olive baboons. Lake Mburo is the only national park in Uganda where you can see impalas and Burchell's zebras, and also one of the best parks for seeing the giant eland — Africa's largest antelope species. With a little luck, you may also spot a leopard resting on an acacia branch in the evening light. Return to the lodge at dusk for dinner.\n\nOptional evening activity: Night game drive (additional cost) — a 2-hour guided drive after dark in search of nocturnal wildlife including leopards, hyenas, porcupines, genets, bushbabies and the occasional serval cat.",
                  meals: 'Lunch, Dinner',
                  stay: 'Mihingo Lodge (Luxury) / Rwakobo Rock (Mid-range) / Eagle\'s Nest (Budget)'
                },
                {
                  day: 2,
                  title: 'MORNING GAME WALK & GAME DRIVE – SALT LICK – RETURN TO KAMPALA/ENTEBBE',
                  description: "Rise early for a cup of coffee or tea before heading out at 6:45 am for a morning guided nature walk inside the park — one of the most distinctive features of Lake Mburo, as it is the only national park in Uganda where walking safaris are permitted within the park boundaries. Accompanied by an armed Uganda Wildlife Authority ranger, explore the park on foot through acacia woodland and open grassland, getting close to wildlife in a way that is simply not possible from a vehicle.\n\nThe early morning walk offers excellent opportunities to spot zebras, impalas, warthogs, topis and giant elands grazing as the nocturnal animals return to their dens. Birds are particularly active at this hour — listen for the call of the African fish eagle and watch for lilac-breasted rollers, red-faced barbet, Abyssinian ground hornbill and numerous sunbird species in the flowering acacias. The walk also takes you close to the lake, where you may spot hippos returning from their overnight grazing on the grasslands.\n\nReturn to the lodge for a full cooked breakfast and check-out. Before departing the park, stop at the salt lick — a natural mineral deposit near the lake where wildlife, particularly zebras, buffaloes and elands, gather to lick the salt-rich soil. This is a superb spot for close-up wildlife photography in a relaxed setting. Also stop at Rubanga Forest — a small but beautiful patch of tropical forest within the park that is excellent for forest birds and the occasional primate sighting.\n\nOptional morning activity: Horseback safari — a truly unique way to experience Lake Mburo, riding through the savannah alongside zebras and antelopes. Available for all levels, from beginners to experienced riders (additional cost).\n\nDepart Lake Mburo in the late morning and begin the return drive to Kampala or Entebbe International Airport. Stop at the Uganda Equator for a final photograph and lunch at a roadside restaurant en route. Continue through Masaka and Mpigi, arriving in Kampala or Entebbe by early evening. Drop-off at your hotel or the international airport for your onward flight.",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              inclusions: [
                'Private 4x4 safari vehicle with pop-up roof',
                'English-speaking professional driver/guide',
                'All park entry fees',
                '2-hour afternoon boat cruise',
                'Guided morning nature walk with armed UWA ranger',
                '1 night lodge accommodation',
                'All meals as indicated',
                'Bottled drinking water in the vehicle',
                'Equator and Mpambire Drum Village stops'
              ],
              exclusions: [
                'International flights and Uganda entry visa',
                'Travel and medical insurance',
                'Optional activities: horseback safari, night game drive',
                'Alcoholic and premium beverages',
                'Tips and gratuities',
                'Personal expenses'
              ],
              testimonial: {
                quote: "Lake Mburo is a hidden gem. The walking safari was a highlight—being on foot with zebras and impalas felt so authentic and peaceful.",
                author: "James & Sarah",
                platform: "TripAdvisor",
                headline: "A Perfect Weekend Escape!"
              }
            }
          },
          {
            title: '4 Days Sipi Falls & Mount Elgon Adventure',
            slug: '4-days-sipi-falls-elgon',
            price: '1480$',
            per: '1 person',
            category: 'Adventure & Active',
            durationDays: 4,
            wildlife: ['Colobus', 'Blue Monkey', 'Birds'],
            description: "Experience the misty heights of Eastern Uganda. From the three cascading waterfalls of Sipi to the ancient extinct caldera of Mount Elgon and the world-class Arabica coffee farms of Kapchorwa, this adventure is a hiker's paradise.",
            destination: 'Mount Elgon National Park - Kapchorwa',
            bestFor: 'Nature lovers, hiking enthusiasts, and coffee connoisseurs.',
            highlights: ['The Three Sipi Waterfalls Hike', 'Bugisu Arabica Coffee Tour', 'Mount Elgon National Park Hike', 'Sebei Cultural Experience'],
            image: `${import.meta.env.BASE_URL}images/sipii.webp`,
            details: {
              duration: '4 Days',
              location: 'Kapchorwa, Eastern Uganda',
              transport: 'Private 4x4 Safari Vehicle',
              accommodation: 'Sipi River Lodge / Lacam Lodge / Crow\'s Nest Camp',
              routeCoordinates: [
                { name: 'Kampala/Entebbe', lat: 0.3476, lng: 32.5825, description: 'Starting Point' },
                { name: 'Mabira Forest', lat: 0.3833, lng: 32.9833, description: 'Tropical Canopy Drive' },
                { name: 'Jinja (Nile Bridge)', lat: 0.4244, lng: 33.1992, description: 'Source of the Nile' },
                { name: 'Mbale City', lat: 1.0667, lng: 34.1833, description: 'Gateway to Elgon' },
                { name: 'Sipi Falls', lat: 1.3377, lng: 34.3781, description: 'Base for Exploration' },
                { name: 'Kapkwai Forest Centre', lat: 1.3400, lng: 34.3800, description: 'National Park Entry' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/sipii.webp`,
                `${import.meta.env.BASE_URL}images/sipifalls.jpg`,
                `${import.meta.env.BASE_URL}images/tea.webp`,
                `${import.meta.env.BASE_URL}images/image5.jpeg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'KAMPALA/ENTEBBE – MABIRA FOREST – JINJA – MBALE – SIPI FALLS',
                  description: "Depart from your hotel at 7:00 am for the 5–6 hour drive eastward. Travel through the lush Mabira Forest, keeping an eye out for grey-cheeked mangabeys and red-tailed monkeys. Cross the River Nile at Jinja and continue through the rice and sugarcane plantations of Iganga. Stop in Mbale, the gateway to Mount Elgon, for lunch. After lunch, climb steadily into the Kapchorwa highlands through terraced hillsides of Arabica coffee and banana plantations tended by the Sabiny people. Arrive at Sipi village in the late afternoon and enjoy an evening stroll to a nearby viewpoint for your first glimpse of the falls cascading down the mountain.",
                  meals: 'Lunch, Dinner',
                  stay: 'Sipi River Lodge (Luxury) / Lacam Lodge (Mid-range) / Crow\'s Nest Camp (Budget)'
                },
                {
                  day: 2,
                  title: 'SIPI FALLS FULL HIKE – COFFEE TOUR – SEBEI CULTURAL EXPERIENCE',
                  description: "Embark on the full Sipi Falls hike, visiting three distinct waterfalls: the Upper Falls (100m) with a hidden cave, the Middle Falls (85m) with its natural rock amphitheatre, and the spectacular Main Falls (75m). The hike takes 3–4 hours through community farms with views of Lake Kyoga. In the afternoon, enjoy a guided Arabica coffee tour—from bean to cup. Learn the process of picking, pulping, drying, and roasting the famous Bugisu AA coffee over an open fire. Conclude the day with a visit to the Sebei Cultural Centre to learn about the traditions and adulthood initiation ceremonies of the Sabiny people.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Sipi River Lodge (Luxury) / Lacam Lodge (Mid-range) / Crow\'s Nest Camp (Budget)'
                },
                {
                  day: 3,
                  title: 'MOUNT ELGON NATIONAL PARK – KAPKWAI FOREST EXPLORATION CENTER – MOUNTAIN HIKE',
                  description: "Transfer to Kapkwai (2,050m) and meet your UWA ranger guide. Mount Elgon is an ancient extinct shield volcano with the largest volcanic base in the world. Choose between the Chebonet Falls Loop (3 hours), the Bamboo Forest Loop (5 hours) through giant lobelias, or the challenging Tutum Cave Trail (9 hours) where elephants visit to lick mineral salts. All trails pass through regenerating forest zones alive with 300+ bird species, including the endangered lammergeier. Return to the lodge in the afternoon for rest or optional rock climbing.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Sipi River Lodge (Luxury) / Lacam Lodge (Mid-range) / Crow\'s Nest Camp (Budget)'
                },
                {
                  day: 4,
                  title: 'SUNRISE VIEWPOINT – KAPCHORWA TOWN TOUR – RETURN TO KAMPALA/ENTEBBE',
                  description: "Rise early for the best sunrise viewpoint above Sipi Falls as the first light hits the mist—one of the most photographed moments in Uganda. Visit Tewei Hilltop for 360-degree views of the valley. Optional: Stop at the ancient Nyero Rock Paintings in Kumi district (red ochre Stone Age art) en route to Kampala. Return through Mbale and Jinja, arriving in Kampala or Entebbe by early evening.",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              usefulInfo: {
                bestTime: "June–August and December–February for clear skies. March–May and October–November for fuller waterfalls.",
                distance: "Approximately 277 km (5–6 hours) from Kampala.",
                altitude: "Sipi: 1,775m; Kapkwai: 2,050m. Stay hydrated to manage mild altitude effects.",
                fitness: "Moderate. Most hikes are suitable for basic fitness, but Tutum Cave and Wagagai Peak require higher endurance.",
                aboutCoffee: "The Kapchorwa highlands (1,600–1,900m) produce Bugisu AA, some of the finest Arabica coffee in the world."
              },
              wildlifeHighlights: {
                mammals: "Black-and-white colobus, blue monkey, forest elephant (cave-visiting), buffalo, rock hyrax.",
                birds: "300+ species, including the endangered lammergeier (bearded vulture) and Hartlaub's turaco.",
                flora: "Giant lobelia, giant groundsel, Afro-alpine heath, and ancient mountain fig trees."
              },
              inclusions: [
                'Private 4x4 safari vehicle with fuel',
                'English-speaking professional driver/guide',
                'Local expert guide for Sipi Falls hike',
                'UWA ranger guide for Mount Elgon NP',
                'All Mount Elgon National Park entry fees',
                'Guided Arabica coffee tour with tasting',
                'Sebei cultural centre visit',
                '3 nights lodge accommodation',
                'All meals as indicated',
                'Packed lunch on mountain hike day',
                'Bottled drinking water in the vehicle'
              ],
              exclusions: [
                'International flights and Uganda entry visa',
                'Travel and medical insurance',
                'Optional activities: abseiling, rock climbing, mountain biking',
                'Porter fees (recommended USD 10-15 per day)',
                'Alcoholic and premium beverages',
                'Tips and gratuities',
                'Personal expenses'
              ],
              testimonial: {
                quote: "Hiking to the base of the main Sipi Falls was breathtaking. The mist, the sound, and the views across the Karamoja plains are something I'll never forget.",
                author: "Elena R.",
                platform: "TripAdvisor",
                headline: "Mountain Bliss in the Pearl!"
              }
            }
          },
          {
            title: '6 Days Rwenzori Mountains Trekking Experience',
            slug: '6-days-rwenzori-trekking',
            price: '2800$',
            per: '1 person',
            category: 'Adventure & Active',
            durationDays: 6,
            wildlife: ['Chimpanzee', 'Colobus', 'Duiker'],
            description: "Journey into the 'Mountains of the Moon' — a UNESCO World Heritage Site featuring snow-capped peaks, ancient glaciers, and extraordinary Afro-alpine vegetation found nowhere else on Earth.",
            destination: 'Rwenzori Mountains National Park - Western Uganda',
            bestFor: 'Serious hikers, adventure seekers, and nature photographers.',
            highlights: ['Central Circuit Trail Trekking', 'Giant Lobelia & Groundsel Zones', 'Lake Bujuku & Glacial Views', 'Bakonzo Cultural Experience'],
            image: `${import.meta.env.BASE_URL}images/Rwenzori.jpg`,
            details: {
              duration: '6 Days',
              location: 'Kasese, Western Uganda',
              transport: 'Private 4x4 & Professional Trekking Team',
              accommodation: 'Mountain Huts (Nyabitaba, John Matte, Bujuku, Kiharo)',
              routeCoordinates: [
                { name: 'Kampala/Entebbe', lat: 0.3476, lng: 32.5825, description: 'Starting Point' },
                { name: 'Kasese Town', lat: 0.1833, lng: 30.0833, description: 'Gateway to the Moon' },
                { name: 'Nyakalengija (1,646m)', lat: 0.3500, lng: 30.0333, description: 'Trailhead' },
                { name: 'Nyabitaba Hut (2,652m)', lat: 0.3667, lng: 29.9833, description: 'Night 1 on Mountain' },
                { name: 'John Matte Hut (3,414m)', lat: 0.3833, lng: 29.9333, description: 'Night 2 on Mountain' },
                { name: 'Bujuku Hut (3,962m)', lat: 0.3667, lng: 29.9000, description: 'Highest Point' },
                { name: 'Kiharo Hut (3,147m)', lat: 0.3333, lng: 29.9333, description: 'Night 4 on Mountain' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/Rwenzori.jpg`,
                `${import.meta.env.BASE_URL}images/image2.jpeg`,
                `${import.meta.env.BASE_URL}images/Rwenzori.jpg`,
                `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.06.18-1.jpeg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'KAMPALA/ENTEBBE – EQUATOR – MBARARA – KASESE – RWENZORI BASE',
                  description: "Depart from your hotel at 6:30–7:00 am for the 6–7 hour drive to Kasese. En route, stop at the Equator monument at Kayabwe for photographs and the Coriolis effect experiment. Continue through Mbarara, the heart of the Ankole cattle belt, for lunch. After lunch, proceed to the Rwenzori foothills where the snow-capped peaks begin to appear. Arrive in Kasese town, visit the local market, and transfer to your lodge for an evening briefing with your lead guide on equipment, mountain safety, and altitude awareness.",
                  meals: 'Lunch, Dinner',
                  stay: 'Ruboni Community Camp / Trekkers Hostel Kyanjuki / Sandton Hotel Kasese'
                },
                {
                  day: 2,
                  title: 'NYAKALENGIJA (1,646m) – NYABITABA HUT (2,652m) | TREK DAY 1',
                  description: "Elevation: 1,646m → 2,652m | Distance: 9 km | Hiking Time: 5–6 hours\n\nTransfer to the Nyakalengija trailhead. Meet your team: lead guide, assistant, cook, and Bakonzo porters. Enter the montane rainforest, climbing through dense vegetation draped in hanging mosses. Watch for L'Hoest's monkeys and listen for wild chimpanzees. Over 200 bird species are present, including the Rwenzori turaco. Arrive at Nyabitaba Hut, perched on a ridge above the Mubuku and Bujuku River valleys, offering spectacular views of the mountains.",
                  meals: 'Breakfast, Packed Lunch, Dinner',
                  stay: 'Nyabitaba Hut (2,652m)'
                },
                {
                  day: 3,
                  title: 'NYABITABA HUT (2,652m) – JOHN MATTE HUT (3,414m) | TREK DAY 2',
                  description: "Elevation: 2,652m → 3,414m | Distance: 10 km | Hiking Time: 6–7 hours\n\nDescend into the Bujuku River valley before a long climb through successive vegetation zones. Pass through the giant heather zone—ancient trees encrusted with silver-green moss—before entering the 'Lost World' of giant groundsels and lobelias. The trail crosses numerous boggy sections with boardwalks. Arrive at John Matte Hut (3,414m), situated above the cloud line with magnificent views back down the valley.",
                  meals: 'Breakfast, Packed Lunch, Dinner',
                  stay: 'John Matte Hut (3,414m)'
                },
                {
                  day: 4,
                  title: 'JOHN MATTE HUT (3,414m) – BUJUKU HUT (3,962m) | TREK DAY 3',
                  description: "Elevation: 3,414m → 3,962m | Distance: 7 km | Hiking Time: 5–6 hours\n\nCross the Bigo Bog, a vast alpine marsh criss-crossed by boardwalks and surrounded by giant lobelias. Climb steeply through heather moorland to Lake Bujuku, a glacial lake at nearly 4,000 metres. The lake is surrounded by the dramatic rock faces of Mount Stanley, Speke, and Baker. Bujuku Hut is the base for admiring the permanent glaciers. Look for rock hyrax and the rare Rwenzori red duiker in the afternoon.",
                  meals: 'Breakfast, Packed Lunch, Dinner',
                  stay: 'Bujuku Hut (3,962m)'
                },
                {
                  day: 5,
                  title: 'BUJUKU HUT (3,962m) – HUNWICK\'S CAMP / KIHARO HUT (3,147m) | TREK DAY 4',
                  description: "Elevation: 3,962m → 3,147m | Distance: 9 km | Hiking Time: 5–7 hours\n\nClimb initially through a lobelia swamp before ascending a rocky river bed to Hunwick's Pass. Enjoy extraordinary views of Kitandara Lake and the high peaks. Descend through towering heather trees and enormous moss-covered boulders into the Nyamwamba Valley. The route follows the river, passing spectacular mossy waterfalls. Arrive at Kiharo Camp in the early afternoon.",
                  meals: 'Breakfast, Packed Lunch, Dinner',
                  stay: 'Kiharo Hut (3,147m)'
                },
                {
                  day: 6,
                  title: 'KIHARO HUT (3,147m) – NYAKALENGIJA (1,646m) – KASESE – KAMPALA/ENTEBBE',
                  description: "Elevation: 3,147m → 1,646m | Distance: 14.6 km | Hiking Time: 6–7 hours descent\n\nA satisfy descent through the full length of the Nyamwamba Valley, dropping 1,710 metres. Pass Lake Mahoma and re-enter the lush montane rainforest. Upon arrival at Nyakalengija, enjoy a traditional Bakonzo farewell song—a moving way to mark the end of the trek. Transfer to Kasese for a hot shower and lunch before the drive back to Kampala, arriving in the late evening.",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              usefulInfo: {
                bestTime: "January–March and June–October (dry seasons). June–August offers the clearest summit views.",
                fitness: "High. This is a demanding trek involving steep, muddy terrain and altitudes above 3,000m. Prior experience is recommended.",
                altitude: "Bujuku Hut (3,962m) is the highest camp. Acclimatisation is key; mild altitude sickness is common.",
                tipping: "Lead guide USD 40–60; Assistant USD 25–35; Cook USD 20–30; Porter USD 15–20 total per client.",
                aboutRange: "UNESCO site containing six massifs, including Mount Stanley (5,109m), the 3rd highest point in Africa."
              },
              wildlifeHighlights: {
                mammals: "Rwenzori red duiker, L'Hoest's monkey, chimpanzee (distant calls), rock hyrax, Rwenzori leopard (elusive).",
                birds: "Rwenzori turaco, handsome francolin, strange weaver, and the African green broadbill.",
                flora: "Giant lobelia (wollastonii), giant groundsel (Senecio johnstonii), and ancient Erica arborea trees."
              },
              inclusions: [
                'Private 4x4 road transfers (Days 1 & 6)',
                'English-speaking driver/guide for road transfers',
                'UWA-certified lead and assistant guides',
                'Dedicated mountain cook',
                'Porters (1 per 2 guests, up to 18kg group gear)',
                'All Rwenzori National Park entry fees & permits',
                'All mountain hut accommodation',
                'All meals from Day 2 breakfast to Day 6 lunch',
                'Rwenzori trekking completion certificate',
                'Bottled water for road transfers'
              ],
              exclusions: [
                'International flights and Uganda visa',
                'Travel and medical insurance (strongly recommended)',
                'Gear rental: gaiters, poles, sleeping bag (USD 5-15/item)',
                'Personal porter for individual luggage',
                'Tips for guides, porters and cook',
                'Personal expenses'
              ],
              testimonial: {
                quote: "The 'Mountains of the Moon' are surreal. Trekking through the giant groundsels felt like being on another planet. A brutal but rewarding climb.",
                author: "Mark W.",
                platform: "TripAdvisor",
                headline: "A True Wilderness Legend!"
              }
            }
          },
          {
            title: '3 Days Kidepo Wilderness Safari',
            slug: '3-days-kidepo-wilderness',
            price: '1780$',
            per: '1 person',
            category: 'Wildlife Safaris',
            durationDays: 3,
            wildlife: ['Lion', 'Cheetah', 'Elephant', 'Ostrich', 'Giraffe'],
            description: "Journey to Africa's most unspoilt wilderness. Kidepo Valley National Park is a vast, semi-arid savannah landscape of open plains, rocky outcrops, and ancient mountains, home to Uganda's highest predator density and wildlife found nowhere else in the country.",
            destination: 'Kidepo Valley National Park - Northeastern Uganda',
            bestFor: 'Exclusive safari lovers, photographers, and those seeking raw, untouched nature.',
            highlights: ['Narus Valley Game Drives', 'Karamojong Manyatta Cultural Visit', 'Kanangorok Hot Springs', 'Cheetah & Ostrich Sightings'],
            image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.05.20.jpeg`,
            details: {
              duration: '3 Days',
              location: 'Kaabong, Northeastern Uganda',
              transport: 'Domestic Flight (Aero Link) & Private 4x4 Safari Vehicle',
              accommodation: 'Apoka Safari Lodge / Nga\'Moru Wilderness Camp / Adere Safari Lodge',
              routeCoordinates: [
                { name: 'Entebbe Airport', lat: 0.0424, lng: 32.4435, description: 'Domestic Flight Start' },
                { name: 'Apoka Airstrip', lat: 3.7333, lng: 33.7167, description: 'Wilderness Arrival' },
                { name: 'Narus Valley', lat: 3.7000, lng: 33.7000, description: 'Wildlife Concentration' },
                { name: 'Kanangorok Hot Springs', lat: 4.1167, lng: 33.8833, description: 'South Sudan Border' },
                { name: 'Kidepo Valley', lat: 3.8500, lng: 33.8000, description: 'Remote Savannah' },
                { name: 'Morungole Mountains', lat: 3.8167, lng: 34.0500, description: 'IK Community Territory' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/pic8.jpg`,
                `${import.meta.env.BASE_URL}images/pic2.jpg`,
                `${import.meta.env.BASE_URL}images/pic15.jpg`,
                `${import.meta.env.BASE_URL}images/pic18.jpg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'ENTEBBE/KAMPALA – FLY TO APOKA – NARUS VALLEY EVENING GAME DRIVE',
                  description: "Transfer to Entebbe for a 2-hour flight to Apoka Airstrip, offering aerial views of the Kyoga basin and the semi-arid plains of northern Uganda. Upon landing, meet your guide and transfer to your lodge. Kidepo Valley National Park covers 1,442 km² of raw, semi-arid wilderness framed by the Morungole and Lomej Mountains. In the late afternoon, enjoy a game drive through the Narus Valley—a permanent water source where wildlife concentrates in extraordinary numbers. Spot large elephant herds, Cape buffaloes, giraffes, zebras, and elands. Kidepo is Uganda's premier park for predator sightings—scan the rocky outcrops for lions and the open plains for the rare cheetah, spotted hyena, and black-backed jackal.",
                  meals: 'Lunch, Dinner',
                  stay: 'Apoka Safari Lodge (Luxury) / Nga\'Moru Wilderness Camp (Mid-range) / Adere Safari Lodge / Apoka Rest Camp (Budget)'
                },
                {
                  day: 2,
                  title: 'FULL DAY KIDEPO & NARUS VALLEY GAME DRIVES – KARAMOJONG CULTURAL VISIT – KANANOROK HOT SPRINGS',
                  description: "Rise before dawn for a pre-breakfast game drive, the best time for predator activity. Explore the Narus Valley, home to resident lion prides often resting in sausage trees, and the remote Kidepo Valley, the best area for ostriches, caracals, and striped hyenas. Drive to the Kanangorok Hot Springs on the South Sudan border, where geothermal waters bubble up in the middle of the sun-baked savannah. In the late afternoon, visit a traditional Karamojong manyatta (community homestead). Learn about their cattle-centric culture, beadwork jewellery, and warrior traditions. This authentic cultural encounter directly benefits the local families involved.",
                  meals: 'Brunch, Lunch, Dinner',
                  stay: 'Apoka Safari Lodge (Luxury) / Nga\'Moru Wilderness Camp (Mid-range) / Adere Safari Lodge / Apoka Rest Camp (Budget)'
                },
                {
                  day: 3,
                  title: 'DAWN GAME DRIVE – LOMEJ MOUNTAIN WALK / NARUS VALLEY WALK – FLY BACK TO ENTEBBE',
                  description: "One final dawn game drive to photograph lion prides returning from their hunt and cheetahs on the move. After a full breakfast, choose between a 3-hour guided hike in the Lomej Mountains for panoramic views of South Sudan, or a 2-hour guided nature walk along the Narus Valley floor with an armed ranger. Experience the profound silence of Africa's most untouched wilderness on foot. Transfer to Apoka Airstrip for the 3:00 pm flight back to Entebbe, taking in final aerial views of the rugged mountain landscapes.",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              usefulInfo: {
                bestTime: "June–September and December–February (dry seasons). Shorter grass makes wildlife easier to spot.",
                flightInfo: "Scheduled flights operate Wednesdays, Fridays, and Sundays. 2 hours each way.",
                location: "Northeastern Uganda, bordering South Sudan and Kenya. Uganda's most remote park.",
                whySpecial: "Consistently ranked among Africa's finest parks by CNN Travel. Extremely low visitor numbers ensure an exclusive wilderness experience.",
                whatToPack: "Neutral-coloured clothing, warm jacket for dawn drives, binoculars, telephoto lens, and dust bag for electronics."
              },
              wildlifeHighlights: {
                predators: "Highest lion density in Uganda, leopard, cheetah (exclusive to Kidepo), caracal, serval, wild dog, striped hyena.",
                mammals: "Large buffalo herds, elephant, Rothschild's giraffe, zebra, greater eland, oribi, Gunther's dikdik.",
                birds: "475+ species, including Ostrich (only in Kidepo), Karamoja apalis, and Abyssinian ground hornbill."
              },
              inclusions: [
                'Private 4x4 safari vehicle with fuel',
                'English-speaking professional driver/guide',
                'All Kidepo Valley National Park entry fees',
                'All game drives (Narus, Kidepo, Hot Springs)',
                'Guided morning nature walk',
                'Karamojong manyatta cultural visit',
                'Kanangorok Hot Springs visit',
                '2 nights full-board accommodation',
                'All meals as indicated',
                'Bottled drinking water in the vehicle',
                'Airport transfers in Entebbe/Kampala'
              ],
              exclusions: [
                'Domestic flights (Aero Link - approx USD 280-350)',
                'International flights and Uganda entry visa',
                'Travel and medical insurance',
                'Optional IK tribe Morungole hike',
                'Alcoholic and premium beverages',
                'Tips and gratuities',
                'Personal expenses'
              ],
              testimonial: {
                quote: "Most authentic wilderness in Africa. Kidepo is a hidden gem. Seeing the cheetahs and the vast Narus Valley was a dream come true.",
                author: "Sven H.",
                platform: "TripAdvisor",
                headline: "Pure, Untamed Wilderness!"
              }
            }
          },
          {
            title: '5 Days Uganda Cultural Heritage Safari',
            slug: '5-days-cultural-heritage',
            price: '1850$',
            per: '1 person',
            category: 'Cultural & Heritage',
            durationDays: 5,
            wildlife: ['Ankole Cattle'],
            description: "50+ Tribes, 5 Ancient Kingdoms, 1 Extraordinary Journey. Experience the soul of the Pearl of Africa through its royal palaces, sacred tombs, ancient legends, and the legendary long-horned cattle of the Ankole heartland.",
            destination: 'Buganda, Bunyoro, Toro & Ankole Kingdoms',
            bestFor: 'Culture enthusiasts, history buffs, and travelers seeking deep local engagement.',
            highlights: ['Kasubi Tombs (UNESCO)', 'Sacred Nakayima Tree', 'Tooro Royal Palace', 'Ankole Cattle Milking Ceremony'],
            image: `${import.meta.env.BASE_URL}images/batwa.jpg`,
            details: {
              duration: '5 Days',
              location: 'Central & Western Uganda',
              transport: 'Private 4x4 Safari Vehicle',
              accommodation: 'Kampala Serena / Hoima Tourism Hotel / Nshenyi Cultural Village',
              routeCoordinates: [
                { name: 'Kampala (Buganda Kingdom)', lat: 0.3476, lng: 32.5825, description: 'Royal Capital' },
                { name: 'Nakayima Tree (Mubende)', lat: 0.5633, lng: 31.3897, description: 'Ancient Sacred Site' },
                { name: 'Hoima (Bunyoro Palace)', lat: 1.4333, lng: 31.3500, description: 'Kingdom of Resistance' },
                { name: 'Fort Portal (Tooro Palace)', lat: 0.6931, lng: 30.2762, description: 'City of Mountains' },
                { name: 'Nshenyi Cultural Village', lat: -0.8500, lng: 30.2500, description: 'Ankole Heartland' },
                { name: 'Igongo Cultural Centre', lat: -0.5833, lng: 30.6500, description: 'Cultural Museum' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/batwa.jpg`,
                `${import.meta.env.BASE_URL}images/pic17.jpg`,
                `${import.meta.env.BASE_URL}images/pic21.jpg`,
                `${import.meta.env.BASE_URL}images/pic1.jpg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'KAMPALA CITY CULTURAL TOUR – KASUBI TOMBS – NDERE CENTRE EVENING SHOW',
                  description: "Start in Kampala, the seat of the Buganda Kingdom. Visit the Uganda Museum, the oldest in East Africa, then continue to the Kabaka's Palace (Lubiri) and the man-made Kabaka's Lake. Explore the Kasubi Tombs (UNESCO World Heritage Site), the spiritually significant burial grounds of four kings. Visit the Namugongo Martyrs Shrine, a moving chapter in East African history. In the afternoon, watch artisans at the Mpambire Drum Makers' Village. Finish the day with an energetic performance at the Ndere Cultural Centre, showcasing dances from all over Uganda.",
                  meals: 'Lunch, Dinner',
                  stay: 'Kampala Serena Hotel (Luxury) / Hotel Africana / Protea Hotel (Mid-range) / Boma Hotel / Cassia Lodge (Budget)'
                },
                {
                  day: 2,
                  title: 'NAKAYIMA TREE – WAMALA TOMBS – BUNYORO-KITARA KINGDOM – HOIMA ROYAL PALACE',
                  description: "Drive westward to the Nakayima Tree in Mubende, a 400-year-old fig tree and sacred shrine. Visit the Wamala Tombs, the burial site of Kabaka Suuna II. Proceed to Hoima, the seat of the ancient Bunyoro-Kitara Kingdom. Visit the Hoima Royal Palace and the Mparo Royal Tombs, burial ground of the celebrated warrior King Kabalega. Learn about the kingdom's history of resistance and the sacred Empango coronation festival.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Hoima Tourism Hotel / Bunyoro Cultural Resort (Mid-range) / Budget guesthouse Hoima town'
                },
                {
                  day: 3,
                  title: 'TORO KINGDOM – FORT PORTAL – AMABERE CAVES – CRATER LAKES – TOORO ROYAL PALACE',
                  description: "Travel to Fort Portal, the seat of the Toro Kingdom. Visit the Amabere Ga Nyinamwiru Caves, steeped in royal legend, and walk among the beautiful Fort Portal Crater Lakes. In the afternoon, visit the Karuziika Royal Palace, the official residence of the Omukama of Toro—King Oyo, once the world's youngest reigning king. Conclude with a visit to the Karambi Royal Tombs, set on a hilltop with panoramic views of the Rwenzori foothills.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Kyaninga Lodge (Luxury) / Mountains of the Moon Hotel (Mid-range) / Rwenzori View Guesthouse (Budget)'
                },
                {
                  day: 4,
                  title: 'BIGODI WETLAND COMMUNITY – KIBALE CULTURAL TRAIL – NSHENYI CULTURAL VILLAGE – ANKOLE',
                  description: "Explore the Bigodi Community Cultural Trail, meeting local weavers, traditional healers, and visiting the village school. After lunch, drive into the Ankole heartland, the cattle country of western Uganda. Witness the iconic long-horned Ankole cattle, a symbol of wealth and status. Arrive at Nshenyi Cultural Village, a living museum and working farm. Enjoy a welcome ceremony and a traditional Banyankole dinner including eshabwe (ghee sauce) around the campfire.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Nshenyi Cultural Village (Cultural Homestay) / Igongo Country Hotel (Mid-range) / Budget guesthouses Ntungamo'
                },
                {
                  day: 5,
                  title: 'ANKOLE CATTLE FARM – IGONGO CULTURAL CENTRE – EQUATOR – RETURN TO KAMPALA',
                  description: "Experience the dawn walk with the herdsmen as they lead the magnificent Ankole cattle to pasture. Participate in the traditional milking ceremony and taste fresh milk directly from the cow. Visit the Igongo Cultural Centre in Mbarara, home to the Ekitangaala Museum which documents the transformation of the Ankole Kingdom. Enjoy an authentic Ankole lunch before driving back to Kampala, with a final stop at the Uganda Equator monument.",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              usefulInfo: {
                bestTime: "Accessible year-round. Coincide with ceremonies: Kabaka Day (July), Empango Bunyoro (June), Empango Toro (September).",
                etiquette: "Dress modestly (shoulders/knees covered) at royal sites. Ask permission before photographing sacred objects.",
                aboutKingdoms: "Uganda has 5 recognised kingdoms: Buganda, Bunyoro-Kitara, Toro, Ankole, and Busoga—restored in 1993 as cultural institutions.",
                packing: "Smart-casual clothing, modest outfit for palace visits, comfortable walking shoes, and a notebook for reflections.",
                diversity: "Home to 50+ ethnic groups and 40+ languages, making Uganda one of Africa's most culturally rich destinations."
              },
              kingdomsEncountered: [
                'Buganda Kingdom (Central)',
                'Bunyoro-Kitara Kingdom (Western)',
                'Toro Kingdom (Western)',
                'Ankole Kingdom (Southwestern)',
                'Batooro & Bakiga Communities (Kibale)'
              ],
              inclusions: [
                'Private 4x4 safari vehicle & fuel',
                'English-speaking professional cultural guide',
                'All cultural site and museum entry fees',
                'Ndere Cultural Centre evening performance',
                'Nshenyi Cultural Village homestay experience',
                'Ankole cattle dawn walk & milking ceremony',
                'All meals and accommodation as per itinerary',
                'Bottled drinking water in the vehicle'
              ],
              exclusions: [
                'International flights and Uganda visa',
                'Travel and medical insurance',
                'Alcoholic and premium beverages',
                'Personal craft/souvenir purchases',
                'Tips and gratuities',
                'Personal expenses'
              ],
              testimonial: {
                quote: "This was more than a safari; it was a journey into the heart of Africa. The Ankole cattle at dawn was one of the most beautiful things I've ever seen.",
                author: "Sarah L.",
                platform: "TripAdvisor",
                headline: "The Soul of the Pearl!"
              }
            }
          },
          {
            title: '3 Days Semuliki & Hot Springs Safari',
            slug: '3-days-semuliki-safari',
            price: '1450$',
            per: '1 person',
            category: 'Wildlife Safaris',
            durationDays: 3,
            wildlife: ['Chimpanzee', 'Hippo', 'Crocodile', 'Birds'],
            description: "Where Central Africa Meets East Africa. Semuliki National Park is Uganda's most extraordinary lowland rainforest, featuring the powerful Sempaya Hot Springs, authentic Batwa culture, and rare wildlife species from the Congo Basin.",
            destination: 'Semuliki National Park - Western Uganda',
            bestFor: 'Nature lovers, birders, geology enthusiasts, and cultural travelers.',
            highlights: ['Sempaya Hot Springs (Biteete & Nyasimbi)', 'Batwa Pygmy Cultural Encounter', 'Lake Albert Boat Cruise', 'Rare Guinea-Congo Bird Species'],
            image: `${import.meta.env.BASE_URL}images/Sempaya.jpeg`,
            details: {
              duration: '3 Days',
              location: 'Bundibugyo, Western Uganda',
              transport: 'Private 4x4 Safari Vehicle',
              accommodation: 'Semliki Safari Lodge / Ntoroko Game Lodge / Bumaga Cottage',
              routeCoordinates: [
                { name: 'Kampala/Entebbe', lat: 0.3476, lng: 32.5825, description: 'Starting Point' },
                { name: 'Mubende', lat: 0.5633, lng: 31.3897, description: 'Scenic Route Stop' },
                { name: 'Fort Portal', lat: 0.6931, lng: 30.2762, description: 'City of Mountains' },
                { name: 'Rwenzori Escarpment', lat: 0.7500, lng: 30.1000, description: 'Panoramic Views' },
                { name: 'Sempaya Hot Springs', lat: 0.8333, lng: 30.1500, description: 'Geothermal Activity' },
                { name: 'Ntoroko (Lake Albert)', lat: 1.0500, lng: 30.4000, description: 'Boat Cruise Location' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/Sempaya.jpeg`,
                `${import.meta.env.BASE_URL}images/pic20.jpg`,
                `${import.meta.env.BASE_URL}images/pic17.jpg`,
                `${import.meta.env.BASE_URL}images/pic1.jpg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'KAMPALA – FORT PORTAL – RWENZORI ESCARPMENT – SEMULIKI NATIONAL PARK',
                  description: "Depart from your hotel in Kampala at 7:00 am for the approximately 5–6 hour drive westward to Semuliki National Park via Fort Portal. The road follows the Kampala–Mubende–Fort Portal highway—the shorter and more scenic of the two western routes—passing through rolling hills, tea estates, and the rising foothills of the Rwenzori Mountains. Stop in Fort Portal for lunch with views of the peaks on clear days.\n\nAfter lunch, descend dramatically off the Rwenzori escarpment toward Bundibugyo—one of the most breathtaking drives in Uganda. The road drops nearly 1,000 metres in elevation with sweeping panoramic views of the Semliki Valley and the distant blue hills of the DRC. Thatch huts shaded by West African oil palms begin to appear as you enter a landscape belonging to Central Africa. Arrive at Semuliki National Park, the easternmost extension of the great Ituri Forest of the Congo Basin. In the late afternoon, enjoy a game drive through the open savannah on the fringes of the park, spotting forest buffaloes, Uganda kobs, and elephants. The Semliki River boundary is home to large pods of hippos and massive Nile crocodiles.",
                  meals: 'Lunch, Dinner',
                  stay: 'Semliki Safari Lodge (Luxury) / Ntoroko Game Lodge (Mid-range) / Bumaga Cottage (Budget)'
                },
                {
                  day: 2,
                  title: 'SEMPAYA HOT SPRINGS – FOREST NATURE WALK – BATWA CULTURAL VILLAGE – LAKE ALBERT BOAT CRUISE',
                  description: "After an early breakfast, set out for the Sempaya Hot Springs. The nature trail winds through lowland rainforest where you may see red-tailed monkeys and black-and-white colobus. Semuliki holds 441 bird species, including 46 Guinea-Congo biome species found nowhere else in East Africa. Visit Nyasimbi (The Female Spring), a broad steaming pool where local Bamaga women offer prayers, and Biteete (The Male Spring), a powerful geyser shooting boiling water (103°C) up to 2 metres high.\n\nAfter lunch, visit the Batwa cultural village at Ntandi. The Batwa (Pygmy) people share their heritage through traditional music, dance, and knowledge of forest medicines. Late afternoon, enjoy a boat cruise on Lake Albert. The boat follows the palm-fringed shoreline, offering sightings of hippos, crocodiles, and potentially the rare shoebill stork. The sunset over Lake Albert with the Congolese hills in the background is a highlight of the journey.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Semliki Safari Lodge (Luxury) / Ntoroko Game Lodge (Mid-range) / Bumaga Cottage (Budget)'
                },
                {
                  day: 3,
                  title: 'KIRUMIA RIVER TRAIL / CHIMPANZEE TRACKING – RETURN TO FORT PORTAL – KAMPALA',
                  description: "Choose your morning activity:\n\nOption A—Kirumia River Trail: An 11 km walk along the river through the heart of the rainforest. Best for birders and spotting the rare DeBrazza's monkey, Congo serpent eagle, and black dwarf hornbill.\n\nOption B—Chimpanzee Tracking: Join a UWA ranger to track habituated chimpanzee communities in the lowland forest, accompanied by nine other primate species. The chimp permit must be booked in advance (USD 50).\n\nAfter the morning activity, begin the return drive. Stop at the escarpment viewpoint for one final panoramic view of the Semliki Valley before lunch in Fort Portal and the drive back to Kampala, arriving in the evening.",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              usefulInfo: {
                bestTime: "June–August and December–February (dry seasons). Wet seasons (March–May, October–November) are lush but trails can be muddy.",
                distance: "Approximately 300 km (5–6 hours) from Kampala via Fort Portal.",
                packing: "Lightweight long-sleeved shirts, waterproof jacket, sturdy walking shoes, insect repellent (mosquitoes), binoculars.",
                health: "Yellow fever vaccination required. Malaria prophylaxis is strongly recommended due to the lowland rainforest environment.",
                aboutSprings: "The Sempaya geysers reach 103°C—above normal boiling point—due to geothermal pressure from the Albertine Rift floor."
              },
              wildlifeHighlights: {
                mammals: "Chimpanzee, DeBrazza's monkey, forest elephant, forest buffalo, hippo, leopard, water chevrotain.",
                birds: "441 species (40% of Uganda's total), including Nkulengu rail, piping hornbill, and grey parrot.",
                other: "374 butterfly species, including forest swallowtails; African pygmy squirrel."
              },
              inclusions: [
                'Private 4x4 safari vehicle with fuel',
                'English-speaking professional driver/guide',
                'UWA ranger guide for all park activities',
                'All Semuliki National Park entry fees',
                'Guided Sempaya Hot Springs nature walk',
                'Mungilo Waterfall visit',
                'Batwa cultural village experience at Ntandi',
                'Afternoon boat cruise on Lake Albert',
                '2 nights lodge accommodation',
                'All meals as indicated',
                'Bottled drinking water in the vehicle'
              ],
              exclusions: [
                'International flights and Uganda entry visa',
                'Travel and medical insurance',
                'Chimpanzee trekking permit (USD 50 per person)',
                'Night game drive (optional extra)',
                'Alcoholic and premium beverages',
                'Tips and gratuities',
                'Personal expenses'
              ],
              testimonial: {
                quote: "The hot springs were like something from another planet. Cooking eggs in Biteete geyser was unforgettable, and the Batwa dance was incredibly moving.",
                author: "Rosa F.",
                platform: "TripAdvisor",
                headline: "A True Central African Adventure!"
              }
            }
          },
          {
            title: '3 Days Mount Moroto Adventure',
            slug: '3-days-moroto-adventure',
            price: '1920$',
            per: '1 person',
            category: 'Adventure & Active',
            durationDays: 3,
            wildlife: ['Rock Hyrax', 'Baboon', 'Birds'],
            description: "Uganda's Most Remote & Untouched Mountain Frontier. Rising 3,083m above sea level, Mount Moroto dominates the Karamoja plains, offering a rugged trekking experience and deep cultural engagement with the ancient Tepeth people.",
            destination: 'Karamoja Region - Northeastern Uganda',
            bestFor: 'Rugged hikers, cultural enthusiasts, and off-the-beaten-path travelers.',
            highlights: ['Imagit Peak Summit (2,950m+)', 'Wild Camping on the Ridge', 'Tepeth Community Engagement', 'Panoramic Karamoja Views'],
            image: `${import.meta.env.BASE_URL}images/moroto1.jpg`,
            details: {
              duration: '3 Days',
              location: 'Moroto, Northeastern Uganda',
              transport: 'Private 4x4 Safari Vehicle & Hiking',
              accommodation: 'Karamoja Safari Camp & Wild Ridge Camping',
              routeCoordinates: [
                { name: 'Kampala/Mbale', lat: 0.3476, lng: 32.5825, description: 'Starting Point' },
                { name: 'Soroti', lat: 1.7167, lng: 33.6167, description: 'Gateway to the North' },
                { name: 'Moroto Town', lat: 2.5317, lng: 34.6617, description: 'Base Camp' },
                { name: 'Kodonyo Trailhead', lat: 2.5400, lng: 34.7000, description: 'Trek Start' },
                { name: 'Imagit Ridge Camp', lat: 2.5500, lng: 34.7500, description: 'Wild Camping' },
                { name: 'Imagit Peak', lat: 2.5583, lng: 34.7583, description: 'Summit Viewpoint' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/moroto1.jpg`,
                `${import.meta.env.BASE_URL}images/pic22.jpg`,
                `${import.meta.env.BASE_URL}images/pic17.jpg`,
                `${import.meta.env.BASE_URL}images/pic18.jpg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'KAMPALA/MBALE – SOROTI – MOROTO TOWN – MOUNTAIN BASE CAMP ORIENTATION',
                  description: "Depart from Kampala or Mbale in the early morning for the long but scenic drive northeastward to Moroto town — the capital of the Karamoja region and the gateway to Mount Moroto. The drive from Kampala takes approximately 9–11 hours; from Mbale approximately 5–6 hours via Soroti and Katakwi. An alternative for those with tight schedules is a chartered flight to Moroto Airstrip, which takes approximately 1.5 hours from Entebbe.\n\nThe drive itself is part of the adventure. As you leave behind the lush green farmlands of eastern Uganda and pass through Soroti — the gateway to the north — the landscape begins to transform dramatically. Red laterite soils replace the dark loam, sorghum and millet fields replace banana plantations, and the vegetation thins into open acacia-dotted savannah. Cattle herders in traditional Karamojong dress — ochre-stained shukas, elaborate bead necklaces and wooden walking sticks — drive their long-horned cattle along the roadside. This is one of Uganda's most culturally distinct and visually striking landscapes, and the drive sets the tone perfectly for the adventure ahead.\n\nContinue through Katakwi and Napak, passing the dramatic inselberg of Mount Napak rising from the plains, before arriving in Moroto town. The great bulk of Mount Moroto — 3,083 metres of ancient volcanic rock rising sheer from the semi-arid Karamoja plains — dominates the skyline to the east of the town. Check in to your accommodation in Moroto and enjoy a warm meal.\n\nLate afternoon: guided orientation walk around Moroto town with your local guide. Visit Moroto market — one of the most colourful and authentic markets in Uganda — where Karamojong and Tepeth traders sell beaded jewellery, gourds, traditional tools, sorghum beer and dried meats. Your guide will help you interact with community members and begin to understand the social structure, traditions and day-to-day life of the Karamojong people — one of East Africa's last remaining semi-nomadic pastoralist cultures. Purchase any final food supplies and fill water containers for the mountain. Briefing with your mountain guide on the route, safety and what to expect on the climb.",
                  meals: 'Lunch, Dinner',
                  stay: 'Karamoja Safari Camp / Kara-Tunga Guesthouse / Moroto Hotels (Budget)'
                },
                {
                  day: 2,
                  title: 'KODONYO TRAILHEAD – NADUKON VALLEY ASCENT – IMAGIT PEAK RIDGE CAMP (WILD CAMPING)',
                  description: "Elevation: ~1,200m (trailhead) → ~2,700m (ridge camp) | Distance: 10–12 km | Hiking Time: 5–7 hours\n\nRise early for breakfast and final preparations before transferring approximately 12 km by vehicle from Moroto town to the Kodonyo trailhead — the starting point for the ascent of Mount Moroto via the Nadukon Valley route. Meet your local Tepeth guide and porters at the trailhead. A short community introduction is made here — the trailhead sits near a Tepeth settlement and it is customary to greet the elders before entering the mountain.\n\nThe trail begins at the base of the mountain through classic Karamoja arid thorn savannah — flat-topped acacia trees, euphorbia candelabra cacti and dry red soil. The first section is a gradual ascent up the Nadukon Valley, following a rocky seasonal river bed flanked by increasingly dense vegetation. The temperature at the base can reach 35°C by mid-morning, so an early start is essential. Carry a minimum of 3 litres of water per person — there are natural springs on the mountain slopes but water should always be purified.\n\nAs you gain altitude, the dry savannah gradually gives way to dry montane woodland — a zone of denser trees, flowering shrubs and shade that provides welcome relief from the heat below. This is the habitat of the mountain's remarkable birdlife: over 220 species have been recorded on and around Mount Moroto, including the rare Doherty's bushshrike, Karamoja apalis (endemic to this region), Jackson's hornbill, Abyssinian roller, Heuglin's francolin and several species of sunbird and weaver. Look out also for vervet monkeys, rock hyrax, baboons and — if you are very fortunate — the elusive golden cat in the upper forest zones.\n\nThe upper section of the trail involves a fairly steep and at times rocky scramble — some sections require the use of hands on the steeper rock faces (no technical equipment required). The terrain becomes increasingly dramatic as you approach the main ridge line, with views expanding steadily behind you across the vast Karamoja plains stretching all the way to the horizon. On a clear day you can see far into neighbouring Kenya.\n\nEn route, pass through one or more Tepeth settlements on the mountain slopes. The Tepeth (also known as the So people) are the original and ancient inhabitants of the Mount Moroto massif — a small and little-known ethnic group who retreated to the mountain centuries ago as the Karamojong pastoralists expanded across the plains below. They live in traditional stone-and-grass homesteads, practice subsistence farming on the mountain slopes using natural spring water for irrigation, and are renowned for their deep knowledge of medicinal plants and oral history. Your Tepeth guide will facilitate introductions and help you understand the community's way of life, beliefs and their special relationship with the mountain they call home.\n\nReach the ridge camp below Imagit Peak in the late afternoon — a broad flat area on the ridge with ample space for tents and extraordinary 360-degree panoramic views: the Karamoja plains spread below to the west, the higher peaks of Sokodek (3,083m) and Sogolomon visible to the north, and the hills of Kenya to the east. Set up camp as the sun begins to descend toward the horizon. Your cook will prepare a warm meal over a camp fire as the stars begin to appear — at this altitude, far from any light pollution, the Milky Way stretches from horizon to horizon in a spectacle that is simply impossible to describe. Sleep under canvas with the wind, the stars and the silence of one of Uganda's most remote and untouched landscapes.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'WILD CAMPING on the Mount Moroto ridge (~2,700m)'
                },
                {
                  day: 3,
                  title: 'SUMMIT PUSH – IMAGIT PEAK (2,950m+) – DESCENT – RETURN TO MOROTO / KAMPALA',
                  description: "Elevation: ~2,700m (camp) → ~2,950m+ (Imagit Peak) | Distance: 4–6 km return | Hiking Time: 2–3 hrs summit + 3 hrs descent\n\nWake before dawn to watch the sunrise over the Karamoja plains — one of the most spectacular and unforgettable moments of the entire trip. The temperature at night on the ridge can drop to 8°C or below, so a warm layer is essential for the early morning hours. Enjoy a hot cup of coffee or tea around the campfire as the sky turns from black to deep orange to gold, and the vast plains of Karamoja gradually emerge from the darkness below. A moment of pure, unrepeatable magic in one of Uganda's most remote corners.\n\nAfter a warm breakfast, break camp and make the final push to Imagit Peak — the most popular and most accessible of Mount Moroto's summits, and the third highest point on the massif. The trail from the ridge camp to the summit involves some light scrambling over rocky outcrops and through dense montane scrub before breaking out onto the exposed rocky summit area. From Imagit Peak the panoramic views across the Karamoja plains, the Kenyan border highlands and the higher Moroto peaks are breathtaking — on a clear morning the visibility can stretch for over 100 kilometres in every direction.\n\nSpend time on the summit taking in the views, photographing the dramatic landscape and marking the achievement with your guide. Optional for the very fit: your guide can assess conditions and fitness for an attempt on the higher Sokodek Peak (3,083m — the true summit of Mount Moroto), which requires an additional 2–3 hours of challenging ridge trekking and scrambling from Imagit. Discuss this possibility with your guide at the start of the trek.\n\nBegin the descent from Imagit Peak, retracing the ridge and then descending via the Nadukon Valley or an alternative southern route through Tapac village — a spectacular traverse of the mountain massif from west to east, passing through further Tepeth communities. The descent takes approximately 2–3 hours and brings you out at a different point on the mountain's lower slopes, from where your vehicle will collect the group.\n\nArrive at the base of the mountain in the early afternoon. Transfer back to Moroto town for a hot shower, a cold drink and a celebratory lunch. In the afternoon, begin the return drive to Kampala or Mbale, arriving late in the evening.",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              usefulInfo: {
                bestTime: "December–February and June–August (dry seasons). Avoid March–May and September–November.",
                distance: "Approximately 450–500 km (9–11 hours drive) from Kampala via Mbale and Soroti.",
                altitude: "Trailhead: 1,200m; Ridge Camp: 2,700m; Imagit Peak: 2,950m+.",
                fitness: "Moderate to Challenging. Sustained hiking over 5–7 hours with rocky scrambles.",
                packing: "Sturdy hiking boots, warm layers for the ridge (8°C), sunscreen, 3L water/day, headlamp."
              },
              extensions: [
                { name: "Kidepo Valley National Park (2–3 days)", description: "Combine with a safari to see lions, cheetahs, and ostriches." },
                { name: "Karamoja Cultural Village Experiences", description: "Visit a traditional manyatta (homestead) to learn warrior traditions." },
                { name: "Mount Kadam Trek (4,061m)", description: "An ascent of the highest mountain in Karamoja for the seriously adventurous." }
              ],
              inclusions: [
                'Private 4x4 safari vehicle & fuel',
                'English-speaking driver/guide',
                'Experienced local Tepeth/Karamojong mountain guide',
                'Porters for group equipment',
                'Mountain cook and all food supplies for the trek',
                'All camping equipment (tents, bags, cooking gear)',
                'Moroto town and market orientation walk',
                'Tepeth community introductions',
                '2 nights accommodation (1 lodge, 1 wild camping)',
                'Bottled water for transfers; purification tablets for mountain'
              ],
              exclusions: [
                'International flights and Uganda entry visa',
                'Chartered flight to Moroto Airstrip',
                'Travel and medical insurance',
                'Optional summit attempt to Sokodek Peak (3,083m)',
                'Alcoholic beverages and personal snacks',
                'Tips for guides, porters and cook',
                'Personal expenses'
              ],
              testimonial: {
                quote: "Mount Moroto is raw and beautiful. Camping on the ridge under the brightest stars I've ever seen was a spiritual experience.",
                author: "Julian P.",
                platform: "TripAdvisor",
                headline: "Rugged, Real, and Remote!"
              }
            }
          },
          {
            title: '4 Days Uganda Gorillas Safari',
            slug: '4-days-uganda-gorillas-safari',
            price: '2890$',
            per: '1 person',
            category: 'Gorilla & Primate',
            durationDays: 4,
            wildlife: ['Gorilla'],
            description: 'Journey to the misty highland rainforests of Bwindi Impenetrable National Park for an unforgettable mountain gorilla trekking experience.',
            destination: 'Bwindi Impenetrable National Park',
            bestFor: 'Primate lovers and adventurers with a moderate level of fitness.',
            highlights: ['Uganda Equator stop & pictures', 'Scenic drive through the "Switzerland of Africa"', 'Bwindi Mountain Gorilla Trekking', 'Optional domestic flights available'],
            image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.02.10.jpeg`,
            details: {
              duration: '4 Days',
              location: 'Southwestern Uganda',
              transport: '4x4 Safari Vehicle / Optional Flight',
              accommodation: 'Mahogany Springs / Lake Mutanda Chameleon Hill',
              routeCoordinates: [
                { name: 'Entebbe', lat: 0.0424, lng: 32.4435, description: 'Arrival' },
                { name: 'Uganda Equator', lat: -0.0022, lng: 32.0622, description: 'Photo Stop' },
                { name: 'Mbarara', lat: -0.6072, lng: 30.6545, description: 'En-route Transfer' },
                { name: 'Bwindi Impenetrable NP', lat: -1.0475, lng: 29.7022, description: 'Gorilla Trekking' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.02.10.jpeg`,
                `${import.meta.env.BASE_URL}images/pic5.jpg`,
                `${import.meta.env.BASE_URL}images/pic21.jpg`,
                `${import.meta.env.BASE_URL}images/pic4.jpg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'Arrival at Entebbe',
                  description: "Arrival at Entebbe airport, meet and greet. Transfer (approximately 10 minutes) to the hotel in Entebbe for overnight. No meals are included today.",
                  meals: 'No meals',
                  stay: 'Karibu Guest House'
                },
                {
                  day: 2,
                  title: 'Entebbe to Bwindi Impenetrable National Park',
                  description: "Early breakfast and depart to the southwest towards Bwindi Impenetrable NP, home of the endangered mountain gorilla. Cross the Uganda Equator with a stop for pictures, continue to Masaka and Mbarara. Journey through the beautiful evergreen mountain country referred to as the “Switzerland of Africa” before reaching the lodge in Bwindi (approx. 10 hours). \n\n*Optional flight: Early transfer to Entebbe airport for a scheduled Aerolink flight to Kihihi or Kisoro, followed by a 2-hour 4x4 transfer to your lodge.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mahogany Springs Lodge / Lake Mutanda Chameleon Hill Lodge'
                },
                {
                  day: 3,
                  title: 'Gorilla Trekking in Bwindi',
                  description: "After breakfast, take a short transfer to Bwindi NP headquarters to meet local guides and trackers for a briefing on gorilla trekking etiquette. Hike into the dense forest with a packed lunch. The trek can take from 1 to 8 hours climbing to altitudes over 7,500 feet over rough, sometimes muddy terrain. Once located, you will spend exactly 1 hour observing the gorillas—a profound natural history experience where all fatigue is forgotten. Return to the lodge for a free afternoon/evening.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mahogany Springs Lodge / Lake Mutanda Chameleon Hill Lodge'
                },
                {
                  day: 4,
                  title: 'Bwindi to Entebbe & Departure',
                  description: "After a morning breakfast, transfer to Entebbe airport (10-hour scenic journey approx.), stopping along the way for lunch. Evening departure flight. \n\n*Optional flight: Transfer to Kihihi or Kisoro airstrip for a scheduled Aerolink flight back to Entebbe to connect with your departure.",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              inclusions: [
                'Airport transfers',
                'Gorilla trekking permit',
                'Accommodation and meals as indicated',
                '4x4 Land Cruiser with pop-up roof',
                'English-speaking driver-guide',
                'En-route lunches and Equator visit'
              ],
              exclusions: [
                'International and optional domestic flights',
                'Uganda Visa fees',
                'Personal travel insurance',
                'Tips for guides and hotel staff',
                'Personal expenses (drinks, laundry)'
              ],
              testimonial: {
                quote: "The trek was strenuous but seeing the silverback in the wild made every step completely worth it. Unbelievable experience.",
                author: "Matthew D.",
                platform: "TripAdvisor",
                headline: "A Magical Encounter!"
              }
            }
          },
          {
            slug: '4-days-fly-uganda-gorillas',
            title: '4 Days Uganda Gorillas Fly-in Safari',
            price: '3320$',
            per: '1 person',
            category: 'Fly-In & Premium',
            durationDays: 4,
            wildlife: ['Gorilla'],
            description: 'Maximize your time in the rainforest by flying directly to the Bwindi highlands. This premium safari offers breathtaking aerial views of the "Switzerland of Africa" and a seamless journey to meet the majestic mountain gorillas.',
            destination: 'Bwindi Impenetrable National Park',
            bestFor: 'Luxury travelers, photographers, and those seeking a faster, more comfortable journey.',
            highlights: ['Scheduled Aerolink flight to Kihihi/Kisoro', 'Mountain Gorilla trekking (1-8 hours)', 'Stay at Mahogany Springs or Chameleon Hill', 'Scenic aerial views of the Kigezi highlands'],
            image: `${import.meta.env.BASE_URL}images/gorillafly.jpg`,
            details: {
              duration: '4 Days',
              location: 'Southwestern Uganda',
              transport: 'Scheduled Flight (Aerolink) & 4x4 Safari Van',
              accommodation: 'Mahogany Springs / Chameleon Hill Lodge',
              routeCoordinates: [
                { name: 'Entebbe Airport', lat: 0.0424, lng: 32.4435, description: 'Flight Departure' },
                { name: 'Kihihi / Kisoro Airfield', lat: -0.7100, lng: 29.7000, description: 'Landing & Transfer' },
                { name: 'Bwindi NP Headquarters', lat: -1.0475, lng: 29.7022, description: 'Gorilla Trekking' },
                { name: 'Lodge (Buhoma/Rushaga)', lat: -0.9908, lng: 29.6153, description: 'Premium Stay' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.02.10.jpeg`,
                `${import.meta.env.BASE_URL}images/pic5.jpg`,
                `${import.meta.env.BASE_URL}images/pic21.jpg`,
                `${import.meta.env.BASE_URL}images/pic4.jpg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'Arrival at Entebbe',
                  description: "Arrival at Entebbe airport, meet and greet, and transfer (approx. 10 minutes) to your hotel in Entebbe. Spend your first evening relaxing by the shores of Lake Victoria as you prepare for your flight into the heart of the forest.",
                  meals: 'No meals',
                  stay: 'Laico Lake Victoria Hotel'
                },
                {
                  day: 2,
                  title: 'Fly to Bwindi Highlands (Kihihi or Kisoro)',
                  description: "After an early breakfast, transfer to Entebbe airport for your scheduled flight with Aerolink. Enjoy a scenic 1.5-hour flight over the rolling hills of Uganda. Upon landing at Kihihi or Kisoro airstrip, you will be met by a 4x4 safari van and transferred (approx. 2 hours) to your lodge. Check in, enjoy lunch, and spend a free afternoon soaking in the mountain views.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mahogany Springs Lodge (Buhoma/Ruhija) or Lake Mutanda Chameleon Hill Lodge (Rushaga/Nkuringo)'
                },
                {
                  day: 3,
                  title: 'Gorilla Trekking in Bwindi Impenetrable NP',
                  description: "The day you've been waiting for. After a short transfer to the park headquarters and a briefing on trekking etiquette, head into the dense forest with expert guides and trackers. The trek can take between 1 to 8 hours as you climb to altitudes over 7,500 feet. Once the gorillas are located, spend one profound hour observing their behavior—an experience often described as the most moving wildlife encounter on earth. Return to the lodge for a free afternoon to relax and reflect.",
                  meals: 'Breakfast, Lunch (Packed), Dinner',
                  stay: 'Mahogany Springs Lodge or Lake Mutanda Chameleon Hill Lodge'
                },
                {
                  day: 4,
                  title: 'Fly back to Entebbe & Departure',
                  description: "After a final mountain breakfast, transfer back to the airstrip (Kihihi for Buhoma/Ruhija or Kisoro for Rushaga/Nkuringo) for your scheduled flight back to Entebbe. Arrive in the late morning or afternoon to connect with your international departure flight.",
                  meals: 'Breakfast',
                  stay: 'N/A'
                }
              ],
              inclusions: [
                'Scheduled Aerolink flights (Entebbe - Kihihi/Kisoro - Entebbe)',
                'Gorilla trekking permit',
                'Airport transfers in Entebbe & Bwindi',
                '4x4 Safari Van for ground transfers',
                'Accommodation as listed',
                'All meals as per itinerary (except Day 1)',
                'English-speaking driver-guide'
              ],
              exclusions: [
                'International flights',
                'Uganda Visa fees',
                'Travel insurance',
                'Personal expenses (drinks, laundry)',
                'Tips for guides and rangers'
              ],
              testimonial: {
                quote: "Flying over the 'Switzerland of Africa' was as beautiful as the trekking itself. The lodge was world-class and the gorillas were majestic.",
                author: "Sarah L.",
                platform: "TripAdvisor",
                headline: "A Seamless, Five-Star Experience!"
              }
            }
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
            image: `${import.meta.env.BASE_URL}images/ugra.jpeg`,
            details: {
              duration: '7 Days',
              location: 'Western & Southwestern Uganda',
              transport: 'Scheduled Flights (Aerolink) & 4x4 Safari Van',
              accommodation: 'Papaya Lake Lodge, Mazike Valley Lodge, Mahogany Springs / Chameleon Hill',
              routeCoordinates: [
                { name: 'Entebbe Airport', lat: 0.0424, lng: 32.4435, description: 'Flight Departure' },
                { name: 'Kasese Airfield', lat: 0.1833, lng: 30.1000, description: 'Landing & Transfer' },
                { name: 'Fort Portal / Bigodi', lat: 0.6931, lng: 30.2762, description: 'Swamp Walk & Birding' },
                { name: 'Kibale Forest', lat: 0.4431, lng: 30.3844, description: 'Chimp Tracking' },
                { name: 'Queen Elizabeth NP', lat: -0.1500, lng: 30.0900, description: 'Game Drives & Kazinga' },
                { name: 'Kyambura Gorge', lat: -0.1800, lng: 30.1000, description: 'Sunken Forest Walk' },
                { name: 'Bwindi Impenetrable NP', lat: -1.0475, lng: 29.7022, description: 'Gorilla Trekking' },
                { name: 'Kihihi / Kisoro Airfield', lat: -0.7100, lng: 29.7000, description: 'Flight to Entebbe' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/pic20.jpg`,
                `${import.meta.env.BASE_URL}images/pic14.jpg`,
                `${import.meta.env.BASE_URL}images/pic5.jpg`,
                `${import.meta.env.BASE_URL}images/pic21.jpg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'Arrival in Entebbe',
                  description: "Arrival at Entebbe airport, meet and greet, and transfer (approx. 10 minutes) to your hotel in Entebbe. No meals are included today. Relax at the hotel and enjoy the view of Lake Victoria.",
                  meals: 'No meals',
                  stay: 'Laico Lake Victoria Hotel'
                },
                {
                  day: 2,
                  title: 'Fly to Kasese & Bigodi Swamp Walk',
                  description: "After an early breakfast, transfer to Entebbe airport for your scheduled Aerolink flight to Kasese at 07:45. Upon arrival at 10:05, you will be met by a 4x4 safari van and transferred (approx. 2 hours) to Fort Portal. Check in and enjoy lunch. In the afternoon, embark on a 3-hour guided walk through Bigodi Swamp, one of the best places to see the Great Blue Turaco and multiple primate species.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Papaya Lake Lodge'
                },
                {
                  day: 3,
                  title: 'Kibale Forest Chimp Tracking & Transfer to Queen Elizabeth NP',
                  description: "Early transfer to Kibale Forest NP (approx. 35 minutes) for a morning dedicated to searching for Chimpanzees and other primates like L'Hoeste's and Red Colobus. Return to the lodge for lunch before proceeding to the Peninsula sector of Queen Elizabeth National Park (approx. 3.5 hours). Check in and relax.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mazike Valley Lodge'
                },
                {
                  day: 4,
                  title: 'Queen Elizabeth Game Drive & Kazinga Channel Boat Cruise',
                  description: "Explore the Kasenyi area in the early morning to spot lions, buffaloes, elephants, and Uganda Kobs. After lunch at Mweya Safari Lodge, enjoy a 2-hour afternoon boat cruise on the Kazinga Channel, home to hippos, crocodiles, and an abundance of water birds.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mazike Valley Lodge'
                },
                {
                  day: 5,
                  title: 'Kyambura Gorge Chimp Walk & Transfer to Bwindi',
                  description: "Breakfast followed by a walk in the stunning Kyambura Gorge for chimpanzee viewing in the 'sunken forest'. Afterward, depart for Bwindi Impenetrable NP, home of the endangered mountain gorilla. The driving time will be between 4 and 6 hours depending on your permitted sector. Lunch will be provided en route.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mahogany Springs Lodge (Buhoma/Ruhija) or Lake Mutanda Chameleon Hill Lodge (Rushaga/Nkuringo)'
                },
                {
                  day: 6,
                  title: 'Mountain Gorilla Trekking in Bwindi',
                  description: "The peak of the journey. After a briefing at the Bwindi NP headquarters, hike into the ancient forest with expert trackers. The trek can take 1 to 8 hours depending on the gorillas' location. Spend one unforgettable hour with these gentle giants in their natural habitat. Return to the lodge for a free afternoon to relax.",
                  meals: 'Breakfast, Lunch (Packed), Dinner',
                  stay: 'Mahogany Springs Lodge or Lake Mutanda Chameleon Hill Lodge'
                },
                {
                  day: 7,
                  title: 'Fly Back to Entebbe & Departure',
                  description: "After breakfast, transfer (approx. 2 hours) to Kihihi or Kisoro airstrip for your scheduled Aerolink flight back to Entebbe. Arrive in the late morning or afternoon to connect with your international departure flight.",
                  meals: 'Breakfast',
                  stay: 'N/A'
                }
              ],
              inclusions: [
                'Scheduled Aerolink flights (Entebbe - Kasese and Kihihi/Kisoro - Entebbe)',
                'Gorilla trekking permit',
                'Chimpanzee tracking permit (Kibale & Kyambura)',
                'Airport transfers in Entebbe, Kasese, and Bwindi',
                '4x4 Safari Van for ground transfers',
                'Accommodation as listed',
                'All meals as per itinerary (except Day 1)',
                'Bigodi Swamp walk',
                'Queen Elizabeth game drives and boat cruise'
              ],
              exclusions: [
                'International flights',
                'Uganda Visa fees',
                'Travel insurance',
                'Personal expenses (drinks, laundry)',
                'Tips for guides and staff'
              ],
              testimonial: {
                quote: "Flying across the country made the journey so smooth. From the blue turacos in Bigodi to the silverbacks in Bwindi, it was a sequence of wonders.",
                author: "James & Helen W.",
                platform: "TripAdvisor",
                headline: "Uganda's Finest Wonders!"
              }
            }
          },
          {
            title: '4 Days Rwanda Gorillas Safari',
            slug: '4-days-rwanda-gorilla-trek',
            price: '3700$',
            per: '1 person',
            category: 'Gorilla & Primate',
            durationDays: 4,
            wildlife: ['Gorilla'],
            description: 'An immersive gorilla trekking safari through Rwanda\'s Volcanoes National Park, combining Kigali city highlights, the Genocide Memorial, and a close encounter with mountain gorillas in the Virunga Volcanoes.',
            destination: 'Kigali & Volcanoes National Park, Rwanda',
            bestFor: 'Luxury primate travelers and bucket-list adventurers.',
            highlights: ['Mountain gorilla trekking', 'Kigali Genocide Memorial', 'Virunga Volcano scenery', 'Batwa community visit', 'Crafts village & souvenir shopping'],
            image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.00.49-1.jpeg`,
            details: {
              duration: '4 Days',
              location: 'Kigali & Kinigi, Rwanda',
              transport: 'Private 4x4 Jeep',
              accommodation: 'Hotel des Mille Collines / Mountain Gorilla View Lodge',
              routeCoordinates: [
                { name: 'Kigali Airport', lat: -1.9686, lng: 30.1395, description: 'Arrival & Meet' },
                { name: 'Hotel des Mille Collines', lat: -1.9441, lng: 30.0619, description: 'Night 1' },
                { name: 'Gisozi Genocide Memorial', lat: -1.9265, lng: 30.0736, description: 'City Tour' },
                { name: 'Ruhengeri', lat: -1.4988, lng: 29.6337, description: 'En-route Stop' },
                { name: 'Kinigi / Mountain Gorilla View Lodge', lat: -1.4716, lng: 29.5506, description: 'Nights 2 & 3' },
                { name: 'Volcanoes National Park HQ', lat: -1.4800, lng: 29.5400, description: 'Gorilla Trekking' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.00.49-1.jpeg`,
                `${import.meta.env.BASE_URL}images/batwa.jpg`,
                `${import.meta.env.BASE_URL}images/akagera.webp`,
                `${import.meta.env.BASE_URL}images/lions-tree.jpeg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'Arrival in Kigali',
                  description: "Arrival at Kigali International Airport — meet and greet with your guide. Transfer to your hotel in Kigali city. Enjoy dinner and a relaxing first evening in Rwanda's clean and vibrant capital.",
                  meals: 'Dinner',
                  stay: 'Hotel des Mille Collines (Panorama View Room)'
                },
                {
                  day: 2,
                  title: 'Kigali City Tour & Transfer to Kinigi',
                  description: "After breakfast, enjoy a city tour including the Gisozi Genocide Memorial — a profoundly moving and important site — and the crafts village for handcraft and souvenir shopping. After lunch, proceed towards the Virunga Volcanoes. After a 2½-hour drive through the stunning scenery of lush green hills and valleys (Rwanda is known as the 'Land of a Thousand Hills'), you arrive at Kinigi after crossing Ruhengeri town. Dinner and overnight at Mountain Gorilla View Lodge.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mountain Gorilla View Lodge'
                },
                {
                  day: 3,
                  title: 'Gorilla Trekking in Volcanoes National Park',
                  description: "After an early breakfast, take a short 10-minute drive to Volcanoes National Park Headquarters at the base of Sabinyo Mountain. There you will meet excellent local guides, rangers, and trackers who will give a talk on the etiquette of gorilla trekking. You then hike into the forest toward where the gorillas were located the night before. In Rwanda there are 10 habituated gorilla groups that can be viewed by tourists — each group is visited by a maximum of 8 people per day and the visit lasts one hour. The trekking can take 1 to 8 hours and climb to altitudes in excess of 7,500 feet. The terrain is rough and at times muddy, but the beauty of the forest makes it entirely worthwhile. Once the gorillas are located, all fatigue is forgotten — this experience is often described as the most profound natural history encounter in the world. After trekking, enjoy lunch at the lodge and a free afternoon to relax. Optional (not included): guided eco village walk and market visit, with a chance to meet members of the Batwa (Pygmy) community — the original inhabitants of the Great Lakes region.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mountain Gorilla View Lodge'
                },
                {
                  day: 4,
                  title: 'Return to Kigali & Departure',
                  description: "Early breakfast at the lodge, then depart for Kigali — a 2½-hour drive back through Rwanda's beautiful countryside. Transfer to Kigali International Airport for your afternoon or evening departure flight. A truly unforgettable safari comes to an end.",
                  meals: 'Breakfast',
                  stay: 'N/A'
                }
              ],
              inclusions: [
                'Professional Driver-Guide',
                'Private 4x4 Jeep',
                'Gorilla Trekking Permit',
                'Accommodation as listed',
                'All meals as per itinerary',
                'Kigali city tour',
                'Genocide Memorial visit',
                'Crafts village visit',
                'Airport transfers'
              ],
              exclusions: [
                'International flights',
                'Rwanda Visa fees',
                'Travel insurance',
                'Personal expenses',
                'Optional eco village walk (tips expected)',
                'Tips for guides and staff'
              ],
              testimonial: {
                quote: "Rwanda is so clean and organized. The gorilla trek was the highlight of my year — once you find them, all fatigue is completely forgotten.",
                author: "Anita R.",
                platform: "TripAdvisor",
                headline: "The Most Profound Experience!"
              }
            }
          },
          {
            title: '4 Days Nyungwe Forest Experience',
            slug: '4-days-nyungwe-forest',
            price: '2720$',
            per: '1 person',
            category: 'Gorilla & Primate',
            durationDays: 4,
            wildlife: ['Chimpanzee', 'Colobus', 'Bird'],
            description: "Africa's Oldest Montane Rainforest. Experience Rwanda's premier primate sanctuary, featuring the spectacular 160m canopy walkway, chimpanzee trekking, and the largest troop of colobus monkeys in Africa.",
            destination: 'Nyungwe Forest National Park - Southwestern Rwanda',
            bestFor: 'Nature lovers, primate enthusiasts, and hikers seeking an ancient rainforest adventure.',
            highlights: ['160m Suspended Canopy Walkway', 'Chimpanzee & Colobus Tracking', 'Isumo Waterfall Guided Hike', 'Nyanza Royal Palace visit'],
            image: `${import.meta.env.BASE_URL}images/nyungwe.webp`,
            details: {
              duration: '4 Days',
              location: 'Southwestern Rwanda (Gisakura)',
              transport: 'Private 4x4 Safari Vehicle',
              accommodation: 'One&Only Nyungwe House / Nyungwe Top View / Gisakura Guesthouse',
              routeCoordinates: [
                { name: 'Kampala', lat: 0.3476, lng: 32.5825, description: 'Starting Point' },
                { name: 'Katuna/Gatuna Border', lat: -1.3293, lng: 29.6836, description: 'Uganda-Rwanda Crossing' },
                { name: 'Kigali (Genocide Memorial)', lat: -1.9265, lng: 30.0736, description: 'Orientation & History' },
                { name: 'Nyanza Royal Palace', lat: -2.3500, lng: 29.7500, description: 'Kingdom Heritage' },
                { name: 'Uwinka Visitor Centre', lat: -2.4770, lng: 29.2030, description: 'Canopy Walk Base' },
                { name: 'Cyamudongo Forest', lat: -2.4500, lng: 28.9500, description: 'Reliable Chimp Sightings' },
                { name: 'Lake Kivu (Rusizi)', lat: -2.4833, lng: 28.9000, description: 'Scenic Great Lake' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/nyungwe.webp`,
                `${import.meta.env.BASE_URL}images/pic20.jpg`,
                `${import.meta.env.BASE_URL}images/pic17.jpg`,
                `${import.meta.env.BASE_URL}images/pic22.jpg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'KAMPALA – BORDER CROSSING – KIGALI – NYANZA ROYAL PALACE – NYUNGWE FOREST',
                  description: "Depart from Kampala at 6:30 am for the drive to Rwanda. Cross the Katuna/Gatuna border and continue to Kigali for a visit to the Kigali Genocide Memorial—a profoundly moving site honoring the 800,000 victims of the 1994 genocide. After lunch, drive southwestward through Rwanda's famous terraced hills. En route, stop at the Nyanza Royal Palace Museum, the reconstructed traditional palace of the Mwami (King), featuring the famous long-horned Inyambo royal cattle. Continue through tea estates as the dense canopy of Nyungwe Forest appears. Arrive at your lodge in the late afternoon for dinner and an early rest.",
                  meals: 'Lunch, Dinner',
                  stay: 'One&Only Nyungwe House (Luxury) / Nyungwe Top View Hotel (Mid-range) / Gisakura Guesthouse (Budget)'
                },
                {
                  day: 2,
                  title: 'CANOPY WALKWAY – ISUMO WATERFALL TRAIL – BIRD WALKS',
                  description: "Transfer to Uwinka Visitor Centre (2,200m) for East Africa's first canopy walkway—a suspension bridge stretching 160m long and hanging 90m above the forest floor. Enjoy 360-degree views of the ancient rainforest canopy, spotting L'Hoest's monkeys and Rwenzori turacos. After a picnic lunch, set out on the Isumo Waterfall Trail, winding through tea fields and dense forest to a graceful 17m cascade. In the late afternoon, enjoy an optional guided birding walk near the lodge, searching for the spectacularly colored African green broadbill.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'One&Only Nyungwe House / Nyungwe Top View Hotel / Gisakura Guesthouse'
                },
                {
                  day: 3,
                  title: 'CHIMPANZEE TREKKING – COLOBUS MONKEY TRACKING – LAKE KIVU',
                  description: "Early morning departure (4:30 am) for chimpanzee trekking. Track the Cyamudongo forest community, observing their acrobatic energy and complex social interactions for one unforgettable hour. After a late breakfast, head out for colobus monkey tracking—Nyungwe is home to the largest troop in Africa (up to 300 individuals). Witness the dramatic spectacle of the black-and-white troop moving through the high canopy. Late afternoon, drive to the shores of Lake Kivu for sundowners with views of the distant Congolese hills reflecting in the still water.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'One&Only Nyungwe House / Nyungwe Top View Hotel / Gisakura Guesthouse'
                },
                {
                  day: 4,
                  title: 'FOREST NATURE WALK – COMMUNITY VISIT – RETURN TO KIGALI / KAMPALA',
                  description: "Choose a final gentle nature walk through the Bigugu or Karamba trails, spotting some of the forest's 374 butterfly species. Visit the Gisakura Tea Estate community to learn about the processing of Rwanda's fine-leaf tea and enjoy a cup with views of the forest. Begin the return journey, either retracing the route through Huye and Kigali to Kampala, or transferring directly to Kigali International Airport for your departure flight.",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              wildlifeHighlights: {
                primates: "13 species: Chimpanzee (400-500 individuals), Angola colobus (largest known troop in Africa), L'Hoest's monkey (endemic), Hamlyn's owl-faced monkey.",
                birds: "310 species (30 Albertine Rift endemics): Rwenzori turaco, African green broadbill, Shelley's crimsonwing.",
                other: "374 butterfly species, African golden cat, serval, and forest giant hog."
              },
              usefulInfo: {
                bestTime: "June–Sept and Dec–Feb (dry seasons) for trekking. Wet seasons (Mar–May, Oct–Nov) for vocal chimps and lush greenery.",
                altitude: "1,600 to 2,950 metres above sea level. Evenings can be cool (10–14°C)—bring a warm fleece.",
                whatToPack: "Hiking boots, garden gloves (for chimp trekking), rain jacket, binoculars, and long-sleeved clothing.",
                requirements: "EAC citizens can enter on national IDs. Others require a valid passport and visa (available on arrival or e-visa)."
              },
              accommodationOptions: [
                { name: 'One&Only Nyungwe House (Luxury)', description: 'World-class lodge set among tea estates at the forest edge.' },
                { name: 'Nyungwe Top View Hotel (Mid-range)', description: 'Panoramic views of the forest canopy and surrounding hills.' },
                { name: 'Nyungwe Nziza Ecolodge (Mid-range)', description: 'Sustainability-focused lodge near the park entrance.' },
                { name: 'Gisakura Guesthouse (Budget)', description: 'Clean, simple rooms ideal for birders seeking early forest access.' }
              ],
              inclusions: [
                'Private 4x4 safari vehicle & fuel',
                'English-speaking professional driver/guide',
                'RDB ranger guide for all forest activities',
                'All Nyungwe National Park entry fees',
                'Canopy walkway experience',
                'Chimpanzee trekking permit',
                'Angola colobus monkey tracking permit',
                'Isumo Waterfall guided hike',
                'Gisakura Tea Estate and Museum visits',
                '3 nights accommodation & meals as indicated',
                'Bottled drinking water in the vehicle'
              ],
              exclusions: [
                'International flights and Rwanda visa (USD 50)',
                'Uganda entry visa (if re-entering Uganda)',
                'Travel and medical insurance',
                'Optional zipline and Lake Kivu boat trips',
                'Alcoholic and premium beverages',
                'Tips and gratuities',
                'Personal expenses'
              ],
              testimonial: {
                quote: "The canopy walk is a thrill like no other—suspended 90m above the ancient trees. Seeing the chimpanzees at dawn in the Cyamudongo forest was a life-changing experience.",
                author: "Kevin D.",
                platform: "TripAdvisor",
                headline: "Above the Trees in Africa's Oldest Forest!"
              }
            }
          },
          {
            title: '5 Days Rwanda Safari: Akagera & Volcanoes',
            slug: '5-days-akagera-safari',
            price: '3400$',
            per: '1 person',
            category: 'East Africa & Beyond',
            durationDays: 5,
            wildlife: ['Gorilla', 'Lion', 'Elephant', 'Rhino', 'Giraffe'],
            description: 'Classic Big Five safari in Akagera National Park combined with gorilla trekking, golden monkeys, and the Volcanoes National Park experience.',
            destination: 'Akagera & Volcanoes National Parks, Rwanda',
            bestFor: 'Savannah wildlife lovers and primate enthusiasts.',
            highlights: ['Big Five sightings in Akagera', 'Lake Ihema boat safari', 'Gorilla trekking in Volcanoes NP', 'Golden monkey trekking', 'Twin Lakes Burera & Ruhondo hike'],
            image: `${import.meta.env.BASE_URL}images/akagera.webp`,
            details: {
              duration: '5 Days',
              location: 'Akagera & Musanze, Rwanda',
              transport: 'Private 4x4 Safari Vehicle',
              accommodation: 'Ruzizi Tented Lodge / Mountain Gorilla View Lodge',
              routeCoordinates: [
                { name: 'Kigali', lat: -1.9441, lng: 30.0619, description: 'Departure Point' },
                { name: 'Akagera National Park', lat: -1.7500, lng: 30.7500, description: 'Game Drive & Boat Safari' },
                { name: 'Musanze (Ruhengeri)', lat: -1.4988, lng: 29.6337, description: 'Conservation & Culture' },
                { name: 'Volcanoes National Park', lat: -1.4716, lng: 29.5506, description: 'Gorilla & Golden Monkey Trekking' },
                { name: 'Twin Lakes (Burera & Ruhondo)', lat: -1.4780, lng: 29.7200, description: 'Scenic Hike & Departure' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/akagera.webp`,
                `${import.meta.env.BASE_URL}images/pic2.jpg`,
                `${import.meta.env.BASE_URL}images/pic5.jpg`,
                `${import.meta.env.BASE_URL}images/pic8.jpg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'Transfer to Akagera National Park & Evening Game Drive',
                  description: "Depart from Kigali for Akagera National Park, enjoying a scenic drive through Rwanda's countryside toward the eastern region. Upon arrival, proceed directly for an evening game drive, offering a first introduction to the park's incredible wildlife including elephants, giraffes, zebras, and antelopes.",
                  meals: 'Lunch, Dinner',
                  stay: 'Ruzizi Tented Lodge'
                },
                {
                  day: 2,
                  title: 'Full Game Drive & Boat Safari on Lake Ihema',
                  description: "Spend the day exploring Akagera National Park with a full game drive across its diverse landscapes, increasing your chances of spotting a wide range of wildlife including members of the Big Five. In the afternoon, enjoy a relaxing boat safari on Lake Ihema, watching hippos, crocodiles, and a stunning variety of birdlife on the water.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Ruzizi Tented Lodge'
                },
                {
                  day: 3,
                  title: 'Transfer to Musanze & Dian Fossey Conservation Experience',
                  description: "After breakfast, depart for Musanze in the Northern Province. Upon arrival, visit the Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund to learn about the ongoing conservation efforts and the remarkable legacy of Dian Fossey. This inspiring experience offers a deep understanding of mountain gorilla research and protection before the big trekking day ahead.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mountain Gorilla View Lodge'
                },
                {
                  day: 4,
                  title: 'Gorilla Trekking & Iby\'Iwacu Cultural Village',
                  description: "Begin the day early with a transfer to Volcanoes National Park for gorilla trekking. This guided experience allows you to observe mountain gorillas in their natural habitat — one of the most moving wildlife encounters on earth. In the afternoon, enjoy a cultural visit to the Iby'Iwacu Cultural Village for traditional dance performances, local heritage displays, and authentic community interaction.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mountain Gorilla View Lodge'
                },
                {
                  day: 5,
                  title: 'Golden Monkey Trekking, Twin Lakes Hike & Departure',
                  description: "Start the morning with golden monkey trekking in Volcanoes National Park — these playful, rare primates are a delight to observe in the bamboo forest. Later, enjoy a guided hike around the scenic Twin Lakes (Burera and Ruhondo), known for their breathtaking landscapes and mountain reflections. After the activities, transfer back to Kigali for your departure.",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              inclusions: [
                'Professional Driver-Guide',
                'Private 4x4 Safari Vehicle',
                'All accommodation as listed',
                'All meals as per itinerary',
                'Park entrance fees (Akagera)',
                'Lake Ihema boat cruise',
                'Gorilla trekking permit',
                'Golden monkey tracking permit',
                'Ellen DeGeneres Campus visit',
                'Iby\'Iwacu Cultural Village visit',
                'Twin Lakes guided hike'
              ],
              exclusions: [
                'International flights',
                'Rwanda Visa fees',
                'Travel insurance',
                'Personal expenses',
                'Tips for guides and staff'
              ],
              testimonial: {
                quote: "Akagera is a conservation success story. Seeing the Big Five and then the gorillas in the same trip was beyond anything I expected.",
                author: "Gary M.",
                platform: "TripAdvisor",
                headline: "Rwanda's Best Safari!"
              }
            }
          },
          {
            title: '7 Days Great Lakes Primates Safari (Uganda Gorillas)',
            slug: '7-days-great-lakes-uganda',
            price: '3420$',
            per: '1 person',
            category: 'Multi-Park Circuits',
            durationDays: 7,
            wildlife: ['Gorilla', 'Chimpanzee', 'Lion', 'Elephant', 'Hippo'],
            description: 'The ultimate Uganda primates safari combining chimpanzee tracking in Kibale, game drives and boat cruise in Queen Elizabeth NP, and mountain gorilla trekking in Bwindi Impenetrable NP.',
            destination: 'Uganda',
            bestFor: 'Travelers seeking a complete Uganda primates and wildlife experience.',
            highlights: ['Chimps in Kibale Forest', 'Crater Lakes walk (Fort Portal)', 'Queen Elizabeth game drive & Kazinga Channel', 'Mountain gorilla trekking in Bwindi', 'Optional domestic return flight'],
            image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.02.10.jpeg`,
            details: {
              duration: '7 Days',
              location: 'Western & Southwestern Uganda',
              transport: 'Private 4x4 Safari Vehicle / Optional Return Flight',
              accommodation: 'Lake Victoria Serena / Mountains of the Moon / Mazike Valley / Mahogany Springs',
              routeCoordinates: [
                { name: 'Entebbe Airport', lat: 0.0424, lng: 32.4435, description: 'Arrival' },
                { name: 'Lake Victoria Serena Resort', lat: 0.0872, lng: 32.5640, description: 'Night 1' },
                { name: 'Fort Portal', lat: 0.6716, lng: 30.2750, description: 'Crater Lakes Walk' },
                { name: 'Kibale Forest NP', lat: 0.4431, lng: 30.3844, description: 'Chimp Tracking' },
                { name: 'Queen Elizabeth NP (Kasenyi)', lat: -0.1500, lng: 30.0900, description: 'Game Drive' },
                { name: 'Kazinga Channel', lat: -0.1747, lng: 29.9500, description: 'Boat Cruise' },
                { name: 'Bwindi Impenetrable NP', lat: -1.0475, lng: 29.7022, description: 'Gorilla Trekking' },
                { name: 'Entebbe', lat: 0.0424, lng: 32.4435, description: 'Departure' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.02.10.jpeg`,
                `${import.meta.env.BASE_URL}images/pic20.jpg`,
                `${import.meta.env.BASE_URL}images/pic21.jpg`,
                `${import.meta.env.BASE_URL}images/pic14.jpg`,
                `${import.meta.env.BASE_URL}images/pic5.jpg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'Arrival at Entebbe / Kampala',
                  description: "Arrival at Entebbe airport, meet and greet, transfer (30 minutes approx.) to the hotel in the outskirts of Kampala overlooking Lake Victoria. No meals included today.",
                  meals: 'No meals',
                  stay: 'Lake Victoria Serena Resort'
                },
                {
                  day: 2,
                  title: 'Entebbe/Kampala to Fort Portal & Crater Lakes Walk',
                  description: "Breakfast and depart towards Fort Portal (5 hours approx.). Check in and lunch at the hotel. In the afternoon we are transferred to the point where we start a walk in the crater lakes belt, surrounded by a beautiful landscape. Our guide will explain the cultural history and background of the Tooro Kingdom, and we will have time to visit a homestead as well.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Hotel Mountains of the Moon'
                },
                {
                  day: 3,
                  title: 'Kibale Forest Chimp Tracking & Queen Elizabeth NP',
                  description: "Early transfer to Kibale Forest NP (approx. 45 minutes), where all morning is dedicated to searching for chimpanzees and other primates including L'Hoeste's, red colobus, blues, red-tailed, and grey-cheeked mangabeys. After lunch, proceed to Queen Elizabeth NP / Peninsula sector (approx. 3½ hours) where we will do an evening game drive around the volcanic craters of Katwe.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mazike Valley Lodge'
                },
                {
                  day: 4,
                  title: 'Queen Elizabeth NP Game Drive & Kazinga Channel Boat Cruise',
                  description: "In the early morning, we do a game drive in the Kasenyi area within Queen Elizabeth NP on a lookout for lions, buffaloes, elephants, and large numbers of Uganda Kobs and other antelopes. Lunch will be at Mweya Safari Lodge. In the afternoon, we will go for a boat cruise on the Kazinga Channel (approx. 2 hours) to look out for hippos, great herds of buffalo, and lots of water birds.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mazike Valley Lodge'
                },
                {
                  day: 5,
                  title: 'Queen Elizabeth NP to Bwindi Impenetrable NP',
                  description: "Morning breakfast and depart to Bwindi Impenetrable NP, home of the endangered mountain gorilla. Depending on the availability of gorilla permits, we will proceed to one of the following sectors: Buhoma, Rushaga, or Ruhija. The driving time will be between 4 and 6 hours depending on the sector. Check in and lunch. Free afternoon/evening to relax. \n\n*Optional (not included): you can go for a guided community/village walk.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mahogany Springs Lodge / Lake Mutanda Chameleon Hill Lodge'
                },
                {
                  day: 6,
                  title: 'Gorilla Trekking in Bwindi Impenetrable National Park',
                  description: "Breakfast and take a short transfer to Bwindi NP headquarters where you will meet up with excellent local guides and trackers, who will give a talk on the etiquette of gorilla trekking. Thereafter, hike into the forest with your packed lunch. The trekking can take from 1 to 8 hours over rough terrain at altitudes in excess of 7,500 feet. Once the gorillas are located, all fatigue is forgotten during this profound natural history experience. Return to the lodge and free afternoon to relax.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mahogany Springs Lodge / Lake Mutanda Chameleon Hill Lodge'
                },
                {
                  day: 7,
                  title: 'Bwindi to Entebbe & Departure',
                  description: "After a morning breakfast, transfer to Entebbe airport (10 hour journey approx.) stopping along the way for lunch before your evening departure flight. \n\n*Optional flight (supplement applies): Transfer (approx. 2 hours) to Kihihi or Kisoro airstrip for your scheduled Aerolink flight to Entebbe connecting directly with your departure flight.",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              inclusions: [
                'Professional Driver-Guide',
                'Private 4x4 Safari Vehicle',
                'All accommodation and meals as listed',
                'Gorilla trekking permit',
                'Chimpanzee tracking permit',
                'Queen Elizabeth park entrance and game drives',
                'Kazinga Channel boat cruise',
                'Crater Lakes walk in Fort Portal',
                'Airport transfers'
              ],
              exclusions: [
                'International and optional domestic flights',
                'Uganda Visa fees',
                'Travel insurance',
                'Personal expenses and optional activities',
                'Tips for guides and staff'
              ],
              testimonial: {
                quote: "The combination of chimps, huge elephants, and finally the majestic gorillas was perfectly paced. Uganda is truly the Pearl of Africa.",
                author: "Johannes V.",
                platform: "TripAdvisor",
                headline: "A Safari Masterpiece!"
              }
            }
          },
          {
            title: '8 Days Adventure Uganda Safari',
            slug: '8-days-adventure-uganda',
            price: '3250$',
            per: '1 person',
            category: 'Multi-Park Circuits',
            durationDays: 8,
            wildlife: ['Gorilla', 'Chimpanzee', 'Lion', 'Elephant', 'Rhino'],
            description: "The Pearl of Africa in Full. A high-octane 8-day expedition through Uganda's premier wildlife circuits—featuring rhinos on foot, the world's most powerful waterfall, triple chimpanzee tracking, tree-climbing lions, and the ultimate mountain gorilla trekking experience.",
            destination: 'Ziwa, Murchison, Kibale, Queen Elizabeth & Bwindi',
            bestFor: 'Adventure seekers and wildlife enthusiasts wanting to see all of Uganda\'s "Big Seven" (Lions, Leopards, Elephants, Buffaloes, Rhinos, Gorillas, and Chimpanzees).',
            highlights: ['On-foot Rhino Tracking', 'World\'s Most Powerful Waterfall', 'Triple Chimp Tracking (Budongo, Kibale, Kyambura)', 'Bwindi Mountain Gorilla Trekking'],
            image: `${import.meta.env.BASE_URL}images/image1.jpeg`,
            details: {
              duration: '8 Days',
              location: 'Uganda Safari Circuit',
              transport: 'Private 4x4 Safari Vehicle',
              accommodation: 'Paraa Safari Lodge / Primate Lodge / Mweya / Mahogany Springs',
              routeCoordinates: [
                { name: 'Kampala/Entebbe', lat: 0.3476, lng: 32.5825, description: 'Starting Point' },
                { name: 'Ziwa Rhino Sanctuary', lat: 1.4870, lng: 32.0740, description: 'Rhino Tracking on Foot' },
                { name: 'Murchison Falls', lat: 2.2618, lng: 31.6963, description: 'World\'s Most Powerful Waterfall' },
                { name: 'Budongo Forest', lat: 1.6833, lng: 31.7167, description: 'Chimp Trekking 1' },
                { name: 'Kibale Forest', lat: 0.4431, lng: 30.3844, description: 'Primate Capital (Chimp Trekking 2)' },
                { name: 'Queen Elizabeth NP', lat: -0.1500, lng: 30.0900, description: 'Predator Plains & Boat Cruise' },
                { name: 'Kyambura Gorge', lat: -0.1800, lng: 30.1000, description: 'Valley of Apes (Chimp Trekking 3)' },
                { name: 'Ishasha Sector', lat: -0.6500, lng: 29.6500, description: 'Tree-climbing Lions' },
                { name: 'Bwindi Impenetrable NP', lat: -1.0475, lng: 29.7022, description: 'Mountain Gorilla Trekking' },
                { name: 'Lake Bunyonyi', lat: -1.2883, lng: 29.9167, description: 'Relaxation & Reflection' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/rhino.jpeg`,
                `${import.meta.env.BASE_URL}images/waterfalls.jpg`,
                `${import.meta.env.BASE_URL}images/chimp.jpeg`,
                `${import.meta.env.BASE_URL}images/lions-tree.jpeg`,
                `${import.meta.env.BASE_URL}images/ug-gorilla.jpg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'ENTEBBE/KAMPALA – ZIWA RHINO SANCTUARY – MURCHISON FALLS NATIONAL PARK',
                  description: "Depart at 7:00 am for Murchison Falls NP. Stop at Ziwa Rhino Sanctuary, the only place in Uganda to track wild Southern White Rhinoceroses on foot—a successful conservation project that has restored the species to Uganda. After lunch in Masindi, continue to Murchison Falls and visit the 'top of the falls' to witness the Nile forcing through an 8-metre rock cleft in a thundering cascade. Check in to your lodge for dinner.",
                  meals: 'Lunch, Dinner',
                  stay: 'Paraa Safari Lodge / Nile Safari Lodge (Luxury) / Murchison River Lodge (Mid-range) / Red Chilli Rest Camp (Budget)'
                },
                {
                  day: 2,
                  title: 'MURCHISON FALLS – MORNING GAME DRIVE – NILE BOAT CRUISE TO THE BASE OF THE FALLS',
                  description: "Pre-breakfast game drive in the northern bank savannah to spot elephants, Rothschild's giraffes, lions, and buffaloes. After breakfast, board the park launch for a boat cruise to the base of Murchison Falls. The riverbanks host one of the world's highest concentrations of hippos and crocodiles. Disembark at the base and hike to the top for dramatic views before returning to the lodge.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Paraa Safari Lodge / Nile Safari Lodge (Luxury) / Murchison River Lodge (Mid-range) / Red Chilli Rest Camp (Budget)'
                },
                {
                  day: 3,
                  title: 'MURCHISON FALLS – BUDONGO FOREST CHIMPANZEE TREKKING – TRANSFER TO KIBALE',
                  description: "Cross the Nile to Budongo Forest for a morning chimpanzee trekking experience along the 'Royal Mile' trail, home to mahogany trees and multiple primate species. After a packed lunch, begin a scenic 6–7 hour drive southward through the Albertine Rift escarpment and Fort Portal crater lakes region to Kibale Forest National Park, the Primate Capital of the World.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Primate Lodge / Papaya Lake Lodge (Luxury) / Kibale Forest Camp / Isunga Lodge (Mid-range) / Chimpanzee Forest Guesthouse (Budget)'
                },
                {
                  day: 4,
                  title: 'KIBALE FOREST – CHIMPANZEE TREKKING – BIGODI WETLAND SANCTUARY WALK',
                  description: "Morning chimpanzee tracking in Kibale's ancient rainforest, home to 1,500 chimps and 12 other primate species. Spend one hour with a habituated community. In the afternoon, embark on the community-run Bigodi Wetland Sanctuary walk, famous for the Great Blue Turaco, sitatunga antelopes, and rare papyrus birds. Optional evening night walk to spot nocturnal pottos and bushbabies.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Primate Lodge / Papaya Lake Lodge (Luxury) / Kibale Forest Camp / Isunga Lodge (Mid-range) / Chimpanzee Forest Guesthouse (Budget)'
                },
                {
                  day: 5,
                  title: 'TRANSFER TO QUEEN ELIZABETH NATIONAL PARK – KASENYI PLAINS GAME DRIVE – KAZINGA CHANNEL BOAT CRUISE',
                  description: "Drive southward to Queen Elizabeth NP, straddling the equator. Game drive in the Kasenyi Plains, the park's prime predator circuit, for lions and Uganda kobs. In the late afternoon, enjoy the 2-hour Kazinga Channel boat cruise, witnessing huge herds of buffalo and hippos at the water's edge in the golden evening light.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mweya Safari Lodge (Luxury) / Enganzi Lodge / Ihamba Lakeside Safari Lodge (Mid-range) / Kazinga Channel View Resort (Budget)'
                },
                {
                  day: 6,
                  title: 'KYAMBURA GORGE CHIMP TRACKING – ISHASHA TREE-CLIMBING LIONS – BWINDI ARRIVAL',
                  description: "Track chimpanzees in the 'Valley of Apes'—Kyambura Gorge, a sunken forest slicing through the savannah. After lunch, drive to the Ishasha sector to search for the world-famous tree-climbing lions. Continue into the Kigezi highlands and the mist-filled valleys of Bwindi Impenetrable Forest, arriving in the evening.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mahogany Springs Lodge / Bwindi Lodge (Luxury) / Silverback Lodge / Chameleon Hill Lodge (Mid-range) / Buhoma Community Rest Camp (Budget)'
                },
                {
                  day: 7,
                  title: 'BWINDI IMPENETRABLE FOREST – MOUNTAIN GORILLA TREKKING – BATWA CULTURAL EXPERIENCE',
                  description: "The safari peak: mountain gorilla trekking in Bwindi. Enter the UNESCO World Heritage forest to find your assigned family. Spend one profound hour with these gentle giants (sharing 98.3% human DNA). In the afternoon, meet the Batwa (Twa) pygmy people, the forest's original inhabitants, for a respectful cultural encounter involving traditional music, fire-making, and medicinal knowledge.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mahogany Springs Lodge / Bwindi Lodge (Luxury) / Silverback Lodge / Chameleon Hill Lodge (Mid-range) / Buhoma Community Rest Camp (Budget)'
                },
                {
                  day: 8,
                  title: 'LAKE BUNYONYI RELAXATION – ISLAND CANOE CRUISE – RETURN TO KAMPALA/ENTEBBE',
                  description: "Drive to Lake Bunyonyi, Africa's second deepest lake. Enjoy a traditional wooden canoe cruise between the 29 islands, including Punishment Island. Bunyonyi is bilharzia-free and safe for swimming. In the afternoon, begin the return drive to Kampala or Entebbe via the Equator monument, arriving in the late evening.",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              safariHighlights: [
                'White Rhino tracking on foot (Ziwa Rhino Sanctuary)',
                'World\'s Most Powerful Waterfall (Murchison Falls)',
                'Triple Chimpanzee Tracking (Budongo, Kibale, Kyambura)',
                'Tree-climbing Lions of Ishasha',
                'Mountain Gorilla Trekking (Bwindi Impenetrable Forest)',
                'Island hopping at Lake Bunyonyi'
              ],
              usefulInfo: {
                bestTime: "June–Sept and Dec–Feb (dry seasons) for optimal trekking and game viewing.",
                fitness: "Moderate to High. Gorilla trekking involves hiking 1–8 hours on steep, muddy terrain.",
                permits: "Gorilla (USD 800) and Chimp permits are limited and must be booked 4–6 months in advance.",
                packing: "Hiking boots, garden gloves (for nettles), rain jacket, binoculars, and safari-neutral clothing."
              },
              accommodationOverview: {
                murchison: "Paraa Safari Lodge / Nile Safari Lodge (Luxury); Murchison River Lodge (Mid-range).",
                kibale: "Primate Lodge / Papaya Lake (Luxury); Isunga Lodge / Kibale Forest Camp (Mid-range).",
                queenElizabeth: "Mweya Safari Lodge (Luxury); Enganzi / Ihamba (Mid-range).",
                bwindi: "Mahogany Springs / Bwindi Lodge (Luxury); Silverback / Chameleon Hill (Mid-range)."
              },
              inclusions: [
                'Private 4x4 safari vehicle & fuel',
                'English-speaking professional driver/guide',
                'All UWA park entry fees',
                'Gorilla permit (Bwindi) & 3x Chimp permits',
                'Murchison & Kazinga Channel boat cruises',
                'Ziwa Rhino tracking & Batwa cultural visit',
                '7 nights accommodation & meals as indicated',
                'Bottled drinking water in the vehicle'
              ],
              exclusions: [
                'International flights and Uganda visa',
                'Travel and medical insurance',
                'Alcoholic and premium beverages',
                'Porter fees (recommended USD 10-20 per trek)',
                'Tips and gratuities',
                'Personal expenses'
              ],
              testimonial: {
                quote: "The Pearl of Africa in full! Seeing the tree-climbing lions and then the gorillas was a dream come true. The logistics were flawless and the guides were expert.",
                author: "Johannes V.",
                platform: "TripAdvisor",
                headline: "A Safari Masterpiece!"
              }
            }
          },
          {
            title: '7 Days Bird-watching Special',
            slug: 'birdwatching-special',
            price: '3850$',
            per: '1 person',
            category: 'Birding Safaris',
            durationDays: 7,
            wildlife: ['Bird', 'Shoebill', 'Gorilla', 'Chimpanzee'],
            description: "Africa's Premier Birding Destination. A specialist 7-day expedition targeting 1,090+ bird species, including the prehistoric Shoebill, the elusive Green-breasted Pitta, and 23 Albertine Rift endemics found nowhere else on earth.",
            destination: 'Entebbe, Mabamba, Murchison, Budongo, Kibale & Bwindi',
            bestFor: 'Serious birders, ornithologists, and bird photography enthusiasts seeking Africa\'s most sought-after avian species.',
            highlights: ['Shoebill Stork search (Mabamba)', 'Green-breasted Pitta (Kibale)', 'Royal Mile Birding (Budongo)', '23 Albertine Rift Endemics (Bwindi)'],
            image: `${import.meta.env.BASE_URL}images/bird.jpeg`,
            details: {
              duration: '7 Days',
              location: 'Uganda Birding Circuits',
              transport: 'Private 4x4 Safari Vehicle with Pop-up Roof',
              accommodation: 'Papyrus Guesthouse / Nile Safari Lodge / Primate Lodge / Mweya',
              routeCoordinates: [
                { name: 'Entebbe Botanical Gardens', lat: 0.0581, lng: 32.4831, description: 'Indigenous Lakeshore Forest' },
                { name: 'Mabamba Bay Wetland', lat: 0.1167, lng: 32.3333, description: 'Shoebill Stork Habitat' },
                { name: 'Ziwa Rhino Sanctuary', lat: 1.4870, lng: 32.0740, description: 'Lugogo Swamp Birding' },
                { name: 'Murchison Falls (Nile Bank)', lat: 2.2618, lng: 31.6963, description: 'Savannah & Wetland Species' },
                { name: 'Budongo Forest (Royal Mile)', lat: 1.6833, lng: 31.7167, description: 'Congo Basin Forest Birds' },
                { name: 'Kibale Forest', lat: 0.4431, lng: 30.3844, description: 'Pitta & Broadbill Site' },
                { name: 'Queen Elizabeth NP', lat: -0.1500, lng: 30.0900, description: '600+ Bird Species' },
                { name: 'Maramagambo Forest', lat: -0.2500, lng: 30.0000, description: 'Dark-capped Yellow Warbler' },
                { name: 'Bwindi Ruhija', lat: -1.0475, lng: 29.8000, description: 'Albertine Rift Endemics (Mubwindi Swamp)' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/shoebill.jpg`,
                `${import.meta.env.BASE_URL}images/bird.jpeg`,
                `${import.meta.env.BASE_URL}images/Nile.jpg`,
                `${import.meta.env.BASE_URL}images/chimp.jpeg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'ENTEBBE – BOTANICAL GARDENS BIRDING – LAKE VICTORIA SHORELINE – MABAMBA WETLAND ARRIVAL',
                  description: "Begin birding immediately at the Entebbe Botanical Gardens (est. 1898), targeting the Great Blue Turaco, African Grey Parrot, and various weavers. Explore the Lake Victoria shoreline for African Fish Eagles, Pink-backed Pelicans, and the Blue-breasted Bee-eater. Transfer to a hotel near Mabamba Bay for an evening briefing from your specialist birding guide.",
                  meals: 'Lunch, Dinner',
                  stay: 'Papyrus Guesthouse Entebbe / Boma Hotel Entebbe / Imperial Resort Beach Hotel'
                },
                {
                  day: 2,
                  title: 'MABAMBA SWAMP – SHOEBILL CANOE SEARCH – TRANSFER NORTH TO MURCHISON FALLS',
                  description: "At dawn, board traditional canoes in Mabamba Bay for a silent search for the prehistoric Shoebill Stork (Balaeniceps rex). Mabamba is one of the most reliable sites in Africa for this vulnerable giant. Also target the Papyrus Gonolek and Blue-headed Coucal. In the afternoon, drive north toward Murchison Falls NP, with a potential stop at Ziwa Rhino Sanctuary for further wetland birding.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Nile Safari Lodge / Paraa Safari Lodge (Luxury) / Murchison River Lodge (Mid-range) / Red Chilli Rest Camp (Budget)'
                },
                {
                  day: 3,
                  title: 'MURCHISON FALLS – GAME DRIVE BIRDING – NILE BOAT CRUISE – BUDONGO FOREST',
                  description: "Morning birding in the northern savannah for the Abyssinian Ground Hornbill, Saddle-billed Stork, and Denham's Bustard. Mid-morning, enjoy a Nile boat cruise to spot six kingfisher species and the African Skimmer. In the afternoon, bird the famous 'Royal Mile' in Budongo Forest, targeting the Chocolate-backed Kingfisher and the African Dwarf Kingfisher among giant mahogany trees.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Nile Safari Lodge / Paraa Safari Lodge (Luxury) / Murchison River Lodge (Mid-range) / Red Chilli Rest Camp (Budget)'
                },
                {
                  day: 4,
                  title: 'TRANSFER TO KIBALE FOREST – EN ROUTE BIRDING – BIGODI SWAMP AFTERNOON WALK',
                  description: "Drive south to Kibale Forest, stopping at the Fort Portal crater lakes for the African Finfoot and Great Blue Turaco. In the afternoon, walk through the Bigodi Wetland Sanctuary, a community-run paradise for the Papyrus Gonolek, White-winged Warbler, and multiple primate species.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Primate Lodge Kibale / Papaya Lake Lodge (Luxury) / Kibale Forest Camp / Isunga Lodge (Mid-range) / Chimpanzee Forest Guesthouse (Budget)'
                },
                {
                  day: 5,
                  title: 'KIBALE FOREST BIRDING – GREEN-BREASTED PITTA SEARCH – TRANSFER TO QUEEN ELIZABETH',
                  description: "A pre-dawn search for the legendary Green-breasted Pitta, one of Africa's most sought-after sightings. Also target the African Green Broadbill and the Bar-tailed Trogon in the forest canopy. In the afternoon, drive to Queen Elizabeth National Park, birding the Kamwenge road corridor for the Rwenzori Turaco and Doherty's Bushshrike.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mweya Safari Lodge (Luxury) / Enganzi Lodge / Ihamba Lakeside Safari Lodge (Mid-range) / Pumba Safari Cottages (Budget)'
                },
                {
                  day: 6,
                  title: 'QUEEN ELIZABETH – KASENYI PLAINS BIRDING – KAZINGA CHANNEL CRUISE – MARAMAGAMBO FOREST',
                  description: "Birding the Kasenyi plains for the Martial Eagle and Yellow-throated Longclaw. Afternoon boat cruise on the Kazinga Channel—one of the highest concentrations of waterbirds in Africa—to spot the African Skimmer and various egrets. Conclude with a forest walk in Maramagambo to see the Egyptian Fruit Bat colony and its associated predators.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mweya Safari Lodge (Luxury) / Enganzi Lodge / Ihamba Lakeside Safari Lodge (Mid-range) / Pumba Safari Cottages (Budget)'
                },
                {
                  day: 7,
                  title: 'BWINDI IMPENETRABLE FOREST – ALBERTINE RIFT ENDEMICS – RUHIJA BIRDING – RETURN',
                  description: "The grand finale at Bwindi's Ruhija sector (2,300m), targeting the 23 Albertine Rift endemics. Search for the African Green Broadbill (Grauer's), Shelley's Crimsonwing, and Grauer's Warbler at Mubwindi Swamp. In the afternoon, begin the return drive to Kampala or Entebbe for your departure flight.",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              keyTargetSpecies: {
                mabamba: "Shoebill Stork, Papyrus Gonolek, Lesser Jacana.",
                murchison: "Abyssinian Ground Hornbill, Saddle-billed Stork, Six Kingfisher species.",
                budongo: "Chocolate-backed Kingfisher, African Dwarf Kingfisher, Ituri Batis.",
                kibale: "Green-breasted Pitta, African Green Broadbill, African Pitta.",
                queenElizabeth: "African Skimmer, Yellow-throated Longclaw, Martial Eagle.",
                bwindi: "Shelley's Crimsonwing, Grauer's Warbler, Strange Weaver, African Green Broadbill."
              },
              usefulInfo: {
                bestTime: "Year-round. June–Sept and Dec–Feb (dry) for breeding activity; Oct–April for Palearctic migrants.",
                diversity: "1,090+ bird species recorded—the highest density per square kilometer in Africa.",
                equipment: "High-quality 8x42 or 10x42 binoculars and a 500mm+ telephoto lens are essential.",
                shoebill: "Uganda holds 10% of the global population of Shoebills. Mabamba is the most reliable site."
              },
              accommodationOptions: [
                { name: 'Nile Safari Lodge (Luxury)', description: 'Eco-luxury on the banks of the Victoria Nile.' },
                { name: 'Primate Lodge Kibale (Luxury)', description: 'Set deep within the forest, perfect for early pitta searches.' },
                { name: 'Mweya Safari Lodge (Luxury)', description: 'Iconic lodge with panoramic views of the Kazinga Channel.' },
                { name: 'Papyrus Guesthouse (Mid-range)', description: 'Boutique guesthouse in Entebbe specializing in birders.' }
              ],
              inclusions: [
                'Private 4x4 safari vehicle with pop-up roof',
                'Specialist professional birding guide',
                'All national park entry fees',
                'Canoe hire for Shoebill search (Mabamba)',
                'Murchison & Kazinga Channel boat cruises',
                'Maramagambo & Mubwindi Swamp guided walks',
                '6 nights accommodation & meals as indicated',
                'Bottled drinking water and soft drinks'
              ],
              exclusions: [
                'International flights and Uganda visa',
                'Optional chimpanzee permit (Kibale)',
                'Alcoholic and premium beverages',
                'Personal birding equipment (binoculars, scopes)',
                'Tips and gratuities',
                'Personal expenses'
              ],
              testimonial: {
                quote: "Seeing the Shoebill at Mabamba and the Green-breasted Pitta in Kibale in a single week was a dream. Uganda is undoubtedly Africa's premier birding destination.",
                author: "Sarah T.",
                platform: "TripAdvisor",
                headline: "A Birder's Paradise!"
              }
            }
          },
          {
            title: '10 Days Best of Uganda Gorillas',
            slug: '10-days-best-of-uganda-gorillas',
            price: '4500$',
            per: '1 person',
            category: 'Multi-Park Circuits',
            durationDays: 10,
            wildlife: ['Gorilla', 'Chimpanzee', 'Lion', 'Elephant', 'Rhino'],
            description: 'A deeply immersive 10-day journey covering the absolute best of Uganda: majestic waterfalls, chimpanzee tracking, savannah game drives, and the ultimate mountain gorilla trekking experience.',
            destination: 'Murchison, Kibale, Queen Elizabeth & Bwindi',
            bestFor: 'Wildlife and primate enthusiasts wanting a comprehensive safari.',
            highlights: ['Ziwa Rhino tracking', 'Murchison Falls boat cruise and hike', 'Kibale Chimpanzee tracking', 'Queen Elizabeth tree-climbing lions', 'Bwindi Mountain Gorilla Trekking', 'Crater Lakes walk & Kazinga Channel cruise'],
            image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.06.18-1.jpeg`,
            details: {
              duration: '10 Days',
              location: 'Uganda Safari Circuit',
              transport: '4x4 Safari Vehicle / Optional Return Flight',
              accommodation: 'Premium Lodges & Camps',
              routeCoordinates: [
                { name: 'Entebbe', lat: 0.0424, lng: 32.4435, description: 'Arrival' },
                { name: 'Ziwa Rhino Sanctuary', lat: 1.4870, lng: 32.0740, description: 'Rhino Tracking' },
                { name: 'Murchison Falls NP', lat: 2.2618, lng: 31.6963, description: 'Game Drives & Nile Cruise' },
                { name: 'Fort Portal', lat: 0.6716, lng: 30.2750, description: 'Scenic Albertine Rift' },
                { name: 'Kibale Forest NP', lat: 0.4431, lng: 30.3844, description: 'Chimp Tracking' },
                { name: 'Queen Elizabeth NP', lat: -0.1500, lng: 30.0900, description: 'Game Drive & Kazinga' },
                { name: 'Ishasha (QENP)', lat: -0.6500, lng: 29.6500, description: 'Tree-climbing Lions' },
                { name: 'Bwindi Impenetrable NP', lat: -1.0475, lng: 29.7022, description: 'Gorilla Trekking' },
                { name: 'Entebbe', lat: 0.0424, lng: 32.4435, description: 'Departure' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/rhino.jpeg`,
                `${import.meta.env.BASE_URL}images/waterfalls.jpg`,
                `${import.meta.env.BASE_URL}images/chimp.jpeg`,
                `${import.meta.env.BASE_URL}images/lions-tree.jpeg`,
                `${import.meta.env.BASE_URL}images/ug-gorilla.jpg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'Arrival in Entebbe / Kampala',
                  description: "Arrival at Entebbe airport, meet and greet. Transfer (approx. 30 minutes) to the hotel in the outskirts of Kampala overlooking Lake Victoria. No meals included today.",
                  meals: 'No meals',
                  stay: 'Lake Victoria Serena Resort'
                },
                {
                  day: 2,
                  title: 'Kampala to Murchison Falls via Ziwa Rhinos',
                  description: "Early breakfast, then depart to Nakitoma to Ziwa Rhino Sanctuary (approx. 3½ hours). Game walk to track the white rhinos. Proceed to Masindi for lunch at Court View Hotel. Continue to Murchison Falls National Park driving through a beautiful landscape. Arrive at the lodge, check in and relax.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Kabalega Wilderness Lodge / Pakuba Lodge'
                },
                {
                  day: 3,
                  title: 'Murchison Falls Game Drive & Nile Boat Cruise',
                  description: "Morning game drive in the northern bank of the river Nile looking out for elephants, Cape buffaloes, giraffe, hartebeests, and potentially lions or leopards. After lunch, take an afternoon boat cruise upstream to the 'bottom of the falls'. Stop a few meters from the 'Devil’s Cauldron' and marvel at hippos, crocodiles, and water birds. Disembark to hike to the 'top of the falls'. Our driver will pick you up from the top to return to the lodge.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Kabalega Wilderness Lodge / Pakuba Lodge'
                },
                {
                  day: 4,
                  title: 'Murchison Falls to Fort Portal',
                  description: "Drive to Fort Portal via Hoima in the breathtaking landscape of the Albertine western Rift Valley. This is a long drive (8–9 hours) with several stopovers for relaxation and sightseeing as we pass verdant countryside, traditional homesteads, and farms. Enjoy a packed/picnic lunch on the way. Check in and relax.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Hotel Mountains of the Moon'
                },
                {
                  day: 5,
                  title: 'Kibale Forest Chimp Tracking & Queen Elizabeth NP',
                  description: "Early transfer to Kibale Forest NP (approx. 45 minutes) for a morning dedicated to searching for chimpanzees and other primates. After lunch, proceed to Queen Elizabeth NP / Peninsula sector (approx. 3½ hours) for an evening game drive around the volcanic craters of Katwe.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mazike Valley Lodge'
                },
                {
                  day: 6,
                  title: 'Kasenyi Game Drive & Kazinga Channel Boat Cruise',
                  description: "Early morning game drive in Kasenyi area within Queen Elizabeth NP looking out for lions, buffaloes, elephants, and large numbers of Uganda Kobs. After lunch at Mweya Safari Lodge, we go for an afternoon boat cruise on the Kazinga Channel (approx. 2 hours) to spot hippos, great herds of buffalo, and diverse water birds.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mazike Valley Lodge'
                },
                {
                  day: 7,
                  title: 'Game Drive & Transfer to Ishasha Sector',
                  description: "A second early morning Kasenyi game drive. Stop for a packed picnic breakfast before driving to the southern Ishasha sector (approx. 2½ hours). Check in and have lunch at the camp. Afternoon game drive searching for the famous tree-climbing lions, large herds of buffaloes, elephants, and Uganda kobs.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Wilderness Camp'
                },
                {
                  day: 8,
                  title: 'Ishasha Sector to Bwindi Impenetrable NP',
                  description: "Morning game drive looking out for more animal species like buffaloes, sitatungas, and elephants that cross from Congo. After lunch at the camp, depart to Bwindi Impenetrable NP. The driving time will be between 2 and 3 hours depending on your permitted sector (Buhoma, Rushaga, Nkuringo, or Ruhija).",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mahogany Springs Lodge / Lake Mutanda Chameleon Hill Lodge'
                },
                {
                  day: 9,
                  title: 'Gorilla Trekking in Bwindi',
                  description: "Breakfast and take a short transfer to Bwindi NP headquarters for a briefing by local guides/rangers and trackers. Hike into the forest with your packed lunch. Trekking can take 1 to 8 hours over rough terrain at high altitudes. Spending 1 hour with the gorillas is an unforgettable and profound natural history experience. Return to the lodge to relax.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mahogany Springs Lodge / Lake Mutanda Chameleon Hill Lodge'
                },
                {
                  day: 10,
                  title: 'Bwindi to Entebbe & Departure',
                  description: "After breakfast, transfer to Entebbe airport (approx. 10-hour journey) stopping along the way for lunch before your evening departure flight. \n\n*Optional flight (supplement applies): Transfer to a local airstrip for a scheduled Aerolink flight to Entebbe airport to connect with your departure.",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              inclusions: [
                'Professional Driver-Guide',
                'Private 4x4 Safari Vehicle',
                'Gorilla trekking permit',
                'Chimpanzee tracking permit',
                'All accommodation & meals as indicated',
                'Murchison Falls park entrance and game drives',
                'Queen Elizabeth park entrance and game drives',
                'Murchison & Kazinga boat cruises',
                'Ziwa Rhino tracking fees',
                'Top of the falls hike'
              ],
              exclusions: [
                'International and optional domestic flights',
                'Uganda Visa fees',
                'Travel insurance',
                'Personal expenses and optional activities',
                'Tips for guides and staff'
              ],
              testimonial: {
                quote: "Seeing the tree-climbing lions right before heading into Bwindi for the gorillas was incredible. A brilliant structure for a 10-day trip.",
                author: "Paul S.",
                platform: "TripAdvisor",
                headline: "The Very Best of Uganda!"
              }
            }
          },
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
            image: `${import.meta.env.BASE_URL}images/wildlife.jpeg`,
            details: {
              duration: '11 Days',
              location: 'Uganda Classic Circuit',
              transport: '4x4 Safari Vehicle',
              accommodation: 'Kibale Forest Camp, Mazike Valley Lodge, Arcadia Cottages, Mihingo Lodge',
              routeCoordinates: [
                { name: 'Entebbe Airport', lat: 0.0424, lng: 32.4435, description: 'Arrival' },
                { name: 'Fort Portal', lat: 0.6931, lng: 30.2762, description: 'Moon Mountains View' },
                { name: 'Kibale National Park', lat: 0.4431, lng: 30.3844, description: 'Chimp Tracking' },
                { name: 'Queen Elizabeth NP', lat: -0.1500, lng: 30.0900, description: 'Savannah Safari' },
                { name: 'Ishasha Sector', lat: -0.6500, lng: 29.6500, description: 'Tree-climbing Lions' },
                { name: 'Bwindi Impenetrable NP', lat: -1.0475, lng: 29.7022, description: 'Gorilla Trekking' },
                { name: 'Lake Bunyonyi', lat: -1.2883, lng: 29.9167, description: 'Switzerland of Africa' },
                { name: 'Lake Mburo NP', lat: -0.6139, lng: 30.9347, description: 'Walking Safari' },
                { name: 'Uganda Equator', lat: -0.0022, lng: 32.0622, description: 'Photo Stop & Lunch' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/wildlife.jpeg`,
                `${import.meta.env.BASE_URL}images/chimp.jpeg`,
                `${import.meta.env.BASE_URL}images/Elizabeth.jpeg`,
                `${import.meta.env.BASE_URL}images/ug-gorilla.jpg`,
                `${import.meta.env.BASE_URL}images/Mburo.webp`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'Arrival in Entebbe',
                  description: "Arrival at Entebbe, meet and greet. Transfer from the airport to your accommodation in Entebbe.",
                  meals: 'No meals',
                  stay: 'Laico Lake Victoria Hotel / Karibu Guest House'
                },
                {
                  day: 2,
                  title: 'Transfer to Kibale National Park via Fort Portal',
                  description: "Start the journey towards Fort Portal. This small town lies in the shadow of the legendary \"Moon Mountains\", the Rwenzori Mountains. Lunch in Fort Portal and there’s a chance to visit the local market. During the afternoon we arrive in Kibale National Park, a large forest area. There you will stay in the Kibale Forest Camp in the middle of the forest. Around the camp there is a small footpath on which you can go alone on monkey search. With a little luck, you will see 3 different monkey species and possibly the great blue turaco.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Kibale Forest Camp'
                },
                {
                  day: 3,
                  title: 'Chimpanzee Tracking & Bigodi Swamp Walk',
                  description: "Early in the morning we head to the jungle to find chimpanzees. Watching our closest relatives in their natural habitat is a fantastic experience. Afternoon time is for relaxation or you can go on a walk in the Bigodi swamp where there are other chances to see the different species of monkeys. Kibale forest is known for it’s primates with 13 primate species, it is the most primate species rich in Africa. Overnight again at the Kibale Forest Camp.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Kibale Forest Camp'
                },
                {
                  day: 4,
                  title: 'Transfer to Queen Elizabeth National Park',
                  description: "In the morning drive towards Fort Portal, and then along the mystical Rwenzori Mountains towards Queen Elizabeth National Park. Already on the way there is the chance to see elephants, lions, buffalos, hyenas and a variety of antelopes. Lunch on the way or at the lodge in Queen Elizabeth National Park. The afternoon is at your disposal to enjoy the view and perhaps to observe the animals coming near the lodge.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mazike Valley Lodge / Buffalo Safari Lodge'
                },
                {
                  day: 5,
                  title: 'Morning Game Drive & Kazinga Channel Boat Cruise',
                  description: "We start our day quite early with a coffee or tea before we embark on a morning game drive in the park. Queen Elizabeth National Park is a diverse ecosystem of savannahs, tropical forests, rivers, swamps, lakes and volcanic craters. It is home to an incredible variety of wildlife. Safaris in this park offer excellent chances to see lions, warthogs, leopards, giant forest hogs, buffaloes, elephants, waterbucks, Uganda kob, topi, bushbucks and other animals. There are over 550 species of birds in the park. In the afternoon, enjoy a one-of-a-kind 2-hour boat cruise on the Kazinga Channel to Lake Edward. This boat tour offers excellent opportunities to see a variety of big game and birds. Dinner and overnight again in the lodge in the park.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mazike Valley Lodge'
                },
                {
                  day: 6,
                  title: 'Ishasha Sector (Tree-climbing Lions) to Bwindi Forest',
                  description: "Today we leave to Bwindi, the drive takes us through the Ishasha Sector of Queen Elizabeth National Park and there we embark on a safari in search of tree-climbing lions and other wildlife. Then continue towards Bwindi Impenetrable National Park. On the way if time allows, we visit Deo's Model Homestead, a local farmer who will show how he protects his fields against elephants on the edge of Queen Elizabeth National Park. Also a stop at Agartha's Taste of Uganda should not be missed. Agartha takes you to the local cuisine of the Bakiga, a local strain, while you can also enjoy the cooked food and then continue to Bwindi, where you will spend the night overlooking the gorilla forest.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mahogany Springs Lodge / Bakiga Lodge'
                },
                {
                  day: 7,
                  title: 'Mountain Gorilla Trekking in Bwindi',
                  description: "In the early morning, we head to the sanctuary of mountain gorillas, the spectacular Bwindi Impenetrable rainforest. It offers a dramatic, steeply wooded landscape with numerous mammals like the endangered mountain gorillas, the golden monkey, forest elephants, Buffalos, duikers, bushbucks, leopards and giant forest hogs. Meeting the mountain gorillas is an exciting and fascinating experience that you will never forget. Dinner and overnight again in the lodge.",
                  meals: 'Breakfast, Lunch (Packed), Dinner',
                  stay: 'Mahogany Springs Lodge / Bakiga Lodge'
                },
                {
                  day: 8,
                  title: 'Transfer to Lake Bunyonyi (Switzerland of Africa)',
                  description: "After breakfast, we leave the home of the gorillas and through the Kigezi Highlands, an area named by Winston Churchill as the \"Switzerland of Africa\". After a few hours you will reach Lake Bunyonyi. The property is situated on a hill with excellent views over the many islands of Bunyonyi Lake. Lake Bunyonyi is one of the deepest lakes in the world at a depth of 900 meters. Here there is the possibility to rent a dugout or to go swimming in the lake without danger. Over night and dinner at Arcadia Cottages.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Arcadia Cottages'
                },
                {
                  day: 9,
                  title: 'Transfer to Lake Mburo National Park',
                  description: "After breakfast drive we to Lake Mburo National Park which is on the way back to Entebbe. In the park you have the chance to see the largest antelope, the Eland antelope, as well as zebras that are found only here and in Kidepo National Park in Uganda. Overnight and dinner at Mihingo Lodge.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mihingo Lodge / Kigambira Safari Lodge'
                },
                {
                  day: 10,
                  title: 'Foot Safari & Optional Horseback Riding',
                  description: "Early in the morning, we go on a foot safari (optional) and get close to the animals. On this walk you also get close to the famous Ankole Long Horned Cattle. Optionally you could also have the opportunity to go on a horse back riding safari with the lodge or just stay and enjoy the lodge. Our drivers are also available once more for a safari in the park. Overnight and dinner at Mihingo Lodge.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mihingo Lodge'
                },
                {
                  day: 11,
                  title: 'Equator Stop & Return to Entebbe',
                  description: "In the morning you have time again to enjoy the lodge depending on your departure flight time. If it’s a late flight, we could take a self guided walk down to the waterhole. After a late breakfast, you will leave Lake Mburo National Park back to Entebbe. This trip brings us back across the equator where we shall stop for lunch and take a souvenir photo if you wish. There after transfer to Entebbe airport for your departure flight.",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              inclusions: [
                'Professional Driver-Guide',
                '4x4 Safari Vehicle with Pop-up roof',
                'Gorilla trekking permit',
                'Chimpanzee tracking permit',
                'All park entrance fees',
                'Kazinga Channel boat cruise',
                'Bigodi Swamp walk',
                'Accommodation & meals as listed',
                'Lake Mburo walking safari',
                'Equator visit'
              ],
              exclusions: [
                'International flights',
                'Uganda Visa fees',
                'Travel insurance',
                'Personal expenses (drinks, laundry)',
                'Tips for guides and staff',
                'Optional horseback riding in Lake Mburo'
              ],
              testimonial: {
                quote: "The diversity of this 11-day trip was mind-blowing. From the deep forest of Bwindi to the serene islands of Bunyonyi and the zebras of Mburo, it's the perfect Uganda circuit.",
                author: "The Miller Family",
                platform: "TripAdvisor",
                headline: "A Complete Ugandan Masterpiece!"
              }
            }
          },
          {
            title: '4 Days Luxury Honeymoon Safari',
            slug: '4-days-luxury-honeymoon',
            price: '3820$',
            per: '1 person',
            category: 'Fly-In & Premium',
            durationDays: 4,
            wildlife: ['Gorilla', 'Lion', 'Elephant', 'Hippo'],
            description: "The 4 Days Luxury Honeymoon Safari is Uganda's most romantic wildlife experience — a carefully crafted journey through the country's most spectacular and intimate destinations, designed specifically for couples beginning their life together. From a private candlelit dinner under the stars beside the Kazinga Channel to standing hand-in-hand in the ancient rainforest of Bwindi as a mountain gorilla family moves through the undergrowth just metres away, to a sunrise canoe on the glass-still waters of Lake Bunyonyi — every moment of this safari has been curated to create memories that will last a lifetime.",
            destination: 'Queen Elizabeth, Bwindi & Lake Bunyonyi',
            bestFor: 'Honeymooners, couples, and anniversary celebrations.',
            highlights: ['Private Kazinga Channel boat cruise', 'Ishasha tree-climbing lions', 'Bwindi Mountain Gorilla Trekking', 'Lake Bunyonyi sunrise canoe'],
            image: `${import.meta.env.BASE_URL}images/bunyonyi.jpg`,
            details: {
              duration: '4 Days',
              location: 'Southwestern Uganda',
              transport: 'Private 4x4 Luxury Safari Vehicle',
              accommodation: 'Mweya Safari Lodge / Clouds Mountain Gorilla Lodge / Mahogany Springs',
              routeCoordinates: [
                { name: 'Entebbe/Kampala', lat: 0.3476, lng: 32.5825, description: 'Romantic Start' },
                { name: 'Uganda Equator (Kayabwe)', lat: 0.0022, lng: 32.0622, description: 'Photo Stop' },
                { name: 'Queen Elizabeth NP (Mweya)', lat: -0.1500, lng: 30.0900, description: 'Private Safari & Boat Cruise' },
                { name: 'Ishasha Sector', lat: -0.6500, lng: 29.6500, description: 'Tree-climbing Lions' },
                { name: 'Bwindi Impenetrable NP', lat: -1.0475, lng: 29.7022, description: 'Gorilla Trekking' },
                { name: 'Lake Bunyonyi', lat: -1.2883, lng: 29.9167, description: 'Sunrise Canoe & Island Picnic' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/pic21.jpg`,
                `${import.meta.env.BASE_URL}images/pic5.jpg`,
                `${import.meta.env.BASE_URL}images/pic14.jpg`,
                `${import.meta.env.BASE_URL}images/pic22.jpg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'ENTEBBE/KAMPALA – SCENIC DRIVE – QUEEN ELIZABETH NATIONAL PARK – PRIVATE ARRIVAL',
                  description: "Your honeymoon safari begins with a warm welcome from your private driver/guide at your hotel in Entebbe or Kampala. Depart at 7:00 am for the scenic 5–6 hour drive westward to Queen Elizabeth National Park. Stop at the Uganda Equator monument at Kayabwe for your first memorable photograph. Continue through Mbarara and the Ankole cattle heartland before descending into the Rift Valley. Check in to your luxury lodge — your private cottage or suite has been prepared with flowers, rose petals, chilled champagne and a welcome card. Enjoy a private late afternoon game drive along the Mweya Peninsula, offering exceptional wildlife viewing with the Rwenzori Mountains as a backdrop. Conclude the day with a private honeymoon dinner overlooking the channel.",
                  meals: 'Lunch, Dinner',
                  stay: 'Mweya Safari Lodge — Honeymoon Suite (Luxury) / Kyambura Gorge Lodge / Enganzi Lodge'
                },
                {
                  day: 2,
                  title: 'PRIVATE GAME DRIVE – KAZINGA CHANNEL PRIVATE BOAT CRUISE – TRANSFER TO BWINDI',
                  description: "Rise before dawn for a private 4x4 game drive across the Kasenyi Plains. Return for a full breakfast on the terrace before your private boat cruise on the Kazinga Channel — exclusively for two, with an optional on-water picnic. After lunch, drive southward through the Ishasha sector to search for the famous tree-climbing lions. Continue through the dramatic Kigezi highlands to Bwindi Impenetrable Forest. Check in to your luxury forest lodge where a private suite with fireplace awaits you.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Clouds Mountain Gorilla Lodge / Mahogany Springs Lodge / Silverback Lodge / Chameleon Hill Lodge'
                },
                {
                  day: 3,
                  title: 'BWINDI IMPENETRABLE FOREST – MOUNTAIN GORILLA TREKKING – FOREST CELEBRATION DINNER',
                  description: "The day you will never forget. Enter Bwindi Impenetrable Forest for an unhurried hour with a habituated mountain gorilla family. Standing hand-in-hand in the ancient rainforest as gorillas move just metres away is a profound experience. Receive your gorilla trekking completion certificates before returning to the lodge for a late lunch. The afternoon is yours to relax or enjoy a couple's spa treatment. In the evening, enjoy a private candlelit celebration dinner arranged in the forest garden or on your cottage veranda.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Clouds Mountain Gorilla Lodge / Mahogany Springs Lodge / Silverback Lodge / Chameleon Hill Lodge'
                },
                {
                  day: 4,
                  title: 'LAKE BUNYONYI – SUNRISE CANOE – ISLAND PICNIC – RETURN TO ENTEBBE/KAMPALA',
                  description: "Drive to Lake Bunyonyi, the ideal conclusion to your honeymoon. Enjoy a private traditional wooden canoe paddle across the glass-calm water. Bunyonyi is bilharzia-free and safe for swimming — dive in together for a liberating experience. Your boatman will paddle you to a quiet island cove for a private lakeside picnic. After a final lunch on the lake terrace, begin the return journey to Kampala or Entebbe for your departure flight.",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              romanticTouches: [
                'Welcome arrangement: rose petals, chilled champagne and flowers on arrival',
                'Private candlelit dinners in the garden or on your veranda',
                'Gorilla trekking completion certificates: individually framed keepsakes',
                'In-room celebration cake and personalised card',
                'On-water picnic basket during the Kazinga Channel boat cruise',
                'Private island picnic at Lake Bunyonyi with blanket and hamper',
                'Couple\'s spa massage or bush bath (at select lodges)'
              ],
              usefulInfo: {
                bestTime: "June–Sept and Dec–Feb (dry seasons) for optimal trekking. Wet seasons are atmospheric and lush.",
                permits: "Gorilla permits (USD 800) must be booked 4–6 months in advance.",
                packing: "Sturdy hiking boots, long-sleeved clothes, garden gloves, rain jacket, and warm fleece for Bunyonyi.",
                intimacy: "Every activity is exclusively private — your vehicle, boat, canoe, and guide."
              },
              inclusions: [
                'Fully private safari with exclusive vehicle, guide, boat and canoe',
                'Private 4x4 luxury safari vehicle and specialist honeymoon guide',
                '2x Mountain gorilla trekking permits (USD 1,600 total for two)',
                'Gorilla trekking completion certificates',
                'Private Kazinga Channel boat cruise exclusively for two',
                'Welcome honeymoon arrangement (champagne, rose petals, flowers)',
                '3 nights luxury lodge accommodation',
                'All meals as per itinerary',
                'Bottled water and soft drinks in the vehicle'
              ],
              exclusions: [
                'International flights and Uganda entry visa (USD 50)',
                'Travel and medical insurance',
                'Optional couple\'s spa or massage treatments',
                'Optional private island picnic at Lake Bunyonyi',
                'Alcoholic beverages beyond welcome champagne',
                'Tips and gratuities',
                'Personal expenses'
              ],
              testimonial: {
                quote: "Everything was magic. From the gorillas in Bwindi to the private island picnic on Lake Bunyonyi, it was the dream start to our life together.",
                author: "Sarah & David",
                platform: "TripAdvisor",
                headline: "The Beginning of Our Greatest Adventure!"
              }
            }
          },
          {
            title: '3 Days Lake Bunyonyi Relaxation Package',
            slug: '3-days-bunyonyi-relaxation',
            price: '1100$',
            per: '1 person',
            category: 'Wildlife Safaris',
            durationDays: 3,
            wildlife: ['Bird'],
            description: "Africa's Second Deepest Lake. Experience the 'Switzerland of Africa'—a tranquil paradise of 29 islands, emerald terraced hills, and the mist-draped valleys of the Kigezi highlands. Completely safe for swimming and perfect for post-safari recovery.",
            destination: 'Lake Bunyonyi - Kabale District',
            bestFor: 'Honeymooners, families, and travelers seeking peace, birding, and authentic cultural engagement.',
            highlights: ['Punishment Island (Akampene) history', 'Canoe & Motorboat Island Hopping', 'Batwa & Bakiga Cultural Visits', 'Hilltop Panoramic Viewpoint'],
            image: `${import.meta.env.BASE_URL}images/bunyonyi.jpg`,
            details: {
              duration: '3 Days',
              location: 'Southwestern Uganda (Kabale)',
              transport: 'Private 4x4 Safari Vehicle & Boat/Canoe',
              accommodation: 'Arcadia Cottages / Birdnest Resort / Bunyonyi Overland',
              routeCoordinates: [
                { name: 'Kampala/Entebbe', lat: 0.3476, lng: 32.5825, description: 'Starting Point' },
                { name: 'Uganda Equator', lat: -0.0022, lng: 32.0622, description: 'Photo Stop' },
                { name: 'Igongo Cultural Centre', lat: -0.5833, lng: 30.6500, description: 'Lunch & Museum' },
                { name: 'Kabale Town', lat: -1.2500, lng: 29.9833, description: 'Highest Town in Uganda' },
                { name: 'Lake Bunyonyi', lat: -1.2833, lng: 29.9167, description: 'Base for Exploration' },
                { name: 'Punishment Island', lat: -1.2880, lng: 29.9130, description: 'Historic Site' },
                { name: 'Bwama Island', lat: -1.2950, lng: 29.9200, description: 'Leprosy Centre History' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/pic21.jpg`,
                `${import.meta.env.BASE_URL}images/pic22.jpg`,
                `${import.meta.env.BASE_URL}images/pic18.jpg`,
                `${import.meta.env.BASE_URL}images/batwa.jpg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'KAMPALA/ENTEBBE – EQUATOR – IGONGO CULTURAL CENTRE – KABALE – LAKE BUNYONYI',
                  description: "Depart at 7:00 am for a scenic 7–8 hour drive southwestward. Pass through rolling hills and banana groves before climbing into the spectacular Kigezi highlands, popularly known as the 'Switzerland of Africa'. Stop at the Equator for photographs and a water-flow demonstration. Continue to Mbarara for lunch at the Igongo Cultural Centre, exploring the history of the Ankole kingdom and the sacred Bagyendanwa royal drum. Reach Kabale—Uganda's highest town at 1,869 metres—before descending to Lake Bunyonyi (1,962m). Spanning 25km and plunging to depths of 900m, Bunyonyi is Africa's second deepest lake and is entirely free of crocodiles, hippos, and bilharzia. Transfer by motorboat to your lodge for a sunset drink overlooking the 29 islands.",
                  meals: 'Lunch, Dinner',
                  stay: 'Arcadia Cottages / Birdnest at Bunyonyi Resort (Luxury) / Bunyonyi Safaris Resort (Mid-range) / Bushara Island Camp (Budget)'
                },
                {
                  day: 2,
                  title: 'ISLAND HOPPING – CANOE & BOAT CRUISE – BATWA & BAKIGA CULTURAL VISIT',
                  description: "Wake to the sound of birdsong and mist rising off the lake. Set out on a guided tour of the lake's storied islands. Visit Akampene (Punishment Island), where unmarried pregnant girls were historically exiled. Explore Bwama Island, home to a leprosy rehabilitation centre established in 1921. Visit Njuyeera Island and Bushara Island for birding (over 200 species recorded). In the afternoon, hike to a Batwa community settlement and a Bakiga homestead. Learn about the extraordinary terracing skills of the Bakiga, sample Ekitooke (banana beer), and listen to ancient folk stories around the fire. This is community tourism at its most authentic and rewarding.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Arcadia Cottages / Birdnest at Bunyonyi Resort / Bunyonyi Safaris Resort / Bushara Island Camp'
                },
                {
                  day: 3,
                  title: 'SUNRISE PADDLE – NATURE WALK – HILLTOP VIEWPOINT – RETURN TO KAMPALA/ENTEBBE',
                  description: "Rise early for a sunrise canoe paddle across the glassy water—a peaceful highlight for many visitors. After a full cooked breakfast on the terrace, take a nature walk to spot kingfishers, weavers, and sunbirds. Climb to a hilltop viewpoint for a final panoramic view of the 29 islands spread across the shimmering water. Optional visit to the Abaheesi blacksmith community to see traditional iron smelting. Depart in the late morning, stopping at the Kabale weekly market and the Equator for final photos before arriving in Kampala or Entebbe in the early evening.",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              whyRelaxation: [
                'No crocodiles, hippos or bilharzia—safe for swimming',
                'Cool highland climate (18–22°C) year-round',
                'No traffic or noise—just birdsong and the rhythm of rural life',
                '29 unique islands to explore',
                'One of the most photogenic landscapes in East Africa'
              ],
              usefulInfo: {
                bestTime: "Year-round. Dry seasons (June–Sept, Dec–Feb) for clear views; wet seasons for lush green terraces and beautiful morning mist.",
                altitude: "1,962 metres above sea level. Evenings can be cool (12–15°C)—bring a light jacket.",
                swimming: "Lake Bunyonyi is one of the very few lakes in Africa completely safe for swimming.",
                culture: "The Bakiga ('people of the mountains') are known for their energetic Ekizino dance and centuries-old terracing skills."
              },
              accommodationOptions: [
                { name: 'Arcadia Cottages (Luxury)', description: 'Panoramic views from 25 private cottages perched on a high hill.' },
                { name: 'Birdnest at Bunyonyi Resort (Luxury)', description: 'Contemporary lakefront resort with a swimming pool and direct lake access.' },
                { name: 'Bunyonyi Safaris Resort (Mid-range)', description: 'Warm hospitality and community support programmes; popular with honeymooners.' },
                { name: 'Bushara Island Camp (Budget)', description: 'Eco-friendly camp on a private island with over 100 bird species.' }
              ],
              inclusions: [
                'Private 4x4 safari vehicle & fuel',
                'English-speaking professional driver/guide',
                'Guided island-hopping motorboat tour',
                'Traditional wooden canoe hire',
                'Guided Batwa & Bakiga cultural visits',
                'Hilltop and lakeshore nature walks',
                'Igongo Cultural Centre visit',
                '2 nights accommodation & meals as indicated',
                'Bottled drinking water in the vehicle'
              ],
              exclusions: [
                'International flights and Uganda visa',
                'Travel and medical insurance',
                'Optional activities (mountain biking, fishing, blacksmith visit)',
                'Alcoholic and premium beverages',
                'Tips and gratuities',
                'Personal expenses'
              ],
              testimonial: {
                quote: "The most peaceful place I've ever been. The sunrise canoe paddle was spiritual, and the history of Punishment Island was deeply moving. A true hidden gem.",
                author: "Emily W.",
                platform: "TripAdvisor",
                headline: "The Switzerland of Africa!"
              }
            }
          },

          {
            title: '5 Days Cultural Heritage Safari',
            slug: '5-days-cultural-heritage-v2',
            price: '2250$',
            per: '1 person',
            category: 'Cultural & Heritage',
            durationDays: 5,
            description: 'Immersive encounters with local communities, heritage sites, and traditional leaders.',
            destination: 'Central & Western Uganda',
            bestFor: 'Culture-focused travelers and historians.',
            highlights: ['Batwa community encounter', 'Karamoja Manyattas', 'Uganda Martyrs Shrine'],
            image: `${import.meta.env.BASE_URL}images/batwa.jpg`,
            details: {
              duration: '5 Days',
              location: 'Multiple Cultural Sites',
              transport: 'Private Vehicle',
              accommodation: 'Community-integrated Lodges',
              itinerary: [
                { day: 1, title: 'Buganda Kingdom Tour', description: 'Visiting the Kasubi Tombs and King\'s Palace in Kampala.', meals: 'L, D', stay: 'Kampala' },
                { day: 2, title: 'The Sezibwa Falls', description: 'Exploring the spiritual significance of the falls.', meals: 'B, L, D', stay: 'Jinja' },
                { day: 3, title: 'To the West', description: 'Driving to Fort Portal for Toro Kingdom history.', meals: 'B, L, D', stay: 'Fort Portal' },
                { day: 4, title: 'Batwa Heritage', description: 'Immersive forest walk with the indigenous Batwa people.', meals: 'B, L, D', stay: 'Bwindi' },
                { day: 5, title: 'Igongo Cultural Center', description: 'Ankole culture museum and drive back.', meals: 'B, L', stay: 'N/A' }
              ],
              inclusions: ['Cultural guide', 'Palace entry fees', 'Batwa forest walk', 'Village visits'],
              testimonial: { quote: "Learning the history of the kingdoms changed my view of East Africa.", author: "Sofia G.", platform: "TripAdvisor", headline: "Deeply Moving!" }
            }
          },

          {
            title: '11 Days Best of Uganda & Rwanda Gorillas',
            slug: '11-days-uganda-rwanda-gorillas',
            price: '5100$',
            per: '1 person',
            category: 'East Africa & Beyond',
            durationDays: 11,
            wildlife: ['Gorilla', 'Chimpanzee', 'Lion', 'Elephant', 'Rhino'],
            description: 'The ultimate 11-day expedition combining Big Five game drives, chimpanzee tracking, Kazinga channel cruise, tree-climbing lions, and mountain gorilla trekking across Uganda and Rwanda.',
            destination: 'Uganda & Rwanda',
            bestFor: 'Wildlife enthusiasts seeking a comprehensive East African primate and savannah experience.',
            highlights: ['Ziwa Rhino tracking', 'Murchison Falls boat cruise & hike', 'Kibale Chimpanzee tracking', 'Queen Elizabeth tree-climbing lions', 'Rwanda Gorilla trekking', 'Kigali Genocide Memorial'],
            image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.00.49-1.jpeg`,
            details: {
              duration: '11 Days',
              location: 'Uganda & Rwanda',
              transport: 'Cross-border Safari Vehicle',
              accommodation: 'Multiple Premium Lodges',
              routeCoordinates: [
                { name: 'Entebbe Airport', lat: 0.0424, lng: 32.4435, description: 'Arrival' },
                { name: 'Ziwa Rhino Sanctuary', lat: 1.4870, lng: 32.0740, description: 'Rhino Tracking' },
                { name: 'Murchison Falls NP', lat: 2.2618, lng: 31.6963, description: 'Game Drives & Boat Cruise' },
                { name: 'Fort Portal', lat: 0.6716, lng: 30.2750, description: 'Scenic Drive & Stay' },
                { name: 'Kibale Forest NP', lat: 0.4431, lng: 30.3844, description: 'Chimp Tracking' },
                { name: 'Queen Elizabeth NP (Kasenyi)', lat: -0.1500, lng: 30.0900, description: 'Game Drives & Kazinga Cruise' },
                { name: 'Ishasha (QENP)', lat: -0.6500, lng: 29.6500, description: 'Tree-climbing Lions' },
                { name: 'Cyanika Border', lat: -1.3293, lng: 29.6836, description: 'Enter Rwanda' },
                { name: 'Kinigi / Volcanoes NP', lat: -1.4800, lng: 29.5400, description: 'Gorilla Trekking' },
                { name: 'Kigali', lat: -1.9441, lng: 30.0619, description: 'Departure' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/pic11.jpg`,
                `${import.meta.env.BASE_URL}images/pic1.jpg`,
                `${import.meta.env.BASE_URL}images/pic20.jpg`,
                `${import.meta.env.BASE_URL}images/pic14.jpg`,
                `${import.meta.env.BASE_URL}images/pic5.jpg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'Arrival at Entebbe / Kampala',
                  description: "Arrival at Entebbe airport, meet and greet. Transfer (approximately 30 minutes) to the hotel in the outskirts of Kampala overlooking Lake Victoria. No meals included today.",
                  meals: 'No meals',
                  stay: 'Lake Victoria Serena Resort'
                },
                {
                  day: 2,
                  title: 'Ziwa Rhino Tracking & Transfer to Murchison Falls',
                  description: "Early breakfast, then depart to Nakitoma to Ziwa Rhino Sanctuary. Game walk to track the white rhinos that are spending the hot hours mostly in the swampy areas. Proceed to Masindi for lunch at Court View Hotel. Continue to Murchison Falls National Park driving through a beautiful landscape that gets flat towards the north near the Victoria Nile. Check in and relax.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Kabalega Wilderness Lodge / Pakuba Lodge'
                },
                {
                  day: 3,
                  title: 'Game Drive & Boat Cruise to the Bottom of Murchison Falls',
                  description: "Morning game drive on the northern bank of the Nile looking out for elephants, lions, Cape buffalo, Rothschild's giraffe, hartebeest, Oribi, bushbuck, Bohor reedbuck, spotted hyena, and leopards. Back to the lodge for lunch. In the afternoon, a boat cruise upstream to the 'bottom of the falls', stopping near the 'Devil's Cauldron'. Marvel at hippos, crocodiles, and water birds like the Goliath heron, kingfisher, and the rare shoebill stork. Disembark and hike to the 'top of the falls' for a close view of the thunderous waterfall. Driver picks you up from the top (1½ hours transfer back).",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Kabalega Wilderness Lodge / Pakuba Lodge'
                },
                {
                  day: 4,
                  title: 'Drive from Murchison Falls to Fort Portal',
                  description: "Drive to Fort Portal via Hoima in the breathtaking landscape of the Albertine Western Rift Valley. It is a long drive (8-9 hours) with several stopovers for relaxation and sightseeing past verdant countryside, traditional homesteads, and farms. Enjoy a packed/picnic lunch on the way. Check in and relax.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Hotel Mountains of the Moon'
                },
                {
                  day: 5,
                  title: 'Kibale Chimpanzee Tracking & Transfer to Queen Elizabeth NP',
                  description: "Early transfer to Kibale Forest NP (45 minutes) for a morning of chimpanzee tracking and spotting other primates like L'Hoeste's, red colobus, and grey-cheeked mangabeys. After lunch, proceed to the Peninsula sector of Queen Elizabeth National Park (3½ hours) for an evening game drive around the volcanic craters of Katwe.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mazike Valley Lodge'
                },
                {
                  day: 6,
                  title: 'Kasenyi Game Drive & Kazinga Channel Boat Cruise',
                  description: "Early morning game drive in the Kasenyi area within Queen Elizabeth NP, looking for lions, buffaloes, elephants, and large numbers of Uganda Kobs. Lunch at Mweya Safari Lodge. In the afternoon, embark on a 2-hour boat cruise on the Kazinga Channel to spot hippos, great herds of buffalo, and diverse water birds.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mazike Valley Lodge'
                },
                {
                  day: 7,
                  title: 'Game Drive & Transfer to Ishasha Sector',
                  description: "A second early morning Kasenyi game drive. Stop for a packed picnic breakfast, then drive to the southern Ishasha sector (2½ hours). Check in and have lunch at the camp. Afternoon game drive searching for the famous tree-climbing lions, large herds of buffaloes, elephants, and Uganda kobs.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Wilderness Camp'
                },
                {
                  day: 8,
                  title: 'Ishasha Sector - Tree-climbing Lions',
                  description: "Morning game drive looking for birds, buffaloes, sitatungas, and elephants that cross from Congo, as well as lions. After lunch and relaxation, take a second afternoon game drive for more chances to observe tree-climbing lions and other magnificent game.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Wilderness Camp'
                },
                {
                  day: 9,
                  title: 'Ishasha to Volcanoes NP, Rwanda via Cyanika',
                  description: "After an early breakfast, depart for Volcanoes NP in Rwanda (9-10 hours). Cross the Kigezi mountains ('Switzerland of Africa') and Kisoro, stopping for lunch at Traveller's Rest—where Dian Fossey once stayed. Proceed to the Cyanika border post. After clearing immigration, continue to Ruhengeri and Kinigi at the base of the Virunga Volcanoes.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mountain Gorilla View Lodge'
                },
                {
                  day: 10,
                  title: 'Gorilla Trekking in Volcanoes National Park',
                  description: "Take a short drive to the Park Headquarters for etiquette briefing. Hike into the forest to track one of the 10 habituated gorilla groups. Spending 1 hour with these incredible creatures is a profound natural history experience. Return to the lodge for lunch and a free afternoon to relax.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mountain Gorilla View Lodge'
                },
                {
                  day: 11,
                  title: 'Return to Kigali & Departure',
                  description: "Early breakfast before departing to Kigali (2½ hours drive). Depending on flight schedules, visit the Genocide Memorial and a crafts village for souvenir shopping. Transfer to Kigali international airport for your departure.",
                  meals: 'Breakfast',
                  stay: 'N/A'
                }
              ],
              inclusions: [
                'All accommodation as listed',
                'All meals as per itinerary',
                'Cross-border safari vehicle & guide',
                'Ziwa Rhino tracking',
                'Murchison Falls boat cruise & hike',
                'Kibale Chimpanzee tracking permit',
                'Kazinga Channel boat cruise',
                'Rwanda Gorilla trekking permit',
                'All game drives and park entrance fees'
              ],
              exclusions: [
                'International flights',
                'Uganda & Rwanda Visa fees',
                'Travel insurance',
                'Tips and personal expenses'
              ],
              testimonial: {
                quote: "The ultimate East African adventure. Seeing the tree-climbing lions and then the gorillas just a few days later was unbelievable.",
                author: "The Williams Family",
                platform: "TripAdvisor",
                headline: "A Complete Safari Masterpiece"
              }
            }
          },

          {
            title: '5 Days Dubai Luxury Holiday',
            slug: '5-days-dubai-escape',
            price: '7600$',
            per: '1 person',
            category: 'East Africa & Beyond',
            durationDays: 5,
            wildlife: [],
            description: 'Luxury city escapes and desert adventures in the heart of the Middle East.',
            destination: 'Dubai, UAE',
            bestFor: 'Luxury holidaymakers and corporate incentive groups.',
            highlights: ['Desert safari with dinner', 'Burj Khalifa VIP visit', 'Marina luxury cruise'],
            image: `${import.meta.env.BASE_URL}images/dubai.webp`,
            details: {
              duration: '5 Days',
              location: 'Dubai City & Desert',
              transport: 'Private Chauffeur',
              accommodation: 'Burj Al Arab / Atlantis The Royal',
              itinerary: [
                { day: 1, title: 'Arrival & Marina Cruise', description: 'Luxury yacht dinner in Dubai Marina.', meals: 'D', stay: 'Marina Luxury' },
                { day: 2, title: 'City Wonders', description: 'Visit Burj Khalifa and the Palm Jumeirah.', meals: 'B, L, D', stay: 'Marina Luxury' },
                { day: 3, title: 'Desert Safari', description: 'Dune bashing and VIP dinner in the Arabian desert.', meals: 'B, D', stay: 'Marina Luxury' },
                { day: 4, title: 'Shopping & Leisure', description: 'Visit to Dubai Mall and the Museum of the Future.', meals: 'B', stay: 'Marina Luxury' },
                { day: 5, title: 'Departure', description: 'Chauffeur transfer to the airport.', meals: 'B', stay: 'N/A' }
              ],
              inclusions: ['VIP entry fees', 'Limo transfers', 'Luxury accommodation'],
            }
          },
        ]
      }
    ]
  },
  aboutPage: {
    visionMission: {
      hero: {
        title: 'Vision & Mission',
        description: 'Come Again Tours and Travels promise to provide every client with a well-organized, enjoyable, and memorable safari experience.',
        image: `${import.meta.env.BASE_URL}images/pic21.jpg`
      },
      mission: {
        title: 'Mission',
        content: 'To be a leading and highly professional tours operator that offers unique, adventure-filled, breathtaking, comfort, and memorable travel services; while promoting cultural exchange local tourism, and sustainable travel practices.',
        image: `${import.meta.env.BASE_URL}images/pic14.jpg`
      },
      vision: {
        title: 'Vision',
        content: 'To be the most trusted and preferred travel and tour company, delivering unforgettable experiences and seamless journeys that inspire clients to explore the world with confidence and joy.',
        image: `${import.meta.env.BASE_URL}images/pic8.jpg`
      },
      objectives: {
        title: 'Our Objectives',
        items: [
          {
            title: 'Customer Satisfaction',
            description: 'to ensure every traveler enjoys a seamless safe and enjoyable journey.'
          },
          {
            title: 'Greater Reach',
            description: 'To increase our services coverage locally and internationally to more destinations and regions.'
          },
          {
            title: 'Promote Tourism',
            description: 'to support local communities and environment by encouraging responsible and sustainable tourism.'
          },
          {
            title: 'Innovations',
            description: 'to modernize early tourism services using modern technology and tools so reach, to enhance client experience.'
          },
          {
            title: 'Professionalism',
            description: 'To maintain a team of well-trained, courteous, and efficient passionate travel experts.'
          }
        ],
        image: `${import.meta.env.BASE_URL}images/Objectives.jpeg`
      }
    },
    team: {
      hero: {
        title: 'Team',
        description: 'Our dedicated professionals are committed to providing unforgettable safari experiences. With deep local expertise, we ensure every journey through East Africa is seamless and unique.',
        image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-26-at-09.39.51-1024x684.jpeg`
      },
      members: [
        {
          name: 'Kawanguzi Wilson',
          position: 'Managing Director',
          image: `${import.meta.env.BASE_URL}images/wilson.jpeg`
        },
        {
          name: 'Luliibe Hussein',
          position: 'Operations Manager',
          image: `${import.meta.env.BASE_URL}images/Luliibe.jpeg`
        },
        {
          name: 'Bettina Ziporah',
          position: 'Sales & Marketing Manager',
          image: `${import.meta.env.BASE_URL}images/Bettina.jpeg`
        },
        {
          name: 'Aminah Abu baker',
          position: 'Reservation manager',
          image: `${import.meta.env.BASE_URL}images/Aminah.jpeg`
        },
        {
          name: 'Masitula Nangobi',
          position: 'Reservation officer',
          image: `${import.meta.env.BASE_URL}images/masitula.jpeg`
        },
        {
          name: 'Nanyunja Ramlah',
          position: 'Accountant',
          image: `${import.meta.env.BASE_URL}images/Nanyunja Ramlah.jpeg`
        },
        {
          name: 'Jan Havlicheck',
          position: 'Consultant',
          image: `${import.meta.env.BASE_URL}images/Jan.jpeg`
        },
        {
          name: 'Asiima Crisen',
          position: 'IT & Systems Administrator',
          image: `${import.meta.env.BASE_URL}images/asiima.png`
        },
        {
          name: 'Issa Ssesanga',
          position: 'Head Guide',
          image: `${import.meta.env.BASE_URL}images/Issa.jpeg`
        },
        {
          name: 'Ramathan Muwonge',
          position: 'Guide',
          image: `${import.meta.env.BASE_URL}images/Ramathan.jpeg`
        },
        {
          name: 'Patrick kikonyogo',
          position: 'Guide',
          image: `${import.meta.env.BASE_URL}images/kikonyogo.jpeg`
        },
      ]
    }
  },
  contactPage: {
    hero: {
      title: 'Contact',
      description: 'Come Again Tours and Travels For bookings, inquiries, and customized safari packages, reach out to us today:',
      image: `${import.meta.env.BASE_URL}images/contact.jpg`
    },
    intro: {
      paragraph: 'With Come Again Tours and Travels, you will explore the beauty of Uganda and beyond with confidence, comfort, and joy.',
      heading: 'Planning your next adventure? Let Come Again Tours and Travels create a perfect safari experience for you.'
    },
    getInTouch: {
      title: 'Get in Touch',
      motto: "More Than a Safari, It's a Story.",
      phone: '+256-774-243-747',
      email: 'info@comeagaintoursandtravels.com',
      location: 'Kampala, Uganda'
    }
  },
  services: [
    {
      title: 'Gorilla Trekking Safaris',
      description: 'Uganda is home to the rare and endangered mountain gorillas found in Bwindi Impenetrable National Park and Mgahinga Gorilla National Park. Come Again Tours and Travels organizes well-planned gorilla trekking packages.',
      image: `${import.meta.env.BASE_URL}images/pic5.jpg`
    },
    {
      title: 'Wildlife Safaris',
      description: 'We offer classic wildlife safaris to Uganda\'s most famous national parks including: Queen Elizabeth National Park, Murchison Falls National Park, Kidepo Valley National Park, and Lake Mburo National Park among others.',
      image: `${import.meta.env.BASE_URL}images/lions-tree.jpeg`
    },
    {
      title: 'Chimpanzee Tracking and Primate Safaris',
      description: 'Uganda is known as the primate capital of the world. At Come Again Tours and Travels, we provide thrilling chimpanzee tracking experiences in Kibale Forest, Budongo Forest, and Kyambura Gorge.',
      image: `${import.meta.env.BASE_URL}images/chimp.jpeg`
    },
    {
      title: 'Hotel Bookings and Accommodation Arrangements',
      description: 'Looking for the best places to stay during your safari? We handle all your hotel and lodge bookings, ensuring you get the best comfort within your budget.',
      image: `${import.meta.env.BASE_URL}images/hotel.webp`
    },
    {
      title: 'Airport Pickups and Transportation Services',
      description: 'We provide reliable airport pickup and drop-off services at Entebbe International Airport. We also offer car hire services with professional drivers for all your travel needs.',
      image: `${import.meta.env.BASE_URL}images/airport.jpeg`
    },
    {
      title: 'Adventure and Leisure Travel',
      description: 'For those seeking adrenaline and relaxation, we offer white-water rafting, bungee jumping, boat cruises, and scenic leisure tours across the Pearl of Africa.',
      image: `${import.meta.env.BASE_URL}images/rafting.jpg`
    },
    {
      title: 'Cultural and Community Tours',
      description: 'Experience the rich culture and traditions of Uganda. We organize community visits, cultural dance performances, and tours to historic heritage sites.',
      image: `${import.meta.env.BASE_URL}images/batwa.jpg`
    },
    {
      title: 'City Tours and Educational Trips',
      description: 'Explore the vibrant cities of Uganda and East Africa. We also organize educational tours for students and researchers interested in various fields.',
      image: `${import.meta.env.BASE_URL}images/city.jpg`
    },
    {
      title: 'Custom and Other Packages',
      description: 'We understand that every traveler has unique needs. We can customize your safari package to match your specific interests, time, and budget.',
      image: `${import.meta.env.BASE_URL}images/bird.jpeg`
    }
  ],
  reviews: [
    {
      author: 'Marika Zem',
      quote: 'During our family vacation, we really enjoyed the beautiful nature of green Uganda, we definitely recommend a stay of at least 7 to 10 days. The guide was nice, flexible and helpful.',
      stars: 5
    },
    {
      author: 'Nanyunja l',
      quote: 'It was really amazing and gave me and my family the best memorable tour with the best tour guides and a very well trained driver. we really had a great time. thank you so much come again safaris',
      stars: 5
    },
    {
      author: 'Dagmar P',
      quote: 'Our trip to Uganda was amazing. We spent there 12 beautiful days. Thanks to our guide, Issa, we have unforgettable memories of this country. I think this country has a lot to offer and it’s really Pearl of Africa.',
      stars: 5
    }
  ],
  packages: [
    {
      id: 1,
      title: '5 Days Rwanda Gorilla Experience',
      price: '3420$',
      per: '1 person',
      destination: 'Volcanoes National Park',
      highlights: ['Gorilla trekking', 'Golden monkeys', 'Kigali city tour'],
      bestFor: 'Luxury primate travelers.',
      description: 'An immersive 5-day journey through Rwanda\'s pristine Volcanoes National Park.',
      image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-26-at-09.39.51-1024x684.jpeg`
    },
    {
      id: 2,
      title: '7 Days Uganda Wildlife Classic',
      price: '2340$',
      per: '1 person',
      destination: 'Murchison, Kibale, Queen Elizabeth, Bwindi',
      highlights: ['Gorilla & chimp tracking', 'Multiple game drives', 'Boat cruises'],
      bestFor: 'First-time Uganda explorers.',
      description: 'Experience the classic beauty of Uganda\'s savanna and forests in this 7-day highlight tour.',
      image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.06.18-1.jpeg`
    },
    {
      id: 3,
      title: '12 Days Uganda Wildlife Adventure',
      price: '3850$',
      per: '1 person',
      destination: 'Murchison, Kibale, Queen Elizabeth, Bwindi, Lake Bunyonyi, Mburo',
      highlights: ['Big Five safari', 'Gorilla & chimp tracking', 'Sipi Falls'],
      bestFor: 'Luxury adventure seekers.',
      description: 'The ultimate 12-day journey covering the best of Uganda\'s wildlife and primate encounters.',
      image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.02.10.jpeg`
    }
  ],
  contact: {
    phones: ['+256-701-281-024', '+256-751-281-024', '+256-774-243-747'],
    emails: ['info@comeagaintoursandtravels.com', 'comeagaintours@gmail.com'],
    address: 'Kampala, Uganda',
    socials: {
      facebook: 'https://www.facebook.com/profile.php?id=100080915697458',
      twitter: '#',
      instagram: '#'
    }
  },
  gallery: {
    images: [
      { id: 1, title: 'Safari Experiences', url: `${import.meta.env.BASE_URL}images/image1.jpeg` },
      { id: 2, title: 'Safari Experiences', url: `${import.meta.env.BASE_URL}images/image2.jpeg` },
      { id: 3, title: 'Safari Experiences', url: `${import.meta.env.BASE_URL}images/image3.jpeg` },
      { id: 4, title: 'Safari Experiences', url: `${import.meta.env.BASE_URL}images/image4.jpeg` },
      { id: 5, title: 'Safari Experiences', url: `${import.meta.env.BASE_URL}images/image5.jpeg` },
      { id: 6, title: 'Safari Experiences', url: `${import.meta.env.BASE_URL}images/image6.jpeg` },
      { id: 7, title: 'Safari Experiences', url: `${import.meta.env.BASE_URL}images/image7.jpeg` },
      { id: 8, title: 'Safari Experiences', url: `${import.meta.env.BASE_URL}images/image8.jpeg` },
      { id: 9, title: 'Safari Experiences', url: `${import.meta.env.BASE_URL}images/image9.jpeg` },
      { id: 10, title: 'Safari Experiences', url: `${import.meta.env.BASE_URL}images/image10.jpeg` },
      { id: 11, title: 'Safari Experiences', url: `${import.meta.env.BASE_URL}images/image11.jpeg` },
      { id: 12, title: 'Safari Experiences', url: `${import.meta.env.BASE_URL}images/image12.jpeg` },
      { id: 13, title: 'Safari Experiences', url: `${import.meta.env.BASE_URL}images/image13.jpeg` },
      { id: 14, title: 'Safari Experiences', url: `${import.meta.env.BASE_URL}images/image14.jpeg` },
      { id: 15, title: 'Safari Vehicle', url: `${import.meta.env.BASE_URL}images/vehicle1.jpeg` },
      { id: 16, title: 'Safari Vehicle', url: `${import.meta.env.BASE_URL}images/vehicle2.jpeg` },
      { id: 17, title: 'Safari Vehicle', url: `${import.meta.env.BASE_URL}images/vehicle3.jpeg` },
      { id: 18, title: 'Safari Vehicle', url: `${import.meta.env.BASE_URL}images/vehicle4.jpeg` }
    ],
    videos: [
      { id: 1, title: 'Safari Highlight 1', thumbnail: `${import.meta.env.BASE_URL}images/image1.jpeg`, url: `${import.meta.env.BASE_URL}videos/video1.mp4`, description: 'Explore our unforgettable wildlife safari journeys.' },
      { id: 2, title: 'Safari Highlight 2', thumbnail: `${import.meta.env.BASE_URL}images/image2.jpeg`, url: `${import.meta.env.BASE_URL}videos/video2.mp4`, description: 'Explore our unforgettable wildlife safari journeys.' },
      { id: 3, title: 'Safari Highlight 3', thumbnail: `${import.meta.env.BASE_URL}images/image3.jpeg`, url: `${import.meta.env.BASE_URL}videos/video3.mp4`, description: 'Explore our unforgettable wildlife safari journeys.' },
      { id: 4, title: 'Safari Highlight 4', thumbnail: `${import.meta.env.BASE_URL}images/image4.jpeg`, url: `${import.meta.env.BASE_URL}videos/video4.mp4`, description: 'Explore our unforgettable wildlife safari journeys.' },
      { id: 5, title: 'Safari Highlight 5', thumbnail: `${import.meta.env.BASE_URL}images/image5.jpeg`, url: `${import.meta.env.BASE_URL}videos/video5.mp4`, description: 'Explore our unforgettable wildlife safari journeys.' },
      { id: 6, title: 'Safari Highlight 6', thumbnail: `${import.meta.env.BASE_URL}images/image6.jpeg`, url: `${import.meta.env.BASE_URL}videos/video6.mp4`, description: 'Explore our unforgettable wildlife safari journeys.' },
      { id: 7, title: 'Safari Highlight 7', thumbnail: `${import.meta.env.BASE_URL}images/image7.jpeg`, url: `${import.meta.env.BASE_URL}videos/video7.mp4`, description: 'Explore our unforgettable wildlife safari journeys.' },
      { id: 8, title: 'Safari Highlight 8', thumbnail: `${import.meta.env.BASE_URL}images/image8.jpeg`, url: `${import.meta.env.BASE_URL}videos/video8.mp4`, description: 'Explore our unforgettable wildlife safari journeys.' },
      { id: 9, title: 'Safari Highlight 9', thumbnail: `${import.meta.env.BASE_URL}images/image9.jpeg`, url: `${import.meta.env.BASE_URL}videos/video9.mp4`, description: 'Explore our unforgettable wildlife safari journeys.' },
      { id: 10, title: 'Safari Highlight 10', thumbnail: `${import.meta.env.BASE_URL}images/image10.jpeg`, url: `${import.meta.env.BASE_URL}videos/video10.mp4`, description: 'Explore our unforgettable wildlife safari journeys.' },
      { id: 11, title: 'Safari Highlight 11', thumbnail: `${import.meta.env.BASE_URL}images/image11.jpeg`, url: `${import.meta.env.BASE_URL}videos/video11.mp4`, description: 'Explore our unforgettable wildlife safari journeys.' },
      { id: 12, title: 'Safari Highlight 12', thumbnail: `${import.meta.env.BASE_URL}images/image12.jpeg`, url: `${import.meta.env.BASE_URL}videos/video12.mp4`, description: 'Explore our unforgettable wildlife safari journeys.' },
      { id: 13, title: 'Safari Highlight 13', thumbnail: `${import.meta.env.BASE_URL}images/image13.jpeg`, url: `${import.meta.env.BASE_URL}videos/video 13.mp4`, description: 'Explore our unforgettable wildlife safari journeys.' },
      { id: 14, title: 'Safari Highlight 14', thumbnail: `${import.meta.env.BASE_URL}images/image14.jpeg`, url: `${import.meta.env.BASE_URL}videos/video14.mp4`, description: 'Explore our unforgettable wildlife safari journeys.' },
      { id: 15, title: 'Safari Highlight 15', thumbnail: `${import.meta.env.BASE_URL}images/image1.jpeg`, url: `${import.meta.env.BASE_URL}videos/video15.mp4`, description: 'Explore our unforgettable wildlife safari journeys.' },
      { id: 16, title: 'Safari Highlight 16', thumbnail: `${import.meta.env.BASE_URL}images/image2.jpeg`, url: `${import.meta.env.BASE_URL}videos/video16.mp4`, description: 'Explore our unforgettable wildlife safari journeys.' },
      { id: 17, title: 'Safari Highlight 17', thumbnail: `${import.meta.env.BASE_URL}images/image3.jpeg`, url: `${import.meta.env.BASE_URL}videos/video17.mp4`, description: 'Explore our unforgettable wildlife safari journeys.' },
      { id: 18, title: 'Safari Highlight 18', thumbnail: `${import.meta.env.BASE_URL}images/image4.jpeg`, url: `${import.meta.env.BASE_URL}videos/video18.mp4`, description: 'Explore our unforgettable wildlife safari journeys.' }
    ]
  }
};
