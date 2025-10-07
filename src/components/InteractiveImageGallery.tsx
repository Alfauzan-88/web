import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  Download, 
  Share2,
  Eye,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface InteractiveImageGalleryProps {
  images: string[];
  title: string;
}

const InteractiveImageGallery: React.FC<InteractiveImageGalleryProps> = ({ images, title }) => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  const content = {
    EN: {
      viewFullSize: "View Full Size",
      close: "Close",
      previous: "Previous",
      next: "Next",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      download: "Download",
      share: "Share",
      image: "Image",
      of: "of"
    },
    AR: {
      viewFullSize: "عرض بالحجم الكامل",
      close: "إغلاق",
      previous: "السابق",
      next: "التالي",
      zoomIn: "تكبير",
      zoomOut: "تصغير",
      download: "تحميل",
      share: "مشاركة",
      image: "صورة",
      of: "من"
    }
  };

  const currentContent = content[language];

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setShowLightbox(true);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleClose = () => {
    setShowLightbox(false);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.5, 0.5));
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = images[currentIndex];
    link.download = `${title}-image-${currentIndex + 1}.jpg`;
    link.click();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: `Check out this image from ${title}`,
        url: images[currentIndex]
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(images[currentIndex]);
      alert(language === 'EN' ? 'Image URL copied to clipboard!' : 'تم نسخ رابط الصورة!');
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!showLightbox) return;

    switch (e.key) {
      case 'Escape':
        handleClose();
        break;
      case 'ArrowLeft':
        handlePrevious();
        break;
      case 'ArrowRight':
        handleNext();
        break;
      case '+':
      case '=':
        handleZoomIn();
        break;
      case '-':
        handleZoomOut();
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showLightbox, currentIndex, zoom]);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
      <h2 className={`text-3xl md:text-4xl font-bold text-white mb-8 ${
        language === 'AR' ? 'font-arabic text-right' : ''
      }`} style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
        {title}
      </h2>

      {/* Thumbnail Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-xl hover:scale-105 transition-all duration-300"
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image}
              alt={`${title} ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center">
                <Eye className="h-8 w-8 text-white mx-auto mb-2" />
                <p className="text-white text-sm">{currentContent.viewFullSize}</p>
              </div>
            </div>
            <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              {index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight className="h-12 w-12" />
          </button>

          {/* Image Container */}
          <div className="relative w-full h-full flex items-center justify-center p-8">
            <div
              className="relative overflow-hidden rounded-lg"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <img
                ref={imageRef}
                src={images[currentIndex]}
                alt={`${title} ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain cursor-move"
                style={{
                  transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                  transition: isDragging ? 'none' : 'transform 0.3s ease'
                }}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black/50 backdrop-blur-md rounded-full px-6 py-3">
            <button
              onClick={handleZoomOut}
              disabled={zoom <= 0.5}
              className="text-white hover:text-gray-300 transition-colors disabled:opacity-50"
            >
              <ZoomOut className="h-5 w-5" />
            </button>
            
            <span className="text-white text-sm min-w-[60px] text-center">
              {Math.round(zoom * 100)}%
            </span>
            
            <button
              onClick={handleZoomIn}
              disabled={zoom >= 4}
              className="text-white hover:text-gray-300 transition-colors disabled:opacity-50"
            >
              <ZoomIn className="h-5 w-5" />
            </button>
            
            <div className="w-px h-6 bg-white/30 mx-2"></div>
            
            <button
              onClick={handleDownload}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Download className="h-5 w-5" />
            </button>
            
            <button
              onClick={handleShare}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Share2 className="h-5 w-5" />
            </button>
          </div>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md rounded-full px-4 py-2">
            <span className="text-white text-sm">
              {currentContent.image} {currentIndex + 1} {currentContent.of} {images.length}
            </span>
          </div>

          {/* Keyboard Shortcuts Info */}
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md rounded-lg px-4 py-2">
            <div className="text-white text-xs space-y-1">
              <div>← → {language === 'EN' ? 'Navigate' : 'التنقل'}</div>
              <div>+ - {language === 'EN' ? 'Zoom' : 'التكبير'}</div>
              <div>ESC {language === 'EN' ? 'Close' : 'إغلاق'}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveImageGallery;






















