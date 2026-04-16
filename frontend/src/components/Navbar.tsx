import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { siteData } from '../data/siteData';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = siteData.navigation;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-brand-dark shadow-2xl py-2' : 'bg-transparent py-4 text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo in White Box Container */}
          <Link to="/" className="flex-shrink-0 relative">
            <div className="shadow-lg absolute -top-8 left-0 min-w-[180px] flex items-center justify-center">
               <img 
                 className="h-20 w-auto object-contain" 
                 src={`${import.meta.env.BASE_URL}images/logo.png`} 
                 alt="Come Again Tours" 
               />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-0 uppercase font-bold tracking-wider">
              {navItems.map((item) => (
                <div key={item.name} className="relative group flex items-center">
                  {item.dropdown ? (
                    <div 
                      onMouseEnter={() => setAboutDropdownOpen(true)}
                      onMouseLeave={() => setAboutDropdownOpen(false)}
                      className="relative h-20 flex items-center"
                    >
                      <button
                        className={`px-6 py-2 text-[13px] flex items-center transition-all ${
                          (location.pathname === item.href) ? 'bg-brand-green text-white' : 'hover:bg-brand-green'
                        }`}
                      >
                        {item.name} <ChevronDown className="ml-1 w-4 h-4" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div 
                        className={`absolute left-0 mt-0 w-56 bg-brand-green shadow-xl transition-all duration-200 origin-top flex flex-col ${
                          aboutDropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
                        }`}
                        style={{ top: '100%' }}
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="px-6 py-4 text-[12px] text-white hover:bg-brand-dark transition-colors uppercase border-b border-white/10 last:border-0"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-6 py-2 text-[13px] flex items-center transition-all ${
                        (location.pathname === item.href || (item.name === 'Home' && location.pathname === '/')) 
                          ? 'bg-[#6ab43e] text-white' 
                          : 'hover:bg-[#6ab43e]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center pt-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-brand-green focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed inset-0 top-24 bg-brand-dark transition-transform duration-300 z-40 overflow-y-auto`}>
        <div className="px-6 py-8 space-y-4">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <div className="space-y-2">
                  <div className="text-brand-green text-lg font-bold border-b border-white/10 pb-2 uppercase">{item.name}</div>
                  <div className="pl-4 space-y-4 pt-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-gray-300 hover:text-white uppercase text-sm"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 text-lg font-bold border-b border-white/10 uppercase ${
                    location.pathname === item.href ? 'text-brand-green' : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
