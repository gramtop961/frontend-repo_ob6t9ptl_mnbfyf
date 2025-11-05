import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Contact</h2>
          <p className="mt-2 text-slate-300">Open for internships, junior roles, and collaborations. Let’s build something impactful together.</p>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="mailto:you@example.com" className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:ring-cyan-400/40 transition">
            <div className="flex items-center gap-3 text-white">
              <Mail size={20} className="text-cyan-300" />
              <div>
                <div className="font-medium">Email</div>
                <div className="text-slate-300 text-sm">you@example.com</div>
              </div>
            </div>
          </a>
          <a href="tel:+1234567890" className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:ring-cyan-400/40 transition">
            <div className="flex items-center gap-3 text-white">
              <Phone size={20} className="text-cyan-300" />
              <div>
                <div className="font-medium">Phone</div>
                <div className="text-slate-300 text-sm">+1 234 567 890</div>
              </div>
            </div>
          </a>
          <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5">
            <div className="flex items-center gap-3 text-white">
              <MapPin size={20} className="text-cyan-300" />
              <div>
                <div className="font-medium">Location</div>
                <div className="text-slate-300 text-sm">Your City, Country</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3 text-slate-300">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 hover:ring-cyan-400/40 transition text-white">
            <Github size={18} /> GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 hover:ring-cyan-400/40 transition text-white">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
