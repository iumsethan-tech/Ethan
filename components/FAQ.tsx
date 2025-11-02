import React, { useState } from 'react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: "What is RADA International and what do you do?",
    answer: "RADA International is a specialized consultancy firm dedicated to helping universities and higher education institutions improve their international rankings. We provide data-driven strategies, operational support, and expert guidance to enhance visibility and performance on a global scale."
  },
  {
    question: "Which university ranking systems do you specialize in?",
    answer: "We have extensive expertise across all major international ranking systems, including QS World University Rankings, Times Higher Education (THE) World University Rankings, Shanghai Ranking (ARWU), Leiden, and Webometrics, as well as specialized rankings like the THE Impact Rankings."
  },
  {
    question: "How does the engagement process work?",
    answer: "Our process begins with a comprehensive assessment of your institution's current standing and data infrastructure. Based on this analysis, we develop a bespoke strategic roadmap. We then work collaboratively with your team to implement the strategy, optimize data, and manage submissions to ranking portals."
  },
  {
    question: "Our university is new to international rankings. Can you help us?",
    answer: "Absolutely. Our Bronze Package is specifically designed for institutions that are just beginning their ranking journey. We provide foundational support to help you understand the requirements, build the necessary infrastructure, and make a successful debut."
  },
  {
    question: "How long does it take to see results?",
    answer: "The timeline for seeing tangible results can vary depending on the ranking system and the institution's starting point. However, our clients typically see measurable improvements in key indicators within the first 1-2 years, with significant rank advancements following in subsequent ranking cycles."
  }
];

const FaqAccordionItem: React.FC<{ faq: FAQItem, isOpen: boolean, onClick: () => void }> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg font-semibold text-rada-blue">{faq.question}</span>
        <span className="transform transition-transform duration-300">
          {isOpen ?
            <svg className="w-6 h-6 text-rada-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" /></svg> :
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
          }
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="px-6 pb-5 text-gray-600">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};


const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-rada-blue">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services and the university ranking process.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-rada-gray rounded-lg shadow-lg">
          {faqData.map((faq, index) => (
            <FaqAccordionItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
