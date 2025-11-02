import React from 'react';
import { Service } from '../types';

const RankingPill: React.FC<{ name: string }> = ({ name }) => {
    const colors: { [key: string]: string } = {
        'QS': 'bg-green-100 text-green-800',
        'THE': 'bg-red-100 text-red-800',
        'ARWU': 'bg-blue-100 text-blue-800',
        'Shanghai': 'bg-blue-100 text-blue-800',
        'Leiden': 'bg-orange-100 text-orange-800',
        'Webometrics': 'bg-yellow-100 text-yellow-800',
        'All': 'bg-indigo-100 text-indigo-800',
        'Internal Strategy': 'bg-gray-100 text-gray-800',
        'Scopus': 'bg-purple-100 text-purple-800',
        'WoS': 'bg-pink-100 text-pink-800',
        'Internal Capacity': 'bg-teal-100 text-teal-800',
    };
    const colorClass = colors[name] || 'bg-gray-100 text-gray-800';
    return <span className={`text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full ${colorClass}`}>{name}</span>;
};


const ServiceDetailModal: React.FC<{ service: Service, onClose: () => void }> = ({ service, onClose }) => {
  return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 animate-fade-in"
        onClick={onClose}
        aria-modal="true"
        role="dialog"
    >
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col transform animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
            <img src={`https://picsum.photos/seed/${service.tier}/900/200`} alt={`${service.tier} visual`} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-3xl font-bold text-white">{service.tier}</h2>
                <p className="text-rada-gold font-semibold">{service.tierSubtitle} Plan</p>
            </div>
            <button onClick={onClose} className="absolute top-4 right-4 bg-white/20 text-white rounded-full p-2 hover:bg-white/40 transition-colors duration-300" aria-label="Close">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>
        
        <div className="p-8 overflow-y-auto">
            <p className="text-gray-600 mb-8">{service.description}</p>
            <div className="space-y-8">
                {service.categories.map((category) => (
                    <div key={category.name}>
                        <div className="flex items-center mb-4">
                            <div className="text-rada-gold">{category.icon}</div>
                            <h3 className="ml-3 text-xl font-semibold text-rada-blue">{category.name}</h3>
                        </div>
                        <div className="space-y-6 pl-2 border-l-2 border-rada-gold/30">
                            {category.features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4 ml-6">
                                    <div className="flex-shrink-0 text-rada-blue mt-1">{feature.icon}</div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-rada-blue">{feature.name}</h4>
                                        <p className="text-gray-600 mt-1">{feature.description}</p>
                                        <div className="mt-3">
                                            {feature.rankings.map(rank => <RankingPill key={rank} name={rank} />)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        <div className="p-6 bg-rada-gray rounded-b-lg mt-auto">
             <a href="#contact" onClick={onClose} className="w-full text-center block py-3 px-6 rounded-lg font-semibold transition-colors duration-300 bg-rada-gold text-white hover:bg-opacity-90">
                Inquire About This Plan
            </a>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }
        @keyframes slide-up {
            0% { transform: translateY(20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ServiceDetailModal;