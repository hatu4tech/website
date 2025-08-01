import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Clock
} from 'lucide-react';

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      detail: "hello@hatuatech.com",
      subtitle: "We'll respond within 24 hours",
      delay: "delay-100"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      detail: "+260 762628006",
      subtitle: "Available Mon-Fri, 8AM-6PM CAT",
      delay: "delay-200"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      detail: "Kelvin Siwale Road, Plot 2374",
      subtitle: "Lusaka, Zambia",
      delay: "delay-300"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('/banner/img-5.jpg')",
        }}
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
              Get In Touch
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-[0.95] tracking-tight text-white">
              Let's Build
              <span className="block text-amber-400 font-light italic mt-2">Something Great</span>
            </h1>

            <p className="text-lg lg:text-xl text-white/90 mb-16 leading-relaxed max-w-3xl mx-auto font-light">
              Ready to transform your business with cutting-edge fintech solutions? Our team is here to help you get started on your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Added spacing between hero and contact info */}
      <div className="py-16 lg:py-20"></div>

      {/* Contact Information */}
      <section className="pb-20 lg:pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`text-center group transition-all duration-1000 ease-out ${info.delay} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="bg-slate-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-slate-700 group-hover:bg-amber-100 group-hover:text-amber-600 transition-all duration-300">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{info.title}</h3>
                <p className="text-slate-900 font-medium mb-1">{info.detail}</p>
                <p className="text-slate-500 text-sm">{info.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Have a specific question or want to discuss your project? Fill out the form below and we'll get back to you promptly.
            </p>
          </div>

          <div className={`bg-white border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-sm transition-all duration-1000 ease-out delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company (optional)"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                ></textarea>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button 
                    type="submit" 
                    className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-8 py-4 rounded-2xl font-semibold shadow-sm flex items-center justify-center mx-auto group transition-all duration-300 hover:shadow-md hover:scale-[1.02] min-w-[200px]"
                  >
                    Send Message
                    <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-slate-500 text-sm mt-4">We'll get back to you within 24 hours</p>
                </div>
              </form>
            </div>

        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className={`transition-all duration-1000 ease-out delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Let's Discuss Your Project</h3>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Whether you're looking to integrate payment solutions, enhance your KYC process, 
                  or explore our enterprise card services, we're here to help you find the perfect fit for your business.
                </p>
                <p>
                  Our team of experts will work with you to understand your unique requirements 
                  and provide tailored solutions that drive growth and efficiency.
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center text-slate-600">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                  <span>Free consultation and project assessment</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                  <span>Custom integration support</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                  <span>Ongoing technical support</span>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 ease-out delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="bg-slate-900 rounded-3xl p-8 lg:p-10 text-white">
                <div className="bg-amber-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-slate-900">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Quick Response Time</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  We understand that time is crucial in business. That's why we prioritize quick response 
                  times and efficient project delivery.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Initial Response:</span>
                    <span className="text-amber-400 font-semibold">Within 2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Project Proposal:</span>
                    <span className="text-amber-400 font-semibold">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Implementation:</span>
                    <span className="text-amber-400 font-semibold">7-14 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;