import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import './App.css';

// Define your sections data
const sections = [
  { id: 'home', title: 'Welcome to Our Website', bg: '#f4f4f4' },
  { id: 'about', title: 'About Us', bg: '#ddd' },
  { id: 'services', title: 'Our Services', bg: '#bbb' },
  { id: 'contact', title: 'Contact Us', bg: '#999' }
];

function App() {
  return (
    <div className="App">
      <Header sections={sections} />
      {/* Render each section on the same page */}
      {sections.map((sec) => (
        <Section key={sec.id} {...sec} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
