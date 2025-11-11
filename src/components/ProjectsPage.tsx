import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { X, ArrowRight, MapPin, Calendar, Building, Eye, Search } from 'lucide-react';
import RiyalIcon from './RiyalIcon';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { projectsData, Project } from '@/data/projectsData';

gsap.registerPlugin(ScrollTrigger);

const ProjectsPage: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { language } = useLanguage();
  const navigate = useNavigate();
  
  const loading = false;
  const error = null;

  // Load projects from projectsData
  const loadProjects = () => {
    const projects: any[] = [];
    Object.keys(projectsData).forEach(key => {
      const projectData = projectsData[key];
      const project = projectData[language] || projectData.EN;
      projects.push({
        id: parseInt(key),
        title: project.title,
        category: project.category || 'Industrial Plans',
        location: project.location,
        year: project.year || '2024',
        value: project.value || 'N/A',
        image: project.main_image_url || project.images?.[0] || '/assets/images/projects/Al fauzan industrial city/1.jpg',
        description: project.description,
        features: project.features || [],
        area: project.area || project.specifications?.totalArea || 'N/A',
        status: project.status || 'Under Construction'
      });
    });
    return projects;
  };

  const allProjects = loadProjects();

  // Filter projects based on active filter and search query
  const filteredProjects = allProjects.filter(project => {
    const matchesFilter = activeFilter === 'All' || activeFilter === 'الكل' || project.category === activeFilter;
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const content = {
    EN: {
      title: "Commercial and Residency",
      subtitle: "Industrial Cities and Real Estate Master Plans",
      filters: ["All", "Industrial Cities", "Industrial Plans", "Warehousing Plans", "Commercial Buildings", "Residential Buildings", "Administrative Buildings"],
      viewProject: "View Project",
      searchPlaceholder: "Search projects...",
      modal: {
        features: "Features",
        projectDetails: "Project Details",
        area: "Area",
        status: "Status",
        value: "Value",
        year: "Year"
      }
    },
    AR: {
      title: "تجاري وسكني",
      subtitle: "مدن صناعية ومخططات عقارية رئيسية",
      filters: ["الكل", "المدن الصناعية", "المخططات الصناعية", "مخططات المستودعات", "المباني التجارية", "المباني السكنية", "المباني الإدارية"],
      viewProject: "عرض المشروع",
      searchPlaceholder: "البحث في المشاريع...",
      modal: {
        features: "المميزات",
        projectDetails: "تفاصيل المشروع",
        area: "المساحة",
        status: "الحالة",
        value: "القيمة",
        year: "السنة"
      }
    }
  };

  const currentContent = content[language];

  // Reset filter when language changes
  useEffect(() => {
    setActiveFilter(language === 'AR' ? 'الكل' : 'All');
  }, [language]);

  // GSAP Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredProjects]);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white ${language === 'AR' ? 'font-arabic' : ''}`}>
            {currentContent.title}
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${language === 'AR' ? 'font-arabic' : ''}`}>
            {currentContent.subtitle}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder={currentContent.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${language === 'AR' ? 'font-arabic text-right' : ''}`}
            /> 
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {currentContent.filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-yellow-400 text-black font-semibold'
                  : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20'
              } ${language === 'AR' ? 'font-arabic' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Count */}
        <div className="text-center mb-8">
          <p className={`text-gray-300 ${language === 'AR' ? 'font-arabic' : ''}`}>
            {language === 'AR' ? 'عرض' : 'Showing'} {filteredProjects.length} {language === 'AR' ? 'مشروع' : 'projects'}
          </p>
        </div>

        {/* Projects Grid */}
        {!loading && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="project-card group relative bg-white/5 backdrop-blur-md rounded-lg overflow-hidden hover-scale border border-white/10 shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      console.error(`Failed to load image for project ${project.id}:`, project.image);
                      e.currentTarget.src = '/assets/images/projects/Al fauzan industrial city/1.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-yellow-400 text-black rounded-full text-xs font-semibold backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3
                    className={`text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300 ${language === 'AR' ? 'font-arabic text-right' : 'text-left'}`}
                  >
                    {project.title}
                  </h3>
                  
                  <p className={`text-gray-300 text-sm mb-4 line-clamp-2 ${language === 'AR' ? 'font-arabic text-right' : 'text-left'}`}>
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="space-y-2 mb-4">
                    <div className={`flex items-center ${language === 'AR' ? 'justify-end space-x-3 space-x-reverse' : 'justify-start space-x-3'}`}>
                      <MapPin className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                      <span className={`text-gray-300 text-sm ${language === 'AR' ? 'font-arabic' : ''}`}>
                        {project.location}
                      </span>
                    </div>
                    
                    <div className={`flex items-center ${language === 'AR' ? 'justify-end space-x-3 space-x-reverse' : 'justify-start space-x-3'}`}>
                      <Building className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                      <span className={`text-gray-300 text-sm ${language === 'AR' ? 'font-arabic' : ''}`}>
                        {project.area}
                      </span>
                    </div>
                  </div>

                  {/* View Project Button */}
                  <Button 
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg transition-all duration-300 group-hover:scale-105"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/projects/${project.id}`);
                    }}
                  >
                    <span className="flex items-center justify-center">
                      <Eye className="h-4 w-4 mr-2" />
                      {currentContent.viewProject}
                    </span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-gray-400 text-lg ${language === 'AR' ? 'font-arabic' : ''}`}>
              {language === 'AR' ? 'لا توجد مشاريع تطابق معايير البحث' : 'No projects match your search criteria'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;