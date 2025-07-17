import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, TrendingUp, Users, Globe, ArrowRight, Mail, Phone, MapPin, Menu, X, Zap, DollarSign } from 'lucide-react';

export default function HatuaTechWebsite() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Banking Infrastructure",
      description: "Modern banking solutions built for African businesses"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Financial Analytics",
      description: "Real-time insights and reporting for data-driven decisions"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Payments",
      description: "Advanced security and fraud protection for all transactions"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "API Integration",
      description: "Seamless integration with existing financial systems"
    }
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center z-50">
        <div className="text-center text-white">
          <div className="text-5xl font-bold mb-6 animate-pulse text-orange-400">
            HatuaTech
          </div>
          <div className="text-xl opacity-80 animate-bounce">
            Innovations Limited
          </div>
          <div className="mt-8">
            <div className="w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-40 shadow-sm animate-slide-down">
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900">
              HatuaTech
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200 animate-fade-in">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors">Home</a>
                <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">Services</a>
                <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">About</a>
                <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Developing Products for
                <span className="text-orange-500 block">Modern Africa</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Powerful financial infrastructure built for African businesses. 
                Scale your operations with our secure, reliable fintech solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center group">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
            
            <div className="animate-fade-in-up animation-delay-500">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Modern fintech dashboard"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Built for Scale</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade fintech infrastructure designed for the unique needs of African businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-in-up group hover:-translate-y-1 transition-transform duration-300 border border-gray-100"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
                alt="African business professionals"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            <div className="animate-fade-in-up animation-delay-500">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Empowering African Finance</h2>
              <p className="text-lg text-gray-600 mb-6">
                HatuaTech Innovations Limited is redefining financial services across Africa. 
                We combine deep local market knowledge with cutting-edge technology to build 
                solutions that actually work for African businesses.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Based in Lusaka, Zambia, we're committed to driving financial inclusion 
                and economic growth through innovative fintech solutions that scale.
              </p>
              <div className="flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors cursor-pointer">
                <span>Discover our story</span>
                <ChevronRight className="ml-2 w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold text-orange-400 mb-2">99.9%</div>
              <div className="text-xl text-gray-300">Uptime</div>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <div className="text-4xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-xl text-gray-300">Businesses Served</div>
            </div>
            <div className="animate-fade-in-up animation-delay-400">
              <div className="text-4xl font-bold text-orange-400 mb-2">$50M+</div>
              <div className="text-xl text-gray-300">Transactions Processed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600">
              Join hundreds of African businesses already using HatuaTech
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Head Office</h3>
              <p className="text-gray-600">
                Kelvin Siwale Road Plot 2374<br />
                Lusaka, Zambia
              </p>
            </div>

            <div className="text-center animate-fade-in-up animation-delay-200 bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Phone</h3>
              <p className="text-gray-600">+260 769850331</p>
            </div>

            <div className="text-center animate-fade-in-up animation-delay-400 bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Email</h3>
              <p className="text-gray-600">hello@hatuatech.co.zm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400 mb-4">HatuaTech Innovations Limited</div>
            <p className="text-gray-400 mb-4">
              Building the future of African finance
            </p>
            <p className="text-gray-500 text-sm">
              © HatuaTech Innovations Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animate-slide-down {
          animation: slideDown 0.8s ease-out;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        
        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
    </div>
  );
}