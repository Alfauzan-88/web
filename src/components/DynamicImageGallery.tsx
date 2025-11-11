import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { checkImageExists } from '@/utils/imageUtils';

interface DynamicImageGalleryProps {
  images: string[];
  title: string;
  fallbackImage?: string;
}

const DynamicImageGallery: React.FC<DynamicImageGalleryProps> = ({ 
  images, 
  title, 
  fallbackImage = '/placeholder.svg' 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [validImages, setValidImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // Filter out non-existent images
  useEffect(() => {
    const validateImages = async () => {
      setLoading(true);
      const validImagesList: string[] = [];
      
      for (const image of images) {
        const exists = await checkImageExists(image);
        if (exists) {
          validImagesList.push(image);
        }
      }
      
      setValidImages(validImagesList);
      setLoading(false);
    };

    validateImages();
  }, [images]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % validImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = validImages[currentIndex];
    link.download = `image-${currentIndex + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const shareImage = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Check out this image from ${title}`,
          url: validImages[currentIndex]
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(validImages[currentIndex]);
    }
  };

  if (loading) {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
          {title}
        </h2>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
        </div>
      </div>
    );
  }

  if (validImages.length === 0) {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
          {title}
        </h2>
        <div className="flex items-center justify-center h-64 text-white/60">
          <p>No images available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
        {title}
      </h2>

      {/* Main Image Display */}
      <div className="relative mb-6">
        <div className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-black/20">
          <img
            src={validImages[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            className="w-full h-full object-contain transition-all duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = fallbackImage;
            }}
          />
          
          {/* Navigation Arrows */}
          {validImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 p-3 rounded-full transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 p-3 rounded-full transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm border border-white/30 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {validImages.length}
          </div>

          {/* Action Buttons */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <Button
              onClick={downloadImage}
              variant="outline"
              size="icon"
              className="bg-black/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              <Download className="w-4 h-4" />
            </Button>
            <Button
              onClick={shareImage}
              variant="outline"
              size="icon"
              className="bg-black/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              <Share2 className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => setShowModal(true)}
              variant="outline"
              size="icon"
              className="bg-black/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      {validImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {validImages.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex
                  ? 'border-yellow-400 scale-105'
                  : 'border-white/20 hover:border-white/40'
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = fallbackImage;
                }}
              />
            </button>
          ))}
        </div>
      )}

      {/* Full Screen Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full">
            <img
              src={validImages[currentIndex]}
              alt={`${title} - Full Size`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 p-3 rounded-full transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicImageGallery;
