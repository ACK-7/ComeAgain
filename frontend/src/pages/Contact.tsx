import React, { useState } from 'react';
import Footer from '../components/Footer';
import { siteData } from '../data/siteData';
import { motion, type Variants } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle, Globe, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';
import { businessConfig } from '../data/businessConfig';

const Contact: React.FC = () => {
  const { contactPage } = siteData;
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: [] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const baseUrl = (import.meta.env.VITE_API_URL || 'https://api.comeagaintoursandtravels.com/api').replace(/\/+$/, '');
      const endpoint = baseUrl.endsWith('/api') ? `${baseUrl}/contact` : `${baseUrl}/api/contact`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.status === 422) {
        setErrors(data.errors || {});
      } else if (response.ok) {
        setSubmitted(true);
      } else {
        alert('An unexpected error occurred. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to connect to the server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
  };

  const contactItems = [
    {
      icon: <MessageSquare className="w-5 h-5 text-[#25D366]" />,
      label: 'WhatsApp (Instant Chat)',
      value: `${businessConfig.whatsapp.display} (${businessConfig.whatsapp.international})`,
      href: businessConfig.whatsapp.getLink('Hello Come Again Tours and Travels! I would like to request a quote.'),
      highlight: true,
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone Call (24/7 Desk)',
      value: `${businessConfig.phone.display} (${businessConfig.phone.international})`,
      href: businessConfig.phone.telLink,
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Official Email',
      value: businessConfig.email.primary,
      href: businessConfig.email.mailto,
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: 'Website',
      value: businessConfig.website.display,
      href: businessConfig.website.url,
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Physical Address',
      value: `${businessConfig.name}, ${businessConfig.location}`,
      href: 'https://maps.google.com/?q=Kampala,Uganda',
    },
  ];

  return (
    <div className="bg-[#0c1106] min-h-screen text-white selection:bg-brand-green selection:text-white overflow-x-hidden">
      <SEO 
        title="Contact / Request a Quote | Come Again Tours and Travels"
        description="Contact Come Again Tours and Travels Kampala, Uganda. WhatsApp: 0786016031, Phone: 0774243747, Email: info@comeagaintoursandtravels.com. Request a free safari quote."
        url={`${businessConfig.website.url}/contact`}
        canonical={`${businessConfig.website.url}/contact`}
      />
      <main>
        {/* 1. Hero — 90vh + Ken Burns */}
        <section className="relative h-[80vh] flex items-end overflow-hidden">
          <motion.div
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 18, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0 z-0"
          >
            <img
              src={contactPage.hero.image}
              alt="Contact Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
          </motion.div>

          <div className="relative z-10 w-full px-6 pb-4 flex flex-col items-end text-right">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-green text-sm font-bold uppercase tracking-[0.3em] mb-3 block"
            >
              Get in Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
              className="text-[3rem] md:text-[4rem] lg:text-[5rem] text-white leading-none drop-shadow-2xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}
            >
              Contact
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="text-white/80 text-xl md:text-2xl max-w-md mt-4 leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300 }}
            >
              {contactPage.hero.description}
            </motion.p>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-[2px] h-8 bg-gradient-to-b from-brand-green to-transparent"
            />
          </motion.div>
        </section>

        {/* 2. Intro */}
        <section className="py-4 px-4 bg-[#f4f7f4]">
          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-brand-green text-[11px] font-black uppercase tracking-[0.4em] mb-4"
            >
              {contactPage.intro.paragraph}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl md:text-6xl font-serif text-brand-green leading-[1.2]"
            >
              {contactPage.intro.heading}
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-16 h-[2px] bg-brand-green mt-8 origin-left"
            />
          </div>
        </section>

        {/* 3. Main Contact Grid */}
        <section className="py-24 px-4 bg-[#f4f7f4] border-t border-brand-green/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-20">

            {/* Left: Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="md:col-span-4 space-y-10"
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-3xl font-serif text-brand-dark mb-2">
                  {contactPage.getInTouch.title}
                </h3>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-[2px] bg-brand-green mb-6 origin-left"
                />
                <p className="text-brand-dark/60 italic text-sm leading-relaxed">
                  {contactPage.getInTouch.motto}
                </p>
              </motion.div>

              {contactItems.map((item, idx) => (
                <motion.a
                  key={idx}
                  variants={itemVariants}
                  href={item.href}
                  target={item.label === 'Our Office' ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-start gap-5 group"
                >
                  <div className="p-3 bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300 shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-brand-dark font-black text-[10px] uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    <p className="text-brand-dark text-lg font-serif group-hover:text-brand-green transition-colors duration-300 break-all">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85 }}
              className="md:col-span-8"
            >
              <div className="bg-white p-8 sm:p-12 shadow-sm border border-brand-green/10 text-left">
                {/* Prominent Instant WhatsApp Action Card */}
                <div className="mb-8 p-5 bg-[#e8f5e9] border border-[#25D366]/40 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[#1b5e20] text-xs font-bold uppercase tracking-wider block mb-1">
                      Prefer Instant Communication?
                    </span>
                    <h4 className="text-brand-dark font-serif font-bold text-lg">
                      Chat Directly on WhatsApp: {businessConfig.whatsapp.display}
                    </h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Fastest response from our Kampala reservations desk.
                    </p>
                  </div>
                  <a
                    href={businessConfig.whatsapp.getLink('Hello Come Again Tours and Travels! I would like to request a safari / car hire quote.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#1ebe5d] transition-all shadow-md shrink-0 flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" /> Open WhatsApp
                  </a>
                </div>

                <h3 className="text-3xl font-serif text-brand-dark mb-2">Request a Quote / Send Message</h3>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-[2px] bg-brand-green mb-10 origin-left"
                />

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-brand-green mb-6" />
                    <h4 className="text-2xl font-serif text-brand-dark mb-3">Message Sent!</h4>
                    <p className="text-brand-dark/60 max-w-sm">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-brand-dark uppercase tracking-widest">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`w-full bg-[#f4f7f4] border-b-2 ${errors.firstName && errors.firstName.length > 0 ? 'border-red-500' : 'border-transparent'} focus:border-brand-green focus:bg-white px-4 py-4 text-brand-dark outline-none transition-all duration-300`}
                        />
                        {errors.firstName && errors.firstName.length > 0 && <p className="text-red-500 text-xs mt-1">{errors.firstName[0]}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-brand-dark uppercase tracking-widest">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`w-full bg-[#f4f7f4] border-b-2 ${errors.lastName && errors.lastName.length > 0 ? 'border-red-500' : 'border-transparent'} focus:border-brand-green focus:bg-white px-4 py-4 text-brand-dark outline-none transition-all duration-300`}
                        />
                        {errors.lastName && errors.lastName.length > 0 && <p className="text-red-500 text-xs mt-1">{errors.lastName[0]}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-brand-dark uppercase tracking-widest">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-[#f4f7f4] border-b-2 ${errors.email && errors.email.length > 0 ? 'border-red-500' : 'border-transparent'} focus:border-brand-green focus:bg-white px-4 py-4 text-brand-dark outline-none transition-all duration-300`}
                      />
                      {errors.email && errors.email.length > 0 && <p className="text-red-500 text-xs mt-1">{errors.email[0]}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-brand-dark uppercase tracking-widest">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full bg-[#f4f7f4] border-b-2 ${errors.phone && errors.phone.length > 0 ? 'border-red-500' : 'border-transparent'} focus:border-brand-green focus:bg-white px-4 py-4 text-brand-dark outline-none transition-all duration-300`}
                      />
                      {errors.phone && errors.phone.length > 0 && <p className="text-red-500 text-xs mt-1">{errors.phone[0]}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-brand-dark uppercase tracking-widest">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={6}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full bg-[#f4f7f4] border-b-2 ${errors.message && errors.message.length > 0 ? 'border-red-500' : 'border-transparent'} focus:border-brand-green focus:bg-white px-4 py-4 text-brand-dark outline-none transition-all duration-300 resize-none`}
                      />
                      {errors.message && errors.message.length > 0 && <p className="text-red-500 text-xs mt-1">{errors.message[0]}</p>}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={!isSubmitting ? { scale: 1.03 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.97 } : {}}
                      className="flex items-center gap-3 px-12 py-4 bg-brand-green text-white font-bold text-xs tracking-widest uppercase hover:bg-brand-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className={`w-4 h-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. Google Map — Kampala, Uganda */}
        <section className="bg-[#f4f7f4] pb-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto px-4 pb-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <MapPin className="text-brand-green w-5 h-5 shrink-0" />
              <span className="text-brand-dark font-black text-xs uppercase tracking-widest">
                Find Us — Kampala, Uganda
              </span>
              <div className="flex-1 h-[1px] bg-brand-green/20" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full h-[520px] shadow-2xl"
          >
            <iframe
              title="Come Again Tours and Travels — Kampala, Uganda"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853791716!2d32.4500!3d0.3162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f9d74b39b%3A0x4256a56b1f544d1b!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1681000000000!5m2!1sen!2sug"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(15%) contrast(1.05)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
