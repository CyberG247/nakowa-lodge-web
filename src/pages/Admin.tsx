import React, { useState } from 'react';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AdminBookings from '@/components/admin/AdminBookings';
import AdminRooms from '@/components/admin/AdminRooms';
import AdminGallery from '@/components/admin/AdminGallery';
import AdminTestimonials from '@/components/admin/AdminTestimonials';
import AdminFAQs from '@/components/admin/AdminFAQs';
import AdminMessages from '@/components/admin/AdminMessages';
import AdminDashboard from '@/components/admin/AdminDashboard';
import AdminUsers from '@/components/admin/AdminUsers';
import AdminSettings from '@/components/admin/AdminSettings';
import { Users, Book, LayoutDashboard, Image, MessageCircle, FileText, Settings, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real application, implement proper logout logic
    navigate('/admin/login');
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-100">
        <Sidebar className="border-r bg-white">
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold flex items-center">
              <span className="text-accent-red">Grand Ambar Palace</span>
              <span className="text-sm font-normal ml-2 text-gray-500">Admin</span>
            </h2>
          </div>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Management</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <button 
                        onClick={() => setActiveTab('dashboard')} 
                        className={`flex items-center w-full p-2 rounded ${activeTab === 'dashboard' ? 'bg-gray-100' : ''}`}
                      >
                        <LayoutDashboard className="h-4 w-4 mr-2" />
                        <span>Dashboard</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <button 
                        onClick={() => setActiveTab('bookings')} 
                        className={`flex items-center w-full p-2 rounded ${activeTab === 'bookings' ? 'bg-gray-100' : ''}`}
                      >
                        <Book className="h-4 w-4 mr-2" />
                        <span>Bookings</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <button 
                        onClick={() => setActiveTab('rooms')} 
                        className={`flex items-center w-full p-2 rounded ${activeTab === 'rooms' ? 'bg-gray-100' : ''}`}
                      >
                        <Users className="h-4 w-4 mr-2" />
                        <span>Rooms</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <button 
                        onClick={() => setActiveTab('gallery')} 
                        className={`flex items-center w-full p-2 rounded ${activeTab === 'gallery' ? 'bg-gray-100' : ''}`}
                      >
                        <Image className="h-4 w-4 mr-2" />
                        <span>Gallery</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <button 
                        onClick={() => setActiveTab('testimonials')} 
                        className={`flex items-center w-full p-2 rounded ${activeTab === 'testimonials' ? 'bg-gray-100' : ''}`}
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        <span>Testimonials</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <button 
                        onClick={() => setActiveTab('faqs')} 
                        className={`flex items-center w-full p-2 rounded ${activeTab === 'faqs' ? 'bg-gray-100' : ''}`}
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        <span>FAQs</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <button 
                        onClick={() => setActiveTab('messages')} 
                        className={`flex items-center w-full p-2 rounded ${activeTab === 'messages' ? 'bg-gray-100' : ''}`}
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        <span>Messages</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            
            <SidebarGroup>
              <SidebarGroupLabel>System</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <button 
                        onClick={() => setActiveTab('users')} 
                        className={`flex items-center w-full p-2 rounded ${activeTab === 'users' ? 'bg-gray-100' : ''}`}
                      >
                        <Users className="h-4 w-4 mr-2" />
                        <span>Users</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <button 
                        onClick={() => setActiveTab('settings')} 
                        className={`flex items-center w-full p-2 rounded ${activeTab === 'settings' ? 'bg-gray-100' : ''}`}
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        <span>Settings</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <button 
                        onClick={handleLogout} 
                        className="flex items-center w-full p-2 rounded text-red-500"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        <span>Logout</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        
        <div className="flex-1 overflow-auto">
          <div className="p-4 border-b bg-white flex justify-between items-center">
            <div className="flex items-center">
              <SidebarTrigger />
              <h1 className="text-xl font-semibold ml-4">Admin Panel</h1>
            </div>
            <div>
              <Link to="/">
                <Button variant="outline" className="mr-2">View Website</Button>
              </Link>
              <Button onClick={handleLogout} variant="outline" className="text-red-500">
                <LogOut className="h-4 w-4 mr-2" /> Logout
              </Button>
            </div>
          </div>
          
          <div className="p-6">
            {activeTab === 'dashboard' && <AdminDashboard />}
            {activeTab === 'bookings' && <AdminBookings />}
            {activeTab === 'rooms' && <AdminRooms />}
            {activeTab === 'gallery' && <AdminGallery />}
            {activeTab === 'testimonials' && <AdminTestimonials />}
            {activeTab === 'faqs' && <AdminFAQs />}
            {activeTab === 'messages' && <AdminMessages />}
            {activeTab === 'users' && <AdminUsers />}
            {activeTab === 'settings' && <AdminSettings />}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Admin;
