import { motion } from 'framer-motion';

function Loader() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <motion.div
        className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-lilac to-pink text-slate-900 shadow-[0_0_60px_rgba(255,192,221,0.24)]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-2xl font-bold">A</span>
      </motion.div>
  );
}

export default Loader;
