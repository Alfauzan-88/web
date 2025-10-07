import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TransparentNavigation from '@/components/TransparentNavigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Building, 
  Factory, 
  Home, 
  Warehouse, 
  ArrowRight, 
  CheckCircle,
  Phone,
  Mail,
  Calendar,
  Star,
  Users,
  TrendingUp,
  Shield,
  Award
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const [language, setLanguage] = useState<'EN' | 'AR'>('EN');
  const [selectedService, setSelectedService] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const content = {
    EN: {
      hero: {
        title: "Comprehensive Real Estate",
        titleHighlight: "Solutions",
        subtitle: "From concept to completion, we deliver exceptional real estate services across all sectors in Saudi Arabia",
        cta: "Explore Services"
      },
      services: [
        {
          id: 1,
          icon: Building,
          title: "Industrial Development",
          subtitle: "State-of-the-art industrial facilities and manufacturing complexes",
          description: "We specialize in creating world-class industrial facilities that support Saudi Arabia's manufacturing growth. Our industrial developments feature modern infrastructure, advanced logistics, and sustainable practices designed for efficiency and scalability.",
          features: [
            "Manufacturing Plants",
            "Industrial Parks",
            "Logistics Centers",
            "Processing Facilities",
            "Research & Development Centers",
            "Distribution Hubs"
          ],
                     stats: {
             projects: "20+",
             sqm: "15M+",
             clients: "500+"
           },
          image: "/assets/images/projects/Al fauzan industrial city/hero.jpg",
          testimonial: {
            text: "Al Fauzan delivered our industrial complex on time and exceeded all expectations. The facilities have significantly improved our operational efficiency.",
            client: "Ahmed Al-Rashid, Operations Director"
          }
        },
        {
          id: 2,
          icon: Factory,
          title: "Commercial Development",
          subtitle: "Premium office buildings and commercial complexes",
          description: "Creating premium commercial spaces that set new standards in the industry. Our commercial developments feature state-of-the-art facilities, modern amenities, and strategic locations that maximize business potential.",
          features: [
            "Premium Office Spaces",
            "Retail Centers",
            "Mixed-Use Developments",
            "Business Parks",
            "Corporate Headquarters",
            "Shopping Malls"
          ],
                     stats: {
             projects: "15+",
             sqm: "8M+",
             clients: "300+"
           },
          image: "/assets/images/projects/SAMA/sama.jpg",
          testimonial: {
            text: "Al Fauzan delivered our corporate headquarters on time and exceeded all expectations. The attention to detail and quality is outstanding.",
            client: "Fatima Al-Zahra, CEO of TechCorp"
          }
        },
        {
          id: 3,
          icon: Home,
          title: "Residential Communities",
          subtitle: "Luxury living experiences for Saudi families",
          description: "Creating exceptional residential communities that combine modern luxury with traditional Saudi values. Our residential projects offer premium amenities and thoughtful design for the ultimate living experience.",
          features: [
            "Gated Communities",
            "Luxury Villas",
            "Family Compounds",
            "Apartment Complexes",
            "Townhouses",
            "Senior Living"
          ],
                     stats: {
             projects: "10+",
             sqm: "5M+",
             clients: "200+"
           },
          image: "/assets/images/projects/DMC/Hero.png",
          testimonial: {
            text: "Our family has been living in their community for 3 years. The quality of construction and amenities are exceptional.",
            client: "Mohammed Al-Faisal, Resident"
          }
        },
        {
          id: 4,
          icon: Warehouse,
          title: "Warehouse Solutions",
          subtitle: "Modern logistics and storage facilities",
          description: "Advanced warehouse and logistics facilities that support the Kingdom's supply chain needs. Our solutions incorporate smart technology and efficient design for optimal storage and distribution operations.",
          features: [
            "Distribution Centers",
            "Cold Storage",
            "E-commerce Hubs",
            "Cross-Docking Facilities",
            "Automated Storage",
            "Last-Mile Delivery Centers"
          ],
                     stats: {
             projects: "8+",
             sqm: "4M+",
             clients: "150+"
           },
          image: "/assets/images/projects/remas/remas.jpg",
          testimonial: {
            text: "Their warehouse solution has revolutionized our logistics operations. The design is both functional and cost-effective.",
            client: "Sara Al-Mutairi, Logistics Manager"
          }
        }
      ],
      process: {
        title: "Our Development Process",
        subtitle: "From vision to reality in 6 strategic phases",
        steps: [
          {
            number: "01",
            title: "Consultation & Planning",
            description: "Understanding your vision and requirements through detailed consultation and feasibility studies."
          },
          {
            number: "02",
            title: "Design & Engineering",
            description: "Creating innovative designs with our expert architects and engineers using cutting-edge technology."
          },
          {
            number: "03",
            title: "Permits & Approvals",
            description: "Handling all regulatory requirements and obtaining necessary permits for smooth project execution."
          },
          {
            number: "04",
            title: "Construction & Development",
            description: "Executing construction with the highest quality standards and regular progress monitoring."
          },
          {
            number: "05",
            title: "Quality Assurance",
            description: "Comprehensive quality checks and testing to ensure every detail meets our excellence standards."
          },
          {
            number: "06",
            title: "Handover & Support",
            description: "Seamless project handover with ongoing support and maintenance services."
          }
        ]
      },
      whyChoose: {
        title: "Why Choose Alfauzan",
        reasons: [
          {
            icon: Award,
            title: "35+ Years Experience",
            description: "Decades of expertise in Saudi real estate market"
          },
          {
            icon: Users,
            title: "Expert Team",
            description: "Skilled professionals dedicated to excellence"
          },
                     {
             icon: TrendingUp,
             title: "Proven Track Record",
             description: "20+ industrial and real estate projects delivered"
           },
          {
            icon: Shield,
            title: "Quality Guarantee",
            description: "Uncompromising commitment to quality standards"
          }
        ]
      },
      cta: {
        title: "Ready to Start Your Project?",
        subtitle: "Let's discuss how we can bring your vision to life",
        button: "Get Started",
        contact: "Contact Us Today"
      }
    },
    AR: {
      hero: {
        title: "حلول عقارية",
        titleHighlight: "شاملة",
        subtitle: "من الفكرة إلى التنفيذ، نقدم خدمات عقارية استثنائية عبر جميع القطاعات في المملكة العربية السعودية",
        cta: "استكشف الخدمات"
      },
      services: [
        {
          id: 1,
          icon: Building,
          title: "التطوير التجاري",
          subtitle: "مباني مكتبية ومجمعات تجارية عالمية المستوى",
          description: "نتخصص في إنشاء مساحات تجارية متميزة تضع معايير جديدة في الصناعة. تطويراتنا التجارية تتميز بمرافق حديثة ووسائل راحة عصرية ومواقع استراتيجية تعظم الإمكانات التجارية.",
          features: [
            "مساحات مكتبية متميزة",
            "مراكز تجزئة",
            "مشاريع متعددة الاستخدامات",
            "مدن الأعمال",
            "مقار الشركات",
            "مراكز التسوق"
          ],
          stats: {
            projects: "150+",
            sqm: "2 مليون+",
            clients: "500+"
          },
          image: "/assets/images/projects/SAMA/sama.jpg",
          testimonial: {
            text: "سلمت الفوزان مقرنا الرئيسي في الوقت المحدد وتجاوزت جميع التوقعات. الاهتمام بالتفاصيل والجودة متميز.",
            client: "أحمد الراشد، الرئيس التنفيذي لشركة التقنية"
          }
        }
        // ... other services would be translated similarly
      ]
    }
  };

  const currentContent = content[language];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.set('.services-hero-content > *', { opacity: 0, y: 50 });
      
      const tl = gsap.timeline({ delay: 0.5 });
      
      tl.to('.services-hero-title', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out'
      })
      .to('.services-hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.8')
      .to('.services-hero-cta', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.6');

      // Service cards animation
      gsap.utils.toArray('.service-card').forEach((card: any, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <TransparentNavigation language={language} onLanguageChange={setLanguage} />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,215,0,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`services-hero-content max-w-4xl ${language === 'AR' ? 'text-right mr-0 ml-auto' : ''}`}>
            
            <h1 className={`services-hero-title text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight ${
              language === 'AR' ? 'font-arabic' : ''
            }`}>
              <span className="block">{currentContent.hero.title}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                {currentContent.hero.titleHighlight}
              </span>
            </h1>

            <p className={`services-hero-subtitle text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl leading-relaxed ${
              language === 'AR' ? 'font-arabic' : ''
            }`}>
              {currentContent.hero.subtitle}
            </p>

            <div className="services-hero-cta">
              <Button 
                size="lg" 
                className={`bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 ${
                  language === 'AR' ? 'font-arabic' : ''
                }`}
              >
                {currentContent.hero.cta}
                <ArrowRight className={`ml-2 h-5 w-5 ${language === 'AR' ? 'rotate-180 mr-2 ml-0' : ''}`} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {currentContent.services.map((service, index) => (
              <div
                key={service.id}
                className={`service-card group cursor-pointer ${
                  selectedService === index ? 'selected' : ''
                }`}
                onClick={() => setSelectedService(index)}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-500 hover:transform hover:scale-105">
                  
                  {/* Service Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-black" />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold text-white mb-2 ${
                        language === 'AR' ? 'font-arabic' : ''
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`text-gray-400 ${
                        language === 'AR' ? 'font-arabic' : ''
                      }`}>
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Service Image */}
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  {/* Service Description */}
                  <p className={`text-gray-300 mb-6 leading-relaxed ${
                    language === 'AR' ? 'font-arabic text-right' : ''
                  }`}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                        <span className={`text-sm text-gray-300 ${
                          language === 'AR' ? 'font-arabic' : ''
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between items-center pt-6 border-t border-gray-700">
                    <div className="flex space-x-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-yellow-400">{service.stats.projects}</div>
                        <div className="text-xs text-gray-400">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-yellow-400">{service.stats.sqm}</div>
                        <div className="text-xs text-gray-400">SQM</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-yellow-400">{service.stats.clients}</div>
                        <div className="text-xs text-gray-400">Clients</div>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${language === 'AR' ? 'text-right' : ''}`}>
            <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 ${
              language === 'AR' ? 'font-arabic' : ''
            }`}>
              <span className="text-gradient">{currentContent.process.title}</span>
            </h2>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${
              language === 'AR' ? 'font-arabic' : ''
            }`}>
              {currentContent.process.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.process.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-lg">{step.number}</span>
                    </div>
                    <h3 className={`text-xl font-bold text-white ${
                      language === 'AR' ? 'font-arabic' : ''
                    }`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className={`text-gray-300 ${
                    language === 'AR' ? 'font-arabic text-right' : ''
                  }`}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${language === 'AR' ? 'text-right' : ''}`}>
            <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 ${
              language === 'AR' ? 'font-arabic' : ''
            }`}>
              <span className="text-gradient">{currentContent.whyChoose.title}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.whyChoose.reasons.map((reason, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="h-10 w-10 text-black" />
                </div>
                <h3 className={`text-xl font-bold text-white mb-4 ${
                  language === 'AR' ? 'font-arabic' : ''
                }`}>
                  {reason.title}
                </h3>
                <p className={`text-gray-300 ${
                  language === 'AR' ? 'font-arabic' : ''
                }`}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold text-black mb-6 ${
            language === 'AR' ? 'font-arabic' : ''
          }`}>
            {currentContent.cta.title}
          </h2>
          <p className={`text-xl text-black/80 mb-8 max-w-2xl mx-auto ${
            language === 'AR' ? 'font-arabic' : ''
          }`}>
            {currentContent.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white px-8 py-4"
            >
              <Phone className="h-5 w-5 mr-2" />
              {currentContent.cta.button}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-black text-black hover:bg-black hover:text-white px-8 py-4"
            >
              <Mail className="h-5 w-5 mr-2" />
              {currentContent.cta.contact}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
