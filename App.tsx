import React, { useState, useEffect } from 'react';
import { useLanguage } from './src/contexts/LanguageContext';
import Navbar from './components/Navbar';
import ListingCard from './components/ListingCard';
import ListingDetails from './components/ListingDetails';
import AIConcierge from './components/AIConcierge';
import { LISTINGS, SUDAN_CITIES, SUDAN_CITIES_AR } from './constants';
import { Listing, ViewState } from './types';
import { Search } from 'lucide-react';

const App: React.FC = () => {
  const { t, language } = useLanguage();
  const [view, setView] = useState<ViewState>('HOME');
  const [selectedListingId, setSelectedListingId] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleListingClick = (id: string) => {
    setSelectedListingId(id);
    setView('DETAILS');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setView('HOME');
    setSelectedListingId(null);
  };

  const selectedListing = LISTINGS.find(l => l.id === selectedListingId);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar onNavigate={(v) => setView(v)} isScrolled={isScrolled || view === 'DETAILS'} />

      {view === 'HOME' && (
        <main>
          {/* Hero Section */}
          <div className="relative h-[550px] w-full bg-black">
            <div className="absolute inset-0 overflow-hidden">
              <iframe
                className="w-full h-full object-cover pointer-events-none scale-150"
                src="https://www.youtube.com/embed/RyFmeuMa_4s?autoplay=1&mute=1&controls=0&loop=1&playlist=RyFmeuMa_4s&showinfo=0&rel=0&iv_load_policy=3&disablekb=1"
                title="Background Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg tracking-tight">
                {t('heroTitle')}
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl drop-shadow-md">
                {t('heroSubtitle')}
              </p>

              {/* Search Bar - Big Version */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full shadow-2xl flex flex-col md:flex-row items-center max-w-3xl w-full transition-all hover:bg-white/20 hover:scale-[1.01] duration-300">
                <div className="flex-1 px-6 py-3 border-b md:border-b-0 md:border-r border-white/20 w-full hover:bg-white/10 rounded-full transition-colors cursor-pointer text-left group">
                  <div className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-yellow-400 transition-colors">{t('location')}</div>
                  <input type="text" placeholder={t('locationPlaceholder')} className="w-full text-sm text-white/90 placeholder-white/60 bg-transparent outline-none mt-1" />
                </div>
                <div className="flex-1 px-6 py-3 border-b md:border-b-0 md:border-r border-white/20 w-full hover:bg-white/10 rounded-full transition-colors cursor-pointer text-left group">
                  <div className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-yellow-400 transition-colors">{t('checkIn')}</div>
                  <div className="text-sm text-white/80 mt-1">{t('addDates')}</div>
                </div>
                <div className="flex-1 px-6 py-3 border-b md:border-b-0 md:border-r border-white/20 w-full hover:bg-white/10 rounded-full transition-colors cursor-pointer text-left group">
                  <div className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-yellow-400 transition-colors">{t('checkOut')}</div>
                  <div className="text-sm text-white/80 mt-1">{t('addDates')}</div>
                </div>
                <div className="flex-1 px-6 py-3 w-full hover:bg-white/10 rounded-full transition-colors cursor-pointer text-left relative group">
                  <div className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-yellow-400 transition-colors">{t('guests')}</div>
                  <div className="text-sm text-white/80 mt-1">{t('addGuests')}</div>
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-600 hover:bg-primary-500 text-white p-3 rounded-full transition-all shadow-lg hover:scale-110 hover:shadow-primary-600/50">
                    <Search size={20} strokeWidth={3} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* City Filter / Quick Links */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('exploreByCity')}</h2>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {(language === 'ar' ? SUDAN_CITIES_AR : SUDAN_CITIES).map((city, idx) => (
                <button
                  key={idx}
                  className="flex-shrink-0 px-6 py-3 bg-white border border-gray-200 rounded-xl hover:border-black hover:shadow-md transition-all text-sm font-medium whitespace-nowrap"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          {/* Listings Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
              {LISTINGS.map(listing => (
                <ListingCard
                  key={listing.id}
                  listing={listing}
                  onClick={handleListingClick}
                />
              ))}
            </div>
          </div>
        </main>
      )}

      {view === 'DETAILS' && selectedListing && (
        <ListingDetails
          listing={selectedListing}
          onBack={handleBackToHome}
        />
      )}

      <AIConcierge />

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">{t('support')}</h3>
            <ul className="space-y-3">
              <li>{t('helpCenter')}</li>
              <li>{t('hababakCover')}</li>
              <li>{t('antiDiscrimination')}</li>
              <li>{t('disabilitySupport')}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">{t('hosting')}</h3>
            <ul className="space-y-3">
              <li>{t('hababakYourHome')}</li>
              <li>{t('airCoverForHosts')}</li>
              <li>{t('hostingResources')}</li>
              <li>{t('communityForum')}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">{t('hababak')}</h3>
            <ul className="space-y-3">
              <li>{t('newsroom')}</li>
              <li>{t('newFeatures')}</li>
              <li>{t('careers')}</li>
              <li>{t('investors')}</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span>© 2024 Hababak, Inc.</span>
            <span>·</span>
            <span className="hover:underline cursor-pointer">{t('privacy')}</span>
            <span>·</span>
            <span className="hover:underline cursor-pointer">{t('terms')}</span>
            <span>·</span>
            <span className="hover:underline cursor-pointer">{t('sitemap')}</span>
          </div>
          <div className="flex gap-4">
            <span className="font-medium">English (US)</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
