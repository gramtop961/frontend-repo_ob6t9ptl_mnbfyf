import React from 'react';
import { Code2, GraduationCap, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">About Me</h2>
          <p className="mt-3 text-slate-300">
            I am an Informatics Engineering graduate focused on crafting scalable systems and delightful interfaces. My interests span full‑stack development, data structures, algorithms, and cloud‑native workflows. I enjoy translating complex problems into simple, elegant solutions.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-cyan-500/20 p-2"><Code2 className="text-cyan-300" size={20} /></div>
              <h3 className="text-white font-medium">Core Skills</h3>
            </div>
            <ul className="mt-3 text-sm text-slate-300 list-disc list-inside space-y-1">
              <li>JavaScript/TypeScript, Python</li>
              <li>React, Node.js, FastAPI</li>
              <li>MongoDB, PostgreSQL</li>
            </ul>
          </div>
          <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-violet-500/20 p-2"><Cpu className="text-violet-300" size={20} /></div>
              <h3 className="text-white font-medium">Focus Areas</h3>
            </div>
            <ul className="mt-3 text-sm text-slate-300 list-disc list-inside space-y-1">
              <li>APIs & microservices</li>
              <li>Data modeling & architecture</li>
              <li>UI engineering & accessibility</li>
            </ul>
          </div>
          <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-emerald-500/20 p-2"><GraduationCap className="text-emerald-300" size={20} /></div>
              <h3 className="text-white font-medium">Education</h3>
            </div>
            <ul className="mt-3 text-sm text-slate-300 list-disc list-inside space-y-1">
              <li>B.Eng. in Informatics Engineering</li>
              <li>Courses: Algorithms, DBMS, Networks</li>
              <li>Capstone: Intelligent project dashboard</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
