
import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '@/types/user';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, UserPlus, LogIn } from 'lucide-react';

const AuthPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, login, register } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // Register form state
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerRole, setRegisterRole] = useState<UserRole>('learner');
  
  // If already authenticated, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const success = await login(loginEmail, loginPassword);
      if (success) {
        navigate('/dashboard');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const success = await register(
        registerEmail,
        registerPassword,
        registerName,
        registerRole
      );
      if (success) {
        navigate('/dashboard');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-guardian-50 to-guardian-100/30 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center">
            <div className="p-3 bg-guardian-100 rounded-full">
              <Shield size={32} className="text-guardian-700" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Guardian IO</h2>
          <p className="mt-2 text-sm text-guardian-600">
            Ethical AI education platform
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-6 glass-panel">
          <Tabs defaultValue="login">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login" className="flex items-center gap-2">
                <LogIn size={16} />
                <span>Login</span>
              </TabsTrigger>
              <TabsTrigger value="register" className="flex items-center gap-2">
                <UserPlus size={16} />
                <span>Register</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleLogin}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <a href="#" className="text-sm text-guardian-600 hover:text-guardian-800">
                        Forgot password?
                      </a>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-guardian-600 hover:bg-guardian-700"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Logging in...' : 'Login'}
                  </Button>
                  
                  <div className="text-sm text-center mt-4 text-gray-600">
                    <p>Demo accounts available:</p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {['admin', 'educator', 'learner', 'organization', 'researcher'].map((role) => (
                        <button
                          key={role}
                          type="button"
                          className="text-xs py-1 px-2 rounded bg-guardian-100 text-guardian-700 hover:bg-guardian-200 capitalize"
                          onClick={() => {
                            setLoginEmail(`${role}@guardianio.com`);
                            setLoginPassword('password123');
                          }}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </form>
            </TabsContent>

            <TabsContent value="register">
              <form onSubmit={handleRegister}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="name@example.com"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Account Type</Label>
                    <Select
                      value={registerRole}
                      onValueChange={(value) => setRegisterRole(value as UserRole)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="learner">Learner</SelectItem>
                        <SelectItem value="educator">Educator</SelectItem>
                        <SelectItem value="organization">Organization</SelectItem>
                        <SelectItem value="researcher">Researcher</SelectItem>
                        <SelectItem value="admin">Administrator</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-guardian-600 hover:bg-guardian-700"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Creating account...' : 'Create Account'}
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
