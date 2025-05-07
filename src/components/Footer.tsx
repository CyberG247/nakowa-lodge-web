
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-playfair text-white mb-4">B. Nakowa Lodge</h3>
            <p className="text-accent-grey text-sm mb-6">
              Experience premium comfort and hospitality in the heart of Dutse, Jigawa State.
              Your comfort is our culture. We redefine hospitality.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-white hover:text-accent-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-white hover:text-accent-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-white hover:text-accent-red transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-accent-grey hover:text-accent-red transition-colors">Home</Link></li>
              <li><Link to="/rooms" className="text-accent-grey hover:text-accent-red transition-colors">Rooms & Suites</Link></li>
              <li><Link to="/about" className="text-accent-grey hover:text-accent-red transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="text-accent-grey hover:text-accent-red transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-accent-grey hover:text-accent-red transition-colors">Contact</Link></li>
              <li><Link to="/faqs" className="text-accent-grey hover:text-accent-red transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-playfair text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-accent-red" />
                <span className="text-accent-grey">Dutse, Jigawa State, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-accent-red" />
                <a href="tel:+2348012345678" className="text-accent-grey hover:text-accent-red transition-colors">+234 801 234 5678</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-accent-red" />
                <a href="mailto:info@nakowalodge.com" className="text-accent-grey hover:text-accent-red transition-colors">info@nakowalodge.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-playfair text-white mb-4">Newsletter</h3>
            <p className="text-accent-grey text-sm mb-4">
              Subscribe to receive updates on our latest offers and news.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email"
                placeholder="Your Email Address"
                className="px-3 py-2 bg-navy-light text-white placeholder-accent-grey rounded-md border border-navy-light focus:outline-none focus:border-accent-red"
                required
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-accent-red text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-navy-light mt-8 pt-6">
          <p className="text-center text-accent-grey text-sm">
            &copy; {new Date().getFullYear()} B. Nakowa Modern Guest Lodge. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
