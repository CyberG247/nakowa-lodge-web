
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Image as ImageIcon } from 'lucide-react';

// Gallery images data
const galleryData = [
  {
    id: 1,
    category: 'rooms',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&h=600',
    title: 'Deluxe Room',
  },
  {
    id: 2,
    category: 'rooms',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&h=600',
    title: 'Executive Suite',
  },
  {
    id: 3,
    category: 'dining',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&h=600',
    title: 'Restaurant',
  },
  {
    id: 4,
    category: 'facilities',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&h=600',
    title: 'Swimming Pool',
  },
  {
    id: 5,
    category: 'facilities',
    image: 'https://images.unsplash.com/photo-1574269910231-048185bebd4a?auto=format&fit=crop&w=800&h=600',
    title: 'Fitness Center',
  },
  {
    id: 6,
    category: 'dining',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&h=600',
    title: 'Breakfast Buffet',
  },
  {
    id: 7,
    category: 'rooms',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&h=600',
    title: 'Family Room',
  },
  {
    id: 8,
    category: 'events',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&h=600',
    title: 'Conference Room',
  },
  {
    id: 9,
    category: 'events',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&h=600',
    title: 'Event Hall',
  },
  {
    id: 10,
    category: 'dining',
    image: 'https://images.unsplash.com/photo-1529564879024-c54e7c2dd0e5?auto=format&fit=crop&w=800&h=600',
    title: 'Bar Lounge',
  },
  {
    id: 11,
    category: 'facilities',
    image: 'https://images.unsplash.com/photo-1604049928882-31200d4a13cf?auto=format&fit=crop&w=800&h=600',
    title: 'Lobby',
  },
  {
    id: 12,
    category: 'rooms',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&h=600',
    title: 'Honeymoon Suite',
  }
];

const GalleryPage = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<null | string>(null);
  
  const filteredImages = filter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1920&h=600)' }}>
        <div className="absolute inset-0 bg-navy bg-opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Photo Gallery</h1>
            <div className="w-20 h-1 bg-accent-red mx-auto mb-4"></div>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Explore our beautiful spaces and facilities
            </p>
          </div>
        </div>
      </div>
      
      {/* Filter Buttons */}
      <div className="bg-accent-beige py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <Button 
              variant={filter === 'all' ? 'default' : 'outline'} 
              className={filter === 'all' ? 'bg-navy text-white' : 'bg-white border-navy text-navy hover:bg-navy hover:text-white'}
              onClick={() => setFilter('all')}
            >
              All Photos
            </Button>
            <Button 
              variant={filter === 'rooms' ? 'default' : 'outline'} 
              className={filter === 'rooms' ? 'bg-navy text-white' : 'bg-white border-navy text-navy hover:bg-navy hover:text-white'}
              onClick={() => setFilter('rooms')}
            >
              Rooms & Suites
            </Button>
            <Button 
              variant={filter === 'dining' ? 'default' : 'outline'} 
              className={filter === 'dining' ? 'bg-navy text-white' : 'bg-white border-navy text-navy hover:bg-navy hover:text-white'}
              onClick={() => setFilter('dining')}
            >
              Restaurant & Bar
            </Button>
            <Button 
              variant={filter === 'facilities' ? 'default' : 'outline'} 
              className={filter === 'facilities' ? 'bg-navy text-white' : 'bg-white border-navy text-navy hover:bg-navy hover:text-white'}
              onClick={() => setFilter('facilities')}
            >
              Facilities
            </Button>
            <Button 
              variant={filter === 'events' ? 'default' : 'outline'} 
              className={filter === 'events' ? 'bg-navy text-white' : 'bg-white border-navy text-navy hover:bg-navy hover:text-white'}
              onClick={() => setFilter('events')}
            >
              Events
            </Button>
          </div>
        </div>
      </div>
      
      {/* Gallery Grid */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((item) => (
              <div 
                key={item.id} 
                className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="aspect-square">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-medium">{item.title}</h3>
                  <div className="bg-accent-red h-0.5 w-10 my-2"></div>
                  <span className="text-white/90 text-sm capitalize">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full">
            <button 
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-black hover:bg-gray-200 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="w-full h-auto rounded-lg" 
            />
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default GalleryPage;
