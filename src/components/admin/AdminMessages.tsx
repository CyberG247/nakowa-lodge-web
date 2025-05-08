
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Trash, Mail, Check, Eye } from 'lucide-react';
import { toast } from 'sonner';

// Mock data for demo
const mockMessages = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john@example.com',
    subject: 'Booking Inquiry',
    message: 'I would like to inquire about availability for the first week of June. Do you have any executive chalets available during that period?',
    date: '2025-05-01T10:30:00',
    read: true
  },
  {
    id: 2,
    name: 'Maria Garcia',
    email: 'maria@example.com',
    subject: 'Special Request',
    message: 'We will be celebrating our anniversary during our stay. Is it possible to arrange for some flowers and champagne in our room? We are staying from May 15-18.',
    date: '2025-05-02T14:15:00',
    read: false
  },
  {
    id: 3,
    name: 'Ahmed Hassan',
    email: 'ahmed@example.com',
    subject: 'Group Booking',
    message: 'I represent a company looking to book 10 rooms for a corporate retreat. Could you please provide information on group discounts and available amenities for corporate events?',
    date: '2025-05-03T09:45:00',
    read: false
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    subject: 'Transportation Query',
    message: 'I will be arriving at the airport around midnight. Do you offer late-night pickup services? If so, what are the charges and how can I arrange for it?',
    date: '2025-05-04T18:20:00',
    read: true
  }
];

const AdminMessages = () => {
  const [messages, setMessages] = useState(mockMessages);
  const [selectedMessage, setSelectedMessage] = useState<any | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleViewMessage = (message: any) => {
    setSelectedMessage(message);
    setIsDialogOpen(true);
    
    // Mark as read if not already
    if (!message.read) {
      setMessages(messages.map(msg => 
        msg.id === message.id ? { ...msg, read: true } : msg
      ));
    }
  };

  const handleDeleteMessage = (id: number) => {
    if (confirm('Are you sure you want to delete this message?')) {
      setMessages(messages.filter(message => message.id !== id));
      toast.success('Message deleted successfully');
    }
  };

  const handleMarkAsRead = (id: number) => {
    setMessages(messages.map(message => 
      message.id === id ? { ...message, read: true } : message
    ));
    toast.success('Message marked as read');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const unreadCount = messages.filter(msg => !msg.read).length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Messages</h2>
          {unreadCount > 0 && (
            <p className="text-sm text-accent-red">
              {unreadCount} unread {unreadCount === 1 ? 'message' : 'messages'}
            </p>
          )}
        </div>
      </div>
      
      <div className="border rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sender
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subject
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {messages.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                  No messages found
                </td>
              </tr>
            ) : (
              messages.map((message) => (
                <tr 
                  key={message.id} 
                  className={`${!message.read ? 'bg-blue-50' : ''} hover:bg-gray-50 cursor-pointer`}
                  onClick={() => handleViewMessage(message)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center ${!message.read ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}>
                        <span className="text-lg font-medium">{message.name.charAt(0)}</span>
                      </div>
                      <div className="ml-4">
                        <div className={`text-sm font-medium ${!message.read ? 'font-semibold' : 'text-gray-900'}`}>
                          {message.name}
                        </div>
                        <div className="text-sm text-gray-500">{message.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`text-sm ${!message.read ? 'font-semibold' : 'text-gray-900'}`}>
                      {message.subject}
                    </div>
                    <div className="text-sm text-gray-500 truncate max-w-xs">
                      {message.message}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(message.date)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-blue-600 hover:text-blue-900"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewMessage(message);
                      }}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    {!message.read && (
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-green-600 hover:text-green-900"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMarkAsRead(message.id);
                        }}
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                    )}
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-red-600 hover:text-red-900"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteMessage(message.id);
                      }}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{selectedMessage?.subject}</DialogTitle>
          </DialogHeader>
          {selectedMessage && (
            <div className="space-y-4 py-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <div className="font-medium text-lg">{selectedMessage.name}</div>
                  <div className="text-gray-500">{selectedMessage.email}</div>
                </div>
                <div className="text-sm text-gray-500">
                  {formatDate(selectedMessage.date)}
                </div>
              </div>
              
              <div className="whitespace-pre-wrap text-gray-700 min-h-[200px]">
                {selectedMessage.message}
              </div>
              
              <div className="pt-4 flex justify-end space-x-4 border-t">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Close
                </Button>
                <Button className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Reply
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminMessages;
