
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Edit, Plus, Trash } from 'lucide-react';
import { toast } from 'sonner';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Mock data for demo
const mockFAQs = [
  {
    id: 1,
    question: 'What are the check-in and check-out times?',
    answer: 'Check-in time is 2:00 PM, and check-out time is 12:00 PM. Early check-in and late check-out can be arranged based on availability.',
    category: 'Booking'
  },
  {
    id: 2,
    question: 'Is breakfast included in the room rate?',
    answer: 'Breakfast is included in some of our packages. You can add breakfast to your booking during the reservation process for an additional fee.',
    category: 'Dining'
  },
  {
    id: 3,
    question: 'Do you offer airport pickup services?',
    answer: 'Yes, we offer airport pickup and drop-off services for an additional fee. Please contact our reception desk to arrange transportation.',
    category: 'Services'
  },
  {
    id: 4,
    question: 'Is there free WiFi available?',
    answer: 'Yes, complimentary high-speed WiFi is available throughout the hotel premises for all our guests.',
    category: 'Amenities'
  },
  {
    id: 5,
    question: 'What is your cancellation policy?',
    answer: 'Reservations must be cancelled at least 48 hours before the scheduled check-in time to receive a full refund. Cancellations within 48 hours may incur charges.',
    category: 'Booking'
  }
];

const categories = ['All', 'Booking', 'Amenities', 'Services', 'Dining', 'Payment', 'Other'];

const AdminFAQs = () => {
  const [faqs, setFAQs] = useState(mockFAQs);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentFAQ, setCurrentFAQ] = useState<any>(null);
  const [isNewFAQ, setIsNewFAQ] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFAQs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const handleOpenDialog = (faq: any = null) => {
    if (faq) {
      setCurrentFAQ({...faq});
      setIsNewFAQ(false);
    } else {
      setCurrentFAQ({
        id: faqs.length + 1,
        question: '',
        answer: '',
        category: 'Booking'
      });
      setIsNewFAQ(true);
    }
    setIsDialogOpen(true);
  };

  const handleSaveFAQ = () => {
    if (!currentFAQ.question || !currentFAQ.answer) {
      toast.error('Question and answer are required');
      return;
    }
    
    if (isNewFAQ) {
      setFAQs([...faqs, currentFAQ]);
      toast.success('FAQ added successfully');
    } else {
      setFAQs(faqs.map(faq => faq.id === currentFAQ.id ? currentFAQ : faq));
      toast.success('FAQ updated successfully');
    }
    setIsDialogOpen(false);
  };

  const handleDeleteFAQ = (id: number) => {
    if (confirm('Are you sure you want to delete this FAQ?')) {
      setFAQs(faqs.filter(faq => faq.id !== id));
      toast.success('FAQ deleted successfully');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">FAQ Management</h2>
        <Button onClick={() => handleOpenDialog()}>
          <Plus className="mr-2 h-4 w-4" /> Add FAQ
        </Button>
      </div>
      
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {categories.map(category => (
          <Button 
            key={category} 
            variant={activeCategory === category ? 'default' : 'outline'}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      
      <div className="bg-white rounded-lg border">
        <Accordion type="single" collapsible className="w-full">
          {filteredFAQs.map((faq) => (
            <AccordionItem key={faq.id} value={`faq-${faq.id}`} className="border-b last:border-b-0">
              <div className="flex justify-between items-center px-4">
                <AccordionTrigger className="flex-1 text-left">
                  {faq.question}
                </AccordionTrigger>
                <div className="flex space-x-2 p-2">
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="h-8 w-8 p-0" 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenDialog(faq);
                    }}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="h-8 w-8 p-0 text-red-500" 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteFAQ(faq.id);
                    }}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <AccordionContent className="px-4 pb-4">
                <div className="text-gray-600">
                  {faq.answer}
                </div>
                <div className="mt-2">
                  <span className="inline-block text-xs bg-gray-100 px-2 py-1 rounded-full">
                    {faq.category}
                  </span>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        {filteredFAQs.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            No FAQs found in this category
          </div>
        )}
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{isNewFAQ ? 'Add New FAQ' : 'Edit FAQ'}</DialogTitle>
          </DialogHeader>
          {currentFAQ && (
            <div className="space-y-4 py-4">
              <div>
                <label className="text-sm font-medium">Question</label>
                <Input 
                  placeholder="Enter the FAQ question"
                  value={currentFAQ.question} 
                  onChange={(e) => setCurrentFAQ({...currentFAQ, question: e.target.value})} 
                />
              </div>
              
              <div>
                <label className="text-sm font-medium">Answer</label>
                <Textarea 
                  placeholder="Enter the FAQ answer"
                  value={currentFAQ.answer} 
                  onChange={(e) => setCurrentFAQ({...currentFAQ, answer: e.target.value})} 
                  rows={5}
                />
              </div>
              
              <div>
                <label className="text-sm font-medium">Category</label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={currentFAQ.category}
                  onChange={(e) => setCurrentFAQ({...currentFAQ, category: e.target.value})}
                >
                  {categories.filter(c => c !== 'All').map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveFAQ}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminFAQs;
