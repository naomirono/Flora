import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import Projects from './components/Project';
import Donate from './components/Donate';
import TreeStatistics from './components/TreeStatistics';
import News from './components/News';// 
import Footer from './components/Footer';

const App = () => {
  return (
    <> 
    <div className='bg-green-100'>
      <Header/>
      <Hero/>
      <About/>
      <Mission/>
      <Projects/>
      <Donate/>
      <TreeStatistics/>
      <News/>
      <Footer/>
    </div>
    </>
  )
}

export default App