import React from 'react';
import { useMediaQuery } from 'react-responsive';
import '../gallery.css';
import Image1 from '../assets/p1.jpg';
import Image2 from '../assets/p2.png';
import Image3 from '../assets/p4.JPG';
import Image4 from '../assets/p3.JPG';
import Image5 from '../assets/p5.JPG';

const Gallery = () => {
  const isSmallDevice = useMediaQuery({ maxWidth: 767 }); // Define the breakpoint for small devices

  const images = isSmallDevice
    ? [Image1, Image2, Image4] // Display 3 images on small devices
    : [Image1, Image2, Image3, Image4, Image5]; // Display all 5 images on medium and larger devices

  return (
    <div className="gallery py-4 px-2 md:px-4">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default Gallery;
