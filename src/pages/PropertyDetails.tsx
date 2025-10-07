import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TransparentNavigation from '@/components/TransparentNavigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
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
  ChevronRight
} from 'lucide-react';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [language, setLanguage] = useState<'EN' | 'AR'>('EN');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);

  // Mock property data
  const property = {
    id: 1,
    title: "Luxury Villa in Al Malqa",
    type: "Villa",
    price: "4,500,000",
    currency: "SAR",
    location: "Al Malqa, Riyadh",
    beds: 6,
    baths: 7,
    area: 850,
    parking: 4,
    yearBuilt: 2022,
    status: "Available",
    images: [
          "/assets/images/projects/DMC/1.jpg",
    "/assets/images/projects/DMC/2.JPG",
    "/assets/images/projects/DMC/3.jpg",
    "/assets/images/projects/DMC/4.jpg",
    "/assets/images/projects/DMC/5.jpg"
    ],
    description: "Experience luxury living in this stunning villa featuring contemporary design, premium finishes, and breathtaking views. Located in the prestigious Al Malqa district.",
    features: [
      "Swimming Pool",
      "Private Garden",
      "Maid's Room",
      "Driver's Room",
      "Central AC",
      "Smart Home System",
      "Security System",
      "Covered Parking"
    ],
    amenities: [
      { icon: Wifi, name: "High-Speed Internet" },
      { icon: Shield, name: "24/7 Security" },
      { icon: Zap, name: "Backup Generator" },
      { icon: Trees, name: "Landscaped Garden" },
      { icon: Camera, name: "CCTV System" }
    ],
    agent: {
      name: "Ahmed Al-Rashid",
      phone: "+966 50 123 4567",
      email: "it@alfauzan.com",
      image: "/assets/images/CEO.png",
      rating: 4.9,
      properties: 45
    },
    neighborhood: {
      schools: ["Al Malqa International School", "Riyadh American School"],
      hospitals: ["King Faisal Hospital", "Al Malqa Medical Center"],
      malls: ["Al Malqa Mall", "Granada Center"],
      restaurants: ["The Globe", "Al Malqa Café", "Spazio"]
    }
  };

  const content = {
    EN: {
      propertyOverview: "Property Overview",
      features: "Features & Amenities",
      neighborhood: "Neighborhood",
      contactAgent: "Contact Agent",
      scheduleViewing: "Schedule Viewing",
      share: "Share Property",
      save: "Save Property",
      bedrooms: "Bedrooms",
      bathrooms: "Bathrooms",
      area: "Area",
      parking: "Parking",
      yearBuilt: "Year Built",
      propertyType: "Property Type",
      schools: "Schools",
      hospitals: "Hospitals",
      shopping: "Shopping",
      dining: "Dining",
      agentProperties: "Properties Listed",
      rating: "Rating"
    },
    AR: {
      propertyOverview: "نظرة عامة على العقار",
      features: "المميزات والخدمات",
      neighborhood: "الحي",
      contactAgent: "تواصل مع الوكيل",
      scheduleViewing: "حجز موعد معاينة",
      share: "مشاركة العقار",
      save: "حفظ العقار",
      bedrooms: "غرف النوم",
      bathrooms: "دورات المياه",
      area: "المساحة",
      parking: "المواقف",
      yearBuilt: "سنة البناء",
      propertyType: "نوع العقار",
      schools: "المدارس",
      hospitals: "المستشفيات",
      shopping: "التسوق",
      dining: "المطاعم",
      agentProperties: "العقارات المدرجة",
      rating: "التقييم"
    }
  };

  const currentContent = content[language];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <TransparentNavigation language={language} onLanguageChange={setLanguage} />
      
      {/* Image Gallery */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={property.images[currentImageIndex]}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          
          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm p-2 md:p-3 rounded-full text-white hover:bg-black/70 transition-all duration-300"
          >
            <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm p-2 md:p-3 rounded-full text-white hover:bg-black/70 transition-all duration-300"
          >
            <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
          </button>


          {/* Quick Actions */}
          <div className="absolute top-16 md:top-24 right-4 md:right-6 flex space-x-2">
            <button className="bg-black/50 backdrop-blur-sm p-2 md:p-3 rounded-full text-white hover:bg-black/70 transition-all duration-300">
              <Heart className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            <button className="bg-black/50 backdrop-blur-sm p-2 md:p-3 rounded-full text-white hover:bg-black/70 transition-all duration-300">
              <Share2 className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1 rounded-full text-white text-xs md:text-sm">
            {currentImageIndex + 1} / {property.images.length}
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-4 left-4 flex space-x-2 overflow-x-auto max-w-[calc(100vw-8rem)]">
            {property.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-12 h-9 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                  index === currentImageIndex ? 'border-yellow-400' : 'border-transparent'
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Property Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            
            {/* Header */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-center space-x-2 mb-3 md:mb-4">
                <span className="bg-yellow-400 text-black px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold">
                  {property.type}
                </span>
                <span className="bg-green-500 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm">
                  {property.status}
                </span>
              </div>
              
              <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 ${
                language === 'AR' ? 'font-arabic' : ''
              }`}>
                {property.title}
              </h1>
              
              <div className="flex items-center text-gray-300 mb-3 md:mb-4">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-2 flex-shrink-0" />
                <span className={`text-sm md:text-base ${language === 'AR' ? 'font-arabic' : ''}`}>{property.location}</span>
              </div>
              
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">
                {property.price} {property.currency}
              </div>
            </div>

            {/* Property Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="bg-gray-800 p-3 md:p-4 rounded-lg text-center">
                <Bed className="h-5 w-5 md:h-6 md:w-6 text-yellow-400 mx-auto mb-2" />
                <div className="text-xl md:text-2xl font-bold text-white">{property.beds}</div>
                <div className="text-gray-400 text-xs md:text-sm">{currentContent.bedrooms}</div>
              </div>
              <div className="bg-gray-800 p-3 md:p-4 rounded-lg text-center">
                <Bath className="h-5 w-5 md:h-6 md:w-6 text-yellow-400 mx-auto mb-2" />
                <div className="text-xl md:text-2xl font-bold text-white">{property.baths}</div>
                <div className="text-gray-400 text-xs md:text-sm">{currentContent.bathrooms}</div>
              </div>
              <div className="bg-gray-800 p-3 md:p-4 rounded-lg text-center">
                <Square className="h-5 w-5 md:h-6 md:w-6 text-yellow-400 mx-auto mb-2" />
                <div className="text-xl md:text-2xl font-bold text-white">{property.area}</div>
                <div className="text-gray-400 text-xs md:text-sm">m²</div>
              </div>
              <div className="bg-gray-800 p-3 md:p-4 rounded-lg text-center">
                <Car className="h-5 w-5 md:h-6 md:w-6 text-yellow-400 mx-auto mb-2" />
                <div className="text-xl md:text-2xl font-bold text-white">{property.parking}</div>
                <div className="text-gray-400 text-xs md:text-sm">{currentContent.parking}</div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6 md:mb-8">
              <h2 className={`text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 ${
                language === 'AR' ? 'font-arabic text-right' : ''
              }`}>
                {currentContent.propertyOverview}
              </h2>
              <p className={`text-gray-300 leading-relaxed text-sm md:text-base ${
                language === 'AR' ? 'font-arabic text-right' : ''
              }`}>
                {property.description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-6 md:mb-8">
              <h2 className={`text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 ${
                language === 'AR' ? 'font-arabic text-right' : ''
              }`}>
                {currentContent.features}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-gray-800 p-3 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                    <span className={`text-gray-300 text-sm md:text-base ${language === 'AR' ? 'font-arabic' : ''}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-6 md:mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-gray-800 p-3 md:p-4 rounded-lg">
                    <amenity.icon className="h-5 w-5 md:h-6 md:w-6 text-yellow-400 flex-shrink-0" />
                    <span className={`text-gray-300 text-sm md:text-base ${language === 'AR' ? 'font-arabic' : ''}`}>
                      {amenity.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Neighborhood */}
            <div>
              <h2 className={`text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 ${
                language === 'AR' ? 'font-arabic text-right' : ''
              }`}>
                {currentContent.neighborhood}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gray-800 p-3 md:p-4 rounded-lg">
                  <h3 className="text-yellow-400 font-semibold mb-2 text-sm md:text-base">{currentContent.schools}</h3>
                  <ul className="space-y-1">
                    {property.neighborhood.schools.map((school, index) => (
                      <li key={index} className="text-gray-300 text-xs md:text-sm">{school}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-800 p-3 md:p-4 rounded-lg">
                  <h3 className="text-yellow-400 font-semibold mb-2 text-sm md:text-base">{currentContent.hospitals}</h3>
                  <ul className="space-y-1">
                    {property.neighborhood.hospitals.map((hospital, index) => (
                      <li key={index} className="text-gray-300 text-xs md:text-sm">{hospital}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-800 p-3 md:p-4 rounded-lg">
                  <h3 className="text-yellow-400 font-semibold mb-2 text-sm md:text-base">{currentContent.shopping}</h3>
                  <ul className="space-y-1">
                    {property.neighborhood.malls.map((mall, index) => (
                      <li key={index} className="text-gray-300 text-xs md:text-sm">{mall}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-800 p-3 md:p-4 rounded-lg">
                  <h3 className="text-yellow-400 font-semibold mb-2 text-sm md:text-base">{currentContent.dining}</h3>
                  <ul className="space-y-1">
                    {property.neighborhood.restaurants.map((restaurant, index) => (
                      <li key={index} className="text-gray-300 text-xs md:text-sm">{restaurant}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <div className="sticky top-24">
              
              {/* Agent Card */}
              <div className="bg-gray-800 rounded-lg p-4 md:p-6 mb-4 md:mb-6">
                <div className="mb-3 md:mb-4">
                  <h3 className={`text-white font-semibold text-sm md:text-base ${language === 'AR' ? 'font-arabic' : ''}`}>
                    {property.agent.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Star className="h-3 w-3 md:h-4 md:w-4 text-yellow-400 fill-current" />
                    <span className="text-gray-300 text-xs md:text-sm">{property.agent.rating}</span>
                  </div>
                  <p className="text-gray-400 text-xs md:text-sm">
                    {property.agent.properties} {currentContent.agentProperties}
                  </p>
                </div>
                
                <div className="space-y-3">
                                     <Button 
                     className="w-full bg-yellow-400 hover:bg-yellow-500 text-black text-sm md:text-base"
                     onClick={() => window.open(`mailto:${property.agent.email}?subject=Property Inquiry: ${property.title}`, '_blank')}
                   >
                     <Mail className="h-4 w-4 mr-2" />
                     <span className="hidden sm:inline">{currentContent.contactAgent}</span>
                     <span className="sm:hidden">Contact</span>
                   </Button>
                                     <Button 
                     variant="outline" 
                     className="w-full border-gray-600 text-white hover:bg-gray-700 text-sm md:text-base"
                     onClick={() => window.open(`mailto:${property.agent.email}?subject=Schedule Viewing: ${property.title}`, '_blank')}
                   >
                     <Calendar className="h-4 w-4 mr-2" />
                     <span className="hidden sm:inline">{currentContent.scheduleViewing}</span>
                     <span className="sm:hidden">Schedule</span>
                   </Button>
                </div>
              </div>

              {/* Property Details */}
              <div className="bg-gray-800 rounded-lg p-4 md:p-6">
                <h3 className={`text-white font-semibold mb-3 md:mb-4 text-sm md:text-base ${language === 'AR' ? 'font-arabic' : ''}`}>
                  Property Details
                </h3>
                <div className="space-y-3 text-xs md:text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">{currentContent.propertyType}</span>
                    <span className="text-white">{property.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{currentContent.yearBuilt}</span>
                    <span className="text-white">{property.yearBuilt}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{currentContent.area}</span>
                    <span className="text-white">{property.area} m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Views</span>
                    <span className="text-white flex items-center">
                      <Eye className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                      1,250
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetails;
