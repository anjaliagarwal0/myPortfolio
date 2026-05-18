import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import ContactCard from '../components/ContactCard';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section className="space-y-12">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="text-sm uppercase tracking-[0.3em] text-lilac">Contact</p>
        <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">Let’s connect and collaborate.</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          I’m available for freelance work, internships, or new opportunities. Reach out via WhatsApp or connect through GitHub and LinkedIn.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        <ContactCard icon={<Phone size={20} />} title="WhatsApp" value="7665616928" link="https://wa.me/917665616928" />
        <ContactCard icon={<Github size={20} />} title="GitHub" value="anjaliagarwal0" link="https://github.com/anjaliagarwal0" />
        <ContactCard icon={<Linkedin size={20} />} title="LinkedIn" value="Profile Link" link="https://www.linkedin.com/in/anjali-agarwal-5b9a23230/" />
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-pink/30 bg-white/90 p-8 shadow-glass">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Ready to build your next project?</h2>
            <p className="mt-2 text-slate-700">I’m excited to contribute to web applications that solve real problems and deliver great experiences.</p>
          </div>
          <a href="https://github.com/anjaliagarwal0" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-lilac to-pink px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]">
            Explore My GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
