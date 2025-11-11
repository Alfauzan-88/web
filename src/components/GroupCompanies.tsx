import React from 'react';
import { Building } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const GroupCompanies: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Our Group of Companies. Real Estate Partnerships Shaping the Future",
      subtitle: "With our leading group of companies, we innovate integrated real estate solutions that combine quality and creativity to meet the demands of local and global markets. Our vision focuses on building strong strategic partnerships that enhance investment value and fulfill our clients' aspirations across all real estate and industrial sectors.",
      companies: [
        { logo: "/assets/images/Group/1.png" },
        { logo: "/assets/images/Group/2.jpeg" },
        { logo: "/assets/images/Group/3.jpeg" },
        { logo: "/assets/images/Group/4.png" },
        { logo: "/assets/images/Group/5.jpeg" }
      ]
    },
    AR: {
      title: "مجموعة شركاتنا. شراكات عقارية تصنع المستقبل",
      subtitle: "مع مجموعة شركاتنا الرائدة، نبتكر حلولاً عقارية متكاملة تجمع بين الجودة والابتكار، لتلبية احتياجات الأسواق المحلية والعالمية. رؤيتنا تمتد نحو بناء شراكات استراتيجية قوية، تعزز قيمة الاستثمار وتحقق تطلعات عملائنا في جميع القطاعات العقارية والصناعية",
      companies: [
        { logo: "/assets/images/Group/1.png" },
        { logo: "/assets/images/Group/2.jpeg" },
        { logo: "/assets/images/Group/3.jpeg" },
        { logo: "/assets/images/Group/4.png" },
        { logo: "/assets/images/Group/5.jpeg" }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-6" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            {currentContent.title}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            {currentContent.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {currentContent.companies.map((company, index) => (
                         <div key={index} className="text-center group">
              <div className="w-44 h-44 bg-white rounded-xl mx-auto flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img 
                  src={company.logo} 
                  alt={`Company logo ${index + 1}`}
                  className="w-40 h-40 object-contain"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="w-40 h-40 bg-yellow-400 rounded-lg flex items-center justify-center hidden">
                  <Building className="h-16 w-16 text-black" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupCompanies;
