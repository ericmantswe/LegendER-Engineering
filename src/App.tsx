import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AboutFounder } from './components/AboutFounder';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeService, setActiveService] = useState<string>('');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleServiceInquiry = (service: string) => {
    setActiveService(service);
    scrollTo('contact');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-surface-light)', color: '#111' }}>
      <Navbar onContact={() => scrollTo('contact')} />
      <main>
        <Hero
          onContact={() => scrollTo('contact')}
          onServices={() => scrollTo('services')}
        />
        <Services onInquire={handleServiceInquiry} />
        <AboutFounder />
        <Contact prefilledService={activeService} />
      </main>
      <Footer onContact={() => scrollTo('contact')} />
    </div>
  );
}
