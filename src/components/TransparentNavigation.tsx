import React, { useState, useEffect } from 'react';
import { Menu, X, Building2, Home, Users, Newspaper, Briefcase, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const TransparentNavigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    EN: {
      nav: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: Users },
        { name: 'Projects', href: '/projects', icon: Building2 },
        { name: 'Properties', href: '/properties', icon: Briefcase },
        { name: 'News', href: '/news', icon: Newspaper },
        { name: 'Contact', href: '/contact', icon: MessageCircle },
      ]
    },
    AR: {
      nav: [
        { name: 'الرئيسية', href: '/', icon: Home },
        { name: 'من نحن', href: '/about', icon: Users },
        { name: 'المشاريع', href: '/projects', icon: Building2 },
        { name: 'العقارات', href: '/properties', icon: Briefcase },
        { name: 'الأخبار', href: '/news', icon: Newspaper },
        { name: 'اتصل بنا', href: '/contact', icon: MessageCircle },
      ]
    }
  };

  const currentContent = content[language];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/20 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo - Left Corner */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img
                  src="/assets/logos/logo-white.png"
                  alt="Al Fauzan Real Estate"
                  className="h-24 w-auto transition-all duration-300 hover:scale-105 mt-2"
                />
              </Link>
            </div>

            {/* Center Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {currentContent.nav.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-1.5 px-2 py-1.5 rounded-md transition-all duration-300 ${
                      isActive 
                        ? 'text-yellow-400 bg-white/10' 
                        : 'text-white hover:text-yellow-400 hover:bg-white/5'
                    } ${language === 'AR' ? 'font-arabic' : ''}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="font-medium text-sm">{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Right Side - Language Switcher */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'EN' ? 'AR' : 'EN')}
                className="text-white hover:text-yellow-400 transition-colors px-3 py-2 rounded-lg hover:bg-white/10 text-sm font-medium"
              >
                English | العربية
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white hover:text-yellow-400 transition-colors p-2 rounded-lg hover:bg-white/10"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="fixed right-0 top-0 h-full w-80 bg-black/90 backdrop-blur-xl shadow-2xl border-l border-white/20">
            <div className="px-4 pt-20 pb-6 space-y-2">
              {currentContent.nav.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30' 
                        : 'text-white hover:text-yellow-400 hover:bg-white/5 border border-transparent'
                    } ${language === 'AR' ? 'font-arabic text-right' : ''}`}
                  >
                    <div className={`flex items-center space-x-3 ${language === 'AR' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <Icon className={`w-5 h-5 ${isActive ? 'text-yellow-400' : 'text-white'}`} />
                      <span className="font-medium">{item.name}</span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Language Switcher */}
            <div className="px-4 py-6 border-t border-white/20">
              <button
                onClick={() => {
                  setLanguage(language === 'EN' ? 'AR' : 'EN');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20 flex items-center justify-center text-white hover:text-yellow-400 transition-colors duration-300"
              >
                <span className="text-sm font-medium">
                  English | العربية
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TransparentNavigation;
