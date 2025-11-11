
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: language === 'EN' ? 'Home' : 'الرئيسية', href: '/' },
    { name: language === 'EN' ? 'About Us' : 'من نحن', href: '/about' },
    { name: language === 'EN' ? 'Our News' : 'أخبارنا', href: '/news' },
    { name: language === 'EN' ? 'Our Projects' : 'مشاريعنا', href: '/projects' },
    { name: language === 'EN' ? 'Our Properties' : 'عقاراتنا', href: '/properties' },
    { name: language === 'EN' ? 'Careers' : 'الوظائف', href: '/careers' },
    { name: language === 'EN' ? 'Contact Us' : 'اتصل بنا', href: '/contact' },
    { name: language === 'EN' ? 'Apps' : 'التطبيقات', href: '/apps' },
  ];

  const footerNavItems = [
    { name: language === 'EN' ? 'Terms of Use' : 'شروط الاستخدام', href: '/terms-of-use' },
    { name: language === 'EN' ? 'Privacy Policy' : 'سياسة الخصوصية', href: '/privacy-policy' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md py-2 shadow-lg shadow-yellow-400/10' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="group">
              <img 
                src="/lovable-uploads/556bfd57-a7c9-49e3-832a-418374e39898.png" 
                alt="Al Fauzan Real Estate" 
                className="h-12 w-auto transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group hover-3d ${
                    language === 'AR' ? 'font-arabic' : ''
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  <span className="absolute inset-0 bg-yellow-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'EN' ? 'AR' : 'EN')}
              className="text-white hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 hover-3d"
            >
              <span className="text-sm font-medium">
                {language === 'EN' ? 'English | العربية' : 'English | العربية'}
              </span>
            </Button>
            
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-300"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 card-3d rounded-lg mt-4 animate-fade-in-up">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium transition-all duration-300 rounded-lg hover:bg-yellow-400/10 ${
                    language === 'AR' ? 'font-arabic' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-700 mt-4 pt-4">
                {footerNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-gray-400 hover:text-yellow-400 block px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-yellow-400/10 ${
                      language === 'AR' ? 'font-arabic' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
