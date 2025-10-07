/**
 * Dynamic project data generator that automatically detects images
 */

import { filterExistingImages } from './imageUtils';

export interface DynamicProject {
  id: string;
  title: string;
  description: string;
  overview: string;
  features: string[];
  specifications: Record<string, any>;
  timeline: {
    startDate: string;
    completionDate: string;
    phases: string[];
  };
  images: string[];
  images_urls: string[];
  main_image_url: string;
  video?: string;
  video_url?: string;
  brochure?: string;
  totalArea: string;
  area: string;
  status: string;
  location: string;
  category: string;
  year: string;
  value: string;
  investmentType: string;
  long_description: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Project configurations for dynamic image loading
 */
export const PROJECT_CONFIGS: Record<string, {
  projectName: string;
  mainImageName: string;
  expectedImages: string[];
}> = {
  "1": {
    projectName: "Al fauzan industrial city",
    mainImageName: "hero.jpg",
    expectedImages: ["hero.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "QR.png"]
  },
  "2": {
    projectName: "remas",
    mainImageName: "remas.jpg",
    expectedImages: ["remas.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "QR.png"]
  },
  "3": {
    projectName: "SAMA",
    mainImageName: "sama.jpg",
    expectedImages: ["sama.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "QR.png"]
  },
  "11": {
    projectName: "Istanbul",
    mainImageName: "Istanbul.jpg",
    expectedImages: ["Istanbul.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "QR.png"]
  },
  "4": {
    projectName: "Shams",
    mainImageName: "shams.JPG",
    expectedImages: ["shams.JPG", "1.JPG", "2.JPG", "3.JPG", "4.JPG", "5.JPG", "6.jpg", "7.JPG", "8.JPG", "9.JPG", "10.JPG", "11.JPG", "12.jpg", "QR.png"]
  },
  "14": {
    projectName: "ALNAMOTHAJIYA",
    mainImageName: "ALNAMOTHAJIYA.jpg",
    expectedImages: ["ALNAMOTHAJIYA.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "QR.png"]
  },
  "15": {
    projectName: "Aziziyah",
    mainImageName: "Aziziyah.JPG",
    expectedImages: ["Aziziyah.JPG", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "QR.png"]
  },
  "7": {
    projectName: "mashael",
    mainImageName: "Mashael.JPG",
    expectedImages: ["Mashael.JPG", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "QR.png"]
  }
};

/**
 * Generate dynamic project data with automatically detected images
 */
export const generateDynamicProjectData = async (projectId: string, baseProject: Partial<DynamicProject>): Promise<DynamicProject> => {
  const config = PROJECT_CONFIGS[projectId];
  
  if (!config) {
    // Fallback to static data if no config found
    return baseProject as DynamicProject;
  }
  
  try {
    const projectPath = `/assets/images/projects/${config.projectName}`;
    const existingImages = await filterExistingImages(
      config.expectedImages.map(img => `${projectPath}/${img}`)
    );
    
    // Find main image
    let mainImage = existingImages.find(img => img.includes(config.mainImageName));
    if (!mainImage && existingImages.length > 0) {
      mainImage = existingImages[0];
    }
    
    return {
      ...baseProject,
      images: existingImages,
      images_urls: existingImages,
      main_image_url: mainImage || baseProject.main_image_url || '',
    } as DynamicProject;
  } catch (error) {
    console.error(`Failed to load dynamic images for project ${projectId}:`, error);
    // Fallback to static data
    return baseProject as DynamicProject;
  }
};

/**
 * Hook to get dynamic project data
 */
export const useDynamicProjectData = (projectId: string, baseProject: Partial<DynamicProject>) => {
  const [projectData, setProjectData] = React.useState<DynamicProject | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadProjectData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const dynamicData = await generateDynamicProjectData(projectId, baseProject);
        setProjectData(dynamicData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load project data');
        // Fallback to base project data
        setProjectData(baseProject as DynamicProject);
      } finally {
        setLoading(false);
      }
    };

    loadProjectData();
  }, [projectId, baseProject]);

  return { projectData, loading, error };
};

// Import React for the hook
import React from 'react';
