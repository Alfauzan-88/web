import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedCounter from './AnimatedCounter';

const EventsGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { language } = useLanguage();

     const content = {
     EN: {
       title: "Our Events & Celebrations",
       subtitle: "Celebrating milestones and building team spirit through memorable events",
              events: [
          {
            id: 1,
            title: "Event 1",
            description: "Celebrating our achievements and team spirit",
            image: "/assets/images/events/1.png",
            date: "January 2024"
          },
          {
            id: 2,
            title: "Event 2",
            description: "Strengthening bonds and fostering collaboration",
            image: "/assets/images/events/2.png",
            date: "March 2024"
          },
          {
            id: 3,
            title: "Event 3",
            description: "Exploring new ideas and technologies",
            image: "/assets/images/events/3.png",
            date: "May 2024"
          },
          {
            id: 4,
            title: "Event 4",
            description: "Giving back to our community",
            image: "/assets/images/events/4.png",
            date: "July 2024"
          },
          {
            id: 5,
            title: "Event 5",
            description: "Empowering our leaders",
            image: "/assets/images/events/5.png",
            date: "September 2024"
          },
          {
            id: 6,
            title: "Event 6",
            description: "Spreading joy and gratitude",
            image: "/assets/images/events/6.png",
            date: "December 2024"
          },
          {
            id: 7,
            title: "Event 7",
            description: "Recognizing excellence",
            image: "/assets/images/events/7.png",
            date: "February 2024"
          },
          {
            id: 8,
            title: "Event 8",
            description: "Showcasing innovation",
            image: "/assets/images/events/8.png",
            date: "April 2024"
          },
          {
            id: 9,
            title: "Event 9",
            description: "Promoting sustainability",
            image: "/assets/images/events/9.png",
            date: "June 2024"
          },
          {
            id: 10,
            title: "Event 10",
            description: "Celebrating our clients",
            image: "/assets/images/events/10.png",
            date: "August 2024"
          },
          {
            id: 11,
            title: "Event 11",
            description: "Professional development",
            image: "/assets/images/events/11.png",
            date: "October 2024"
          },
          {
            id: 12,
            title: "Event 12",
            description: "Year-end celebration",
            image: "/assets/images/events/12.png",
            date: "November 2024"
          },
          {
            id: 13,
            title: "Event 13",
            description: "New year kickoff",
            image: "/assets/images/events/13.png",
            date: "January 2025"
          }
        ]
    },
    AR: {
      title: "فعالياتنا واحتفالاتنا",
      subtitle: "نحتفل بالمعالم المهمة ونبني روح الفريق من خلال الفعاليات الم memorable",
             events: [
         {
           id: 1,
           title: "فعالية 1",
           description: "احتفال بإنجازاتنا وروح الفريق",
           image: "/assets/images/events/1.png",
           date: "يناير 2024"
         },
         {
           id: 2,
           title: "فعالية 2",
           description: "تعزيز الروابط والتعاون",
           image: "/assets/images/events/2.png",
           date: "مارس 2024"
         },
         {
           id: 3,
           title: "فعالية 3",
           description: "استكشاف الأفكار والتقنيات",
           image: "/assets/images/events/3.png",
           date: "مايو 2024"
         },
         {
           id: 4,
           title: "فعالية 4",
           description: "رد الجميل لمجتمعنا",
           image: "/assets/images/events/4.png",
           date: "يوليو 2024"
         },
         {
           id: 5,
           title: "فعالية 5",
           description: "تمكين قادتنا",
           image: "/assets/images/events/5.png",
           date: "سبتمبر 2024"
         },
         {
           id: 6,
           title: "فعالية 6",
           description: "نشر الفرح والامتنان",
           image: "/assets/images/events/6.png",
           date: "ديسمبر 2024"
         },
         {
           id: 7,
           title: "فعالية 7",
           description: "تقدير التميز",
           image: "/assets/images/events/7.png",
           date: "فبراير 2024"
         },
         {
           id: 8,
           title: "فعالية 8",
           description: "عرض الابتكار",
           image: "/assets/images/events/8.png",
           date: "أبريل 2024"
         },
         {
           id: 9,
           title: "فعالية 9",
           description: "تعزيز الاستدامة",
           image: "/assets/images/events/9.png",
           date: "يونيو 2024"
         },
         {
           id: 10,
           title: "فعالية 10",
           description: "احتفال بعملائنا",
           image: "/assets/images/events/10.png",
           date: "أغسطس 2024"
         },
         {
           id: 11,
           title: "فعالية 11",
           description: "التطوير المهني",
           image: "/assets/images/events/11.png",
           date: "أكتوبر 2024"
         },
         {
           id: 12,
           title: "فعالية 12",
           description: "احتفال نهاية العام",
           image: "/assets/images/events/12.png",
           date: "نوفمبر 2024"
         },
         {
           id: 13,
           title: "فعالية 13",
           description: "بداية العام الجديد",
           image: "/assets/images/events/13.png",
           date: "يناير 2025"
         }
       ]
    }
  };

  const currentContent = content[language];

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % currentContent.events.length);
      }, 4000); // Change slide every 4 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, currentContent.events.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % currentContent.events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + currentContent.events.length) % currentContent.events.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            {currentContent.title}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            {currentContent.subtitle}
          </p>
        </div>

        {/* Slideshow Container */}
        <div className="relative">
                     {/* Main Slideshow */}
           <div className="relative h-96 md:h-[500px] lg:h-[600px]">
            {/* Slides */}
            {currentContent.events.map((event, index) => (
              <div
                key={event.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              >
                                 <img
                   src={event.image}
                   alt={event.title}
                   className="w-full h-full object-contain rounded-2xl"
                   onError={(e) => {
                     // Fallback to a placeholder if image doesn't exist
                     const target = e.target as HTMLImageElement;
                     target.src = `/assets/images/events/${index + 1}.png`;
                   }}
                 />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                                 {/* Content */}
                 <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                   <div className="max-w-2xl">
                     {/* Date removed */}
                   </div>
                 </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 p-3 rounded-full transition-all duration-300"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
          </div>

                                {/* Thumbnail Navigation - macOS Dock Style */}
           <div className="mt-6 flex justify-center">
             <div 
               className="flex items-end gap-1 p-4 bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl"
               onMouseLeave={() => setHoveredIndex(null)}
             >
               {currentContent.events.map((event, index) => {
                 // Calculate distance from hovered thumbnail for magnification effect
                 const distanceFromHovered = hoveredIndex !== null ? Math.abs(index - hoveredIndex) : 0;
                 const maxDistance = 3; // How far the effect spreads
                 
                 // Create magnification effect based on hover
                 const scale = hoveredIndex !== null 
                   ? Math.max(0.6, 1 - (distanceFromHovered / maxDistance) * 0.4)
                   : 1;
                 
                 const isActive = index === currentSlide;
                 const isHovered = index === hoveredIndex;
                 
                 return (
                   <button
                     key={event.id}
                     onClick={() => goToSlide(index)}
                     onMouseEnter={() => setHoveredIndex(index)}
                     className={`relative overflow-hidden transition-all duration-300 ease-out ${
                       isActive 
                         ? 'ring-2 ring-yellow-400 shadow-xl z-10' 
                         : 'hover:ring-1 hover:ring-white/40'
                     }`}
                     style={{
                       transform: `scale(${scale}) translateY(${isHovered ? '-8px' : '0px'})`,
                       filter: isHovered ? 'drop-shadow(0 0 15px rgba(255, 255, 0, 0.6))' : 'none',
                       zIndex: isHovered ? 10 : isActive ? 5 : 1
                     }}
                   >
                     <img
                       src={event.image}
                       alt={event.title}
                       className="w-20 h-16 object-cover rounded-lg"
                       onError={(e) => {
                         const target = e.target as HTMLImageElement;
                         target.src = `/assets/images/events/${index + 1}.png`;
                       }}
                     />
                     {/* Active indicator dot */}
                     {isActive && (
                       <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full shadow-lg"></div>
                     )}
                   </button>
                 );
               })}
             </div>
           </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-4">
            <div className="flex gap-2">
              {currentContent.events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-yellow-400' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EventsGallery;
