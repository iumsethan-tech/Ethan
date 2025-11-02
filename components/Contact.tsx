
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-rada-blue">Ready to Elevate Your Global Recognition?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Let's discuss your university's unique potential. Schedule a complimentary, no-obligation ranking analysis with our lead consultants today.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-rada-gray p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-rada-blue mb-6">Send us a message</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-md focus:ring-rada-gold focus:border-rada-gold" />
                <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-rada-gold focus:border-rada-gold" />
              </div>
              <div className="mt-6">
                <input type="text" placeholder="University / Institution" className="w-full p-3 border border-gray-300 rounded-md focus:ring-rada-gold focus:border-rada-gold" />
              </div>
              <div className="mt-6">
                <textarea placeholder="Your Message" rows={5} className="w-full p-3 border border-gray-300 rounded-md focus:ring-rada-gold focus:border-rada-gold"></textarea>
              </div>
              <div className="mt-6">
                <button type="submit" className="w-full bg-rada-gold text-white p-4 rounded-md font-semibold hover:bg-opacity-90 transition-colors duration-300">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
          <div className="space-y-6">
             <div className="flex items-start">
                <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-rada-gold text-white">
                        📧
                    </div>
                </div>
                <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-rada-blue">Email</h4>
                    <p className="mt-2 text-base text-gray-500">
                        <a href="mailto:info@radaintl.com" className="hover:text-rada-gold">info@radaintl.com</a>
                    </p>
                </div>
            </div>
             <div className="flex items-start">
                <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-rada-gold text-white">
                        📱
                    </div>
                </div>
                <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-rada-blue">WhatsApp</h4>
                    <p className="mt-2 text-base text-gray-500">+XX XXX XXX XXXX</p>
                </div>
            </div>
             <div className="flex items-start">
                <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-rada-gold text-white">
                        🌐
                    </div>
                </div>
                <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-rada-blue">Website</h4>
                    <p className="mt-2 text-base text-gray-500">
                        <a href="http://www.radaintl.com" target="_blank" rel="noopener noreferrer" className="hover:text-rada-gold">www.radaintl.com</a>
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
