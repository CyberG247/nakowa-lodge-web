
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Edit, Plus, Trash, User } from 'lucide-react';
import { toast } from 'sonner';

// Mock data for demo
const mockUsers = [
  {
    id: 1,
    name: 'Admin User',
    email: 'admin@nakowa.com',
    role: 'Admin',
    lastLogin: '2025-05-07T09:15:00',
    active: true
  },
  {
    id: 2,
    name: 'Manager',
    email: 'manager@nakowa.com',
    role: 'Manager',
    lastLogin: '2025-05-06T14:30:00',
    active: true
  },
  {
    id: 3,
    name: 'Reception Staff',
    email: 'reception@nakowa.com',
    role: 'Staff',
    lastLogin: '2025-05-05T08:45:00',
    active: true
  },
  {
    id: 4,
    name: 'Marketing',
    email: 'marketing@nakowa.com',
    role: 'Staff',
    lastLogin: '2025-05-01T11:20:00',
    active: false
  }
];

const roles = ['Admin', 'Manager', 'Staff'];

const AdminUsers = () => {
  const [users, setUsers] = useState(mockUsers);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isNewUser, setIsNewUser] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');

  const handleOpenDialog = (user: any = null) => {
    if (user) {
      setCurrentUser({...user});
      setIsNewUser(false);
    } else {
      setCurrentUser({
        id: users.length + 1,
        name: '',
        email: '',
        role: 'Staff',
        lastLogin: null,
        active: true
      });
      setIsNewUser(true);
    }
    setPasswordInput('');
    setIsDialogOpen(true);
  };

  const handleSaveUser = () => {
    if (!currentUser.name || !currentUser.email || !currentUser.role) {
      toast.error('Name, email, and role are required');
      return;
    }
    
    if (isNewUser && !passwordInput) {
      toast.error('Password is required for new users');
      return;
    }
    
    if (isNewUser) {
      setUsers([...users, {...currentUser, lastLogin: null}]);
      toast.success('User added successfully');
    } else {
      setUsers(users.map(user => user.id === currentUser.id ? currentUser : user));
      toast.success('User updated successfully');
    }
    setIsDialogOpen(false);
  };

  const handleDeleteUser = (id: number) => {
    if (confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== id));
      toast.success('User deleted successfully');
    }
  };

  const handleToggleActive = (id: number) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, active: !user.active } : user
    ));
    const user = users.find(u => u.id === id);
    toast.success(`User ${user?.name} ${user?.active ? 'deactivated' : 'activated'}`);
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Never';
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">User Management</h2>
        <Button onClick={() => handleOpenDialog()}>
          <Plus className="mr-2 h-4 w-4" /> Add User
        </Button>
      </div>
      
      <div className="border rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Login
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
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-gray-500" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.role === 'Admin' ? 'bg-purple-100 text-purple-800' :
                    user.role === 'Manager' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDate(user.lastLogin)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {user.active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => handleOpenDialog(user)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant={user.active ? "destructive" : "outline"}
                    onClick={() => handleToggleActive(user.id)}
                  >
                    {user.active ? 'Deactivate' : 'Activate'}
                  </Button>
                  {user.email !== 'admin@nakowa.com' && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-red-600 border-red-600" 
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{isNewUser ? 'Add New User' : 'Edit User'}</DialogTitle>
          </DialogHeader>
          {currentUser && (
            <div className="space-y-4 py-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <Input 
                  value={currentUser.name} 
                  onChange={(e) => setCurrentUser({...currentUser, name: e.target.value})} 
                  placeholder="Full Name"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input 
                  type="email"
                  value={currentUser.email} 
                  onChange={(e) => setCurrentUser({...currentUser, email: e.target.value})} 
                  placeholder="user@example.com"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium">Role</label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={currentUser.role}
                  onChange={(e) => setCurrentUser({...currentUser, role: e.target.value})}
                >
                  {roles.map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>
              
              {isNewUser && (
                <div>
                  <label className="text-sm font-medium">Password</label>
                  <Input 
                    type="password"
                    value={passwordInput} 
                    onChange={(e) => setPasswordInput(e.target.value)} 
                    placeholder="Set a secure password"
                  />
                </div>
              )}
              
              {!isNewUser && (
                <div>
                  <label className="text-sm font-medium">Status</label>
                  <div className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      id="active-status"
                      checked={currentUser.active}
                      onChange={(e) => setCurrentUser({...currentUser, active: e.target.checked})}
                      className="mr-2 h-4 w-4"
                    />
                    <label htmlFor="active-status">Active</label>
                  </div>
                </div>
              )}
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveUser}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminUsers;
