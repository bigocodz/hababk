import React from 'react';
import { Star, MapPin, Share, Heart, Wifi, Car, Coffee, Shield, CheckCircle } from 'lucide-react';
import { Listing } from '../types';
import { useLanguage } from '../src/contexts/LanguageContext';

interface ListingDetailsProps {
  listing: Listing;
  onBack: () => void;
}

const ListingDetails: React.FC<ListingDetailsProps> = ({ listing, onBack }) => {
  const { t, language } = useLanguage();

  const title = language === 'ar' && listing.titleAr ? listing.titleAr : listing.title;
  const location = language === 'ar' && listing.locationAr ? listing.locationAr : listing.location;
  const category = language === 'ar' && listing.categoryAr ? listing.categoryAr : listing.category;
  const amenities = language === 'ar' && listing.amenitiesAr ? listing.amenitiesAr : listing.amenities;
  const description = language === 'ar' && listing.descriptionAr ? listing.descriptionAr : listing.description;
  const hostName = language === 'ar' && listing.hostNameAr ? listing.hostNameAr : listing.hostName;

  return (
    <div className="pt-24 pb-12 min-h-screen bg-white animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-6">
          <button onClick={onBack} className="text-sm font-medium underline mb-4 text-gray-600 hover:text-gray-900">
            &larr; {t('backToSearch')}
          </button>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{title}</h1>
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <Star size={16} fill="currentColor" />
              <span className="font-medium">{listing.rating}</span>
              <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
              <span className="underline font-medium">{listing.reviewsCount} {t('reviews')}</span>
              <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
              <span className="flex items-center gap-1 font-medium underline text-gray-700">
                <MapPin size={14} />
                {location}
              </span>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors">
                <Share size={16} />
                <span className="underline">{t('share')}</span>
              </button>
              <button className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors">
                <Heart size={16} />
                <span className="underline">{t('save')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-2 h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
          <div className="col-span-2 row-span-2 relative group">
            <img src={listing.images[0]} alt="Main" className="w-full h-full object-cover group-hover:brightness-95 transition-all" />
          </div>
          <div className="hidden md:block relative group">
            <img src={listing.images[1]} alt="Sub 1" className="w-full h-full object-cover group-hover:brightness-95 transition-all" />
          </div>
          <div className="hidden md:block relative group">
            <img src={listing.images[2]} alt="Sub 2" className="w-full h-full object-cover group-hover:brightness-95 transition-all" />
          </div>
          <div className="hidden md:block relative group">
            <img src={listing.images[0]} alt="Sub 3" className="w-full h-full object-cover group-hover:brightness-95 transition-all" />
          </div>
          <div className="hidden md:block relative group">
            <img src={listing.images[1]} alt="Sub 4" className="w-full h-full object-cover group-hover:brightness-95 transition-all" />
            <button className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg text-sm font-medium border border-gray-900 shadow-sm hover:scale-105 transition-transform">
              {t('showAllPhotos')}
            </button>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Left Column */}
          <div className="md:col-span-2">
            <div className="flex justify-between items-center pb-6 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-semibold mb-1">{category} {t('hostedBy')} {hostName}</h2>
                <p className="text-gray-500">4 {t('guestsLabel')} · 2 {t('bedrooms')} · 2 {t('beds')} · 1 {t('bath')}</p>
              </div>
              <img src={listing.hostImage} alt={hostName} className="w-14 h-14 rounded-full border border-gray-200 object-cover" />
            </div>

            <div className="py-8 border-b border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="text-gray-900 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900">{t('hababakSecure')}</h3>
                  <p className="text-gray-500 text-sm">{t('secureDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-gray-900 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900">{t('selfCheckIn')}</h3>
                  <p className="text-gray-500 text-sm">{t('selfCheckInDesc')}</p>
                </div>
              </div>
            </div>

            <div className="py-8 border-b border-gray-200">
              <h2 className="text-xl font-semibold mb-4">{t('aboutPlace')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
            </div>

            <div className="py-8 border-b border-gray-200">
              <h2 className="text-xl font-semibold mb-6">{t('offers')}</h2>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-700">
                    <div className="w-6"><Wifi size={20} className="text-gray-500" /></div>
                    <span>{amenity}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-6"><Car size={20} className="text-gray-500" /></div>
                  <span>{t('freeParking')}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-6"><Coffee size={20} className="text-gray-500" /></div>
                  <span>{t('localCoffee')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Sticky Booking Widget) */}
          <div className="relative">
            <div className="sticky top-32 border border-gray-200 rounded-xl p-6 shadow-xl bg-white">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-2xl font-bold">${listing.price}</span>
                  <span className="text-gray-500"> night</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Star size={14} fill="currentColor" />
                  <span className="font-medium">{listing.rating}</span>
                  <span className="text-gray-400">·</span>
                  <span className="underline text-gray-500">{listing.reviewsCount} {t('reviews')}</span>
                </div>
              </div>

              <div className="border border-gray-400 rounded-lg overflow-hidden mb-4">
                <div className="grid grid-cols-2 border-b border-gray-400">
                  <div className="p-3 border-r border-gray-400">
                    <div className="text-[10px] font-bold uppercase text-gray-800">{t('checkIn')}</div>
                    <div className="text-sm text-gray-600">{t('addDates')}</div>
                  </div>
                  <div className="p-3">
                    <div className="text-[10px] font-bold uppercase text-gray-800">{t('checkOut')}</div>
                    <div className="text-sm text-gray-600">{t('addDates')}</div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="text-[10px] font-bold uppercase text-gray-800">{t('guests')}</div>
                  <div className="text-sm text-gray-600">1 {t('guestsLabel')}</div>
                </div>
              </div>

              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-lg transition-colors mb-4">
                {t('reserve')}
              </button>

              <div className="text-center text-sm text-gray-500 mb-6">{t('wontCharge')}</div>

              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span className="underline">${listing.price} x 5 {t('night')}s</span>
                  <span>${listing.price * 5}</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">{t('cleaningFee')}</span>
                  <span>$15</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">{t('serviceFee')}</span>
                  <span>$25</span>
                </div>
                <div className="h-px bg-gray-200 my-4"></div>
                <div className="flex justify-between font-bold text-lg">
                  <span>{t('total')}</span>
                  <span>${(listing.price * 5) + 15 + 25}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
