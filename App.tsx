import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import SuccessStories from './components/SuccessStories';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import FAQ from './components/FAQ';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <SuccessStories />
        <Testimonials />
        <Partners />
        <FAQ />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
