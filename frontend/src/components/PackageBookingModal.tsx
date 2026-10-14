import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Calendar, 
  Users, 
  CheckCircle2, 
  Phone, 
  ShieldCheck, 
  CreditCard, 
  Clock, 
  Send, 
  Compass, 
  Sparkles
} from 'lucide-react';
import { useCustomSafariModal } from '../context/CustomSafariModalContext';
import { useCurrency } from '../context/CurrencyContext';
import { businessConfig } from '../data/businessConfig';

const PackageBookingModal: React.FC = () => {
  const { isBookingOpen, bookingData, closeBookingModal } = useCustomSafariModal();
  const { formatPrice } = useCurrency();
  const formId = useId();

  // Form State
  const [startDate, setStartDate] = useState('');
  const [isFlexible, setIsFlexible] = useState(true);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [bedPreference, setBedPreference] = useState('double');
  
  // Contact details
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  
  // Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isBookingOpen || !bookingData) return null;

  // Calculate Base Price
  const rawPriceDigits = (bookingData.price || '1500').replace(/[^0-9.]/g, '');
  const basePricePerPerson = parseFloat(rawPriceDigits) || 1500;
  
  // Child rate estimated at 75% of adult rate
  const estimatedTotalUSD = Math.round(
    (adults * basePricePerPerson) + (children * basePricePerPerson * 0.75)
  );

  const bedOptions = [
    { id: 'double', label: 'Double Bed (Couples / Shared)' },
    { id: 'twin', label: 'Twin Beds (2 Separate beds)' },
    { id: 'single', label: 'Single Room (Private room for solo traveler)' },
    { id: 'family', label: 'Family Cottage / Interconnecting Suite' },
  ];

  const handleAdultsChange = (val: number) => {
    const num = Math.max(1, val);
    setAdults(num);
    if (num === 1 && bedPreference === 'double') {
      setBedPreference('single');
    } else if (num > 1 && bedPreference === 'single') {
      setBedPreference('double');
    }
  };

  const formatWhatsAppMessage = (ref: string) => {
    const bedLabel = bedOptions.find(b => b.id === bedPreference)?.label || bedPreference;
    return `*🦁 NEW SAFARI RESERVATION - Come Again Tours & Travels*
----------------------------------------
📌 *Reference:* ${ref || 'Pending'}
🦒 *Package:* ${bookingData.title}
⏱️ *Duration:* ${bookingData.duration || 'Standard'}
📅 *Target Start Date:* ${startDate || 'Flexible / To Be Advised'} (${isFlexible ? 'Dates Flexible' : 'Fixed Dates'})
👥 *Guests:* ${adults} Adult${adults > 1 ? 's' : ''}${children > 0 ? `, ${children} Child${children > 1 ? 'ren' : ''}` : ''}
🛏️ *Bed / Room Preference:* ${bedLabel}
💵 *Estimated Total:* ${formatPrice(estimatedTotalUSD)} (Starting from ${formatPrice(basePricePerPerson)}/person)
----------------------------------------
👤 *Lead Guest:* ${firstName} ${lastName}
📧 *Email:* ${email}
📱 *WhatsApp/Phone:* ${phone || 'Not provided'}
🌍 *Country of Residence:* ${country || 'International'}
📝 *Special Requests:* ${specialRequests || 'None'}
----------------------------------------
Hello Come Again Tours, I would like to confirm availability and lock in our reservation for this safari!`;
  };

  const handleWhatsAppBooking = () => {
    const ref = bookingRef || `CAT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const text = formatWhatsAppMessage(ref);
    const waUrl = businessConfig.whatsapp.getLink(text);
    window.open(waUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedRef = `CAT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(generatedRef);
    const bedLabel = bedOptions.find(b => b.id === bedPreference)?.label || bedPreference;

    const payload = {
      firstName: firstName || 'Safari',
      lastName: lastName || 'Guest',
      email,
      phone,
      message: `[DIRECT SAFARI BOOKING REQUEST]
Reference: ${generatedRef}
Package: ${bookingData.title}
Duration: ${bookingData.duration || 'Standard'}
Estimated Total: ${formatPrice(estimatedTotalUSD)} ($${estimatedTotalUSD} USD)
Travel Date: ${startDate || 'Flexible'} (Flexible: ${isFlexible ? 'Yes' : 'No'})
Guests: ${adults} Adults, ${children} Children
Bed Setup: ${bedLabel}
Country: ${country}
Special Requests: ${specialRequests}`
    };

    try {
      const baseUrl = (import.meta.env.VITE_API_URL || 'https://api.comeagaintoursandtravels.com/api').replace(/\/+$/, '');
      const endpoint = baseUrl.endsWith('/api') ? `${baseUrl}/contact` : `${baseUrl}/api/contact`;
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      }).catch((err) => console.error('Booking submission error:', err));
    } catch (err) {
      console.error('Booking submission failed:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeBookingModal}
          className="fixed inset-0 bg-brand-dark/85 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-gray-100 my-6 max-h-[92vh] flex flex-col text-left"
        >
          {/* Header with Package Snapshot */}
          <div className="bg-brand-dark text-white p-5 sm:p-6 relative shrink-0 border-b border-white/10">
            <button
              onClick={closeBookingModal}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              {bookingData.image && (
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 border border-white/20 shadow-md">
                  <img 
                    src={bookingData.image} 
                    alt={bookingData.title}
                    className="w-full h-full object-cover" 
                  />
                </div>
              )}

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 text-brand-green font-bold text-[11px] uppercase tracking-widest mb-1">
                  <Sparkles className="w-3.5 h-3.5" /> Direct Safari Booking
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight truncate">
                  {bookingData.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-xs text-gray-300">
                  {bookingData.duration && (
                    <span className="font-semibold text-white bg-white/10 px-2 py-0.5 rounded-md">
                      {bookingData.duration}
                    </span>
                  )}
                  {bookingData.destination && (
                    <span className="flex items-center gap-1 text-gray-300">
                      <Compass className="w-3.5 h-3.5 text-brand-green" /> {bookingData.destination}
                    </span>
                  )}
                  <span className="text-brand-green font-bold">
                    From {formatPrice(basePricePerPerson)} / person
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Body */}
          <div className="p-5 sm:p-8 overflow-y-auto flex-1">
            {submitted ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="inline-block bg-brand-green/10 text-brand-green text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                  Booking Reference: {bookingRef}
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-dark mb-2">
                  Reservation Request Placed!
                </h3>
                <p className="text-gray-600 text-sm max-w-lg mx-auto mb-6">
                  Thank you, <span className="font-bold text-brand-dark">{firstName || 'Traveler'}</span>! We have reserved your provisional dates for <strong>{bookingData.title}</strong>.
                </p>

                {/* What Happens Next Card */}
                <div className="bg-[#f4faf2] border border-brand-green/30 rounded-2xl p-6 max-w-lg mx-auto text-left mb-6 shadow-sm">
                  <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-green" /> What Happens Next:
                  </h4>
                  <ol className="space-y-2.5 text-xs text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-brand-green text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">1</span>
                      <span><strong>Permit & Room Check:</strong> Our reservations desk verifies live availability with the safari lodges and UWA permits within 2–4 hours.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-brand-green text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">2</span>
                      <span><strong>Official Proforma Voucher:</strong> We email your itemized confirmation voucher with payment details.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-brand-green text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">3</span>
                      <span><strong>Deposit & Confirmation:</strong> A 30% deposit locks in your gorilla/chimp permits and vehicle reservation.</span>
                    </li>
                  </ol>

                  <div className="mt-5 pt-4 border-t border-brand-green/20">
                    <button
                      onClick={handleWhatsAppBooking}
                      className="w-full py-3.5 bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#1EBE5D] transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Phone className="w-4 h-4" /> Open This Booking on WhatsApp
                    </button>
                  </div>
                </div>

                <button
                  onClick={closeBookingModal}
                  className="px-8 py-3 bg-brand-dark text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-brand-green transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Dates & Guest Configuration */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark mb-3 flex items-center gap-2 border-b border-gray-100 pb-2">
                    <Calendar className="w-4 h-4 text-brand-green" /> 1. Trip Dates & Guest Count
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor={`${formId}-date`} className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Preferred Departure Date *
                      </label>
                      <input
                        id={`${formId}-date`}
                        type="date"
                        required
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 font-semibold focus:outline-none focus:border-brand-green"
                      />
                    </div>

                    <div className="flex items-center">
                      <label className="flex items-center gap-2.5 p-3 bg-gray-50 border border-gray-200 rounded-xl w-full cursor-pointer hover:border-brand-green/50">
                        <input
                          type="checkbox"
                          checked={isFlexible}
                          onChange={(e) => setIsFlexible(e.target.checked)}
                          className="w-4 h-4 accent-brand-green rounded cursor-pointer"
                        />
                        <span className="text-xs text-gray-700 font-medium">
                          My travel dates are flexible (+/- a few days)
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Guests and Bed Preference (Streamlined) */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label htmlFor={`${formId}-adults`} className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Adults (12+ yrs) *
                      </label>
                      <input
                        id={`${formId}-adults`}
                        type="number"
                        min="1"
                        max="30"
                        value={adults}
                        onChange={(e) => handleAdultsChange(parseInt(e.target.value) || 1)}
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-brand-dark focus:outline-none focus:border-brand-green"
                      />
                    </div>

                    <div>
                      <label htmlFor={`${formId}-children`} className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Children (Under 12)
                      </label>
                      <input
                        id={`${formId}-children`}
                        type="number"
                        min="0"
                        max="15"
                        value={children}
                        onChange={(e) => setChildren(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-brand-dark focus:outline-none focus:border-brand-green"
                      />
                    </div>

                    <div>
                      <label htmlFor={`${formId}-bed-preference`} className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Bed / Room Setup
                      </label>
                      <select
                        id={`${formId}-bed-preference`}
                        value={bedPreference}
                        onChange={(e) => setBedPreference(e.target.value)}
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 focus:outline-none focus:border-brand-green"
                      >
                        {bedOptions.map((b) => (
                          <option key={b.id} value={b.id}>{b.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Live Price Estimation Bar */}
                  <div className="mt-4 bg-[#f8faf7] border border-brand-green/20 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block">
                        Estimated Total ({adults} Adult{adults > 1 ? 's' : ''}{children > 0 ? `, ${children} Child${children > 1 ? 'ren' : ''}` : ''})
                      </span>
                      <div className="text-2xl font-serif font-black text-brand-green">
                        {formatPrice(estimatedTotalUSD)}
                      </div>
                    </div>
                    <div className="text-[11px] text-gray-500 max-w-xs">
                      Includes 4x4 Land Cruiser transport, guide, national park entries, accommodation & full-board meals as specified in package.
                    </div>
                  </div>
                </div>

                {/* 2. Lead Guest Details */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark mb-3 flex items-center gap-2 border-b border-gray-100 pb-2">
                    <Users className="w-4 h-4 text-brand-green" /> 2. Lead Guest Contact
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor={`${formId}-first-name`} className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        First Name *
                      </label>
                      <input
                        id={`${formId}-first-name`}
                        type="text"
                        required
                        placeholder="e.g. David"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 focus:outline-none focus:border-brand-green"
                      />
                    </div>
                    <div>
                      <label htmlFor={`${formId}-last-name`} className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Last Name *
                      </label>
                      <input
                        id={`${formId}-last-name`}
                        type="text"
                        required
                        placeholder="e.g. Miller"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 focus:outline-none focus:border-brand-green"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor={`${formId}-email`} className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        id={`${formId}-email`}
                        type="email"
                        required
                        placeholder="david.miller@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 focus:outline-none focus:border-brand-green"
                      />
                    </div>
                    <div>
                      <label htmlFor={`${formId}-phone`} className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        WhatsApp / Mobile Phone *
                      </label>
                      <input
                        id={`${formId}-phone`}
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 focus:outline-none focus:border-brand-green"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor={`${formId}-country`} className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Country of Residence *
                      </label>
                      <input
                        id={`${formId}-country`}
                        type="text"
                        required
                        placeholder="e.g. United Kingdom, USA, Germany..."
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 focus:outline-none focus:border-brand-green"
                      />
                    </div>
                    <div>
                      <label htmlFor={`${formId}-notes`} className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Special Requests / Dietary / Airport Pickup
                      </label>
                      <input
                        id={`${formId}-notes`}
                        type="text"
                        placeholder="e.g. Vegetarian, arriving Entebbe at 11am"
                        value={specialRequests}
                        onChange={(e) => setSpecialRequests(e.target.value)}
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 focus:outline-none focus:border-brand-green"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Payment Method Notice (Coming Soon) */}
                <div className="bg-amber-500/10 border border-amber-500/25 rounded-2xl p-4 text-xs text-amber-900 flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-bold text-brand-dark">Online Card & Mobile Checkout</span>
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full">
                        Coming Soon
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-600 leading-relaxed">
                      <strong>Zero payment charged today.</strong> We hold your dates with zero upfront fee while verifying lodge and gorilla permit availability. Once confirmed, our reservations desk provides your official booking invoice with verified bank transfer instructions.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                    <ShieldCheck className="w-4 h-4 text-brand-green" />
                    <span>UTB & AUTO Licensed • No Hidden Fees</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={handleWhatsAppBooking}
                      className="w-full sm:w-auto px-5 py-3.5 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#1EBE5D] transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Phone className="w-4 h-4" /> Book via WhatsApp
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-7 py-3.5 bg-brand-green text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-brand-dark transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" /> Confirm Booking Request
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PackageBookingModal;
