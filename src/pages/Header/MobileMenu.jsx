import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="flex justify-between items-center md:hidden px-2">
      <Link 
        to="/" 
        onClick={() => { 
          window.scrollTo(0, 0); 
          setIsMenuOpen(false); 
        }} 
        className="text-white font-bold"
      >
        Home
      </Link>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-white p-2"
      >
        <FaBars />
      </button>
    </div>
  );
};

export default MobileMenu; 