// About Page Component
import {
  CheckCircle,
} 
from 'lucide-react';
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About HatuaTech</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Building the future of African finance with innovative technology solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 mb-6">
              At HatuaTech, we're on a mission to democratize financial services across Africa. 
              We believe every business, regardless of size, should have access to world-class 
              financial infrastructure.
            </p>
            <p className="text-lg text-slate-600 mb-8">
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
            <img 
              src="./banner/img-6.jpg"
              alt="HatuaTech team"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;