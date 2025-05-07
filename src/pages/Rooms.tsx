
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RoomCard from '@/components/RoomCard';
import { Bed } from 'lucide-react';
import { Button } from '@/components/ui/button';

const roomTypes = [
  {
    id: 'standard',
    name: 'Standard Room',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&h=500',
    capacity: 2,
    bedType: 'Queen Size',
    description: 'Our comfortable standard rooms offer all the amenities you need for a pleasant stay, including air conditioning, satellite TV, and a private bathroom with complimentary toiletries.'
  },
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&h=500',
    capacity: 2,
    bedType: 'King Size',
    description: 'Enjoy more space and enhanced amenities in our deluxe rooms, featuring premium bedding, a work desk, mini-fridge, and a spacious bathroom with bathtub.'
  },
  {
    id: 'executive',
    name: 'Executive Chalet',
    price: 50000,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&h=500',
    capacity: 2,
    bedType: 'King Size',
    description: 'Experience luxury in our spacious executive chalets with premium amenities, separate living area, kitchenette, dining space, and private balcony with scenic views.'
  },
  {
    id: 'family',
    name: 'Family Room',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&h=500',
    capacity: 4,
    bedType: '2 Queen Size',
    description: 'Perfect for families, these spacious rooms accommodate up to 4 guests comfortably with two queen beds, a large bathroom, and additional seating area.'
  },
  {
    id: 'honeymoon',
    name: 'Honeymoon Suite',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&h=500',
    capacity: 2,
    bedType: 'King Size',
    description: 'Our romantic honeymoon suite features a luxurious king-size bed, champagne service, jacuzzi bathtub, ambient lighting, and a private balcony perfect for couples.'
  },
  {
    id: 'presidential',
    name: 'Presidential Suite',
    price: 100000,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&h=500',
    capacity: 4,
    bedType: 'King Size + Sofa Bed',
    description: 'The ultimate in luxury, our presidential suite offers a sophisticated living space, dining area for 6, premium bar, king-size bedroom, and exclusive services.'
  }
];

const RoomsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1920&h=500)' }}>
        <div className="absolute inset-0 bg-navy bg-opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Rooms & Suites</h1>
            <div className="w-20 h-1 bg-accent-red mx-auto mb-4"></div>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Experience comfort and luxury in our beautifully designed accommodations
            </p>
          </div>
        </div>
      </div>
      
      {/* Filter Options */}
      <div className="bg-accent-beige py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-2">
              <Bed size={20} className="text-accent-red" />
              <h2 className="text-lg font-medium text-navy">Find Your Perfect Room</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="bg-white border-navy text-navy hover:bg-navy hover:text-white">
                All Rooms
              </Button>
              <Button variant="outline" className="bg-white border-navy text-navy hover:bg-navy hover:text-white">
                Standard
              </Button>
              <Button variant="outline" className="bg-white border-navy text-navy hover:bg-navy hover:text-white">
                Deluxe
              </Button>
              <Button variant="outline" className="bg-white border-navy text-navy hover:bg-navy hover:text-white">
                Executive
              </Button>
              <Button variant="outline" className="bg-white border-navy text-navy hover:bg-navy hover:text-white">
                Family
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Room Listings */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomTypes.map((room) => (
              <RoomCard
                key={room.id}
                id={room.id}
                name={room.name}
                price={room.price}
                image={room.image}
                capacity={room.capacity}
                bedType={room.bedType}
                description={room.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default RoomsPage;
