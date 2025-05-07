
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md w-full z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-navy">
              <span className="text-accent-red">B.</span> Nakowa
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="navbar-link font-medium text-navy hover:text-accent-red">Home</Link>
            <Link to="/rooms" className="navbar-link font-medium text-navy hover:text-accent-red">Rooms & Suites</Link>
            <Link to="/about" className="navbar-link font-medium text-navy hover:text-accent-red">About Us</Link>
            <Link to="/gallery" className="navbar-link font-medium text-navy hover:text-accent-red">Gallery</Link>
            <Link to="/contact" className="navbar-link font-medium text-navy hover:text-accent-red">Contact</Link>
          </div>

          {/* Booking Buttons - Desktop */}
          <div className="hidden md:flex space-x-4">
            <Button 
              variant="outline" 
              className="booking-btn border-accent-red text-accent-red hover:bg-accent-red hover:text-white"
              onClick={() => console.log('Book Standard Room')}
            >
              Book Now
            </Button>
            <Button 
              className="booking-btn bg-navy hover:bg-navy-light text-white" 
              onClick={() => console.log('Book Executive Chalet')}
            >
              Book Executive Chalet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 text-navy rounded-md hover:bg-accent-beige focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full z-20 animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link to="/" className="block py-2 px-4 text-navy hover:bg-accent-beige rounded-md" onClick={toggleMenu}>Home</Link>
            <Link to="/rooms" className="block py-2 px-4 text-navy hover:bg-accent-beige rounded-md" onClick={toggleMenu}>Rooms & Suites</Link>
            <Link to="/about" className="block py-2 px-4 text-navy hover:bg-accent-beige rounded-md" onClick={toggleMenu}>About Us</Link>
            <Link to="/gallery" className="block py-2 px-4 text-navy hover:bg-accent-beige rounded-md" onClick={toggleMenu}>Gallery</Link>
            <Link to="/contact" className="block py-2 px-4 text-navy hover:bg-accent-beige rounded-md" onClick={toggleMenu}>Contact</Link>
            <div className="pt-2 space-y-2">
              <Button 
                variant="outline" 
                className="w-full booking-btn border-accent-red text-accent-red hover:bg-accent-red hover:text-white"
                onClick={() => {
                  console.log('Book Standard Room');
                  setIsMenuOpen(false);
                }}
              >
                Book Now
              </Button>
              <Button 
                className="w-full booking-btn bg-navy hover:bg-navy-light text-white" 
                onClick={() => {
                  console.log('Book Executive Chalet');
                  setIsMenuOpen(false);
                }}
              >
                Book Executive Chalet
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
