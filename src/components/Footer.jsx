import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="mt-20 border-t border-pink/20 bg-white/80 px-6 py-10 text-slate-700 backdrop-blur-xl sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-3 text-xl font-semibold text-slate-900">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-lilac to-pink shadow-glass">
              AA
            </div>
            <span>Anjali Agarwal</span>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">
            Designed for modern web professionals with responsive animations, clean gradients, and polished transitions.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">Quick Links</h3>
            <div className="flex flex-col gap-2 text-slate-700">
              <a href="#" className="hover:text-lilac">Home</a>
              <a href="/about" className="hover:text-lilac">About</a>
              <a href="/projects" className="hover:text-lilac">Projects</a>
              <a href="/contact" className="hover:text-lilac">Contact</a>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">Socials</h3>
            <div className="flex flex-wrap gap-3 text-slate-700">
              <a href="https://github.com/anjaliagarwal0" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-3xl border border-pink/30 bg-peach/70 px-4 py-3 text-sm transition hover:border-lilac/50 hover:text-lilac">
                <Github size={16} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/anjali-agarwal-5b9a23230/" className="inline-flex items-center gap-2 rounded-3xl border border-pink/30 bg-lilac/70 px-4 py-3 text-sm transition hover:border-pink/50 hover:text-pink">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          <motion.div whileHover={{ y: -4 }} className="space-y-2 rounded-3xl border border-pink/30 bg-white/80 p-5 shadow-glass">
            <div className="flex items-center gap-3 text-slate-900">
              <Sparkles size={18} /> Keep building.
            </div>
            <p className="text-sm leading-6 text-slate-600">
              All Rights Reserved. Crafted with passion, clean motion, and professional details.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
