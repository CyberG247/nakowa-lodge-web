
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Wifi, Users, Bed } from 'lucide-react';

interface RoomCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  capacity: number;
  bedType: string;
  description: string;
}

const RoomCard: React.FC<RoomCardProps> = ({
  id,
  name,
  price,
  image,
  capacity,
  bedType,
  description,
}) => {
  return (
    <div className="room-card rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
        />
        <div className="absolute top-3 right-3 bg-accent-red text-white px-3 py-1 rounded-full text-sm font-semibold">
          ₦{price.toLocaleString()}/night
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-navy">{name}</h3>
        
        <div className="flex items-center space-x-4 mb-4 text-gray-600">
          <div className="flex items-center">
            <Users size={18} className="mr-1" />
            <span className="text-sm">{capacity} Guests</span>
          </div>
          <div className="flex items-center">
            <Bed size={18} className="mr-1" />
            <span className="text-sm">{bedType}</span>
          </div>
          <div className="flex items-center">
            <Wifi size={18} className="mr-1" />
            <span className="text-sm">Free WiFi</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex justify-between items-center pt-2">
          <Link to={`/rooms/${id}`}>
            <Button variant="outline" className="text-navy border-navy hover:bg-navy hover:text-white">
              View Details
            </Button>
          </Link>
          <Button className="bg-accent-red hover:bg-red-700 text-white">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
