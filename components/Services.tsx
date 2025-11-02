import React, { useState } from 'react';
import { Service, ServiceCategory } from '../types';
import ServiceDetailModal from './ServiceDetailModal';
import AnalysisIcon from './icons/features/AnalysisIcon';
import DataIcon from './icons/features/DataIcon';
import ProfileIcon from './icons/features/ProfileIcon';
import StrategyIcon from './icons/features/StrategyIcon';
import SupportIcon from './icons/features/SupportIcon';
import TrainingIcon from './icons/features/TrainingIcon';
import AssessmentIcon from './icons/features/AssessmentIcon';
import DataInfrastructureIcon from './icons/features/DataInfrastructureIcon';
import PortalIcon from './icons/features/PortalIcon';
import PerformanceIcon from './icons/features/PerformanceIcon';


const allFeatures = [
  // University Assessment & Strategic Planning
  { category: 'University Assessment & Strategic Planning', level: 'bronze', name: 'Situation Analysis', description: 'Conducting a comprehensive university situation analysis.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <AssessmentIcon /> },
  { category: 'University Assessment & Strategic Planning', level: 'bronze', name: 'Performance Evaluation', description: 'Evaluating university performance across educational, research, and international fields.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <PerformanceIcon /> },
  { category: 'University Assessment & Strategic Planning', level: 'bronze', name: 'Potentials & Facilities Evaluation', description: 'Evaluating existing university potentials and facilities.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <AssessmentIcon /> },
  { category: 'University Assessment & Strategic Planning', level: 'bronze', name: 'Strength/Weakness Identification', description: 'Identifying university strengths and weaknesses relevant to international rankings.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <AnalysisIcon /> },
  { category: 'University Assessment & Strategic Planning', level: 'silver', name: 'Indicator Evaluation', description: 'Evaluating international university ranking indicators and conducting comparative performance studies with local, regional, and international universities.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <AnalysisIcon /> },
  { category: 'University Assessment & Strategic Planning', level: 'silver', name: 'Rank & Position Analysis', description: 'Analyzing current university rank and position within national and international ranking systems.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <AnalysisIcon /> },
  { category: 'University Assessment & Strategic Planning', level: 'silver', name: 'SWOT Analysis', description: 'Performing SWOT analysis and identifying university strengths and weaknesses.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <StrategyIcon /> },
  { category: 'University Assessment & Strategic Planning', level: 'silver', name: 'Performance Improvement Solutions', description: 'Presenting solutions to improve university performance in alignment with a research-friendly strategy.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <StrategyIcon /> },
  { category: 'University Assessment & Strategic Planning', level: 'gold', name: 'Strength & Potential Utilization', description: 'Implementing specialized strategies to utilize strengths and potentials to amplify their effect on international rankings.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <StrategyIcon /> },
  { category: 'University Assessment & Strategic Planning', level: 'gold', name: 'Tailor-made Solutions', description: 'Providing evidence-based, tailor-made short-term and long-term solutions derived from university activities and ranking indicators.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <StrategyIcon /> },

  // Data Infrastructure & Management
  { category: 'Data Infrastructure & Management', level: 'bronze', name: 'Data Collection Team Consultation', description: 'Consulting to form an influential data collection team.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <TrainingIcon /> },
  { category: 'Data Infrastructure & Management', level: 'silver', name: 'Data Process Improvement', description: 'Providing consultation to improve the processes of producing, correctly storing, documenting, collecting, and classifying data.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <DataInfrastructureIcon /> },
  { category: 'Data Infrastructure & Management', level: 'silver', name: 'KPI Identification', description: 'Identifying key performance indicators (Data KPI).', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <DataIcon /> },
  { category: 'Data Infrastructure & Management', level: 'silver', name: 'Activity Data Documentation', description: 'Offering professional consultation to document data on current university activities, specifically those related to ranking.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <DataIcon /> },
  { category: 'Data Infrastructure & Management', level: 'gold', name: 'Expert Training for Ranking Teams', description: 'Providing consultation and training for ranking experts on collecting, classifying, producing, documenting, and creating content for ranking indicators.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <TrainingIcon /> },
  { category: 'Data Infrastructure & Management', level: 'gold', name: 'Data Flow Infrastructure', description: 'Providing consultation to establish the necessary data flow infrastructure for routine ranking systems.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <DataInfrastructureIcon /> },
  { category: 'Data Infrastructure & Management', level: 'gold', name: 'Standard Data Structure', description: 'Creating a standard data collection structure for future ranking periods.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <DataIcon /> },
  
  // Ranking Portal Operations & Submission
  { category: 'Ranking Portal Operations & Submission', level: 'bronze', name: 'Information Upload Preparation', description: 'Making preparations to upload information to any ranking portal, including data collection, classification, and optimization.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <PortalIcon /> },
  { category: 'Ranking Portal Operations & Submission', level: 'bronze', name: 'Portal Registration', description: 'Registering the university in relevant ranking portals, creating university accounts, and introducing data providers.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <ProfileIcon /> },
  { category: 'Ranking Portal Operations & Submission', level: 'bronze', name: 'Data Entry & Upload', description: 'Performing data entry and uploading documents and information into online data collection portals.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <PortalIcon /> },
  { category: 'Ranking Portal Operations & Submission', level: 'silver', name: 'Profile Creation & Completion', description: 'Creating and completing the university profile in various ranking portals, aligning with ranking indicators to represent special advantages and potentials.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <ProfileIcon /> },
  { category: 'Ranking Portal Operations & Submission', level: 'silver', name: 'Activity Area Optimization', description: 'Completing and optimizing university areas of activity within any ranking portal.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <SupportIcon /> },
  { category: 'Ranking Portal Operations & Submission', level: 'silver', name: 'Budget & Revenue Optimization', description: 'Optimizing and uploading information related to the university budget and all revenues.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <DataIcon /> },
  { category: 'Ranking Portal Operations & Submission', level: 'silver', name: 'Educational Indicator Optimization', description: 'Optimizing statistics and information for key educational indicators.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <PerformanceIcon /> },
  { category: 'Ranking Portal Operations & Submission', level: 'silver', name: 'Data Cleaning & Optimization', description: 'Cleaning and optimizing data for uploading into any data collection portal.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <DataIcon /> },
  { category: 'Ranking Portal Operations & Submission', level: 'silver', name: 'Contradiction Addressing', description: 'Addressing contradictions in the information entered into any ranking portal.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <SupportIcon /> },
  { category: 'Ranking Portal Operations & Submission', level: 'silver', name: 'Ambiguity Resolution', description: 'Resolving possible ambiguities and clarifying information loaded into any online ranking data collection portal.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <SupportIcon /> },
  { category: 'Ranking Portal Operations & Submission', level: 'silver', name: 'Correspondence & Inquiry', description: 'Responding to emails and addressing possible questions from various ranking institutes regarding uploaded information and documents.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <SupportIcon /> },
  { category: 'Ranking Portal Operations & Submission', level: 'silver', name: 'Subject Rankings Information', description: 'Completing and loading information for specific subject rankings (e.g., Times Subject Rankings, QS Subject Rankings).', rankings: ['QS', 'THE'], icon: <AnalysisIcon /> },
  { category: 'Ranking Portal Operations & Submission', level: 'gold', name: 'Profile Update & Optimization', description: 'Updating and optimizing the university information profile with a focus on influential aspects for ranking promotion.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <ProfileIcon /> },
  { category: 'Ranking Portal Operations & Submission', level: 'gold', name: 'Data Validation', description: 'Validating data according to various ranking standards and indicators.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <DataIcon /> },

  // Academic & Research Performance Enhancement
  { category: 'Academic & Research Performance Enhancement', level: 'bronze', name: 'Affiliation Correction', description: 'Providing professional consultation to correct university affiliation and faculty members\' data.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <SupportIcon /> },
  { category: 'Academic & Research Performance Enhancement', level: 'silver', name: 'Publication Prevention', description: 'Providing consultation and strategies to prevent missing publications.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <DataIcon /> },
  { category: 'Academic & Research Performance Enhancement', level: 'silver', name: 'Website Performance', description: 'Offering professional consultation to enhance university website performance and increase the visibility of university activities and performance through websites.', rankings: ['Webometrics', 'QS', 'THE'], icon: <PerformanceIcon /> },
  { category: 'Academic & Research Performance Enhancement', level: 'gold', name: 'Citation Increase Strategy', description: 'Providing professional consultation to implement strategies for increasing citation.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <PerformanceIcon /> },
  { category: 'Academic & Research Performance Enhancement', level: 'gold', name: 'Publication Increase', description: 'Offering consultation to increase university publication output.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <PerformanceIcon /> },
  { category: 'Academic & Research Performance Enhancement', level: 'gold', name: 'Reputation Improvement', description: 'Planning to improve educational and research reputation through reputation surveys.', rankings: ['QS', 'THE'], icon: <StrategyIcon /> },
  { category: 'Academic & Research Performance Enhancement', level: 'gold', name: 'R&E Strategic Planning', description: 'Providing consultation for strategic planning of university research and education development to effectively impact activities, services, and specialized centers in international rankings.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <StrategyIcon /> },
  { category: 'Academic & Research Performance Enhancement', level: 'gold', name: 'Collaboration Increase', description: 'Providing consultation to sign more agreements and increase scientific and research collaboration.', rankings: ['QS', 'Shanghai', 'THE'], icon: <TrainingIcon /> },
  
  // Analysis & Feedback
  { category: 'Analysis & Feedback', level: 'silver', name: 'Rankings Analysis', description: 'Conducting a comprehensive university rankings analysis.', rankings: ['QS', 'Shanghai', 'Leiden', 'THE', 'Webometrics'], icon: <AnalysisIcon /> },
];

const categoryData = [
  { name: 'University Assessment & Strategic Planning', icon: <AssessmentIcon /> },
  { name: 'Data Infrastructure & Management', icon: <DataInfrastructureIcon /> },
  { name: 'Ranking Portal Operations & Submission', icon: <PortalIcon /> },
  { name: 'Academic & Research Performance Enhancement', icon: <PerformanceIcon /> },
  { name: 'Analysis & Feedback', icon: <AnalysisIcon /> },
];

const buildCategoriesForLevel = (levels: string[]): ServiceCategory[] => {
  return categoryData
    .map(cat => ({
      ...cat,
      features: allFeatures.filter(f => f.category === cat.name && levels.includes(f.level)),
    }))
    .filter(cat => cat.features.length > 0);
};

const servicesData: Service[] = [
  {
    tier: 'Bronze Package',
    tierSubtitle: 'Basic',
    price: 'Foundational',
    description: 'Essential services to establish a strong foundation for ranking success.',
    categories: buildCategoriesForLevel(['bronze']),
  },
  {
    tier: 'Silver Package',
    tierSubtitle: 'Standard',
    price: 'Comprehensive',
    description: 'Includes all Bronze services plus more in-depth strategic planning and support.',
    categories: buildCategoriesForLevel(['bronze', 'silver']),
    main: true,
  },
  {
    tier: 'Gold Package',
    tierSubtitle: 'Advanced',
    price: 'Partnership',
    description: 'A full strategic partnership with expert-level interventions for maximum impact.',
    categories: buildCategoriesForLevel(['bronze', 'silver', 'gold']),
  },
];

const ServiceCard: React.FC<{ service: Service; onSelect: (service: Service) => void }> = ({ service, onSelect }) => {
    const allFeaturesInPackage = service.categories.flatMap(c => c.features);
    return (
        <div className={`border rounded-xl p-8 flex flex-col h-full transition-all duration-300 ${service.main ? 'bg-rada-blue text-white shadow-2xl transform scale-105' : 'bg-white shadow-lg'}`}>
        {service.main && <span className="bg-rada-gold text-rada-blue text-xs font-bold px-3 py-1 rounded-full uppercase self-start mb-4">Most Popular</span>}
        <h3 className={`text-2xl font-bold ${service.main ? 'text-white' : 'text-rada-blue'}`}>{service.tier}</h3>
        <p className={`mt-2 ${service.main ? 'text-gray-300' : 'text-gray-500'}`}>{service.description}</p>
        <div className={`my-8 text-4xl font-extrabold ${service.main ? 'text-rada-gold' : 'text-rada-blue'}`}>{service.price}</div>
        <ul className="space-y-4 mb-8 flex-grow">
            {allFeaturesInPackage.slice(0, 5).map((feature, index) => (
            <li key={index} className="flex items-start">
                <svg className={`w-6 h-6 mr-3 flex-shrink-0 ${service.main ? 'text-rada-gold' : 'text-rada-light-blue'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className={`${service.main ? 'text-gray-200' : 'text-gray-700'}`}>{feature.name}</span>
            </li>
            ))}
        </ul>
        <button onClick={() => onSelect(service)} className={`w-full text-center mt-auto block py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${service.main ? 'bg-white text-rada-blue hover:bg-gray-200' : 'bg-rada-gold text-white hover:bg-opacity-90'}`}>
            View Details
        </button>
        </div>
    );
};

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-rada-blue">Tailored Service Packages</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              From foundational analysis to comprehensive strategic partnerships, we offer solutions designed to meet your university's unique needs.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {servicesData.map((service) => (
              <ServiceCard key={service.tier} service={service} onSelect={setSelectedService} />
            ))}
          </div>
        </div>
      </section>
      {selectedService && (
        <ServiceDetailModal service={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </>
  );
};

export default Services;