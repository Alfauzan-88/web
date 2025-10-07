import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageDebugger: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  // Only show in development mode
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg z-50 text-sm">
      <div className="mb-2">
        <strong>Current Language:</strong> {language}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setLanguage('EN')}
          className={`px-2 py-1 rounded ${language === 'EN' ? 'bg-yellow-400 text-black' : 'bg-gray-600'}`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage('AR')}
          className={`px-2 py-1 rounded ${language === 'AR' ? 'bg-yellow-400 text-black' : 'bg-gray-600'}`}
        >
          العربية
        </button>
      </div>
    </div>
  );
};

export default LanguageDebugger;

































