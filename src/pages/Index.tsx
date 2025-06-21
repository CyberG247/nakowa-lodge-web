import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';
import ServicesSection from '@/components/ServicesSection';
import TestimonialSlider from '@/components/TestimonialSlider';
import MapSection from '@/components/MapSection';
import BookingForm from '@/components/BookingForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Bed, Wifi, Utensils, Clock, Book, MapPin } from 'lucide-react';

// Featured Rooms
const featuredRooms = [
  {
    id: 'standard',
    name: 'Standard Room',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&h=500',
    capacity: 2,
    description: 'Our comfortable standard rooms offer all the amenities you need for a pleasant stay.'
  },
  {
    id: 'executive',
    name: 'Executive Chalet',
    price: 50000,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&h=500',
    capacity: 2,
    description: 'Experience luxury in our spacious executive chalets with premium amenities and services.'
  },
  {
    id: 'family',
    name: 'Family Room',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&h=400',
    capacity: 4,
    description: 'Perfect for families, these spacious rooms accommodate up to 4 guests comfortably.'
  }
];

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSlider />
      
      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">Welcome to Grand Ambar Palace Hotels &amp; Suites</h2>
              <div className="w-20 h-1 bg-accent-red mb-6"></div>
              <p className="text-gray-600 mb-6">
                Experience premium comfort and hospitality in the heart of Dutse, Jigawa State. 
                Grand Ambar Palace Hotels &amp; Suites offers an unparalleled blend of Nigerian warmth and international 
                standards, ensuring your stay is nothing short of exceptional.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you're traveling for business or leisure, our dedicated staff is committed to providing 
                you with personalized service that exceeds your expectations. Our growing customer base 
                is a testament to our commitment to excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-accent-beige flex items-center justify-center mr-3">
                    <Bed className="text-accent-red" size={24} />
                  </div>
                  <span className="font-medium">Comfortable Rooms</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-accent-beige flex items-center justify-center mr-3">
                    <Utensils className="text-accent-red" size={24} />
                  </div>
                  <span className="font-medium">Fine Dining</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-accent-beige flex items-center justify-center mr-3">
                    <Wifi className="text-accent-red" size={24} />
                  </div>
                  <span className="font-medium">Free WiFi</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-accent-beige flex items-center justify-center mr-3">
                    <Clock className="text-accent-red" size={24} />
                  </div>
                  <span className="font-medium">24/7 Service</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&h=500" 
                  alt="Hotel Lobby" 
                  className="rounded-lg shadow-md object-cover h-48 w-full" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&w=600&h=400" 
                  alt="Hotel Restaurant" 
                  className="rounded-lg shadow-md object-cover h-48 w-full" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&h=400" 
                  alt="Hotel Exterior" 
                  className="rounded-lg shadow-md object-cover h-48 w-full" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&h=400" 
                  alt="Hotel Pool" 
                  className="rounded-lg shadow-md object-cover h-48 w-full" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Featured Rooms */}
      <section className="py-16 bg-accent-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Featured Rooms</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience comfort and luxury in our beautifully designed rooms and suites.
            </p>
            <div className="w-20 h-1 bg-accent-red mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <div key={room.id} className="room-card rounded-lg overflow-hidden shadow-lg bg-white">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                  />
                  <div className="absolute top-3 right-3 bg-accent-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ₦{room.price.toLocaleString()}/night
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-navy">{room.name}</h3>
                  <div className="flex items-center space-x-2 mb-4 text-gray-600">
                    <Bed size={18} />
                    <span className="text-sm">{room.capacity} Guests</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {room.description}
                  </p>
                  <div className="flex justify-between items-center pt-2">
                    <button className="text-navy font-medium hover:text-accent-red transition-colors">
                      View Details
                    </button>
                    <a href="/booking" className="bg-accent-red hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors font-medium">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a href="/rooms" className="inline-flex items-center text-accent-red font-semibold hover:text-navy transition-colors">
              <span>View All Rooms</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <TestimonialSlider />
      
      {/* Booking Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">Book Your Stay</h2>
              <div className="w-20 h-1 bg-accent-red mb-6"></div>
              <p className="text-gray-600 mb-6">
                Experience the comfort and luxury of Grand Ambar Palace Hotels &amp; Suites. Our reservation process 
                is simple and hassle-free. Book directly with us for the best rates and special offers.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-accent-beige flex items-center justify-center mr-4 mt-1">
                    <Book className="text-accent-red" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Easy Online Booking</h4>
                    <p className="text-gray-600">Complete your reservation in just a few steps through our user-friendly booking form.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-accent-beige flex items-center justify-center mr-4 mt-1">
                    <MapPin className="text-accent-red" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Prime Location</h4>
                    <p className="text-gray-600">Situated in the heart of Dutse, with easy access to major attractions and business centers.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-accent-beige flex items-center justify-center mr-4 mt-1">
                    <Clock className="text-accent-red" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Flexible Check-in/Check-out</h4>
                    <p className="text-gray-600">We accommodate early check-ins and late check-outs whenever possible (subject to availability).</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <MapSection />
      
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default HomePage;
