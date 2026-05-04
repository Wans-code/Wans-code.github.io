import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import portfolioData from './data/portfolioData.json';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary-200 selection:text-primary-900">
      <Navbar data={portfolioData.personal} />
      <main>
        <Hero data={portfolioData.personal} />
        <About data={portfolioData.personal} />
        <Experience data={portfolioData.experience} />
        <Skills data={portfolioData.skills} />
        <Portfolio data={portfolioData.portfolio} />
      </main>
      <Footer data={portfolioData.personal} />
    </div>
  );
}

export default App;
