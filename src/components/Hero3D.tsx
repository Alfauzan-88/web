
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Hero3DProps {
  language: 'EN' | 'AR';
  onLanguageChange: (lang: 'EN' | 'AR') => void;
}

const Hero3D: React.FC<Hero3DProps> = ({ language, onLanguageChange }) => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const content = {
    EN: {
      title: "Invest in the Beating Heart of Industry",
      subtitle: "35+ Years of Excellence in Saudi Arabia's Real Estate Market",
      description: "Leading the transformation of Saudi Arabia's landscape with premium industrial, commercial, residential, and warehouse developments since 1988.",
      cta1: "Explore Properties",
      cta2: "Watch Our Story",
      stats: [
        { number: "6+", label: "Projects in main regions" },
        { number: "500+", label: "Commercial partners" },
        { number: "80%", label: "Customer satisfaction" },
        { number: "24/7", label: "Operation services" }
      ]
    },
    AR: {
      title: "استثمر في قلب الصناعة النابض",
      subtitle: "أكثر من 35 عاماً من التميز في السوق العقاري السعودي",
      description: "نقود تحول المشهد السعودي بتطويرات عقارية راقية صناعية وتجارية وسكنية ومستودعات منذ عام 1988.",
      cta1: "استكشف العقارات",
      cta2: "شاهد قصتنا",
      stats: [
        { number: "6+", label: "المشاريع في المناطق الرئيسية" },
        { number: "500+", label: "شريك تجاري وصناعي" },
        { number: "80%", label: "رضا العملاء" },
        { number: "24/7", label: "خدمات تشغيل وصيانة" }
      ]
    }
  };

  const currentContent = content[language];

  useEffect(() => {
    if (!heroRef.current || !titleRef.current || !subtitleRef.current || !ctaRef.current) return;

    // Initial setup
    gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 0,
      y: 100,
    });

    // Animation timeline
    const tl = gsap.timeline({ delay: 0.5 });

    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.8")
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.6");

    // Parallax effect
    const parallaxElements = heroRef.current.querySelectorAll('.parallax-element');
    parallaxElements.forEach((element, index) => {
      gsap.to(element, {
        yPercent: -50 * (index + 1),
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
    >
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl parallax-element animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full blur-3xl parallax-element float float-delay-1"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-3xl parallax-element float float-delay-2"></div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 right-32 w-32 h-32 border-2 border-yellow-400 rotate-45 parallax-element"></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 bg-yellow-400 clip-triangle parallax-element"></div>
        <div className="absolute top-1/2 right-20 w-20 h-20 bg-blue-500 rounded-full parallax-element"></div>
      </div>

      {/* Language Switcher */}
      <div className="absolute top-8 right-8 z-50">
          <button
          onClick={() => onLanguageChange(language === 'EN' ? 'AR' : 'EN')}
          className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-black/30 backdrop-blur-sm text-white hover:text-yellow-400 hover:bg-white/10"
          >
          English | العربية
          </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <div ref={titleRef} className="mb-8">
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight ${
            language === 'AR' ? 'font-arabic text-right' : ''
          }`}>
            <span className="text-gradient">
              {currentContent.title}
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div ref={subtitleRef} className="mb-8">
          <h2 className={`text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed ${
            language === 'AR' ? 'font-arabic text-right' : ''
          }`}>
            {currentContent.subtitle}
          </h2>
          <p className={`text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mt-4 leading-relaxed ${
            language === 'AR' ? 'font-arabic text-right' : ''
          }`}>
            {currentContent.description}
          </p>
        </div>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="mb-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-full hover-3d group transition-all duration-300"
            >
              <span className={language === 'AR' ? 'font-arabic' : ''}>
                {currentContent.cta1}
              </span>
              <ArrowRight className={`ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform ${
                language === 'AR' ? 'rotate-180 mr-2 ml-0' : ''
              }`} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full hover-3d group transition-all duration-300"
              onClick={() => setIsVideoPlaying(true)}
            >
              <Play className={`mr-2 h-5 w-5 group-hover:scale-110 transition-transform ${
                language === 'AR' ? 'rotate-180 ml-2 mr-0' : ''
              }`} />
              <span className={language === 'AR' ? 'font-arabic' : ''}>
                {currentContent.cta2}
              </span>
            </Button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {currentContent.stats.map((stat, index) => (
            <div 
              key={index}
              className={`card-3d p-6 rounded-lg text-center hover-3d animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                {stat.number}
              </div>
              <div className={`text-gray-300 text-sm md:text-base ${
                language === 'AR' ? 'font-arabic' : ''
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
          <div className="text-white text-sm mt-2">Scroll</div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Play className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                <p className="text-white">Video will be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero3D;
