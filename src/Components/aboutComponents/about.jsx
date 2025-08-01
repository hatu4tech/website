import React, { useState, useEffect } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);

  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "We continuously push boundaries to create cutting-edge fintech solutions that address real African market needs.",
      delay: "delay-100"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security",
      description: "Trust is paramount. We implement bank-grade security measures to protect every transaction and user interaction.",
      delay: "delay-200"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Impact",
      description: "Every solution we build is designed to create meaningful positive change in African communities and businesses.",
      delay: "delay-300"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Partnership",
      description: "We believe in collaborative growth, working closely with our clients to achieve shared success.",
      delay: "delay-400"
    }
  ];

  const stats = [
    { number: "500+", label: "Businesses Served" },
    { number: "1M+", label: "Transactions Processed" },
    { number: "12", label: "Countries Reached" },
    { number: "99.9%", label: "Uptime Guarantee" }
  ];

  const team = [
    {
      name: "Stanley Maina",
      role: "Chief Executive Officer",
      description: "10+ years in fintech leadership across Africa",
      delay: "delay-100",
      type: "leadership"
    },
    {
      name: "Inonge Imasiku", 
      role: " Director, Partnerships and Strategy",
      description: "Expert in partnership development and strategic planning with deep knowledge of African fintech ecosystems",
      delay: "delay-200",
      type: "leadership"
    },
    {
      name: "Chifunilo Phiri",
      role: "Full-Stack Developer",
      description: "Frontend-focused full-stack developer specializing in Flutter and modern UI/UX, with infrastructure management expertise",
      delay: "delay-300",
      type: "developer"
    },
    {
      name: "Maxwell Nyimbili", 
      role: "Full-Stack Developer",
      description: "Backend-focused full-stack developer expert in Node.js and Go, with cloud infrastructure and system architecture experience",
      delay: "delay-400",
      type: "developer"
    },
    
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="pt-24 pb-20 lg:pt-32 lg:pb-32 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/banner/img-8.jpg')" }}
      >
        {/* Dimmed overlay for readability */}
        <div className="absolute inset-0 bg-black/60 z-0" /> 

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          <div className={`text-center transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } text-white`}>

            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-8 text-white">
              <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
              About HatuaTech Innovations Limited
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-[0.95] tracking-tight text-white">
              Building Africa's
              <span className="block text-amber-400 font-light italic mt-2">Financial Future</span>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-white/90 mb-16 leading-relaxed max-w-4xl mx-auto font-light">
              We're building the financial infrastructure that powers African innovation. Our mission is to democratize access to financial services across the continent.
            </p>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-amber-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Added spacing between hero and story section */}
      <div className="py-16 lg:py-20"></div>

      {/* Story Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className={`transition-all duration-1000 ease-out delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Our Story</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Founded in 2020 in Lusaka, Zambia, Hatua Tech emerged from a simple observation: 
                  African businesses needed financial technology that understood their unique challenges 
                  and opportunities.
                </p>
                <p>
                  Our founders, having worked across various African markets, recognized the gap between 
                  global fintech solutions and local needs. We set out to build technology that bridges 
                  this divide, creating tools that are both world-class and locally relevant.
                </p>
                <p>
                  Today, we're proud to serve hundreds of businesses across Africa, processing millions 
                  of transactions and contributing to the continent's digital transformation journey.
                </p>
              </div>
            </div>

            <div className={`transition-all duration-1000 ease-out delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-sm">
                <div className="bg-slate-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-slate-700">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-slate-900">Our Mission</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  To empower African businesses with world-class financial technology that drives 
                  growth, inclusion, and prosperity across the continent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ease-out delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Our Values</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              These core principles guide everything we do and shape how we build relationships 
              with our clients and communities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`text-center group transition-all duration-1000 ease-out ${value.delay} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="bg-slate-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-slate-700 group-hover:bg-amber-100 group-hover:text-amber-600 transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ease-out delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Our Team</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Meet the talented professionals driving Hatua Tech's vision forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className={`${
                  member.type === 'leadership' 
                    ? 'bg-white border-2 border-amber-200 p-8 rounded-3xl shadow-lg hover:shadow-xl lg:transform lg:scale-105' 
                    : 'bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md'
                } text-center transition-all duration-700 ease-out ${member.delay} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className={`${
                  member.type === 'leadership'
                    ? 'bg-gradient-to-br from-amber-100 to-amber-200 w-24 h-24 rounded-full border-4 border-amber-300'
                    : 'bg-gradient-to-br from-slate-100 to-slate-200 w-16 h-16 rounded-full border-2 border-slate-300'
                } mx-auto mb-6 flex items-center justify-center ${
                  member.type === 'leadership' ? 'text-amber-700' : 'text-slate-600'
                }`}>
                  <Users className={member.type === 'leadership' ? 'w-10 h-10' : 'w-8 h-8'} />
                </div>
                <h3 className={`${
                  member.type === 'leadership' ? 'text-xl' : 'text-lg'
                } font-semibold text-slate-900 mb-2`}>{member.name}</h3>
                <p className={`${
                  member.type === 'leadership' ? 'text-amber-600 font-semibold' : 'text-slate-500 font-medium'
                } mb-4 ${member.type === 'leadership' ? 'text-base' : 'text-sm'}`}>{member.role}</p>
                <p className={`text-slate-600 leading-relaxed ${
                  member.type === 'leadership' ? 'text-sm' : 'text-xs'
                }`}>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className={`transition-all duration-1000 ease-out delay-1600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-slate-900 rounded-3xl p-12 lg:p-16 text-center text-white">
              <div className="bg-amber-400 w-20 h-20 rounded-2xl mx-auto mb-8 flex items-center justify-center text-slate-900">
                <Globe className="w-10 h-10" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
                To become Africa's leading fintech infrastructure provider, enabling seamless 
                financial services that connect businesses, communities, and opportunities 
                across the continent and beyond.
              </p>
              <div className="flex items-center justify-center space-x-3 text-amber-400">
                <TrendingUp className="w-6 h-6" />
                <span className="text-lg font-medium">Building the future of African finance</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;