import { useState, useEffect } from 'react';
import { Project } from '@/data/projectsData';
import { generateDynamicProjectData } from '@/utils/dynamicProjectData';

interface UseDynamicProjectReturn {
  project: Project | null;
  loading: boolean;
  error: string | null;
  refreshImages: () => void;
}

/**
 * Hook to get project data with dynamically loaded images
 */
export const useDynamicProject = (projectId: string, baseProject: Project | null): UseDynamicProjectReturn => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadProjectData = async () => {
    if (!baseProject || !projectId) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const dynamicData = await generateDynamicProjectData(projectId, baseProject);
      setProject(dynamicData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load project data');
      // Fallback to base project data
      setProject(baseProject);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjectData();
  }, [projectId, baseProject]);

  const refreshImages = () => {
    loadProjectData();
  };

  return { project, loading, error, refreshImages };
};
