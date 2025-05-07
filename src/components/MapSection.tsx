
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62362.626220269105!2d9.309374624580106!3d11.78503496131466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1105548a22caeb9d%3A0x5feb845c0d2fad56!2sDutse%2C%20Jigawa!5e0!3m2!1sen!2sng!4v1715100148971!5m2!1sen!2sng"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="B. Nakowa Lodge Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
