import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Music, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';
import { blogPosts } from '../data/blogData';
import { Link } from 'react-router-dom';
import RegulatoryPartners from './RegulatoryPartners';
import SafariTermsModal from './SafariTermsModal';
import { businessConfig } from '../data/businessConfig';

const Footer: React.FC = () => {
  const footerData = siteData.home.footer;
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const latestPosts = blogPosts.slice(0, 2);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'facebook': return <Facebook className="w-5 h-5 text-white-600" />;
      case 'twitter': return <Twitter className="w-5 h-5 text-white-600" />;
      case 'instagram': return <Instagram className="w-5 h-5 text-white-600" />;
      case 'music': return <Music className="w-5 h-5 text-white-600" />;
      case 'linkedin': return <Linkedin className="w-5 h-5 text-white-600" />;
      case 'youtube': return <Youtube className="w-5 h-5 text-white-600" />;
      default: return null;
    }
  };

  return (
    <footer className="bg-brand-dark">
      <RegulatoryPartners variant="footer" showNote={false} />

      <div className="py-16 px-8 sm:px-12 lg:px-20 xl:px-24 2xl:px-28 w-full">
        {/* 5-Column Layout with Equal Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 xl:gap-12 text-white w-full">
          {/* 1. Safari Planning & Core Destinations */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-2xl font-serif font-bold mb-6 text-white">Uganda Safaris</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/uganda-safaris" className="text-white hover:text-brand-green transition-colors text-sm font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span> Uganda Safaris Hub
                </Link>
              </li>
              <li>
                <Link to="/bwindi-gorilla-trekking" className="text-white hover:text-brand-green transition-colors text-sm font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span> Bwindi Gorilla Trekking
                </Link>
              </li>
              <li>
                <Link to="/queen-elizabeth-national-park-safaris" className="text-white hover:text-brand-green transition-colors text-sm font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span> Queen Elizabeth Safaris
                </Link>
              </li>
              <li>
                <Link to="/murchison-falls-safaris" className="text-white hover:text-brand-green transition-colors text-sm font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span> Murchison Falls Safaris
                </Link>
              </li>
              <li>
                <Link to="/kibale-chimpanzee-safaris" className="text-white hover:text-brand-green transition-colors text-sm font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span> Kibale Chimp Trekking
                </Link>
              </li>
              <li>
                <Link to="/car-hire-uganda" className="text-white hover:text-brand-green transition-colors text-sm font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span> 4x4 Car Hire with Driver
                </Link>
              </li>
              <li>
                <Link to="/destination" className="text-white hover:text-brand-green transition-colors text-sm font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span> Destinations (All Parks)
                </Link>
              </li>
            </ul>
          </div>

          {/* 2. Latest Posts Widget */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-2xl font-serif font-bold mb-6 text-white tracking-wide">Latest Posts</h4>
            <div className="space-y-4 w-full">
              {latestPosts.map((post, idx) => (
                <div key={post.slug}>
                  <div className="flex items-start gap-3 group">
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="relative shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-black/40 border border-white/10 group-hover:border-brand-green/60 transition-all shadow-md block"
                    >
                      <img 
                        src={post.featuredImage} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="text-xs sm:text-sm font-bold text-white hover:text-brand-green transition-colors line-clamp-2 leading-snug block group-hover:text-brand-green"
                      >
                        {post.title}
                      </Link>
                      <p className="text-[11px] text-gray-400 mt-1 truncate">
                        By <span className="text-gray-300 font-medium">{post.author.name.replace(/&.*/, '').trim()}</span>
                      </p>
                    </div>
                  </div>
                  {idx < latestPosts.length - 1 && (
                    <div className="border-t border-white/10 my-3.5" />
                  )}
                </div>
              ))}
            </div>
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green hover:text-white uppercase tracking-wider mt-5 transition-colors group"
            >
              Safari Journal <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 3. Reach Out */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-2xl font-serif font-bold mb-6 text-white">Reach Out</h4>
            <ul className="space-y-3.5 text-xs sm:text-sm font-medium text-gray-200">
              <li>
                <a 
                  href={businessConfig.whatsapp.getLink()} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-green transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#25D366] font-bold">WhatsApp:</span> {businessConfig.whatsapp.display}
                </a>
              </li>
              <li>
                <a href={businessConfig.phone.telLink} className="hover:text-brand-green transition-colors">
                  <span className="text-white font-bold">Phone:</span> {businessConfig.phone.display}
                </a>
              </li>
              <li className="break-all">
                <a href={businessConfig.email.mailto} className="hover:text-brand-green transition-colors">
                  <span className="text-white font-bold">Email:</span> {businessConfig.email.primary}
                </a>
              </li>
              <li>
                <span className="text-white font-bold">Location:</span> {businessConfig.location}
              </li>
              <li>
                <span className="text-white font-bold">Website:</span> {businessConfig.website.display}
              </li>
              <li className="pt-3">
                <a 
                  href={siteData.home.testimonials.tripadvisorUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 group"
                >
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 fill-[#34E0A1] text-[#34E0A1]" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-white group-hover:text-[#34E0A1] transition-colors">Tripadvisor 5.0</span>
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Social Media */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-2xl font-serif font-bold mb-6 text-white">Social Media</h4>
            <ul className="space-y-4">
              {footerData.socials.map((social) => (
                <li key={social.name}>
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 hover:text-brand-green transition-colors text-sm sm:text-base font-medium"
                  >
                    {getIcon(social.icon)}
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Logo Column (Card removed, pure transparent logo) */}
          <div className="flex flex-col items-start text-left">
            <img 
              src={siteData.logo} 
              alt="Come Again Tours" 
              className="h-20 lg:h-24 w-auto object-contain mb-4"
            />
            <p className="text-white font-bold italic text-sm">
              More Than a Safari, It's a Story
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#e8f5e9] py-5 px-8 sm:px-12 lg:px-20 xl:px-24 2xl:px-28 w-full">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-brand-dark text-[13px] font-bold tracking-tight">
            © 2026 Come Again Tours and Travels. All Rights Reserved. Powered by <a href="https://ack-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors underline decoration-brand-green/30 underline-offset-4">ACK Designs</a> 
          </p>
          <div className="flex items-center gap-4 text-xs font-semibold text-brand-dark/80">
            <button 
              onClick={() => setIsTermsOpen(true)}
              className="hover:text-brand-green transition-colors underline underline-offset-2"
            >
              Booking & Cancellation Policy
            </button>
            <span>•</span>
            <Link to="/contact" className="hover:text-brand-green transition-colors">
              Support Desk
            </Link>
          </div>
        </div>
      </div>

      {/* Booking Terms & Cancellation Policy Modal */}
      <SafariTermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </footer>
  );
};

export default Footer;
