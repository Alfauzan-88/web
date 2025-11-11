import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TransparentNavigation from '@/components/TransparentNavigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import RiyalIcon from '@/components/RiyalIcon';
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Car,
  Heart,
  Share2,
  Phone,
  Mail,
  Calendar,
  Star,
  Eye,
  Wifi,
  Shield,
  Zap,
  Trees,
  Camera,
  ChevronLeft,
  ChevronRight,
  Users,
  Building,
  Home,
  Waves,
  Dumbbell,
  Coffee,
  Utensils,
  ShoppingBag,
  Gamepad2,
  Sun,
  Mountain
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const DelMarCompound = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);

  const content = {
    EN: {
      propertyOverview: "Property Overview",
      features: "Features & Amenities",
      neighborhood: "Neighborhood",
      contactAgent: "Contact Agent",
      scheduleViewing: "Schedule Viewing",
      share: "Share Property",
      save: "Save Property",
      description: "Description",
      specifications: "Specifications",
      rentalDetails: "Rental Details",
      amenities: "Amenities",
      location: "Location",
      gallery: "Gallery",
      contactUs: "Contact Us",
      viewOnMap: "View on Map",
      totalArea: "Total Area",
      villas: "Villas",
      apartments: "Apartments",
      parkingSpaces: "Parking Spaces",
      yearBuilt: "Year Built",
      status: "Status",
      projectType: "Project Type",
      locationDetails: "Location Details",
      aboutProject: "About the Project",
      targetClients: "Target Clients",
      availableServices: "Available Services",
      designInfrastructure: "Design & Infrastructure"
    },
    AR: {
      propertyOverview: "نظرة عامة على العقار",
      features: "المميزات والمرافق",
      neighborhood: "الحي",
      contactAgent: "تواصل مع الوكيل",
      scheduleViewing: "حجز موعد زيارة",
      share: "مشاركة العقار",
      save: "حفظ العقار",
      description: "الوصف",
      specifications: "المواصفات",
      rentalDetails: "تفاصيل الإيجار",
      amenities: "المرافق",
      location: "الموقع",
      gallery: "المعرض",
      contactUs: "تواصل معنا",
      viewOnMap: "عرض على الخريطة",
      totalArea: "المساحة الإجمالية",
      villas: "الفيلات",
      apartments: "الشقق",
      parkingSpaces: "مواقف السيارات",
      yearBuilt: "سنة البناء",
      status: "الحالة",
      projectType: "نوع المشروع",
      locationDetails: "تفاصيل الموقع",
      aboutProject: "حول المشروع",
      targetClients: "العملاء المستهدفون",
      availableServices: "الخدمات المتاحة",
      designInfrastructure: "التصميم والبنية التحتية"
    }
  };

  const currentContent = content[language];

  const property = {
    title: language === 'EN' ? "DEL MAR COMPOUND" : "مجمع ديل مار السكني",
    subtitle: language === 'EN' 
      ? "The newest private residential project of Al-Fauzan group" 
      : "أحدث المشاريع السكنية الخاصة من مجموعة الفوزان",
    type: language === 'EN' ? "Residential Compound" : "مجمع سكني",
    price: language === 'EN' ? "Contact Us" : "تواصل معنا",
    location: language === 'EN' 
      ? "Al-Thumamah Road, near Imam University, Riyadh, Saudi Arabia" 
      : "طريق الثمامة، قرب جامعة الإمام، الرياض، المملكة العربية السعودية",
    totalArea: "25,000 m²",
    villas: 32,
    apartments: 112,
    buildings: 4,
    parking: 208,
    yearBuilt: 2024,
    status: language === 'EN' ? "Under Construction" : "قيد الإنشاء",
    heroImage: "/assets/images/projects/DMC/1.jpg",
    images: [
      "/assets/images/projects/DMC/1.jpg",
      "/assets/images/projects/DMC/2.jpg",
      "/assets/images/projects/DMC/3.JPG",
      "/assets/images/projects/DMC/4.jpg",
      "/assets/images/projects/DMC/5.jpg",
      "/assets/images/projects/DMC/6.jpg",
      "/assets/images/projects/DMC/7.jpg",
      "/assets/images/projects/DMC/8.jpg",
      "/assets/images/projects/DMC/9.jpg",
      "/assets/images/projects/DMC/10.jpg",
      "/assets/images/projects/DMC/11.jpg",
      "/assets/images/projects/DMC/12.jpg",
      "/assets/images/projects/DMC/13.jpg",
      "/assets/images/projects/DMC/14.JPG",
      "/assets/images/projects/DMC/15.JPG",
      "/assets/images/projects/DMC/16.JPG",
      "/assets/images/projects/DMC/17.JPG",
      "/assets/images/projects/DMC/18.JPG",
      "/assets/images/projects/DMC/19.JPG",
      "/assets/images/projects/DMC/20.jpg",
      "/assets/images/projects/DMC/21.JPG",
      "/assets/images/projects/DMC/22.JPG",
      "/assets/images/projects/DMC/23.JPG",
      "/assets/images/projects/DMC/24.JPG",
      "/assets/images/projects/DMC/25.JPG",
      "/assets/images/projects/DMC/26.JPG",
      "/assets/images/projects/DMC/27.jpg",
      "/assets/images/projects/DMC/28.jpg",
      "/assets/images/projects/DMC/29.JPG",
      "/assets/images/projects/DMC/30.JPG",
      "/assets/images/projects/DMC/31.JPG",
      "/assets/images/projects/DMC/32.JPG",
      "/assets/images/projects/DMC/33.JPG",
      "/assets/images/projects/DMC/34.JPG",
      "/assets/images/projects/DMC/35.JPG",
      "/assets/images/projects/DMC/36.JPG",
      "/assets/images/projects/DMC/37.JPG",
      "/assets/images/projects/DMC/38.JPG",
      "/assets/images/projects/DMC/39.JPG",
      "/assets/images/projects/DMC/40.jpg",
      "/assets/images/projects/DMC/41.JPG",
      "/assets/images/projects/DMC/42.JPG",
      "/assets/images/projects/DMC/43.JPG",
      "/assets/images/projects/DMC/44.JPG",
      "/assets/images/projects/DMC/45.JPG",
      "/assets/images/projects/DMC/46.JPG",
      "/assets/images/projects/DMC/47.jpg"
    ],
    description: language === 'EN'
      ? "Del Mar Compound, the newest private residential project of Al-Fauzan group. Del Mar is located in Al-Thumamah Road close to Al-Imam University, Riyadh, Saudi Arabia. Del Mar resident has 32 villas, 4 building containing 112 residential apartment, with total area of 25,000 Sqm. Del Mar provides our residents with a pleasant environment and facilities such as Gym, Swimming Pool, Kids playing area, Barbeque Area, Mini Market and relaxation area."
      : "مجمع ديل مار، أحدث المشاريع السكنية الخاصة من مجموعة الفوزان، يقع في طريق الثمامة بالغرب من جامعة الإمام، الرياض، المملكة العربية السعودية. ديل مار يحتوي على 32 فيلا و 4 بنايات تحتوي على 112 شقة سكنية بمساحة إجمالية قدرها 25,000 متر مربع. تقدم ديل مار للمقيمين بها بيئة ممتعة ومرافق مثل: نادي رياضي، حمام سباحة، منطقة لعب الأطفال، منطقة شوي، ميني ماركت ومنطقة الاسترخاء.",
    features: language === 'EN' ? [
      "Gym",
      "Swimming Pool",
      "Kids Playing Area",
      "Barbeque Area",
      "Mini Market",
      "Relaxation Area"
    ] : [
      "نادي رياضي",
      "حمام سباحة",
      "منطقة لعب الأطفال",
      "منطقة شوي",
      "ميني ماركت",
      "منطقة استرخاء"
    ],
    amenities: [
      { icon: Dumbbell, name: language === 'EN' ? "Gym" : "نادي رياضي" },
      { icon: Waves, name: language === 'EN' ? "Swimming Pool" : "حمام سباحة" },
      { icon: Users, name: language === 'EN' ? "Kids Playing Area" : "منطقة لعب الأطفال" },
      { icon: Utensils, name: language === 'EN' ? "Barbeque Area" : "منطقة شوي" },
      { icon: ShoppingBag, name: language === 'EN' ? "Mini Market" : "ميني ماركت" },
      { icon: Trees, name: language === 'EN' ? "Relaxation Area" : "منطقة استرخاء" }
    ],
    salesTeam: {
      phone: "+966 565222000",
      email: "it@alfauzan.com"
    },
    neighborhood: {
      schools: language === 'EN' ? ["Imam University", "Al-Thumamah Schools"] : ["جامعة الإمام", "مدارس الثمامة"],
      hospitals: language === 'EN' ? ["King Fahd Medical City", "Al-Thumamah Medical Center"] : ["مدينة الملك فهد الطبية", "مركز الثمامة الطبي"],
      malls: language === 'EN' ? ["Al-Thumamah Mall", "Granada Center"] : ["مول الثمامة", "مركز غرناطة"],
      restaurants: language === 'EN' ? ["The Globe", "Al-Thumamah Café", "Spazio"] : ["ذا جلوب", "مقهى الثمامة", "سبازيو"]
    },
    mapUrl: "https://www.google.com/maps/place/Del+Mar+Compound/@24.8468047,46.7754497,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2efed0739f1581:0xebd9e10db3ab3a42!8m2!3d24.8468047!4d46.7754497!16s%2Fg%2F11c1s280mq?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Global Video Background */}
      <div className="fixed inset-0 w-screen h-screen z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/hero-banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <TransparentNavigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 text-white px-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            {property.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-white/90 max-w-4xl mx-auto px-4" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            {property.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-lg text-white/80 px-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-center">{property.location}</span>
            </div>
          </div>
        </div>

      </section>

      {/* Property Overview */}
      <section className="relative z-10 py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Gallery */}
              <div className="relative mb-12">
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10">
                  <img 
                    src={property.images[currentImageIndex]} 
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Navigation Arrows */}
                  <Button
                    onClick={prevImage}
                    variant="outline"
                    size="icon"
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 w-8 h-8 md:w-10 md:h-10"
                  >
                    <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                  </Button>
                  <Button
                    onClick={nextImage}
                    variant="outline"
                    size="icon"
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 w-8 h-8 md:w-10 md:h-10"
                  >
                    <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                  </Button>
                </div>
                
                {/* Thumbnail Navigation */}
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-12 sm:w-20 sm:h-16 rounded-lg overflow-hidden bg-black/20 backdrop-blur-sm border ${
                        index === currentImageIndex ? 'border-yellow-400' : 'border-white/20'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`${property.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-8 md:mb-12 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">{currentContent.description}</h2>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                  {property.description}
                </p>
              </div>

              {/* Specifications */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">{currentContent.specifications}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl">
                    <Square className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="font-semibold text-white text-sm md:text-base">{currentContent.totalArea}</p>
                      <p className="text-gray-300 text-sm md:text-base">{property.totalArea}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl">
                    <Home className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="font-semibold text-white text-sm md:text-base">{currentContent.villas}</p>
                      <p className="text-gray-300 text-sm md:text-base">{property.villas}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl">
                    <Building className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="font-semibold text-white text-sm md:text-base">{currentContent.apartments}</p>
                      <p className="text-gray-300 text-sm md:text-base">{property.apartments}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl">
                    <Car className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="font-semibold text-white text-sm md:text-base">{currentContent.parkingSpaces}</p>
                      <p className="text-gray-300 text-sm md:text-base">{property.parking}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rental Details */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">{currentContent.rentalDetails}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="p-4 md:p-6 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl">
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-yellow-400">{language === 'EN' ? 'Furnished Flats' : 'الشقق المفروشة'}</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white text-sm md:text-base">{language === 'EN' ? '02 Bedrooms' : 'غرفتي نوم'}</span>
                        <div className="flex items-center gap-1 text-yellow-400 font-semibold text-sm md:text-base">
                          <span>70,000</span>
                          <RiyalIcon className="w-3 h-3 md:w-4 md:h-4" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white">{language === 'EN' ? '03 Bedrooms' : '3 غرف نوم'}</span>
                        <div className="flex items-center gap-1 text-yellow-400 font-semibold">
                          <span>80,000</span>
                          <RiyalIcon className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 md:p-6 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl">
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-yellow-400">{language === 'EN' ? 'Furnished Villas' : 'الفيلات المفروشة'}</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white">{language === 'EN' ? '03 Bedrooms' : '3 غرف نوم'}</span>
                        <div className="flex items-center gap-1 text-yellow-400 font-semibold">
                          <span>90,000</span>
                          <RiyalIcon className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 md:p-6 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl">
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-yellow-400">{language === 'EN' ? 'Furnished Studios' : 'الاستوديوهات المفروشة'}</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white">{language === 'EN' ? '01 Bedroom' : 'غرفة نوم واحدة'}</span>
                        <div className="flex items-center gap-1 text-yellow-400 font-semibold">
                          <span>55,000</span>
                          <RiyalIcon className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 md:p-6 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl">
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-yellow-400">{language === 'EN' ? 'Additional Fees' : 'الرسوم الإضافية'}</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white">{language === 'EN' ? 'Security Deposit (Refundable)' : 'الوديعة الأمنية (قابلة للاسترداد)'}</span>
                        <div className="flex items-center gap-1 text-yellow-400 font-semibold">
                          <span>5,000</span>
                          <RiyalIcon className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white">{language === 'EN' ? 'Administration Fees (Non-Refundable)' : 'رسوم الإدارة (غير قابلة للاسترداد)'}</span>
                        <span className="text-yellow-400 font-semibold">2.5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">{currentContent.amenities}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 md:p-4 bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl">
                      <amenity.icon className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 flex-shrink-0" />
                      <span className="font-medium text-white text-sm md:text-base">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Neighborhood */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">{currentContent.neighborhood}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white">{language === 'EN' ? 'Schools' : 'المدارس'}</h3>
                    <ul className="space-y-2">
                      {property.neighborhood.schools.map((school, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          {school}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white">{language === 'EN' ? 'Hospitals' : 'المستشفيات'}</h3>
                    <ul className="space-y-2">
                      {property.neighborhood.hospitals.map((hospital, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          {hospital}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white">{language === 'EN' ? 'Shopping Centers' : 'مراكز التسوق'}</h3>
                    <ul className="space-y-2">
                      {property.neighborhood.malls.map((mall, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          {mall}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white">{language === 'EN' ? 'Restaurants' : 'المطاعم'}</h3>
                    <ul className="space-y-2">
                      {property.neighborhood.restaurants.map((restaurant, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          {restaurant}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 mt-8 lg:mt-0">
                             {/* Contact Card */}
               <div className="sticky top-8 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6">
                 <div className="text-center mb-4 md:mb-6">
                   <h3 className={`text-lg md:text-xl font-bold text-white ${language === 'AR' ? 'font-arabic' : ''}`}>
                     {language === 'EN' ? 'Contact Sales Team' : 'تواصل مع فريق المبيعات'}
                   </h3>
                   <p className={`text-gray-300 text-sm md:text-base mt-2 ${language === 'AR' ? 'font-arabic' : ''}`}>
                     {language === 'EN' ? 'Get in touch with our sales team for more information' : 'تواصل مع فريق المبيعات للحصول على مزيد من المعلومات'}
                   </p>
                </div>

                                 <div className="space-y-3 md:space-y-4">
                   <Button 
                     className="w-full bg-yellow-400 hover:bg-yellow-500 text-black text-sm md:text-base" 
                     size="lg"
                     onClick={() => {
                       const message = language === 'AR' 
                         ? 'مرحباً! أنا مهتم بمشروع ديل مار كومباوند. يرجى تزويدي بمزيد من المعلومات.'
                         : 'Hello! I\'m interested in Del Mar Compound. Please provide me with more information.';
                       const whatsappUrl = `https://wa.me/966565222000?text=${encodeURIComponent(message)}`;
                       window.open(whatsappUrl, '_blank');
                     }}
                   >
                     <Phone className="w-4 h-4 mr-2" />
                     <span className="hidden sm:inline">{language === 'EN' ? 'Contact Sales Team' : 'تواصل مع فريق المبيعات'}</span>
                     <span className="sm:hidden">{language === 'EN' ? 'Sales' : 'مبيعات'}</span>
                   </Button>
                   <Button 
                     variant="outline" 
                     className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-sm md:text-base" 
                     size="lg"
                     onClick={() => window.open(`tel:${property.salesTeam.phone}`, '_self')}
                   >
                     <Calendar className="w-4 h-4 mr-2" />
                     <span className="hidden sm:inline">{language === 'EN' ? 'Call Sales Team' : 'اتصل بفريق المبيعات'}</span>
                     <span className="sm:hidden">{language === 'EN' ? 'Call' : 'اتصل'}</span>
                   </Button>
                   <Button 
                     variant="outline" 
                     className="w-full border-white/20 text-white hover:bg-white/20 text-sm md:text-base" 
                     size="lg"
                     onClick={() => window.open(`mailto:${property.salesTeam.email}`, '_blank')}
                   >
                     <Mail className="w-4 h-4 mr-2" />
                     <span className="hidden sm:inline">{property.salesTeam.email}</span>
                     <span className="sm:hidden">Email</span>
                   </Button>
                 </div>

                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/10">
                                     <div className="flex items-center justify-between mb-2">
                     <span className="text-gray-300 text-sm md:text-base">{currentContent.projectType}</span>
                     <span className="font-semibold text-white text-sm md:text-base">{property.type}</span>
                   </div>
                   <div className="flex items-center justify-between">
                     <span className="text-gray-300 text-sm md:text-base">{currentContent.yearBuilt}</span>
                     <span className="font-semibold text-white text-sm md:text-base">{property.yearBuilt}</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative z-10 py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-white">{currentContent.location}</h2>
            <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              {language === 'EN' 
                ? "Discover the strategic location of Del Mar Compound in the heart of Al-Thumamah, Riyadh"
                : "اكتشف الموقع الاستراتيجي لمجمع ديل مار في قلب الثمامة، الرياض"
              }
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">{currentContent.locationDetails}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 md:gap-4">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="font-semibold text-white text-sm md:text-base">{language === 'EN' ? 'Address' : 'العنوان'}</p>
                      <p className="text-gray-300 text-sm md:text-base">{property.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Building className="w-6 h-6 text-yellow-400 mt-1" />
                    <div>
                      <p className="font-semibold text-white">{language === 'EN' ? 'Nearby Landmarks' : 'المعالم القريبة'}</p>
                      <p className="text-gray-300">
                        {language === 'EN' 
                          ? "Imam University, Al-Thumamah District, King Fahd Medical City"
                          : "جامعة الإمام، حي الثمامة، مدينة الملك فهد الطبية"
                        }
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Car className="w-6 h-6 text-yellow-400 mt-1" />
                    <div>
                      <p className="font-semibold text-white">{language === 'EN' ? 'Accessibility' : 'سهولة الوصول'}</p>
                      <p className="text-gray-300">
                        {language === 'EN' 
                          ? "Easy access to major highways and public transportation"
                          : "سهولة الوصول للطرق الرئيسية والمواصلات العامة"
                        }
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-6 md:mt-8 bg-yellow-400 hover:bg-yellow-500 text-black text-sm md:text-base" 
                  size="lg"
                  onClick={() => window.open(property.mapUrl, '_blank')}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  {currentContent.viewOnMap}
                </Button>
              </div>
            </div>
            
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10 order-1 lg:order-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.8468047!2d46.7754497!3d24.8468047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efed0739f1581%3A0xebd9e10db3ab3a42!2sDel%20Mar%20Compound!5e0!3m2!1sen!2ssa!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Del Mar Compound Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DelMarCompound;
