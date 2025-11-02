
import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "RADA International's strategic guidance was the catalyst for our unprecedented success. They are true partners in achieving global recognition.",
    author: 'Vice President for International Affairs',
    title: '',
    university: 'A RADA International Client University of Medical Sciences'
  },
  {
    quote: "Navigating the complexities of the THE Impact Rankings felt daunting until RADA stepped in. Their meticulous approach ensured our successful debut. Truly exceptional guidance.",
    author: 'Dr. Kenji Tanaka',
    title: 'Director of Internationalization',
    university: 'Sakura Technical Institute'
  },
  {
    quote: "RADA's data-driven analysis and strategic guidance on citation optimization were invaluable, boosting our research impact score significantly and attracting new collaborative projects.",
    author: 'Dr. Anya Sharma',
    title: 'Vice President for Research',
    university: 'Global Innovations University'
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-rada-blue">Voices of Success</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Hear what our partners say about their journey with RADA International.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-rada-gray p-8 rounded-lg shadow-lg flex flex-col">
              <svg className="w-12 h-12 text-rada-gold" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.333 8h-4.667v10.667h4.667v-10.667zM27.333 8h-4.667v10.667h4.667v-10.667zM0 8v10.667c0 2.587 2.080 4.667 4.667 4.667h4.667v-15.333h-7.093c-1.24 0-2.24 1.027-2.24 2.293zM18 8v10.667c0 2.587 2.080 4.667 4.667 4.667h4.667v-15.333h-7.093c-1.24 0-2.24 1.027-2.24 2.293z" />
              </svg>
              <blockquote className="mt-6 text-gray-700 italic flex-grow">
                “{testimonial.quote}”
              </blockquote>
              <footer className="mt-6">
                <p className="font-bold text-rada-blue">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.title}{testimonial.title && ', '}{testimonial.university}</p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
