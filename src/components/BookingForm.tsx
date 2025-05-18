
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useBookingStore, BookingData } from '@/stores/bookingStore';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import GuestInfoForm from './booking/GuestInfoForm';
import DateRangeSelector from './booking/DateRangeSelector';
import SpecialRequestsForm from './booking/SpecialRequestsForm';
import AmenitiesSelector from './booking/AmenitiesSelector';
import BookingSummary from './booking/BookingSummary';

// Define form schema with zod
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(8, { message: "Valid phone number is required" }),
  roomType: z.string(),
  guests: z.coerce.number().int().min(1).max(6),
  checkIn: z.date({ required_error: "Check-in date is required" }),
  checkOut: z.date({ required_error: "Check-out date is required" }),
  specialRequests: z.string().optional(),
  paymentMethod: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

const BookingForm = () => {
  const { setBookingData } = useBookingStore();
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  
  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      roomType: 'standard',
      guests: 1,
      specialRequests: '',
      paymentMethod: 'on_arrival',
    },
  });

  const onSubmit = (values: FormValues) => {
    // Explicitly match BookingData structure & required fields
    const {
      fullName,
      email,
      phone,
      roomType,
      guests,
      checkIn,
      checkOut,
      specialRequests,
      paymentMethod
    } = values;

    const bookingData: BookingData = {
      fullName,
      email,
      phone,
      roomType,
      guests,
      checkIn,
      checkOut,
      specialRequests: specialRequests || '',
      paymentMethod,
      selectedAmenities,
    };
    
    console.log('Booking data submitted:', bookingData);
    setBookingData(bookingData);
    toast.success("Booking submitted successfully!");
  };

  const toggleAmenity = (id: string) => {
    setSelectedAmenities(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6 text-navy text-center">Book Your Stay</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GuestInfoForm form={form} />
            
            <div className="space-y-4">
              <DateRangeSelector form={form} />
              <SpecialRequestsForm form={form} />
            </div>
          </div>
          
          <AmenitiesSelector 
            selectedAmenities={selectedAmenities} 
            toggleAmenity={toggleAmenity} 
          />
          
          <BookingSummary 
            roomType={form.watch("roomType")}
            checkIn={form.watch("checkIn")}
            checkOut={form.watch("checkOut")}
            selectedAmenities={selectedAmenities}
          />
          
          <Button 
            type="submit"
            className="w-full bg-navy text-white hover:bg-accent-red transition-colors py-3 rounded-md"
          >
            Complete Booking
          </Button>
          
          <p className="text-sm text-gray-500 text-center mt-2">
            * Your booking will be confirmed upon availability check and payment processing
          </p>
        </form>
      </Form>
    </div>
  );
};

export default BookingForm;

