import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TransparentNavigation from '@/components/TransparentNavigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Calendar, 
  Building, 
  Users, 
  CheckCircle,
  Clock,
  Star,
  Share2,
  Heart,
  Phone,
  Mail,
  Play,
  Factory,
  ShoppingBag,
  Car,
  X,
  Send,
  Eye,
  FileText,
  Target,
  Award
} from 'lucide-react';
import RiyalIcon from '@/components/RiyalIcon';
import { useLanguage } from '@/contexts/LanguageContext';
import DynamicImageGallery from '@/components/DynamicImageGallery';
import ProjectFeaturesInfographic from '@/components/ProjectFeaturesInfographic';
import { projectsData, Project } from '@/data/projectsData';
import { useDynamicProject } from '@/hooks/useDynamicProject';



const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showInterestForm, setShowInterestForm] = useState(false);
  const [baseProject, setBaseProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    investmentType: 'investment',
    budget: '1M-5M'
  });

  // Project agent numbers mapping
  const projectAgents: { [key: string]: string } = {
    "1": "9660593330077", // Al Fauzan Industrial City
    "2": "966537141515", // Remas
    "3": "966599999249", // Sama
    "4": "966599999249", // Shams
    "5": "966537141515", // Exit 18
    "6": "966599999249", // Al Manakh
    "7": "9660593330077", // Mashael
    "8": "966597811111", // 96
    "9": "966597811111", // Durrat
    "10": "966598161616", // Raneem
    "11": "966597811111", // Istanbul
    "12": "966598161616", // Randa
    "13": "966598161616", // Rana
    "14": "966593330077", // Al Fauzan Administrative Headquarters
    "15": "966593330077", // Aziziyah
    "16": "966593330077", // Al Faisaliyah
    "17": "966593330077", // Al Mohamadiyah
    "18": "966593330077", // Taibah
    "19": "966593330077", // Al Jazeera
    "20": "966597811111", // Circon
    "21": "966598161616", // Al Saada
    "22": "966537141515", // Al Hars
    "23": "966593330077"  // Administrative HQ
  };

  // Project-specific Arabic messages
  const getProjectMessage = (projectId: string, projectTitle: string, isArabic: boolean) => {
    if (isArabic) {
      const arabicMessages: { [key: string]: string } = {
        "1": "مرحباً! أنا مهتم بمشروع مدينة الفوزان الصناعية. يرجى تزويدي بمزيد من المعلومات.",
        "2": "مرحباً! أنا مهتم بمشروع الريماس. يرجى تزويدي بمزيد من المعلومات.",
        "3": "مرحباً! أنا مهتم بمشروع السامة. يرجى تزويدي بمزيد من المعلومات.",
        "4": "مرحباً! أنا مهتم بمشروع الشمس. يرجى تزويدي بمزيد من المعلومات.",
        "5": "مرحباً! أنا مهتم بمشروع مخرج 18. يرجى تزويدي بمزيد من المعلومات.",
        "6": "مرحباً! أنا مهتم بمشروع المناخ. يرجى تزويدي بمزيد من المعلومات.",
        "7": "مرحباً! أنا مهتم بمشروع المشاعل. يرجى تزويدي بمزيد من المعلومات.",
        "8": "مرحباً! أنا مهتم بمشروع 96. يرجى تزويدي بمزيد من المعلومات.",
        "9": "مرحباً! أنا مهتم بمشروع درة الشرق الصناعي. يرجى تزويدي بمزيد من المعلومات.",
        "10": "مرحباً! أنا مهتم بمشروع رنيم. يرجى تزويدي بمزيد من المعلومات.",
        "11": "مرحباً! أنا مهتم بمشروع إسطنبول. يرجى تزويدي بمزيد من المعلومات.",
        "12": "مرحباً! أنا مهتم بمشروع رندا. يرجى تزويدي بمزيد من المعلومات.",
        "13": "مرحباً! أنا مهتم بمشروع رنا. يرجى تزويدي بمزيد من المعلومات.",
        "14": "مرحباً! أنا مهتم بالمقر الإداري لشركة علي الفوزان وأولاده العقارية. يرجى تزويدي بمزيد من المعلومات.",
        "15": "مرحباً! أنا مهتم بمشروع العزيزية. يرجى تزويدي بمزيد من المعلومات.",
        "16": "مرحباً! أنا مهتم بمشروع الفيصلية الصناعي. يرجى تزويدي بمزيد من المعلومات.",
        "17": "مرحباً! أنا مهتم بمشروع المحمدية الصناعي. يرجى تزويدي بمزيد من المعلومات.",
        "18": "مرحباً! أنا مهتم بمشروع طيبة للمستودعات. يرجى تزويدي بمزيد من المعلومات.",
        "19": "مرحباً! أنا مهتم بمشروع الجزيرة للمستودعات. يرجى تزويدي بمزيد من المعلومات.",
        "20": "مرحباً! أنا مهتم بمشروع السيركون. يرجى تزويدي بمزيد من المعلومات.",
        "21": "مرحباً! أنا مهتم بمشروع السعادة. يرجى تزويدي بمزيد من المعلومات.",
        "22": "مرحباً! أنا مهتم بمشروع الحرس. يرجى تزويدي بمزيد من المعلومات.",
        "23": "مرحباً! أنا مهتم بالمقر الإداري. يرجى تزويدي بمزيد من المعلومات."
      };
      return arabicMessages[projectId] || `مرحباً! أنا مهتم بهذا المشروع. يرجى تزويدي بمزيد من المعلومات.`;
    } else {
      return `Hello! I'm interested in ${projectTitle}. Please provide me with more information.`;
    }
  };

  // Fetch base project data from static data
  useEffect(() => {
    const fetchBaseProject = async () => {
      if (!id) return;
      
      const projectData = projectsData[id];
      if (!projectData) return;
      
      const selectedProject = projectData[language] || projectData.EN;
      setBaseProject(selectedProject);
    };

    fetchBaseProject();
  }, [id, language]);

  // Use dynamic project hook to get project with dynamic images
  const { project, loading, error, refreshImages } = useDynamicProject(
    id || '', 
    baseProject
  );

  // Debug: Log project data to console
  React.useEffect(() => {
    if (project) {
      console.log('Project data:', project);
      console.log('Project area:', project.area);
      console.log('Project totalArea:', project.specifications?.totalArea);
    }
  }, [project]);

  const content = {
    EN: {
      projectOverview: "Project Overview",
      keyFeatures: "Key Features",
      specifications: "Specifications",
      timeline: "Project Timeline",
      gallery: "Project Images",
      contact: "Contact Us",
      share: "Share Project",
      imInterested: "I'm Interested",
      investmentOpportunities: "Investment Opportunities",
      totalArea: "Total Area",
      industrialZones: "Industrial Zones",
      commercialAreas: "Commercial Areas",
      parkingSpaces: "Parking Spaces",
      securityPosts: "Security Posts",
      roadNetwork: "Road Network",
      industrialUnits: "Industrial Units",
      loadingAreas: "Loading Areas",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      company: "Company Name",
      message: "Message",
      investmentType: "Investment Type",
      budget: "Budget Range",
      submit: "Submit Interest",
      cancel: "Cancel",
      formTitle: "Express Your Interest",
      formSubtitle: "Fill out the form below and we'll get back to you within 24 hours",
      investmentOptions: {
        investment: "Investment",
        partnership: "Partnership",
        consultation: "Consultation",
        other: "Other"
      },
      budgetOptions: {
        "1M-5M": "1M - 5M SAR",
        "5M-10M": "5M - 10M SAR", 
        "10M-25M": "10M - 25M SAR",
        "25M+": "25M+ SAR"
      }
    },
    AR: {
      projectOverview: "نظرة عامة على المشروع",
      keyFeatures: "المميزات الرئيسية",
      specifications: "المواصفات",
      timeline: "الجدول الزمني للمشروع",
      gallery: "صور المشروع",
      contact: "اتصل بنا",
      share: "مشاركة المشروع",
      imInterested: "أنا مهتم",
      investmentOpportunities: "فرص الاستثمار",
      totalArea: "المساحة الإجمالية",
      industrialZones: "المناطق الصناعية",
      commercialAreas: "المناطق التجارية",
      parkingSpaces: "مواقف السيارات",
      securityPosts: "نقاط الأمن",
      roadNetwork: "شبكة الطرق",
      industrialUnits: "الوحدات الصناعية",
      loadingAreas: "مناطق التحميل",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      company: "اسم الشركة",
      message: "الرسالة",
      investmentType: "نوع الاستثمار",
      budget: "نطاق الميزانية",
      submit: "إرسال الاهتمام",
      cancel: "إلغاء",
      formTitle: "عبّر عن اهتمامك",
      formSubtitle: "املأ النموذج أدناه وسنرد عليك خلال 24 ساعة",
      investmentOptions: {
        investment: "استثمار",
        partnership: "شراكة",
        consultation: "استشارة",
        other: "أخرى"
      },
      budgetOptions: {
                "1M-5M": "1M - 5M",
        "5M-10M": "5M - 10M",
        "10M-25M": "10M - 25M",
        "25M+": "25M+"
      }
    }
  };

  const currentContent = content[language];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Netlify Forms submission
      const form = e.target as HTMLFormElement;
      const formDataToSubmit = new FormData(form);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSubmit as any).toString(),
      });

      if (response.ok) {
        // Reset form and close modal
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          investmentType: 'investment',
          budget: '1M-5M'
        });
        setShowInterestForm(false);
        
        // Show success message
        alert(language === 'EN' 
          ? 'Thank you for your interest! We will contact you within 24 hours.' 
          : 'شكراً لاهتمامك! سنتواصل معك خلال 24 ساعة.');
      } else {
        alert(language === 'EN' 
          ? 'An error occurred. Please try again.' 
          : 'حدث خطأ. يرجى المحاولة مرة أخرى.');
      }
    } catch (error) {
      alert(language === 'EN' 
        ? 'Network error. Please check your connection and try again.' 
        : 'خطأ في الشبكة. يرجى التحقق من الاتصال والمحاولة مرة أخرى.');
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen overflow-x-hidden relative">
        <div className="fixed inset-0 w-screen h-screen z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/videos/hero-banner.mp4" type="video/mp4" />
            {language === 'AR' ? 'متصفحك لا يدعم تشغيل الفيديو.' : 'Your browser does not support the video tag.'}
          </video>
        </div>
        <TransparentNavigation />
        <div className="flex items-center justify-center min-h-screen z-10 relative">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
            <p className="text-white text-lg">{language === 'EN' ? 'Loading project...' : 'جاري تحميل المشروع...'}</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !project) {
    return (
      <div className="min-h-screen overflow-x-hidden relative">
        <div className="fixed inset-0 w-screen h-screen z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/videos/hero-banner.mp4" type="video/mp4" />
            {language === 'AR' ? 'متصفحك لا يدعم تشغيل الفيديو.' : 'Your browser does not support the video tag.'}
          </video>
        </div>
        <TransparentNavigation />
        <div className="flex items-center justify-center min-h-screen z-10 relative">
          <div className="text-center">
            <p className="text-white text-lg mb-4">{error || (language === 'EN' ? 'Project not found' : 'المشروع غير موجود')}</p>
            <Button onClick={() => navigate('/projects')} className="bg-yellow-400 hover:bg-yellow-500 text-black">
              {language === 'EN' ? 'Back to Projects' : 'العودة للمشاريع'}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Global Video Background */}
      <div className="fixed inset-0 w-screen h-screen z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/hero-banner.mp4" type="video/mp4" />
          {language === 'AR' ? 'متصفحك لا يدعم تشغيل الفيديو.' : 'Your browser does not support the video tag.'}
        </video>
      </div>

      <TransparentNavigation />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden z-10">
                 <img
           src={project.main_image_url || (project.images_urls && project.images_urls[currentImageIndex]) || project.images[0]}
           alt={project.title}
           className="w-full h-full object-cover"
         />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        {/* QR Code in Right Corner */}
        <a 
          href={project?.id === "1"
            ? "https://www.google.com/maps?q=%D9%85%D8%AF%D9%8A%D9%86%D8%A9+%D8%A7%D9%84%D9%81%D9%88%D8%B2%D8%A7%D9%86%D8%A7%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D9%8A%D8%A9%D8%8C+%D8%B7%D8%B1%D9%8A%D9%82+%D8%A7%D9%84%D8%AE%D8%B1%D8%AC%D8%8C+%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6+14548&ftid=0x3e2f99f12ee457e3:0x17b95c627c6482ec&entry=gps&lucs=,94282564,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjMwLjAuNzg1NjQ2NTQ3MBgAINeCAypjLDk0MjgyNTY0LDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjgyMTM0LDk0MjAzMDE5LDQ3MDg0MzA0QgJTQQ%3D%3D&skid=f66e323c-5f41-4c91-b468-aae28b9f8efe&g_st=ipc"
            : project?.id === "2" 
            ? "https://www.google.com/maps?q=%D8%A7%D9%84%D9%85%D8%B4%D8%A7%D8%B9%D9%84%D8%8C+%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6+14326&ftid=0x3e2fa6c5762592e7:0x53323b90d7b1706a&entry=gps&lucs=,94282564,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjMwLjAuNzg1NjQ2NTQ3MBgAINeCAypjLDk0MjgyNTY0LDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjgyMTM0LDk0MjAzMDE5LDQ3MDg0MzA0QgJTQQ%3D%3D&skid=4bb072a2-ef5c-41aa-918b-ec07a36b59c2&g_st=ipc"
            : project?.id === "3"
            ? "https://www.google.com/maps/place/24%C2%B035'42.7%22N+46%C2%B051'40.5%22E/@24.5951944,46.8586751,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.5951944!4d46.86125?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
            : project?.id === "4"
            ? "https://www.google.com/maps/place/Fouzan+Real+Estate/@24.6445934,46.8390385,17.31z/data=!4m12!1m5!3m4!2zMjTCsDM4JzI3LjMiTiA0NsKwNTAnMTguOCJF!8m2!3d24.6409167!4d46.8385556!3m5!1s0x3e2fa7e6f6ba4431:0x5f255fb01ff86919!8m2!3d24.6442475!4d46.8413776!16s%2Fg%2F11b7dqk9vx?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
            : project?.id === "5"
            ? "https://maps.app.goo.gl/C622oEPCeipEjsub7"
            : project?.id === "6"
            ? "https://www.google.com/maps?q=24.6029722,46.8223333&entry=gps&lucs=,94282564,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjMwLjAuNzg1NjQ2NTQ3MBgAINeCAypjLDk0MjgyNTY0LDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjgyMTM0LDk0MjAzMDE5LDQ3MDg0MzA0QgJTQQ%3D%3D&skid=abb12424-6ae3-4950-8cbb-6ac161f726f1&g_st=ipc"
            : project?.id === "7"
            ? "https://www.google.com/maps/place/24%C2%B037'07.6%22N+46%C2%B052'06.0%22E/@24.6187778,46.8657584,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.6187778!4d46.8683333?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
            : project?.id === "8"
            ? "https://www.google.com/maps/place/24%C2%B037'02.6%22N+46%C2%B049'06.9%22E/@24.6173889,46.8160084,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.6173889!4d46.8185833?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
            : project?.id === "9"
            ? "https://www.google.com/maps?q=24.5996389,46.8859444&entry=gps&lucs=,94282564,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjMwLjAuNzg1NjQ2NTQ3MBgAINeCAypjLDk0MjgyNTY0LDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjgyMTM0LDk0MjAzMDE5LDQ3MDg0MzA0QgJTQQ%3D%3D&skid=5b5c53fc-d339-4575-b762-a51397fe7246&g_st=ipc"
            : project?.id === "10"
            ? "https://www.google.com/maps?q=24.6263550,46.8819176&entry=gps&lucs=,94282564,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjMwLjAuNzg1NjQ2NTQ3MBgAINeCAypjLDk0MjgyNTY0LDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjgyMTM0LDk0MjAzMDE5LDQ3MDg0MzA0QgJTQQ%3D%3D&skid=eaf8d8d1-1be4-4320-b8f5-8dbac57c22ed&g_st=ipc"
            : project?.id === "11"
            ? "https://www.google.com/maps/place/Al+Mashael,+Riyadh+14328/@24.6056953,46.8680255,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2fa6e1275faed7:0xb73ff15426545d05!8m2!3d24.6056953!4d46.8680255!16s%2Fg%2F11tmshcbn0?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
            : project?.id === "12"
            ? "https://www.google.com/maps/place/24%C2%B034'48.7%22N+46%C2%B052'22.5%22E/@24.5801944,46.8703418,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.5801944!4d46.8729167?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
            : project?.id === "13"
            ? "https://www.google.com/maps/place/RQYA7509,+4848,+As+Sulay,+Riyadh+14324/@24.6481992,46.8909197,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2fa66d1e940c4d:0x2fb31491614479b6!8m2!3d24.6481992!4d46.8909197!16s%2Fg%2F11x6r7wmkz?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
            : project?.id === "14"
            ? "https://www.google.com/maps/place/24%C2%B036'32.1%22N+46%C2%B051'14.7%22E/@24.6089014,46.8515051,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.6089014!4d46.85408?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
            : project?.id === "15"
            ? "https://www.google.com/maps?q=24.5864722,46.8006111&entry=gps&lucs=,94282564,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjMwLjAuNzg1NjQ2NTQ3MBgAINeCAypjLDk0MjgyNTY0LDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjgyMTM0LDk0MjAzMDE5LDQ3MDg0MzA0QgJTQQ%3D%3D&skid=7bfedaf7-45df-4414-a65d-9183d1580283&g_st=ipc"
            : project?.id === "16"
            ? "https://maps.app.goo.gl/cogNeiyKCmD73R56A"
            : project?.id === "17"
            ? "https://goo.gl/maps/uvReQGc3yBjJmnoM6"
            : project?.id === "18"
            ? "https://maps.app.goo.gl/X8Z1y9faa3sRaCRm8"
            : project?.id === "19"
            ? "https://maps.app.goo.gl/8SpLDTA84EpLBuPn8"
            : project?.id === "20"
            ? "https://maps.app.goo.gl/UoH5LM8ZfUWniEdb9"
            : project?.id === "21"
            ? "https://www.google.com/maps/place/RQAA4841%D8%8C+4841+%D8%A7%D9%84%D9%86%D9%87%D8%A7%D8%B1%D8%8C+7520%D8%8C+%D8%AD%D9%8A+%D8%A7%D9%84%D8%B3%D8%B9%D8%A7%D8%AF%D8%A9%D8%8C+%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6+14258%E2%80%AD/@24.69131,46.8448917,1035m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3e2fa9b559af71ab:0xc90c999b2f7c456b!8m2!3d24.69131!4d46.8448917!16s/g/11rb4smwlf?hl=ar-SA&entry=ttu"
            : project?.id === "22"
            ? "https://maps.app.goo.gl/QrNtU3sFPU7K9tqr5"
            : project?.id === "23"
            ? "https://maps.app.goo.gl/vfzQnPYpc1Fayfs37"
            : "https://www.google.com/maps?q=%D9%85%D8%AF%D9%8A%D9%86%D8%A9+%D8%A7%D9%84%D9%81%D9%88%D8%B2%D8%A7%D9%86%D8%A7%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D9%8A%D8%A9%D8%8C+%D8%B7%D8%B1%D9%8A%D9%82+%D8%A7%D9%84%D8%AE%D8%B1%D8%AC%D8%8C+%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6+14548&ftid=0x3e2f99f12ee457e3:0x17b95c627c6482ec&entry=gps&lucs=,94282564,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjMwLjAuNzg1NjQ2NTQ3MBgAINeCAypjLDk0MjgyNTY0LDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjgyMTM0LDk0MjAzMDE5LDQ3MDg0MzA0QgJTQQ%3D%3D&skid=f66e323c-5f41-4c91-b468-aae28b9f8efe&g_st=ipc"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-16 right-4 md:bottom-20 md:right-6 z-10 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-2 md:p-3"
          title="View on Google Maps"
        >
          <img 
            src={project?.id === "1" 
              ? "/assets/images/projects/Al fauzan industrial city/QR.png"
              : project?.id === "2" 
              ? "/assets/images/projects/remas/QR.png"
              : project?.id === "3"
              ? "/assets/images/projects/SAMA/QR.png"
              : project?.id === "4"
              ? "/assets/images/projects/Shams/QR.png"
              : project?.id === "5"
              ? "/assets/images/projects/Exit 18/QR.png"
              : project?.id === "6"
              ? "/assets/images/projects/ALMANAKH/QR.png"
              : project?.id === "7"
              ? "/assets/images/projects/mashael/QR.png"
              : project?.id === "8"
              ? "/assets/images/projects/96/QR.png"
              : project?.id === "9"
              ? "/assets/images/projects/Durrat/QR.png"
              : project?.id === "10"
              ? "/assets/images/projects/Raneem/QR.png"
              : project?.id === "11"
              ? "/assets/images/projects/Istanbul/QR.png"
              : project?.id === "12"
              ? "/assets/images/projects/Randa/QR.png"
              : project?.id === "13"
              ? "/assets/images/projects/Rana/QR.png"
              : project?.id === "14"
              ? "/assets/images/projects/14/QR.jpeg"
              : project?.id === "15"
              ? "/assets/images/projects/Aziziyah/QR.png"
              : project?.id === "16"
              ? "/assets/images/projects/faisaliyah/QR.jpeg"
              : project?.id === "17"
              ? "/assets/images/projects/Muhammadiya/QR.jpeg"
              : project?.id === "18"
              ? "/assets/images/projects/Taibah/QR.jpeg"
              : project?.id === "19"
              ? "/assets/images/projects/Al Jazeera/QR.jpeg"
              : project?.id === "20"
              ? "/assets/images/projects/Siricon/QR.jpeg"
              : project?.id === "21"
              ? "/assets/images/projects/Saada/QR.jpg"
              : project?.id === "22"
              ? "/assets/images/projects/Hars/QR.jpeg"
              : project?.id === "23"
              ? "/assets/images/projects/14/QR.jpeg"
              : "/assets/images/projects/Al fauzan industrial city/QR.png"
            }
            alt="QR Code - View on Google Maps"
            className="w-16 h-16 md:w-24 md:h-24"
          />
        </a>

        {/* Project Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center space-x-2 mb-3 md:mb-4">
              <span className="bg-yellow-400 text-black px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold">
                {project?.category}
              </span>
            </div>
            
                          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-3 md:mb-4 ${
                language === 'AR' ? 'font-arabic' : ''
              }`} style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                {project?.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-3 md:gap-6 text-white/90 mb-4 md:mb-6 text-sm md:text-base">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2 flex-shrink-0" />
                <span className={`truncate ${language === 'AR' ? 'font-arabic' : ''}`}>{project?.location}</span>
              </div>
              <div className="flex items-center">
                <Building className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2 flex-shrink-0" />
                <span className={language === 'AR' ? 'font-arabic' : ''}>
                  {project.area || project.specifications?.totalArea || 'N/A'}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4">
              <Button 
                className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm md:text-base px-4 py-2 md:px-6 md:py-3"
                onClick={() => {
                  const agentNumber = projectAgents[id || ""] || "9665011222261"; // Fallback to main number
                  const projectName = project?.title || "Project";
                  const message = getProjectMessage(id || "", projectName, language === 'AR');
                  const whatsappUrl = `https://wa.me/${agentNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                <Target className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">{currentContent.imInterested}</span>
                <span className="sm:hidden">Interested</span>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black text-sm md:text-base px-4 py-2 md:px-6 md:py-3">
                <Share2 className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">{currentContent.share}</span>
                <span className="sm:hidden">Share</span>
              </Button>
            </div>
          </div>
        </div>

                 {/* Image Navigation */}
         <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex space-x-2">
           {(project.images_urls && project.images_urls.length > 0 ? project.images_urls : [project.main_image_url || project.images[0]]).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-yellow-400' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        
        {/* Project Overview */}
        <section className="mb-12 md:mb-20">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 md:p-8 border border-white/20">
            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8 ${
              language === 'AR' ? 'font-arabic text-right' : ''
            }`} style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
              {currentContent.projectOverview}
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              <div>
                                 <p className={`text-base md:text-xl text-white/90 leading-relaxed mb-6 ${
                   language === 'AR' ? 'font-arabic text-right' : ''
                 }`} style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                   {project.long_description}
                </p>
              </div>
              
              {/* Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {/* Total Area - Building/Area Icon */}
                <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-xl text-center border border-white/20">
                  <div className="flex justify-center mb-3">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <Building className="w-8 h-8 md:w-10 md:h-10 text-yellow-800" />
                    </div>
                  </div>
                  <div className="text-xl md:text-3xl font-bold text-white mb-2">
                    {project.specifications?.totalArea || project.area || 'N/A'}
                  </div>
                  <div className="text-white/90 text-sm md:text-base">{currentContent.totalArea}</div>
                </div>
                
                {/* Industrial Zones - Factory/Industrial Icon */}
                <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-xl text-center border border-white/20">
                  <div className="flex justify-center mb-3">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <Factory className="w-8 h-8 md:w-10 md:h-10 text-yellow-800" />
                    </div>
                  </div>
                  <div className="text-xl md:text-3xl font-bold text-white mb-2">
                    {'industrialZones' in project.specifications ? project.specifications.industrialZones : project.specifications.industrialUnits}
                  </div>
                  <div className="text-white/90 text-sm md:text-base">{currentContent.industrialZones || currentContent.industrialUnits}</div>
                </div>
                
                {/* Commercial Areas - Shopping/Store Icon */}
                <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-xl text-center border border-white/20">
                  <div className="flex justify-center mb-3">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <ShoppingBag className="w-8 h-8 md:w-10 md:h-10 text-yellow-800" />
                    </div>
                  </div>
                  <div className="text-xl md:text-3xl font-bold text-white mb-2">
                    {'commercialAreas' in project.specifications ? project.specifications.commercialAreas : project.specifications.commercialSpaces}
                  </div>
                  <div className="text-white/90 text-sm md:text-base">{currentContent.commercialAreas}</div>
                </div>
                
                {/* Parking Spaces - Car/Parking Icon */}
                <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-xl text-center border border-white/20">
                  <div className="flex justify-center mb-3">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <Car className="w-8 h-8 md:w-10 md:h-10 text-yellow-800" />
                    </div>
                  </div>
                  <div className="text-xl md:text-3xl font-bold text-white mb-2">{project.specifications.parkingSpaces}</div>
                  <div className="text-white/90 text-sm md:text-base">{currentContent.parkingSpaces}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Infographic */}
        <section className="mb-12 md:mb-20">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 md:p-8 border border-white/20">
            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8 ${
              language === 'AR' ? 'font-arabic text-right' : ''
            }`} style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
              {currentContent.keyFeatures}
            </h2>
            <ProjectFeaturesInfographic />
          </div>
        </section>




                 {/* Project Images */}
         <section>
           <DynamicImageGallery 
             images={project.images_urls.length > 0 ? project.images_urls : [project.main_image_url]} 
             title={currentContent.gallery} 
           />
         </section>
      </div>

      {/* Interest Form Modal */}
      {showInterestForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
            <div className="p-4 md:p-8">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <div className="flex-1 pr-4">
                  <h3 className={`text-xl md:text-2xl font-bold text-white ${language === 'AR' ? 'font-arabic' : ''}`}>
                    {currentContent.formTitle}
                  </h3>
                  <p className={`text-white/80 mt-2 text-sm md:text-base ${language === 'AR' ? 'font-arabic' : ''}`}>
                    {currentContent.formSubtitle}
                  </p>
                </div>
                <button
                  onClick={() => setShowInterestForm(false)}
                  className="text-white/80 hover:text-white transition-colors flex-shrink-0"
                >
                  <X className="h-5 w-5 md:h-6 md:w-6" />
                </button>
              </div>
              
              <form 
                name="project-interest" 
                method="POST" 
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleFormSubmit} 
                className="space-y-6"
              >
                {/* Hidden fields for Netlify Forms */}
                <input type="hidden" name="form-name" value="project-interest" />
                <input type="hidden" name="project-title" value={project?.title || ''} />
                <div style={{ display: 'none' }}>
                  <label>
                    Don't fill this out if you're human: 
                    <input name="bot-field" />
                  </label>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className={`block text-white mb-2 text-sm md:text-base ${language === 'AR' ? 'font-arabic' : ''}`}>
                      {currentContent.name} *
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder-white/50 backdrop-blur-md text-sm md:text-base"
                      placeholder={currentContent.name}
                    />
                  </div>
                  <div>
                    <label className={`block text-white mb-2 text-sm md:text-base ${language === 'AR' ? 'font-arabic' : ''}`}>
                      {currentContent.email} *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder-white/50 backdrop-blur-md text-sm md:text-base"
                      placeholder={currentContent.email}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className={`block text-white mb-2 text-sm md:text-base ${language === 'AR' ? 'font-arabic' : ''}`}>
                      {currentContent.phone}
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder-white/50 backdrop-blur-md text-sm md:text-base"
                      placeholder={currentContent.phone}
                    />
                  </div>
                  <div>
                    <label className={`block text-white mb-2 text-sm md:text-base ${language === 'AR' ? 'font-arabic' : ''}`}>
                      {currentContent.company}
                    </label>
                    <Input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder-white/50 backdrop-blur-md text-sm md:text-base"
                      placeholder={currentContent.company}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className={`block text-white mb-2 text-sm md:text-base ${language === 'AR' ? 'font-arabic' : ''}`}>
                      {currentContent.investmentType}
                    </label>
                    <select
                      value={formData.investmentType}
                      onChange={(e) => setFormData({...formData, investmentType: e.target.value})}
                      className="w-full bg-white/10 border border-white/20 text-white rounded-md px-3 py-2 backdrop-blur-md text-sm md:text-base"
                    >
                      {Object.entries(currentContent.investmentOptions).map(([key, value]) => (
                        <option key={key} value={key} className="bg-gray-800">{value}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={`block text-white mb-2 text-sm md:text-base ${language === 'AR' ? 'font-arabic' : ''}`}>
                      {currentContent.budget}
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="w-full bg-white/10 border border-white/20 text-white rounded-md px-3 py-2 backdrop-blur-md text-sm md:text-base"
                    >
                      {Object.entries(currentContent.budgetOptions).map(([key, value]) => (
                        <option key={key} value={key} className="bg-gray-800">{value}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={`block text-white mb-2 text-sm md:text-base ${language === 'AR' ? 'font-arabic' : ''}`}>
                    {currentContent.message}
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder-white/50 backdrop-blur-md min-h-[100px] md:min-h-[120px] text-sm md:text-base"
                    placeholder={currentContent.message}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                  <Button 
                    type="submit" 
                    className="bg-yellow-400 hover:bg-yellow-500 text-black flex-1 text-sm md:text-base"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {currentContent.submit}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowInterestForm(false)}
                    className="border-white text-white hover:bg-white hover:text-black text-sm md:text-base"
                  >
                    {currentContent.cancel}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProjectDetails;
