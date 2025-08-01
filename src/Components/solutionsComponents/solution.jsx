import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  CheckCircle,
  Play,
  DollarSign,
  Zap,
  TrendingUp,
  Globe,
  Shield,
  Users,
  Award,
  Clock,
  Star
} from 'lucide-react';

const SolutionsPage = ({ setCurrentPage }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const solutions = [
    {
      title: "E-KYC Verification",
      description: "Streamlined customer verification with AI-powered document processing and biometric authentication for African markets.",
      icon: <Shield className="w-6 h-6" />,
      features: ["AI Document Analysis", "Biometric Verification", "Real-time Processing", "Regulatory Compliance"],
      stats: { metric: "98.7%", label: "Accuracy Rate" },
      delay: "delay-100"
    },
    {
      title: "Cross-Border Payments",
      description: "Seamless international transactions with competitive exchange rates and instant settlement across 15+ African countries.",
      icon: <Globe className="w-6 h-6" />,
      features: ["Multi-Currency Support", "Real-time Exchange", "Instant Settlement", "Low Transaction Fees"],
      stats: { metric: "15+", label: "Countries" },
      delay: "delay-200"
    },
    {
      title: "Card Enterprise",
      description: "Complete card management and processing solutions with advanced analytics and fraud detection capabilities.",
      icon: <DollarSign className="w-6 h-6" />,
      features: ["Virtual & Physical Cards", "Spending Controls", "Real-time Analytics", "API Integration"],
      stats: { metric: "500K+", label: "Cards Issued" },
      delay: "delay-300"
    },
    {
      title: "Bulk Airtime Purchase",
      description: "Automated airtime distribution with real-time inventory management and multi-operator support.",
      icon: <Zap className="w-6 h-6" />,
      features: ["Multi-Network Support", "Bulk Processing", "Inventory Management", "API Integration"],
      stats: { metric: "99.9%", label: "Success Rate" },
      delay: "delay-400"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Advanced Analytics",
      description: "Real-time insights and comprehensive reporting dashboards"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "24/7 Support",
      description: "Dedicated African support team in your timezone"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Enterprise Grade",
      description: "Bank-level security with 99.9% uptime guarantee"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Rapid Integration",
      description: "Deploy in days with our developer-friendly APIs"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="pt-24 pb-20 lg:pt-32 lg:pb-32 bg-cover bg-center relative"
        style={{ backgroundImage: `url('/banner/img-2.jpg')` }}
      >
        {/* Dimmed overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          <div
            className={`text-center transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } text-white`}
          >
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-8 text-white">
              <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
              Complete Fintech Solutions
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-[0.95] tracking-tight text-white">
              Built for
              <span className="block text-amber-400 font-light italic mt-2">Africa's Future</span>
            </h1>

            <p className="text-lg lg:text-xl text-white/90 mb-16 leading-relaxed max-w-3xl mx-auto font-light">
              Comprehensive fintech infrastructure designed to power African businesses with cutting-edge technology and local expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Added spacing between hero and solutions */}
      <div className="py-16 lg:py-20"></div>

      {/* Solutions Grid */}
      <section className="pb-20 lg:pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 ease-out ${solution.delay} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 hover:border-slate-300 hover:shadow-lg transition-all duration-500 h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center">
                      <div className="bg-slate-100 w-12 h-12 rounded-2xl flex items-center justify-center mr-4 text-slate-700 group-hover:bg-amber-100 group-hover:text-amber-600 transition-all duration-300">
                        {solution.icon}
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-1">
                          {solution.title}
                        </h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-amber-500">{solution.stats.metric}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{solution.stats.label}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-amber-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="text-slate-900 font-medium hover:text-amber-600 transition-colors flex items-center group/btn">
                    Learn More 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ease-out delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Why Choose Our Platform
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Built with African businesses in mind, our platform delivers world-class technology with local expertise.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`text-center group transition-all duration-700 ease-out delay-${600 + index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 text-slate-600 group-hover:bg-amber-100 group-hover:text-amber-600 transition-all duration-300 shadow-sm border border-slate-200">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className={`text-center transition-all duration-1000 ease-out delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of African businesses already using our platform to scale their operations and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
              <button
                onClick={() => setCurrentPage && setCurrentPage('contact')}
                className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-8 py-4 rounded-2xl font-semibold shadow-sm flex items-center justify-center group transition-all duration-300 hover:shadow-md hover:scale-[1.02] w-full sm:w-auto"
              >
                Get Started Today
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setCurrentPage && setCurrentPage('demo')}
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-2xl font-medium hover:bg-slate-50 hover:border-slate-400 flex items-center justify-center group transition-all duration-300 w-full sm:w-auto"
              >
                <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="pb-20 lg:pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className={`flex items-center justify-center space-x-12 lg:space-x-16 transition-all duration-1000 ease-out delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-amber-500 mb-2">500K+</div>
              <div className="text-slate-500 text-sm uppercase tracking-wide">Daily Transactions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-amber-500 mb-2">15+</div>
              <div className="text-slate-500 text-sm uppercase tracking-wide">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-amber-500 mb-2">99.9%</div>
              <div className="text-slate-500 text-sm uppercase tracking-wide">Uptime</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;