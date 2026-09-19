import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Award, 
  Users, 
  Car, 
  Phone, 
  CheckCircle2, 
  HelpCircle
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import RegulatoryPartners from '../components/RegulatoryPartners';
import SafariPlannerWizard from '../components/SafariPlannerWizard';

const PlanMyTrip: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Come Again Tours & Travels - Plan My Safari',
    description: 'Custom tailor-made Uganda and East Africa safari planner. Handcrafted itineraries for gorilla trekking, wildlife game drives, chimpanzee tracking and adventure.',
    url: 'https://comeagaintoursandtravels.com/plan-my-trip',
    telephone: '+256-774-243-747',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kampala',
      addressCountry: 'Uganda'
    }
  };

  const FAQS = [
    {
      q: 'How fast will I receive my custom safari itinerary and quote?',
      a: 'Our safari directors in Kampala typically prepare and email your customized itinerary within 2 to 4 hours during business hours. For urgent requests or last-minute gorilla permits, you can also reach us immediately on WhatsApp.'
    },
    {
      q: 'Can I customize any part of my safari itinerary?',
      a: 'Yes, 100%! Every single element—from your arrival airport, accommodation comfort tier (luxury vs mid-range), park destinations, duration, to vehicle choice—is fully tailor-made around your dates, pace, and interests.'
    },
    {
      q: 'How do gorilla trekking permits work in Uganda and Rwanda?',
      a: 'Gorilla permits are strictly limited (maximum 8 trekkers per gorilla family per day). In Uganda, permits cost $800 per non-resident, and in Rwanda $1,500. As an AUTO-licensed tour operator, Come Again Tours purchases and secures your official UWA / RDB permits directly on your behalf.'
    },
    {
      q: 'What vehicles do you use for safaris?',
      a: 'We use custom-built 4x4 Safari Land Cruisers and 4x4 Safari Minivans, all equipped with pop-up photographic roofs, guaranteed window seats, onboard cooler boxes, long-range HF radios, and USB charging ports.'
    },
    {
      q: 'Are your safari guides in-house professionals?',
      a: 'Yes. All our guides are licensed Ugandan naturalist guides with over 8–15 years of bush experience, exceptional wildlife spotting abilities, defensive driving training, and deep cultural knowledge.'
    }
  ];

  return (
    <div className="bg-[#fcfdfa] text-brand-dark min-h-screen">
      <SEO
        title="Plan My Trip | Custom Uganda & East Africa Safari Planner"
        description="Design your custom Uganda gorilla trekking and wildlife safari with local experts. Choose your destinations, bucket-list experiences, transport & lodges. Free quote in 2–4 hours."
        schema={schema}
      />

      {/* Hero Header */}
      <section className="relative py-16 sm:py-20 px-4 bg-brand-dark text-white overflow-hidden text-left">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2ecc71_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/20 border border-brand-green/40 text-brand-green text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" /> 100% Tailor-Made African Safaris
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-5 leading-tight">
            Plan Your Dream <br className="hidden sm:inline" />
            <span className="text-brand-green">African Safari Itinerary</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Tell us where you want to go and what adventures you dream of experiencing. Our local Ugandan safari specialists will craft a customized itinerary and quote—completely free and with zero obligation.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-8 mt-8 text-xs font-medium text-gray-300">
            <span className="flex items-center gap-1.5 text-white">
              <ShieldCheck className="w-4 h-4 text-brand-green" /> UTB & AUTO Licensed
            </span>
            <span className="flex items-center gap-1.5 text-white">
              <Clock className="w-4 h-4 text-brand-green" /> 2–4 Hour Turnaround
            </span>
            <span className="flex items-center gap-1.5 text-white">
              <Award className="w-4 h-4 text-[#34E0A1]" /> TripAdvisor 5.0 Rated
            </span>
          </div>
        </div>
      </section>

      {/* Main Interactive Planner Section */}
      <section className="py-12 sm:py-16 px-4 max-w-4xl mx-auto -mt-6 sm:-mt-10 relative z-20">
        <SafariPlannerWizard isStandalonePage={true} />
      </section>

      {/* Trust & Accreditations Row */}
      <section className="py-8 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <RegulatoryPartners variant="compact" showNote={true} />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-center">
        <span className="text-brand-green font-bold text-xs uppercase tracking-[0.25em] block mb-2">
          Hassle-Free Booking Process
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-brand-dark mb-12">
          How We Bring Your Safari Dream to Life
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm relative group hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-brand-green/10 text-brand-green rounded-2xl flex items-center justify-center font-bold text-lg mb-5 group-hover:bg-brand-green group-hover:text-white transition-colors">
              01
            </div>
            <h3 className="text-lg font-serif font-bold text-brand-dark mb-2">
              Share Your Safari Wishlist
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Fill out our simple 4-step walkthrough above with your ideal destinations, activities, group size, and lodge preferences.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm relative group hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-brand-green/10 text-brand-green rounded-2xl flex items-center justify-center font-bold text-lg mb-5 group-hover:bg-brand-green group-hover:text-white transition-colors">
              02
            </div>
            <h3 className="text-lg font-serif font-bold text-brand-dark mb-2">
              Receive a Handcrafted Proposal
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Within 2–4 hours, our local safari directors send you a day-by-day itinerary, verified permit availability, lodge options, and transparent pricing.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm relative group hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-brand-green/10 text-brand-green rounded-2xl flex items-center justify-center font-bold text-lg mb-5 group-hover:bg-brand-green group-hover:text-white transition-colors">
              03
            </div>
            <h3 className="text-lg font-serif font-bold text-brand-dark mb-2">
              Refine & Embark on Safari
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Fine-tune the itinerary until it's 100% perfect. We lock in your gorilla/chimp permits and assign your dedicated private driver-guide and 4x4 cruiser.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Come Again Tours */}
      <section className="py-16 px-4 bg-brand-dark text-white text-left">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="text-brand-green font-bold text-xs uppercase tracking-widest block mb-2">
                The Come Again Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6 leading-tight">
                Why Discerning Travelers Choose Us
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Based directly in Kampala, Uganda, we don't outsource your journey to middlemen. From the moment you land at Entebbe until your return flight, you are looked after by our in-house team.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-xs text-brand-green font-bold uppercase tracking-wider mb-1">
                  Immediate Questions?
                </p>
                <p className="text-xs text-gray-300 mb-3">
                  Chat directly with our reservations team right now:
                </p>
                <a
                  href="https://wa.me/256774243747?text=Hello%20Come%20Again%20Tours!%20I%20would%20like%20to%20plan%20a%20safari."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366] text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#1EBE5D] transition-colors"
                >
                  <Phone className="w-4 h-4" /> WhatsApp: +256 774 243 747
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <CheckCircle2 className="w-6 h-6 text-brand-green mb-3" />
                <h4 className="text-sm font-bold text-white mb-1">Guaranteed Gorilla Permits</h4>
                <p className="text-xs text-gray-300 leading-relaxed">Direct license with Uganda Wildlife Authority (UWA) ensures genuine, timely permit procurement.</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <Car className="w-6 h-6 text-brand-green mb-3" />
                <h4 className="text-sm font-bold text-white mb-1">Custom 4x4 Safari Fleet</h4>
                <p className="text-xs text-gray-300 leading-relaxed">High-clearance Land Cruisers with pop-up photo roofs, cooler box, and guaranteed window seats.</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <Users className="w-6 h-6 text-brand-green mb-3" />
                <h4 className="text-sm font-bold text-white mb-1">In-House Naturalist Guides</h4>
                <p className="text-xs text-gray-300 leading-relaxed">Born and raised in East Africa with extensive birding, wildlife tracking and cultural storytelling prowess.</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <ShieldCheck className="w-6 h-6 text-brand-green mb-3" />
                <h4 className="text-sm font-bold text-white mb-1">24/7 On-Ground Support</h4>
                <p className="text-xs text-gray-300 leading-relaxed">Direct emergency concierge, satellite contact, and comprehensive AMREF Flying Doctors coverage available.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-left">
        <div className="text-center mb-10">
          <span className="text-brand-green font-bold text-xs uppercase tracking-widest block mb-2">
            Safari Planning Guide
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-dark">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200/70 shadow-sm">
              <h3 className="text-sm sm:text-base font-bold text-brand-dark mb-2 flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Trust & Footer */}
      <Footer />
    </div>
  );
};

export default PlanMyTrip;
