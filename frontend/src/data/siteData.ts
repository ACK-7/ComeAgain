export const siteData = {
  logo: `${import.meta.env.BASE_URL}images/logo.png`,
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
          image: `${import.meta.env.BASE_URL}images/Busowoko-falls-rafting15-1024x679.jpeg`
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
        // { name: 'Face Book', icon: 'facebook', href: '#' },
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
        title: 'Featured Packages',
        packages: [
          {
            slug: '3-days-murchison-falls-safari',
            title: '3 Days Murchison Falls Safari',
            price: '1450$',
            per: '1 person',
            description: 'Expect powerful waterfalls where the Nile squeezes through a narrow gorge, exciting game drives with elephants, giraffes, lions and buffaloes.',
            destination: 'Murchison Falls National Park',
            bestFor: 'Short-stay travelers, business visitors, first-time safari guests.',
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
                `${import.meta.env.BASE_URL}images/rhino.jpeg`,
                `${import.meta.env.BASE_URL}images/Nile.jpeg`,
                `${import.meta.env.BASE_URL}images/lions-tree.jpeg`
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
            price: '1980$',
            per: '1 person',
            description: 'Experience the grandeur of Murchison Falls with the ultimate convenience of a scheduled flight. Enjoy aerial views of the Nile, exclusive delta cruises, and a premium stay at the iconic Paraa Safari Lodge.',
            destination: 'Murchison Falls National Park',
            bestFor: 'Luxury travelers, bird watchers, and those with limited time.',
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
                `${import.meta.env.BASE_URL}images/Murchison.jpeg`,
                `${import.meta.env.BASE_URL}images/Nile.jpeg`,
                `${import.meta.env.BASE_URL}images/rhino.jpeg`,
                `${import.meta.env.BASE_URL}images/lions-tree.jpeg`
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
            description: 'Expect diverse wildlife, the famous tree-climbing lions of Ishasha, boat cruises along the Kazinga Channel, and scenic crater lakes.',
            destination: 'Queen Elizabeth National Park',
            bestFor: 'Wildlife lovers, photographers, and scenery enthusiasts.',
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
                `${import.meta.env.BASE_URL}images/lions-tree.jpeg`,
                `${import.meta.env.BASE_URL}images/Nile.jpeg`,
                `${import.meta.env.BASE_URL}images/rhino.jpeg`
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
            price: '1800$',
            per: '1 person',
            description: 'Famous for mountain gorilla trekking. Expect dense rainforest, breathtaking hills, and unforgettable close encounters.',
            destination: 'Bwindi Impenetrable National Park',
            bestFor: 'Bucket-list travelers, luxury clients, honeymooners.',
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
                `${import.meta.env.BASE_URL}images/batwa.jpg`,
                `${import.meta.env.BASE_URL}images/Elizabeth.jpeg`,
                `${import.meta.env.BASE_URL}images/lions-tree.jpeg`
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
            title: '3 Days Kibale Chimpanzee & Bigodi Tour',
            slug: '3-days-kibale-chimpanzee-tour',
            price: '1400$',
            per: '1 person',
            description: 'Expect chimpanzee tracking, forest walks, monkeys, birds, and the beautiful Bigodi Wetland Sanctuary.',
            destination: 'Kibale National Park',
            bestFor: 'Primate lovers and nature enthusiasts.',
            highlights: ['Chimpanzee tracking', 'Bigodi wetland walk', 'Crater lake views'],
            image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.06.18-1.jpeg`,
            details: {
              duration: '3 Days',
              location: 'Kibale National Park',
              transport: '4x4 Private Vehicle',
              accommodation: 'Turaco Treetops / Kibale Forest Lodge',
              routeCoordinates: [
                { name: 'Kampala', lat: 0.3476, lng: 32.5825, description: 'Departure Point' },
                { name: 'Mubende', lat: 0.5633, lng: 31.3897, description: 'Short Break' },
                { name: 'Fort Portal', lat: 0.6931, lng: 30.2762, description: 'Tourism City' },
                { name: 'Kibale NP', lat: 0.4431, lng: 30.3844, description: 'Chimp Tracking' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.06.18-1.jpeg`,
                `${import.meta.env.BASE_URL}images/kasenda.webp`,
                `${import.meta.env.BASE_URL}images/batwa.jpg`,
                `${import.meta.env.BASE_URL}images/tea.webp`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'Drive to the Primate Capital of the World',
                  description: "Pickup from Kampala and drive towards Fort Portal. This scenic route offers views of tea plantations and Kibale forest. In the afternoon, visit the 'Top of the World' crater lakes for panoramic views of the Rwenzori mountains.",
                  meals: 'Lunch, Dinner',
                  stay: 'Turaco Treetops'
                },
                {
                  day: 2,
                  title: 'Chimpanzee Tracking & Bigodi Wetland Visit',
                  description: "Head to the park headquarters for a briefing before entering the forest in search of our closest cousins, the Chimpanzees. In the afternoon, explore the Bigodi Wetland Sanctuary for birds and monkeys.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Turaco Treetops'
                },
                {
                  day: 3,
                  title: 'Morning Forest Walk and Return',
                  description: "Enjoy a relaxed breakfast and an optional nature walk before beginning the drive back to Kampala, arriving in the late evening.",
                  meals: 'Breakfast, Lunch',
                  stay: 'N/A'
                }
              ],
              inclusions: [
                'Chimpanzee Tracking Permit',
                'Bigodi Wetland Nature Walk',
                'Professional Guide',
                'Meals & Lodging',
                'Crater Lake exploration'
              ],
              exclusions: [
                'International flights',
                'Personal insurance',
                'Optional extra activities'
              ],
              testimonial: {
                quote: "The chimpanzee tracking was surreal. Kibale is truly lush and beautiful, and the Bigodi walk was a fantastic surprise.",
                author: "James T.",
                platform: "TripAdvisor",
                headline: "Primate Paradise!"
              }
            }
          },
          {
            title: '5 Days Gorilla and Queen Elizabeth combo',
            slug: '5-days-gorilla-queen-combo',
            price: '1935$',
            per: '1 person',
            description: 'Combine the best of both worlds: mountain gorillas in Bwindi and the famous tree-climbing lions of Queen Elizabeth.',
            destination: 'Bwindi + Queen Elizabeth',
            bestFor: 'Travelers wanting wildlife + primates in one trip.',
            highlights: ['Gorilla trekking', 'Tree-climbing lions', 'Kazinga Channel boat safari'],
            image: `${import.meta.env.BASE_URL}images/goril.jpg`,
            details: {
              duration: '5 Days',
              location: 'Southwestern Uganda',
              transport: '4x4 Safari Vehicle',
              accommodation: 'Luxury Lodges',
              routeCoordinates: [
                { name: 'Kampala', lat: 0.3476, lng: 32.5825, description: 'Start' },
                { name: 'Queen Elizabeth NP', lat: -0.0245, lng: 30.1345, description: 'Game & Boat' },
                { name: 'Bwindi NP', lat: -1.0475, lng: 29.7022, description: 'Gorilla Trek' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.02.10.jpeg`,
                `${import.meta.env.BASE_URL}images/Elizabeth.jpeg`,
                `${import.meta.env.BASE_URL}images/lions-tree.jpeg`
              ],
              itinerary: [
                { day: 1, title: 'Transfer to Queen Elizabeth NP', description: 'After pickup, drive to Queen Elizabeth NP. Relax in the evening at the lodge.', meals: 'L, D', stay: 'Bush Lodge / Buffalo Safari Lodge' },
                { day: 2, title: 'Game Drive & Boat Channel', description: 'Morning game drive and afternoon boat cruise on Kazinga Channel.', meals: 'B, L, D', stay: 'Bush Lodge' },
                { day: 3, title: 'Ishasha Lions & Transfer to Bwindi', description: 'Search for tree-climbing lions in Ishasha before proceeds to Bwindi forest.', meals: 'B, L, D', stay: 'Bakiga Lodge' },
                { day: 4, title: 'Gorilla Trekking', description: 'The peak of the journey—meeting mountain gorillas in Bwindi forest.', meals: 'B, L, D', stay: 'Bakiga Lodge' },
                { day: 5, title: 'Return via Equator', description: 'Drive back to Kampala with a stop-over at the Equator for photos.', meals: 'B, L', stay: 'N/A' }
              ],
              inclusions: ['Gorilla Permit', 'Game Drives', 'Boat Cruise', 'Professional Guide', 'All Meals'],
              exclusions: ['Flights', 'Visas', 'Tips'],
              testimonial: { quote: "Best combo trip! Seeing both gorillas and lions in 5 days was perfectly paced.", author: "Linda K.", platform: "TripAdvisor", headline: "Wildlife & Primates!" }
            }
          },
          {
            title: '5 Days Murchison Falls and Chimps',
            slug: '5-days-murchison-chimps',
            price: '2340$',
            per: '1 person',
            description: 'A perfect mix of big game safaris and chimpanzee tracking in the mahogany forests.',
            destination: 'Murchison + Budongo Forest',
            bestFor: 'Wildlife + primate combination lovers.',
            highlights: ['Big game safari', 'Chimp tracking', 'Nile boat cruise'],
            image: `${import.meta.env.BASE_URL}images/murchison1.webp`,
            details: {
              duration: '5 Days',
              location: 'Murchison & Budongo',
              transport: '4x4 Safari Land Cruiser',
              accommodation: 'Nile Safari Lodge',
              itinerary: [
                { day: 1, title: 'Transfer & Rhino Tracking', description: 'Drive to Murchison with a stop at Ziwa Rhinos.', meals: 'L, D', stay: 'Packwach' },
                { day: 2, title: 'Murchison Safari', description: 'Game drive and afternoon boat cruise on the Nile.', meals: 'B, L, D', stay: 'Packwach' },
                { day: 3, title: 'Budongo Forest Chimps', description: 'Tracking chimpanzees in Budongo Forest.', meals: 'B, L, D', stay: 'Budongo Ecolodge' },
                { day: 4, title: 'Community & Scenery', description: 'Explore local communities and the Top of the Falls.', meals: 'B, L, D', stay: 'Budongo Ecolodge' },
                { day: 5, title: 'Return to Kampala', description: 'Enjoy a final morning in nature before the drive back.', meals: 'B, L', stay: 'N/A' }
              ],
              inclusions: ['Chimp Permit', 'Rhino Tracking', 'Boat Cruise', 'Park Fees'],
              exclusions: ['Flights', 'Personal Expenses'],
              testimonial: { quote: "Murchison is grand, and tracking chimps in the forest was a magical contrast.", author: "Peter S.", platform: "TripAdvisor", headline: "Nile & Primates!" }
            }
          },
          {
            title: '7 Days Uganda Wildlife Classic',
            slug: '7-days-uganda-wildlife-classic',
            price: '2340$',
            per: '1 person',
            description: 'A comprehensive tour of Murchison, Kibale, Queen Elizabeth, and Bwindi national parks.',
            destination: 'Murchison, Kibale, Queen Elizabeth, Bwindi',
            bestFor: 'First-time Uganda explorers.',
            highlights: ['Gorilla & chimp tracking', 'Multiple game drives', 'Boat cruises'],
            image: `${import.meta.env.BASE_URL}images/pearl.jpeg`,
            details: {
              duration: '7 Days',
              location: 'Uganda Safari Circuit',
              transport: '4x4 Safari Vehicle',
              accommodation: 'Standard Lodges',
              routeCoordinates: [
                { name: 'Kampala', lat: 0.3476, lng: 32.5825, description: 'Departure Point' },
                { name: 'Murchison Falls NP', lat: 2.2618, lng: 31.6963, description: 'Game Drives' },
                { name: 'Kibale Forest', lat: 0.4431, lng: 30.3844, description: 'Chimp Tracking' },
                { name: 'Queen Elizabeth NP', lat: -0.1500, lng: 30.0900, description: 'Game Drive' },
                { name: 'Bwindi NP', lat: -1.0475, lng: 29.7022, description: 'Gorilla Trekking' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/pearl.jpeg`
              ],
              itinerary: [
                { day: 1, title: 'Transfer to Murchison Falls', description: 'Detailed itinerary to be updated.', meals: 'L, D', stay: 'Standard Lodge' },
                { day: 2, title: 'Murchison Safari', description: 'Detailed itinerary to be updated.', meals: 'B, L, D', stay: 'Standard Lodge' },
                { day: 3, title: 'Transfer to Kibale', description: 'Detailed itinerary to be updated.', meals: 'B, L, D', stay: 'Standard Lodge' },
                { day: 4, title: 'Chimp Tracking & Queen Elizabeth', description: 'Detailed itinerary to be updated.', meals: 'B, L, D', stay: 'Standard Lodge' },
                { day: 5, title: 'Queen Elizabeth Safari', description: 'Detailed itinerary to be updated.', meals: 'B, L, D', stay: 'Standard Lodge' },
                { day: 6, title: 'Transfer to Bwindi & Gorilla Trekking', description: 'Detailed itinerary to be updated.', meals: 'B, L, D', stay: 'Standard Lodge' },
                { day: 7, title: 'Return to Kampala', description: 'Detailed itinerary to be updated.', meals: 'B, L', stay: 'N/A' }
              ],
              inclusions: ['Detailed inclusions to be added'],
              exclusions: ['Detailed exclusions to be added'],
              testimonial: { quote: 'Great experience!', author: 'Happy Guest', platform: 'TripAdvisor', headline: 'Amazing!' }
            }
          },
          {
            title: '12 Days Uganda Wildlife & Primate Adventure',
            slug: '12-days-uganda-wildlife-adventure',
            price: '3850$',
            per: '1 person',
            description: 'The ultimate luxury circuit covering the Big Five, Gorillas, Chimps, and the stunning Sipi Falls.',
            destination: 'Full Uganda Circuit',
            bestFor: 'Luxury and long-stay travelers.',
            highlights: ['Big Five safari', 'Gorilla & chimp trekking', 'Sipi Falls', 'Cultural tours'],
            image: `${import.meta.env.BASE_URL}images/wildlife.jpeg`,
            details: {
              duration: '12 Days',
              location: 'Full Uganda Circuit',
              transport: 'Private 4x4 Safari Vehicle',
              accommodation: 'Luxury Lodges',
              routeCoordinates: [
                { name: 'Entebbe', lat: 0.0424, lng: 32.4435, description: 'Arrival' },
                { name: 'Sipi Falls', lat: 1.3377, lng: 34.3781, description: 'Waterfalls' },
                { name: 'Murchison Falls NP', lat: 2.2618, lng: 31.6963, description: 'Big Five Safari' },
                { name: 'Kibale Forest', lat: 0.4431, lng: 30.3844, description: 'Chimp Tracking' },
                { name: 'Queen Elizabeth NP', lat: -0.1500, lng: 30.0900, description: 'Game Drive' },
                { name: 'Bwindi NP', lat: -1.0475, lng: 29.7022, description: 'Gorilla Trekking' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/wildlife.jpeg`
              ],
              itinerary: [
                { day: 1, title: 'Arrival', description: 'Detailed itinerary to be updated.', meals: 'D', stay: 'Luxury Lodge' },
                { day: 2, title: 'Transfer to Sipi Falls', description: 'Detailed itinerary to be updated.', meals: 'B, L, D', stay: 'Luxury Lodge' },
                { day: 3, title: 'Sipi Falls Hike', description: 'Detailed itinerary to be updated.', meals: 'B, L, D', stay: 'Luxury Lodge' },
                { day: 4, title: 'Transfer to Murchison Falls', description: 'Detailed itinerary to be updated.', meals: 'B, L, D', stay: 'Luxury Lodge' },
                { day: 5, title: 'Murchison Safari', description: 'Detailed itinerary to be updated.', meals: 'B, L, D', stay: 'Luxury Lodge' },
                { day: 6, title: 'Transfer to Kibale', description: 'Detailed itinerary to be updated.', meals: 'B, L, D', stay: 'Luxury Lodge' },
                { day: 7, title: 'Chimp Tracking', description: 'Detailed itinerary to be updated.', meals: 'B, L, D', stay: 'Luxury Lodge' },
                { day: 8, title: 'Transfer to Queen Elizabeth', description: 'Detailed itinerary to be updated.', meals: 'B, L, D', stay: 'Luxury Lodge' },
                { day: 9, title: 'Queen Elizabeth Safari', description: 'Detailed itinerary to be updated.', meals: 'B, L, D', stay: 'Luxury Lodge' },
                { day: 10, title: 'Transfer to Bwindi', description: 'Detailed itinerary to be updated.', meals: 'B, L, D', stay: 'Luxury Lodge' },
                { day: 11, title: 'Gorilla Trekking', description: 'Detailed itinerary to be updated.', meals: 'B, L, D', stay: 'Luxury Lodge' },
                { day: 12, title: 'Return to Entebbe', description: 'Detailed itinerary to be updated.', meals: 'B, L', stay: 'N/A' }
              ],
              inclusions: ['Detailed inclusions to be added'],
              exclusions: ['Detailed exclusions to be added'],
              testimonial: { quote: 'An incredible journey!', author: 'Happy Guest', platform: 'TripAdvisor', headline: 'The Best Safari!' }
            }
          },
          {
            title: '3 Days Jinja Adventure Escape',
            slug: '3-days-jinja-adventure',
            price: '1200$',
            per: '1 person',
            description: 'Thrilling white-water rafting, boat cruises to the Source of the Nile, and quad biking.',
            destination: 'Jinja - The Adventure Capital',
            bestFor: 'Youth groups, adventure seekers, and adrenaline junkies.',
            highlights: ['White Nile Grade 5 rafting', 'Source of the Nile boat ride', 'Quad biking safari'],
            image: `${import.meta.env.BASE_URL}images/rafting.jpg`,
            details: {
              duration: '3 Days',
              location: 'Jinja, Eastern Uganda',
              transport: 'Private Safari Car',
              accommodation: 'Jinja Nile Resort / Kingfisher Lodge',
              itinerary: [
                { day: 1, title: 'Transfer to Jinja & Source of Nile', description: 'Drive to Jinja via Mabira Forest. Boat ride to the exact Source of the Nile.', meals: 'L, D', stay: 'Jinja Nile Resort' },
                { day: 2, title: 'White Water Rafting', description: 'A full day of thrilling Grade 5 rafting on the Victoria Nile.', meals: 'B, L, D', stay: 'Jinja Nile Resort' },
                { day: 3, title: 'Quad Biking & Return', description: 'Morning quad biking through local villages and returning to Kampala.', meals: 'B, L', stay: 'N/A' }
              ],
              inclusions: ['Rafting fees', 'Boat ride', 'All meals', 'Transportation'],
              testimonial: { quote: "The rafting was insane! Definitely the highlight of my life.", author: "Tom H.", platform: "TripAdvisor", headline: "Adrenaline Central!" }
            }
          },
          {
            title: '2 Days Lake Mburo Getaway',
            slug: '2-days-lake-mburo-safari',
            price: '750$',
            per: '1 person',
            description: 'Expect zebras, impalas, walking safaris and boat rides in a relaxed savannah experience.',
            destination: 'Lake Mburo National Park',
            bestFor: 'Short weekend travelers.',
            highlights: ['Walking safari', 'Boat ride', 'Zebra sightings'],
            image: `${import.meta.env.BASE_URL}images/Mburo.webp`,
            details: {
              duration: '2 Days',
              location: 'Kiruhura, Western Uganda',
              transport: '4x4 Safari Land Cruiser',
              accommodation: 'Mihingo Lodge / Kigambira Safari Lodge',
              itinerary: [
                { day: 1, title: 'Arrival & Boat Cruise', description: 'Drive to Lake Mburo. Afternoon boat cruise to see hippos and crocodiles.', meals: 'L, D', stay: 'Mihingo Lodge' },
                { day: 2, title: 'Bush Walk & Return', description: 'Morning guided nature walk to see zebras and giraffes before departure.', meals: 'B, L', stay: 'N/A' }
              ],
              inclusions: ['Nature walk', 'Park fees', 'Professional guide'],
              testimonial: { quote: "A peaceful and beautiful park. The walking safari is unique in Uganda.", author: "Claire B.", platform: "TripAdvisor", headline: "The Zebra Paradise!" }
            }
          },
          {
            title: '4 Days Sipi & Mount Elgon',
            slug: '4-days-sipi-falls-elgon',
            price: '1280$',
            per: '1 person',
            description: 'Stunning waterfalls, hiking trails, and authentic Arabica coffee tours.',
            destination: 'Mount Elgon National Park',
            bestFor: 'Nature & hiking lovers.',
            highlights: ['Sipi Falls hike', 'Coffee tour', 'Scenic mountain views'],
            image: `${import.meta.env.BASE_URL}images/sipii.webp`,
            details: {
              duration: '4 Days',
              location: 'Kapchorwa, Eastern Uganda',
              transport: 'Private Vehicle',
              accommodation: 'Sipi River Lodge',
              itinerary: [
                { day: 1, title: 'Transfer to Sipi', description: 'Drive East through Jinja to the foothills of Mt Elgon.', meals: 'L, D', stay: 'Sipi River Lodge' },
                { day: 2, title: 'Three Waterfalls Hike', description: 'Full day hike visiting all three levels of the Sipi Falls.', meals: 'B, L, D', stay: 'Sipi River Lodge' },
                { day: 3, title: 'Mount Elgon Hike', description: 'Higher altitude hike on the slopes of Mt Elgon.', meals: 'B, L, D', stay: 'Sipi River Lodge' },
                { day: 4, title: 'Coffee Tour & Return', description: 'Learn how local Arabica coffee is grown and roasted before return.', meals: 'B, L', stay: 'N/A' }
              ],
              inclusions: ['Hiking guides', 'Waterfall entry', 'Coffee tour experience'],
              testimonial: { quote: "The views from Sipi Falls are the most beautiful in Uganda.", author: "Elena R.", platform: "TripAdvisor", headline: "Mountain Bliss!" }
            }
          },
          {
            title: '6 Days Rwenzori Trekking Experience',
            slug: '6-days-rwenzori-trekking',
            price: '2550$',
            per: '1 person',
            description: 'Climb the "Mountains of the Moon" with snow-capped peaks and unique alpine vegetation.',
            destination: 'Rwenzori Mountains National Park',
            bestFor: 'Serious hikers & adventure seekers.',
            highlights: ['Mountain trekking', 'Unique alpine vegetation', 'Snow-capped peaks'],
            image: `${import.meta.env.BASE_URL}images/Rwenzori.jpg`,
            details: {
              duration: '6 Days',
              location: 'Kasese, Rwenzori Mountains',
              transport: 'Guided Trekking',
              accommodation: 'Mountain Huts / High-altitude camping',
              itinerary: [
                { day: 1, title: 'Drive to Kasese', description: 'Arrival and mountain preparation briefing.', meals: 'D', stay: 'Kasese' },
                { day: 2, title: 'Ascent to Sine Camp', description: 'Beginning the trek through forest zones.', meals: 'B, L, D', stay: 'Sine Camp' },
                { day: 3, title: 'To Mutinda Camp', description: 'Trekking through giant lobelias and heather.', meals: 'B, L, D', stay: 'Mutinda Camp' },
                { day: 4, title: 'The High Peaks', description: 'Reaching high altitude camps with glacial views.', meals: 'B, L, D', stay: 'Bugata Camp' },
                { day: 5, title: 'Summit Day / Decent', description: 'Pushing towards the peak or beginning the ridge walk back.', meals: 'B, L, D', stay: 'Sine Camp' },
                { day: 6, title: 'Arrival at Base', description: 'Final decent and return to Kasese town.', meals: 'B, L', stay: 'N/A' }
              ],
              inclusions: ['Mountain guides', 'Porters', 'Camping gear', 'National park fees'],
              testimonial: { quote: "A brutal but beautiful climb. The glaciers in the heart of Africa are amazing.", author: "Mark W.", platform: "TripAdvisor", headline: "The Moon Mountains!" }
            }
          },
          {
            title: '3 Days Kidepo Wilderness Safari',
            slug: '3-days-kidepo-wilderness',
            price: '1780$',
            per: '1 person',
            description: 'Untouched wilderness, large herds of buffaloes, and cultural encounters with the Karamojong.',
            destination: 'Kidepo Valley National Park',
            bestFor: 'Exclusive safari lovers seeking untouched nature.',
            highlights: ['Remote savannah landscapes', 'Large buffalo herds', 'Cultural visit to Karamojong Manyattas'],
            image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.05.20.jpeg`,
            details: {
              duration: '3 Days',
              location: 'Kaabong, Northern Uganda',
              transport: '4x4 Private Safari Vehicle',
              accommodation: 'Apoka Safari Lodge / Kidepo Savannah Lodge',
              itinerary: [
                { day: 1, title: 'Arrival in the Wilderness', description: 'Drive or fly to Kidepo. Evening game drive in the Narus Valley.', meals: 'L, D', stay: 'Apoka Safari Lodge' },
                { day: 2, title: 'Wildlife & Culture', description: 'Morning game drive to see lions and ostriches. Afternoon visit to a Karamojong community.', meals: 'B, L, D', stay: 'Apoka Safari Lodge' },
                { day: 3, title: 'Final Game Drive & Departure', description: 'Early morning game drive before returning to Kampala.', meals: 'B, L', stay: 'N/A' }
              ],
              inclusions: ['Community visit', 'Game drives', 'Park fees', 'Guide'],
              testimonial: { quote: "Most authentic wilderness in Africa. Kidepo is a hidden gem.", author: "Sven H.", platform: "TripAdvisor", headline: "Pure Wilderness!" }
            }
          },
          {
            title: '3 Days Semuliki & Hot Springs',
            slug: '3-days-semuliki-safari',
            price: '1450$',
            per: '1 person',
            description: 'Expect boiling hot springs, tropical forest, and exceptional birdwatching.',
            destination: 'Semuliki National Park',
            bestFor: 'Nature lovers, birders, and geology enthusiasts.',
            highlights: ['Sempaya hot springs (Male & Female)', 'Birdwatching', 'Tropical forest walks'],
            image: `${import.meta.env.BASE_URL}images/Sempaya.jpeg`,
            details: {
              duration: '3 Days',
              location: 'Bundibugyo, Western Uganda',
              transport: 'Private Safari Cruiser',
              accommodation: 'Semuliki Safari Lodge / Mountains of the Moon',
              itinerary: [
                { day: 1, title: 'Transfer to Semuliki', description: 'Drive via Fort Portal. Night walk in the forest to see nocturnal animals.', meals: 'L, D', stay: 'Semuliki Safari Lodge' },
                { day: 2, title: 'Sempaya Hot Springs', description: 'Experience the boiling water experiment and a nature walk to find primates.', meals: 'B, L, D', stay: 'Semuliki Safari Lodge' },
                { day: 3, title: 'Birding & Return', description: 'Morning bird watching session and drive back to Kampala.', meals: 'B, L', stay: 'N/A' }
              ],
              inclusions: ['Hot springs visit', 'Forest walk fees', 'Professional guide'],
              testimonial: { quote: "Cooking eggs in the hot springs was a highlight for the kids!", author: "Rosa F.", platform: "TripAdvisor", headline: "Unique Nature!" }
            }
          },
          {
            title: '3 Days Mount Moroto Adventure',
            slug: '3-days-moroto-adventure',
            price: '1850$',
            per: '1 person',
            description: 'Rugged mountain hikes and authentic cultural interactions with the Karamoja people.',
            destination: 'Mount Moroto',
            bestFor: 'Cultural travelers and rugged hikers.',
            highlights: ['Mountain hiking', 'Karamoja Manyatta cultural visit', 'Ancient rock art'],
            image: `${import.meta.env.BASE_URL}images/moroto1.jpg`,
            details: {
              duration: '3 Days',
              location: 'Moroto, Karamoja Region',
              transport: '4x4 Private Vehicle',
              accommodation: 'Kara-Tunga Safari Camp / Mount Moroto Hotel',
              itinerary: [
                { day: 1, title: 'Travel to the North East', description: 'Long drive to Moroto. Evening briefing on Karamoja culture.', meals: 'L, D', stay: 'Kara-Tunga' },
                { day: 2, title: 'Mount Moroto Hike', description: 'Guided hike to see rock art and unique high-altitude flora.', meals: 'B, L, D', stay: 'Kara-Tunga' },
                { day: 3, title: 'Manyatta Cultural Tour', description: 'Morning tour of Africa\'s largest traditional village before return.', meals: 'B, L', stay: 'N/A' }
              ],
              inclusions: ['Cultural guides', 'Mountain hike fees', 'Transportation'],
              testimonial: { quote: "Truly off the beaten path. These cultural experiences are genuine.", author: "Julian P.", platform: "TripAdvisor", headline: "Rugged & Real!" }
            }
          },
          {
            title: '4 Days Uganda Gorillas Safari',
            slug: '4-days-uganda-gorillas-safari',
            price: '2890$',
            per: '1 person',
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
                `${import.meta.env.BASE_URL}images/batwa.jpg`,
                `${import.meta.env.BASE_URL}images/tea.webp`,
                `${import.meta.env.BASE_URL}images/Elizabeth.jpeg`
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
            price: '3150$',
            per: '1 person',
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
                `${import.meta.env.BASE_URL}images/batwa.jpg`,
                `${import.meta.env.BASE_URL}images/tea.webp`,
                `${import.meta.env.BASE_URL}images/Elizabeth.jpeg`
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
            price: '4450$',
            per: '1 person',
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
                `${import.meta.env.BASE_URL}images/ugra.jpeg`,
                `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.02.10.jpeg`,
                `${import.meta.env.BASE_URL}images/Elizabeth.jpeg`,
                `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.06.18-1.jpeg`
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
            slug: '5-days-rwanda-gorilla-trek',
            price: '3420$',
            per: '1 person',
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
            price: '2630$',
            per: '1 person',
            description: 'Explore the primates and the famous canopy walk high above the tropical forest.',
            destination: 'Nyungwe Forest National Park, Rwanda',
            bestFor: 'Nature and bird lovers.',
            highlights: ['Canopy walk', 'Chimpanzee tracking', 'Tea plantation tours'],
            image: `${import.meta.env.BASE_URL}images/nyungwe.webp`,
            details: {
              duration: '4 Days',
              location: 'Southern Rwanda',
              transport: 'Private Safari Car',
              accommodation: 'One&Only Nyungwe House / Nyungwe Top View',
              itinerary: [
                { day: 1, title: 'Kigali to Nyungwe', description: 'Drive south with a stop at the King\'s Palace Museum.', meals: 'L, D', stay: 'Nyungwe Top View' },
                { day: 2, title: 'Chimp Tracking', description: 'Early morning search for chimpanzees in the deep forest.', meals: 'B, L, D', stay: 'Nyungwe Top View' },
                { day: 3, title: 'Canopy Walkway', description: 'Walking 70m above the forest floor on the suspension bridge.', meals: 'B, L, D', stay: 'Nyungwe Top View' },
                { day: 4, title: 'Return to Kigali', description: 'Drive back to the city for your departure.', meals: 'B, L', stay: 'N/A' }
              ],
              inclusions: ['Canopy walk fees', 'Chimp permit', 'Transportation', 'Guide'],
              testimonial: { quote: "The canopy walk is terrifying but beautiful. A must-do in Rwanda.", author: "Kevin D.", platform: "TripAdvisor", headline: "Above the Trees!" }
            }
          },
          {
            title: '5 Days Rwanda Safari: Akagera & Volcanoes',
            slug: '5-days-akagera-safari',
            price: '2150$',
            per: '1 person',
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
                `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.00.49-1.jpeg`,
                `${import.meta.env.BASE_URL}images/Elizabeth.jpeg`,
                `${import.meta.env.BASE_URL}images/lions-tree.jpeg`
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
            price: '3050$',
            per: '1 person',
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
                `${import.meta.env.BASE_URL}images/kasenda.webp`,
                `${import.meta.env.BASE_URL}images/Elizabeth.jpeg`,
                `${import.meta.env.BASE_URL}images/macque.webp`
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
            title: '7 Days Great Lakes Primates Safari (Rwanda Gorillas)',
            slug: '6-days-ug-rw-combo',
            price: '3450$',
            per: '1 person',
            description: 'The ultimate Great Lakes primates safari combining chimpanzee tracking in Kibale, game drives and boat cruise in Queen Elizabeth NP, and mountain gorilla trekking in Rwanda\'s Volcanoes National Park.',
            destination: 'Uganda & Rwanda',
            bestFor: 'Multi-country travelers seeking the best of East African primates and wildlife.',
            highlights: ['Chimps in Kibale Forest', 'Crater Lakes walk (Fort Portal)', 'Queen Elizabeth game drive & Kazinga Channel', 'Cross-border into Rwanda', 'Mountain gorilla trekking in Volcanoes NP', 'Kigali Genocide Memorial'],
            image: `${import.meta.env.BASE_URL}images/ugra.jpeg`,
            details: {
              duration: '7 Days',
              location: 'Uganda & Rwanda',
              transport: 'Cross-border Private Safari Vehicle',
              accommodation: 'Lake Victoria Serena / Mountains of the Moon / Mazike Valley Lodge / Mountain Gorilla View Lodge',
              routeCoordinates: [
                { name: 'Entebbe Airport', lat: 0.0424, lng: 32.4435, description: 'Arrival' },
                { name: 'Lake Victoria Serena Resort', lat: 0.0872, lng: 32.5640, description: 'Night 1' },
                { name: 'Fort Portal', lat: 0.6716, lng: 30.2750, description: 'Crater Lakes Walk' },
                { name: 'Kibale Forest NP', lat: 0.4431, lng: 30.3844, description: 'Chimp Tracking' },
                { name: 'Queen Elizabeth NP (Kasenyi)', lat: -0.1500, lng: 30.0900, description: 'Game Drive' },
                { name: 'Kazinga Channel', lat: -0.1747, lng: 29.9500, description: 'Boat Cruise' },
                { name: 'Kisoro / Cyanika Border', lat: -1.3293, lng: 29.6836, description: 'Rwanda Border Crossing' },
                { name: 'Mountain Gorilla View Lodge (Kinigi)', lat: -1.4716, lng: 29.5506, description: 'Nights 5 & 6' },
                { name: 'Volcanoes National Park HQ', lat: -1.4800, lng: 29.5400, description: 'Gorilla Trekking' },
                { name: 'Kigali', lat: -1.9441, lng: 30.0619, description: 'Departure' }
              ],
              gallery: [
                `${import.meta.env.BASE_URL}images/ugra.jpeg`,
                `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.00.49-1.jpeg`,
                `${import.meta.env.BASE_URL}images/Elizabeth.jpeg`,
                `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.06.18-1.jpeg`
              ],
              itinerary: [
                {
                  day: 1,
                  title: 'Arrival at Entebbe / Kampala',
                  description: "Arrival at Entebbe International Airport — meet and greet with your guide. Transfer (approximately 30 minutes) to the hotel in the outskirts of Kampala overlooking Lake Victoria. No meals included today.",
                  meals: 'No meals',
                  stay: 'Lake Victoria Serena Resort'
                },
                {
                  day: 2,
                  title: 'Entebbe/Kampala to Fort Portal & Crater Lakes Walk',
                  description: "After breakfast, depart towards Fort Portal (approximately 5 hours). Check in and lunch at the hotel. In the afternoon we are transferred to the point where we start a walk in the crater lakes belt, surrounded by a beautiful landscape. Our guide will explain the cultural history and background of the Tooro Kingdom, and we will have time to visit a local homestead. Dinner and overnight at Hotel Mountains of the Moon.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Hotel Mountains of the Moon'
                },
                {
                  day: 3,
                  title: 'Kibale Forest Chimp Tracking & Queen Elizabeth NP',
                  description: "Early transfer to Kibale Forest National Park (approximately 45 minutes), where all morning is dedicated to searching for chimpanzees and other primates including L'Hoeste's, red colobus, blues, red-tailed, and grey-cheeked mangabey. After lunch, proceed to Queen Elizabeth National Park / Peninsula sector (approximately 3½ hours) for an evening game drive. Dinner and overnight at Mazike Valley Lodge.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mazike Valley Lodge'
                },
                {
                  day: 4,
                  title: 'Queen Elizabeth NP Game Drive & Kazinga Channel Boat Cruise',
                  description: "In the early morning, a game drive in the Kasenyi area of Queen Elizabeth National Park, on the lookout for lions, buffaloes, elephants, and large numbers of Uganda Kobs and other antelopes. Lunch at Mweya Safari Lodge. In the afternoon, a boat cruise on the Kazinga Channel (approximately 2 hours), looking out for hippos, great herds of buffalo, and lots of water birds. Dinner and overnight at Mazike Valley Lodge.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mazike Valley Lodge'
                },
                {
                  day: 5,
                  title: 'Queen Elizabeth NP to Kinigi, Rwanda (via Cyanika Border)',
                  description: "After an early breakfast, depart for Volcanoes National Park in Rwanda (approximately 8 hours) — home of the endangered mountain gorilla. We cross Kabale, the Kigezi mountains (known as the 'Switzerland of Africa'), and Kisoro, where we stop for lunch at Traveller's Rest — the very lodge where Dian Fossey used to stay while conducting her landmark gorilla research in the Virunga Volcanoes. We then proceed through Cyanika border post and, after clearing immigration, continue to Ruhengeri and Kinigi at the base of the Virunga Volcanoes. Dinner and overnight at Mountain Gorilla View Lodge.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mountain Gorilla View Lodge'
                },
                {
                  day: 6,
                  title: 'Gorilla Trekking in Volcanoes National Park',
                  description: "After breakfast, take a short 10-minute drive to Park Headquarters where you will meet excellent local guides and trackers who will give a talk on the etiquette of gorilla trekking. You then hike into the forest where the gorillas were located the night before. In Rwanda there are 10 habituated gorilla groups — each visited by a maximum of 8 people per day for one hour only. Trekking can take 1 to 8 hours at altitudes exceeding 7,500 feet. The terrain is rough and muddy, but the beauty of the forest makes it worthwhile. Once the gorillas are found, all fatigue is forgotten — this experience is often described as the most profound natural history encounter in the world. After the trek, enjoy lunch at the lodge and a free afternoon to relax. Optional (not included): eco village walk with market visit and a chance to meet the Batwa (Pygmy) community — the original inhabitants of the Great Lakes region.",
                  meals: 'Breakfast, Lunch, Dinner',
                  stay: 'Mountain Gorilla View Lodge'
                },
                {
                  day: 7,
                  title: 'Kinigi to Kigali & Departure',
                  description: "Early breakfast at the lodge, then depart for Kigali (approximately 2½ hours). Time allowing, depending on your flight schedule, we will visit the Genocide Memorial and the crafts village for souvenir shopping. Transfer to Kigali International Airport for your afternoon or evening departure flight.",
                  meals: 'Breakfast',
                  stay: 'N/A'
                }
              ],
              inclusions: [
                'Professional Driver-Guide',
                'Cross-border private safari vehicle',
                'All accommodation as listed',
                'All meals as per itinerary',
                'Chimpanzee tracking permit (Kibale)',
                'Gorilla trekking permit (Rwanda)',
                'Queen Elizabeth NP game drives',
                'Kazinga Channel boat cruise',
                'Crater lakes walk (Fort Portal)',
                'All park entrance fees',
                'Border crossing assistance',
                'Airport transfers (Entebbe & Kigali)'
              ],
              exclusions: [
                'International flights',
                'Uganda & Rwanda Visa fees',
                'Travel insurance',
                'Personal expenses',
                'Optional eco village walk',
                'Tips for guides and staff'
              ],
              testimonial: {
                quote: "A seamless transition between two beautiful countries. The chimps in Kibale and the gorillas in Rwanda — both life-changing in completely different ways.",
                author: "Stefano L.",
                platform: "TripAdvisor",
                headline: "The Ultimate Primate Safari!"
              }
            }
          },
          {
            title: '10 Days Best of Uganda & Gorillas',
            slug: '10-days-best-of-uganda-gorillas',
            price: '3850$',
            per: '1 person',
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
                `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.06.18-1.jpeg`,
                `${import.meta.env.BASE_URL}images/Murchison.jpeg`,
                `${import.meta.env.BASE_URL}images/lions-tree.jpeg`,
                `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.02.10.jpeg`
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
            price: '3950$',
            per: '1 person',
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
                `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.02.10.jpeg`,
                `${import.meta.env.BASE_URL}images/Elizabeth.jpeg`,
                `${import.meta.env.BASE_URL}images/bunyonyi1.jpeg`
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
            description: 'Private vehicles and romantic lodge stays for an unforgettable beginning to your life together.',
            destination: 'Murchison Falls or Queen Elizabeth (Customizable)',
            bestFor: 'Honeymooners, couples, and anniversary celebrations.',
            highlights: ['Private safari vehicle', 'Romantic bush dinners', 'High-end luxury lodge stays'],
            image: `${import.meta.env.BASE_URL}images/honey.jpg`,
            details: {
              duration: '4 Days',
              location: 'Custom Safari Destination',
              transport: 'Private Luxury 4x4',
              accommodation: 'Chobe Safari Lodge / Elephant Plains',
              itinerary: [
                { day: 1, title: 'Arrival & Welcome', description: 'VIP pickup and transfer to the romantic wilderness lodge.', meals: 'D', stay: 'Luxury Lodge' },
                { day: 2, title: 'Private Game Drive', description: 'Personalized wildlife viewing and a scenic sunset boat cruise.', meals: 'B, L, D', stay: 'Luxury Lodge' },
                { day: 3, title: 'Bush Breakfast & Spa', description: 'A romantic breakfast in the wild followed by afternoon relaxation.', meals: 'B, L, D', stay: 'Luxury Lodge' },
                { day: 4, title: 'Farewell Flight/Drive', description: 'Final morning in the wild before return.', meals: 'B, L', stay: 'N/A' }
              ],
              inclusions: ['Private car', 'Bush dinner', 'Spa credit', 'All park fees'],
              testimonial: { quote: "Everything was magic. The bush dinner under the stars was perfect.", author: "Mr. & Mrs. Clark", platform: "TripAdvisor", headline: "A Dream Start!" }
            }
          },
          {
            title: '3 Days Lake Bunyonyi Relaxation',
            slug: '3-days-bunyonyi-relaxation',
            price: '1100$',
            per: '1 person',
            description: 'Scenic relaxation and island hopping on Uganda\'s deepest and most beautiful lake.',
            destination: 'Lake Bunyonyi, Kabale',
            bestFor: 'Post-gorilla relaxation and peace seekers.',
            highlights: ['Canoe island hopping', 'Birdwatching', 'Scenic hill hikes'],
            image: `${import.meta.env.BASE_URL}images/bunyonyi.jpg`,
            details: {
              duration: '3 Days',
              location: 'Kabale, Western Uganda',
              transport: 'Private Car & Boat',
              accommodation: 'Birdnest Resort / Bunyonyi Overland',
              itinerary: [
                { day: 1, title: 'Arrival at the Lake', description: 'Drive to the scenic hills of Kabale and reach the lake shores.', meals: 'L, D', stay: 'Birdnest Resort' },
                { day: 2, title: 'Island Hopping', description: 'Exploring the 29 islands of Bunyonyi including Punishment Island.', meals: 'B, L, D', stay: 'Birdnest Resort' },
                { day: 3, title: 'Nature Walk & Return', description: 'Morning mist walk and drive back to Kampala.', meals: 'B, L', stay: 'N/A' }
              ],
              inclusions: ['Boat trips', 'Local guides', 'All meals'],
              testimonial: { quote: "The most peaceful place I've ever been. The islands are stunning.", author: "Emily W.", platform: "TripAdvisor", headline: "The Switzerland of Africa!" }
            }
          },
          {
            title: '7 Days Birdwatching Special',
            slug: '7-days-birdwatching-safari',
            price: '3650$',
            per: '1 person',
            description: 'Expert-led tours focusing on rare species like the Shoebill Stork across diverse habitats.',
            destination: 'Mabamba, Murchison, & Queen Elizabeth',
            bestFor: 'Serious bird enthusiasts and photographers.',
            highlights: ['Rare Shoebill Stork sighting', 'Albertine Rift endemics', 'Expert birding guides'],
            image: `${import.meta.env.BASE_URL}images/bird.jpeg`,
            details: {
              duration: '7 Days',
              location: 'Multiple Birding Hotspots',
              transport: 'Private Safari Car',
              accommodation: 'Nature-focused Lodges',
              itinerary: [
                { day: 1, title: 'Mabamba Swamp', description: 'Searching for the Shoebill Stork in the wetlands.', meals: 'L, D', stay: 'Entebbe' },
                { day: 2, title: 'Murchison Birding', description: 'Exploring the Nile banks for aquatic species.', meals: 'B, L, D', stay: 'Murchison' },
                { day: 3, title: 'Albert Delta', description: 'Early morning boat in the delta for rare views.', meals: 'B, L, D', stay: 'Murchison' },
                { day: 104, title: 'Kibale Forest Birding', description: 'Searching for forest endemics.', meals: 'B, L, D', stay: 'Kibale' },
                { day: 5, title: 'Kazinga Channel', description: 'Water birding safari.', meals: 'B, L, D', stay: 'Queen Elizabeth' },
                { day: 6, title: 'Queen Elizabeth Plains', description: 'Savannah birding.', meals: 'B, L, D', stay: 'Queen Elizabeth' },
                { day: 7, title: 'Return via Equator', description: 'Final birding stops on the return drive.', meals: 'B, L', stay: 'N/A' }
              ],
              inclusions: ['Expert bird guide', 'Telescope use', 'All park fees', 'Boat trips'],
              testimonial: { quote: "Spotted over 300 species! The guide's knowledge was incredible.", author: "Richard P.", platform: "TripAdvisor", headline: "A Birder's Dream!" }
            }
          },
          {
            title: '5 Days Cultural Heritage Safari',
            slug: '5-days-cultural-heritage',
            price: '2250$',
            per: '1 person',
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
            title: '8 Days Adventure Uganda',
            slug: '8-days-adventure-uganda',
            price: '3200$',
            per: '1 person',
            description: 'A mix of high-adrenaline thrills and wilderness for active explorers.',
            destination: 'Jinja + Mount Elgon + Bwindi',
            bestFor: 'Active travelers and youth groups.',
            highlights: ['Rafting in Jinja', 'Mount Elgon waterfall hike', 'Gorilla trekking'],
            image: `${import.meta.env.BASE_URL}images/ug-gorilla.jpg`,
            details: {
              duration: '8 Days',
              location: 'East & Southwest Circuit',
              transport: '4x4 Private Car',
              accommodation: 'Adventure Lodges',
              itinerary: [
                { day: 1, title: 'Kampala to Jinja', description: 'Rafting and riverside relaxation.', meals: 'L, D', stay: 'Jinja' },
                { day: 2, title: 'To Sipi Falls', description: 'Hiking at the base of Mt Elgon.', meals: 'B, L, D', stay: 'Sipi' },
                { day: 3, title: 'Waterfall Exploration', description: 'Visiting the three levels of Sipi.', meals: 'B, L, D', stay: 'Sipi' },
                { day: 4, title: 'Transfer to the West', description: 'Long drive crossing back to western parks.', meals: 'B, L, D', stay: 'Kaseru' },
                { day: 5, title: 'Queen Elizabeth Safari', description: 'Game drives and boat safari.', meals: 'B, L, D', stay: 'QE' },
                { day: 6, title: 'To Bwindi Forest', description: 'Reaching the gorilla highlands.', meals: 'B, L, D', stay: 'Bwindi' },
                { day: 7, title: 'Gorilla Trekking', description: 'Final high-adventure trek.', meals: 'B, L, D', stay: 'Bwindi' },
                { day: 8, title: 'Return via Equator', description: 'Final scenic drive.', meals: 'B, L', stay: 'N/A' }
              ],
              inclusions: ['Gorilla permit', 'Rafting', 'Hiking fees', 'Guide'],
              testimonial: { quote: "Perfect for anyone who hates sitting still! So many active things to do.", author: "Yuki T.", platform: "TripAdvisor", headline: "Non-stop Fun!" }
            }
          },
          {
            title: '11 Days Best of Uganda & Rwanda Gorillas',
            slug: '11-days-uganda-rwanda-gorillas',
            price: '4680$',
            per: '1 person',
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
                `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.00.49-1.jpeg`,
                `${import.meta.env.BASE_URL}images/ugra.jpeg`,
                `${import.meta.env.BASE_URL}images/akagera.webp`,
                `${import.meta.env.BASE_URL}images/lions-tree.jpeg`
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
            title: '10 Days East Africa Grand Safari',
            slug: '10-days-ea-grand-safari',
            price: '5400$',
            per: '1 person',
            description: 'The ultimate circuit covering the absolute highlights of East Africa.',
            destination: 'Uganda + Kenya + Tanzania',
            bestFor: 'Long-haul international travelers and bucket-list seekers.',
            highlights: ['Gorilla trekking (Uganda)', 'Maasai Mara safari (Kenya)', 'Serengeti experience (Tanzania)'],
            image: `${import.meta.env.BASE_URL}images/east1.jpeg`,
            details: {
              duration: '10 Days',
              location: 'UG, KE, TZ',
              transport: 'Flights & Custom Rovers',
              accommodation: '5-Star Safari Camps',
              itinerary: [
                { day: 1, title: 'Entebbe Arrival', description: 'Welcome to East Africa.', meals: 'D', stay: 'Entebbe' },
                { day: 2, title: 'Gorilla Trekking', description: 'Short flight to Bwindi and trekking.', meals: 'B, L, D', stay: 'Bwindi' },
                { day: 3, title: 'To Maasai Mara', description: 'Fly to Kenya\'s premier wildlife reserve.', meals: 'B, L, D', stay: 'Mara' },
                { day: 4, title: 'Mara Game Drive', description: 'Watching the great migration (seasonal).', meals: 'B, L, D', stay: 'Mara' },
                { day: 5, title: 'Crossing to Serengeti', description: 'Driving into Tanzania\'s vast plains.', meals: 'B, L, D', stay: 'Serengeti' },
                { day: 6, title: 'Serengeti Safari', description: 'Unrivaled game viewing.', meals: 'B, L, D', stay: 'Serengeti' },
                { day: 7, title: 'Ngorongoro Crater', description: 'Safari in the world\'s largest caldera.', meals: 'B, L, D', stay: 'Ngorongoro' },
                { day: 8, title: 'Zanzibar Transition', description: 'Fly to the spice island.', meals: 'B, L, D', stay: 'Zanzibar' },
                { day: 9, title: 'Stone Town & Beach', description: 'Historical tour and relaxation.', meals: 'B, L, D', stay: 'Zanzibar' },
                { day: 10, title: 'Departure', description: 'End of the grand circuit.', meals: 'B', stay: 'N/A' }
              ],
              inclusions: ['Intra-Africa flights', 'All permits', 'Luxury stays', 'All guiding'],
              testimonial: { quote: "Seeing the Big Five and the gorillas in one trip was a dream come true.", author: "Oliver R.", platform: "TripAdvisor", headline: "The Master Safari!" }
            }
          },
          {
            title: '5 Days Dubai Luxury Holiday',
            slug: '5-days-dubai-escape',
            price: '7600$',
            per: '1 person',
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
        image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.06.18-1.jpeg`
      },
      mission: {
        title: 'Mission',
        content: 'To be a leading and highly professional tours operator that offers unique, adventure-filled, breathtaking, comfort, and memorable travel services; while promoting cultural exchange local tourism, and sustainable travel practices.',
        image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-26-at-09.39.51-1024x684.jpeg`
      },
      vision: {
        title: 'Vision',
        content: 'To be the most trusted and preferred travel and tour company, delivering unforgettable experiences and seamless journeys that inspire clients to explore the world with confidence and joy.',
        image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-20-at-20.30.59.jpeg`
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
          name: 'Nangobi masitula',
          position: 'Accountant',
          image: `${import.meta.env.BASE_URL}images/Masitula.jpeg`
        },
        {
          name: 'Jan Havlicheck',
          position: 'Consultant',
          image: `${import.meta.env.BASE_URL}images/Jan.jpeg`
        },
        // {
        //   name: 'Rachael Nasozi',
        //   position: 'IT Consultant',
        //   image: `${import.meta.env.BASE_URL}images/Rachael.jpeg`
        // },
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
      image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.00.49-1.jpeg`
    },
    {
      title: 'Wildlife Safaris',
      description: 'We offer classic wildlife safaris to Uganda\'s most famous national parks including: Queen Elizabeth National Park, Murchison Falls National Park, Kidepo Valley National Park, and Lake Mburo National Park among others.',
      image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.05.20.jpeg`
    },
    {
      title: 'Chimpanzee Tracking and Primate Safaris',
      description: 'Uganda is known as the primate capital of the world. At Come Again Tours and Travels, we provide thrilling chimpanzee tracking experiences in Kibale Forest, Budongo Forest, and Kyambura Gorge.',
      image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.06.18-1.jpeg`
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
      image: `${import.meta.env.BASE_URL}images/adventure.jpg`
    },
    {
      title: 'Cultural and Community Tours',
      description: 'Experience the rich culture and traditions of Uganda. We organize community visits, cultural dance performances, and tours to historic heritage sites.',
      image: `${import.meta.env.BASE_URL}images/culture.jpg`
    },
    {
      title: 'City Tours and Educational Trips',
      description: 'Explore the vibrant cities of Uganda and East Africa. We also organize educational tours for students and researchers interested in various fields.',
      image: `${import.meta.env.BASE_URL}images/city.jpg`
    },
    {
      title: 'Custom and Other Packages',
      description: 'We understand that every traveler has unique needs. We can customize your safari package to match your specific interests, time, and budget.',
      image: `${import.meta.env.BASE_URL}images/bird3.jpeg`
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
      facebook: '#',
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
      { id: 14, title: 'Safari Experiences', url: `${import.meta.env.BASE_URL}images/image14.jpeg` }
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
