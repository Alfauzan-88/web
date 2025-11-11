import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
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
  Phone,
  Users
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { propertiesData } from '@/data/propertiesData';

gsap.registerPlugin(ScrollTrigger);

const PreciseProperties: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('All');
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useLanguage();


  // Use imported data for better performance
  const currentContent = propertiesData[language];

  // Reset filter when language changes
  useEffect(() => {
    setActiveFilter(language === 'AR' ? 'الكل' : 'All');
  }, [language]);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    const ctx = gsap.context(() => {
      // Animate section entrance
      const headerElement = document.querySelector('.properties-header');
      if (headerElement) {
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
      }

      // Animate property cards with reduced stagger for better performance
      const propertyCards = document.querySelectorAll('.property-card');
      const propertiesGrid = document.querySelector('.properties-grid');

      if (propertyCards.length > 0 && propertiesGrid) {
      gsap.fromTo('.property-card', 
        { opacity: 0, y: 30, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
            duration: 0.6,
            stagger: 0.05,
          scrollTrigger: {
            trigger: '.properties-grid',
            start: 'top 80%'
          }
        }
      );
      }

    }, sectionRef);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  // Memoize filtered properties for better performance
  const filteredProperties = useMemo(() => {
    return currentContent.properties.filter(property => {
    const matchesFilter = activeFilter === 'All' || activeFilter === 'الكل' || property.type === activeFilter;
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  }, [currentContent.properties, activeFilter, searchTerm]);

  const formatPrice = useCallback((price: string, currency: string) => {
    return `${price} ${currency}`;
  }, []);

  // Lazy loading for property images
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  
  const handleImageLoad = useCallback((imageSrc: string) => {
    setLoadedImages(prev => new Set(prev).add(imageSrc));
  }, []);

  return (
    <section id="properties" ref={sectionRef} className="py-20 z-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="properties-header text-center mb-16">
          <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-6 ${
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
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden animate-pulse">
                <div className="h-64 bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
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
                {/* Loading skeleton */}
                {!loadedImages.has(property.image) && (
                  <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
                )}
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onLoad={() => handleImageLoad(property.image)}
                  style={{
                    opacity: loadedImages.has(property.image) ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out'
                  }}
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
                    {property.features.length > 3 && property.id !== 1 && (
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
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-black" />
                      </div>
                      <div>
                        <p className={`text-sm font-medium text-white ${
                          language === 'AR' ? 'font-arabic' : ''
                        }`}>
                          {language === 'EN' ? 'Sales Team' : 'فريق المبيعات'}
                        </p>
                        <p className="text-xs text-gray-400">{property.salesTeam?.phone || '+966 565222000'}</p>
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
        )}

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
