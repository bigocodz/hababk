export interface Listing {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  category: string;
  amenities: string[];
  hostName: string;
  hostImage: string;
  description: string;
  images: string[];
  titleAr?: string;
  locationAr?: string;
  categoryAr?: string;
  amenitiesAr?: string[];
  descriptionAr?: string;
  hostNameAr?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export type ViewState = 'HOME' | 'DETAILS' | 'SEARCH';
