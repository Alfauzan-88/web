import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TransparentNavigation from '@/components/TransparentNavigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Heart,
  Eye,
  Tag,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle
} from 'lucide-react';

const NewsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [language, setLanguage] = useState<'EN' | 'AR'>('EN');
  const [isLiked, setIsLiked] = useState(false);

  // Mock news data - in real app this would come from API
  const article = {
    id: 1,
    title: "Alfauzan Announces Major Mixed-Use Development in NEOM",
    category: "Development",
    author: "Sarah Al-Rashid",
    publishDate: "March 15, 2024",
    readTime: "5 min read",
    views: 2450,
    likes: 89,
    image: "/assets/images/News/1.png",
    excerpt: "Alfauzan Real Estate Development announces a groundbreaking mixed-use project in NEOM, featuring sustainable design and cutting-edge technology integration.",
    content: `
      <p>Alfauzan Real Estate Development has announced its latest and most ambitious project to date - a revolutionary mixed-use development in NEOM, Saudi Arabia's futuristic mega-city. This groundbreaking project represents a significant milestone in the company's commitment to supporting Saudi Arabia's Vision 2030.</p>
      
      <p>The development, spanning over 500,000 square meters, will feature a unique blend of residential, commercial, and recreational spaces designed with sustainability and innovation at its core. The project is expected to accommodate over 15,000 residents and create more than 8,000 job opportunities.</p>
      
      <h3>Sustainable Innovation</h3>
      <p>The NEOM development will incorporate the latest in green building technologies, including solar panels, smart grid systems, and water recycling facilities. The project aims to achieve carbon neutrality by 2030, aligning with NEOM's broader environmental objectives.</p>
      
      <p>"This project represents everything we stand for as a company - innovation, sustainability, and excellence," said Ali Al-Fauzan, Chairman and CEO of Alfauzan Real Estate Development. "We are proud to contribute to NEOM's vision of creating a new model for sustainable living."</p>
      
      <h3>Smart City Integration</h3>
      <p>The development will be fully integrated with NEOM's smart city infrastructure, featuring autonomous transportation systems, IoT-enabled buildings, and advanced digital services. Residents will have access to cutting-edge healthcare, education, and entertainment facilities.</p>
      
      <p>Construction is expected to begin in Q4 2024, with the first phase scheduled for completion by 2027. The project has already received preliminary approvals from NEOM's development authority and is currently in the detailed design phase.</p>
      
      <h3>Economic Impact</h3>
      <p>The project is expected to contribute significantly to the local economy, with an estimated investment of over 3 billion SAR. It will create thousands of construction jobs during the development phase and permanent employment opportunities once operational.</p>
      
      <p>This announcement comes as part of Alfauzan's broader expansion strategy, which includes several major projects across the Kingdom. The company has committed to investing over 10 billion SAR in new developments over the next five years.</p>
    `,
    tags: ["NEOM", "Mixed-Use", "Sustainable Development", "Vision 2030", "Smart City"],
    relatedArticles: [
      {
        id: 2,
        title: "Saudi Arabia's Real Estate Market Shows Strong Growth in Q1 2024",
        image: "/assets/images/News/2.png",
        date: "March 10, 2024",
        category: "Market Analysis"
      },
      {
        id: 3,
        title: "Alfauzan Wins Excellence Award for Riyadh Business Center",
        image: "/assets/images/News/3.png",
        date: "March 5, 2024",
        category: "Awards"
      },
      {
        id: 4,
        title: "Sustainable Building Practices: Leading the Industry Forward",
        image: "/assets/images/News/4.png",
        date: "February 28, 2024",
        category: "Sustainability"
      }
    ]
  };

  const content = {
    EN: {
      backToNews: "Back to News",
      shareArticle: "Share Article",
      relatedNews: "Related News",
      readMore: "Read More",
      author: "Author",
      publishedOn: "Published on",
      readTime: "Read Time",
      views: "Views",
      likes: "Likes",
      tags: "Tags"
    },
    AR: {
      backToNews: "العودة للأخبار",
      shareArticle: "مشاركة المقال",
      relatedNews: "أخبار ذات صلة",
      readMore: "اقرأ المزيد",
      author: "الكاتب",
      publishedOn: "نشر في",
      readTime: "وقت القراءة",
      views: "المشاهدات",
      likes: "الإعجابات",
      tags: "العلامات"
    }
  };

  const currentContent = content[language];

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = article.title;
    
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <TransparentNavigation language={language} onLanguageChange={setLanguage} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-24 left-6 z-10 flex items-center space-x-2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white hover:bg-black/70 transition-all duration-300"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>{currentContent.backToNews}</span>
        </button>

        {/* Article Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h1 className={`text-3xl md:text-5xl font-bold text-white mb-6 leading-tight ${
              language === 'AR' ? 'font-arabic text-right' : ''
            }`}>
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{article.publishDate}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-2" />
                <span>{article.views.toLocaleString()} {currentContent.views}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Article Meta */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-800">
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    isLiked 
                      ? 'bg-red-500 text-white' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                  <span>{article.likes + (isLiked ? 1 : 0)}</span>
                </button>
                
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400">12 Comments</span>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm mr-2">{currentContent.shareArticle}:</span>
                <button
                  onClick={() => handleShare('facebook')}
                  className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300"
                >
                  <Facebook className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-2 bg-blue-400 hover:bg-blue-500 rounded-full transition-colors duration-300"
                >
                  <Twitter className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="p-2 bg-blue-800 hover:bg-blue-900 rounded-full transition-colors duration-300"
                >
                  <Linkedin className="h-4 w-4" />
                </button>
                <button className="p-2 bg-gray-600 hover:bg-gray-700 rounded-full transition-colors duration-300">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Article Body */}
            <div 
              className={`prose prose-lg prose-invert max-w-none ${
                language === 'AR' ? 'prose-rtl font-arabic' : ''
              }`}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h3 className={`text-lg font-semibold text-white mb-4 ${
                language === 'AR' ? 'font-arabic text-right' : ''
              }`}>
                {currentContent.tags}
              </h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="flex items-center space-x-1 bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    <Tag className="h-3 w-3" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              
              {/* Author Info */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
                <h3 className={`text-lg font-semibold text-white mb-4 ${
                  language === 'AR' ? 'font-arabic text-right' : ''
                }`}>
                  {currentContent.author}
                </h3>
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src="/assets/images/CEO.png"
                    alt={article.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white font-medium">{article.author}</p>
                    <p className="text-gray-400 text-sm">Senior Writer</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  Experienced journalist covering real estate and urban development in the Middle East.
                </p>
              </div>

              {/* Article Stats */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
                <h3 className={`text-lg font-semibold text-white mb-4 ${
                  language === 'AR' ? 'font-arabic text-right' : ''
                }`}>
                  Article Stats
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">{currentContent.views}</span>
                    <span className="text-white">{article.views.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{currentContent.likes}</span>
                    <span className="text-white">{article.likes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{currentContent.readTime}</span>
                    <span className="text-white">{article.readTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{currentContent.publishedOn}</span>
                    <span className="text-white">{article.publishDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-white mb-8 ${
            language === 'AR' ? 'font-arabic text-right' : ''
          }`}>
            {currentContent.relatedNews}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {article.relatedArticles.map((relatedArticle) => (
              <div
                key={relatedArticle.id}
                className="group cursor-pointer bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105"
                onClick={() => navigate(`/news/${relatedArticle.id}`)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className={`text-lg font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors line-clamp-2 ${
                    language === 'AR' ? 'font-arabic text-right' : ''
                  }`}>
                    {relatedArticle.title}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{relatedArticle.date}</span>
                    <Button variant="ghost" size="sm" className="text-yellow-400 hover:text-yellow-300">
                      {currentContent.readMore}
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsDetails;
