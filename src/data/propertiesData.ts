export interface Property {
  id: number;
  title: string;
  type: string;
  price: string;
  currency: string;
  location: string;
  beds: number;
  baths: number;
  area: number;
  parking: number;
  image: string;
  images: string[];
  featured: boolean;
  rating: number;
  views: number;
  features: string[];
  agent: {
    name: string;
    phone: string;
  };
}

export const propertiesData = {
  EN: {
    title: "Premium Properties",
    subtitle: "Discover exceptional real estate opportunities across Saudi Arabia",
    searchPlaceholder: "Search by location, type, or features...",
    filters: ["All", "Villa", "Apartment", "Commercial", "Land"],
    priceRanges: ["All", "Under 1M", "1M - 5M", "5M - 10M", "10M+"],
    viewAll: "View All Properties",
    contact: "Contact Agent",
    schedule: "Schedule Visit",
    properties: [
      {
        id: 1,
        title: "DEL MAR COMPOUND",
        type: "Residential Compound",
        price: "Contact Us",
        currency: "",
        location: "Al-Thumamah Road, near Imam University, Riyadh",
        beds: 32,
        baths: 112,
        area: 25000,
        parking: 50,
        image: "/assets/images/projects/DMC/1.jpg",
        images: [
          "/assets/images/projects/DMC/1.jpg",
          "/assets/images/projects/DMC/2.jpg",
          "/assets/images/projects/DMC/3.JPG",
          "/assets/images/projects/DMC/4.jpg",
          "/assets/images/projects/DMC/5.jpg"
        ],
        featured: true,
        rating: 4.9,
        views: 1500,
        features: ["Gym", "Sauna", "Steam Room", "Swimming Pool", "Table Tennis", "Billiard Table", "Kids Playing Area", "Barbeque Area", "Restaurant", "Mini Market", "Coffee Shop", "Relaxation Area"],
        salesTeam: {
          phone: "+966 565222000"
        }
      }
    ]
  },
  AR: {
    title: "عقارات مميزة",
    subtitle: "اكتشف فرص عقارية استثنائية عبر المملكة العربية السعودية",
    searchPlaceholder: "البحث بالموقع أو النوع أو المميزات...",
    filters: ["الكل", "فيلا", "شقة", "تجاري", "أرض"],
    priceRanges: ["الكل", "أقل من مليون", "1-5 مليون", "5-10 مليون", "+10 مليون"],
    viewAll: "عرض جميع العقارات",
    contact: "تواصل مع الوكيل",
    schedule: "حجز موعد زيارة",
    properties: [
      {
        id: 1,
        title: "مجمع ديل مار السكني",
        type: "مجمع سكني",
        price: "تواصل معنا",
        currency: "",
        location: "طريق الثمامة، قرب جامعة الإمام، الرياض",
        beds: 32,
        baths: 112,
        area: 25000,
        parking: 50,
        image: "/assets/images/projects/DMC/1.jpg",
        images: [
          "/assets/images/projects/DMC/1.jpg",
          "/assets/images/projects/DMC/2.jpg",
          "/assets/images/projects/DMC/3.JPG",
          "/assets/images/projects/DMC/4.jpg",
          "/assets/images/projects/DMC/5.jpg"
        ],
        featured: true,
        rating: 4.9,
        views: 1500,
        features: ["نادي رياضي", "سونا", "غرفة بخار", "حمام سباحة", "تنس الطاولة", "طاولة البلياردو", "منطقة لعب الأطفال", "منطقة شوي", "مطعم", "ميني ماركت", "مقهى", "منطقة استرخاء"],
        agent: {
          name: "محمد طارق",
          phone: "+966 565222000"
        }
      }
    ]
  }
};

