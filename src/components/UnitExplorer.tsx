import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  MapPin, 
  Building, 
  Clock, 
  Shield, 
  Truck, 
  Wifi, 
  Zap,
  Droplets,
  Users,
  Car,
  Eye,
  Filter,
  X,
  CheckCircle,
  AlertCircle,
  Clock as ClockIcon
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import RiyalIcon from './RiyalIcon';

interface Unit {
  id: string;
  number: string;
  size: number; // in sq meters
  price: number; // monthly rent in SAR
  status: 'available' | 'rented' | 'reserved';
  location: { x: number; y: number; width: number; height: number };
  specs: {
    ceilingHeight: number;
    floorLoading: number;
    dockDoors: number;
    parkingSpaces: number;
    officeSpace: boolean;
    restroom: boolean;
    breakRoom: boolean;
  };
  utilities: {
    electricity: boolean;
    water: boolean;
    internet: boolean;
    hvac: boolean;
  };
  security: {
    cctv: boolean;
    accessControl: boolean;
    securityPersonnel: boolean;
    alarmSystem: boolean;
  };
  operatingHours: string;
  leaseTerms: {
    minLeasePeriod: number;
    depositRequired: number;
    paymentTerms: string;
  };
  images: string[];
}

interface UnitExplorerProps {
  projectId: number;
  projectName: string;
}

const UnitExplorer: React.FC<UnitExplorerProps> = ({ projectId, projectName }) => {
  const { language } = useLanguage();
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [showUnitModal, setShowUnitModal] = useState(false);
  const [filters, setFilters] = useState({
    status: 'all',
    minSize: '',
    maxSize: '',
    minPrice: '',
    maxPrice: '',
    hasOffice: false,
    hasRestroom: false,
    hasDockDoors: false
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Sample unit data for REMAS project
  const units: Unit[] = [
    {
      id: 'REMAS-001',
      number: 'A1',
      size: 500,
      price: 15000,
      status: 'available',
      location: { x: 50, y: 50, width: 80, height: 60 },
      specs: {
        ceilingHeight: 8,
        floorLoading: 2000,
        dockDoors: 2,
        parkingSpaces: 4,
        officeSpace: true,
        restroom: true,
        breakRoom: false
      },
      utilities: {
        electricity: true,
        water: true,
        internet: true,
        hvac: true
      },
      security: {
        cctv: true,
        accessControl: true,
        securityPersonnel: true,
        alarmSystem: true
      },
      operatingHours: '24/7',
      leaseTerms: {
        minLeasePeriod: 12,
        depositRequired: 30000,
        paymentTerms: 'Monthly in advance'
      },
      images: [
            '/assets/images/projects/Al fauzan industrial city/hero.jpg',
    '/assets/images/projects/DMC/Hero.png'
      ]
    },
    {
      id: 'REMAS-002',
      number: 'A2',
      size: 750,
      price: 22000,
      status: 'rented',
      location: { x: 150, y: 50, width: 100, height: 60 },
      specs: {
        ceilingHeight: 10,
        floorLoading: 2500,
        dockDoors: 3,
        parkingSpaces: 6,
        officeSpace: true,
        restroom: true,
        breakRoom: true
      },
      utilities: {
        electricity: true,
        water: true,
        internet: true,
        hvac: true
      },
      security: {
        cctv: true,
        accessControl: true,
        securityPersonnel: true,
        alarmSystem: true
      },
      operatingHours: '24/7',
      leaseTerms: {
        minLeasePeriod: 12,
        depositRequired: 44000,
        paymentTerms: 'Monthly in advance'
      },
      images: [
        '/assets/images/projects/SAMA/sama.jpg'
      ]
    },
    {
      id: 'REMAS-003',
      number: 'A3',
      size: 300,
      price: 9000,
      status: 'reserved',
      location: { x: 270, y: 50, width: 60, height: 60 },
      specs: {
        ceilingHeight: 6,
        floorLoading: 1500,
        dockDoors: 1,
        parkingSpaces: 2,
        officeSpace: false,
        restroom: false,
        breakRoom: false
      },
      utilities: {
        electricity: true,
        water: true,
        internet: false,
        hvac: false
      },
      security: {
        cctv: true,
        accessControl: true,
        securityPersonnel: true,
        alarmSystem: false
      },
      operatingHours: '6 AM - 10 PM',
      leaseTerms: {
        minLeasePeriod: 6,
        depositRequired: 18000,
        paymentTerms: 'Monthly in advance'
      },
      images: [
        '/assets/images/projects/remas/remas.jpg'
      ]
    }
  ];

  const content = {
    EN: {
      title: "Unit Explorer",
      subtitle: "Interactive floor plan and unit details",
      filters: {
        title: "Filters",
        status: "Status",
        size: "Size (sq m)",
        price: "Price (SAR/month)",
        features: "Features",
        apply: "Apply Filters",
        clear: "Clear All"
      },
      status: {
        available: "Available",
        rented: "Rented",
        reserved: "Reserved"
      },
      unitDetails: {
        title: "Unit Details",
        specs: "Specifications",
        utilities: "Utilities",
        security: "Security",
        lease: "Lease Terms",
        contact: "Contact Us"
      },
      specs: {
        size: "Size",
        ceilingHeight: "Ceiling Height",
        floorLoading: "Floor Loading",
        dockDoors: "Dock Doors",
        parking: "Parking Spaces"
      },
      utilities: {
        electricity: "Electricity",
        water: "Water",
        internet: "Internet",
        hvac: "HVAC"
      },
      security: {
        cctv: "CCTV",
        accessControl: "Access Control",
        securityPersonnel: "Security Personnel",
        alarmSystem: "Alarm System"
      },
      lease: {
        minPeriod: "Minimum Lease Period",
        deposit: "Deposit Required",
        paymentTerms: "Payment Terms"
      }
    },
    AR: {
      title: "مستكشف الوحدات",
      subtitle: "مخطط تفاعلي وتفاصيل الوحدات",
      filters: {
        title: "المرشحات",
        status: "الحالة",
        size: "المساحة (متر مربع)",
        price: "السعر (/شهر)",
        features: "المميزات",
        apply: "تطبيق المرشحات",
        clear: "مسح الكل"
      },
      status: {
        available: "متاح",
        rented: "مؤجر",
        reserved: "محجوز"
      },
      unitDetails: {
        title: "تفاصيل الوحدة",
        specs: "المواصفات",
        utilities: "المرافق",
        security: "الأمن",
        lease: "شروط الإيجار",
        contact: "اتصل بنا"
      },
      specs: {
        size: "المساحة",
        ceilingHeight: "ارتفاع السقف",
        floorLoading: "تحميل الأرضية",
        dockDoors: "أبواب التحميل",
        parking: "مواقف السيارات"
      },
      utilities: {
        electricity: "الكهرباء",
        water: "الماء",
        internet: "الإنترنت",
        hvac: "التكييف"
      },
      security: {
        cctv: "كاميرات مراقبة",
        accessControl: "التحكم في الوصول",
        securityPersonnel: "أفراد الأمن",
        alarmSystem: "نظام الإنذار"
      },
      lease: {
        minPeriod: "أقل مدة إيجار",
        deposit: "الوديعة المطلوبة",
        paymentTerms: "شروط الدفع"
      }
    }
  };

  const currentContent = content[language];

  // Filter units based on current filters
  const filteredUnits = units.filter(unit => {
    if (filters.status !== 'all' && unit.status !== filters.status) return false;
    if (filters.minSize && unit.size < parseInt(filters.minSize)) return false;
    if (filters.maxSize && unit.size > parseInt(filters.maxSize)) return false;
    if (filters.minPrice && unit.price < parseInt(filters.minPrice)) return false;
    if (filters.maxPrice && unit.price > parseInt(filters.maxPrice)) return false;
    if (filters.hasOffice && !unit.specs.officeSpace) return false;
    if (filters.hasRestroom && !unit.specs.restroom) return false;
    if (filters.hasDockDoors && unit.specs.dockDoors === 0) return false;
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500';
      case 'rented': return 'bg-red-500';
      case 'reserved': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available': return <CheckCircle className="h-4 w-4" />;
      case 'rented': return <X className="h-4 w-4" />;
      case 'reserved': return <ClockIcon className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  const handleUnitClick = (unit: Unit) => {
    setSelectedUnit(unit);
    setShowUnitModal(true);
    setCurrentImageIndex(0);
  };

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Check if click is within any unit
    const clickedUnit = filteredUnits.find(unit => {
      return x >= unit.location.x && 
             x <= unit.location.x + unit.location.width &&
             y >= unit.location.y && 
             y <= unit.location.y + unit.location.height;
    });

    if (clickedUnit) {
      handleUnitClick(clickedUnit);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw units
    filteredUnits.forEach(unit => {
      const { x, y, width, height } = unit.location;
      
      // Set color based on status
      switch (unit.status) {
        case 'available':
          ctx.fillStyle = 'rgba(34, 197, 94, 0.8)';
          break;
        case 'rented':
          ctx.fillStyle = 'rgba(239, 68, 68, 0.8)';
          break;
        case 'reserved':
          ctx.fillStyle = 'rgba(234, 179, 8, 0.8)';
          break;
        default:
          ctx.fillStyle = 'rgba(107, 114, 128, 0.8)';
      }

      // Draw unit rectangle
      ctx.fillRect(x, y, width, height);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, width, height);

      // Draw unit number
      ctx.fillStyle = 'white';
      ctx.font = 'bold 12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(unit.number, x + width/2, y + height/2 + 4);
    });
  }, [filteredUnits]);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
      <div className="mb-8">
        <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 ${
          language === 'AR' ? 'font-arabic text-right' : ''
        }`} style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
          {currentContent.title}
        </h2>
        <p className={`text-white/80 ${language === 'AR' ? 'font-arabic text-right' : ''}`}>
          {currentContent.subtitle}
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/10">
        <h3 className={`text-xl font-semibold text-white mb-4 ${
          language === 'AR' ? 'font-arabic text-right' : ''
        }`}>
          {currentContent.filters.title}
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Status Filter */}
          <div>
            <label className={`block text-white/80 mb-2 text-sm ${
              language === 'AR' ? 'font-arabic' : ''
            }`}>
              {currentContent.filters.status}
            </label>
            <select
              value={filters.status}
              onChange={(e) => setFilters({...filters, status: e.target.value})}
              className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 backdrop-blur-md"
            >
              <option value="all" className="bg-gray-800">All</option>
              <option value="available" className="bg-gray-800">{currentContent.status.available}</option>
              <option value="rented" className="bg-gray-800">{currentContent.status.rented}</option>
              <option value="reserved" className="bg-gray-800">{currentContent.status.reserved}</option>
            </select>
          </div>

          {/* Size Range */}
          <div>
            <label className={`block text-white/80 mb-2 text-sm ${
              language === 'AR' ? 'font-arabic' : ''
            }`}>
              {currentContent.filters.size}
            </label>
            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="Min"
                value={filters.minSize}
                onChange={(e) => setFilters({...filters, minSize: e.target.value})}
                className="bg-white/10 border-white/20 text-white placeholder-white/50 backdrop-blur-md"
              />
              <Input
                type="number"
                placeholder="Max"
                value={filters.maxSize}
                onChange={(e) => setFilters({...filters, maxSize: e.target.value})}
                className="bg-white/10 border-white/20 text-white placeholder-white/50 backdrop-blur-md"
              />
            </div>
          </div>

          {/* Price Range */}
          <div>
            <label className={`block text-white/80 mb-2 text-sm ${
              language === 'AR' ? 'font-arabic' : ''
            }`}>
              {currentContent.filters.price}
            </label>
            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="Min"
                value={filters.minPrice}
                onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
                className="bg-white/10 border-white/20 text-white placeholder-white/50 backdrop-blur-md"
              />
              <Input
                type="number"
                placeholder="Max"
                value={filters.maxPrice}
                onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
                className="bg-white/10 border-white/20 text-white placeholder-white/50 backdrop-blur-md"
              />
            </div>
          </div>

          {/* Features */}
          <div>
            <label className={`block text-white/80 mb-2 text-sm ${
              language === 'AR' ? 'font-arabic' : ''
            }`}>
              {currentContent.filters.features}
            </label>
            <div className="space-y-2">
              <label className="flex items-center text-white/80 text-sm">
                <input
                  type="checkbox"
                  checked={filters.hasOffice}
                  onChange={(e) => setFilters({...filters, hasOffice: e.target.checked})}
                  className="mr-2"
                />
                Office Space
              </label>
              <label className="flex items-center text-white/80 text-sm">
                <input
                  type="checkbox"
                  checked={filters.hasRestroom}
                  onChange={(e) => setFilters({...filters, hasRestroom: e.target.checked})}
                  className="mr-2"
                />
                Restroom
              </label>
              <label className="flex items-center text-white/80 text-sm">
                <input
                  type="checkbox"
                  checked={filters.hasDockDoors}
                  onChange={(e) => setFilters({...filters, hasDockDoors: e.target.checked})}
                  className="mr-2"
                />
                Dock Doors
              </label>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            onClick={() => setFilters({
              status: 'all',
              minSize: '',
              maxSize: '',
              minPrice: '',
              maxPrice: '',
              hasOffice: false,
              hasRestroom: false,
              hasDockDoors: false
            })}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            {currentContent.filters.clear}
          </Button>
        </div>
      </div>

      {/* Interactive Floor Plan */}
      <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/10">
        <h3 className={`text-xl font-semibold text-white mb-4 ${
          language === 'AR' ? 'font-arabic text-right' : ''
        }`}>
          Interactive Floor Plan
        </h3>
        
        <div className="relative">
          <canvas
            ref={canvasRef}
            width={800}
            height={400}
            className="w-full h-auto border border-white/20 rounded-lg cursor-pointer"
            onClick={handleCanvasClick}
          />
          
          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-white/80 text-sm">{currentContent.status.available}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-white/80 text-sm">{currentContent.status.rented}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span className="text-white/80 text-sm">{currentContent.status.reserved}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Units List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUnits.map((unit) => (
          <div
            key={unit.id}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
            onClick={() => handleUnitClick(unit)}
          >
            <div className="flex justify-between items-start mb-4">
              <h4 className={`text-xl font-bold text-white ${
                language === 'AR' ? 'font-arabic' : ''
              }`}>
                Unit {unit.number}
              </h4>
              <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-white text-xs ${getStatusColor(unit.status)}`}>
                {getStatusIcon(unit.status)}
                <span>{currentContent.status[unit.status as keyof typeof currentContent.status]}</span>
              </div>
            </div>

            <div className="space-y-2 text-white/80">
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4 text-yellow-400" />
                <span>{unit.size} sq m</span>
              </div>
              <div className="flex items-center gap-2">
                <RiyalIcon className="h-4 w-4" />
                <span>{unit.price.toLocaleString()}/month</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-yellow-400" />
                <span>{unit.specs.dockDoors} dock doors</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="h-4 w-4 text-yellow-400" />
                <span>{unit.specs.parkingSpaces} parking spaces</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex flex-wrap gap-2">
                {unit.specs.officeSpace && (
                  <span className="px-2 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded">
                    Office
                  </span>
                )}
                {unit.specs.restroom && (
                  <span className="px-2 py-1 bg-blue-400/20 text-blue-400 text-xs rounded">
                    Restroom
                  </span>
                )}
                {unit.utilities.internet && (
                  <span className="px-2 py-1 bg-green-400/20 text-green-400 text-xs rounded">
                    Internet
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Unit Details Modal */}
      {showUnitModal && selectedUnit && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className={`text-2xl font-bold text-white ${language === 'AR' ? 'font-arabic' : ''}`}>
                    Unit {selectedUnit.number}
                  </h3>
                  <p className={`text-white/80 mt-2 ${language === 'AR' ? 'font-arabic' : ''}`}>
                    {selectedUnit.size} sq m • {selectedUnit.price.toLocaleString()} SAR/month
                  </p>
                </div>
                <button
                  onClick={() => setShowUnitModal(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Unit Images */}
                <div>
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                    <img
                      src={selectedUnit.images[currentImageIndex]}
                      alt={`Unit ${selectedUnit.number}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {selectedUnit.images.length > 1 && (
                    <div className="flex gap-2">
                      {selectedUnit.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentImageIndex ? 'bg-yellow-400' : 'bg-white/50 hover:bg-white/80'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Unit Details */}
                <div className="space-y-6">
                  {/* Specifications */}
                  <div>
                    <h4 className={`text-lg font-semibold text-white mb-3 ${
                      language === 'AR' ? 'font-arabic' : ''
                    }`}>
                      {currentContent.unitDetails.specs}
                    </h4>
                    <div className="grid grid-cols-2 gap-3 text-white/80">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-yellow-400" />
                        <span>{currentContent.specs.size}: {selectedUnit.size} sq m</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-400">H:</span>
                        <span>{selectedUnit.specs.ceilingHeight}m</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-400">Load:</span>
                        <span>{selectedUnit.specs.floorLoading} kg/m²</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Truck className="h-4 w-4 text-yellow-400" />
                        <span>{selectedUnit.specs.dockDoors} doors</span>
                      </div>
                    </div>
                  </div>

                  {/* Utilities */}
                  <div>
                    <h4 className={`text-lg font-semibold text-white mb-3 ${
                      language === 'AR' ? 'font-arabic' : ''
                    }`}>
                      {currentContent.unitDetails.utilities}
                    </h4>
                    <div className="grid grid-cols-2 gap-3 text-white/80">
                      {Object.entries(selectedUnit.utilities).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-2">
                          {value ? (
                            <CheckCircle className="h-4 w-4 text-green-400" />
                          ) : (
                            <X className="h-4 w-4 text-red-400" />
                          )}
                          <span>{currentContent.utilities[key as keyof typeof currentContent.utilities]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Security */}
                  <div>
                    <h4 className={`text-lg font-semibold text-white mb-3 ${
                      language === 'AR' ? 'font-arabic' : ''
                    }`}>
                      {currentContent.unitDetails.security}
                    </h4>
                    <div className="grid grid-cols-2 gap-3 text-white/80">
                      {Object.entries(selectedUnit.security).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-2">
                          {value ? (
                            <Shield className="h-4 w-4 text-green-400" />
                          ) : (
                            <X className="h-4 w-4 text-red-400" />
                          )}
                          <span>{currentContent.security[key as keyof typeof currentContent.security]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Lease Terms */}
                  <div>
                    <h4 className={`text-lg font-semibold text-white mb-3 ${
                      language === 'AR' ? 'font-arabic' : ''
                    }`}>
                      {currentContent.unitDetails.lease}
                    </h4>
                    <div className="space-y-2 text-white/80">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-yellow-400" />
                        <span>{currentContent.lease.minPeriod}: {selectedUnit.leaseTerms.minLeasePeriod} months</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <RiyalIcon className="h-4 w-4" />
                         <span>{currentContent.lease.deposit}: {selectedUnit.leaseTerms.depositRequired.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-400">•</span>
                        <span>{selectedUnit.leaseTerms.paymentTerms}</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Button */}
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                    {currentContent.unitDetails.contact}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UnitExplorer;

