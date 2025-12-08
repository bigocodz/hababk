import { Listing } from './types';

export const SUDAN_CITIES = [
  "Khartoum",
  "Omdurman",
  "Port Sudan",
  "Kassala",
  "Merowe",
  "Al-Ubayyid"
];

export const SUDAN_CITIES_AR = [
  "الخرطوم",
  "أم درمان",
  "بورتسودان",
  "كسلا",
  "مروي",
  "الأبيض"
];

export const LISTINGS: Listing[] = [
  {
    id: '1',
    title: 'Modern Nile View Apartment',
    location: 'Khartoum, Khartoum State',
    price: 85,
    rating: 4.92,
    reviewsCount: 128,
    imageUrl: 'https://picsum.photos/id/122/800/600',
    category: 'Apartment',
    amenities: ['Nile View', 'Backup Generator', 'High-speed WiFi', 'AC', 'Security'],
    hostName: 'Ahmed',
    hostImage: 'https://picsum.photos/id/1005/100/100',
    description: 'Experience the beauty of the Blue Nile from this modern, fully furnished apartment in the heart of Khartoum. Located in the safe and upscale Riyadh district, you are minutes away from the best cafes and restaurants. Features 24/7 electricity with backup generator.',
    images: [
      'https://picsum.photos/id/122/800/600',
      'https://picsum.photos/id/101/800/600',
      'https://picsum.photos/id/102/800/600'
    ],
    titleAr: 'شقة عصرية بإطلالة على النيل',
    locationAr: 'الخرطوم، ولاية الخرطوم',
    categoryAr: 'شقة',
    amenitiesAr: ['إطلالة على النيل', 'مولد احتياطي', 'واي فاي عالي السرعة', 'تكييف', 'أمن'],
    hostNameAr: 'أحمد',
    descriptionAr: 'استمتع بجمال النيل الأزرق من هذه الشقة العصرية المفروشة بالكامل في قلب الخرطوم. تقع في حي الرياض الراقي والآمن، على بعد دقائق من أفضل المقاهي والمطاعم. تتميز بكهرباء 24/7 مع مولد احتياطي.'
  },
  {
    id: '2',
    title: 'Traditional Nubian House',
    location: 'Karima, Northern State',
    price: 45,
    rating: 4.85,
    reviewsCount: 84,
    imageUrl: 'https://picsum.photos/id/164/800/600',
    category: 'House',
    amenities: ['Traditional Breakfast', 'Desert Garden', 'Guide Available', 'AC'],
    hostName: 'Fatima',
    hostImage: 'https://picsum.photos/id/1011/100/100',
    description: 'Stay in a beautifully decorated traditional Nubian house near the holy mountain of Jebel Barkal. Immerse yourself in history and enjoy authentic Sudanese hospitality. Perfect base for exploring the Pyramids of Nuri and El Kurru.',
    images: [
      'https://picsum.photos/id/164/800/600',
      'https://picsum.photos/id/165/800/600',
      'https://picsum.photos/id/166/800/600'
    ],
    titleAr: 'منزل نوبي تقليدي',
    locationAr: 'كريمة، الولاية الشمالية',
    categoryAr: 'منزل',
    amenitiesAr: ['إفطار تقليدي', 'حديقة صحراوية', 'مرشد متاح', 'تكييف'],
    hostNameAr: 'فاطمة',
    descriptionAr: 'أقم في منزل نوبي تقليدي مزين بشكل جميل بالقرب من جبل البركل المقدس. انغمس في التاريخ واستمتع بالضيافة السودانية الأصيلة. قاعدة مثالية لاستكشاف أهرامات نوري والكرو.'
  },
  {
    id: '3',
    title: 'Red Sea Resort Villa',
    location: 'Port Sudan, Red Sea State',
    price: 150,
    rating: 4.95,
    reviewsCount: 56,
    imageUrl: 'https://picsum.photos/id/212/800/600',
    category: 'Villa',
    amenities: ['Private Beach Access', 'Scuba Gear', 'Pool', 'Chef'],
    hostName: 'Osman',
    hostImage: 'https://picsum.photos/id/1025/100/100',
    description: 'Luxury villa located directly on the Red Sea coast. Perfect for diving enthusiasts and families looking for a relaxing getaway. Includes access to a private coral reef section and snorkeling gear.',
    images: [
      'https://picsum.photos/id/212/800/600',
      'https://picsum.photos/id/213/800/600',
      'https://picsum.photos/id/214/800/600'
    ],
    titleAr: 'فيلا منتجع البحر الأحمر',
    locationAr: 'بورتسودان، ولاية البحر الأحمر',
    categoryAr: 'فيلا',
    amenitiesAr: ['شاطئ خاص', 'معدات غوص', 'مسبح', 'طباخ'],
    hostNameAr: 'عثمان',
    descriptionAr: 'فيلا فاخرة تقع مباشرة على ساحل البحر الأحمر. مثالية لعشاق الغوص والعائلات التي تبحث عن عطلة مريحة. تشمل الوصول إلى قسم خاص من الشعاب المرجانية ومعدات الغطس.'
  },
  {
    id: '4',
    title: 'Kassala Mountain Retreat',
    location: 'Kassala, Kassala State',
    price: 60,
    rating: 4.78,
    reviewsCount: 42,
    imageUrl: 'https://picsum.photos/id/401/800/600',
    category: 'Guesthouse',
    amenities: ['Mountain View', 'Hiking Trails', 'Local Coffee', 'Terrace'],
    hostName: 'Mohamed',
    hostImage: 'https://picsum.photos/id/103/100/100',
    description: 'Wake up to the breathtaking view of the Taka Mountains. This cozy guesthouse offers a perfect blend of comfort and nature. Famous for its fresh fruit gardens and traditional coffee ceremonies.',
    images: [
      'https://picsum.photos/id/401/800/600',
      'https://picsum.photos/id/402/800/600',
      'https://picsum.photos/id/403/800/600'
    ],
    titleAr: 'منتجع جبال كسلا',
    locationAr: 'كسلا، ولاية كسلا',
    categoryAr: 'بيت ضيافة',
    amenitiesAr: ['إطلالة جبلية', 'مسارات مشي', 'قهوة محلية', 'تراس'],
    hostNameAr: 'محمد',
    descriptionAr: 'استيقظ على المنظر الخلاب لجبال التاكا. يوفر بيت الضيافة المريح هذا مزيجًا مثاليًا من الراحة والطبيعة. يشتهر بحدائق الفاكهة الطازجة وجلسات القهوة التقليدية.'
  },
  {
    id: '5',
    title: 'Omdurman Heritage Home',
    location: 'Omdurman, Khartoum State',
    price: 35,
    rating: 4.60,
    reviewsCount: 95,
    imageUrl: 'https://picsum.photos/id/435/800/600',
    category: 'Room',
    amenities: ['Cultural Tours', 'Souq Access', 'Kitchen', 'Family Friendly'],
    hostName: 'Zeinab',
    hostImage: 'https://picsum.photos/id/338/100/100',
    description: 'Live in the historical capital of Sudan. Walking distance from the Omdurman Souq and the Mahdi Tomb. A vibrant neighborhood full of culture, music, and history.',
    images: [
      'https://picsum.photos/id/435/800/600',
      'https://picsum.photos/id/436/800/600',
      'https://picsum.photos/id/437/800/600'
    ],
    titleAr: 'منزل تراثي في أم درمان',
    locationAr: 'أم درمان، ولاية الخرطوم',
    categoryAr: 'غرفة',
    amenitiesAr: ['جولات ثقافية', 'قرب السوق', 'مطبخ', 'مناسب للعائلات'],
    hostNameAr: 'زينب',
    descriptionAr: 'عش في العاصمة التاريخية للسودان. على مسافة قريبة من سوق أم درمان وقبة المهدي. حي نابض بالحياة مليء بالثقافة والموسيقى والتاريخ.'
  },
  {
    id: '6',
    title: 'Dinder Park Safari Lodge',
    location: 'Dinder National Park, Sennar',
    price: 110,
    rating: 4.88,
    reviewsCount: 23,
    imageUrl: 'https://picsum.photos/id/526/800/600',
    category: 'Lodge',
    amenities: ['Safari Tours', 'Full Board', 'Nature Guide', 'Eco-Friendly'],
    hostName: 'Wildlife Team',
    hostImage: 'https://picsum.photos/id/530/100/100',
    description: 'An exclusive eco-lodge inside Dinder National Park. Experience the raw wildlife of Sudan. Lions, antelopes, and diverse bird species right at your doorstep.',
    images: [
      'https://picsum.photos/id/526/800/600',
      'https://picsum.photos/id/527/800/600',
      'https://picsum.photos/id/528/800/600'
    ],
    titleAr: 'نزل سفاري حديقة الدندر',
    locationAr: 'حديقة الدندر الوطنية، سنار',
    categoryAr: 'نزل',
    amenitiesAr: ['جولات سفاري', 'إقامة كاملة', 'مرشد طبيعي', 'صديق للبيئة'],
    hostNameAr: 'فريق الحياة البرية',
    descriptionAr: 'نزل بيئي حصري داخل حديقة الدندر الوطنية. جرب الحياة البرية الخام في السودان. الأسود والظباء وأنواع الطيور المتنوعة مباشرة عند عتبة دارك.'
  }
];
