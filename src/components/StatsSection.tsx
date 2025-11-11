
import React, { useState, useEffect, useRef } from 'react';
import { Building, Users, Award, TrendingUp, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedCounter from './AnimatedCounter';

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Our Achievements Speak of Our Leadership, and Your Trust Drives Our Success",
      subtitle: "Our proven achievements and pioneering projects reflect our commitment to building a thriving real estate future that fulfills our client's aspirations and places them at the forefront of success.",
      stats: [
        { 
          icon: Building, 
          number: 22, 
          label: 'Projects in the main regions of the Kingdom',
          suffix: '+'
        },
        { 
          icon: Users, 
          number: 500, 
          label: 'Commercial and industrial partners benefiting from the company\'s services',
          suffix: '+'
        },
        { 
          icon: Award, 
          number: 80, 
          label: 'Customer satisfaction driven by the quality of projects and services provided',
          suffix: '%'
        },
        { 
          icon: TrendingUp, 
          number: 24, 
          label: 'Operation and maintenance services ensuring efficiency and continuity',
          suffix: '/7'
        },
        { 
          icon: Building, 
          number: 20, 
          label: 'Industrial Cities and Real Estate Master Plans',
          suffix: '+'
        },
        { 
          icon: Award, 
          number: 38, 
          label: 'Years of experience in real estate and industrial development',
          suffix: '+'
        },
        { 
          icon: Users, 
          number: 70, 
          label: 'Support for CSR programs and initiatives',
          suffix: '+'
        },
        { 
          icon: TrendingUp, 
          number: 10, 
          label: 'Job opportunities created through company projects',
          suffix: 'k+'
        },
        { 
          icon: Building, 
          number: 15, 
          label: 'Future projects currently in planning and construction stages',
          suffix: '+'
        },
        { 
          icon: Users, 
          number: 2000, 
          label: 'Leased industrial, commercial and residential units',
          suffix: '+'
        },
        { 
          icon: TrendingUp, 
          number: 85, 
          label: 'Occupancy rate in existing projects',
          suffix: '%'
        },
        { 
          icon: Award, 
          number: 7, 
          label: 'Awards and recognitions for excellence in real estate development',
          suffix: '+'
        }
      ]
    },
    AR: {
      // Updated Arabic content
      title: "إنجازاتنا تتحدث عن ريادتنا وثقتكم تقود نجاحنا",
      subtitle: "إنجازاتنا الموثقة ومشاريعنا الرائدة تعكس التزامنا ببناء مستقبل عقاري مزدهر يلبي طموحات عملائنا، ويضعهم في مقدمة النجاح",
      stats: [
        { 
          icon: Building, 
          number: 22, 
          label: 'المشاريع في المناطق الرئيسية في المملكة',
          suffix: '+'
        },
        { 
          icon: Users, 
          number: 500, 
          label: 'شريك تجاري وصناعي مستفيد من خدمات الشركة',
          suffix: '+'
        },
        { 
          icon: Award, 
          number: 80, 
          label: 'رضا العملاء بفضل نوعية المشاريع والخدمات المقدمة',
          suffix: '%'
        },
        { 
          icon: TrendingUp, 
          number: 24, 
          label: 'خدمات تشغيل وصيانة لضمان كفاءة العمليات واستمراريتها',
          suffix: '/7'
        },
        { 
          icon: Building, 
          number: 20, 
          label: 'مشاريع صناعية ومخططات عقارية',
          suffix: '+'
        },
        { 
          icon: Award, 
          number: 38, 
          label: 'سنة من الخبرة في التطوير العقاري والصناعي',
          suffix: '+'
        },
        { 
          icon: Users, 
          number: 70, 
          label: 'دعم برامج ومبادرات المسؤولية المجتمعية',
          suffix: '+'
        },
        { 
          icon: TrendingUp, 
          number: 10, 
          label: 'فرص عمل تم توفيرها من خلال مشاريع الشركة',
          suffix: 'k+'
        },
        { 
          icon: Building, 
          number: 15, 
          label: 'مشاريع نوعية قيد التخطيط والإنشاء',
          suffix: '+'
        },
        { 
          icon: Users, 
          number: 2000, 
          label: 'وحدة صناعية وتجارية وسكنية مؤجرة',
          suffix: '+'
        },
        { 
          icon: TrendingUp, 
          number: 85, 
          label: 'نسبة الإشغال في المشاريع القائمة',
          suffix: '%'
        },
        { 
          icon: Award, 
          number: 7, 
          label: 'جائزة وتكريم في مجالات التطوير العقاري والصناعي',
          suffix: '+'
        }
      ]
    }
  };

  const currentContent = content[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Remove the old AnimatedCounter implementation since we're using the new component

  return (
    <section id="stats" ref={sectionRef} className="py-20 z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 ${language === 'AR' ? 'font-arabic' : ''}`} style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            {currentContent.title}
          </h2>
          <p className={`text-xl text-white/90 max-w-2xl mx-auto ${language === 'AR' ? 'font-arabic' : ''}`} style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {currentContent.stats.map((stat, index) => {
            return (
              <div 
                key={index}
                className="relative group hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Circular Tile Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                {/* Main Tile */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-500 text-center group-hover:bg-white/15">
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-yellow-400/30 transition-all duration-500">
                    <stat.icon className="h-8 w-8 text-yellow-400" />
                  </div>
                  
                  {/* Number */}
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                    <AnimatedCounter 
                      end={stat.number} 
                      suffix={stat.suffix} 
                      duration={2000 + (index * 200)}
                      delay={index * 100}
                    />
                  </div>
                  
                  {/* Label */}
                  <p className={`text-white/90 text-sm sm:text-lg ${language === 'AR' ? 'font-arabic' : ''}`} style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional stats are now included in the main grid above */}
      </div>
    </section>
  );
};

export default StatsSection;
