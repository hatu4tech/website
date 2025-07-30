import {
  Shield,
  Zap,
  CreditCard,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Users,
  Globe,
  Lock,
  TrendingUp
} from 'lucide-react';

const SolutionsPage = () => {
  const solutions = [
    {
      title: "E-KYC Verification Solution",
      description: "Advanced identity verification system designed for African markets with support for local ID formats and biometric authentication.",
      features: ["Biometric Authentication", "Document Verification", "Real-time Processing", "Compliance Ready"],
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-700"
    },
    {
      title: "Cross Border Payment Gateways",
      description: "Secure and fast payment solutions connecting African businesses to global markets with competitive exchange rates.",
      features: ["Multi-Currency Support", "Real-time Settlement", "Low Transaction Fees", "API Integration"],
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-700"
    },
    {
      title: "Card Enterprise Solutions",
      description: "Comprehensive card management platform with advanced analytics, fraud detection, and enterprise-grade security features.",
      features: ["Card Issuance", "Fraud Detection", "Real-time Analytics", "Custom Dashboards"],
      icon: <CreditCard className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-700"
    },
    {
      title: "Bulk Airtime Purchase",
      description: "Streamlined bulk airtime distribution system with automated reconciliation and multi-operator support across Africa.",
      features: ["Multi-Operator Support", "Automated Distribution", "Real-time Reconciliation", "Volume Discounts"],
      icon: <Smartphone className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-700"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Process transactions in milliseconds with 99.9% uptime"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Bank-Grade Security",
      description: "End-to-end encryption with PCI DSS compliance"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Dedicated African support team in your timezone"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalable Growth",
      description: "Infrastructure that grows with your business needs"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Our Solutions
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive fintech infrastructure designed to power African businesses with 
              world-class technology and local market expertise.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 text-center hover:bg-white/90 transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="group relative overflow-hidden">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
              
              {/* Card Content */}
              <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Icon with Gradient Background */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${solution.gradient} rounded-lg blur-lg opacity-30`}></div>
                  <div className={`relative ${solution.iconBg} w-16 h-16 rounded-lg flex items-center justify-center ${solution.iconColor}`}>
                    {solution.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {solution.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
                      <div className={`bg-gradient-to-r ${solution.gradient} p-1 rounded-full mr-3`}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`group/btn w-full bg-gradient-to-r ${solution.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}>
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Integration Section */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Seamless Integration
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            Our solutions integrate effortlessly with your existing systems. Get started in minutes, 
            not months, with our comprehensive APIs and developer-friendly documentation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-blue-300 mb-2">5 min</div>
              <div className="text-white">Integration Setup</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-green-300 mb-2">RESTful</div>
              <div className="text-white">API Architecture</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-purple-300 mb-2">24/7</div>
              <div className="text-white">Developer Support</div>
            </div>
          </div>
          
          <button className="mt-12 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2">
            <span>Start Building Today</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Join hundreds of African businesses already using Hatua Tech solutions to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center space-x-2">
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;