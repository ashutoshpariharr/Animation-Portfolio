import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

import { navLinks } from '../constants/index.js';
import LanguageDropdown from '../components/LanguageDropdown.jsx';
import logoAnimation from '../../public/assets/logo-animation2.mp4';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  const [language, setLanguage] = useState('en');

  const handleChildData = (data) => {
    setLanguage(data);
  };

  const NavItems = ({ onClick = () => {} }) => (
    <ul className="nav-ul">
      {navLinks.map((item) => (
        <li key={item.id} className="nav-li">
          <a href={item.href} className={`nav-li_a ${item.style}`} onClick={onClick}>
            {/* {item.name} */}
            {language === 'en'
              ? item.name
              : language === 'de'
                ? item.name_de
                : language === 'fr'
                  ? item.name_fr
                  : item.name_sp}
          </a>
        </li>
      ))}
    </ul>
  );

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      const direction = current - scrollYProgress.getPrevious();
  
      if (scrollYProgress.get() < 0.05) {
        setVisible(true); // Show navbar when near the top
      } else if (direction < 0) {
        setVisible(true); // Scrolling up
      } else {
        setVisible(false); // Scrolling down
      }
    }
  });  

  return (
    <motion.header
      initial={{
        opacity: 1,
        y: -100,
      }}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.2,
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-2 mx-auto c-space">
          <video src={logoAnimation} autoPlay muted width={70}></video>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
            {/* Language change dropdown menu */}
            {/* <div className="flex items-center justify-end">
              <button className="text-white hover:text-gray-200 px-3 py-2">
                Contact
              </button>
            </div> */}
            &apos;&apos;&apos;&apos;&apos;
            <LanguageDropdown handleChildData={handleChildData} />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
          {/* <LanguageDropdown /> */}
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
