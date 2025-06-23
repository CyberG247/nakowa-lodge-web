
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface HotelSettings {
  hotelName: string;
  hotelDescription: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  timezone: string;
  currency: string;
  language: string;
  amenities: Array<{
    id: string;
    name: string;
    enabled: boolean;
    icon: any;
  }>;
}

interface NotificationSettings {
  emailNotifications: boolean;
  smsNotifications: boolean;
  pushNotifications: boolean;
  bookingAlerts: boolean;
  paymentAlerts: boolean;
  maintenanceAlerts: boolean;
}

interface SecuritySettings {
  twoFactorAuth: boolean;
  sessionTimeout: string;
  passwordExpiry: string;
  loginAttempts: string;
}

interface BookingSettings {
  autoConfirmBookings: boolean;
  maxAdvanceBooking: string;
  minBookingNotice: string;
  cancellationPolicy: string;
  overbookingAllowed: boolean;
}

interface PaymentSettings {
  autoPaymentProcessing: boolean;
  requireDeposit: boolean;
  depositAmount: string;
  lateFeeEnabled: boolean;
  lateFeeAmount: string;
}

interface SettingsStore {
  hotel: HotelSettings;
  notifications: NotificationSettings;
  security: SecuritySettings;
  booking: BookingSettings;
  payment: PaymentSettings;
  updateHotelSettings: (settings: Partial<HotelSettings>) => void;
  updateNotificationSettings: (settings: Partial<NotificationSettings>) => void;
  updateSecuritySettings: (settings: Partial<SecuritySettings>) => void;
  updateBookingSettings: (settings: Partial<BookingSettings>) => void;
  updatePaymentSettings: (settings: Partial<PaymentSettings>) => void;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      hotel: {
        hotelName: 'Grand Ambar Palace Hotel & Suites',
        hotelDescription: 'Luxury accommodation in the heart of the city',
        contactEmail: 'info@grandambarpalace.com',
        contactPhone: '+1 (555) 123-4567',
        address: '123 Luxury Avenue, City Center',
        timezone: 'UTC',
        currency: 'USD',
        language: 'en',
        amenities: [],
      },
      notifications: {
        emailNotifications: true,
        smsNotifications: false,
        pushNotifications: true,
        bookingAlerts: true,
        paymentAlerts: true,
        maintenanceAlerts: true,
      },
      security: {
        twoFactorAuth: false,
        sessionTimeout: '30',
        passwordExpiry: '90',
        loginAttempts: '5',
      },
      booking: {
        autoConfirmBookings: false,
        maxAdvanceBooking: '365',
        minBookingNotice: '2',
        cancellationPolicy: 'flexible',
        overbookingAllowed: false,
      },
      payment: {
        autoPaymentProcessing: true,
        requireDeposit: true,
        depositAmount: '20',
        lateFeeEnabled: false,
        lateFeeAmount: '50',
      },
      updateHotelSettings: (settings) =>
        set((state) => ({
          hotel: { ...state.hotel, ...settings },
        })),
      updateNotificationSettings: (settings) =>
        set((state) => ({
          notifications: { ...state.notifications, ...settings },
        })),
      updateSecuritySettings: (settings) =>
        set((state) => ({
          security: { ...state.security, ...settings },
        })),
      updateBookingSettings: (settings) =>
        set((state) => ({
          booking: { ...state.booking, ...settings },
        })),
      updatePaymentSettings: (settings) =>
        set((state) => ({
          payment: { ...state.payment, ...settings },
        })),
    }),
    {
      name: 'hotel-settings',
    }
  )
);
