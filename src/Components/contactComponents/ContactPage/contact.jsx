import {
  Mail,
  Phone,
  MapPin,
  // Other icons if needed
} from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get In Touch</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Ready to transform your business? Our team is here to help you get started.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email Us</h3>
                  <p className="text-slate-600">hello@hatuatech.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Call Us</h3>
                  <p className="text-slate-600">+260 762628006</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Visit Us</h3>
                  <p className="text-slate-600">Kelvin Siwale Road, Plot 2374<br />Lusaka, Zambia</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;