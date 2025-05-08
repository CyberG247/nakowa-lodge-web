
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Printer, Check, X, Edit } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { toast } from 'sonner';

// Mock data for demo
const mockBookings = [
  {
    id: 'BN-1001',
    guestName: 'John Doe',
    email: 'john@example.com',
    phone: '+23480123456',
    roomType: 'Executive Chalet',
    checkIn: '2025-05-10',
    checkOut: '2025-05-15',
    guests: 2,
    status: 'Confirmed',
    totalAmount: 250000,
  },
  {
    id: 'BN-1002',
    guestName: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+23481234567',
    roomType: 'Standard Room',
    checkIn: '2025-05-12',
    checkOut: '2025-05-14',
    guests: 1,
    status: 'Pending',
    totalAmount: 50000,
  },
  {
    id: 'BN-1003',
    guestName: 'Ahmed Hassan',
    email: 'ahmed@example.com',
    phone: '+23482345678',
    roomType: 'Family Room',
    checkIn: '2025-05-15',
    checkOut: '2025-05-20',
    guests: 4,
    status: 'Confirmed',
    totalAmount: 225000,
  },
  {
    id: 'BN-1004',
    guestName: 'Maria Garcia',
    email: 'maria@example.com',
    phone: '+23483456789',
    roomType: 'Honeymoon Suite',
    checkIn: '2025-05-18',
    checkOut: '2025-05-22',
    guests: 2,
    status: 'Cancelled',
    totalAmount: 240000,
  },
  {
    id: 'BN-1005',
    guestName: 'Samuel Johnson',
    email: 'samuel@example.com',
    phone: '+23484567890',
    roomType: 'Deluxe Room',
    checkIn: '2025-05-20',
    checkOut: '2025-05-23',
    guests: 2,
    status: 'Pending',
    totalAmount: 105000,
  },
];

const AdminBookings = () => {
  const [bookings, setBookings] = useState(mockBookings);
  const [searchTerm, setSearchTerm] = useState('');
  const [editBooking, setEditBooking] = useState<any | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const filteredBookings = bookings.filter(booking => 
    booking.guestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.roomType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStatusChange = (id: string, status: string) => {
    setBookings(bookings.map(booking => 
      booking.id === id ? { ...booking, status } : booking
    ));
    toast.success(`Booking ${id} status changed to ${status}`);
  };

  const handleEditSave = () => {
    setBookings(bookings.map(booking => 
      booking.id === editBooking.id ? editBooking : booking
    ));
    setDialogOpen(false);
    toast.success(`Booking ${editBooking.id} updated successfully`);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Bookings Management</h2>
        <Button>
          <Printer className="mr-2 h-4 w-4" /> Export Report
        </Button>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="w-1/3">
          <Input
            placeholder="Search bookings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => setSearchTerm('')}>All</Button>
          <Button variant="outline" onClick={() => setSearchTerm('confirmed')}>Confirmed</Button>
          <Button variant="outline" onClick={() => setSearchTerm('pending')}>Pending</Button>
          <Button variant="outline" onClick={() => setSearchTerm('cancelled')}>Cancelled</Button>
        </div>
      </div>
      
      <div className="border rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Booking ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Guest
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Room
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Check-In/Out
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredBookings.map((booking) => (
              <tr key={booking.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {booking.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="font-medium">{booking.guestName}</div>
                  <div className="text-xs">{booking.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {booking.roomType}
                  <div className="text-xs">{booking.guests} guests</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(booking.checkIn).toLocaleDateString()} - {new Date(booking.checkOut).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ₦{booking.totalAmount.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                    {booking.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => {
                      setEditBooking(booking);
                      setDialogOpen(true);
                    }}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-green-600"
                    onClick={() => handleStatusChange(booking.id, 'Confirmed')}
                  >
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-red-600"
                    onClick={() => handleStatusChange(booking.id, 'Cancelled')}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Booking</DialogTitle>
          </DialogHeader>
          {editBooking && (
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Guest Name</label>
                <Input 
                  value={editBooking.guestName} 
                  onChange={(e) => setEditBooking({...editBooking, guestName: e.target.value})} 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input 
                  value={editBooking.email} 
                  onChange={(e) => setEditBooking({...editBooking, email: e.target.value})} 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone</label>
                <Input 
                  value={editBooking.phone} 
                  onChange={(e) => setEditBooking({...editBooking, phone: e.target.value})} 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Room Type</label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={editBooking.roomType}
                  onChange={(e) => setEditBooking({...editBooking, roomType: e.target.value})}
                >
                  <option>Standard Room</option>
                  <option>Deluxe Room</option>
                  <option>Executive Chalet</option>
                  <option>Family Room</option>
                  <option>Honeymoon Suite</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Check-In Date</label>
                <Input 
                  type="date"
                  value={editBooking.checkIn} 
                  onChange={(e) => setEditBooking({...editBooking, checkIn: e.target.value})} 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Check-Out Date</label>
                <Input 
                  type="date"
                  value={editBooking.checkOut} 
                  onChange={(e) => setEditBooking({...editBooking, checkOut: e.target.value})} 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Guests</label>
                <Input 
                  type="number"
                  value={editBooking.guests} 
                  onChange={(e) => setEditBooking({...editBooking, guests: parseInt(e.target.value)})} 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={editBooking.status}
                  onChange={(e) => setEditBooking({...editBooking, status: e.target.value})}
                >
                  <option>Pending</option>
                  <option>Confirmed</option>
                  <option>Cancelled</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Amount (₦)</label>
                <Input 
                  type="number"
                  value={editBooking.totalAmount} 
                  onChange={(e) => setEditBooking({...editBooking, totalAmount: parseInt(e.target.value)})} 
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleEditSave}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminBookings;
