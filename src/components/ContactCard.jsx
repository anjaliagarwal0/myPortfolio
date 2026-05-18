import { motion } from 'framer-motion';

function ContactCard({ icon, title, value, link }) {
  return (
    <motion.a
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      href={link || '#'}
      target={link ? '_blank' : undefined}
      rel={link ? 'noreferrer' : undefined}
      className="group rounded-3xl border border-pink/30 bg-white/90 p-6 shadow-glass transition hover:border-lilac/40"
    >
      <div className="flex items-center gap-3 text-lilac">
        {icon}
        <span className="text-sm uppercase tracking-[0.22em] text-slate-600">{title}</span>
      </div>
      <p className="mt-4 text-lg font-semibold text-slate-900">{value}</p>
      <p className="mt-3 text-sm leading-6 text-slate-600 group-hover:text-slate-900">Tap to connect and explore my profiles.</p>
    </motion.a>
  );
}

export default ContactCard;
