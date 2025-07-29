import { DollarSign, Zap, TrendingUp, Globe, CheckCircle } from 'lucide-react';

const SolutionsPage = () => {
  const solutions = [
    {
      title: "E-KYC verification solution",
      description: "Complete banking solutions designed for African markets",
      features: ["Account Management", "Transaction Processing", "Compliance Tools", "Multi-Currency Support"],
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: " Cross border payment gateways",
      description: "Secure and fast payment solutions for all business types",
      features: ["Real-time Processing", "Mobile Money Integration", "Card Payments", "Fraud Protection"],
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Card Enterprise",
      description: "Powerful insights and reporting for better business decisions",
      features: ["Real-time Reports", "Custom Dashboards", "Predictive Analytics", "Export Tools"],
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Bulk purchase of Airtime",
      description: "Seamless integration with existing systems and platforms",
      features: ["RESTful APIs", "Webhooks", "SDK Support", "Documentation"],
      icon: <Globe className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Solutions</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive fintech infrastructure designed to power African businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 text-blue-700">
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
      </div>
    </div>
  );
};

export default SolutionsPage;