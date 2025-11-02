
import React from 'react';

const CheckIcon = () => (
  <svg className="w-6 h-6 text-rada-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-rada-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-rada-blue">Your Dedicated Partner in a Complex Journey</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Navigating the world of university rankings is daunting. We demystify the process, turning available data into a powerful strategy to secure your place among the world's elite.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-rada-blue">Our Vision & Mission</h3>
            <p className="text-gray-700">
              Our vision is to be the preeminent strategic partner for higher education institutions globally, empowering them to achieve and sustain exceptional standing in international university rankings. Our mission is to provide bespoke, data-driven consultancy that enables universities to optimize performance, enhance visibility, and realize their full potential.
            </p>
            <h3 className="text-3xl font-semibold text-rada-blue mt-8">Our Proven Path to Success</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckIcon />
                <div className="ml-3">
                  <h4 className="font-semibold text-rada-blue">Deep-Dive Analysis & Strategy</h4>
                  <p className="text-gray-600">Meticulous audit of your university’s performance against key ranking requirements and high-leverage indicators.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <div className="ml-3">
                  <h4 className="font-semibold text-rada-blue">Data Optimization & Enhancement</h4>
                  <p className="text-gray-600">We help you clean, refine, and optimize institutional data to fully represent your core strengths and capabilities.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <div className="ml-3">
                  <h4 className="font-semibold text-rada-blue">Strategic Readiness & Fulfilment</h4>
                  <p className="text-gray-600">We conduct final verifications to confirm all ranking thresholds are met, clearing the path for a successful entry.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <img src="https://picsum.photos/600/500?random=1" alt="Strategic planning session" className="rounded-lg shadow-2xl w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
