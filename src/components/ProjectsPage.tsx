import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { X, ArrowRight, MapPin, Calendar, Building, Eye, Search } from 'lucide-react';
import RiyalIcon from './RiyalIcon';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

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

  const content = {
    EN: {
      title: "Commercial and Residency",
      subtitle: "Industrial Cities and Real Estate Master Plans",
      filters: ["All", "Industrial Cities", "Industrial Plans", "Warehousing Plans"],
      viewProject: "View Project",
      searchPlaceholder: "Search projects...",
      modal: {
        features: "Features",
        projectDetails: "Project Details",
        area: "Area",
        status: "Status",
        value: "Value",
        year: "Year"
      },
      projects: [
        {
          id: 1,
          title: "ALFAUZAN INDUSTRIAL CITY",
          category: "Industrial Cities",
          location: "Al-Kharj Road, Riyadh",
          year: "2024",
          value: "1.2B",
          image: "/assets/images/projects/Al fauzan industrial city/thumbnail.png",
          description: "A comprehensive industrial city with 3,324,000 m² total area featuring wide road networks, comprehensive infrastructure, and smart zoning.",
          features: ["Wide Road Networks", "Comprehensive Infrastructure", "Smart Zoning", "24/7 Security"],
          area: "3,324,000 m²",
          status: "Completed"
        },
        {
          id: 2,
          title: "REMAS INDUSTRIAL PLAN",
          category: "Industrial Plans",
          location: "Istanbul Road, Al-Mashael District",
          year: "2023",
          value: "400M",
          image: "/assets/images/projects/remas/remas.jpg",
          description: "Industrial plan with factories and commercial buildings for diverse industries, featuring modern road networks and infrastructure.",
          features: ["Factories", "Commercial Buildings", "Modern Infrastructure", "Diverse Industries"],
          area: "1,032,590 m²",
          status: "Completed"
        },
        {
          id: 3,
          title: "SAMA INDUSTRIAL PLAN",
          category: "Industrial Plans",
          location: "Istanbul Road, Al-Mashael District",
          year: "2023",
          value: "350M",
          image: "/assets/images/projects/SAMA/sama.jpg",
          description: "An integrated industrial plan aimed at providing an ideal environment for developing industrial and commercial businesses through modern designs and facilities that cater to diverse needs.",
          features: ["Factories of various sizes", "Commercial buildings", "Advanced road network", "Comprehensive infrastructure"],
          area: "991,987.54 m²",
          status: "Completed"
        },
        {
          id: 4,
          title: "SHAMS INDUSTRIAL PLAN",
          category: "Industrial Plans",
          location: "Istanbul Street, Al-Sulay District",
          year: "2023",
          value: "200M",
          image: "/assets/images/projects/Shams/shams.JPG",
          description: "An integrated industrial and commercial plan offering a distinguished environment to support industrial and commercial activities with modern facilities that cater to the needs of investors and business owners.",
          features: ["Factories of various sizes", "Commercial buildings", "Advanced road network", "Comprehensive infrastructure"],
          area: "432,600 m²",
          status: "Completed"
        },
        {
          id: 5,
          title: "EXIT 18 INDUSTRIAL PLAN",
          category: "Industrial Plans",
          location: "Al-Noor District, Exit 18",
          year: "2024",
          value: "300M",
          image: "/assets/images/projects/Exit 18/Exit 18.png",
          description: "An integrated industrial and residential plan providing an ideal environment for automotive-focused industrial workshops and residential buildings designed to meet the needs of workers and investors, with advanced infrastructure suited for industrial and residential purposes.",
          features: ["Automotive workshops", "Residential buildings", "Modern road network", "24/7 security"],
          area: "818,000 m²",
          status: "Under Construction"
        },
        {
          id: 6,
          title: "ALMANAKH INDUSTRIAL PLAN",
          category: "Industrial Plans",
          location: "Al-Kharj Road, Exit 18",
          year: "2024",
          value: "250M",
          image: "/assets/images/projects/ALMANAKH/ALMANAKH.png",
          description: "A specialized industrial plan providing an ideal environment to support diverse industrial activities, with a particular focus on marble, stone, and ceramic manufacturing, in addition to workshops and laboratories, within a modern infrastructure catering to investors' needs.",
          features: ["Marble manufacturing", "Stone processing", "Ceramic industry", "Modern infrastructure"],
          area: "780,000 m²",
          status: "Under Construction"
        },
        {
          id: 7,
          title: "ALMASHAEL INDUSTRIAL PLAN",
          category: "Industrial Plans",
          location: "Ibn Majah Street, Al-Sulay District",
          year: "2024",
          value: "280M",
          image: "/assets/images/projects/mashael/Mashael.JPG",
          description: "An integrated industrial plan providing a suitable environment for establishing workshops and factories, with modern facilities and advanced infrastructure supporting various industrial activities to meet the needs of investors and business owners.",
          features: ["Industrial workshops", "Modern facilities", "Advanced infrastructure", "Comprehensive services"],
          area: "864,000 m²",
          status: "Under Construction"
        },
        {
          id: 8,
          title: "ALFAUZAN 96 INDUSTRIAL PLAN",
          category: "Industrial Plans",
          location: "Eastern Ring Road, Exit 18",
          year: "2024",
          value: "400M",
          image: "/assets/images/projects/96/96.png",
          description: "An integrated industrial and commercial plan providing an ideal environment for diverse workshops, residential buildings, and commercial yards, with advanced infrastructure to meet the needs of investors, industrial companies, and businesses.",
          features: ["Diverse workshops", "Residential buildings", "Commercial yards", "Advanced infrastructure"],
          area: "1,096,000 m²",
          status: "Under Construction"
        },
        {
          id: 9,
          title: "DURRAT ALSHARQ INDUSTRIAL PLAN",
          category: "Industrial Plans",
          location: "Second Ring Road, Al-Sulay District",
          year: "2024",
          value: "800M",
          image: "/assets/images/projects/Durrat/Durrat.png",
          description: "An integrated industrial and commercial plan designed to support concrete industries block and marble manufacturing, as well as providing commercial showrooms and warehouses to meet the needs of various sectors, with modern infrastructure tailored for diverse activities.",
          features: ["Concrete industries", "Block manufacturing", "Marble processing", "Commercial showrooms"],
          area: "3,245,000 m²",
          status: "Under Construction"
        },
        {
          id: 10,
          title: "RANEEM WAREHOUSING PLAN",
          category: "Warehousing Plans",
          location: "Exit 17, Al-Sulay District",
          year: "2024",
          value: "150M",
          image: "/assets/images/projects/Raneem/Raneem.png",
          description: "An integrated warehousing plan offering storage spaces of various sizes to meet the needs of diverse commercial and industrial activities, with modern design and advanced infrastructure that enhances operational efficiency for investors and business owners.",
          features: ["Flexible storage spaces", "Commercial activities", "Industrial storage", "Modern design"],
          area: "500,000 m²",
          status: "Under Construction"
        },
        {
          id: 11,
          title: "ISTANBUL WAREHOUSING PLAN",
          category: "Warehousing Plans",
          location: "Istanbul Road, Al-Sulay District",
          year: "2024",
          value: "300M",
          image: "/assets/images/projects/Istanbul/Istanbul.jpg",
          description: "An integrated warehousing, residential, and commercial plan offering an ideal environment to meet storage, housing, and commercial activity needs, with a modern design balancing all components to serve various investment sectors.",
          features: ["Integrated spaces", "Modern design", "Comprehensive facilities", "Strategic location"],
          area: "1,000,000 m²",
          status: "Under Construction"
        },
        {
          id: 12,
          title: "RANDA WAREHOUSING PLAN",
          category: "Warehousing Plans",
          location: "Intersection of Second Ring Road and Al-Kharj Road",
          year: "2024",
          value: "100M",
          image: "/assets/images/projects/Randa/Randa.png",
          description: "An integrated warehousing, residential, and commercial plan designed to meet storage, housing and commercial activity needs, with a modern design offering a comprehensive environment for investors and business owners, enhancing operational efficiency across all components.",
          features: ["Modern storage", "Housing units", "Commercial activities", "Strategic location"],
          area: "315,000 m²",
          status: "Under Construction"
        },
        {
          id: 13,
          title: "RANA WAREHOUSING PLAN",
          category: "Warehousing Plans",
          location: "Second Ring Road, Al-Sulay District",
          year: "2024",
          value: "200M",
          image: "/assets/images/projects/Rana/Rana.png",
          description: "An integrated warehousing and residential plan providing an ideal environment to meet commercial and industrial storage needs, along with residential buildings designed to provide housing units that cater to the needs of workers and investors, supported by advanced infrastructure.",
          features: ["Warehouses", "Residential units", "Modern facilities", "Integrated design"],
          area: "840,000 m²",
          status: "Under Construction"
        },
        {
          id: 14,
          title: "ALNAMOTHAJIYA WAREHOUSING PLAN",
          category: "Warehousing Plans",
          location: "Istanbul Road, Al-Sulay District",
          year: "2024",
          value: "250M",
          image: "/assets/images/projects/ALNAMOTHAJIYA/ALNAMOTHAJIYA.jpg",
          description: "An integrated warehousing plan combining storage, commercial, and industrial activities featuring warehouses, commercial yards, residential buildings, and workshops within an advanced infrastructure that supports diverse investment activities.",
          features: ["Storage facilities", "Commercial activities", "Industrial support", "Modern infrastructure"],
          area: "1,012,720 m²",
          status: "Under Construction"
        },
        {
          id: 15,
          title: "ALAZIZIYAH WAREHOUSING PLAN",
          category: "Warehousing Plans",
          location: "Al-Aziziyah District, Al-Kharj Road",
          year: "2024",
          value: "180M",
          image: "/assets/images/projects/Aziziyah/Aziziyah.JPG",
          description: "An integrated warehousing and commercial plan offering a modern environment that supports storage and commercial activities, with equipped warehouses, multi-purpose buildings (residential and commercial), and showrooms designed for product display and marketing making it a prime investment destination.",
          features: ["Multi-purpose buildings", "Residential use", "Commercial use", "Modern design"],
          area: "623,215 m²",
          status: "Under Construction"
        }
      ]
    },
    AR: {
      title: "التجاري والسكني",
      subtitle: "المدن الصناعية والمخططات العقارية الرئيسية",
      filters: ["الكل", "المدن الصناعية", "المخططات الصناعية", "مخططات المستودعات"],
      viewProject: "عرض المشروع",
      searchPlaceholder: "البحث في المشاريع...",
      modal: {
        features: "المميزات",
        projectDetails: "تفاصيل المشروع",
        area: "المساحة",
        status: "الحالة",
        value: "القيمة",
        year: "السنة"
      },
      projects: [
        {
          id: 1,
          title: "مدينة الفوزان الصناعية",
          category: "المدن الصناعية",
          location: "طريق الخرج، الرياض",
          year: "2024",
          value: "1.2 مليار",
          image: "/assets/images/projects/Al fauzan industrial city/thumbnail.png",
          description: "مدينة صناعية وتجارية متكاملة مصممة لتوفير بنية تحتية متقدمة تدعم مختلف القطاعات الصناعية (الثقيلة والمتوسطة والخفيفة) مع مرافق حديثة تشمل مستودعات التخزين وخدمات اللوجستيك والمناطق الإدارية والتجارية والإسكان العمالي والتنفيذي والفنادق ومراكز التدريب، مما يوفر بيئة مثالية للاستثمار والإنتاج.",
          features: ["مصانع بأحجام وصناعات متنوعة", "مستودعات تخزين بمساحات مرنة", "مستثمرون محليون ودوليون في القطاع الصناعي", "أنظمة مراقبة أمنية على مدار الساعة", "شبكات طرق واسعة مصممة للشاحنات الثقيلة", "بنية تحتية شاملة تشمل المياه والكهرباء والصرف الصحي وشبكات الاتصالات", "تخطيط ذكي يشمل المناطق الصناعية والتجارية والإدارية والسكنية"],
          area: "3,324,000 متر مربع",
          status: "مكتمل"
        },
        {
          id: 2,
          title: "مخطط ريماس الصناعي",
          category: "المخططات الصناعية",
          location: "طريق إسطنبول، حي المشاعل",
          year: "2023",
          value: "400 مليون",
          image: "/assets/images/projects/remas/remas.jpg",
          description: "مخطط صناعي يضم مصانع ومباني تجارية لمختلف الصناعات مع شبكات طرق حديثة وبنية تحتية.",
          features: ["مصانع", "مباني تجارية", "بنية تحتية حديثة", "صناعات متنوعة"],
          area: "1,032,590 متر مربع",
          status: "مكتمل"
        },
        {
          id: 3,
          title: "مخطط سما الصناعي",
          category: "المخططات الصناعية",
          location: "طريق إسطنبول، حي المشاعل",
          year: "2023",
          value: "350 مليون",
          image: "/assets/images/projects/SAMA/sama.jpg",
          description: "مخطط صناعي متكامل يهدف إلى توفير بيئة مثالية لتطوير الأعمال الصناعية والتجارية من خلال التصاميم والمرافق الحديثة التي تلبي الاحتياجات المتنوعة.",
          features: ["مصانع بأحجام متنوعة", "مباني تجارية", "شبكة طرق متقدمة", "بنية تحتية شاملة"],
          area: "991,987.54 متر مربع",
          status: "مكتمل"
        },
        {
          id: 4,
          title: "مخطط شمس الصناعي",
          category: "المخططات الصناعية",
          location: "شارع إسطنبول، حي السلي",
          year: "2023",
          value: "200 مليون",
          image: "/assets/images/projects/Shams/shams.JPG",
          description: "مخطط صناعي وتجاري متكامل يوفر بيئة متميزة لدعم الأنشطة الصناعية والتجارية مع مرافق حديثة تلبي احتياجات المستثمرين وأصحاب الأعمال.",
          features: ["مصانع بأحجام متنوعة", "مباني تجارية", "شبكة طرق متقدمة", "بنية تحتية شاملة"],
          area: "432,600 متر مربع",
          status: "مكتمل"
        },
        {
          id: 5,
          title: "مخطط مخرج 18 الصناعي",
          category: "المخططات الصناعية",
          location: "حي النور، مخرج 18",
          year: "2024",
          value: "300 مليون",
          image: "/assets/images/projects/Exit 18/Exit 18.png",
          description: "مخطط صناعي وسكني متكامل يوفر بيئة مثالية لورش العمل الصناعية المتخصصة في السيارات والمباني السكنية المصممة لتلبية احتياجات العمال والمستثمرين، مع بنية تحتية متقدمة مناسبة للأغراض الصناعية والسكنية.",
          features: ["ورش سيارات", "مباني سكنية", "شبكة طرق حديثة", "أمن على مدار الساعة"],
          area: "818,000 متر مربع",
          status: "قيد الإنشاء"
        },
        {
          id: 6,
          title: "مخطط المناخ الصناعي",
          category: "المخططات الصناعية",
          location: "طريق الخرج، مخرج 18",
          year: "2024",
          value: "250 مليون",
          image: "/assets/images/projects/ALMANAKH/ALMANAKH.png",
          description: "مخطط صناعي متخصص يوفر بيئة مثالية لدعم الأنشطة الصناعية المتنوعة، مع التركيز بشكل خاص على تصنيع الرخام والحجر والسيراميك، بالإضافة إلى الورش والمختبرات، ضمن بنية تحتية حديثة تلبي احتياجات المستثمرين.",
          features: ["تصنيع الرخام", "معالجة الحجر", "صناعة السيراميك", "بنية تحتية حديثة"],
          area: "780,000 متر مربع",
          status: "قيد الإنشاء"
        },
        {
          id: 7,
          title: "مخطط المشاعل الصناعي",
          category: "المخططات الصناعية",
          location: "شارع ابن ماجه، حي السلي",
          year: "2024",
          value: "280 مليون",
          image: "/assets/images/projects/mashael/Mashael.JPG",
          description: "مخطط صناعي متكامل يوفر بيئة مناسبة لإنشاء الورش والمصانع، مع مرافق حديثة وبنية تحتية متقدمة تدعم مختلف الأنشطة الصناعية لتلبية احتياجات المستثمرين وأصحاب الأعمال.",
          features: ["ورش صناعية", "مرافق حديثة", "بنية تحتية متقدمة", "خدمات شاملة"],
          area: "864,000 متر مربع",
          status: "قيد الإنشاء"
        },
        {
          id: 8,
          title: "مخطط الفوزان 96 الصناعي",
          category: "المخططات الصناعية",
          location: "الطريق الدائري الشرقي، مخرج 18",
          year: "2024",
          value: "400 مليون",
          image: "/assets/images/projects/96/96.png",
          description: "مخطط صناعي وتجاري متكامل يوفر بيئة مثالية لورش متنوعة ومباني سكنية وساحات تجارية، مع بنية تحتية متقدمة لتلبية احتياجات المستثمرين والشركات الصناعية والأعمال التجارية.",
          features: ["ورش متنوعة", "مباني سكنية", "ساحات تجارية", "بنية تحتية متقدمة"],
          area: "1,096,000 متر مربع",
          status: "قيد الإنشاء"
        },
        {
          id: 9,
          title: "مخطط درة الشرق الصناعي",
          category: "المخططات الصناعية",
          location: "الطريق الدائري الثاني، حي السلي",
          year: "2024",
          value: "800 مليون",
          image: "/assets/images/projects/Durrat/Durrat.png",
          description: "مخطط صناعي وتجاري متكامل مصمم لدعم صناعات الخرسانة والبلوك وتصنيع الرخام، بالإضافة إلى توفير معارض تجارية ومستودعات لتلبية احتياجات مختلف القطاعات، مع بنية تحتية حديثة مصممة خصيصاً للأنشطة المتنوعة.",
          features: ["صناعات خرسانية", "تصنيع البلوك", "معالجة الرخام", "معارض تجارية"],
          area: "3,245,000 متر مربع",
          status: "قيد الإنشاء"
        },
        {
          id: 10,
          title: "مخطط رنيم للمستودعات",
          category: "مخططات المستودعات",
          location: "مخرج 17، حي السلي",
          year: "2024",
          value: "150 مليون",
          image: "/assets/images/projects/Raneem/Raneem.png",
          description: "مخطط مستودعات متكامل يوفر مساحات تخزين بأحجام متنوعة لتلبية احتياجات الأنشطة التجارية والصناعية المتنوعة، مع تصميم حديث وبنية تحتية متقدمة تعزز كفاءة التشغيل للمستثمرين وأصحاب الأعمال.",
          features: ["مساحات تخزين مرنة", "أنشطة تجارية", "تخزين صناعي", "تصميم حديث"],
          area: "500,000 متر مربع",
          status: "قيد الإنشاء"
        },
        {
          id: 11,
          title: "مخطط إسطنبول للمستودعات",
          category: "مخططات المستودعات",
          location: "طريق إسطنبول، حي السلي",
          year: "2024",
          value: "300 مليون",
          image: "/assets/images/projects/Istanbul/Istanbul.jpg",
          description: "مخطط مستودعات وسكني وتجاري متكامل يوفر بيئة مثالية لتلبية احتياجات التخزين والإسكان والأنشطة التجارية، مع تصميم حديث يوازن جميع المكونات لخدمة مختلف قطاعات الاستثمار.",
          features: ["مساحات متكاملة", "تصميم حديث", "مرافق شاملة", "موقع استراتيجي"],
          area: "1,000,000 متر مربع",
          status: "قيد الإنشاء"
        },
        {
          id: 12,
          title: "مخطط رندة للمستودعات",
          category: "مخططات المستودعات",
          location: "تقاطع الطريق الدائري الثاني وطريق الخرج",
          year: "2024",
          value: "100 مليون",
          image: "/assets/images/projects/Randa/Randa.png",
          description: "مخطط مستودعات وسكني وتجاري متكامل مصمم لتلبية احتياجات التخزين والإسكان والأنشطة التجارية، مع تصميم حديث يوفر بيئة شاملة للمستثمرين وأصحاب الأعمال، مما يعزز كفاءة التشغيل عبر جميع المكونات.",
          features: ["تخزين حديث", "وحدات سكنية", "أنشطة تجارية", "موقع استراتيجي"],
          area: "315,000 متر مربع",
          status: "قيد الإنشاء"
        },
        {
          id: 13,
          title: "مخطط رنا للمستودعات",
          category: "مخططات المستودعات",
          location: "الطريق الدائري الثاني، حي السلي",
          year: "2024",
          value: "200 مليون",
          image: "/assets/images/projects/Rana/Rana.png",
          description: "مخطط مستودعات وسكني متكامل يوفر بيئة مثالية لتلبية احتياجات التخزين التجاري والصناعي، بالإضافة إلى المباني السكنية المصممة لتوفير وحدات سكنية تلبي احتياجات العمال والمستثمرين، مدعومة ببنية تحتية متقدمة.",
          features: ["مستودعات", "وحدات سكنية", "مرافق حديثة", "تصميم متكامل"],
          area: "840,000 متر مربع",
          status: "قيد الإنشاء"
        },
        {
          id: 14,
          title: "مخطط النموذجية للمستودعات",
          category: "مخططات المستودعات",
          location: "طريق إسطنبول، حي السلي",
          year: "2024",
          value: "250 مليون",
          image: "/assets/images/projects/ALNAMOTHAJIYA/ALNAMOTHAJIYA.jpg",
          description: "مخطط مستودعات متكامل يجمع بين أنشطة التخزين والتجارية والصناعية ويضم مستودعات وساحات تجارية ومباني سكنية وورش عمل ضمن بنية تحتية متقدمة تدعم أنشطة الاستثمار المتنوعة.",
          features: ["مرافق التخزين", "الأنشطة التجارية", "الدعم الصناعي", "بنية تحتية حديثة"],
          area: "1,012,720 متر مربع",
          status: "قيد الإنشاء"
        },
        {
          id: 15,
          title: "مخطط العزيزية للمستودعات",
          category: "مخططات المستودعات",
          location: "حي العزيزية، طريق الخرج",
          year: "2024",
          value: "180 مليون",
          image: "/assets/images/projects/Aziziyah/Aziziyah.JPG",
          description: "مخطط مستودعات وتجاري متكامل يوفر بيئة حديثة تدعم أنشطة التخزين والتجارية، مع مستودعات مجهزة ومباني متعددة الأغراض (سكنية وتجارية) ومعارض مصممة لعرض وتسويق المنتجات مما يجعلها وجهة استثمارية رئيسية.",
          features: ["مباني متعددة الأغراض", "استخدام سكني", "استخدام تجاري", "تصميم حديث"],
          area: "623,215 متر مربع",
          status: "قيد الإنشاء"
        }
      ]
    }
  };

  const currentContent = content[language];

  // Filter projects based on active filter and search query
  const filteredProjects = currentContent.projects.filter(project => {
    const matchesFilter = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card', 
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
                      e.currentTarget.src = '/assets/images/projects/Al fauzan industrial city/hero.jpg';
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
                  <h3 className={`text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors ${language === 'AR' ? 'font-arabic' : ''}`}>
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-400 text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className={`mr-4 ${language === 'AR' ? 'font-arabic' : ''}`}>{project.location}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{project.year}</span>
                  </div>

                  <p className={`text-gray-300 mb-4 text-sm leading-relaxed ${language === 'AR' ? 'font-arabic' : ''}`}>
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <RiyalIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className={`${language === 'AR' ? 'font-arabic' : ''}`}>{project.value}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Building className="h-4 w-4 mr-2 flex-shrink-0 text-yellow-500" />
                      <span className={`${language === 'AR' ? 'font-arabic' : ''}`}>{project.area}</span>
                    </div>
                  </div>

                  <Button 
                    variant="ghost" 
                    className="text-yellow-400 hover:text-black hover:bg-yellow-400 p-0 h-auto font-semibold group"
                    onClick={() => navigate(`/projects/${project.id}`)}
                  >
                    <span className={language === 'AR' ? 'font-arabic' : ''}>
                      {currentContent.viewProject}
                    </span>
                    <ArrowRight className={`ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 ${language === 'AR' ? 'rotate-180 mr-2 ml-0' : ''}`} />
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
