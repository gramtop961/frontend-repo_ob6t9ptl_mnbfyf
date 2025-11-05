import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs md:text-sm text-slate-200 ring-1 ring-white/15">
            <Rocket size={16} className="text-cyan-300" />
            Informatics Engineering Portfolio
          </div>

          <h1 className="mt-5 text-3xl md:text-6xl font-semibold tracking-tight text-white">
            Hi, I’m <span className="text-cyan-300">A Student Engineer</span>
          </h1>
          <p className="mt-3 md:mt-4 max-w-2xl text-slate-300 md:text-lg">
            An Informatics Engineering graduate passionate about building reliable, user‑first software — from data-driven backends to interactive web experiences.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 text-slate-900 hover:bg-cyan-400 px-4 py-2 font-medium transition"
            >
              View Projects
            </a>
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 text-white hover:bg-white/20 px-4 py-2 font-medium transition"
            >
              <Mail size={18} /> Contact Me
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 text-white hover:bg-white/20 px-4 py-2 font-medium transition"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 text-white hover:bg-white/20 px-4 py-2 font-medium transition"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
