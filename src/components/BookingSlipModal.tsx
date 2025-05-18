
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';
import { useBookingStore } from '@/stores/bookingStore';

const BookingSlipModal = () => {
  const { 
    showSlip, 
    setShowSlip, 
    bookingData, 
    resetBookingData 
  } = useBookingStore();

  const handlePrint = () => {
    const printContent = document.getElementById('booking-slip');
    const originalContents = document.body.innerHTML;
    
    if (printContent) {
      document.body.innerHTML = printContent.innerHTML;
      window.print();
      document.body.innerHTML = originalContents;
      // Need to re-initialize the state since React is rerendered
      setTimeout(() => {
        setShowSlip(false);
        resetBookingData();
        window.location.href = '/';
      }, 100);
    }
  };

  if (!bookingData) return null;

  const { fullName, email, phone, roomType, guests, checkIn, checkOut, specialRequests } = bookingData;
  
  const formatDate = (date: Date | null) => {
    if (!date) return 'Not specified';
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Dialog open={showSlip} onOpenChange={setShowSlip}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-navy">Your Booking Confirmation</DialogTitle>
        </DialogHeader>
        
        <div id="booking-slip" className="p-6 bg-white border rounded-lg">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-navy">
              <span className="text-accent-red">Grand Ambar Palace</span> Hotels &amp; Suites
            </h2>
            <p className="text-gray-500">Dutse, Jigawa State, Nigeria</p>
          </div>
          
          <div className="border-t border-b border-gray-200 py-4 my-4">
            <h3 className="text-xl font-bold text-navy mb-4">Booking Details</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 font-medium">Guest Name:</p>
                <p className="font-bold">{fullName}</p>
              </div>
              
              <div>
                <p className="text-gray-600 font-medium">Booking ID:</p>
                <p className="font-bold">BN-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</p>
              </div>
              
              <div>
                <p className="text-gray-600 font-medium">Contact:</p>
                <p>{phone}</p>
              </div>
              
              <div>
                <p className="text-gray-600 font-medium">Email:</p>
                <p>{email}</p>
              </div>
              
              <div>
                <p className="text-gray-600 font-medium">Room Type:</p>
                <p>{roomType}</p>
              </div>
              
              <div>
                <p className="text-gray-600 font-medium">Guests:</p>
                <p>{guests}</p>
              </div>
              
              <div>
                <p className="text-gray-600 font-medium">Check-in:</p>
                <p>{formatDate(checkIn)}</p>
              </div>
              
              <div>
                <p className="text-gray-600 font-medium">Check-out:</p>
                <p>{formatDate(checkOut)}</p>
              </div>
            </div>
            
            {specialRequests && (
              <div className="mt-4">
                <p className="text-gray-600 font-medium">Special Requests:</p>
                <p>{specialRequests}</p>
              </div>
            )}
          </div>
          
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">Thank you for choosing Grand Ambar Palace Hotels & Suites.</p>
            <p className="text-sm text-gray-500">For any inquiries, please contact us at: +234 800 000 0000</p>
          </div>
        </div>
        
        <div className="flex justify-between mt-4">
          <Button 
            variant="outline" 
            onClick={() => {
              setShowSlip(false);
              resetBookingData();
              window.location.href = '/';
            }}
          >
            Return to Home
          </Button>
          <Button 
            onClick={handlePrint}
            className="bg-navy hover:bg-navy-light flex items-center gap-2"
          >
            <Printer size={18} /> Print Booking Slip
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingSlipModal;
