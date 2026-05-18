import { motion } from 'framer-motion';
import { ArrowRight, Layers, Sparkles, Terminal, User } from 'lucide-react';

const intro = [
  'Crafting scalable web experiences with MERN.',
  'Building modern, responsive UIs with clean motion.',
  'Turning ideas into polished digital products.',
];

function Home() {
  return (
    <section className="space-y-16">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-pink/30 bg-white/90 px-4 py-2 text-slate-900 shadow-glass">
            <Sparkles className="text-lilac" size={20} />
            <span>Hi, I’m Anjali — MERN Stack Developer</span>
          </div>

          <div className="space-y-6">
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-slate-900 sm:text-6xl">
              Modern web solutions powered by React, Node.js, and beautiful design.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-700">
              I’m a passionate MERN Stack developer focused on creating responsive, user-friendly applications with strong performance and elegant motion.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-lilac to-pink px-6 py-4 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="https://drive.google.com/file/d/1jN_WJm8UQR-0W2eEYhyuFPlFyx3cV7Y-/view?usp=sharing"
              className="inline-flex items-center gap-3 rounded-full border border-pink/30 bg-white/90 px-6 py-4 text-sm font-semibold text-slate-900 transition hover:border-lilac/50 hover:text-lilac"
            >
              Download Resume
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: <Terminal size={20} />, label: 'React & Vite' },
              { icon: <User size={20} />, label: 'Modern UI' },
              { icon: <Layers size={20} />, label: 'Clean architecture' },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-pink/30 bg-white/90 p-5 text-slate-900 shadow-glass transition hover:border-lilac/40 hover:text-lilac">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-peach/40 text-lilac">
                  {item.icon}
                </div>
                <p className="text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-lilac/20 blur-3xl" />
          <div className="absolute -right-6 bottom-10 h-40 w-40 rounded-full bg-pink/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-pink/20 bg-white/90 p-6 shadow-glass backdrop-blur-xl">
            <div className="h-full rounded-[2rem] border border-pink/30 bg-peach/30 p-8 text-center">
              <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-lilac to-pink text-4xl font-bold text-slate-950">
                AA
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">Anjali Agarwal</h2>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-lilac">MERN Stack Developer</p>
              <p className="mt-6 text-sm leading-6 text-slate-600">
                Passionate about building responsive web applications, solving problems, and delivering efficient digital solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-6 rounded-[2rem] border border-pink/20 bg-white/90 p-8 shadow-glass sm:grid-cols-2">
        {intro.map((line, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.12, duration: 0.6 }} className="rounded-3xl bg-peach/30 p-6 text-slate-800">
            <p className="text-base leading-7">{line}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Home;
