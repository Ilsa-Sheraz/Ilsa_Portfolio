import React, { useState, useEffect } from 'react';

const navItems = ['Home', 'About', 'Education', 'Skills', 'Experiences', 'Projects'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (let id of navItems) {
        const section = document.getElementById(id.toLowerCase());
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Ilsa Sheraz</h1>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            ☰
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 text-white font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={handleLinkClick}
                className={`relative transition duration-300 hover:scale-110 hover:text-cyan-400 ${
                  activeSection === item ? 'text-cyan-400' : ''
                }`}
              >
                {item}
                {activeSection === item && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-cyan-400 rounded" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 text-white space-y-2 bg-gray-800">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={handleLinkClick}
                className={`block py-2 transition duration-300 hover:text-cyan-400 ${
                  activeSection === item ? 'text-cyan-400' : ''
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
