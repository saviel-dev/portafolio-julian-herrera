
import { useState } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white bg-opacity-90 backdrop-blur-sm z-50 py-4 shadow-sm">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-gray-800">
          <span className="text-blue-600">{'<'}</span>
          Saviel Isculpi
          <span className="text-blue-600">{'/>'}</span>
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
              <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Inicio</a>
          <a href="#sobre-mi" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre mí</a>
          <a href="#proyectos" className="text-gray-700 hover:text-blue-600 transition-colors">Proyectos</a>
          <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors">Contacto</a>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out",
        isMenuOpen ? "max-h-64 py-4" : "max-h-0 overflow-hidden"
      )}>
        <nav className="flex flex-col space-y-4 px-4">
          <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Inicio</a>
          <a href="#sobre-mi" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Sobre mí</a>
          <a href="#proyectos" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Proyectos</a>
          <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
