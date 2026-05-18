import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      className="group overflow-hidden rounded-[2rem] border border-pink/20 bg-white/90 p-6 shadow-glass"
    >
      <div className="aspect-[16/10] overflow-hidden rounded-3xl bg-gradient-to-br from-lilac/20 to-pink/15">
        <div className="flex h-full items-center justify-center text-slate-500">
            <img src={project.image} alt={project.title} className="h-full w-auto object-cover transition-transform duration-300 group-hover:scale-105" />
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-lilac/80">Featured Project</p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-900">{project.title}</h3>
        </div>
        <p className="text-sm leading-6 text-slate-600">{project.description}</p>
        <div className="flex flex-wrap items-center gap-3 pt-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-3xl bg-lilac/20 px-4 py-3 text-sm font-medium text-slate-900 transition hover:bg-lilac/30 hover:text-lilac"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-3xl border border-pink/30 bg-peach/30 px-4 py-3 text-sm font-medium text-slate-900 transition hover:border-pink/50 hover:text-pink"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
