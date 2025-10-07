
import React, { useState } from 'react';
import TransparentNavigation from '@/components/TransparentNavigation';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Building } from 'lucide-react';
import Map from '@/components/Map';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const content = {
    EN: {
      title: "Contact Us",
      subtitle: "Get in touch with our team for any inquiries or support",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        subject: "Subject",
        message: "Your Message",
        send: "Send Message"
      },
      info: {
        title: "Get In Touch",
        address: "4356 Eastern Ring Branch Rd، 7746 الطريق الدائري الشرقي الفرعي، الربوة، الرياض 12822, Riyadh 11574",
        phone: "+966 505 200 333",
        email: "it@alfauzan.com",
        hours: "Sunday - Thursday: 8:00 AM - 6:00 PM"
      }
    },
    AR: {
      title: "اتصل بنا",
      subtitle: "تواصل مع فريقنا لأي استفسارات أو دعم",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        subject: "الموضوع",
        message: "رسالتك",
        send: "إرسال الرسالة"
      },
      info: {
        title: "تواصل معنا",
        address: "4356 Eastern Ring Branch Rd، 7746 الطريق الدائري الشرقي الفرعي، الربوة، الرياض 12822, Riyadh 11574",
        phone: "+966 505 200 333",
        email: "it@alfauzan.com",
        hours: "الأحد - الخميس: 8:00 ص - 6:00 م"
      }
    }
  };

  const currentContent = content[language];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Netlify Forms submission
      const form = e.target as HTMLFormElement;
      const formDataToSubmit = new FormData(form);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSubmit as any).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(language === 'EN' 
          ? 'Thank you for your message! We will get back to you soon.' 
          : 'شكراً لرسالتك! سنتواصل معك قريباً.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(language === 'EN' 
          ? 'An error occurred. Please try again.' 
          : 'حدث خطأ. يرجى المحاولة مرة أخرى.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(language === 'EN' 
        ? 'Network error. Please check your connection and try again.' 
        : 'خطأ في الشبكة. يرجى التحقق من الاتصال والمحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            {currentContent.title}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            {currentContent.subtitle}
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
                {language === 'EN' ? 'Send us a Message' : 'أرسل لنا رسالة'}
              </h2>
              
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                {/* Hidden fields for Netlify Forms */}
                <input type="hidden" name="form-name" value="contact" />
                <div style={{ display: 'none' }}>
                  <label>
                    Don't fill this out if you're human: 
                    <input name="bot-field" />
                  </label>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/90 mb-2 font-medium">
                      {currentContent.form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder={currentContent.form.name}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 mb-2 font-medium">
                      {currentContent.form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder={currentContent.form.email}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white/90 mb-2 font-medium">
                    {currentContent.form.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder={currentContent.form.phone}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white/90 mb-2 font-medium">
                    {currentContent.form.subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder={currentContent.form.subject}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white/90 mb-2 font-medium">
                    {currentContent.form.message}
                  </label>
                  <textarea
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                    placeholder={currentContent.form.message}
                    required
                  ></textarea>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
                    {submitMessage}
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
                    {submitMessage}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-400 text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (language === 'EN' ? 'Sending...' : 'جاري الإرسال...') : currentContent.form.send}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-8" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
                  {currentContent.info.title}
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-400 p-3 rounded-lg">
                      <Building className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">
                        {language === 'EN' ? 'Office Address' : 'عنوان المكتب'}
                      </h3>
                      <p className="text-white/90">
                        {currentContent.info.address}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-400 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">
                        {language === 'EN' ? 'Phone Number' : 'رقم الهاتف'}
                      </h3>
                      <p className="text-white/90">
                        {currentContent.info.phone}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-400 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">
                        {language === 'EN' ? 'Email Address' : 'البريد الإلكتروني'}
                      </h3>
                      <p className="text-white/90">
                        {currentContent.info.email}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-400 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">
                        {language === 'EN' ? 'Business Hours' : 'ساعات العمل'}
                      </h3>
                      <p className="text-white/90">
                        {currentContent.info.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
              {language === 'EN' ? 'Find Us on the Map' : 'اعثر علينا على الخريطة'}
            </h2>
            <p className="text-xl text-white/90" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
              {language === 'EN' ? 'Visit our office in Riyadh, Saudi Arabia' : 'قم بزيارة مكتبنا في الرياض، المملكة العربية السعودية'}
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <Map
              center={[24.7038071, 46.7684898]} // Al Fauzan Office coordinates
              zoom={16}
              markers={[
                {
                  position: [24.7038071, 46.7684898],
                  title: language === 'EN' ? 'Al Fauzan Office' : 'مكتب الفوزان',
                  popup: language === 'EN' ? 'King Fahd Road, Riyadh, Saudi Arabia' : 'طريق الملك فهد، الرياض، المملكة العربية السعودية',
                  onClick: () => {
                    window.open('https://www.google.com/maps/place/%D8%B4%D8%B1%D9%83%D8%A9+%D8%B9%D9%84%D9%8A+%D8%A7%D9%84%D9%81%D9%88%D8%B2%D8%A7%D9%86+%D9%88%D8%A3%D9%88%D9%84%D8%A7%D8%AF%D9%87+%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D9%8A%D8%A9%E2%80%AD/@24.7038071,46.7684898,20.45z/data=!4m14!1m7!3m6!1s0x3e2f01881b5f9fe7:0xfed16b23a4aaf49c!2sPurity!8m2!3d24.7040883!4d46.7683892!16s%2Fg%2F1pp2tl83f!3m5!1s0x3e2f01359f761fa1:0x74e80aec870cc024!8m2!3d24.7040205!4d46.7684425!16s%2Fg%2F11gcx_twh2?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D', '_blank');
                  }
                }
              ]}
              height="400px"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
