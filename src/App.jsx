import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#CD1C18] selection:text-white dark">
      {/* Set 'dark' class on root div by default to showcase the premium Maroon dark mode natively */}
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AboutUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
