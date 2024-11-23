import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-12 rtl:space-x-reverse">
            <Link to="/" className="flex items-center">
              <img 
                src="https://res.cloudinary.com/dw5whgrjy/image/upload/v1732357260/%D8%AA%D8%B5%D9%85%D9%8A%D9%85_%D8%A8%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_h4pjqx.png" 
                alt="RA Logo" 
                className="h-12 w-auto"
              />
            </Link>
            
            <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              <Link to="/services" className="text-navy-800 hover:text-navy-600 font-serif text-lg">{t('nav.services')}</Link>
              <Link to="/portfolio" className="text-navy-800 hover:text-navy-600 font-serif text-lg">{t('nav.portfolio')}</Link>
              <Link to="/about" className="text-navy-800 hover:text-navy-600 font-serif text-lg">{t('nav.about')}</Link>
              <Link to="/contact" className="text-navy-800 hover:text-navy-600 font-serif text-lg">{t('nav.contact')}</Link>
            </div>
          </div>

          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <LanguageToggle />
            
            <button 
              className="hidden md:flex items-center space-x-2 text-navy-800 hover:text-navy-600"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <Link 
              to="/get-started"
              className="btn btn-primary hidden md:inline-flex"
            >
              {t('nav.getStarted')}
            </Link>
            
            <button 
              className="md:hidden p-2 text-navy-800 hover:text-navy-600"
              aria-label="Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/services"
                className="block px-3 py-2 text-navy-800 hover:text-navy-600 font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.services')}
              </Link>
              <Link 
                to="/portfolio"
                className="block px-3 py-2 text-navy-800 hover:text-navy-600 font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.portfolio')}
              </Link>
              <Link 
                to="/about"
                className="block px-3 py-2 text-navy-800 hover:text-navy-600 font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link 
                to="/contact"
                className="block px-3 py-2 text-navy-800 hover:text-navy-600 font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              <Link 
                to="/get-started"
                className="block px-3 py-2 text-navy-800 hover:text-navy-600 font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.getStarted')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}