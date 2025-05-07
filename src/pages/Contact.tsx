
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MapSection from '@/components/MapSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=1920&h=600)' }}>
        <div className="absolute inset-0 bg-navy bg-opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <div className="w-20 h-1 bg-accent-red mx-auto mb-4"></div>
            <p className="text-xl text-white max-w-3xl mx-auto">
              We're here to help you with any queries about your stay
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-navy">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+234 800 000 0000"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <Input 
                    id="subject" 
                    type="text" 
                    placeholder="Reservation Inquiry"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    placeholder="Type your message here..."
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  ></textarea>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-navy hover:bg-navy-light text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-navy">Contact Information</h2>
              
              <div className="space-y-8">
                <p className="text-gray-700">
                  We welcome your inquiries and look forward to assisting you with your accommodation needs. 
                  Reach out to us via any of the following contact methods:
                </p>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-accent-beige p-3 rounded-full text-accent-red">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Phone Number</h3>
                    <p className="text-gray-700">+234 800 123 4567</p>
                    <p className="text-gray-700">+234 701 234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-accent-beige p-3 rounded-full text-accent-red">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Email Address</h3>
                    <p className="text-gray-700">info@bnakowalodge.com</p>
                    <p className="text-gray-700">reservations@bnakowalodge.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-accent-beige p-3 rounded-full text-accent-red">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Location</h3>
                    <p className="text-gray-700">123 Main Street, Dutse</p>
                    <p className="text-gray-700">Jigawa State, Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-accent-beige p-3 rounded-full text-accent-red">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Opening Hours</h3>
                    <p className="text-gray-700">Front Desk: 24/7</p>
                    <p className="text-gray-700">Restaurant: 6:30 AM - 10:30 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-accent-beige p-3 rounded-full text-accent-red">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Live Chat</h3>
                    <p className="text-gray-700">Chat with us on WhatsApp</p>
                    <Button 
                      className="mt-2 bg-[#25D366] hover:bg-[#128C7E] text-white"
                      onClick={() => window.open('https://wa.me/2348001234567', '_blank')}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                        <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a8.03 8.03 0 0 0-7.91 9.96L4 18l4.2-.7a7.94 7.94 0 0 0 3.79.96h.04A8.02 8.02 0 0 0 20 10.16a7.93 7.93 0 0 0-2.4-3.84zm-5.55 12.16h-.03a6.6 6.6 0 0 1-3.35-.92l-.24-.14-2.5.65.67-2.43-.16-.25a6.59 6.59 0 0 1-1.01-3.49A6.57 6.57 0 0 1 12.04 5.4a6.45 6.45 0 0 1 4.61 1.91 6.57 6.57 0 0 1 1.94 4.74 6.56 6.56 0 0 1-6.54 6.42zm3.57-4.93c-.2-.1-1.17-.58-1.35-.64-.18-.06-.31-.1-.44.1-.13.2-.5.64-.61.77-.11.13-.23.15-.43.05a5.44 5.44 0 0 1-1.6-1 6.03 6.03 0 0 1-1.1-1.37c-.12-.2-.01-.3.09-.4.09-.09.2-.24.3-.36.1-.12.13-.2.2-.34.07-.13.03-.24-.02-.34-.05-.1-.44-1.05-.6-1.43-.16-.38-.31-.32-.43-.32-.11 0-.24-.02-.37-.02-.13 0-.34.05-.53.25-.18.2-.7.7-.7 1.7s.72 1.97.82 2.11c.1.14 1.42 2.17 3.45 3.04.48.21.86.33 1.15.43.49.15.93.13 1.28.08.39-.06 1.17-.48 1.34-.94.17-.46.17-.86.12-.94-.05-.08-.18-.12-.38-.21z"/>
                      </svg>
                      Chat Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <MapSection />
      
      <Footer />
    </div>
  );
};

export default ContactPage;
