import React, { useMemo, useState } from 'react';
import { FolderOpen, Star, Github, Globe, Calendar } from 'lucide-react';

const sampleProjects = [
  {
    id: 1,
    title: 'Real-time Chat App',
    description: 'WebSocket powered chat with rooms, presence, and message search.',
    tech: ['React', 'Node.js', 'Socket.io'],
    stars: 42,
    year: 2024,
    links: { github: '#', demo: '#' },
    category: 'Web',
  },
  {
    id: 2,
    title: 'Image Classifier',
    description: 'CNN model trained on custom dataset with FastAPI serving.',
    tech: ['Python', 'PyTorch', 'FastAPI'],
    stars: 29,
    year: 2023,
    links: { github: '#', demo: '#' },
    category: 'AI/ML',
  },
  {
    id: 3,
    title: 'Personal Finance Tracker',
    description: 'Track budgets and expenses with rich charts and export.',
    tech: ['Vite', 'React', 'MongoDB'],
    stars: 31,
    year: 2023,
    links: { github: '#', demo: '#' },
    category: 'Web',
  },
  {
    id: 4,
    title: 'Algo Visualizer',
    description: 'Interactive visualizations for classic data structures & algorithms.',
    tech: ['TypeScript', 'D3.js'],
    stars: 55,
    year: 2022,
    links: { github: '#', demo: '#' },
    category: 'Visualization',
  },
];

const Tag = ({ label }) => (
  <span className="inline-flex items-center rounded-md bg-white/5 ring-1 ring-white/10 px-2 py-0.5 text-xs text-slate-300">
    {label}
  </span>
);

const ProjectsDashboard = () => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const categories = useMemo(() => ['All', ...Array.from(new Set(sampleProjects.map(p => p.category)))], []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return sampleProjects.filter(p => {
      const matchesQuery = [p.title, p.description, ...p.tech].join(' ').toLowerCase().includes(q);
      const matchesCat = filter === 'All' || p.category === filter;
      return matchesQuery && matchesCat;
    });
  }, [query, filter]);

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-slate-950 to-slate-900/30 rounded-2xl">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white flex items-center gap-2">
              <FolderOpen className="text-cyan-300" /> Projects Dashboard
            </h2>
            <p className="mt-2 text-slate-300 max-w-2xl">
              Browse featured work showcasing web apps, AI/ML experiments, and interactive tools. Filter by category or search by keywords.
            </p>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search projects..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full md:w-64 rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-cyan-400/40"
            />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:ring-cyan-400/40"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article key={p.id} className="group rounded-xl bg-white/5 ring-1 ring-white/10 hover:ring-cyan-400/40 transition overflow-hidden">
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-white font-medium text-lg group-hover:text-cyan-300 transition">
                    {p.title}
                  </h3>
                  <div className="inline-flex items-center gap-1 text-amber-300/90">
                    <Star size={16} />
                    <span className="text-sm">{p.stars}</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-slate-300">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
                  <div className="inline-flex items-center gap-2">
                    <Calendar size={16} /> {p.year}
                  </div>
                  <div className="inline-flex items-center gap-3">
                    <a
                      href={p.links.github}
                      className="inline-flex items-center gap-1 hover:text-white"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                    >
                      <Github size={16} /> Code
                    </a>
                    <a
                      href={p.links.demo}
                      className="inline-flex items-center gap-1 hover:text-white"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Demo"
                    >
                      <Globe size={16} /> Demo
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsDashboard;
