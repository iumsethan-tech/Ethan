
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white bg-rada-blue">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-rada-blue via-rada-blue/80 to-rada-blue"></div>
      
      <div className="relative z-10 text-center p-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 animate-fade-in-down">
          Unlock Your University's <span className="text-rada-gold">Global Potential</span>
        </h1>
        <p className="text-lg md:text-2xl max-w-4xl mx-auto mb-8 text-gray-200 animate-fade-in-up">
          Achieve the Recognition You Deserve with Strategic Consulting for International Rankings. We turn your data into a powerful strategy.
        </p>
        <div className="animate-fade-in-up animation-delay-500">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-rada-gold text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-2xl transform hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-down {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out 0.3s forwards; }
        .animation-delay-500 { animation-delay: 0.5s; }
      `}</style>
    </section>
  );
};

export default Hero;
