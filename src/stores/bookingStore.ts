
import { create } from 'zustand';

interface BookingData {
  fullName: string;
  email: string;
  phone: string;
  roomType: string;
  guests: number;
  checkIn: Date | null;
  checkOut: Date | null;
  specialRequests: string;
  paymentMethod?: string;
}

interface BookingStore {
  showSlip: boolean;
  bookingData: BookingData | null;
  setShowSlip: (show: boolean) => void;
  setBookingData: (data: BookingData) => void;
  resetBookingData: () => void;
}

export const useBookingStore = create<BookingStore>((set) => ({
  showSlip: false,
  bookingData: null,
  setShowSlip: (show) => set({ showSlip: show }),
  setBookingData: (data) => set({ bookingData: data, showSlip: true }),
  resetBookingData: () => set({ bookingData: null, showSlip: false }),
}));
