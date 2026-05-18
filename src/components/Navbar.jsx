import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const links = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const offsets = links.map((l) => {
        const el = document.getElementById(l.id);
        if (!el) return { id: l.id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: l.id, top: Math.abs(rect.top) };
      });
      offsets.sort((a, b) => a.top - b.top);
      if (offsets[0]) setActive(offsets[0].id);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-pink/20 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} className="flex items-center gap-3 text-lg font-semibold tracking-wide text-slate-900">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-lilac to-pink text-lg shadow-glass">
            AA
          </span>
          Anjali Agarwal
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <button key={link.id} onClick={() => scrollTo(link.id)} className={`text-sm font-medium transition ${active === link.id ? 'text-lilac' : 'text-slate-700 hover:text-lilac'}`}>
              {link.name}
            </button>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-2xl border border-pink/30 bg-white/90 p-3 text-slate-900 transition hover:border-lilac/40 hover:text-lilac md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="border-t border-pink/20 bg-white/95 px-6 py-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`rounded-2xl px-4 py-3 text-base font-medium transition ${
                  active === link.id ? 'bg-pink/20 text-lilac' : 'text-slate-700 hover:bg-peach/30 hover:text-lilac'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;
