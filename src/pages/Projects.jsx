import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

function Projects() {
  return (
    <section className="space-y-12">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="text-sm uppercase tracking-[0.3em] text-lilac">Projects</p>
        <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">Recent work & experiments.</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          Explore a selection of responsive applications and landing pages built with modern front-end and full-stack tooling.
        </p>
      </motion.div>

      <motion.div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.6 }}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
