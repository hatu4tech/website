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
      url: "./banner/img-1.jpg",
      alt: "Financial dashboard analytics"
    },
    {
      url: "./banner/img-3.jpg",
      alt: "Professional business meeting"
    }
  ];

  const features = [
    { icon: Zap, text: 'Real-Time Processing' },
    { icon: Globe, text: 'Multi-Currency Support' },
    { icon: Shield, text: '24/7 Support' }
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 items-center gap-16 min-h-screen py-20">
          {/* Left Content */}
          <div className={`transition-all duration-1200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center bg-slate-800/80 border border-slate-700/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8 text-slate-200">
              <div className="w-2 h-2 bg-slate-400 rounded-full mr-3 animate-pulse"></div>
              Leading African Fintech Platform
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[0.9] tracking-tight">
              <span className="block text-white mb-2">Financial</span>
              <span className="block text-white mb-2">Infrastructure</span>
              <span className="block text-slate-300 font-light italic">Built for Africa</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-slate-300 font-light max-w-2xl">
              Empowering African businesses with secure, scalable digital payment solutions.
            </p>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-slate-100 hover:bg-white text-slate-900 px-8 py-4 rounded-2xl font-semibold shadow-xl flex items-center justify-center group transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Start Building Today
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setCurrentPage('solutions')}
                className="border-2 border-slate-600 text-slate-200 px-8 py-4 rounded-2xl font-medium hover:bg-slate-800/50 hover:border-slate-500 flex items-center justify-center group backdrop-blur-sm transition-all duration-300"
              >
                <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                Explore Solutions
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8">
              <div className="text-slate-400 text-sm">
                <span className="text-slate-200 font-semibold text-lg">500K+</span>
                <br />Daily Transactions
              </div>
              <div className="text-slate-400 text-sm">
                <span className="text-slate-200 font-semibold text-lg">15+</span>
                <br />African Countries
              </div>
              <div className="text-slate-400 text-sm">
                <span className="text-slate-200 font-semibold text-lg">99.9%</span>
                <br />Uptime SLA
              </div>
            </div>
          </div>

          {/* Right Content - Feature Highlights */}
          {/* <div className={`transition-all duration-1200 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/30 p-8 rounded-3xl">
              <h3 className="text-slate-300 text-sm uppercase tracking-wide mb-6">Core Features</h3>
              <div className="space-y-6">
                {features.map((feature, i) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={i} className="flex items-center space-x-4">
                      <div className="bg-slate-700/50 p-3 rounded-xl">
                        <IconComponent className="w-6 h-6 text-slate-200" />
                      </div>
                      <span className="text-white font-medium">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-700/30 text-center">
                <div className="text-3xl font-bold text-white mb-2">₦2.4B+</div>
                <p className="text-slate-400 text-sm">Processed This Month</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Carousel Navigation */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={() => setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1)}
          className="bg-slate-800/60 hover:bg-slate-700/80 backdrop-blur-md border border-slate-600/30 p-3 rounded-xl transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5 text-slate-200" />
        </button>
      </div>
      
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}
          className="bg-slate-800/60 hover:bg-slate-700/80 backdrop-blur-md border border-slate-600/30 p-3 rounded-xl transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-5 h-5 text-slate-200" />
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-slate-200 scale-110' 
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-slate-400 text-xs uppercase tracking-wide">Scroll</span>
          <ArrowDown className="w-5 h-5 text-slate-400" />
        </div>
      </div>
    </section>
  );
};

export default Banner;