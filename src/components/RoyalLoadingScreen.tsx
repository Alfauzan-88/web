import React, { useState, useEffect, useRef } from 'react';

interface RoyalLoadingScreenProps {
  onLoadingComplete: () => void;
}

const RoyalLoadingScreen: React.FC<RoyalLoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoLoaded) {
      // Auto-complete loading after 3 seconds for looping video
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          onLoadingComplete();
        }, 500);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [videoLoaded, onLoadingComplete]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/videos/loading-screen.jpg)'
        }}
      />

      {/* Centered Motion Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          ref={videoRef}
          className="w-auto h-[60vh] md:h-[70vh] lg:h-[80vh] max-w-[90vw] object-contain"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoad}
          style={{
            filter: 'drop-shadow(0 0 40px rgba(255, 215, 0, 0.6)) drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.8))'
          }}
        >
          <source src="/assets/logos/logo-motion.webm" type="video/webm" />
          <img
            src="/assets/logos/logo-white.png"
            alt="Alfauzan Logo"
            className="w-auto h-[60vh] md:h-[70vh] lg:h-[80vh] max-w-[90vw] object-contain"
          />
        </video>
      </div>

      {/* Loading indicator */}
      {!videoLoaded && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
            <p className="text-white text-lg">Loading...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoyalLoadingScreen;
