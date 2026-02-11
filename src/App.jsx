import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import DesignGallery from './components/DesignGallery';
import PageTemplate from './pages/PageTemplate';
import CategoryStrip from './components/CategoryStrip';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-50 font-sans text-brand-dark">
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <CategoryStrip />
                  <Stats />
                  <About />
                  <Services />
                  <DesignGallery />
                  <Process />
                  <Portfolio />
                  <Contact />
                </>
              }
            />
            <Route path="/design-ideas" element={<DesignGallery />} />
            <Route path="/design-ideas/:slug" element={<PageTemplate />} />
            <Route path="/magazine/:slug" element={<PageTemplate />} />
            <Route path="/cities/:slug" element={<PageTemplate />} />
            <Route path="/more/:slug" element={<PageTemplate />} />
            <Route path="/projects" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </BrowserRouter>
  );
}

export default App;
