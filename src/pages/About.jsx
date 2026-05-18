import { motion } from 'framer-motion';
import { education } from '../data/education';
import { skills } from '../data/skills';
import { Code2, GraduationCap, Sparkles, Users } from 'lucide-react';

function About() {
  return (
    <section className="space-y-12">
      <div className="space-y-4">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm uppercase tracking-[0.3em] text-lilac">About Me</p>
          <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">Passionate developer building elegant digital products.</h1>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="max-w-3xl text-lg leading-8 text-slate-700">
          I’m a MERN Stack developer with strong experience in MongoDB, Express.js, React.js, and Node.js. I enjoy building responsive, user-friendly applications, learning new technologies, and solving problems with scalable code.
        </motion.p>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <motion.div className="rounded-[2rem] border border-pink/30 bg-white/90 p-8 shadow-glass" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-8 flex items-center gap-4 text-slate-900">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-lilac to-pink text-white">
              <Users size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Professional Summary</h2>
              <p className="text-sm text-slate-600">Friendly, curious, and committed to continuous learning.</p>
            </div>
          </div>
          <div className="space-y-5 text-slate-700">
            <p>With a strong foundation in frontend and backend development, I enjoy shaping products that feel intuitive and look polished. My workflow includes modern tools like React, Tailwind, and Node.js backed by a strong grasp of JavaScript fundamentals.</p>
            <p>I focus on writing maintainable code, building accessible interfaces, and optimizing performance. I’m ready to contribute to teams that value collaboration, clean architecture, and thoughtful user experiences.</p>
          </div>
        </motion.div>

        <div className="space-y-6">
          <motion.div className="grid gap-5 sm:grid-cols-2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            {education.map((item) => (
              <article key={item.id} className="rounded-3xl border border-pink/30 bg-white/90 p-6 shadow-glass transition hover:border-lilac/40">
                <div className="mb-4 inline-flex items-center gap-3 text-lilac">
                  <GraduationCap size={22} />
                  <span className="text-sm uppercase tracking-[0.18em] text-slate-600">{item.year}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{item.institution}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{item.degree}</p>
              </article>
            ))}
          </motion.div>

          <motion.div className="rounded-[2rem] border border-pink/30 bg-white/90 p-6 shadow-glass" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
            <div className="mb-6 flex items-center gap-4 text-slate-900">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-lilac to-pink text-white">
                <Code2 size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Skills</h2>
                <p className="text-sm text-slate-600">Technologies and tools I use regularly.</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill} className="rounded-3xl border border-pink/30 bg-peach/30 px-4 py-3 text-sm text-slate-900 transition hover:border-lilac/40 hover:text-lilac">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
