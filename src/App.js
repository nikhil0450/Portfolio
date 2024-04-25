import React from 'react';
// import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Skills/>
        <Projects />
        {/* <Achievements /> */}
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
