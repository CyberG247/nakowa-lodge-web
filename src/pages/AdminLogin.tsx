import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // In a real application, this would validate against a backend
    // For demo purposes, we're using a simple check
    setTimeout(() => {
      if (email === 'admin@grandambar.com' && password === 'admin123') {
        toast.success('Login successful');
        navigate('/admin');
      } else {
        toast.error('Invalid credentials');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">
            <span className="text-accent-red">Grand Ambar Palace</span> Hotels &amp; Suites
          </h1>
          <p className="text-gray-600 mt-2">Admin Login</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@grandambar.com"
              required
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <a href="#" className="text-sm text-accent-red hover:text-navy">Forgot password?</a>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full"
            />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-navy hover:bg-blue-800 text-white"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </Button>
        </form>
        
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Demo credentials: admin@grandambar.com / admin123
          </p>
        </div>
        
        <div className="text-center mt-8">
          <a href="/" className="text-sm text-navy hover:text-accent-red">
            Back to Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
