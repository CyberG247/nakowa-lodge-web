
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import BookingSlipModal from '@/components/BookingSlipModal';

const Booking = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-navy">Book Your Stay</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete the form below to book your room at B. Nakowa Modern Guest Lodge. 
            We'll confirm your reservation as soon as possible.
          </p>
          <div className="w-20 h-1 bg-accent-red mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <BookingForm />
        </div>
      </div>
      
      <Footer />
      <BookingSlipModal />
      <WhatsAppButton />
    </div>
  );
};

export default Booking;

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/+2348000000000" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      aria-label="Contact us on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
    </a>
  );
};
