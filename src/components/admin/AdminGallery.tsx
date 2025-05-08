
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Trash } from 'lucide-react';
import { toast } from 'sonner';

// Mock data for demo
const mockImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1587985064135-0366536eab42?auto=format&fit=crop&q=80&w=600&h=400',
    alt: 'Hotel Lobby',
    category: 'Common Areas'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&q=80&w=600&h=400',
    alt: 'Hotel Restaurant',
    category: 'Dining'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600&h=400',
    alt: 'Hotel Exterior',
    category: 'Exterior'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=600&h=400',
    alt: 'Hotel Pool',
    category: 'Amenities'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&h=400',
    alt: 'Standard Room',
    category: 'Rooms'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&h=400',
    alt: 'Executive Chalet',
    category: 'Rooms'
  }
];

const categories = ['All', 'Rooms', 'Dining', 'Exterior', 'Common Areas', 'Amenities'];

const AdminGallery = () => {
  const [images, setImages] = useState(mockImages);
  const [newImage, setNewImage] = useState({ url: '', alt: '', category: 'Rooms' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const handleAddImage = () => {
    if (newImage.url && newImage.alt) {
      setImages([...images, { id: images.length + 1, ...newImage }]);
      setNewImage({ url: '', alt: '', category: 'Rooms' });
      toast.success('Image added successfully');
    } else {
      toast.error('Image URL and description are required');
    }
  };

  const handleDeleteImage = (id: number) => {
    if (confirm('Are you sure you want to delete this image?')) {
      setImages(images.filter(img => img.id !== id));
      toast.success('Image deleted successfully');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Gallery Management</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white rounded-lg border">
        <div className="col-span-1 md:col-span-2">
          <Input
            placeholder="Image URL"
            value={newImage.url}
            onChange={(e) => setNewImage({...newImage, url: e.target.value})}
            className="mb-2"
          />
          {newImage.url && (
            <img 
              src={newImage.url} 
              alt="Preview" 
              className="h-40 object-cover w-full rounded mb-2" 
            />
          )}
        </div>
        <div className="space-y-2">
          <Input
            placeholder="Image Description"
            value={newImage.alt}
            onChange={(e) => setNewImage({...newImage, alt: e.target.value})}
          />
          <select
            className="w-full p-2 border rounded"
            value={newImage.category}
            onChange={(e) => setNewImage({...newImage, category: e.target.value})}
          >
            {categories.filter(c => c !== 'All').map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <Button 
            onClick={handleAddImage}
            className="w-full"
          >
            <Plus className="mr-2 h-4 w-4" /> Add Image
          </Button>
        </div>
      </div>
      
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {categories.map(category => (
          <Button 
            key={category} 
            variant={activeCategory === category ? 'default' : 'outline'}
            onClick={() => setActiveCategory(category)}
            className="whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map((image) => (
          <div key={image.id} className="group relative rounded-lg overflow-hidden">
            <img 
              src={image.url}
              alt={image.alt}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
              <Button 
                variant="destructive"
                size="sm"
                onClick={() => handleDeleteImage(image.id)}
              >
                <Trash className="h-4 w-4 mr-1" /> Delete
              </Button>
            </div>
            <div className="p-2">
              <p className="font-medium truncate">{image.alt}</p>
              <p className="text-xs text-gray-500">{image.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminGallery;
