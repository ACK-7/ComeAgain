/**
 * Centralized business information for Come Again Tours and Travels.
 * Keep these details strictly consistent across all pages, footers, headers, schema, and CTAs.
 */

export const businessConfig = {
  name: 'Come Again Tours and Travels',
  legalName: 'Come Again Tours and Travels Ltd',
  shortName: 'Come Again Safaris',
  tagline: "More Than a Safari, It's a Story.",
  
  // Location
  location: 'Kampala, Uganda',
  address: {
    street: 'Plot 12 Kampala Road',
    city: 'Kampala',
    region: 'Central Region',
    country: 'Uganda',
    countryCode: 'UG',
    postalCode: '00256',
  },

  // Contact details - STRICT CONSISTENCY
  phone: {
    display: '0774243747',
    international: '+256 774 243 747',
    telLink: 'tel:+256774243747',
    raw: '+256774243747',
  },
  whatsapp: {
    display: '0786016031',
    international: '+256 786 016 031',
    number: '256786016031',
    rawWithPlus: '+256786016031',
    /**
     * Generates a direct WhatsApp click-to-chat URL with a pre-filled message
     */
    getLink: (customMessage?: string) => {
      const msg = customMessage || 'Hello Come Again Tours and Travels! I would like to inquire about a safari / car hire in Uganda.';
      return `https://wa.me/${businessConfig.whatsapp.number}?text=${encodeURIComponent(msg)}`;
    },
  },
  email: {
    primary: 'info@comeagaintoursandtravels.com',
    mailto: 'mailto:info@comeagaintoursandtravels.com',
  },
  website: {
    domain: 'www.comeagaintoursandtravels.com',
    url: 'https://www.comeagaintoursandtravels.com',
    display: 'www.comeagaintoursandtravels.com',
  },

  // Trust & Licensing
  licenses: [
    'Uganda Tourism Board (UTB)',
    'Uganda Wildlife Authority (UWA) Partner',
    'Association of Uganda Tour Operators (AUTO / UTO)',
  ],

  // Social Links
  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=100080915697458',
    instagram: 'https://www.instagram.com/comeagaintoursandtravels',
    tripadvisor: 'https://www.tripadvisor.com/Attraction_Review-g293841-d23932600-Reviews-Come_Again_Tours_and_Travel-Kampala_Central_Region.html',
  },
};
