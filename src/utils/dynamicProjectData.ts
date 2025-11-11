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
    mainImageName: "1.jpg",
    expectedImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg"]
  },
  "2": {
    projectName: "remas",
    mainImageName: "1.jpg",
    expectedImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg"]
  },
  "3": {
    projectName: "SAMA",
    mainImageName: "1.JPG",
    expectedImages: ["1.JPG", "2.JPG", "3.JPG", "4.JPG", "5.JPG"]
  },
  "11": {
    projectName: "Istanbul",
    mainImageName: "1.jpg",
    expectedImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg"]
  },
  "4": {
    projectName: "Shams",
    mainImageName: "1.JPG",
    expectedImages: ["1.JPG", "2.JPG", "3.JPG", "4.JPG", "5.JPG", "6.JPG", "7.jpg", "8.JPG", "9.JPG", "10.JPG", "11.JPG", "12.jpg"]
  },
  "14": {
    projectName: "ALNAMOTHAJIYA",
    mainImageName: "1.jpg",
    expectedImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"]
  },
  "15": {
    projectName: "Aziziyah",
    mainImageName: "1.jpg",
    expectedImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg"]
  },
  "7": {
    projectName: "mashael",
    mainImageName: "1.jpg",
    expectedImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg"]
  },
  "13": {
    projectName: "Rana",
    mainImageName: "1.JPG",
    expectedImages: ["1.JPG", "2.JPG", "3.JPG", "4.JPG", "5.JPG", "6.JPG", "7.JPG", "8.JPG", "9.JPG", "10.JPG", "11.JPG", "12.JPG"]
  },
  "10": {
    projectName: "Raneem",
    mainImageName: "1.jpg",
    expectedImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.JPG", "7.jpg", "8.jpg", "9.JPG", "10.JPG", "11.jpg"]
  },
  "5": {
    projectName: "Exit 18",
    mainImageName: "1.jpg",
    expectedImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"]
  },
  "8": {
    projectName: "96",
    mainImageName: "1.jpg",
    expectedImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"]
  },
  "9": {
    projectName: "Durrat",
    mainImageName: "1.jpg",
    expectedImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]
  },
  "12": {
    projectName: "Randa",
    mainImageName: "1.jpg",
    expectedImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"]
  },
  "6": {
    projectName: "ALMANAKH",
    mainImageName: "1.JPG",
    expectedImages: ["1.JPG", "2.JPG", "3.JPG", "4.JPG"]
  },
  "16": {
    projectName: "faisaliyah",
    mainImageName: "1.jpg",
    expectedImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.JPG", "6.JPG", "7.jpg", "8.JPG", "9.jpg"]
  },
  "17": {
    projectName: "Muhammadiya",
    mainImageName: "1.jpg",
    expectedImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"]
  },
  "18": {
    projectName: "Taibah",
    mainImageName: "1.jpg",
    expectedImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]
  },
  "19": {
    projectName: "Al Jazeera",
    mainImageName: "1.jpg",
    expectedImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"]
  },
  "20": {
    projectName: "Siricon",
    mainImageName: "1.jpg",
    expectedImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]
  },
  "21": {
    projectName: "Saada",
    mainImageName: "1.jpg",
    expectedImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]
  },
  "22": {
    projectName: "Hars",
    mainImageName: "1.jpg",
    expectedImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]
  },
  "23": {
    projectName: "14",
    mainImageName: "1.jpg",
    expectedImages: ["1.jpg", "2.JPG", "3.JPG", "4.JPG", "5.JPG"]
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
