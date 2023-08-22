import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import Projects from './components/Project';
import Donate from './components/Donate';
import TreeStatistics from './components/TreeStatistics';
import News from './components/News';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import MpesaPay from './pages/MpesaPay';

const App = () => {
  return (
    <Router>
      <div className='bg-green-100'>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/statistics" element={<TreeStatistics />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/mpesapay" element={<MpesaPay />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
