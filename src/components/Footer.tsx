import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const content = {
    AR: {
      description: {
        title: "الموصف",
        text: "في رحلة الحياة تكتب خطى الساعين في مناكبها، فيكون منهم العالم والطبيب والمهندس والأستاذ والتاجر. لذا كتب الله لدوين المجد أن يقترن إلى بحثي الرؤية السديدة، والمزيجة الأكيدة من صناع الحضارة ومشيري أركانها. فقط بأمثال هؤلاء، ومن على شاكلتها نسير بالطموحات دوماً مقيرة، وكذا هي البدايات دوماً مقيرة. وتلقفها الأنسان، وكذا هو الغرس بدءاً بذرة، فهما هو اليوم الذي نقطف فيه ثمار غرسنا المبارك ذلك لتتوج وبأيكم رحلة الإنجاز."
      },
      products: {
        title: "المنتجات",
        links: [
          "عن الشركة",
          "الأخبار",
          "مشاريعنا",
          "عقاراتنا"
        ]
      },
      resources: {
        title: "الموارد",
        links: [
          "سياسة الخصوصية",
          "شروط الاستخدام",
          "تواصل معنا",
          "الوظائف"
        ]
      },
      contact: {
        title: "معلومات التواصل",
        phone: "920004413",
        address: "الرياض - الحائي الشرقي مخرج 14"
      },
      copyright: "© 2024 الفوزان للتطوير العقاري. جميع الحقوق محفوظة."
    },
    EN: {
      description: {
        title: "Description",
        text: "In life's journey, we write the steps of those who strive in its paths, among them are scholars, doctors, engineers, teachers, and merchants. Therefore, God has written for the builders of glory to be associated with sound vision and the solid foundation of civilization makers and their pillars."
      },
      products: {
        title: "Products",
        links: [
          "About Company",
          "News",
          "Our Projects",
          "Our Properties"
        ]
      },
      resources: {
        title: "Resources",
        links: [
          "Privacy Policy",
          "Terms of Use",
          "Contact Us",
          "Jobs"
        ]
      },
      contact: {
        title: "Contact Information",
        phone: "920004413",
        address: "Riyadh - Eastern District Exit 14"
      },
      copyright: "© 2024 Al Fauzan Real Estate Development. All rights reserved."
    }
  };

  const currentContent = content[language];

  return (
    <footer className="relative bg-white py-16 border-t border-gray-200">
      {/* Footer Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: 'url(/assets/images/footer.png)' }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-4 gap-12 ${language === 'AR' ? 'text-right' : 'text-left'}`}>
          
          {/* Company Logo */}
          <div className={`lg:order-4 flex justify-center ${language === 'AR' ? 'lg:justify-end' : 'lg:justify-start'}`}>
            <div className={`text-center ${language === 'AR' ? 'lg:text-right' : 'lg:text-left'}`}>
              <img
                src="/assets/logos/logo-gold.png"
                alt="Al Fauzan Real Estate"
                className="h-32 w-auto mx-auto lg:mx-0"
              />
              <div className={`mt-6 flex flex-row justify-center ${language === 'AR' ? 'lg:justify-end' : 'lg:justify-start'} space-x-3`}>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
                  title="WhatsApp"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
                  title="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
                  title="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
                  title="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`lg:order-3 ${language === 'AR' ? 'text-right' : 'text-left'}`}>
            <h3 className={`text-lg font-bold text-gray-900 mb-6 ${language === 'AR' ? 'font-arabic' : ''}`}>
              {currentContent.contact.title}
            </h3>
            <div className="space-y-4">
              <div className={`flex items-center ${language === 'AR' ? 'justify-end space-x-3 space-x-reverse' : 'justify-start space-x-3'}`}>
                <span className={`text-gray-700 ${language === 'AR' ? 'font-arabic' : ''}`}>{currentContent.contact.phone}</span>
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <div className={`flex items-start ${language === 'AR' ? 'justify-end space-x-3 space-x-reverse' : 'justify-start space-x-3'}`}>
                <span className={`text-gray-700 ${language === 'AR' ? 'font-arabic text-right' : 'text-left'} leading-relaxed`}>
                  {currentContent.contact.address}
                </span>
                <MapPin className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className={`lg:order-2 ${language === 'AR' ? 'text-right' : 'text-left'}`}>
            <h3 className={`text-lg font-bold text-gray-900 mb-6 ${language === 'AR' ? 'font-arabic' : ''}`}>
              {currentContent.resources.title}
            </h3>
            <ul className="space-y-3">
              {currentContent.resources.links.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className={`text-gray-700 hover:text-gray-900 transition-colors ${language === 'AR' ? 'font-arabic text-right' : 'text-left'} block`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className={`lg:order-1 ${language === 'AR' ? 'text-right' : 'text-left'}`}>
            <h3 className={`text-lg font-bold text-gray-900 mb-6 ${language === 'AR' ? 'font-arabic' : ''}`}>
              {currentContent.products.title}
            </h3>
            <ul className="space-y-3">
              {currentContent.products.links.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className={`text-gray-700 hover:text-gray-900 transition-colors ${language === 'AR' ? 'font-arabic text-right' : 'text-left'} block`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Description Section - Separate row */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className={language === 'AR' ? 'text-right' : 'text-left'}>
            <h3 className={`text-lg font-bold text-gray-900 mb-6 ${language === 'AR' ? 'font-arabic' : ''}`}>
              {currentContent.description.title}
            </h3>
            <p className={`text-gray-700 leading-relaxed ${language === 'AR' ? 'font-arabic text-right max-w-4xl mr-0 ml-auto' : 'text-left max-w-4xl'}`}>
              {currentContent.description.text}
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className={`text-gray-500 text-sm ${language === 'AR' ? 'font-arabic' : ''}`}>
            {currentContent.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;