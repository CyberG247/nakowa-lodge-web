
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Download, Mail, Database, FileText, Trash2, Send } from 'lucide-react';

export const CreateBackupAction = () => {
  const [backupType, setBackupType] = useState('');
  const [email, setEmail] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleBackup = () => {
    if (!backupType) {
      toast({
        title: "Error",
        description: "Please select a backup destination",
        variant: "destructive",
      });
      return;
    }

    if (backupType === 'email' && !email) {
      toast({
        title: "Error",
        description: "Please enter an email address",
        variant: "destructive",
      });
      return;
    }

    // Simulate backup creation
    setTimeout(() => {
      toast({
        title: "Backup Created",
        description: `Database backup has been created and ${backupType === 'email' ? `sent to ${email}` : 'saved to local storage'}.`,
      });
      setIsOpen(false);
      setBackupType('');
      setEmail('');
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="justify-start">
          <Database className="h-4 w-4 mr-2" />
          Create Backup
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Database Backup</DialogTitle>
          <DialogDescription>
            Choose where you want to save your database backup.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Backup Destination</Label>
            <Select value={backupType} onValueChange={setBackupType}>
              <SelectTrigger>
                <SelectValue placeholder="Select backup destination" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">Send to Email</SelectItem>
                <SelectItem value="local">Local Storage</SelectItem>
                <SelectItem value="cloud">Cloud Storage</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {backupType === 'email' && (
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
              />
            </div>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleBackup}>Create Backup</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const ViewLogsAction = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logs] = useState([
    { timestamp: '2024-01-15 10:30:25', level: 'INFO', message: 'New booking received - Room 101' },
    { timestamp: '2024-01-15 10:28:14', level: 'SUCCESS', message: 'Payment processed successfully' },
    { timestamp: '2024-01-15 10:25:33', level: 'WARNING', message: 'High server load detected' },
    { timestamp: '2024-01-15 10:20:12', level: 'ERROR', message: 'Failed to send notification email' },
    { timestamp: '2024-01-15 10:15:45', level: 'INFO', message: 'User login: admin@hotel.com' },
  ]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="justify-start">
          <FileText className="h-4 w-4 mr-2" />
          View Logs
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>System Activity Logs</DialogTitle>
          <DialogDescription>
            Recent system activity and events.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-96 overflow-y-auto space-y-2">
          {logs.map((log, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  log.level === 'ERROR' ? 'bg-red-100 text-red-800' :
                  log.level === 'WARNING' ? 'bg-yellow-100 text-yellow-800' :
                  log.level === 'SUCCESS' ? 'bg-green-100 text-green-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {log.level}
                </span>
                <span className="text-sm text-gray-500">{log.timestamp}</span>
              </div>
              <span className="text-sm">{log.message}</span>
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const ClearCacheAction = () => {
  const { toast } = useToast();

  const handleClearCache = () => {
    // Simulate cache clearing
    setTimeout(() => {
      toast({
        title: "Cache Cleared",
        description: "System cache has been successfully cleared.",
      });
    }, 1000);
  };

  return (
    <Button variant="outline" onClick={handleClearCache} className="justify-start">
      <Trash2 className="h-4 w-4 mr-2" />
      Clear Cache
    </Button>
  );
};

export const ExportDataAction = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [exportType, setExportType] = useState('');
  const { toast } = useToast();

  const handleExport = () => {
    if (!exportType) {
      toast({
        title: "Error",
        description: "Please select data type to export",
        variant: "destructive",
      });
      return;
    }

    // Simulate data export
    const data = exportType === 'bookings' ? 'booking-data.csv' : 
                 exportType === 'guests' ? 'guest-data.csv' : 'all-data.csv';
    
    const blob = new Blob([`Sample ${exportType} data`], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = data;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);

    toast({
      title: "Export Complete",
      description: `${exportType} data has been exported successfully.`,
    });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="justify-start">
          <Download className="h-4 w-4 mr-2" />
          Export Data
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Export Data</DialogTitle>
          <DialogDescription>
            Choose the type of data you want to export.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Data Type</Label>
            <Select value={exportType} onValueChange={setExportType}>
              <SelectTrigger>
                <SelectValue placeholder="Select data type to export" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bookings">Booking Data</SelectItem>
                <SelectItem value="guests">Guest Data</SelectItem>
                <SelectItem value="payments">Payment Data</SelectItem>
                <SelectItem value="all">All Data</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleExport}>Export</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const EmailMarketingAction = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [emailData, setEmailData] = useState({
    subject: '',
    content: '',
    recipients: 'all'
  });
  const { toast } = useToast();

  const handleSendEmail = () => {
    if (!emailData.subject || !emailData.content) {
      toast({
        title: "Error",
        description: "Please fill in subject and content",
        variant: "destructive",
      });
      return;
    }

    // Simulate email sending
    setTimeout(() => {
      toast({
        title: "Email Sent",
        description: `Marketing email sent to ${emailData.recipients === 'all' ? 'all guests' : 'recent guests'}.`,
      });
      setIsOpen(false);
      setEmailData({ subject: '', content: '', recipients: 'all' });
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="justify-start">
          <Send className="h-4 w-4 mr-2" />
          Email Marketing
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Send Marketing Email</DialogTitle>
          <DialogDescription>
            Create and send marketing emails to your guests.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Recipients</Label>
            <Select value={emailData.recipients} onValueChange={(value) => setEmailData({...emailData, recipients: value})}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Guests</SelectItem>
                <SelectItem value="recent">Recent Guests</SelectItem>
                <SelectItem value="frequent">Frequent Guests</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Email Subject</Label>
            <Input
              id="subject"
              value={emailData.subject}
              onChange={(e) => setEmailData({...emailData, subject: e.target.value})}
              placeholder="Enter email subject"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Email Content</Label>
            <Textarea
              id="content"
              value={emailData.content}
              onChange={(e) => setEmailData({...emailData, content: e.target.value})}
              placeholder="Enter email content"
              rows={6}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSendEmail}>Send Email</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
