import{
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

const SolutionsPage = ({ setCurrentPage }) => {
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

export default SolutionsPage;