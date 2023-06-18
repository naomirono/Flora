import React from 'react';
import '../gallery.css'
import backgroundImage from '../assets/hero1.png'

const Gallery = () => {
    return (
      <div className="gallery py-4">
        <img src={backgroundImage} alt="Image 1"  />
        <img src={backgroundImage} alt="Image 2" />
        <img src={backgroundImage} alt="Image 3"/>
        <img src={backgroundImage} alt="Image 4" />
        <img src={backgroundImage} alt="Image 5"/>
      </div>
    );
  };

  export default Gallery;