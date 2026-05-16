import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { siteData } from '../data/siteData';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const location = useLocation();

  const navItems = siteData.navigation;

  const isNavActive = (href: string, name: string) => {
    if (name === 'Home' && location.pathname === '/') return true;
    if (href === '/packages' && location.pathname.startsWith('/package')) return true;
    return location.pathname === href;
  };

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md py-2 border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Container */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img 
              className="h-16 w-auto object-contain" 
              src={`${import.meta.env.BASE_URL}images/logo.png`} 
              alt="Come Again Tours" 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2 uppercase font-bold tracking-wider">
              {navItems.map((item) => (
                <div key={item.name} className="relative group flex items-center">
                  {item.dropdown ? (
                    <div 
                      onMouseEnter={() => setAboutDropdownOpen(true)}
                      onMouseLeave={() => setAboutDropdownOpen(false)}
                      className="relative h-20 flex items-center"
                    >
                      <button
                        className={`px-5 py-2 text-[13px] flex items-center transition-all ${
                          (location.pathname === item.href) ? 'text-brand-green' : 'text-gray-800 hover:text-brand-green'
                        }`}
                      >
                        {item.name} <ChevronDown className="ml-1 w-4 h-4" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div 
                        className={`absolute left-0 mt-0 w-64 bg-white shadow-2xl transition-all duration-200 origin-top flex flex-col border border-gray-100 ${
                          aboutDropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
                        }`}
                        style={{ top: '80%' }}
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="px-6 py-4 text-[12px] text-gray-700 hover:bg-brand-green hover:text-white transition-colors uppercase border-b border-gray-50 last:border-0"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-5 py-2 text-[13px] flex items-center transition-all relative group ${
                        isNavActive(item.href, item.name)
                          ? 'text-brand-green'
                          : 'text-gray-800 hover:text-brand-green'
                      }`}
                    >
                      {item.name}
                      <span className={`absolute bottom-0 left-5 right-5 h-[2px] bg-brand-green transition-transform duration-300 transform ${
                        isNavActive(item.href, item.name) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`} />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-brand-green focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed inset-0 top-24 bg-white transition-transform duration-300 z-40 overflow-y-auto`}>
        <div className="px-6 py-8 space-y-4">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <div className="space-y-2">
                  <div className="text-gray-400 text-xs font-bold uppercase tracking-widest pb-1">{item.name}</div>
                  <div className="pl-2 space-y-4 pt-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-gray-800 font-bold hover:text-brand-green uppercase text-lg"
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
                  className={`block py-3 text-2xl font-bold border-b border-gray-100 uppercase ${
                    isNavActive(item.href, item.name) ? 'text-brand-green' : 'text-gray-800'
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
