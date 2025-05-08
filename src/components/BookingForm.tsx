
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useBookingStore, BookingData } from '@/stores/bookingStore';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const roomTypes = [
  { id: 'standard', name: 'Standard Room', price: 25000 },
  { id: 'deluxe', name: 'Deluxe Room', price: 35000 },
  { id: 'executive', name: 'Executive Chalet', price: 50000 },
  { id: 'family', name: 'Family Room', price: 45000 },
  { id: 'honeymoon', name: 'Honeymoon Suite', price: 60000 },
];

const amenities = [
  { id: 'breakfast', name: 'Breakfast Included', price: 5000 },
  { id: 'event_hall', name: 'Event/Party Hall', price: 50000 },
  { id: 'conference', name: 'Conference Room', price: 30000 },
  { id: 'massage', name: 'Traditional Massage Service', price: 15000 },
  { id: 'car_hire', name: 'Car Hire/Driver Service', price: 20000 },
  { id: 'power', name: '24-Hour Power Supply Guarantee', price: 10000 },
];

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
  selectedAmenities: z.array(z.string()).optional(),
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
    // Create booking data with all required fields
    const bookingData: BookingData = {
      ...values,
      selectedAmenities,
      specialRequests: values.specialRequests || '',
    };
    
    console.log('Booking data submitted:', bookingData);
    setBookingData(bookingData);
    toast.success("Booking submitted successfully!");
  };

  const selectedRoom = roomTypes.find(room => room.id === form.watch("roomType"));
  
  const calculateTotalPrice = () => {
    const roomPrice = selectedRoom?.price || 0;
    const amenitiesPrice = selectedAmenities.reduce((total, amenityId) => {
      const amenity = amenities.find(a => a.id === amenityId);
      return total + (amenity?.price || 0);
    }, 0);
    
    // Calculate number of nights
    const checkIn = form.watch("checkIn");
    const checkOut = form.watch("checkOut");
    const nights = checkIn && checkOut ? 
      Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) : 0;
    
    return (roomPrice * (nights || 1)) + amenitiesPrice;
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
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="w-full" />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" className="w-full" />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input {...field} type="tel" className="w-full" />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="roomType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Room Type</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                      >
                        {roomTypes.map(room => (
                          <option key={room.id} value={room.id}>
                            {room.name} - ₦{room.price.toLocaleString()}/night
                          </option>
                        ))}
                      </select>
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="guests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Guests</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                      >
                        {[1, 2, 3, 4, 5, 6].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="checkIn"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Check-In Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="checkOut"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Check-Out Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => {
                            const checkIn = form.watch("checkIn");
                            return !checkIn || date <= checkIn;
                          }}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="specialRequests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Special Requests</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Any special requests or preferences?"
                        className="min-h-[120px]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Method</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                      >
                        <option value="on_arrival">Pay on Arrival</option>
                        <option value="bank_transfer">Bank Transfer</option>
                        <option value="card_payment">Card Payment</option>
                      </select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
          
          {/* Additional Services */}
          <div className="border-t pt-6">
            <h4 className="font-bold text-lg mb-4 text-navy">Additional Services</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {amenities.map((amenity) => (
                <div key={amenity.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={amenity.id}
                    checked={selectedAmenities.includes(amenity.id)}
                    onChange={() => toggleAmenity(amenity.id)}
                    className="mr-2 h-4 w-4"
                  />
                  <Label htmlFor={amenity.id} className="cursor-pointer text-sm">
                    {amenity.name} (+₦{amenity.price.toLocaleString()})
                  </Label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Price Summary */}
          <div className="bg-gray-50 p-4 rounded-md">
            <h4 className="font-bold text-lg mb-2 text-navy">Price Summary</h4>
            <div className="flex justify-between font-semibold text-xl">
              <span>Total:</span>
              <span>₦{calculateTotalPrice().toLocaleString()}</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              * Final price may vary based on length of stay and additional services
            </p>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-accent-red hover:bg-navy text-white py-3 rounded-md"
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
