
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LatestNews = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Latest News & Updates",
      subtitle: "Stay informed about our latest developments and industry insights",
      readMore: "Read More",
      viewAllNews: "View All News"
    },
    AR: {
      title: "أحدث الأخبار والتحديثات",
      subtitle: "ابق على اطلاع بأحدث التطورات ورؤى الصناعة",
      readMore: "اقرأ المزيد",
      viewAllNews: "عرض جميع الأخبار"
    }
  };

  const currentContent = content[language];

  const news = {
    EN: [
      {
        id: 1,
        title: 'A MODON delegation visits Al-Fawzan Industrial City in Riyadh',
        excerpt: 'The Director General of the Saudi Authority for Industrial Cities and Technology Zones (MODON) visited Al-Fawzan Industrial City to inspect the completed works and operational industrial activities.',
        date: '2024-01-20',
        image: '/assets/images/News/1.png',
        category: 'Company News',
        readMoreUrl: 'https://www.al-jazirahonline.com/2020/02/20/33378/'
      },
      {
        id: 2,
        title: 'Prince Al-Qassim honors businessman Ali Al-Fawzan for his community contributions',
        excerpt: 'Prince Faisal bin Mishaal bin Saud bin Abdulaziz, Governor of Al-Qassim Region, honored businessman Ali Al-Fawzan for his outstanding contributions to community development and social responsibility initiatives.',
        date: '2024-01-18',
        image: '/assets/images/News/2.png',
        category: 'Company News',
        readMoreUrl: 'https://www.spa.gov.sa/1705526?lang=ar&newsid=1705526'
      },
      {
        id: 3,
        title: 'Ali Al-Fouzan Company wins the best real estate development company award in the industrial sector',
        excerpt: 'At the Arabian Business Magazine Awards ceremony in Riyadh, Ali Al-Fouzan Company was recognized as the best real estate development company in the industrial sector.',
        date: '2024-01-16',
        image: '/assets/images/News/3.png',
        category: 'Company News',
        readMoreUrl: 'https://aawsat.com/home/article/115731'
      },
      {
        id: 4,
        title: 'Ali Al-Fouzan and Sons Real Estate Company - Unique capabilities in developing plans, industrial facilities and warehouses',
        excerpt: 'The planning and construction company demonstrates exceptional expertise in developing comprehensive industrial plans, state-of-the-art facilities, and modern warehouse solutions.',
        date: '2024-01-14',
        image: '/assets/images/News/4.png',
        category: 'Company News',
        readMoreUrl: 'https://www.alriyadh.com/930934'
      },
      {
        id: 5,
        title: 'Ali Al-Fouzan and Sons Real Estate Company signs a financing agreement for its customers with Amlak International',
        excerpt: 'Strategic partnership to provide customers with facilitated financing solutions for purchasing warehouses and industrial facilities.',
        date: '2024-01-13',
        image: '/assets/images/News/5.png',
        category: 'Company News',
        readMoreUrl: 'https://www.argaam.com/ar/article/articledetail/id/946166'
      },

    ],
    AR: [
      {
        id: 1,
        title: 'وفد مدن يزور مدينة الفوزان الصناعية في الرياض',
        excerpt: 'مدير عام الهيئة السعودية للمدن الصناعية ومناطق التقنية يزور مدينة الفوزان الصناعية لتفقد الأعمال المنجزة والفعاليات الصناعية العاملة.',
        date: '2024-01-20',
        image: '/assets/images/News/1.png',
        category: 'أخبار الشركة',
        readMoreUrl: 'https://www.al-jazirahonline.com/2020/02/20/33378/'
      },
      {
        id: 2,
        title: 'أمير القصيم يكرم رجل الأعمال علي الفوزان لمساهماته المجتمعية',
        excerpt: 'أمير منطقة القصيم الأمير فيصل بن مشعل بن سعود بن عبدالعزيز يكرم رجل الأعمال علي الفوزان لمساهماته المتميزة في التنمية المجتمعية ومبادرات المسؤولية الاجتماعية.',
        date: '2024-01-18',
        image: '/assets/images/News/2.png',
        category: 'أخبار الشركة',
        readMoreUrl: 'https://www.spa.gov.sa/1705526?lang=ar&newsid=1705526'
      },
      {
        id: 3,
        title: 'شركة علي الفوزان تحصد جائزة أفضل شركة تطوير عقاري في القطاع الصناعي',
        excerpt: 'في حفل جوائز مجلة آرابيان بزنس في الرياض، تم تكريم شركة علي الفوزان كأفضل شركة تطوير عقاري في القطاع الصناعي.',
        date: '2024-01-16',
        image: '/assets/images/News/3.png',
        category: 'أخبار الشركة',
        readMoreUrl: 'https://aawsat.com/home/article/115731'
      },
      {
        id: 4,
        title: 'شركة علي الفوزان وأولاده العقارية - قدرات فريدة في تطوير المخططات والمرافق الصناعية والمستودعات',
        excerpt: 'شركة التخطيط والإنشاء تثبت خبرة استثنائية في تطوير المخططات الصناعية الشاملة والمرافق المتطورة وحلول المستودعات الحديثة.',
        date: '2024-01-14',
        image: '/assets/images/News/4.png',
        category: 'أخبار الشركة',
        readMoreUrl: 'https://www.alriyadh.com/930934'
      },
      {
        id: 5,
        title: 'شركة علي الفوزان وأولاده العقارية توقع اتفاقية تمويل لعملائها مع أملاك العالمية',
        excerpt: 'شراكة استراتيجية لتوفير حلول تمويلية ميسرة للعملاء لشراء المستودعات والمرافق الصناعية.',
        date: '2024-01-13',
        image: '/assets/images/News/5.png',
        category: 'أخبار الشركة',
        readMoreUrl: 'https://www.argaam.com/ar/article/articledetail/id/946166'
      },

    ]
  };

  const currentNews = news[language];

  return (
    <section id="news" className="py-20 z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${language === 'AR' ? 'font-arabic' : ''}`}>
          <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 text-center ${
            language === 'AR' ? 'font-arabic' : ''
          }`} style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            {currentContent.title}
          </h2>
          <p className={`text-xl text-white/90 max-w-2xl mx-auto text-center ${
            language === 'AR' ? 'font-arabic' : ''
          }`} style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentNews.map((article, index) => (
            <article 
              key={article.id}
              className="group bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden hover-scale shadow-lg hover:shadow-xl border border-white/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-yellow-400 text-black rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <div className={`flex items-center text-gray-500 text-sm mb-3 ${
                  language === 'AR' ? 'flex-row-reverse' : ''
                }`}>
                  <Calendar className={`h-4 w-4 ${language === 'AR' ? 'ml-2' : 'mr-2'}`} />
                  <time>{new Date(article.date).toLocaleDateString(language === 'AR' ? 'ar-SA' : 'en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</time>
                </div>

                <h3 className={`text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-500 transition-colors leading-tight ${
                  language === 'AR' ? 'font-arabic text-right' : ''
                }`}>
                  {article.title}
                </h3>

                <p className={`text-gray-600 mb-4 text-sm leading-relaxed ${
                  language === 'AR' ? 'font-arabic text-right' : ''
                }`}>
                  {article.excerpt}
                </p>

                <Button 
                  variant="ghost" 
                  className={`text-yellow-500 hover:text-white hover:bg-yellow-500 p-0 h-auto font-semibold group ${
                    language === 'AR' ? 'font-arabic' : ''
                  }`}
                  onClick={() => article.readMoreUrl ? window.open(article.readMoreUrl, '_blank') : null}
                >
                  {currentContent.readMore}
                  <ExternalLink className={`${language === 'AR' ? 'mr-2' : 'ml-2'} h-4 w-4 transition-transform group-hover:translate-x-1`} />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className={`border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black hover-scale ${
              language === 'AR' ? 'font-arabic' : ''
            }`}
          >
            {currentContent.viewAllNews}
            <ArrowRight className={`${language === 'AR' ? 'mr-2' : 'ml-2'} h-5 w-5`} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
