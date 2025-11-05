import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsDashboard from './components/ProjectsDashboard';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/70 border-b border-white/10">
        <div className="container mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold text-white">A Student Engineer</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-white/90">About</a>
            <a href="#projects" className="hover:text-white/90">Projects</a>
            <a href="#contact" className="hover:text-white/90">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 md:px-10 py-6 md:py-10 space-y-12 md:space-y-16">
        <Hero />
        <About />
        <ProjectsDashboard />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6 md:px-10 text-sm text-slate-400">
          © {new Date().getFullYear()} A Student Engineer. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
