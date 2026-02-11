import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import TechStack from './components/TechStack';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <TechStack />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;