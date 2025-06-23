
import React from 'react';

const MapSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-navy mb-2">Find Us</h2>
          <p className="text-gray-600">Conveniently located in the heart of Dutse, Jigawa State</p>
        </div>
        
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.123456789!2d9.3431234567890!3d11.7543210987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1105548a22caeb9d%3A0x5feb845c0d2fad56!2sGrand%20Ambar%20Palace%20Hotel%20%26%20Suite%2C%20Dutse!5e0!3m2!1sen!2sng!4v1715100148971!5m2!1sen!2sng"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Grand Ambar Palace Hotel & Suite Location"
          ></iframe>
        </div>
        
        <div className="mt-8 text-center">
          <div className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-navy mb-3">Our Address</h3>
            <p className="text-gray-700 mb-2">
              <strong>Grand Ambar Palace Hotel & Suite</strong>
            </p>
            <p className="text-gray-600 mb-1">
              Along Kano Road, Opposite Central Bank of Nigeria
            </p>
            <p className="text-gray-600 mb-1">
              Dutse, Jigawa State, Nigeria
            </p>
            <p className="text-gray-600">
              PMB 7008, Dutse, Jigawa State
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
