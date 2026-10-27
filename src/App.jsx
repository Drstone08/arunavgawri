import About from './components/About';
import BackToTop from './components/BackToTop';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Works from './components/Works';

const App = () => (
  <div className="relative min-h-screen bg-ink font-sans text-slate-300">
    <a href="#main-content" className="skip-link">
      Skip to content
    </a>

    <Navbar />

    <main id="main-content" tabIndex={-1} className="outline-none">
      <Hero />
      <About />
      <Experience />
      <Works />
      <Skills />
      <Contact />
    </main>

    <Footer />
    <BackToTop />
  </div>
);

export default App;
