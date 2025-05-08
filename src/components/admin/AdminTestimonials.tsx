
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Edit, Plus, Trash } from 'lucide-react';
import { toast } from 'sonner';

// Mock data for demo
const mockTestimonials = [
  {
    id: 1,
    name: 'Ahmed Hassan',
    role: 'Business Traveler',
    content: 'B. Nakowa exceeded all my expectations. The staff was incredibly attentive, and the executive chalet was perfect for my business trip to Dutse.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 2,
    name: 'Fatima Ibrahim',
    role: 'Tourist',
    content: 'I had a wonderful stay! The rooms were clean and comfortable, and the restaurant served delicious local cuisine. Will definitely return.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 3,
    name: 'John Okafor',
    role: 'Family Vacation',
    content: 'Our family room was spacious and perfect for our children. The staff was very accommodating with our requests and made our stay memorable.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/22.jpg'
  },
  {
    id: 4,
    name: 'Amina Mohammed',
    role: 'Honeymoon',
    content: 'We chose the honeymoon suite for our special occasion and it was magical. The room was beautiful and the special touches made it perfect.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/84.jpg'
  }
];

const AdminTestimonials = () => {
  const [testimonials, setTestimonials] = useState(mockTestimonials);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState<any>(null);
  const [isNewTestimonial, setIsNewTestimonial] = useState(false);

  const handleOpenDialog = (testimonial: any = null) => {
    if (testimonial) {
      setCurrentTestimonial({...testimonial});
      setIsNewTestimonial(false);
    } else {
      setCurrentTestimonial({
        id: testimonials.length + 1,
        name: '',
        role: '',
        content: '',
        rating: 5,
        image: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 99)}.jpg`
      });
      setIsNewTestimonial(true);
    }
    setIsDialogOpen(true);
  };

  const handleSaveTestimonial = () => {
    if (isNewTestimonial) {
      setTestimonials([...testimonials, currentTestimonial]);
      toast.success('Testimonial added successfully');
    } else {
      setTestimonials(testimonials.map(t => t.id === currentTestimonial.id ? currentTestimonial : t));
      toast.success('Testimonial updated successfully');
    }
    setIsDialogOpen(false);
  };

  const handleDeleteTestimonial = (id: number) => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      setTestimonials(testimonials.filter(t => t.id !== id));
      toast.success('Testimonial deleted successfully');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Testimonial Management</h2>
        <Button onClick={() => handleOpenDialog()}>
          <Plus className="mr-2 h-4 w-4" /> Add Testimonial
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-12 h-12 rounded-full object-cover mr-4" 
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="h-8 w-8 p-0" 
                      onClick={() => handleOpenDialog(testimonial)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="h-8 w-8 p-0 text-red-500" 
                      onClick={() => handleDeleteTestimonial(testimonial.id)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex text-yellow-400 my-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={star <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{isNewTestimonial ? 'Add New Testimonial' : 'Edit Testimonial'}</DialogTitle>
          </DialogHeader>
          {currentTestimonial && (
            <div className="space-y-4 py-4">
              <div className="flex items-center space-x-4">
                <img 
                  src={currentTestimonial.image} 
                  alt="Profile" 
                  className="w-16 h-16 rounded-full object-cover" 
                />
                <div className="flex-1">
                  <Input 
                    placeholder="Customer Name"
                    value={currentTestimonial.name} 
                    onChange={(e) => setCurrentTestimonial({...currentTestimonial, name: e.target.value})} 
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium">Customer Role/Type</label>
                <Input 
                  placeholder="e.g., Business Traveler, Tourist"
                  value={currentTestimonial.role} 
                  onChange={(e) => setCurrentTestimonial({...currentTestimonial, role: e.target.value})} 
                />
              </div>
              
              <div>
                <label className="text-sm font-medium">Rating</label>
                <div className="flex space-x-1 text-2xl my-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button 
                      key={star}
                      type="button"
                      className={star <= currentTestimonial.rating ? 'text-yellow-400' : 'text-gray-300'}
                      onClick={() => setCurrentTestimonial({...currentTestimonial, rating: star})}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium">Testimonial Text</label>
                <Textarea 
                  placeholder="What did the customer say?"
                  value={currentTestimonial.content} 
                  onChange={(e) => setCurrentTestimonial({...currentTestimonial, content: e.target.value})} 
                  rows={5}
                />
              </div>
              
              <div>
                <label className="text-sm font-medium">Customer Image URL (optional)</label>
                <Input 
                  placeholder="Image URL"
                  value={currentTestimonial.image} 
                  onChange={(e) => setCurrentTestimonial({...currentTestimonial, image: e.target.value})} 
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveTestimonial}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminTestimonials;
