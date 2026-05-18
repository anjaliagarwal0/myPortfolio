import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import MainLayout from './layouts/MainLayout';
import SinglePage from './pages/SinglePage';

const pageTransition = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.35, ease: 'easeIn' } },
};

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-peach-50 text-slate-900">
      <MainLayout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div {...pageTransition}>
                  <SinglePage />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </MainLayout>
    </div>
  );
}

export default App;
