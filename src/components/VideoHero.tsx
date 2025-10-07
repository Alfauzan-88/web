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
      title: "Transforming Saudi Arabia's",
      titleHighlight: "Industrial Landscape",
      subtitle: "Leading the future of industrial, commercial, and residential development with innovative projects that shape communities and create lasting value across the Kingdom.",
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
      title: "نحول المشهد العقاري في",
      titleHighlight: "المملكة العربية السعودية",
      subtitle: "نقود مستقبل التطوير الصناعي والتجاري والسكني بمشاريع مبتكرة تشكل المجتمعات وتخلق قيمة دائمة عبر المملكة.",
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
  const heroVideo = getContent('hero', 'hero_video', language) || '/assets/videos/hero-video.mp4';

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
      }, '-=0.6')
      .to('.scroll-indicator', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.2');

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
        
        <div className="max-w-7xl mx-auto px-0 py-20">
          <div className="grid lg:grid-cols-12 gap-2 items-center min-h-screen">
            {/* Left Side - Motion Logo */}
            <div className="lg:col-span-6 flex justify-center lg:justify-start lg:pl-0 lg:-ml-12">
              <div className="hero-logo lg:pt-20">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-96 md:h-[28rem] lg:h-[36rem] xl:h-[40rem] w-auto transition-all duration-300 hover:scale-105"
                  style={{
                    filter: 'drop-shadow(0 0 40px rgba(255, 215, 0, 0.6)) drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.8))',
                    maxWidth: '1000px'
                  }}
                >
                  <source src="/assets/logos/logo-motion.webm" type="video/webm" />
                  <img
                    src="/assets/logos/logo-white.png"
                    alt="Ali Alfauzan Co & Sons Real Estate - Fauzan 1988"
                    className="h-96 md:h-[28rem] lg:h-[36rem] xl:h-[40rem] w-auto"
                  />
                </video>
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div className={`lg:col-span-6 hero-content text-center lg:text-left ${language === 'AR' ? 'font-arabic' : ''}`}>
            
            {/* Main Title */}
            <h1 className={`hero-title text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 leading-tight text-center ${
              language === 'AR' ? 'font-arabic' : ''
            }`} style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 1px 1px 4px rgba(0,0,0,0.8)' }}>
              <span className="block">{currentContent.title}</span>
              <span className="block text-white">
                {currentContent.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`hero-subtitle text-lg md:text-xl text-white mb-10 max-w-4xl mx-auto leading-relaxed text-center ${
              language === 'AR' ? 'font-arabic' : ''
            }`} style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.7)' }}>
              {currentContent.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="hero-buttons flex flex-col sm:flex-row gap-6 mb-16 justify-center">
              <Button 
                size="lg" 
                className={`bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25 ${
                  language === 'AR' ? 'font-arabic' : ''
                }`}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {currentContent.cta1}
                <ArrowRight className={`ml-2 h-5 w-5 ${language === 'AR' ? 'rotate-180 mr-2 ml-0' : ''}`} />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className={`border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg transition-all duration-300 hover:scale-105 ${
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
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-20">
        <p className={`text-white text-sm mb-4 ${language === 'AR' ? 'font-arabic' : ''}`} style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
          {currentContent.scrollText}
        </p>
        <div className="animate-bounce">
          <ChevronDown className="h-6 w-6 text-yellow-400 mx-auto" style={{ filter: 'drop-shadow(1px 1px 3px rgba(0,0,0,0.8))' }} />
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
