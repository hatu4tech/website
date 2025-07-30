import {
  Zap,
  Globe,
  Shield,
  Users,
 
} from 'lucide-react';

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

export default FeaturesSection;