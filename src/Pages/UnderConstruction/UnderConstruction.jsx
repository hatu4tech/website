import React, { useState, useEffect } from 'react';

// Floating particles component for subtle visual interest
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-orange-500/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 2}s`
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
    <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 via-transparent to-purple-500/5 animate-pulse" />
    <div className="absolute top-0 left-0 w-full h-full opacity-20">
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
    </div>
  </div>
);

const UnderConstruction = ({ setCurrentPage = () => {} }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-slate-950 text-white">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Floating Particles */}
      <FloatingParticles />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        
        {/* Simple, elegant content */}
        <div className={`transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-8 leading-relaxed tracking-tight">
            <span className="block text-white font-extralight">We'll be</span>
            <span className="block bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent font-light italic pb-2">
              right back
            </span>
          </h1>

          {/* Simple description */}
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-400 font-light mb-16 leading-relaxed max-w-2xl mx-auto">
            We're making improvements to serve you better.
          </p>

          {/* Company name and tagline */}
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-medium text-white mb-2">
              Hatuatech Innovations Limited
            </h2>
            <div className="text-slate-500 text-sm font-light">
              Africa's Leading Fintech Platform
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderConstruction;