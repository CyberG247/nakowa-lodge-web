
export const roomTypes = [
  { id: 'standard', name: 'Standard Room', price: 25000 },
  { id: 'deluxe', name: 'Deluxe Room', price: 35000 },
  { id: 'executive', name: 'Executive Chalet', price: 50000 },
  { id: 'family', name: 'Family Room', price: 45000 },
  { id: 'honeymoon', name: 'Honeymoon Suite', price: 60000 },
];

export const amenities = [
  { id: 'breakfast', name: 'Breakfast Included', price: 5000 },
  { id: 'event_hall', name: 'Event/Party Hall', price: 50000 },
  { id: 'conference', name: 'Conference Room', price: 30000 },
  { id: 'massage', name: 'Traditional Massage Service', price: 15000 },
  { id: 'car_hire', name: 'Car Hire/Driver Service', price: 20000 },
  { id: 'power', name: '24-Hour Power Supply Guarantee', price: 10000 },
];

export const calculateTotalPrice = (
  roomTypeId: string, 
  checkIn: Date | null, 
  checkOut: Date | null, 
  selectedAmenities: string[]
): number => {
  const selectedRoom = roomTypes.find(room => room.id === roomTypeId);
  const roomPrice = selectedRoom?.price || 0;
  
  const amenitiesPrice = selectedAmenities.reduce((total, amenityId) => {
    const amenity = amenities.find(a => a.id === amenityId);
    return total + (amenity?.price || 0);
  }, 0);
  
  // Calculate number of nights
  const nights = checkIn && checkOut ? 
    Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) : 0;
  
  return (roomPrice * (nights || 1)) + amenitiesPrice;
};

export const formatCurrency = (amount: number): string => {
  return `₦${amount.toLocaleString()}`;
};
