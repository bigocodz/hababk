import React, { useState } from 'react';
import { Search, Globe, Menu, User, MapPin } from 'lucide-react';
import { ViewState } from '../types';
import { useLanguage } from '../src/contexts/LanguageContext';

interface NavbarProps {
  onNavigate: (view: ViewState) => void;
  isScrolled?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, isScrolled = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, toggleLanguage, language } = useLanguage();

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onNavigate('HOME')}
        >
          <div className="bg-primary-600 text-white p-1.5 rounded-lg">
            <MapPin size={24} />
          </div>
          <span className={`text-2xl font-bold font-arabic tracking-tight ${isScrolled ? 'text-primary-600' : 'text-white drop-shadow-md'}`}>
            حبابك <span className="text-sm font-sans font-medium opacity-90 hidden sm:inline-block">Hababak</span>
          </span>
        </div>

        {/* Search Bar (Fake) - visible on scroll or desktop */}
        <div className={`hidden md:flex items-center bg-white rounded-full border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 ${!isScrolled && 'opacity-0 pointer-events-none'}`}>
          <div className="px-4 py-2 border-r border-gray-200 text-sm font-medium hover:bg-gray-50 rounded-l-full transition-colors">{t('anywhere')}</div>
          <div className="px-4 py-2 border-r border-gray-200 text-sm font-medium hover:bg-gray-50 transition-colors">{t('anyWeek')}</div>
          <div className="px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 rounded-r-full transition-colors flex items-center gap-2">
            {t('addGuests')}
            <div className="p-2 bg-primary-600 rounded-full text-white shadow-sm">
              <Search size={14} strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* Right Menu */}
        <div className="flex items-center gap-4">
          <button className={`text-sm font-medium hover:bg-white/10 px-3 py-2 rounded-full transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            {t('becomeHost')}
          </button>
          <button
            onClick={toggleLanguage}
            className={`p-2 hover:bg-white/10 rounded-full transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'} flex items-center gap-1`}
          >
            <Globe size={18} />
            <span className="text-sm font-medium uppercase">{language === 'en' ? 'AR' : 'EN'}</span>
          </button>

          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full p-1 pl-3 hover:shadow-md transition-shadow cursor-pointer">
            <Menu size={18} className="text-gray-600" />
            <div className="bg-gray-500 rounded-full p-1 text-white">
              <User size={18} fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
