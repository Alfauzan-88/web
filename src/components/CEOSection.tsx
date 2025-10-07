import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const CEOSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();

  const content = {
    EN: {
      ceo: {
        title: "Message from Our Founder",
        subtitle: "Leading with vision and commitment to excellence"
      }
    },
    AR: {
      ceo: {
        title: "رسالة من رئيس مجلس الإدارة",
        subtitle: "قيادة برؤية والتزام بالتميز"
      }
    }
  };

  const currentContent = content[language];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the section elements
      gsap.fromTo('.ceo-title', 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.ceo-card', 
        { opacity: 0, y: 100, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 1.2,
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, [language]); // Add language as dependency to re-animate when language changes

  return (
    <section ref={sectionRef} className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${language === 'AR' ? 'font-arabic' : ''}`}>
          <h2 
            className={`ceo-title text-4xl md:text-5xl font-bold text-white mb-4 text-center ${
              language === 'AR' ? 'font-arabic' : ''
            }`} 
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
          >
            {currentContent.ceo.title}
          </h2>
          <p 
            className={`text-xl text-white/90 text-center ${
              language === 'AR' ? 'font-arabic' : ''
            }`} 
            style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}
          >
            {currentContent.ceo.subtitle}
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="ceo-card relative group">
            {/* Glassmorphism background layer */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl transform scale-110 transition-all duration-500 group-hover:scale-115"></div>
            
            {/* White background tile with effects */}
            <div className="relative bg-white rounded-2xl p-12 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl border border-gray-100">
              <img 
                src="/assets/images/33.png" 
                alt="Ali Fauzan AlFauzan"
                className="w-full h-auto max-w-5xl mx-auto transform transition-all duration-500 group-hover:scale-105"
                style={{
                  filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1))'
                }}
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-500/5 rounded-2xl pointer-events-none"></div>
            </div>
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute top-20 right-20 w-1 h-1 bg-orange-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-10 left-20 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-bounce"></div>
              <div className="absolute bottom-20 right-10 w-1 h-1 bg-orange-300 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;
