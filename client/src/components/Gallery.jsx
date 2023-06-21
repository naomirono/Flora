import React from 'react';
import '../gallery.css'
import backgroundImage from '../assets/hero1.png'
import Image1 from '../assets/p1.jpg'
import Image2 from '../assets/p2.png'
import Image3 from '../assets/p4.JPG'
import Image4 from '../assets/p3.JPG'
import Image5 from '../assets/p5.JPG'

const Gallery = () => {
    return (
      <div className="gallery py-4">
        <img src={Image1} alt="Image 1"  />
        <img src={Image2} alt="Image 2" />
        <img src={Image3} alt="Image 3"/>
        <img src={Image4} alt="Image 4" />
        <img src={Image5} alt="Image 5"/>
      </div>
    );
  };

  export default Gallery;