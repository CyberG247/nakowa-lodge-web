
import React from 'react';
import { formatCurrency, calculateTotalPrice } from '@/utils/bookingData';

type BookingSummaryProps = {
  roomType: string;
  checkIn: Date | null;
  checkOut: Date | null;
  selectedAmenities: string[];
};

const BookingSummary = ({ 
  roomType, 
  checkIn, 
  checkOut, 
  selectedAmenities 
}: BookingSummaryProps) => {
  const totalPrice = calculateTotalPrice(roomType, checkIn, checkOut, selectedAmenities);
  
  return (
    <div className="bg-gray-50 p-4 rounded-md">
      <h4 className="font-bold text-lg mb-2 text-navy">Price Summary</h4>
      <div className="flex justify-between font-semibold text-xl">
        <span>Total:</span>
        <span>{formatCurrency(totalPrice)}</span>
      </div>
      <p className="text-sm text-gray-500 mt-1">
        * Final price may vary based on length of stay and additional services
      </p>
    </div>
  );
};

export default BookingSummary;
