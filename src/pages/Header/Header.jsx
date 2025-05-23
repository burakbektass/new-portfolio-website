import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaExternalLinkSquareAlt,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";
import MobileMenu from "./MobileMenu";
import "./Header.css";

// NavLinks array'ini component dışına taşıyoruz
const NAV_LINKS = [
  { id: "home", icon: FaHome, text: "Home", path: "/" },
  { id: "experience", icon: FaBriefcase, text: "Experience", path: "/experience" },
  { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
  { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
  { id: "education", icon: FaGraduationCap, text: "Education", path: "/education" },
  { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
  { id: "blog", icon: FaExternalLinkSquareAlt, text: "Blog", path: "https://medium.com/@bektasburakk" },
];

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname.substring(1) || "home";
    return path;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Event handler'ı useCallback ile optimize ediyoruz
  const handleClickOutside = useCallback((event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  // NavLinks'i useMemo ile optimize ediyoruz
  const navLinks = useMemo(() => NAV_LINKS, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
      <div className="md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">
        <div className="p-[2px] md:rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-gradient-x">
          <nav ref={menuRef} className="bg-gray-900/90 backdrop-blur-md md:rounded-full px-4 md:px-6 py-2.5">
            <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
              <NavigationLinks 
                navLinks={navLinks}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
                setIsMenuOpen={setIsMenuOpen}
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
