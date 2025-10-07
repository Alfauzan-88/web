/**
 * Image existence checker utility
 * This provides a fallback method to check if images exist
 */

/**
 * Check if an image exists by attempting to load it
 * This is a client-side check that works with any URL
 */
export const checkImageExists = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
};

/**
 * Check multiple images and return only the existing ones
 */
export const filterExistingImages = async (imageUrls: string[]): Promise<string[]> => {
  const existingImages: string[] = [];
  
  // Check images in batches to avoid overwhelming the browser
  const batchSize = 5;
  for (let i = 0; i < imageUrls.length; i += batchSize) {
    const batch = imageUrls.slice(i, i + batchSize);
    const batchResults = await Promise.all(
      batch.map(url => checkImageExists(url))
    );
    
    batch.forEach((url, index) => {
      if (batchResults[index]) {
        existingImages.push(url);
      }
    });
  }
  
  return existingImages;
};

/**
 * Get project images with automatic filtering
 */
export const getProjectImages = async (projectPath: string, expectedImages: string[]): Promise<string[]> => {
  const fullPaths = expectedImages.map(img => `${projectPath}/${img}`);
  return await filterExistingImages(fullPaths);
};

/**
 * Hook to get filtered project images
 */
export const useProjectImages = (projectPath: string, expectedImages: string[]) => {
  const [images, setImages] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadImages = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const existingImages = await getProjectImages(projectPath, expectedImages);
        setImages(existingImages);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load images');
        setImages([]);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [projectPath, expectedImages.join(',')]);

  return { images, loading, error };
};

// Import React for the hook
import React from 'react';
