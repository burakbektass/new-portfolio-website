import React from 'react';
import { Link } from 'react-router-dom';

const NavigationLinks = ({ navLinks, activeLink, setActiveLink, setIsMenuOpen }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1 lg:gap-2 py-4 md:py-0">
      {navLinks.map(({ id, icon: Icon, text, path }) => (
        <Link
          key={id}
          to={path}
          target={id === "blog" ? "_blank" : undefined}
          onClick={() => {
            setActiveLink(id);
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}
          className={`px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium
            transition-all duration-300 flex items-center gap-2
            hover:bg-white/10 
            ${
              activeLink === id
                ? "bg-white/15 text-white"
                : "text-gray-300 hover:text-white"
            }
          `}
        >
          <Icon
            className={`text-base ${
              activeLink === id ? "scale-110" : ""
            }`}
          />
          <span className="inline">{text}</span>
        </Link>
      ))}
    </div>
  );
};

export default NavigationLinks; 