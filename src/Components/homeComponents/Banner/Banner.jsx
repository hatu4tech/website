import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  Play,
  Shield,
  Zap,
  Globe
} from 'lucide-react';

// Image Carousel used as background
const ImageCarousel = ({ currentImageIndex, images }) => (
  <div className="absolute inset-0 z-0">
    {images.map((image, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          index === currentImageIndex ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={image.url}
          alt={image.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>
    ))}
  </div>
);

const Banner = ({ setCurrentPage }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

 const images = [
     {
      url: "./banner/img-4.jpg",
      alt: "African professionals using fintech solutions"
    },
    {
      url: "./banner/img-7.jpg",
      alt: "Modern banking technology"
    },
    {
      url: "./banner/img-9.jpg",
      alt: "Financial dashboard analytics"
    },
    {
      url: "./banner/img-3.jpg",
      alt: "Professional business meeting"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center bg-slate-950 text-white">
      {/* Background Image Carousel */}
      <ImageCarousel currentImageIndex={currentImageIndex} images={images} />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="flex items-center justify-center lg:justify-start min-h-screen py-16 sm:py-20 lg:py-24 xl:py-32">
          {/* Main Content */}
          <div className={`text-center lg:text-left max-w-4xl xl:max-w-5xl transition-all duration-1200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Badge - Hidden on mobile */}
            <div className="hidden sm:inline-flex items-center bg-slate-800/80 border border-slate-700/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-2 text-slate-200">
              <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 animate-pulse"></div>
              Leading African Fintech Platform
            </div>

            {/* Main Heading - Better responsive sizing */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-[0.9] tracking-tight">
              <span className="block text-white mb-1 lg:mb-2">Financial</span>
              <span className="block text-white mb-1 lg:mb-2">Infrastructure</span>
              <span className="block text-amber-400 font-light italic">Built for Africa</span>
            </h1>

            {/* Subheading - Better responsive text */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 lg:mb-8 leading-relaxed text-slate-300 font-light max-w-2xl lg:max-w-3xl mx-auto lg:mx-0">
              <span className="block md:hidden">Secure digital payments for African businesses</span>
              <span className="hidden md:block">Empowering African businesses with secure, scalable digital payment solutions.</span>
            </p>

            {/* CTA Section - Improved centering for all devices */}
            <div className="flex flex-col md:flex-row gap-3 lg:gap-4 mb-6 lg:mb-8 items-center justify-center lg:justify-start max-w-lg md:max-w-none mx-auto lg:mx-0">
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-amber-400 hover:bg-amber-300 text-slate-900 px-6 lg:px-8 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-semibold shadow-xl flex items-center justify-center group transition-all duration-300 hover:shadow-2xl hover:scale-105 w-full md:w-auto min-w-[180px]"
              >
                Start Building
                <span className="hidden sm:inline ml-1">Today</span>
                <ArrowRight className="ml-2 lg:ml-3 w-4 lg:w-5 h-4 lg:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setCurrentPage('solutions')}
                className="border-2 border-slate-600 text-slate-200 px-6 lg:px-8 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-medium hover:bg-slate-800/50 hover:border-slate-500 flex items-center justify-center group backdrop-blur-sm transition-all duration-300 w-full md:w-auto min-w-[180px]"
              >
                <Play className="mr-2 lg:mr-3 w-4 lg:w-5 h-4 lg:h-5 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Explore&nbsp;</span>Solutions
              </button>
            </div>

            {/* Trust Indicators - Simplified for mobile */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 lg:space-x-8">
              <div className="text-slate-400 text-xs lg:text-sm text-center lg:text-left">
                <span className="text-slate-200 font-semibold text-base lg:text-lg">500K+</span>
                <br />
                <span className="hidden sm:inline">Daily </span>Transactions
              </div>
              <div className="text-slate-400 text-xs lg:text-sm text-center lg:text-left">
                <span className="text-slate-200 font-semibold text-base lg:text-lg">15+</span>
                <br />Countries
              </div>
              <div className="text-slate-400 text-xs lg:text-sm text-center lg:text-left">
                <span className="text-slate-200 font-semibold text-base lg:text-lg">99.9%</span>
                <br />Uptime
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Navigation - Positioned to avoid content obstruction */}
      {/* Left Arrow - Positioned at extreme left edge */}
      <div className="hidden xl:block absolute left-2 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={() => setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1)}
          className="bg-slate-800/60 hover:bg-slate-700/80 backdrop-blur-md border border-slate-600/30 p-3 rounded-xl transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5 text-slate-200" />
        </button>
      </div>
      
      {/* Right Arrow - Positioned at extreme right edge */}
      <div className="hidden xl:block absolute right-2 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}
          className="bg-slate-800/60 hover:bg-slate-700/80 backdrop-blur-md border border-slate-600/30 p-3 rounded-xl transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-5 h-5 text-slate-200" />
        </button>
      </div>

      {/* Alternative Arrow Navigation for Medium-Large screens - Top positioned to avoid content */}
      <div className="hidden lg:flex xl:hidden absolute top-6 right-6 z-20 space-x-2">
        <button
          onClick={() => setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1)}
          className="bg-slate-800/60 hover:bg-slate-700/80 backdrop-blur-md border border-slate-600/30 p-2 rounded-lg transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-4 h-4 text-slate-200" />
        </button>
        <button
          onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}
          className="bg-slate-800/60 hover:bg-slate-700/80 backdrop-blur-md border border-slate-600/30 p-2 rounded-lg transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-4 h-4 text-slate-200" />
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-16 sm:bottom-20 lg:bottom-24 left-1/2 -translate-x-1/2 z-20">
        <div className="flex space-x-2 lg:space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 lg:w-3 h-2 lg:h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-amber-400 scale-110' 
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator - Subtle animation */}
      <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-1 lg:space-y-2 animate-pulse">
          <span className="text-slate-400 text-xs uppercase tracking-wide">Scroll</span>
          <ArrowDown className="w-4 lg:w-5 h-4 lg:h-5 text-slate-400" />
        </div>
      </div>
    </section>
  );
};

export default Banner;