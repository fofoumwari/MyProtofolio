// src/App.tsx
import React from 'react';
import Navbar from './components/navbar';
import Hero from './Sections/hero';
import About from './Sections/About';
import Projects from './Sections/Projects';
import Contact from './Sections/contacts';
import Journal from './Sections/journal';
//import JournalSync from './components/journalsync';
import JournalSync from './components/journalsync';
//import Journal from './sections/Journal';


// Import other sections as you create them (Journal, etc.)

function App() {
  return (
    <div className="App text-gray-800 bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Journal />
       
        {/* Add other sections here */}
        <Contact />
      </main>
      <footer className="py-8 text-center text-gray-600 bg-gray-50">
        <p>© {new Date().getFullYear()} Your Name. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
    
  );
}

export default App;