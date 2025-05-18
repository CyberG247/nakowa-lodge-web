import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import BookingSlipModal from '@/components/BookingSlipModal';
import WhatsAppButton from '@/components/WhatsAppButton';

const Booking = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-navy">Book Your Stay</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete the form below to book your room at Grand Ambar Palace Hotels &amp; Suites. 
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
