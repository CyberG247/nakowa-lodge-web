
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Edit, Plus, Trash } from 'lucide-react';
import { toast } from 'sonner';

// Mock data for demo
const mockRooms = [
  {
    id: 1,
    name: 'Standard Room',
    price: 25000,
    capacity: 2,
    description: 'Our comfortable standard rooms offer all the amenities you need for a pleasant stay.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&h=500',
    amenities: ['Air Conditioning', 'Free WiFi', 'TV', 'Private Bathroom']
  },
  {
    id: 2,
    name: 'Deluxe Room',
    price: 35000,
    capacity: 2,
    description: 'Step up to more space and premium amenities in our deluxe rooms.',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&h=500',
    amenities: ['Air Conditioning', 'Free WiFi', 'TV', 'Mini Bar', 'Private Bathroom', 'Work Desk']
  },
  {
    id: 3,
    name: 'Executive Chalet',
    price: 50000,
    capacity: 2,
    description: 'Experience luxury in our spacious executive chalets with premium amenities and services.',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&h=500',
    amenities: ['Air Conditioning', 'Free WiFi', 'Premium TV', 'Mini Bar', 'Private Bathroom', 'Work Desk', 'Lounge Area', 'Premium Toiletries']
  },
  {
    id: 4,
    name: 'Family Room',
    price: 45000,
    capacity: 4,
    description: 'Perfect for families, these spacious rooms accommodate up to 4 guests comfortably.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&h=500',
    amenities: ['Air Conditioning', 'Free WiFi', 'TV', 'Mini Bar', 'Private Bathroom', 'Extra Beds']
  },
  {
    id: 5,
    name: 'Honeymoon Suite',
    price: 60000,
    capacity: 2,
    description: 'Celebrate your special moments in our luxurious honeymoon suite with romantic touches.',
    image: 'https://images.unsplash.com/photo-1579974266022-9d5a228fdc8c?auto=format&fit=crop&w=800&h=500',
    amenities: ['Air Conditioning', 'Free WiFi', 'Premium TV', 'Mini Bar', 'Private Bathroom with Jacuzzi', 'King Size Bed', 'Champagne Service', 'Private Balcony']
  }
];

const AdminRooms = () => {
  const [rooms, setRooms] = useState(mockRooms);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentRoom, setCurrentRoom] = useState<any>(null);
  const [isNewRoom, setIsNewRoom] = useState(false);
  const [amenityInput, setAmenityInput] = useState('');

  const handleOpenDialog = (room: any = null) => {
    if (room) {
      setCurrentRoom({...room});
      setIsNewRoom(false);
    } else {
      setCurrentRoom({
        id: rooms.length + 1,
        name: '',
        price: 0,
        capacity: 2,
        description: '',
        image: '',
        amenities: []
      });
      setIsNewRoom(true);
    }
    setIsDialogOpen(true);
  };

  const handleSaveRoom = () => {
    if (isNewRoom) {
      setRooms([...rooms, currentRoom]);
      toast.success('Room added successfully');
    } else {
      setRooms(rooms.map(room => room.id === currentRoom.id ? currentRoom : room));
      toast.success('Room updated successfully');
    }
    setIsDialogOpen(false);
  };

  const handleDeleteRoom = (id: number) => {
    if (confirm('Are you sure you want to delete this room type?')) {
      setRooms(rooms.filter(room => room.id !== id));
      toast.success('Room deleted successfully');
    }
  };

  const handleAddAmenity = () => {
    if (amenityInput && !currentRoom.amenities.includes(amenityInput)) {
      setCurrentRoom({
        ...currentRoom,
        amenities: [...currentRoom.amenities, amenityInput]
      });
      setAmenityInput('');
    }
  };

  const handleRemoveAmenity = (amenity: string) => {
    setCurrentRoom({
      ...currentRoom,
      amenities: currentRoom.amenities.filter((a: string) => a !== amenity)
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Rooms & Suites Management</h2>
        <Button onClick={() => handleOpenDialog()}>
          <Plus className="mr-2 h-4 w-4" /> Add New Room
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rooms.map((room) => (
          <div key={room.id} className="border rounded-lg overflow-hidden">
            <div className="h-48 relative">
              <img 
                src={room.image} 
                alt={room.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex space-x-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="bg-white" 
                  onClick={() => handleOpenDialog(room)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="bg-white text-red-600" 
                  onClick={() => handleDeleteRoom(room.id)}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold">{room.name}</h3>
                <span className="text-accent-red font-semibold">₦{room.price.toLocaleString()}/night</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{room.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {room.amenities.map((amenity, idx) => (
                  <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                    {amenity}
                  </span>
                ))}
              </div>
              <div className="text-sm text-gray-500">Capacity: {room.capacity} guests</div>
            </div>
          </div>
        ))}
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{isNewRoom ? 'Add New Room' : 'Edit Room'}</DialogTitle>
          </DialogHeader>
          {currentRoom && (
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-2 col-span-2">
                <label className="text-sm font-medium">Room Name</label>
                <Input 
                  value={currentRoom.name} 
                  onChange={(e) => setCurrentRoom({...currentRoom, name: e.target.value})} 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Price per Night (₦)</label>
                <Input 
                  type="number"
                  value={currentRoom.price} 
                  onChange={(e) => setCurrentRoom({...currentRoom, price: parseInt(e.target.value)})} 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Capacity (Guests)</label>
                <Input 
                  type="number"
                  value={currentRoom.capacity} 
                  onChange={(e) => setCurrentRoom({...currentRoom, capacity: parseInt(e.target.value)})} 
                />
              </div>
              
              <div className="space-y-2 col-span-2">
                <label className="text-sm font-medium">Description</label>
                <Textarea 
                  value={currentRoom.description} 
                  onChange={(e) => setCurrentRoom({...currentRoom, description: e.target.value})} 
                  rows={3}
                />
              </div>
              
              <div className="space-y-2 col-span-2">
                <label className="text-sm font-medium">Image URL</label>
                <Input 
                  value={currentRoom.image} 
                  onChange={(e) => setCurrentRoom({...currentRoom, image: e.target.value})} 
                />
                {currentRoom.image && (
                  <img 
                    src={currentRoom.image} 
                    alt="Room preview" 
                    className="h-20 object-cover rounded mt-2"
                  />
                )}
              </div>
              
              <div className="space-y-2 col-span-2">
                <label className="text-sm font-medium">Amenities</label>
                <div className="flex gap-2">
                  <Input 
                    value={amenityInput}
                    onChange={(e) => setAmenityInput(e.target.value)}
                    placeholder="Add amenity..."
                  />
                  <Button type="button" onClick={handleAddAmenity}>Add</Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {currentRoom.amenities.map((amenity: string, idx: number) => (
                    <span 
                      key={idx} 
                      className="text-xs bg-gray-100 px-2 py-1 rounded-full flex items-center"
                    >
                      {amenity}
                      <button 
                        type="button" 
                        className="ml-1 text-gray-500 hover:text-red-500"
                        onClick={() => handleRemoveAmenity(amenity)}
                      >
                        &times;
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveRoom}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminRooms;
