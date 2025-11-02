import React from 'react';
import { NewsArticle } from '../types';

const newsData: NewsArticle[] = [
  {
    id: 1,
    title: 'Navigating the 2024 QS Rankings: Key Changes and Opportunities',
    date: 'August 15, 2024',
    excerpt: 'The latest QS World University Rankings introduced new metrics focusing on sustainability and employability. We break down what this means for institutions and how to adapt your strategy.',
    imageUrl: 'https://picsum.photos/seed/news1/400/250',
    category: 'Analysis'
  },
  {
    id: 2,
    title: 'The Rise of Impact Rankings: Why SDGs Matter More Than Ever',
    date: 'July 22, 2024',
    excerpt: 'The THE Impact Rankings are gaining prominence, evaluating universities against the UN\'s Sustainable Development Goals. Learn how to effectively showcase your institution\'s societal contributions.',
    imageUrl: 'https://picsum.photos/seed/news2/400/250',
    category: 'Strategy'
  },
  {
    id: 3,
    title: 'Data Integrity: The Unsung Hero of Ranking Success',
    date: 'June 05, 2024',
    excerpt: 'Accurate, consistent, and well-managed data is the bedrock of any successful ranking strategy. This article explores best practices for building a robust institutional data infrastructure.',
    imageUrl: 'https://picsum.photos/seed/news3/400/250',
    category: 'Data Management'
  }
];

const News: React.FC = () => {
  return (
    <section id="news" className="py-20 bg-rada-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-rada-blue">Insights & News</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest analysis, strategic insights, and news from the world of university rankings.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="text-xs font-semibold uppercase text-rada-gold bg-rada-gold/10 px-2 py-1 rounded">{article.category}</span>
                </div>
                <h3 className="text-xl font-bold text-rada-blue mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{article.excerpt}</p>
                <div className="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500">
                    <span>{article.date}</span>
                    <a href="#" className="font-semibold text-rada-blue hover:text-rada-gold">Read More &rarr;</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
