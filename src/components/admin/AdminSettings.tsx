import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Bell, Shield, CreditCard, Database, Mail, Phone, MapPin, Clock, Users, Settings, Globe, Wifi, Camera, Car, Coffee, Dumbbell, Waves, Utensils } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { CreateBackupAction, ViewLogsAction, ClearCacheAction, ExportDataAction, EmailMarketingAction } from './SystemActions';

const AdminSettings = () => {
  const { toast } = useToast();
  
  // General Settings State
  const [hotelName, setHotelName] = useState('Grand Ambar Palace Hotel & Suites');
  const [hotelDescription, setHotelDescription] = useState('Luxury accommodation in the heart of the city');
  const [contactEmail, setContactEmail] = useState('info@grandambarpalace.com');
  const [contactPhone, setContactPhone] = useState('+1 (555) 123-4567');
  const [address, setAddress] = useState('123 Luxury Avenue, City Center');
  const [timezone, setTimezone] = useState('UTC');
  const [currency, setCurrency] = useState('USD');
  const [language, setLanguage] = useState('en');

  // Auto-save functionality
  const [hasChanges, setHasChanges] = useState(false);
  const [isAutoSaving, setIsAutoSaving] = useState(false);

  // Auto-save effect
  useEffect(() => {
    if (hasChanges && !isAutoSaving) {
      setIsAutoSaving(true);
      const timeoutId = setTimeout(() => {
        handleAutoSave();
      }, 2000); // Auto-save after 2 seconds of no changes

      return () => clearTimeout(timeoutId);
    }
  }, [hasChanges, hotelName, hotelDescription, contactEmail, contactPhone, address, timezone, currency, language]);

  const handleAutoSave = () => {
    // Simulate saving to backend/localStorage
    localStorage.setItem('hotelSettings', JSON.stringify({
      hotelName,
      hotelDescription,
      contactEmail,
      contactPhone,
      address,
      timezone,
      currency,
      language
    }));
    
    setHasChanges(false);
    setIsAutoSaving(false);
    
    toast({
      title: "Settings Auto-Saved",
      description: "Your changes have been automatically saved.",
    });
  };

  const handleInputChange = (setter: (value: string) => void, value: string) => {
    setter(value);
    setHasChanges(true);
  };

  const handleManualSave = () => {
    handleAutoSave();
    toast({
      title: "Settings Saved",
      description: "All settings have been successfully saved and will appear on the website.",
    });
  };

  // Notification Settings State
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [bookingAlerts, setBookingAlerts] = useState(true);
  const [paymentAlerts, setPaymentAlerts] = useState(true);
  const [maintenanceAlerts, setMaintenanceAlerts] = useState(true);

  // Security Settings State
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState('30');
  const [passwordExpiry, setPasswordExpiry] = useState('90');
  const [loginAttempts, setLoginAttempts] = useState('5');

  // Booking Settings State
  const [autoConfirmBookings, setAutoConfirmBookings] = useState(false);
  const [maxAdvanceBooking, setMaxAdvanceBooking] = useState('365');
  const [minBookingNotice, setMinBookingNotice] = useState('2');
  const [cancellationPolicy, setCancellationPolicy] = useState('flexible');
  const [overbookingAllowed, setOverbookingAllowed] = useState(false);

  // Payment Settings State
  const [autoPaymentProcessing, setAutoPaymentProcessing] = useState(true);
  const [requireDeposit, setRequireDeposit] = useState(true);
  const [depositAmount, setDepositAmount] = useState('20');
  const [lateFeeEnabled, setLateFeeEnabled] = useState(false);
  const [lateFeeAmount, setLateFeeAmount] = useState('50');

  // Amenities State
  const [amenities, setAmenities] = useState([
    { id: 'wifi', name: 'Free WiFi', enabled: true, icon: Wifi },
    { id: 'parking', name: 'Free Parking', enabled: true, icon: Car },
    { id: 'breakfast', name: 'Complimentary Breakfast', enabled: true, icon: Coffee },
    { id: 'gym', name: 'Fitness Center', enabled: false, icon: Dumbbell },
    { id: 'pool', name: 'Swimming Pool', enabled: true, icon: Waves },
    { id: 'restaurant', name: 'On-site Restaurant', enabled: true, icon: Utensils },
    { id: 'spa', name: 'Spa Services', enabled: false, icon: Users },
    { id: 'concierge', name: '24/7 Concierge', enabled: true, icon: Users },
  ]);

  const toggleAmenity = (amenityId: string) => {
    setAmenities(prev => prev.map(amenity => 
      amenity.id === amenityId 
        ? { ...amenity, enabled: !amenity.enabled }
        : amenity
    ));
    setHasChanges(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-gray-600">Manage your hotel administration settings</p>
          {isAutoSaving && <p className="text-sm text-blue-600">Auto-saving...</p>}
        </div>
        <Button 
          onClick={handleManualSave} 
          className="bg-accent-red hover:bg-red-700"
          disabled={!hasChanges}
        >
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="booking">Booking</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Hotel Information
              </CardTitle>
              <CardDescription>Basic information about your hotel</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="hotelName">Hotel Name</Label>
                  <Input
                    id="hotelName"
                    value={hotelName}
                    onChange={(e) => handleInputChange(setHotelName, e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Contact Email</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={contactEmail}
                    onChange={(e) => handleInputChange(setContactEmail, e.target.value)}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contactPhone">Contact Phone</Label>
                  <Input
                    id="contactPhone"
                    value={contactPhone}
                    onChange={(e) => handleInputChange(setContactPhone, e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select value={timezone} onValueChange={(value) => handleInputChange(setTimezone, value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="UTC">UTC</SelectItem>
                      <SelectItem value="EST">Eastern Time</SelectItem>
                      <SelectItem value="PST">Pacific Time</SelectItem>
                      <SelectItem value="CST">Central Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Hotel Address</Label>
                <Input
                  id="address"
                  value={address}
                  onChange={(e) => handleInputChange(setAddress, e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Hotel Description</Label>
                <Textarea
                  id="description"
                  value={hotelDescription}
                  onChange={(e) => handleInputChange(setHotelDescription, e.target.value)}
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="currency">Default Currency</Label>
                  <Select value={currency} onValueChange={(value) => handleInputChange(setCurrency, value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD - US Dollar</SelectItem>
                      <SelectItem value="EUR">EUR - Euro</SelectItem>
                      <SelectItem value="GBP">GBP - British Pound</SelectItem>
                      <SelectItem value="CAD">CAD - Canadian Dollar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Default Language</Label>
                  <Select value={language} onValueChange={(value) => handleInputChange(setLanguage, value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {hasChanges && (
                <div className="flex justify-end">
                  <Button onClick={handleManualSave} className="bg-accent-red hover:bg-red-700">
                    Save Changes
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Hotel Amenities */}
          <Card>
            <CardHeader>
              <CardTitle>Hotel Amenities</CardTitle>
              <CardDescription>Manage available hotel amenities and services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity) => {
                  const IconComponent = amenity.icon;
                  return (
                    <div key={amenity.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <IconComponent className="h-5 w-5 text-gray-500" />
                        <span>{amenity.name}</span>
                      </div>
                      <Switch
                        checked={amenity.enabled}
                        onCheckedChange={() => toggleAmenity(amenity.id)}
                      />
                    </div>
                  );
                })}
              </div>
              {hasChanges && (
                <div className="flex justify-end mt-4">
                  <Button onClick={handleManualSave} className="bg-accent-red hover:bg-red-700">
                    Save Changes
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Configure how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-gray-500">Receive notifications via email</p>
                  </div>
                  <Switch checked={emailNotifications} onCheckedChange={(checked) => { setEmailNotifications(checked); setHasChanges(true); }} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>SMS Notifications</Label>
                    <p className="text-sm text-gray-500">Receive notifications via SMS</p>
                  </div>
                  <Switch checked={smsNotifications} onCheckedChange={(checked) => { setSmsNotifications(checked); setHasChanges(true); }} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-gray-500">Receive browser push notifications</p>
                  </div>
                  <Switch checked={pushNotifications} onCheckedChange={(checked) => { setPushNotifications(checked); setHasChanges(true); }} />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Alert Types</h4>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label>New Booking Alerts</Label>
                    <p className="text-sm text-gray-500">Get notified when new bookings are made</p>
                  </div>
                  <Switch checked={bookingAlerts} onCheckedChange={(checked) => { setBookingAlerts(checked); setHasChanges(true); }} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Payment Alerts</Label>
                    <p className="text-sm text-gray-500">Get notified about payment updates</p>
                  </div>
                  <Switch checked={paymentAlerts} onCheckedChange={(checked) => { setPaymentAlerts(checked); setHasChanges(true); }} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Maintenance Alerts</Label>
                    <p className="text-sm text-gray-500">Get notified about room maintenance issues</p>
                  </div>
                  <Switch checked={maintenanceAlerts} onCheckedChange={(checked) => { setMaintenanceAlerts(checked); setHasChanges(true); }} />
                </div>
              </div>

              {hasChanges && (
                <div className="flex justify-end">
                  <Button onClick={handleManualSave} className="bg-accent-red hover:bg-red-700">
                    Save Changes
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security & Authentication
              </CardTitle>
              <CardDescription>Manage security settings and access controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-gray-500">Add an extra layer of security</p>
                </div>
                <Switch checked={twoFactorAuth} onCheckedChange={(checked) => { setTwoFactorAuth(checked); setHasChanges(true); }} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                  <Input
                    id="sessionTimeout"
                    value={sessionTimeout}
                    onChange={(e) => { setSessionTimeout(e.target.value); setHasChanges(true); }}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="passwordExpiry">Password Expiry (days)</Label>
                  <Input
                    id="passwordExpiry"
                    value={passwordExpiry}
                    onChange={(e) => { setPasswordExpiry(e.target.value); setHasChanges(true); }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="loginAttempts">Max Failed Login Attempts</Label>
                <Input
                  id="loginAttempts"
                  value={loginAttempts}
                  onChange={(e) => { setLoginAttempts(e.target.value); setHasChanges(true); }}
                />
              </div>

              {hasChanges && (
                <div className="flex justify-end">
                  <Button onClick={handleManualSave} className="bg-accent-red hover:bg-red-700">
                    Save Changes
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Booking Settings */}
        <TabsContent value="booking" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Booking Configuration
              </CardTitle>
              <CardDescription>Configure booking policies and restrictions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Auto-Confirm Bookings</Label>
                  <p className="text-sm text-gray-500">Automatically confirm new bookings</p>
                </div>
                <Switch checked={autoConfirmBookings} onCheckedChange={(checked) => { setAutoConfirmBookings(checked); setHasChanges(true); }} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Allow Overbooking</Label>
                  <p className="text-sm text-gray-500">Allow bookings beyond room capacity</p>
                </div>
                <Switch checked={overbookingAllowed} onCheckedChange={(checked) => { setOverbookingAllowed(checked); setHasChanges(true); }} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="maxAdvanceBooking">Max Advance Booking (days)</Label>
                  <Input
                    id="maxAdvanceBooking"
                    value={maxAdvanceBooking}
                    onChange={(e) => { setMaxAdvanceBooking(e.target.value); setHasChanges(true); }}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="minBookingNotice">Min Booking Notice (hours)</Label>
                  <Input
                    id="minBookingNotice"
                    value={minBookingNotice}
                    onChange={(e) => { setMinBookingNotice(e.target.value); setHasChanges(true); }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cancellationPolicy">Cancellation Policy</Label>
                <Select value={cancellationPolicy} onValueChange={(value) => { setCancellationPolicy(value); setHasChanges(true); }}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="flexible">Flexible - Free cancellation 24h before</SelectItem>
                    <SelectItem value="moderate">Moderate - Free cancellation 48h before</SelectItem>
                    <SelectItem value="strict">Strict - Free cancellation 7 days before</SelectItem>
                    <SelectItem value="non-refundable">Non-refundable</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {hasChanges && (
                <div className="flex justify-end">
                  <Button onClick={handleManualSave} className="bg-accent-red hover:bg-red-700">
                    Save Changes
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payment Settings */}
        <TabsContent value="payment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment Configuration
              </CardTitle>
              <CardDescription>Configure payment processing and policies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Auto Payment Processing</Label>
                  <p className="text-sm text-gray-500">Automatically process payments</p>
                </div>
                <Switch checked={autoPaymentProcessing} onCheckedChange={(checked) => { setAutoPaymentProcessing(checked); setHasChanges(true); }} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Require Deposit</Label>
                  <p className="text-sm text-gray-500">Require deposit for bookings</p>
                </div>
                <Switch checked={requireDeposit} onCheckedChange={(checked) => { setRequireDeposit(checked); setHasChanges(true); }} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Late Fee Enabled</Label>
                  <p className="text-sm text-gray-500">Charge late fees for overdue payments</p>
                </div>
                <Switch checked={lateFeeEnabled} onCheckedChange={(checked) => { setLateFeeEnabled(checked); setHasChanges(true); }} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="depositAmount">Deposit Amount (%)</Label>
                  <Input
                    id="depositAmount"
                    value={depositAmount}
                    onChange={(e) => { setDepositAmount(e.target.value); setHasChanges(true); }}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lateFeeAmount">Late Fee Amount ($)</Label>
                  <Input
                    id="lateFeeAmount"
                    value={lateFeeAmount}
                    onChange={(e) => { setLateFeeAmount(e.target.value); setHasChanges(true); }}
                  />
                </div>
              </div>

              {hasChanges && (
                <div className="flex justify-end">
                  <Button onClick={handleManualSave} className="bg-accent-red hover:bg-red-700">
                    Save Changes
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* System Settings */}
        <TabsContent value="system" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                System Configuration
              </CardTitle>
              <CardDescription>System maintenance and advanced settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <Label>Database Backup</Label>
                    <p className="text-sm text-gray-500">Create and manage database backups</p>
                  </div>
                  <CreateBackupAction />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <Label>System Logs</Label>
                    <p className="text-sm text-gray-500">View system activity logs</p>
                  </div>
                  <ViewLogsAction />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <Label>Cache Management</Label>
                    <p className="text-sm text-gray-500">Clear system cache for better performance</p>
                  </div>
                  <ClearCacheAction />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <Label>Export Data</Label>
                    <p className="text-sm text-gray-500">Export bookings and guest data</p>
                  </div>
                  <ExportDataAction />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <Label>Email Marketing</Label>
                    <p className="text-sm text-gray-500">Send marketing emails to guests</p>
                  </div>
                  <EmailMarketingAction />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">System Status</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-600">99.9%</div>
                    <div className="text-sm text-gray-500">Uptime</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">2.3GB</div>
                    <div className="text-sm text-gray-500">Storage Used</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">1,234</div>
                    <div className="text-sm text-gray-500">Total Bookings</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Suggested Features */}
          <Card>
            <CardHeader>
              <CardTitle>Suggested Features</CardTitle>
              <CardDescription>Upcoming features that could enhance your hotel management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Camera className="h-5 w-5 text-gray-500" />
                    <div>
                      <span className="font-medium">AI Photo Recognition</span>
                      <p className="text-sm text-gray-500">Automatically tag and organize room photos</p>
                    </div>
                  </div>
                  <Badge variant="secondary">Coming Soon</Badge>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-gray-500" />
                    <div>
                      <span className="font-medium">Multi-language Support</span>
                      <p className="text-sm text-gray-500">Support for multiple languages and currencies</p>
                    </div>
                  </div>
                  <Badge variant="secondary">Planned</Badge>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-gray-500" />
                    <div>
                      <span className="font-medium">Guest Mobile App</span>
                      <p className="text-sm text-gray-500">Dedicated mobile app for guests</p>
                    </div>
                  </div>
                  <Badge variant="secondary">Requested</Badge>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-500" />
                    <div>
                      <span className="font-medium">Advanced Analytics</span>
                      <p className="text-sm text-gray-500">Detailed reporting and analytics dashboard</p>
                    </div>
                  </div>
                  <Badge variant="secondary">Beta</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSettings;
