import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useWebsiteContent } from '@/hooks/useWebsiteContent';

gsap.registerPlugin(ScrollTrigger);

const VideoHero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(true);
  const { language } = useLanguage();
  const { getContent, loading: contentLoading, reload } = useWebsiteContent();

  const content = {
    EN: {
      title: "Welcome to Ali Al Fauzan & Sons Real Estate",
      titleHighlight: "Your Gateway to Exceptional Real Estate and Industrial Investments",
      subtitle: "We take you into a world of investment opportunities where quality meets innovation. Join us today to be part of a promising real estate and industrial future, designed to support and fulfill your investment ambitions.",
      cta1: "Explore Projects",
      cta2: "Learn More",
      stats: [
        { number: "20+", label: "Industrial Projects" },
        { number: "35+", label: "Years of Excellence" },
        { number: "15M+", label: "Sqm Developed" },
        { number: "80%", label: "Customer Satisfaction" }
      ],
      scrollText: "Discover Our World"
    },
    AR: {
      title: "مرحباً بك في شركة علي الفوزان وأولاده العقارية",
      titleHighlight: "بوابتك إلى استثمارات عقارية وصناعية استثنائية",
      subtitle: "نأخذك إلى عالم من الفرص الاستثمارية حيث تلتقي الجودة بالابتكار، انضم إلينا اليوم لتكون جزءاً من مستقبل عقاري وصناعي واعد، مصمم خصيصاً لدعم وتحقيق طموحاتك الاستثمارية",
      cta1: "استكشف المشاريع",
      cta2: "اعرف المزيد",
      stats: [
        { number: "20+", label: "مشاريع صناعية" },
        { number: "35+", label: "عام من التميز" },
        { number: "15+", label: "مليون متر مربع" },
        { number: "80%", label: "رضا العملاء" }
      ],
      scrollText: "اكتشف عالمنا"
    }
  };

  const currentContent = content[language];

  // Get dynamic content from database
  const heroVideo = getContent('hero', 'hero_video', language) || '/assets/videos/hero-banner.mp4';

  // Refresh content when language changes
  useEffect(() => {
    // Only reload when language changes, not on every render
  }, [language]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content animation
      gsap.set('.hero-content > *', { opacity: 0, y: 50 });
      gsap.set('.hero-logo', { opacity: 0, y: 30, scale: 0.8 });
      
      const tl = gsap.timeline({ delay: 0.5 });
      
      tl.to('.hero-logo', {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'back.out(1.7)'
      })
      .to('.hero-title', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out'
      }, '-=0.6')
      .to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.8')
      .to('.hero-buttons', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.6');

      // Parallax effect for video
      gsap.to('.video-container', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // Stats counter animation
      gsap.utils.toArray('.stat-number').forEach((element: any) => {
        const finalNumber = element.textContent;
        const numericValue = parseInt(finalNumber.replace(/[^\d]/g, ''));
        
        gsap.fromTo(element, {
          textContent: 0
        }, {
          textContent: numericValue,
          duration: 2,
          ease: 'power2.out',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          onUpdate: function() {
            const current = Math.ceil(this.targets()[0].textContent);
            element.textContent = finalNumber.includes('+') ? `${current}+` : 
                                  finalNumber.includes('M') ? `${current}M+` :
                                  finalNumber.includes('K') ? `${current}K+` : current;
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [heroVideo]); // Re-run animations when content changes

  // Video control functions removed

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="video-container absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Video Controls - REMOVED */}

      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center justify-center min-h-screen pt-8 space-y-4 md:space-y-6 overflow-hidden">
            
            {/* 1. Logo - Center Top */}
            <div className="hero-logo flex justify-center w-full">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                className="h-48 sm:h-64 md:h-80 lg:h-[28rem] xl:h-[36rem] w-auto transition-all duration-300 hover:scale-105 mx-auto"
                  style={{
                  filter: 'brightness(1.2) contrast(1.1) drop-shadow(0 0 50px rgba(255, 215, 0, 0.7)) drop-shadow(2px 2px 12px rgba(0, 0, 0, 0.9))',
                  maxWidth: '1000px',
                  backgroundColor: 'transparent',
                  mixBlendMode: 'screen',
                  background: 'transparent',
                  opacity: 1
                  }}
                >
                  <source src="/assets/logos/logo-motion.webm" type="video/webm" />
                  <img
                    src="/assets/logos/logo-white.png"
                    alt="Ali Alfauzan Co & Sons Real Estate - Fauzan 1988"
                  className="h-48 sm:h-64 md:h-80 lg:h-[28rem] xl:h-[36rem] w-auto mx-auto"
                  />
                </video>
            </div>
            
            {/* 2. Text Content */}
            <div className={`hero-content w-full px-2 sm:px-4 md:px-6 lg:px-8 ${language === 'AR' ? 'font-arabic' : ''}`}>
            {/* Main Title */}
              <h1 className={`hero-title text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-white mb-3 sm:mb-4 md:mb-6 leading-tight break-words text-center ${language === 'AR' ? 'font-arabic' : ''}`} style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 1px 1px 4px rgba(0,0,0,0.8)' }}>
                <span className="block break-words hyphens-auto">{currentContent.title}</span>
                <span className="block text-white break-words hyphens-auto">
                {currentContent.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
              <p className={`hero-subtitle text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed break-words hyphens-auto text-center ${
                language === 'AR' ? 'font-arabic' : ''
            }`} style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.7)' }}>
              {currentContent.subtitle}
            </p>
            </div>

            {/* 3. CTA Buttons */}
            <div className="hero-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center px-2 sm:px-4 w-full">
              <Button 
                size="lg" 
                className={`bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25 w-full sm:w-auto ${
                  language === 'AR' ? 'font-arabic' : ''
                }`}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {currentContent.cta1}
                <ArrowRight className={`ml-2 h-4 w-4 sm:h-5 sm:w-5 ${language === 'AR' ? 'rotate-180 mr-2 ml-0' : ''}`} />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className={`border-white text-white hover:bg-white hover:text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto ${
                  language === 'AR' ? 'font-arabic' : ''
                }`}
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {currentContent.cta2}
              </Button>
            </div>

            {/* Content Loading Indicator */}
            {contentLoading && (
              <div className="text-center py-4">
                <div className="inline-flex items-center text-white">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-400 mr-2"></div>
                  <span className="text-sm">Loading content...</span>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>


      {/* Loading State */}
      {!videoLoaded && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-30">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
            <p className="text-white">Loading video...</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoHero;