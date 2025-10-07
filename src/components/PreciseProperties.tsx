import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Car, 
  Heart, 
  Share2, 
  Filter,
  Search,
  SlidersHorizontal,
  Grid3X3,
  List,
  ArrowRight,
  Star,
  Eye,
  Phone
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const PreciseProperties: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('All');
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null);
  const { language } = useLanguage();


  const content = {
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
          image: "/assets/images/projects/DMC/Thumbnail.png?v=1",
          images: [
            "/assets/images/projects/DMC/Thumbnail.png?v=1",
            "/assets/images/projects/DMC/1.jpg",
            "/assets/images/projects/DMC/2.JPG",
            "/assets/images/projects/DMC/3.jpg",
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
            "/assets/images/projects/DMC/39.jpg",
            "/assets/images/projects/DMC/40.JPG",
            "/assets/images/projects/DMC/41.JPG",
            "/assets/images/projects/DMC/42.JPG",
            "/assets/images/projects/DMC/43.JPG",
            "/assets/images/projects/DMC/44.JPG",
            "/assets/images/projects/DMC/45.JPG",
            "/assets/images/projects/DMC/46.JPG",
            "/assets/images/projects/DMC/47.JPG",
            "/assets/images/projects/DMC/48.JPG"
          ],
          featured: true,
          rating: 4.9,
          views: 1500,
          features: ["Gym", "Sauna", "Steam Room", "Swimming Pool", "Table Tennis", "Billiard Table", "Kids Playing Area", "Barbeque Area", "Restaurant", "Mini Market", "Coffee Shop", "Relaxation Area"],
          agent: {
            name: "Mohammad Tariq",
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
          image: "/assets/images/projects/DMC/Thumbnail.png?v=1",
          images: [
            "/assets/images/projects/DMC/Thumbnail.png?v=1",
            "/assets/images/projects/DMC/1.jpg",
            "/assets/images/projects/DMC/2.JPG",
            "/assets/images/projects/DMC/3.jpg",
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
            "/assets/images/projects/DMC/39.jpg",
            "/assets/images/projects/DMC/40.JPG",
            "/assets/images/projects/DMC/41.JPG",
            "/assets/images/projects/DMC/42.JPG",
            "/assets/images/projects/DMC/43.JPG",
            "/assets/images/projects/DMC/44.JPG",
            "/assets/images/projects/DMC/45.JPG",
            "/assets/images/projects/DMC/46.JPG",
            "/assets/images/projects/DMC/47.JPG",
            "/assets/images/projects/DMC/48.JPG"
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

  const currentContent = content[language];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section entrance
      gsap.fromTo('.properties-header', 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        }
      );

      // Animate property cards
      gsap.fromTo('.property-card', 
        { opacity: 0, y: 30, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.properties-grid',
            start: 'top 80%'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const filteredProperties = currentContent.properties.filter(property => {
    const matchesFilter = activeFilter === 'All' || property.type === activeFilter;
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const formatPrice = (price: string, currency: string) => {
    return `${price} ${currency}`;
  };

  return (
    <section id="properties" ref={sectionRef} className="py-20 z-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="properties-header text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 ${
            language === 'AR' ? 'font-arabic' : ''
          }`} style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            {currentContent.title}
          </h2>
          <p className={`text-xl text-white/90 max-w-3xl mx-auto mb-8 ${
            language === 'AR' ? 'font-arabic' : ''
          }`} style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            {currentContent.subtitle}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 ${language === 'AR' ? 'right-4' : 'left-4'}`} />
            <input
              type="text"
              placeholder={currentContent.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-12 pr-4 py-4 bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 shadow-sm ${
                language === 'AR' ? 'text-right pr-12 pl-4 font-arabic' : ''
              }`}
            />
          </div>

          {/* Filters and Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Type Filters */}
            <div className="flex flex-wrap gap-2">
              {currentContent.filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-yellow-400 text-black'
                      : 'bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white/95 border border-white/30'
                  } ${language === 'AR' ? 'font-arabic' : ''}`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-yellow-400 text-black'
                    : 'bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white/95 border border-white/30'
                }`}
              >
                <Grid3X3 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-yellow-400 text-black'
                    : 'bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white/95 border border-white/30'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className={`properties-grid ${
          viewMode === 'grid' 
            ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' 
            : 'space-y-6'
        }`}>
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className={`property-card group bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl shadow-lg border border-white/20 transition-all duration-500 hover:-translate-y-2 ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              {/* Property Image */}
              <div className={`relative overflow-hidden ${
                viewMode === 'list' ? 'w-1/3' : 'h-64'
              }`}>
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Featured Badge */}
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-yellow-400 hover:text-black transition-colors">
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-yellow-400 hover:text-black transition-colors">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>

                {/* Stats */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-3 text-white text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{property.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{property.views}</span>
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div className={`p-6 flex-1 ${viewMode === 'list' ? 'flex flex-col justify-between' : ''}`}>
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                                      <h3 className={`text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-500 transition-colors ${
                  language === 'AR' ? 'font-arabic' : ''
                }`}>
                  {property.title}
                </h3>
                      <p className={`text-2xl font-bold text-yellow-400 ${
                        language === 'AR' ? 'font-arabic' : ''
                      }`}>
                        {formatPrice(property.price, property.currency)}
                      </p>
                    </div>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm">
                      {property.type}
                    </span>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className={`h-4 w-4 flex-shrink-0 ${language === 'AR' ? 'ml-2' : 'mr-2'}`} />
                    <span className={`text-sm ${language === 'AR' ? 'font-arabic' : ''}`}>
                      {property.location}
                    </span>
                  </div>

                  {/* Property Features */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    {property.beds > 0 && (
                      <div className="flex items-center">
                        <Bed className={`h-4 w-4 ${language === 'AR' ? 'ml-1' : 'mr-1'}`} />
                        <span>{property.beds}</span>
                      </div>
                    )}
                    {property.baths > 0 && (
                      <div className="flex items-center">
                        <Bath className={`h-4 w-4 ${language === 'AR' ? 'ml-1' : 'mr-1'}`} />
                        <span>{property.baths}</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Square className={`h-4 w-4 ${language === 'AR' ? 'ml-1' : 'mr-1'}`} />
                      <span>{property.area}m²</span>
                    </div>
                    {property.parking > 0 && (
                      <div className="flex items-center">
                        <Car className={`h-4 w-4 ${language === 'AR' ? 'ml-1' : 'mr-1'}`} />
                        <span>{property.parking}</span>
                      </div>
                    )}
                  </div>

                  {/* Key Features */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {property.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className={`text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded ${
                          language === 'AR' ? 'font-arabic' : ''
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                    {property.features.length > 3 && (
                      <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded">
                        +{property.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Agent & Actions */}
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={property.agent.image}
                        alt={property.agent.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className={`text-sm font-medium text-white ${
                          language === 'AR' ? 'font-arabic' : ''
                        }`}>
                          {property.agent.name}
                        </p>
                        <p className="text-xs text-gray-400">{property.agent.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-yellow-400 hover:bg-yellow-500 text-black"
                        onClick={() => navigate('/del-mar-compound')}
                      >
                        <Eye className={`h-4 w-4 ${language === 'AR' ? 'ml-1' : 'mr-1'}`} />
                        {language === 'EN' ? 'View Details' : 'عرض التفاصيل'}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                      >
                        <Phone className={`h-4 w-4 ${language === 'AR' ? 'ml-1' : 'mr-1'}`} />
                        {language === 'EN' ? 'Call' : 'اتصل'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className={`bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 transition-all duration-300 hover:scale-105 ${
              language === 'AR' ? 'font-arabic' : ''
            }`}
          >
            {currentContent.viewAll}
            <ArrowRight className={`ml-2 h-5 w-5 ${language === 'AR' ? 'rotate-180 mr-2 ml-0' : ''}`} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PreciseProperties;
