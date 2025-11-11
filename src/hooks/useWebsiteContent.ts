import { useState, useEffect } from 'react';

interface WebsiteContent {
  id: number;
  section: string;
  key: string;
  value_en: string;
  value_ar: string;
  type: string;
  is_active: boolean;
  order: number;
}

interface GroupedContent {
  [section: string]: WebsiteContent[];
}

export const useWebsiteContent = () => {
  const [content, setContent] = useState<GroupedContent>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Static content data - no backend required
  const staticContent: GroupedContent = {
    hero: [
      {
        id: 1,
        section: 'hero',
        key: 'journey_liner',
        value_en: 'JOURNEY OF DEVELOPMENT',
        value_ar: 'رحلة التطوير',
        type: 'text',
        is_active: true,
        order: 1
      },
      {
        id: 2,
        section: 'hero',
        key: 'journey_liner_image',
        value_en: '/assets/images/journey-of-development.png',
        value_ar: '/assets/images/journey-of-development.png',
        type: 'image',
        is_active: true,
        order: 2
      },
      {
        id: 3,
        section: 'hero',
        key: 'hero_video',
        value_en: '/assets/videos/hero-banner.mp4',
        value_ar: '/assets/videos/hero-banner.mp4',
        type: 'video',
        is_active: true,
        order: 3
      }
    ],
    about: [
      {
        id: 4,
        section: 'about',
        key: 'title',
        value_en: 'Leading Real Estate Development',
        value_ar: 'قيادة التطوير العقاري',
        type: 'text',
        is_active: true,
        order: 1
      },
      {
        id: 5,
        section: 'about',
        key: 'description',
        value_en: '35+ years of excellence in transforming Saudi Arabia\'s landscape',
        value_ar: 'أكثر من 35 عاماً من التميز في تحويل المشهد السعودي',
        type: 'text',
        is_active: true,
        order: 2
      }
    ],
    projects: [
      {
        id: 6,
        section: 'projects',
        key: 'title',
        value_en: 'Our Projects',
        value_ar: 'مشاريعنا',
        type: 'text',
        is_active: true,
        order: 1
      },
      {
        id: 7,
        section: 'projects',
        key: 'subtitle',
        value_en: 'Industrial Cities and Real Estate Master Plans',
        value_ar: 'المدن الصناعية والخطط الرئيسية العقارية',
        type: 'text',
        is_active: true,
        order: 2
      }
    ]
  };

  const loadContent = async () => {
    try {
      setLoading(true);
      setError(null);
      // Use static content instead of API call
      setContent(staticContent);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load content');
      console.error('Error loading website content:', err);
    } finally {
      setLoading(false);
    }
  };

  const getContent = (section: string, key: string, language: 'EN' | 'AR' = 'EN'): string => {
    const sectionContent = content[section];
    if (!sectionContent) return '';

    const item = sectionContent.find(item => item.key === key && item.is_active);
    if (!item) return '';

    return language === 'AR' ? item.value_ar : item.value_en;
  };

  const getSectionContent = (section: string): WebsiteContent[] => {
    return content[section] || [];
  };

  useEffect(() => {
    // Load content only once on mount
    setContent(staticContent);
  }, []);

  return {
    content,
    loading,
    error,
    getContent,
    getSectionContent,
    reload: loadContent,
  };
};

