import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const menuItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Skills", link: "/skills" },
    { title: "Project", link: "/projects" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-900 bg-opacity-80 backdrop-blur-md border border-white rounded-2xl shadow-lg text-white w-11/12 max-w-4xl p-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-xl">AR</div>
        
        {/* Menu Tengah */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="px-3 py-2 rounded-md text-sm font-medium relative group"
            >
              <span className="relative after:absolute after:-bottom-1/4 after:left-0 after:h-0.5 after:w-0 group-hover:after:w-full after:transition-all after:duration-300 after:bg-blue-300">
                {item.title}
              </span>
            </a>
          ))}
        </div>
        
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="hidden md:flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white"
        >
          {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
        </button>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 border-t border-white pt-2">
          <div className="px-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-300 transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
