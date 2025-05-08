
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Users, Calendar, MessageCircle } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
            <Book className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">148</div>
            <p className="text-xs text-gray-500">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Room Occupancy</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-gray-500">+5% from last week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Check-ins</CardTitle>
            <Calendar className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-gray-500">Next 7 days</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">New Messages</CardTitle>
            <MessageCircle className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-gray-500">4 unread</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
            <CardDescription>Latest 5 booking requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-gray-500">Executive Suite • 3 nights</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">May 1{i}, 2025</p>
                    <p className="text-xs text-gray-500">₦150,000</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Occupancy Overview</CardTitle>
            <CardDescription>Current room availability</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p>Standard Rooms</p>
                <div className="flex items-center">
                  <div className="w-32 h-2 bg-gray-200 rounded-full mr-2">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <span className="text-sm">6/10</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p>Deluxe Rooms</p>
                <div className="flex items-center">
                  <div className="w-32 h-2 bg-gray-200 rounded-full mr-2">
                    <div className="h-full bg-yellow-500 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                  <span className="text-sm">8/10</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p>Executive Chalets</p>
                <div className="flex items-center">
                  <div className="w-32 h-2 bg-gray-200 rounded-full mr-2">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                  <span className="text-sm">9/10</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p>Family Rooms</p>
                <div className="flex items-center">
                  <div className="w-32 h-2 bg-gray-200 rounded-full mr-2">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <span className="text-sm">2/5</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p>Honeymoon Suites</p>
                <div className="flex items-center">
                  <div className="w-32 h-2 bg-gray-200 rounded-full mr-2">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <span className="text-sm">3/3</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
