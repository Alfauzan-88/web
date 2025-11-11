import React, { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ScrollableKeyframe: React.FC = () => {
  const cutoutRef = useRef<HTMLImageElement>(null);
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Our Vision in Motion",
      subtitle: "Together to Build Future Real Estate and Industrial Communities.",
      sections: [
        {
          title: "Quality",
          description: "Ensuring the highest standards in all projects and services, maintaining excellence in every aspect of our work.",
          highlight: "Excellence Standards"
        },
        {
          title: "Sustainability",
          description: "Committing to environmentally friendly practices that support sustainable development and future generations.",
          highlight: "Green Practices"
        },
        {
          title: "Innovation",
          description: "Developing modern solutions that meet future demands and drive industry advancement.",
          highlight: "Future Solutions"
        },
        {
          title: "Transparency",
          description: "Upholding honesty and trust with clients and partners, building lasting relationships.",
          highlight: "Trust & Integrity"
        }
      ]
    },
    AR: {
      // Updated Arabic content
      title: "رؤيتنا في الحركة",
      subtitle: "معاً لبناء مجتمعات عقارية وصناعية مستقبلية",
      sections: [
        {
          title: "الجودة",
          description: "ضمان أعلى المعايير في جميع المشاريع والخدمات، والحفاظ على التميز في كل جانب من جوانب عملنا.",
          highlight: "معايير التميز"
        },
        {
          title: "الاستدامة",
          description: "الالتزام بالممارسات الصديقة للبيئة التي تدعم التنمية المستدامة والأجيال القادمة.",
          highlight: "الممارسات الخضراء"
        },
        {
          title: "الابتكار",
          description: "تطوير حلول حديثة تلبي متطلبات المستقبل وتدفع تقدم الصناعة.",
          highlight: "حلول المستقبل"
        },
        {
          title: "الشفافية",
          description: "الحفاظ على الصدق والثقة مع العملاء والشركاء، وبناء علاقات دائمة.",
          highlight: "الثقة والنزاهة"
        }
      ]
    }
  };

  const currentContent = content[language];

  // Removed scroll animations and GSAP effects

  return (
    <section 
      id="about"
      className="relative py-32 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Header Section */}
        <div className="text-center mb-20">
                      <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-6 leading-tight ${
              language === 'AR' ? 'font-arabic' : ''
            }`} style={{ textShadow: 'none' }}>
              {currentContent.subtitle}
            </h2>
        </div>

        {/* Main Content Layout - Similar to competitor */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content - Vision Tiles (static, no active state) */}
          <div className={`space-y-6 ${language === 'AR' ? 'lg:order-2 text-right' : 'lg:order-1'}`}>
            {currentContent.sections.map((section, index) => (
              <div
                key={index}
                className="group"
              >
                {/* Individual White Tile for Each Vision */}
                <div className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-300 border-2 border-gray-100 ${language === 'AR' ? 'text-right' : 'text-left'}`}>
                  
                  {/* Header with Number */}
                  <div className={`flex items-center space-x-4 mb-4 ${language === 'AR' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 text-gray-700">
                      <span className="text-lg font-bold">{index + 1}</span>
                    </div>
                    
                    <h3 className={`text-xl font-bold text-gray-900 ${
                      language === 'AR' ? 'font-arabic' : ''
                    }`}>
                      {section.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className={`text-gray-700 leading-relaxed ${
                    language === 'AR' ? 'font-arabic' : ''
                  }`}>
                    {section.description}
                  </p>
                  
                </div>
              </div>
            ))}
          </div>

          {/* Right Content - 3D Visual */}
          <div className={`relative ${language === 'AR' ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative">
              {/* Professional 3D Building Visual */}
              <div className="bg-gray-900 rounded-2xl p-8 relative overflow-hidden">
                <img
                  ref={cutoutRef}
                  src="/assets/images/cutout.png"
                  alt="Alfauzan Development"
                  className="w-full h-96 object-contain opacity-90 transition-transform duration-700"
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))',
                  }}
                />
                
              </div>
              
              {/* Progress Indicator removed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollableKeyframe;
