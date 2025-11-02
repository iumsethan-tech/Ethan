
import React from 'react';
import { SuccessStory } from '../types';

const stories: SuccessStory[] = [
  {
    title: 'Elevating Research & International Profile',
    client: 'Well-Established University',
    challenge: 'Aspired to break into the Top 300 of QS and THE World University Rankings but struggled with inconsistent data collection and under-reporting of research impact, leading to a stagnated global profile.',
    solution: 'Developed a 3-year strategic roadmap, implemented a refined data collection framework, and provided workshops on internationalization and research visibility.',
    impact: [
      '↑ 55 Places in QS World University Rankings.',
      '↑ 32 Places in Times Higher Education (THE) Rankings.',
      '+28% increase in international faculty recruitment over two years.',
      '+40% increase in research citation impact score.'
    ],
  },
  {
    title: 'Debuting with Purpose in Impact Rankings',
    client: 'Forward-Thinking Institution',
    challenge: 'Wished to debut in the THE Impact Rankings but faced challenges in documenting and aligning impactful initiatives with specific Sustainable Development Goal (SDG) metrics.',
    solution: 'Performed a comprehensive mapping of all university initiatives against the 17 UN SDGs, developed a robust data collection system, and provided strategic guidance on narrative development.',
    impact: [
      'Successfully debuted within the Top 150 globally in the THE Impact Rankings.',
      'Achieved a Top 50 ranking for SDG 4 (Quality Education).',
      '+35% increase in student volunteer engagement.',
      'Attracted new grant funding opportunities.'
    ],
  },
];

const SuccessStories: React.FC = () => {
  return (
    <section id="success" className="py-20 bg-rada-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-rada-blue">Our Guarantee is Our Track Record</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our track record speaks for itself, from groundbreaking debuts to sustained #1 rankings. When you partner with us, you are investing in a legacy of tangible results.
          </p>
        </div>
        <div className="space-y-16">
          {stories.map((story, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`p-8 bg-white rounded-lg shadow-xl ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <h3 className="text-2xl font-bold text-rada-gold">{story.title}</h3>
                <p className="mt-2 font-semibold text-rada-blue">{story.client}</p>
                <div className="mt-6">
                  <h4 className="font-semibold text-rada-blue">The Challenge:</h4>
                  <p className="text-gray-600 mt-1">{story.challenge}</p>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-rada-blue">RADA's Solution:</h4>
                  <p className="text-gray-600 mt-1">{story.solution}</p>
                </div>
              </div>
              <div className={`p-8 bg-rada-blue text-white rounded-lg shadow-xl ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <h3 className="text-2xl font-bold text-rada-gold">The Impact</h3>
                <ul className="mt-6 space-y-4">
                  {story.impact.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-6 h-6 mr-3 text-rada-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
