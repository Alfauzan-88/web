import React from 'react';
import TransparentNavigation from '@/components/TransparentNavigation';
import ScrollableKeyframe from '@/components/ScrollableKeyframe';
import EventsGallery from '@/components/EventsGallery';
import GroupCompanies from '@/components/GroupCompanies';
import Footer from '@/components/Footer';
import { Award, Users, Target, Clock, Zap, Globe, Building, Heart, Shield, TrendingUp, Star, Calendar, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedCounter from '@/components/AnimatedCounter';

const About = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      history: {
        title: "Our Rich History",
        subtitle: "More than Thirty eight years of excellence in Saudi Arabia's real estate market",
        events: [
          { year: "1988", title: "Company Foundation", description: "Ali Al Fauzan & Sons Real Estate Company was established" },
          { year: "1991", title: "Early Development", description: "Started with initial real estate development projects" },
          { year: "1995", title: "Industrial Focus", description: "Began specializing in industrial city development" },
          { year: "1999", title: "Expansion Phase", description: "Expanded operations across multiple regions" },
          { year: "2000", title: "Regional Growth", description: "Established presence in major Saudi cities" },
          { year: "2004", title: "Infrastructure Development", description: "Launched comprehensive infrastructure projects" },
          { year: "2011", title: "Modern Facilities", description: "Introduced modern industrial facilities" },
          { year: "2012", title: "Warehouse Solutions", description: "Developed specialized warehousing solutions" },
          { year: "2013", title: "Technology Integration", description: "Integrated advanced technology in projects" },
          { year: "2014", title: "Quality Standards", description: "Established industry quality standards" },
          { year: "2015", title: "Sustainability Focus", description: "Adopted sustainable development practices" },
          { year: "2016", title: "Innovation Drive", description: "Launched innovative project solutions" },
          { year: "2017", title: "Market Leadership", description: "Achieved market leadership position" },
          { year: "2018", title: "Vision 2030 Alignment", description: "Aligned with Saudi Vision 2030 objectives" },
          { year: "2020", title: "Digital Transformation", description: "Implemented digital transformation initiatives" },
          { year: "2024", title: "Future Ready", description: "Leading with smart city and sustainable technologies" }
        ]
      },
      values: {
        title: "Our Core Values",
        subtitle: "The principles that guide everything we do",
        items: [
          { icon: Target, title: "Excellence", description: "Commitment to the highest standards in all our endeavors" },
          { icon: Heart, title: "Integrity", description: "Building trust through transparency and ethical practices" },
          { icon: Zap, title: "Innovation", description: "Embracing cutting-edge solutions and technologies" },
          { icon: Shield, title: "Sustainability", description: "Creating environmentally responsible developments" },
          { icon: Users, title: "Community", description: "Fostering strong relationships with our stakeholders" },
          { icon: Globe, title: "Vision", description: "Contributing to Saudi Arabia's ambitious future" }
        ]
      },
      ceo: {
        title: "Message from Our Founder",
        subtitle: "Leading with vision and commitment to excellence",
        name: "Ali Fauzan Mohammed Al Fauzan",
        position: "CEO",
        image: "/assets/images/CEO.png",
        message: "We believe that true development is not limited to constructing projects, but extends to building a sustainable future that fulfills the aspirations of future generations. For over three decades, Ali Al Fauzan & Sons Real Estate has been at the forefront of Saudi Arabia's industrial and real estate transformation, delivering innovative solutions that support the national economy and achieve the aspirations of Saudi Vision 2030.",
        achievements: [
          "38+ years of industry leadership",
          "Led 200+ successful projects",
          "Pioneered industrial development in Saudi Arabia",
          "Established industry standards and best practices",
          "Mentored 500+ professionals"
        ]
      },
      team: {
        title: "Our Leadership Team",
        subtitle: "Experienced professionals driving our success",
        members: [
          { name: "Ali Fauzan Mohammed Al Fauzan", position: "Chairman of the Board of Directors", image: "/assets/images/CEO.png", isBoardMember: true },
          { name: "Faisal bin Ali Al Fouzan", position: "Chief Executive Officer", image: "/assets/images/team-2.jpg", isBoardMember: true },
          { name: "Faris bin Ali Al Fouzan", position: "Executive Vice President", image: "/assets/images/team-3.jpg", isBoardMember: true },
          { name: "Sulaiman Saleh Al Arini", position: "General Manager", image: "/assets/images/team-4.jpg", isBoardMember: true },
          { name: "Legal Department", image: "/assets/images/team-5.jpg", phone: "+966 599999183", whatsapp: true },
          { name: "Property Department", image: "/assets/images/team-6.jpg", phone: "+966 598322222", whatsapp: true },
          { name: "Financial Department", image: "/assets/images/team-7.jpg", phone: "+966 59 333 0077", whatsapp: true },
          { name: "Maintenance Department", image: "/assets/images/team-8.jpg", phone: "+966 569294544", whatsapp: true },
          { name: "Marketing Department", image: "/assets/images/team-9.jpg", phone: "+966 598122222", whatsapp: true },
          { name: "Projects Department", image: "/assets/images/team-10.jpg", phone: "+966 598333337", whatsapp: true }
        ]
      },

      awards: {
        title: "Awards & Recognition",
        subtitle: "Celebrating our achievements and industry leadership",
        items: [
          { year: "2024", title: "Best Real Estate Developer", organization: "Saudi Real Estate Awards" },
          { year: "2023", title: "Excellence in Innovation", organization: "Middle East Property Awards" },
          { year: "2022", title: "Sustainable Development", organization: "Green Building Council" },
          { year: "2021", title: "Customer Satisfaction", organization: "Real Estate Excellence Awards" },
          { year: "2020", title: "Digital Transformation", organization: "Tech Innovation Awards" },
          { year: "2019", title: "Community Impact", organization: "Social Responsibility Awards" }
        ]
      },
      overview: {
        title: "Company Overview",
        subtitle: "A comprehensive look at our organization",
        stats: [
          { number: "23+", label: "Projects in the main regions of the Kingdom" },
          { number: "500+", label: "Commercial and industrial partners benefiting from the company's services" },
          { number: "80%", label: "Customer satisfaction driven by the quality of projects and services provided" },
          { number: "24/7", label: "Operation and maintenance services ensuring efficiency and continuity" },
          { number: "25+", label: "Industrial Cities and Real Estate Master Plans" },
          { number: "35+", label: "Years of experience in real estate and industrial development" },
          { number: "70+", label: "Support for CSR programs and initiatives" },
          { number: "10k+", label: "Direct and indirect job opportunities created through the company's projects" },
          { number: "15+", label: "Future projects currently in planning and construction stages" },
          { number: "2,000+", label: "Leased industrial, commercial and residential units" },
          { number: "85%", label: "Occupancy rate in existing projects" },
          { number: "7+", label: "Awards and recognitions for excellence in real estate development" }
        ],
        description: "Ali Al Fauzan & Sons Real Estate is a leading Saudi company specializing in the development and management of real estate and industrial projects. The company focuses on developing industrial cities, real estate master plans, and warehouses, with an emphasis on providing modern infrastructure and integrated services. We deliver innovative and sustainable real estate solutions that meet client needs and support the objectives of Saudi Vision 2030."
      },
      mission: {
        title: "Our Mission & Vision",
        subtitle: "Driving transformation through excellence and innovation",
        mission: {
          title: "Our Mission",
          description: "To deliver comprehensive and integrated real estate and industrial solutions that exceed client expectations, focusing on innovation, quality, and sustainability for a better future."
        },
        vision: {
          title: "Our Vision",
          description: "To lead in building a sustainable future through innovative real estate and industrial projects that contribute to the national economy and achieve the aspirations of Saudi Vision 2030."
        }
      }
    },
    AR: {
      ceo: {
        title: "رسالة من الرئيس التنفيذي",
        subtitle: "قيادة برؤية والتزام بالتميز",
        name: "علي بن فوزان بن محمد الفوزان",
        position: "رئيس مجلس الادارة",
        image: "/assets/images/CEO.png",
        message: "نؤمن بأن البناء الحقيقي لا يقتصر على تشييد المشاريع، بل يمتد إلى بناء مستقبل مستدام يلامس تطلعات الأجيال القادمة. لأكثر من ثلاثة عقود، كانت شركة علي الفوزان وأولاده العقارية في طليعة تحول العقارات والصناعة في المملكة العربية السعودية، وتقديم حلول مبتكرة تدعم الاقتصاد الوطني وتحقق تطلعات رؤية السعودية 2030.",
        achievements: [
          "38+ سنة من القيادة في الصناعة",
          "قاد 200+ مشروع ناجح",
          "رائد التطوير الصناعي في المملكة العربية السعودية",
          "أسس معايير الصناعة وأفضل الممارسات",
          "وجه 500+ محترف"
        ]
      },
      history: {
        title: "تاريخنا العريق",
        subtitle: "أكثر من ثمانية وثلاثين سنة من التميز في السوق العقاري السعودي",
        events: [
          { year: "1988", title: "تأسيس الشركة", description: "تأسست شركة علي الفوزان وأولاده العقارية برؤية لتحويل المشهد العقاري في المملكة العربية السعودية" },
          { year: "1992", title: "أول مشروع صناعي", description: "أنجزنا أول مشروع تطوير صناعي كبير في الرياض بنجاح" },
          { year: "1998", title: "التوسع الإقليمي", description: "وسعنا عملياتنا إلى المنطقة الشرقية وجدة، وإنشاء مكاتب إقليمية" },
          { year: "2005", title: "التطوير التجاري", description: "أطلقنا أول مشروع تطوير تجاري واسع النطاق" },
          { year: "2012", title: "المشاريع السكنية", description: "دخلنا قطاع التطوير السكني مع مشاريع الإسكان الراقية" },
          { year: "2014", title: "جاهز للمستقبل", description: "نقود الصناعة بتقنيات المدن الذكية وممارسات التنمية المستدامة" },
          { year: "2018", title: "مواكبة رؤية 2030", description: "وافقنا استراتيجيتنا مع أهداف رؤية السعودية 2030 والتنمية المستدامة" },
          { year: "2023", title: "التحول الرقمي", description: "أطلقنا المنصات الرقمية وتقنيات المباني الذكية" },
        ]
      },
      values: {
        title: "قيمنا الأساسية",
        subtitle: "المبادئ التي توجه كل ما نقوم به",
        items: [
          { icon: Target, title: "التميز", description: "الالتزام بأعلى المعايير في جميع مساعينا" },
          { icon: Heart, title: "النزاهة", description: "بناء الثقة من خلال الشفافية والممارسات الأخلاقية" },
          { icon: Zap, title: "الابتكار", description: "تبني الحلول والتقنيات المتطورة" },
          { icon: Shield, title: "الاستدامة", description: "إنشاء تطويرات مسؤولة بيئياً" },
          { icon: Users, title: "المجتمع", description: "تعزيز العلاقات القوية مع أصحاب المصلحة" },
                    { icon: Globe, title: "الرؤية", description: "المساهمة في مستقبل المملكة العربية السعودية الطموح" }
        ]
      },
      team: {
        title: "فريق القيادة لدينا",
        subtitle: "محترفون ذوو خبرة يقودون نجاحنا",
        members: [
          { name: "علي بن فوزان محمد الفوزان", position: "رئيس مجلس الادارة", image: "/assets/images/team-1.jpg", isBoardMember: true },
          { name: "فيصل بن علي الفوزان", position: "الرئيس التنفيذي", image: "/assets/images/team-2.jpg", isBoardMember: true },
          { name: "فارس بن علي الفوزان", position: "نائب الرئيس التنفيذي", image: "/assets/images/team-3.jpg", isBoardMember: true },
          { name: "سليمان صالح العريني", position: "المدير العام", image: "/assets/images/team-4.jpg", isBoardMember: true },
          { name: "القسم القانوني", image: "/assets/images/team-5.jpg", phone: "+966 599999183", whatsapp: true },
          { name: "العقارات", image: "/assets/images/team-6.jpg", phone: "+966 598322222", whatsapp: true },
          { name: "المالية", image: "/assets/images/team-7.jpg", phone: "+966 59 333 0077", whatsapp: true },
          { name: "الصيانة", image: "/assets/images/team-8.jpg", phone: "+966 569294544", whatsapp: true },
          { name: "التسويق", image: "/assets/images/team-9.jpg", phone: "+966 598122222", whatsapp: true },
          { name: "المشاريع", image: "/assets/images/team-10.jpg", phone: "+966 598333337", whatsapp: true }
        ]
      },

      awards: {
        title: "الجوائز والاعتراف",
        subtitle: "نحتفل بإنجازاتنا وقيادتنا في الصناعة",
        items: [
          { year: "2024", title: "أفضل مطور عقاري", organization: "جوائز العقارات السعودية" },
          { year: "2023", title: "التميز في الابتكار", organization: "جوائز العقارات في الشرق الأوسط" },
          { year: "2022", title: "التنمية المستدامة", organization: "مجلس المباني الخضراء" },
          { year: "2021", title: "رضا العملاء", organization: "جوائز التميز العقاري" },
          { year: "2020", title: "التحول الرقمي", organization: "جوائز الابتكار التقني" },
          { year: "2019", title: "التأثير المجتمعي", organization: "جوائز المسؤولية الاجتماعية" }
        ]
      },
      overview: {
        title: "نظرة عامة على الشركة",
        subtitle: "نظرة شاملة على مؤسستنا",
        stats: [
          { number: "23+", label: "المشاريع في المناطق الرئيسية في المملكة" },
          { number: "500+", label: "شريك تجاري وصناعي مستفيد من خدمات الشركة" },
          { number: "80%", label: "رضا العملاء بفضل نوعية المشاريع والخدمات المقدمة" },
          { number: "24/7", label: "خدمات تشغيل وصيانة لضمان كفاءة العمليات واستمراريتها" },
          { number: "25+", label: "مشاريع صناعية ومخططات عقارية" },
          { number: "35+", label: "سنة من الخبرة في التطوير العقاري والصناعي" },
          { number: "70+", label: "دعم برامج ومبادرات المسؤولية المجتمعية" },
          { number: "10k+", label: "فرصة عمل مباشرة وغير مباشرة تم توفيرها من خلال مشاريع الشركة" },
          { number: "15+", label: "مشاريع نوعية قيد التخطيط والإنشاء" },
          { number: "2,000+", label: "وحدة صناعية وتجارية وسكنية مؤجرة" },
          { number: "85%", label: "نسبة الإشغال في المشاريع القائمة" },
          { number: "7+", label: "جائزة وتكريم في مجالات التطوير العقاري والصناعي" }
        ],
        description: "شركة علي الفوزان وأولاده العقارية، شركة سعودية رائدة في تطوير وإدارة المشاريع العقارية والصناعية. تتخصص الشركة في تطوير المدن الصناعية والمخططات العقارية والمستودعات، مع التركيز على تقديم بنية تحتية حديثة وخدمات متكاملة. نقدم حلولاً عقارية مبتكرة ومستدامة تلبي احتياجات العملاء وتدعم أهداف رؤية المملكة 2030."
      },
      mission: {
        title: "مهمتنا ورؤيتنا",
        subtitle: "دفع التحول من خلال التميز والابتكار",
        mission: {
          title: "مهمتنا",
          description: "تقديم حلول عقارية وصناعية شاملة ومتكاملة تتجاوز توقعات العملاء، مع التركيز على الابتكار والجودة والاستدامة لمستقبل أفضل"
        },
        vision: {
          title: "رؤيتنا",
          description: "الريادة في بناء مستقبل مستدام من خلال مشاريع عقارية وصناعية مبتكرة تساهم في الاقتصاد الوطني وتحقق تطلعات رؤية المملكة 2030"
        }
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Global Video Background */}
      <div className="fixed inset-0 w-screen h-screen z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/hero-banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <TransparentNavigation />
      
      {/* Page Header */}
      <div className="relative z-10 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            {language === 'EN' ? 'About Us' : 'من نحن'}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            {language === 'EN' 
              ? 'Experience the transformation of Saudi Arabia\'s skyline through our innovative developments'
              : 'اختبر تحول أفق المملكة العربية السعودية من خلال تطويراتنا المبتكرة'
            }
          </p>
        </div>
      </div>

      {/* CEO Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
              {currentContent.ceo.title}
            </h2>
            <p className="text-xl text-white/90" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
              {currentContent.ceo.subtitle}
            </p>
          </div>
          
          {/* CEO Message Box */}
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-white/20">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                {/* CEO Image */}
                <div className={`${language === 'AR' ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative">
                    <img 
                      src="/assets/images/CEO.PNG" 
                      alt={currentContent.ceo.name}
                      className="w-full h-auto max-w-sm sm:max-w-md mx-auto rounded-2xl shadow-xl"
                      onError={(e) => {
                        console.error('Failed to load CEO image:', e);
                        e.currentTarget.src = '/assets/images/CEO.png';
                      }}
                    />
                    {/* Decorative elements */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>

                {/* CEO Message */}
                <div className={`${language === 'AR' ? 'lg:order-1 text-right' : 'lg:order-2 text-left'}`}>
                  <div className="space-y-4">
                    {/* CEO Name and Position */}
                    <div>
                      <h3 className={`text-xl sm:text-2xl font-bold text-gray-900 mb-2 ${language === 'AR' ? 'font-arabic' : ''}`}>
                        {currentContent.ceo.name}
                      </h3>
                      <p className={`text-base sm:text-lg text-yellow-600 font-semibold ${language === 'AR' ? 'font-arabic' : ''}`}>
                        {currentContent.ceo.position}
                      </p>
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <div className="absolute top-0 left-0 text-3xl sm:text-4xl text-yellow-400 opacity-20 font-serif">
                        "
                      </div>
                      <blockquote className={`text-base sm:text-lg text-gray-700 leading-relaxed pt-4 sm:pt-6 pl-4 sm:pl-6 ${language === 'AR' ? 'font-arabic text-right pr-4 sm:pr-6 pl-0' : ''}`}>
                        {currentContent.ceo.message}
                      </blockquote>
                      <div className={`absolute bottom-0 text-3xl sm:text-4xl text-yellow-400 opacity-20 font-serif ${language === 'AR' ? 'left-0' : 'right-0'}`}>
                        "
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - 3rd */}
      <ScrollableKeyframe />
      
      {/* Events Gallery Section */}
      <EventsGallery />
         
               {/* Company Overview Section */}
               <section className="relative z-10 py-20">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                   <div className="text-center mb-16">
                     <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                       {currentContent.overview.title}
                     </h2>
                     <p className="text-xl text-white/90" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                       {currentContent.overview.subtitle}
                     </p>
                   </div>
                   
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                     <div className={`${language === 'AR' ? 'lg:order-2 text-right' : 'lg:order-1 text-left'}`}>
                       <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
                         <p className="text-white/90 leading-relaxed text-lg" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
                           {currentContent.overview.description}
                         </p>
                       </div>
                     </div>
                     
                     <div className={`${language === 'AR' ? 'lg:order-1' : 'lg:order-2'}`}>
                       <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                         {currentContent.overview.stats.map((stat, index) => {
                           const numericValue = parseInt(stat.number.replace(/\D/g, ''));
                           const suffix = stat.number.includes('+') ? '+' : stat.number.includes('%') ? '%' : '';
                           
                           return (
                             <div key={index} className="text-center">
                               <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                                 <AnimatedCounter 
                                   end={numericValue}
                                   suffix={suffix}
                                   className="text-3xl font-bold text-yellow-400 mb-2"
                                   style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}
                                   duration={2000 + (index * 200)}
                                   delay={index * 100}
                                 />
                                 <p className="text-white/90 text-sm" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
                                   {stat.label}
                                 </p>
                               </div>
                             </div>
                           );
                         })}
                       </div>
                     </div>
                   </div>
                 </div>
               </section>
               
               {/* Mission & Vision Section */}
               <section className="relative z-10 py-20">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                   <div className="text-center mb-16">
                     <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                       {currentContent.mission.title}
                     </h2>
                     <p className="text-xl text-white/90" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                       {currentContent.mission.subtitle}
                     </p>
                   </div>
                   
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                     {/* Mission */}
                     <div className={`${language === 'AR' ? 'lg:order-2 text-right' : 'lg:order-1 text-left'}`}>
                       <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl h-full">
                         <div className="flex items-center mb-6">
                           <Target className="h-8 w-8 text-yellow-400 mr-4" />
                           <h3 className="text-2xl font-bold text-white" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
                             {currentContent.mission.mission.title}
                           </h3>
                         </div>
                         <p className="text-white/90 leading-relaxed" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
                           {currentContent.mission.mission.description}
                         </p>
                       </div>
                     </div>
                     
                     {/* Vision */}
                     <div className={`${language === 'AR' ? 'lg:order-1 text-right' : 'lg:order-2 text-left'}`}>
                       <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl h-full">
                         <div className="flex items-center mb-6">
                           <Eye className="h-8 w-8 text-yellow-400 mr-4" />
                           <h3 className="text-2xl font-bold text-white" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
                             {currentContent.mission.vision.title}
                           </h3>
                         </div>
                         <p className="text-white/90 leading-relaxed" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
                           {currentContent.mission.vision.description}
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               </section>
               
               {/* Company History Section */}
               <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
              {currentContent.history.title}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
              {currentContent.history.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.history.events.map((event, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold mr-4">
                    {event.year}
                  </div>
                  <h3 className="text-xl font-bold text-white">{event.title}</h3>
                </div>
                <p className="text-white/90 leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
              {currentContent.values.title}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
              {currentContent.values.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.values.items.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                  <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-white/90 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
              {currentContent.team.title}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
              {currentContent.team.subtitle}
            </p>
          </div>
          
          {/* Board Members Section */}
          <div className="mb-16">
            <h3 className={`text-2xl md:text-3xl font-bold text-white mb-8 text-center ${language === 'AR' ? 'font-arabic' : ''}`} style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
              {language === 'AR' ? 'عضو مجلس الإدارة' : 'Board Members'}
            </h3>
            <div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
              style={{ direction: language === 'AR' ? 'rtl' : 'ltr' }}
            >
              {currentContent.team.members.filter(member => member.isBoardMember).map((member, index) => {
                const displayIndex = language === 'AR' ? currentContent.team.members.filter(member => member.isBoardMember).length - 1 - index : index;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                    <div className="w-24 h-24 bg-yellow-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Users className="h-12 w-12 text-black" />
                    </div>
                    <h3 className={`text-xl font-bold text-white mb-2 ${language === 'AR' ? 'font-arabic' : ''}`}>{member.name}</h3>
                    {member.position && <p className={`text-yellow-400 font-semibold mb-2 ${language === 'AR' ? 'font-arabic' : ''}`}>{member.position}</p>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Department Managers Section */}
          <div>
            <h3 className={`text-2xl md:text-3xl font-bold text-white mb-8 text-center ${language === 'AR' ? 'font-arabic' : ''}`} style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
              {language === 'AR' ? 'مديري الأقسام' : 'Department Managers'}
            </h3>
            <div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
              style={{ direction: language === 'AR' ? 'rtl' : 'ltr' }}
            >
              {currentContent.team.members.filter(member => !member.isBoardMember).map((member, index) => {
                const displayIndex = language === 'AR' ? currentContent.team.members.filter(member => !member.isBoardMember).length - 1 - index : index;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                    <div className="w-24 h-24 bg-yellow-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Users className="h-12 w-12 text-black" />
                    </div>
                    <h3 className={`text-xl font-bold text-white mb-2 ${language === 'AR' ? 'font-arabic' : ''}`}>{member.name}</h3>
                    {member.position && <p className={`text-yellow-400 font-semibold mb-2 ${language === 'AR' ? 'font-arabic' : ''}`}>{member.position}</p>}
                    {member.whatsapp && member.phone && (
                      <a
                        href={`https://wa.me/${member.phone.replace(/[^\d]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110 group"
                        title="WhatsApp"
                      >
                        <svg className="h-6 w-6 text-white group-hover:text-yellow-400 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                        </svg>
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Group Companies Section */}
      <GroupCompanies />

      {/* Awards Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
              {currentContent.awards.title}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
              {currentContent.awards.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.awards.items.map((award, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-yellow-400 mr-4" />
                  <span className="text-yellow-400 font-bold">{award.year}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{award.title}</h3>
                <p className="text-white/90">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default About;
