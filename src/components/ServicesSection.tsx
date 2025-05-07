
import React from 'react';
import { Bed, Users, Image, Wifi, Clock, Utensils } from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Service = ({ icon, title, description }: ServiceProps) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="w-16 h-16 flex items-center justify-center bg-accent-beige rounded-full text-accent-red mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2 text-navy">{title}</h3>
    <p className="text-center text-gray-600 text-sm">{description}</p>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: <Bed size={28} />,
      title: "Luxurious Rooms",
      description: "Modern rooms with premium amenities for your ultimate comfort and relaxation."
    },
    {
      icon: <Utensils size={28} />,
      title: "Fine Dining",
      description: "Enjoy delicious local and international cuisine at our in-house restaurant."
    },
    {
      icon: <Wifi size={28} />,
      title: "Free WiFi",
      description: "Stay connected with high-speed internet throughout the property."
    },
    {
      icon: <Users size={28} />,
      title: "Event Spaces",
      description: "Perfect venues for meetings, conferences, and celebrations of all sizes."
    },
    {
      icon: <Clock size={28} />,
      title: "24/7 Service",
      description: "Our dedicated staff is available round the clock to assist with your needs."
    },
    {
      icon: <Image size={28} />,
      title: "Leisure Activities",
      description: "Swimming pool, fitness center, and more for your entertainment."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience premium hospitality services designed for your comfort and satisfaction at B. Nakowa Modern Guest Lodge.
          </p>
          <div className="w-20 h-1 bg-accent-red mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
