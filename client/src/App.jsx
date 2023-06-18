import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

const App = () => {
  return (
    <> 
    <div className='bg-green-100'>
      <Header/>
      <Hero/>
      <About/>
    </div>
    </>
  )
}

export default App