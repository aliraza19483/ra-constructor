import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Magazine from './components/Magazine';
import Founder from './components/Founder';
import ContactForm from './ContactForm';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <Founder />
        <section id="process">
          <Process />
        </section>
        <section id="projects">
          <Portfolio />
        </section>
        <Magazine />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
