import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ArrowDown,
  CheckCircle,
  DollarSign,
  Shield,
  Star,
  TrendingUp,
  Zap,
  ChevronLeft,
  ChevronRight,
  Play 
} 
from 'lucide-react';

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
        <div className="absolute inset-0 bg-slate-900/60" />
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
      url: "./banner/img-1.jpg",
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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Carousel */}
      <ImageCarousel currentImageIndex={currentImageIndex} images={images} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`text-white max-w-2xl transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* <div className="inline-flex items-center bg-orange-600/30 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-orange-300">
              <Star className="w-4 h-4 mr-2" />
              21+ Years of Financial Innovation
            </div> */}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Financial Infrastructure{' '}
              <span className="text-orange-400">Built for Africa</span>
            </h1>

            <p className="text-lg md:text-xl mb-8 leading-relaxed text-white/90">
              HatuaTech provides digital payments, collections and financial solutions to help African businesses 
              boost cash flow, process payments securely, and thrive in a digital economy.
            </p>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-4 mb-8">
              {['Real-Time Processing', 'Multi-Currency Support', '24/7 Support'].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/10 px-4 py-2 rounded-full border border-white/20"
                >
                  <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                  <span className="text-sm font-medium text-white">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-md font-medium transition-colors flex items-center justify-center group"
              >
                Start Building Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setCurrentPage('solutions')}
                className="border-2 border-white/40 text-white px-8 py-4 rounded-md font-medium hover:bg-white/10 transition-all flex items-center justify-center group"
              >
                <Play className="mr-2 w-5 h-5" />
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        onClick={() =>
          setCurrentImageIndex(
            currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
          )
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 rounded-full z-10"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() =>
          setCurrentImageIndex(
            currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
          )
        }
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 rounded-full z-10"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  );
};

export default Banner;
