import React from 'react';
import { Users, Wrench, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectFeaturesInfographicProps {
  className?: string;
}

const ProjectFeaturesInfographic: React.FC<ProjectFeaturesInfographicProps> = ({ className = "" }) => {
  const { language } = useLanguage();

  const content = {
    EN: {
      targetClients: {
        title: "Target Clients",
        items: [
          "Large and medium-sized industrial companies",
          "Logistics service providers",
          "Local and international investors in the industrial sector"
        ]
      },
             availableServices: {
         title: "Available Services",
         items: [
           "Factories of various sizes and industries",
           "Storage warehouses with flexible spaces",
           "24/7 security surveillance systems"
         ]
       },
      designInfrastructure: {
        title: "Design and Infrastructure",
        items: [
          "Wide road networks designed for heavy trucks",
          "Comprehensive infrastructure including water, electricity, sewage, and telecommunications networks",
          "Smart zoning including industrial, commercial, administrative, and residential areas"
        ]
      }
    },
    AR: {
      targetClients: {
        title: "العملاء المستهدفون",
        items: [
          "الشركات الصناعية الكبيرة والمتوسطة",
          "مقدمو خدمات اللوجستيك",
          "المستثمرون المحليون والدوليون في القطاع الصناعي"
        ]
      },
             availableServices: {
         title: "الخدمات المتوفرة",
         items: [
           "مصانع بأحجام وصناعات متنوعة",
           "مستودعات تخزين بمساحات مرنة",
           "أنظمة مراقبة أمنية على مدار الساعة"
         ]
       },
      designInfrastructure: {
        title: "التصميم والبنية التحتية",
        items: [
          "شبكات طرق واسعة مصممة للشاحنات الثقيلة",
          "بنية تحتية شاملة تشمل المياه والكهرباء والصرف الصحي وشبكات الاتصالات",
          "تخطيط ذكي يشمل المناطق الصناعية والتجارية والإدارية والسكنية"
        ]
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className={`grid md:grid-cols-3 gap-8 ${className}`}>
      {/* Target Clients Card */}
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 shadow-2xl hover:shadow-yellow-400/20">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Users className="h-10 w-10 text-yellow-800" />
          </div>
          <h3 className={`text-2xl font-bold text-white mb-4 ${
            language === 'AR' ? 'font-arabic' : ''
          }`} style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            {currentContent.targetClients.title}
          </h3>
        </div>
        <ul className="space-y-4">
          {currentContent.targetClients.items.map((item, index) => (
            <li key={index} className="flex items-start gap-4 group">
              <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0 shadow-sm group-hover:scale-125 transition-transform duration-300"></div>
              <span className={`text-white/90 text-base leading-relaxed ${
                language === 'AR' ? 'font-arabic text-right' : ''
              }`} style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Available Services Card */}
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 shadow-2xl hover:shadow-yellow-400/20">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Wrench className="h-10 w-10 text-yellow-800" />
          </div>
          <h3 className={`text-2xl font-bold text-white mb-4 ${
            language === 'AR' ? 'font-arabic' : ''
          }`} style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            {currentContent.availableServices.title}
          </h3>
        </div>
        <ul className="space-y-4">
          {currentContent.availableServices.items.map((item, index) => (
            <li key={index} className="flex items-start gap-4 group">
              <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0 shadow-sm group-hover:scale-125 transition-transform duration-300"></div>
              <span className={`text-white/90 text-base leading-relaxed ${
                language === 'AR' ? 'font-arabic text-right' : ''
              }`} style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Design and Infrastructure Card */}
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 shadow-2xl hover:shadow-yellow-400/20">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <MapPin className="h-10 w-10 text-yellow-800" />
          </div>
          <h3 className={`text-2xl font-bold text-white mb-4 ${
            language === 'AR' ? 'font-arabic' : ''
          }`} style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            {currentContent.designInfrastructure.title}
          </h3>
        </div>
        <ul className="space-y-4">
          {currentContent.designInfrastructure.items.map((item, index) => (
            <li key={index} className="flex items-start gap-4 group">
              <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0 shadow-sm group-hover:scale-125 transition-transform duration-300"></div>
              <span className={`text-white/90 text-base leading-relaxed ${
                language === 'AR' ? 'font-arabic text-right' : ''
              }`} style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectFeaturesInfographic;
