
import React from 'react';
import TransparentNavigation from '@/components/TransparentNavigation';
import VideoHero from '@/components/VideoHero';
import ScrollableKeyframe from '@/components/ScrollableKeyframe';
import Projects3D from '@/components/Projects3D';
import PreciseProperties from '@/components/PreciseProperties';
import StatsSection from '@/components/StatsSection';
import SuccessPartners from '@/components/SuccessPartners';
import GroupCompanies from '@/components/GroupCompanies';
import LatestNews from '@/components/LatestNews';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { language } = useLanguage();

  return (
    <>
      <style>
        {`
          video::-webkit-media-controls {
            display: none !important;
          }
          video::-webkit-media-controls-panel {
            display: none !important;
          }
          video::-webkit-media-controls-play-button {
            display: none !important;
          }
          video::-webkit-media-controls-start-playback-button {
            display: none !important;
          }
          video::-webkit-media-controls-mute-button {
            display: none !important;
          }
          video::-webkit-media-controls-volume-slider {
            display: none !important;
          }
          video::-webkit-media-controls-fullscreen-button {
            display: none !important;
          }
          video::-webkit-media-controls-rewind-button {
            display: none !important;
          }
          video::-webkit-media-controls-return-to-realtime-button {
            display: none !important;
          }
          video::-webkit-media-controls-timeline {
            display: none !important;
          }
          video::-webkit-media-controls-current-time-display {
            display: none !important;
          }
          video::-webkit-media-controls-time-remaining-display {
            display: none !important;
          }
          video::-webkit-media-controls-picture-in-picture-button {
            display: none !important;
          }
        `}
      </style>
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Global Video Background */}
      <div className="fixed inset-0 w-screen h-screen z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          className="w-full h-full object-cover"
          style={{ pointerEvents: 'none' }}
        >
          <source src="/assets/videos/hero-banner.mp4" type="video/mp4" />
          {language === 'AR' ? 'متصفحك لا يدعم تشغيل الفيديو.' : 'Your browser does not support the video tag.'}
        </video>
      </div>
      
      <TransparentNavigation />
      <VideoHero />
      <ScrollableKeyframe />
      <StatsSection />
      <Projects3D />
      <PreciseProperties />
      <GroupCompanies />
      <SuccessPartners />
      <LatestNews />
      <Footer />
    </div>
    </>
  );
};

export default Index;
