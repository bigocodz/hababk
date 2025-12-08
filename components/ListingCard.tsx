import React from 'react';
import { Star, Heart } from 'lucide-react';
import { Listing } from '../types';
import { useLanguage } from '../src/contexts/LanguageContext';

interface ListingCardProps {
  listing: Listing;
  onClick: (id: string) => void;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing, onClick }) => {
  const { t, language } = useLanguage();

  const title = language === 'ar' && listing.titleAr ? listing.titleAr : listing.title;
  const location = language === 'ar' && listing.locationAr ? listing.locationAr : listing.location;
  const amenities = language === 'ar' && listing.amenitiesAr ? listing.amenitiesAr : listing.amenities;

  return (
    <div
      className="group cursor-pointer flex flex-col gap-2"
      onClick={() => onClick(listing.id)}
    >
      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-200">
        <img
          src={listing.imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <button className="absolute top-3 right-3 p-2 text-white/70 hover:text-white transition-colors hover:scale-110">
          <Heart size={24} fill="rgba(0,0,0,0.5)" strokeWidth={2} className="active:fill-red-500 active:text-red-500" />
        </button>
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold shadow-sm">
          GUEST FAVORITE
        </div>
      </div>

      <div className="flex justify-between items-start mt-1">
        <div>
          <h3 className="font-bold text-gray-900 truncate pr-2">{location}</h3>
          <p className="text-gray-500 text-sm">{t('viewOf')} {amenities[0]}</p>
          <p className="text-gray-500 text-sm">Oct 23 - 28</p>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="font-semibold text-gray-900">${listing.price}</span>
            <span className="text-gray-900">{t('night')}</span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-900">
          <Star size={14} fill="currentColor" />
          <span>{listing.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
