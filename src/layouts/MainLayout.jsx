import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MainLayout({ children }) {
  return (
    <div className="custom-scroll min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,rgba(255,192,221,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(255,175,204,0.14),transparent_25%),linear-gradient(180deg,#fff5f9_0%,#fff2f8_100%)] text-slate-900">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
