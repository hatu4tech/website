// Enhanced About Page Component
import {
  CheckCircle,
  ArrowRight,
  Users,
  Globe,
} from 'lucide-react';

const AboutPage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 font-bold mb-6 leading-tight">
            About{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900 relative z-10">
                HatuaTech
              </span>
              <span className="absolute bg-slate-100 inset-0 rounded-lg -m-1 z-0 opacity-50"></span>
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Building the future of African finance with innovative technology solutions
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-slate-700" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
              </div>
            </div>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At HatuaTech, we're on a mission to democratize financial services across Africa. 
              We believe every business, regardless of size, should have access to world-class 
              financial infrastructure.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Founded in Zambia, our team combines deep local expertise with global technology 
              standards to deliver solutions that actually work for African businesses.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "21+ years of experience in African markets",
                "Serving 12 countries across the continent", 
                "24/7 local support and representation",
                "Regulated and compliant service provider"
              ].map((item, i) => (
                <div key={i} className="flex items-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200">
                  <CheckCircle className="w-5 h-5 text-slate-700 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setCurrentPage('contact')}
              className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors duration-200 group"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-200 to-slate-300 rounded-xl transform rotate-3"></div>
            <img 
              src="./banner/img-6.jpg"
              alt="HatuaTech team"
              className="relative w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="py-20 bg-slate-50 -mx-6 px-6 rounded-2xl mb-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-slate-700" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Our Values</h2>
            </div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation First",
                description: "We push the boundaries of what's possible in African fintech, always staying ahead of the curve."
              },
              {
                title: "Local Expertise",
                description: "Deep understanding of African markets, regulations, and business needs drives our solutions."
              },
              {
                title: "Trust & Security",
                description: "We build with security at the core, ensuring your financial data is always protected."
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses across Africa who trust HatuaTech for their financial infrastructure needs.
          </p>
          <button 
            onClick={() => setCurrentPage('solutions')}
            className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors duration-200 group"
          >
            Explore Our Solutions
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;