import {
  Users,
  Target,
  Award,
  Lightbulb,
  Heart,
  Globe,
  TrendingUp,
  Shield
} from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We continuously push boundaries to create cutting-edge fintech solutions that address real African market needs."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security",
      description: "Trust is paramount. We implement bank-grade security measures to protect every transaction and user interaction."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Impact",
      description: "Every solution we build is designed to create meaningful positive change in African communities and businesses."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Partnership",
      description: "We believe in collaborative growth, working closely with our clients to achieve shared success."
    }
  ];

  const stats = [
    { number: "500+", label: "Businesses Served" },
    { number: "1M+", label: "Transactions Processed" },
    { number: "15+", label: "Countries Reached" },
    { number: "99.9%", label: "Uptime Guarantee" }
  ];

  const team = [
    {
      name: "Sarah Mwanza",
      role: "Chief Executive Officer",
      description: "10+ years in fintech leadership across Africa"
    },
    {
      name: "David Banda",
      role: "Chief Technology Officer",
      description: "Expert in payment systems and blockchain technology"
    },
    {
      name: "Grace Tembo",
      role: "Head of Operations",
      description: "Specialist in African market compliance and regulations"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About Hatua Tech
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We're building the financial infrastructure that powers African innovation. 
            Our mission is to democratize access to financial services across the continent.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-gradient-to-br from-blue-50 to-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded in 2020 in Lusaka, Zambia, Hatua Tech emerged from a simple observation: 
                African businesses needed financial technology that understood their unique challenges 
                and opportunities.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our founders, having worked across various African markets, recognized the gap between 
                global fintech solutions and local needs. We set out to build technology that bridges 
                this divide, creating tools that are both world-class and locally relevant.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Today, we're proud to serve hundreds of businesses across Africa, processing millions 
                of transactions and contributing to the continent's digital transformation journey.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <Target className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  To empower African businesses with world-class financial technology that drives 
                  growth, inclusion, and prosperity across the continent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Values</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we build relationships 
              with our clients and communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-700 group-hover:bg-blue-100 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Leadership Team</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Meet the experienced professionals driving Hatua Tech's vision forward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-slate-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-12 text-center text-white">
            <Globe className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              To become Africa's leading fintech infrastructure provider, enabling seamless 
              financial services that connect businesses, communities, and opportunities 
              across the continent and beyond.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <TrendingUp className="w-6 h-6" />
              <span className="text-lg font-medium">Building the future of African finance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;