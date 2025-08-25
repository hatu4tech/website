import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  Play,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  Users,
  Lock
} from 'lucide-react';

// Floating particles component for visual interest
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-orange-500/30 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  );
};

// Animated gradient background
const AnimatedBackground = () => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
    <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-purple-500/10 animate-pulse" />
    <div className="absolute top-0 left-0 w-full h-full opacity-30">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  </div>
);

// Enhanced Image Carousel with better transitions
const ImageCarousel = ({ currentImageIndex, images }) => (
  <div className="absolute inset-0 z-0">
    {images.map((image, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
          index === currentImageIndex 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-105'
        }`}
      >
        <img
          src={image.url}
          alt={image.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/80" />
      </div>
    ))}
  </div>
);

// Animated statistics counter
const AnimatedCounter = ({ end, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    const timer = setTimeout(() => {
      animate();
    }, 500);
    
    return () => clearTimeout(timer);
  }, [end, duration]);

  return (
    <div className="text-center group">
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors duration-300">
        {count}{end >= 1000 ? 'K+' : end >= 100 ? '+' : ''}
      </div>
      <div className="text-slate-400 text-sm md:text-base font-medium">{label}</div>
    </div>
  );
};

const Banner = ({ setCurrentPage = () => {} }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      url: "/banner/img-4.jpg",
      alt: "African professionals using fintech solutions"
    },
    {
      url: "/banner/img-7.jpg", 
      alt: "Modern banking technology"
    },
    {
      url: "/banner/img-9.jpg",
      alt: "Financial dashboard analytics"
    },
    {
      url: "/banner/img-3.jpg",
      alt: "Professional business meeting"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative h-screen w-full overflow-hidden flex items-center bg-slate-950 text-white"
    >
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Background Image Carousel */}
      <ImageCarousel currentImageIndex={currentImageIndex} images={images} />
      
      {/* Floating Particles */}
      <FloatingParticles />

      {/* Main Content - Fixed positioning with proper spacing to avoid navigation overlap */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        {/* Updated padding to ensure content is not hidden behind navigation bar */}
        <div className="flex items-center justify-center lg:justify-start min-h-screen pt-24 sm:pt-28 md:pt-32 lg:pt-40 xl:pt-44 pb-16 sm:pb-20 lg:pb-24">
          
          {/* Hero Content */}
          <div className={`text-center lg:text-left max-w-4xl xl:max-w-5xl transition-all duration-1500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}>
            
            {/* Animated Badge */}
            <div className={`inline-flex items-center bg-gradient-to-r from-orange-500/20 to-purple-500/20 backdrop-blur-md border border-orange-500/30 px-6 py-3 rounded-full text-sm font-semibold mb-6 lg:mb-8 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <div className="relative mr-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-orange-500/50 rounded-full animate-ping"></div>
              </div>
              <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                Africa's Leading Fintech Platform
              </span>
            </div>

            {/* Main Heading with Staggered Animation - Reduced sizes for better fit in viewport */}
            <div className="mb-4 lg:mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-8xl font-bold mb-3 lg:mb-4 leading-[0.9] tracking-tight">
                <span className={`block text-white mb-1 lg:mb-2 transition-all duration-700 delay-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  Financial
                </span>
                <span className={`block text-white mb-1 lg:mb-2 transition-all duration-700 delay-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  Infrastructure
                </span>
                <span className={`block bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent font-light italic transition-all duration-700 delay-900 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  Built for Africa
                </span>
              </h1>
            </div>

            {/* Enhanced Subheading - Reduced font size for better fit */}
            <p className={`text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl mb-4 lg:mb-6 leading-relaxed text-slate-300 font-light max-w-2xl lg:max-w-3xl mx-auto lg:mx-0 transition-all duration-700 delay-1100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="block md:hidden">Secure digital payments for African businesses</span>
              <span className="hidden md:block">Empowering African businesses with secure, scalable digital solutions.</span>
            </p>

            {/* Enhanced CTA Section */}
            <div className={`flex flex-col md:flex-row gap-3 lg:gap-4 mb-4 lg:mb-6 items-center justify-center lg:justify-start max-w-lg md:max-w-none mx-auto lg:mx-0 transition-all duration-700 delay-1300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <button
                onClick={() => setCurrentPage('contact')}
                className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-orange-500/25 w-full md:w-auto min-w-[180px] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative flex items-center justify-center">
                  Start Building
                  <span className="hidden sm:inline ml-1">Today</span>
                  <ArrowRight className="ml-2 lg:ml-3 w-4 lg:w-5 h-4 lg:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={() => setCurrentPage('solutions')}
                className="group border-2 border-slate-600 hover:border-orange-500 text-slate-200 hover:text-orange-400 px-6 lg:px-8 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-medium backdrop-blur-sm transition-all duration-300 hover:bg-orange-500/10 w-full md:w-auto min-w-[180px]"
              >
                <span className="flex items-center justify-center">
                  <Play className="mr-2 lg:mr-3 w-4 lg:w-5 h-4 lg:h-5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">Explore&nbsp;</span>Solutions
                </span>
              </button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className={`flex items-center justify-center lg:justify-start space-x-6 lg:space-x-8 mb-6 lg:mb-8 transition-all duration-700 delay-1500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="text-slate-400 text-xs lg:text-sm text-center lg:text-left">
                <span className="text-slate-200 font-semibold text-base lg:text-lg">500K+</span>
                <br />
                <span className="hidden sm:inline">Daily </span>Transactions
              </div>
              <div className="text-slate-400 text-xs lg:text-sm text-center lg:text-left">
                <span className="text-slate-200 font-semibold text-base lg:text-lg">12</span>
                <br />Countries
              </div>
              <div className="text-slate-400 text-xs lg:text-sm text-center lg:text-left">
                <span className="text-slate-200 font-semibold text-base lg:text-lg">99.9%</span>
                <br />Uptime
              </div>
            </div>

            {/* Feature Icons */}
            {/* <div className={`flex items-center justify-center lg:justify-start space-x-6 lg:space-x-8 transition-all duration-700 delay-1700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="group flex flex-col items-center">
                <div className="bg-orange-500/20 p-3 lg:p-4 rounded-2xl mb-2 group-hover:bg-orange-500/30 transition-colors duration-300">
                  <Shield className="w-6 lg:w-8 h-6 lg:h-8 text-orange-400" />
                </div>
                <span className="text-xs lg:text-sm text-slate-400 group-hover:text-orange-400 transition-colors duration-300">Secure</span>
              </div>
              
              <div className="group flex flex-col items-center">
                <div className="bg-orange-500/20 p-3 lg:p-4 rounded-2xl mb-2 group-hover:bg-orange-500/30 transition-colors duration-300">
                  <Zap className="w-6 lg:w-8 h-6 lg:h-8 text-orange-400" />
                </div>
                <span className="text-xs lg:text-sm text-slate-400 group-hover:text-orange-400 transition-colors duration-300">Fast</span>
              </div>
              
              <div className="group flex flex-col items-center">
                <div className="bg-orange-500/20 p-3 lg:p-4 rounded-2xl mb-2 group-hover:bg-orange-500/30 transition-colors duration-300">
                  <Globe className="w-6 lg:w-8 h-6 lg:h-8 text-orange-400" />
                </div>
                <span className="text-xs lg:text-sm text-slate-400 group-hover:text-orange-400 transition-colors duration-300">Global</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Enhanced Carousel Navigation */}
      <div className="hidden xl:block absolute left-6 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={() => setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1)}
          className="group bg-slate-900/60 hover:bg-orange-500/80 backdrop-blur-xl border border-slate-700/50 hover:border-orange-500/50 p-4 rounded-2xl transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-slate-300 group-hover:text-white" />
        </button>
      </div>
      
      <div className="hidden xl:block absolute right-6 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}
          className="group bg-slate-900/60 hover:bg-orange-500/80 backdrop-blur-xl border border-slate-700/50 hover:border-orange-500/50 p-4 rounded-2xl transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-white" />
        </button>
      </div>

      {/* Enhanced Carousel Indicators */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-20">
        <div className="flex space-x-4 bg-slate-900/60 backdrop-blur-xl px-6 py-3 rounded-full">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-orange-500 scale-125 shadow-lg shadow-orange-500/50' 
                  : 'bg-slate-600 hover:bg-slate-500 hover:scale-110'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2 group cursor-pointer">
          <span className="text-slate-400 text-xs uppercase tracking-widest group-hover:text-orange-400 transition-colors duration-300">
            Discover More
          </span>
          <div className="relative">
            <ArrowDown className="w-5 h-5 text-slate-400 group-hover:text-orange-400 animate-bounce transition-colors duration-300" />
            <ArrowDown className="absolute inset-0 w-5 h-5 text-orange-500/50 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;