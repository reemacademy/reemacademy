import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import SpecializedCourses from './components/SpecializedCourses';
import TerminologyDisplay from './components/TerminologyDisplay';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;