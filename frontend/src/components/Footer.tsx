import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Music } from 'lucide-react';
import { siteData } from '../data/siteData';
import { Link } from 'react-router-dom';
import RegulatoryPartners from './RegulatoryPartners';

const Footer: React.FC = () => {
  const footerData = siteData.home.footer;

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

      <div className="py-20 px-4 md:px-12 lg:px-20">
        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-white">
          {/* 1. Quick Links */}
          <div>
            <h4 className="text-3xl font-serif font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Packages', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-white hover:text-brand-green transition-colors text-lg">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Reach Out */}
          <div>
            <h4 className="text-3xl font-serif font-bold mb-8">Reach Out</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>Tel: {footerData.contact.tel}</li>
              <li>Office line: {footerData.contact.office}</li>
              <li>Email: {footerData.contact.email}</li>
              <li>Postal address: {footerData.contact.postal}</li>
              <li>Location: {footerData.contact.location}</li>
              <li className="pt-4">
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

          {/* 3. Social Media */}
          <div>
            <h4 className="text-3xl font-serif font-bold mb-8">Social Media</h4>
            <ul className="space-y-5">
              {footerData.socials.map((social) => (
                <li key={social.name}>
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 hover:text-brand-green transition-colors text-lg"
                  >
                    {getIcon(social.icon)}
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Logo Column */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="p-4 inline-block shadow-xl mb-4 min-w-[200px]">
              <img 
                src={siteData.logo} 
                alt="Come Again Tours" 
                className="h-24 w-auto mx-auto object-contain"
              />
            </div>
            <p className="text-white font-bold italic text-sm text-center lg:text-right">
              More Than a Safari, It's a Story
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#e8f5e9] py-6 px-4 text-center">
        <p className="text-brand-dark text-[13px] font-bold tracking-tight">
          © 2026 Come Again Tours and Travels. All Rights Reserved. Powered by <a href="https://ack-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors underline decoration-brand-green/30 underline-offset-4">ACK Designs</a> 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
