import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ArrowDown,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Play,
  Menu,
  X,
  DollarSign,
  Zap,
  TrendingUp,
  Globe,
  Shield,
  Users,
  Award,
  Clock,
  Star,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Navigation = ({ setCurrentPage, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Solutions', id: 'solutions' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="logo.png" alt="HatuaTech Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`text-sm font-medium transition-colors ${
                currentPage === item.id
                  ? 'text-slate-900'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-gradient-to-r from-slate-800 to-slate-900 text-white text-sm px-5 py-2.5 rounded-xl shadow-md hover:from-slate-700 hover:to-slate-800 transition-all"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-slate-700"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-inner">
          <div className="px-6 py-4 space-y-3">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left text-sm font-medium py-2 rounded-md transition-colors ${
                  currentPage === item.id
                    ? 'text-slate-900'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                setCurrentPage('contact');
                setIsMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-slate-800 to-slate-900 text-white text-sm px-4 py-2.5 rounded-xl shadow hover:from-slate-700 hover:to-slate-800 transition-all"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


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
// Banner Component
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
    <section className="relative h-screen w-full overflow-hidden flex items-center bg-slate-950 text-white">
      {/* Background Image Carousel */}
      <ImageCarousel currentImageIndex={currentImageIndex} images={images} />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <div
            className={`max-w-8xl transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Financial Infrastructure{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200 z-10 relative">
                  Built for Africa
                </span>
                <span className="absolute inset-0 -m-1 bg-white/5 rounded-md z-0 shadow-sm"></span>
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-8 leading-relaxed text-white/80 font-light">
              HatuaTech delivers secure digital payment solutions to help African businesses grow and manage cash flow.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8">
                {['Real-Time Processing', 'Multi-Currency Support', '24/7 Support'].map((benefit, i) => (
                    <div
                    key={i}
                    className="flex items-center bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition"
                    >
                    <CheckCircle className="w-4 h-4 text-slate-300 mr-2" />
                    <span>{benefit}</span>
                    </div>
                ))}
            </div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
             <button
                onClick={() => setCurrentPage('contact')}
                className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg flex items-center justify-center group transition-all"
            >
        Start Building Today
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

              <button
                onClick={() => setCurrentPage('solutions')}
                className="border border-white/40 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/10 flex items-center justify-center group backdrop-blur-sm transition"
              >
                <Play className="mr-2 w-5 h-5" />
                View Solutions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Navigation */}
      <button
        onClick={() => setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full z-10 transition"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full z-10 transition"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-white/80" />,
      title: "Bank-Level Security",
      description: "Enterprise-grade security with end-to-end encryption and compliance with international standards."
    },
    {
      icon: <Zap className="w-8 h-8 text-white/80" />,
      title: "Lightning Fast",
      description: "Process transactions in real-time with our optimized infrastructure built for speed."
    },
    {
      icon: <Globe className="w-8 h-8 text-white/80" />,
      title: "Multi-Currency",
      description: "Support for major African currencies with automatic conversion and competitive rates."
    },
    {
      icon: <Users className="w-8 h-8 text-white/80" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support from our team of local financial technology experts."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Why Choose HatuaTech?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Built specifically for African businesses, our platform combines local expertise with global technology standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-200"
            >
              <div className="bg-gradient-to-br from-slate-600 via-slate-500 to-slate-700 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const SolutionsPreview = ({ setCurrentPage }) => {
  const solutions = [
    {
      title: "E-KYC Verification",
      description: "Streamlined customer verification with AI-powered document processing",
      icon: <Shield className="w-8 h-8 text-white/80" />,
    },
    {
      title: "Cross-Border Payments",
      description: "Seamless international transactions with competitive exchange rates",
      icon: <Globe className="w-8 h-8 text-white/80" />,
    },
    {
      title: "Card Enterprise",
      description: "Complete card management and processing solutions for businesses",
      icon: <DollarSign className="w-8 h-8 text-white/80" />,
    },
    {
      title: "Bulk Airtime Purchase",
      description: "Automated airtime distribution with real-time inventory management",
      icon: <Zap className="w-8 h-8 text-white/80" />,
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Our Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive fintech infrastructure designed to power African businesses of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-slate-200 hover:border-slate-300"
            >
              <div className="bg-gradient-to-br from-slate-600 via-slate-500 to-slate-700 w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                {solution.icon}
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">{solution.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{solution.description}</p>
              <button className="text-slate-700 font-medium hover:text-slate-900 transition-colors flex items-center">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setCurrentPage('solutions')}
            className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-md"
          >
            View All Solutions
          </button>
        </div>
      </div>
    </section>
  );
};


// Stats Section
const StatsSection = () => {
  const stats = [
    { number: "21+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "8", label: "Countries Served", icon: <Globe className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Clock className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Trusted by Businesses Across Africa
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Our platform powers financial transactions for thousands of businesses across the continent.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-400">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "HatuaTech transformed our payment processing. We've seen a 40% increase in successful transactions.",
      author: "Sarah Mwangi",
      position: "CEO, TechStart Kenya",
      rating: 5
    },
    {
      quote: "The multi-currency support has been game-changing for our cross-border operations.",
      author: "David Okafor",
      position: "Finance Director, Lagos Trading Co.",
      rating: 5
    },
    {
      quote: "Outstanding support team and reliable infrastructure. Highly recommended for any fintech needs.",
      author: "Amina Hassan",
      position: "CTO, Zambian Innovations",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from businesses that have transformed their operations with HatuaTech.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-700 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-semibold text-slate-900">{testimonial.author}</div>
                <div className="text-sm text-slate-600">{testimonial.position}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = ({ setCurrentPage }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-blue-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg text-white/90 mb-8 leading-relaxed">
          Join thousands of African businesses that trust HatuaTech for their financial infrastructure needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-white text-orange-600 px-8 py-4 rounded-lg font-medium hover:bg-slate-50 transition-colors shadow-lg"
          >
            Get Started Today
          </button>
          <button
            onClick={() => setCurrentPage('solutions')}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors"
          >
            Explore Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-bold">HatuaTech</span>
            </div>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Building the future of African finance with innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><button onClick={() => setCurrentPage('solutions')} className="text-slate-400 hover:text-orange-400 transition-colors">E-KYC Verification</button></li>
              <li><button onClick={() => setCurrentPage('solutions')} className="text-slate-400 hover:text-orange-400 transition-colors">Cross-Border Payments</button></li>
              <li><button onClick={() => setCurrentPage('solutions')} className="text-slate-400 hover:text-orange-400 transition-colors">Card Enterprise</button></li>
              <li><button onClick={() => setCurrentPage('solutions')} className="text-slate-400 hover:text-orange-400 transition-colors">Bulk Airtime Purchase</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><button onClick={() => setCurrentPage('about')} className="text-slate-400 hover:text-orange-400 transition-colors">About Us</button></li>
              <li><button onClick={() => setCurrentPage('careers')} className="text-slate-400 hover:text-orange-400 transition-colors">Careers</button></li>
              <li><button onClick={() => setCurrentPage('blog')} className="text-slate-400 hover:text-orange-400 transition-colors">Blog</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="text-slate-400 hover:text-orange-400 transition-colors">Contact</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center text-slate-400">
                <Mail className="w-4 h-4 mr-3" />
                <span>info@hatuatech.com</span>
              </div>
              <div className="flex items-center text-slate-400">
                <Phone className="w-4 h-4 mr-3" />
                <span>+260 XXX XXX XXX</span>
              </div>
              <div className="flex items-center text-slate-400">
                <MapPin className="w-4 h-4 mr-3" />
                <span>Lusaka, Zambia</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} HatuaTech Innovations Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const HatuaTechHomepage = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Navigation setCurrentPage={setCurrentPage} currentPage={currentPage} />
      
      {currentPage === 'home' && (
        <>
          <Banner setCurrentPage={setCurrentPage} />
          <FeaturesSection />
          <SolutionsPreview setCurrentPage={setCurrentPage} />
          <StatsSection />
          <TestimonialsSection />
          <CTASection setCurrentPage={setCurrentPage} />
        </>
      )}
      
      {currentPage === 'solutions' && (
        <div className="pt-24 min-h-screen">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Solutions</h1>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive fintech infrastructure designed to power African businesses of all sizes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  title: "E-KYC Verification Solution",
                  description: "Complete customer verification with AI-powered document processing and biometric authentication",
                  features: ["Document Verification", "Biometric Authentication", "Real-time Processing", "Compliance Ready"],
                  icon: <Shield className="w-8 h-8" />
                },
                {
                  title: "Cross-Border Payment Gateways",
                  description: "Seamless international transactions with competitive rates and multi-currency support",
                  features: ["Multi-Currency Support", "Real-time Exchange Rates", "Low Transaction Fees", "Global Reach"],
                  icon: <Globe className="w-8 h-8" />
                },
                {
                  title: "Card Enterprise Solutions",
                  description: "Complete card management and processing platform for businesses of all sizes",
                  features: ["Card Issuance", "Transaction Processing", "Real-time Monitoring", "Fraud Detection"],
                  icon: <DollarSign className="w-8 h-8" />
                },
                {
                  title: "Bulk Airtime Purchase",
                  description: "Automated airtime distribution with real-time inventory management and reporting",
                  features: ["Bulk Operations", "Real-time Inventory", "Multi-operator Support", "Automated Reports"],
                  icon: <Zap className="w-8 h-8" />
                }
              ].map((solution, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-orange-500 to-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 text-white">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">{solution.title}</h3>
                  <p className="text-slate-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-md"
              >
                Get Started with Our Solutions
              </button>
            </div>
          </div>
        </div>
      )}
      
      {currentPage === 'about' && (
        <div className="pt-24 min-h-screen">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About HatuaTech</h1>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Building the future of African finance with innovative technology solutions
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  At HatuaTech, we're on a mission to democratize financial services across Africa. 
                  We believe every business, regardless of size, should have access to world-class 
                  financial infrastructure.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Founded in Zambia, our team combines deep local expertise with global technology 
                  standards to deliver solutions that actually work for African businesses.
                </p>
                <div className="space-y-4">
                  {[
                    "21+ years of experience in African markets",
                    "Serving 8 countries across the continent", 
                    "24/7 local support and representation",
                    "Regulated and compliant service provider"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="w-full h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl shadow-lg flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <Users className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg">Team Image Placeholder</p>
                    <p className="text-sm">HatuaTech Leadership Team</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-md"
              >
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      )}
      
      {currentPage === 'contact' && (
        <div className="pt-24 min-h-screen bg-slate-50">
          <div className="max-w-4xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Contact Us</h1>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Ready to transform your business? Get in touch with our team of experts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-orange-100 p-3 rounded-lg mr-4">
                      <Mail className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Email</h3>
                      <p className="text-slate-600">info@hatuatech.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Phone</h3>
                      <p className="text-slate-600">+260 XXX XXX XXX</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Location</h3>
                      <p className="text-slate-600">Lusaka, Zambia</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                    <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea rows="4" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-md">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default HatuaTechHomepage;