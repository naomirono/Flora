import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';

const App = () => {
  return (
    <> 
    <div className='bg-green-100'>
      <Header/>
      <Hero/>
      <About/>
      <Mission/>
    </div>
    </>
  )
}

export default App