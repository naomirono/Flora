import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import DonateButton from './DonateButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="bg-green-100 relative z-10">
        <nav className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center relative ">
              <div className="flex-shrink-0">
                <h2 className="text-4xl text-green-900 font-bold">TreeHaven</h2>
              </div>
              <div
                onClick={toggleMenu}
                className="text-green-900 focus:outline-none text-3xl md:hidden flex justify-end items-center ml-[100px] my-4"
              >
                {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
              </div>
            </div>
            <div
              className={`${
                isMenuOpen ? 'block' : 'hidden'
              } mt-4 sm:mt-0 md:flex md:items-center bg-green-100 md:bg-transparent absolute md:relative top-full md:top-auto left-0 w-full md:w-auto md:z-0 z-20 md:pt-0 py-4 transition-all duration-500 ease-in text-center `}
            >
              <a
                href="#home"
                onClick={toggleMenu}
                className={`block font-medium ${
                  isMenuOpen ? 'text-green-900' : 'text-green-900'
                } hover:text-black px-6 py-2 rounded-md text-lg mt-6`}
              >
                Home
              </a>
              <a
                href="#about"
                onClick={toggleMenu}
                className={`block font-medium ${
                  isMenuOpen ? 'text-green-900' : 'text-green-900'
                } hover:text-black px-6 py-2 rounded-md text-lg mt-6`}
              >
                About
              </a>
              <a
                href="#projects"
                onClick={toggleMenu}
                className={`block font-medium ${
                  isMenuOpen ? 'text-green-900' : 'text-green-900'
                } hover:text-black px-6 py-2 rounded-md text-lg mt-6`}
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={toggleMenu}
                className={`block font-medium ${
                  isMenuOpen ? 'text-green-900' : 'text-green-900'
                } hover:text-black px-6 py-2 rounded-md text-lg mt-6`}
              >
                Contact
              </a>
              <a
                href="#donate"
                onClick={toggleMenu}
                className={`block font-medium ${
                  isMenuOpen ? 'text-green-900' : 'text-green-900'
                } hover:text-black px-6 py-2 rounded-md text-lg mt-6`}
              >
                Blog
              </a>
            </div>
            <div className='md:block hidden'>
            <a
                onClick={toggleMenu}
                className={` font-medium ${
                  isMenuOpen ? 'text-green-900' : 'text-green-900'
                } px-2 py-2`}
              >
                <DonateButton />  
              </a>
              <a
                onClick={toggleMenu}
                className={` font-medium ${
                  isMenuOpen ? 'text-green-900' : 'text-green-900'
                } px-2 py-2`}
              >
                <DonateButton />
              </a>
            </div>
            
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
