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
    { name: 'Contact', href: '/contact' }
  ],
  heroSlides: [
    {
      title: 'Come Again Tours and Travels',
      subtitle: "More Than a Safari, It's a Story",
      backgroundImage: `${import.meta.env.BASE_URL}images/gorilla1.jpeg`
    },
    {
      title: 'Experience Majestic <br/> Encounters',
      subtitle: 'Connecting You to the Heart of Africa',
      backgroundImage: `${import.meta.env.BASE_URL}images/Busowoko-fall.jpeg`
    },
    {
      title: 'Discover The Wild <br/> Spirit',
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
      subheading: 'At Come Again Tours and Travels, we don\'t just take you on a trip—we help you create memories that last forever.',
      items: [
        {
          rating: '4.5',
          text: 'Yes, the tour was excellent, the driver was so cooperative, customer understanding, hassle-free journey, feel like your own, very honest and loyal.',
          author: 'Jtripaf'
        },
        {
          rating: '4.5',
          text: 'I and my friends had an amazing 10 days Safari Tour in Uganda with Come Again Tour and Travel Team. Issa is such a friendly guy! I highly recommended Issa for Safari Tour. Looking forward to traveling with him again.',
          author: 'Turaf N'
        },
        {
          rating: '4.5',
          text: 'We spent a beautiful time during our tour in Uganda. All 12 days were well organized and we could enjoy amazing moments there. I recommend to all travelers any tour with Come Again Tours and Travel.',
          author: 'Rosti'
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
      backgroundImage: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-25-at-18.19.43-1.jpeg`,
      contact: {
        tel: '+256-774-243-747',
        office: '+256-701-281-624',
        email: 'info@comeagaintoursandtravels.com',
        postal: '157101',
        location: 'Kampala, Uganda'
      },
      socials: [
        // { name: 'Face Book', icon: 'facebook', href: '#' },
        { name: 'Twitter', icon: 'twitter', href: '#' },
        // { name: 'Instagram', icon: 'instagram', href: '#' },
        { name: 'Tiktok', icon: 'music', href: '#' },
        { name: 'LinkedIn', icon: 'linkedin', href: '#' },
        { name: 'YouTube', icon: 'youtube', href: '#' }
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
        image: `${import.meta.env.BASE_URL}images/bird.jpeg`
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
        image: `${import.meta.env.BASE_URL}images/Nile.jpeg`
      },
      {
        name: 'SIPI FALLS AND COFFEE TOURS',
        description: 'Expect stunning waterfalls, hiking trails with panoramic views of Mount Elgon, and authentic Arabica coffee tours with local farmers.',
        image: `${import.meta.env.BASE_URL}images/Sipifalls.jpeg`
      },
      {
        name: 'LAKE MBURO NATIONAL PARK',
        description: 'Expect zebras, impalas, giraffes, horseback safaris, cycling tours, boat rides, and a relaxed, scenic savannah experience.',
        image: `${import.meta.env.BASE_URL}images/girrafe.jpeg`
      },
      {
        name: 'KATONGA GAME RESERVE',
        description: 'Expect a quiet nature experience with antelopes, wetland birdlife, and guided walking safaris in a peaceful environment.',
        image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.05.20.jpeg`
      },
      {
        name: 'BADIDI BUDONGO CHIMP TRACKING',
        description: 'Expect guided chimp tracking, mahogany forest walks, birdwatching, and close encounters with playful chimpanzees.',
        image: `${import.meta.env.BASE_URL}images/yellow-bird1.jpeg`
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
        name: 'BOKORA GAME RESERVE',
        description: 'Expect wildlife such as antelopes, zebras, and opportunities to experience authentic Karamoja culture.',
        image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.05.20.jpeg`
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
        description: 'Expect dry savannah wildlife, unique bird species, and cultural experiences with the Karamojong communities.',
        image: `${import.meta.env.BASE_URL}images/lions-tree.jpeg`
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
        image: `${import.meta.env.BASE_URL}images/bird2.jpeg`
      },
      {
        name: 'Mugahinga National Park',
        description: 'Expect mountain gorillas, golden monkey tracking, volcanic scenery, and stunning views of the Virunga Mountains.',
        image: `${import.meta.env.BASE_URL}images/Mugahinga.jpeg`
      },
      {
        name: 'Volcano National Park',
        description: 'Expect gorilla trekking, golden monkey tracking, and scenic volcanic mountain views in Rwanda’s premier conservation park.',
        image: `${import.meta.env.BASE_URL}images/volcano.jpeg`
      },
      {
        name: 'Nyungwe Forest National Park',
        description: 'Expect chimpanzee tracking, canopy walks high above the forest, waterfalls, and rich biodiversity.',
        image: `${import.meta.env.BASE_URL}images/nyungwe.jpeg`
      },
      {
        name: 'Akagera National Park',
        description: 'Expect classic savannah safaris with lions, elephants, giraffes, zebras, and boat cruises on Lake Ihema.',
        image: `${import.meta.env.BASE_URL}images/akagera.jpeg`
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
        image: `${import.meta.env.BASE_URL}images/Batwa.jpeg`
      }
    ]
  },
  packagesPage: {
    hero: {
      title: 'Our Packages',
      description: 'At Come Again Tours and Travels, we offer carefully designed safari packages that suit different travel needs, budgets, and interests. Whether you are looking for a short weekend adventure, gorilla trekking, wildlife experiences, cultural encounters, or a full Uganda tour, we have the perfect package for you.',
      image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-26-at-09.39.51-1024x684.jpeg`
    },
    sections: [
      {
        title: 'Featured Packages',
        packages: [
          {
            title: '3 Days Murchison Falls Safari',
            price: '1450$',
            per: '1 person',
            description: 'Expect powerful waterfalls where the Nile squeezes through a narrow gorge, exciting game drives with elephants, giraffes, lions and buffaloes.',
            destination: 'Murchison Falls National Park',
            bestFor: 'Short-stay travelers, business visitors, first-time safari guests.',
            highlights: ['Game drives (lions, elephants, giraffes)', 'Boat cruise to the base of the falls', 'Top of the falls hike', 'Optional rhino tracking at Ziwa'],
            image: `${import.meta.env.BASE_URL}images/Murchison.jpeg`
          },
          {
            title: '3 Days Queen Elizabeth Safari',
            price: '1500$',
            per: '1 person',
            description: 'Expect diverse wildlife, the famous tree-climbing lions of Ishasha, boat cruises along the Kazinga Channel, and crater lakes.',
            destination: 'Queen Elizabeth National Park',
            bestFor: 'Wildlife lovers and photographers.',
            highlights: ['Tree-climbing lions (Ishasha sector)', 'Kazinga Channel boat cruise', 'Crater lakes', 'Savannah game drives'],
            image: `${import.meta.env.BASE_URL}images/Elizabeth.jpeg`
          },
          {
            title: '3 Days Bwindi Gorilla Trekking Adventure',
            price: '1800$',
            per: '1 person',
            description: 'Famous for mountain gorilla trekking. Expect dense rainforest, breathtaking hills, and unforgettable close encounters.',
            destination: 'Bwindi Impenetrable National Park',
            bestFor: 'Bucket-list travelers, luxury clients, honeymooners.',
            highlights: ['Gorilla trekking experience', 'Batwa cultural visit', 'Scenic mountain landscapes'],
            image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.02.10.jpeg`
          },
          {
            title: '3 Days Kibale Chimpanzee & Bigodi Tour',
            price: '1400$',
            per: '1 person',
            description: 'Expect chimpanzee tracking, forest walks, monkeys, birds, and the beautiful Bigodi Wetland Sanctuary.',
            destination: 'Kibale National Park',
            bestFor: 'Primate lovers and nature enthusiasts.',
            highlights: ['Chimpanzee tracking', 'Bigodi wetland walk', 'Crater lake views'],
            image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.06.18-1.jpeg`
          },
          {
            title: '5 Days Gorilla and Queen Elizabeth combo',
            price: '1935$',
            per: '1 person',
            description: 'Combine the best of both worlds: mountain gorillas and the famous tree-climbing lions.',
            destination: 'Bwindi + Queen Elizabeth',
            bestFor: 'Travelers wanting wildlife + primates in one trip.',
            highlights: ['Gorilla trekking', 'Tree-climbing lions', 'Boat safari'],
            image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.02.10.jpeg`
          },
          {
            title: '5 Days Murchison Falls and Chimps',
            price: '2340$',
            per: '1 person',
            description: 'A perfect mix of big game safaris and chimpanzee tracking in the mahogany forests.',
            destination: 'Murchison + Budongo Forest',
            bestFor: 'Wildlife + primate combination lovers.',
            highlights: ['Big game safari', 'Chimp tracking', 'Nile boat cruise'],
            image: `${import.meta.env.BASE_URL}images/murchison1.webp`
          },
          {
            title: '7 Days Uganda Wildlife Classic',
            price: '2340$',
            per: '1 person',
            description: 'A comprehensive tour of Murchison, Kibale, Queen Elizabeth, and Bwindi national parks.',
            destination: 'Murchison, Kibale, Queen Elizabeth, Bwindi',
            bestFor: 'First-time Uganda explorers.',
            highlights: ['Gorilla & chimp tracking', 'Multiple game drives', 'Boat cruises'],
            image: `${import.meta.env.BASE_URL}images/giraffes.jpeg`
          },
          {
            title: '7 Days Uganda Wildlife classic',
            price: '2340$',
            per: '1 person',
            description: 'Our most popular extended tour covering major highlights including relaxation at Lake Bunyonyi.',
            destination: 'Murchison, Kibale, Queen Elizabeth, Bwindi, Lake Bunyonyi',
            bestFor: 'International tourists seeking a full experience.',
            highlights: ['Gorilla trekking', 'Relaxation at Lake Bunyonyi', 'Cultural experiences'],
            image: `${import.meta.env.BASE_URL}images/pearl.jpeg`
          },
          {
            title: '12 Days Uganda Wildlife & Primate Adventure',
            price: '3850$',
            per: '1 person',
            description: 'The ultimate luxury circuit covering the Big Five, Gorillas, Chimps, and the stunning Sipi Falls.',
            destination: 'Full Uganda Circuit',
            bestFor: 'Luxury and long-stay travelers.',
            highlights: ['Big Five safari', 'Gorilla & chimp trekking', 'Sipi Falls', 'Cultural tours'],
            image: `${import.meta.env.BASE_URL}images/wildlife.jpeg`
          },
          {
            title: '3 Days Jinja Adventure Escape',
            price: '1200$',
            per: '1 person',
            description: 'Thrilling white-water rafting, boat cruises to the Source of the Nile, and quad biking.',
            destination: 'Jinja',
            bestFor: 'Youth groups, adventure lovers.',
            highlights: ['White Nile rafting', 'Source of the Nile boat ride', 'Quad biking'],
            image: `${import.meta.env.BASE_URL}images/adventure.jpeg`
          },
          {
            title: '2 Days Lake Mburo Getaway',
            price: '750$',
            per: '1 person',
            description: 'Expect zebras, impalas, walking safaris and boat rides in a relaxed savannah experience.',
            destination: 'Lake Mburo National Park',
            bestFor: 'Weekend travelers.',
            highlights: ['Walking safari', 'Boat ride', 'Zebra sightings'],
            image: `${import.meta.env.BASE_URL}images/Mburo.webp`
          },
          {
            title: '4 Days Sipi & Mount Elgon',
            price: '1280$',
            per: '1 person',
            description: 'Stunning waterfalls, hiking trails, and authentic Arabica coffee tours.',
            destination: 'Mount Elgon National Park',
            bestFor: 'Nature & hiking lovers.',
            highlights: ['Sipi Falls hike', 'Coffee tour', 'Scenic views'],
            image: `${import.meta.env.BASE_URL}images/Sipifalls.jpeg`
          },
          {
            title: '6 Days Rwenzori Trekking Experience',
            price: '2550$',
            per: '1 person',
            description: 'Climb the "Mountains of the Moon" with snow-capped peaks and unique alpine vegetation.',
            destination: 'Rwenzori Mountains National Park',
            bestFor: 'Serious hikers & adventure seekers.',
            highlights: ['Mountain trekking', 'Unique alpine vegetation', 'Snow-capped peaks'],
            image: `${import.meta.env.BASE_URL}images/Rwenzori.jpg`
          },
          {
            title: '3 Days Kidepo Wilderness Safari',
            price: '1780$',
            per: '1 person',
            description: 'Untouched wilderness, large herds of buffaloes, and cultural encounters with the Karamojong.',
            destination: 'Kidepo Valley National Park',
            bestFor: 'Exclusive safari lovers.',
            highlights: ['Remote savannah', 'Large buffalo herds', 'Cultural visit to Karamojong'],
            image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.05.20.jpeg`
          },
          {
            title: '3 Days Semuliki & Hot Springs',
            price: '1450$',
            per: '1 person',
            description: 'Expect boiling hot springs, tropical forest, and exceptional birdwatching.',
            destination: 'Semuliki National Park',
            bestFor: 'Nature & bird lovers.',
            highlights: ['Sempaya hot springs', 'Birdwatching', 'Forest walks'],
            image: `${import.meta.env.BASE_URL}images/Sempaya.jpeg`
          },
          {
            title: '3 Days Mount Moroto Adventure',
            price: '1850$',
            per: '1 person',
            description: 'Rugged mountain hikes and authentic cultural interactions with the Karamoja people.',
            destination: 'Mount Moroto',
            bestFor: 'Cultural adventure lovers.',
            highlights: ['Hiking', 'Karamoja culture', 'Rock art'],
            image: `${import.meta.env.BASE_URL}images/moroto1.jpeg`
          },
          {
            title: '5 Days Rwanda Gorilla Experience',
            price: '3420$',
            per: '1 person',
            description: 'Gorilla trekking, golden monkeys, and a clean, modern city experience in Kigali.',
            destination: 'Volcanoes National Park',
            bestFor: 'Luxury primate travelers.',
            highlights: ['Gorilla trekking', 'Golden monkeys', 'Kigali city tour'],
            image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.00.49-1.jpeg`
          },
          {
            title: '4 Days Nyungwe Forest Experience',
            price: '2630$',
            per: '1 person',
            description: 'Explore the primates and the famous canopy walk high above the tropical forest.',
            destination: 'Nyungwe Forest National Park',
            bestFor: 'Nature & primate lovers.',
            highlights: ['Canopy walk', 'Chimp tracking', 'Tea plantations'],
            image: `${import.meta.env.BASE_URL}images/nyungwe.webp`
          },
          {
            title: '4 Days Akagera Wildlife Safari',
            price: '2150$',
            per: '1 person',
            description: 'Classic safari with the Big Five and scenic boat cruises on Lake Ihema.',
            destination: 'Akagera National Park',
            bestFor: 'Classic African safari seekers.',
            highlights: ['Big Five', 'Boat safari', 'Savannah landscapes'],
            image: `${import.meta.env.BASE_URL}images/akagera.webp`
          },
          {
            title: '6 Days Uganda & Rwanda Combo',
            price: '3450$',
            per: '1 person',
            description: 'Best of both countries including Bwindi gorillas and the Kigali Memorial.',
            destination: 'Bwindi + Volcanoes + Queen Elizabeth',
            bestFor: 'Multi-country travelers.',
            highlights: ['Bwindi gorillas', 'Kigali city tour', 'Queen Elizabeth safari'],
            image: `${import.meta.env.BASE_URL}images/ugra.jpeg`
          },
          {
            title: '4 Days Luxury Honeymoon Safari',
            price: '3820$',
            per: '1 person',
            description: 'Private vehicles and romantic lodge stays for an unforgettable beginning.',
            destination: 'Customizable',
            bestFor: 'Honeymooners & couples.',
            highlights: ['Private safari vehicle', 'Romantic lodge stays', 'Candlelight bush dinners'],
            image: `${import.meta.env.BASE_URL}images/honeymoon.jpeg`
          },
          {
            title: '3 Days Lake Bunyonyi Relaxation',
            price: '1100$',
            per: '1 person',
            description: 'Scenic relaxation and island hopping on Uganda\'s deepest lake.',
            destination: 'Lake Bunyonyi',
            bestFor: 'Post-gorilla relaxation.',
            highlights: ['Canoe rides', 'Island hopping', 'Scenic relaxation'],
            image: `${import.meta.env.BASE_URL}images/bunyonyi1.jpeg`
          },
          {
            title: '7 Days Birdwatching Special',
            price: '3650$',
            per: '1 person',
            description: 'Expert-led tours focusing on rare species and diverse birdlife.',
            destination: 'Murchison, Queen Elizabeth, Semuliki',
            bestFor: 'Bird enthusiasts.',
            highlights: ['Rare species', 'Wetland birding', 'Expert guides'],
            image: `${import.meta.env.BASE_URL}images/bird.jpeg`
          },
          {
            title: '5 Days Cultural Heritage Safari',
            price: '2250$',
            per: '1 person',
            description: 'Immersive encounters with local communities and heritage sites.',
            destination: 'Multiple Cultural Sites',
            bestFor: 'Culture-focused travelers.',
            highlights: ['Batwa community', 'Karamoja visit', 'Buganda cultural sites'],
            image: `${import.meta.env.BASE_URL}images/heritage.jpeg`
          },
          {
            title: '8 Days Adventure Uganda',
            price: '3200$',
            per: '1 person',
            description: 'A mix of thrills and wilderness for active explorers.',
            destination: 'Jinja + Mount Elgon + Bwindi',
            bestFor: 'Active travelers.',
            highlights: ['Rafting in Jinja', 'Mount Elgon hike', 'Gorilla trekking'],
            image: `${import.meta.env.BASE_URL}images/adventure1.jpeg`
          },
          {
            title: '10 Days East Africa Grand Safari',
            price: '5400$',
            per: '1 person',
            description: 'The ultimate circuit covering Uganda, Kenya, and Tanzania highlights.',
            destination: 'Uganda + Kenya + Tanzania',
            bestFor: 'Long-haul international travelers.',
            highlights: ['Gorilla trekking', 'Maasai Mara safari', 'Serengeti experience'],
            image: `${import.meta.env.BASE_URL}images/east1.jpeg`
          },
          {
            title: '5 Days Dubai Luxury Holiday',
            price: '7600$',
            per: '1 person',
            description: 'Luxury city escapes and desert adventures in the Middle East.',
            destination: 'Dubai',
            bestFor: 'Luxury holidaymakers & corporate incentives.',
            highlights: ['Desert safari', 'Burj Khalifa visit', 'Marina cruise', 'Shopping tours'],
            image: `${import.meta.env.BASE_URL}images/dubai.webp`
          }
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
        description: 'At Come Again Tours and Travels, we have a team of dedicated professionals who work together to provide our guests with an unforgettable experience while on safari in Rwanda, Uganda, and the Democratic Republic of Congo. Our staff are experts in creating powerful primate & wildlife safaris across East Africa, and they will help you plan your journey with confidence and feeling respected.',
        image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-26-at-09.39.51-1024x684.jpeg`
      },
      members: [
        {
          name: 'Kavanguzi Wilson',
          position: 'Managing Director',
          image: `${import.meta.env.BASE_URL}images/wilson.jpeg`
        },
        {
          name: 'Lukibe Hussein',
          position: 'Operations Director',
          image: `${import.meta.env.BASE_URL}images/Luliibe.jpeg`
        },
        {
          name: 'Dorina Ziporah',
          position: 'Sales & Marketing Manager',
          image: `${import.meta.env.BASE_URL}images/Bettina.jpeg`
        },
        {
          name: 'Nangobi masitula',
          position: 'Accountant',
          image: `${import.meta.env.BASE_URL}images/Masitula.jpeg`
        },
        {
          name: 'Issa Namugula',
          position: 'Road Manager / Professional Guide',
          image: `${import.meta.env.BASE_URL}images/Issa.jpeg`
        },
        {
          name: 'Joe Hovsepian',
          position: 'Client Advisor',
          image: `${import.meta.env.BASE_URL}images/Jan.jpeg`
        },
        {
          name: 'Rachel Namas',
          position: 'Business Advisor',
          image: `${import.meta.env.BASE_URL}images/Rachael.jpeg`
        }
      ]
    }
  },
  contactPage: {
    hero: {
      title: 'Contact',
      description: 'Come Again Tours and Travels For bookings, inquiries, and customized safari packages, reach out to us today:',
      image: `${import.meta.env.BASE_URL}images/Busowoko-falls-rafting15-1024x679.jpeg`
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
      image: `${import.meta.env.BASE_URL}images/adventure.jpeg`
    },
    {
      title: 'Cultural and Community Tours',
      description: 'Experience the rich culture and traditions of Uganda. We organize community visits, cultural dance performances, and tours to historic heritage sites.',
      image: `${import.meta.env.BASE_URL}images/culture.jpg`
    },
    {
      title: 'City Tours and Educational Trips',
      description: 'Explore the vibrant cities of Uganda and East Africa. We also organize educational tours for students and researchers interested in various fields.',
      image: `${import.meta.env.BASE_URL}images/city-tours.jpg`
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
  }
};
