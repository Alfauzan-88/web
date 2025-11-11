import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TransparentNavigation from '@/components/TransparentNavigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, User, Tag, Eye, Share2, MessageCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const News = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const content = {
    EN: {
      title: "Latest News & Updates",
      subtitle: "Stay informed about our latest developments and industry insights",
      categories: ["All", "Company News", "Market Insights", "Project Updates", "Industry News", "Investment Tips"],
      articles: [
        {
          id: 1,
          title: "A MODON delegation visits Al-Fawzan Industrial City in Riyadh",
          excerpt: "The Director General of the Saudi Authority for Industrial Cities and Technology Zones (MODON) visited Al-Fawzan Industrial City to inspect the completed works and operational industrial activities.",
          content: "The Director General of the Saudi Authority for Industrial Cities and Technology Zones (MODON) visited Al-Fawzan Industrial City to inspect the completed works and operational industrial activities. This visit highlights the importance of our industrial developments in supporting Saudi Arabia's Vision 2030...",
          category: "Company News",
          author: "Press Team",
          date: "2024-01-20",
          views: "2,540",
          comments: "48",
          image: "/assets/images/News/1.png",
          featured: true,
          readMoreUrl: "https://www.al-jazirahonline.com/2020/02/20/33378/"
        },
        {
          id: 2,
          title: "Prince Al-Qassim honors businessman Ali Al-Fawzan for his community contributions",
          excerpt: "Prince Faisal bin Mishaal bin Saud bin Abdulaziz, Governor of Al-Qassim Region, honored businessman Ali Al-Fawzan for his outstanding contributions to community development and social responsibility initiatives.",
          content: "Prince Faisal bin Mishaal bin Saud bin Abdulaziz, Governor of Al-Qassim Region, honored businessman Ali Al-Fawzan for his outstanding contributions to community development and social responsibility initiatives. This recognition reflects our commitment to corporate social responsibility...",
          category: "Company News",
          author: "Press Team",
          date: "2024-01-18",
          views: "1,890",
          comments: "23",
          image: "/assets/images/News/2.png",
          featured: false,
          readMoreUrl: "https://www.spa.gov.sa/1705526?lang=ar&newsid=1705526"
        },
        {
          id: 3,
          title: "Ali Al-Fouzan Company wins the best real estate development company award in the industrial sector",
          excerpt: "At the Arabian Business Magazine Awards ceremony in Riyadh, Ali Al-Fouzan Company was recognized as the best real estate development company in the industrial sector.",
          content: "At the Arabian Business Magazine Awards ceremony in Riyadh, Ali Al-Fouzan Company was recognized as the best real estate development company in the industrial sector. This award recognizes our excellence in industrial real estate development and our contribution to the Kingdom's economic growth...",
          category: "Company News",
          author: "Press Team",
          date: "2024-01-16",
          views: "3,200",
          comments: "67",
          image: "/assets/images/News/3.png",
          featured: true,
          readMoreUrl: "https://aawsat.com/home/article/115731"
        },
        {
          id: 4,
          title: "Ali Al-Fouzan and Sons Real Estate Company - Unique capabilities in developing plans, industrial facilities and warehouses",
          excerpt: "The planning and construction company demonstrates exceptional expertise in developing comprehensive industrial plans, state-of-the-art facilities, and modern warehouse solutions.",
          content: "The planning and construction company demonstrates exceptional expertise in developing comprehensive industrial plans, state-of-the-art facilities, and modern warehouse solutions. Our unique capabilities set us apart in the industrial real estate sector...",
          category: "Company News",
          author: "Press Team",
          date: "2024-01-14",
          views: "1,654",
          comments: "34",
          image: "/assets/images/News/4.png",
          featured: false,
          readMoreUrl: "https://www.alriyadh.com/930934"
        }
      ]
    },
    AR: {
      title: "أحدث الأخبار والتحديثات",
      subtitle: "ابق على اطلاع بأحدث التطورات ورؤى الصناعة",
      categories: ["الكل", "أخبار الشركة", "رؤى السوق", "تحديثات المشاريع", "أخبار الصناعة", "نصائح الاستثمار"],
      articles: [
        {
          id: 1,
          title: "وفد مدن يزور مدينة الفوزان الصناعية في الرياض",
          excerpt: "مدير عام الهيئة السعودية للمدن الصناعية ومناطق التقنية يزور مدينة الفوزان الصناعية لتفقد الأعمال المنجزة والفعاليات الصناعية العاملة.",
          content: "مدير عام الهيئة السعودية للمدن الصناعية ومناطق التقنية يزور مدينة الفوزان الصناعية لتفقد الأعمال المنجزة والفعاليات الصناعية العاملة. هذه الزيارة تؤكد أهمية مشاريعنا الصناعية في دعم رؤية المملكة 2030...",
          category: "أخبار الشركة",
          author: "فريق الصحافة",
          date: "2024-01-20",
          views: "2,540",
          comments: "48",
          image: "/assets/images/News/1.png",
          featured: true,
          readMoreUrl: "https://www.al-jazirahonline.com/2020/02/20/33378/"
        },
        {
          id: 2,
          title: "أمير القصيم يكرم رجل الأعمال علي الفوزان لمساهماته المجتمعية",
          excerpt: "أمير منطقة القصيم الأمير فيصل بن مشعل بن سعود بن عبدالعزيز يكرم رجل الأعمال علي الفوزان لمساهماته المتميزة في التنمية المجتمعية ومبادرات المسؤولية الاجتماعية.",
          content: "أمير منطقة القصيم الأمير فيصل بن مشعل بن سعود بن عبدالعزيز يكرم رجل الأعمال علي الفوزان لمساهماته المتميزة في التنمية المجتمعية ومبادرات المسؤولية الاجتماعية. هذا التكريم يعكس التزامنا بالمسؤولية الاجتماعية للشركات...",
          category: "أخبار الشركة",
          author: "فريق الصحافة",
          date: "2024-01-18",
          views: "1,890",
          comments: "23",
          image: "/assets/images/News/2.png",
          featured: false,
          readMoreUrl: "https://www.spa.gov.sa/1705526?lang=ar&newsid=1705526"
        },
        {
          id: 3,
          title: "شركة علي الفوزان تحصد جائزة أفضل شركة تطوير عقاري في القطاع الصناعي",
          excerpt: "في حفل جوائز مجلة آرابيان بزنس في الرياض، تم تكريم شركة علي الفوزان كأفضل شركة تطوير عقاري في القطاع الصناعي.",
          content: "في حفل جوائز مجلة آرابيان بزنس في الرياض، تم تكريم شركة علي الفوزان كأفضل شركة تطوير عقاري في القطاع الصناعي. هذه الجائزة تعترف بتميزنا في تطوير العقارات الصناعية ومساهمتنا في النمو الاقتصادي للمملكة...",
          category: "أخبار الشركة",
          author: "فريق الصحافة",
          date: "2024-01-16",
          views: "3,200",
          comments: "67",
          image: "/assets/images/News/3.png",
          featured: true,
          readMoreUrl: "https://aawsat.com/home/article/115731"
        },
        {
          id: 4,
          title: "شركة علي الفوزان وأولاده العقارية - قدرات فريدة في تطوير المخططات والمرافق الصناعية والمستودعات",
          excerpt: "شركة التخطيط والإنشاء تثبت خبرة استثنائية في تطوير المخططات الصناعية الشاملة والمرافق المتطورة وحلول المستودعات الحديثة.",
          content: "شركة التخطيط والإنشاء تثبت خبرة استثنائية في تطوير المخططات الصناعية الشاملة والمرافق المتطورة وحلول المستودعات الحديثة. قدراتنا الفريدة تميزنا في قطاع العقارات الصناعية...",
          category: "أخبار الشركة",
          author: "فريق الصحافة",
          date: "2024-01-14",
          views: "1,654",
          comments: "34",
          image: "/assets/images/News/4.png",
          featured: false,
          readMoreUrl: "https://www.alriyadh.com/930934"
        }
      ]
    }
  };

  const currentContent = content[language];
  const allPosts = currentContent.articles;
  const filteredArticles = allPosts;

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Video Background */}
      <div className="fixed inset-0 w-screen h-screen z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/hero-banner.mp4" type="video/mp4" />
          {language === 'AR' ? 'متصفحك لا يدعم تشغيل الفيديو.' : 'Your browser does not support the video tag.'}
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <TransparentNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 animate-fade-in text-white ${
            language === 'AR' ? 'font-arabic' : ''
          }`} style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            {currentContent.title}
          </h1>
          <p className={`text-xl text-white/90 max-w-3xl mx-auto animate-fade-in ${
            language === 'AR' ? 'font-arabic' : ''
          }`} style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            {currentContent.subtitle}
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-12 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Article */}
          {filteredArticles.find(article => article.featured) && (
            <div className="mb-12">
              {filteredArticles.filter(article => article.featured).slice(0, 1).map((article) => (
                <div key={article.id} className="grid lg:grid-cols-2 gap-8 bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover-scale animate-fade-in border border-white/20">
                  <div className="relative h-64 lg:h-full overflow-hidden">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                    <h2 className={`text-2xl font-bold mb-4 text-white ${
                      language === 'AR' ? 'font-arabic' : ''
                    }`}>{article.title}</h2>
                    <p className={`text-white/90 mb-6 ${
                      language === 'AR' ? 'font-arabic' : ''
                    }`}>{article.excerpt}</p>
                    <div className="flex items-center gap-6 text-sm text-white/70 mb-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-2" />
                        {article.views}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        {article.comments}
                      </div>
                    </div>
                    <Button
                      className="bg-yellow-400 text-black hover:bg-yellow-300 transition-colors"
                      onClick={() => article.readMoreUrl ? window.open(article.readMoreUrl, '_blank') : navigate(`/news/${article.id}`)}
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.filter(article => !article.featured).map((article, index) => (
              <article 
                key={article.id}
                className="group bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden hover-scale shadow-lg hover:shadow-xl border border-white/20 animate-fade-in"
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
                    language === 'AR' ? 'font-arabic' : ''
                  }`}>
                    {article.title}
                  </h3>

                  <p className={`text-gray-600 mb-4 text-sm leading-relaxed ${
                    language === 'AR' ? 'font-arabic' : ''
                  }`}>
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {article.views}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        {article.comments}
                      </div>
                    </div>
                  </div>

                  <Button 
                    variant="ghost" 
                    className={`text-yellow-500 hover:text-white hover:bg-yellow-500 p-0 h-auto font-semibold group ${
                      language === 'AR' ? 'font-arabic' : ''
                    }`}
                    onClick={() => article.readMoreUrl ? window.open(article.readMoreUrl, '_blank') : navigate(`/news/${article.id}`)}
                  >
                    Read More
                    <ExternalLink className={`${language === 'AR' ? 'mr-2' : 'ml-2'} h-4 w-4 transition-transform group-hover:translate-x-1`} />
                  </Button>
                </div>
              </article>
            ))}
          </div>


        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
