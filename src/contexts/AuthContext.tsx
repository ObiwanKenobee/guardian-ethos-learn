
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthState, UserRole } from '@/types/user';
import { toast } from 'sonner';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock data for demonstration purposes
const MOCK_USERS = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@guardianio.com',
    password: 'password123',
    role: 'admin' as UserRole,
    avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=admin',
    createdAt: new Date(),
  },
  {
    id: '2',
    name: 'Educator Demo',
    email: 'educator@guardianio.com',
    password: 'password123',
    role: 'educator' as UserRole,
    avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=educator',
    createdAt: new Date(),
  },
  {
    id: '3',
    name: 'Learner Demo',
    email: 'learner@guardianio.com',
    password: 'password123',
    role: 'learner' as UserRole,
    avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=learner',
    createdAt: new Date(),
  },
  {
    id: '4',
    name: 'Organization Demo',
    email: 'org@guardianio.com',
    password: 'password123',
    role: 'organization' as UserRole,
    organization: 'Demo Corp',
    avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=organization',
    createdAt: new Date(),
  },
  {
    id: '5',
    name: 'Researcher Demo',
    email: 'researcher@guardianio.com',
    password: 'password123',
    role: 'researcher' as UserRole,
    avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=researcher',
    createdAt: new Date(),
  },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    // Check for existing session in localStorage
    const storedUser = localStorage.getItem('guardianio_user');
    
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setAuthState({
          user,
          isAuthenticated: true,
          isLoading: false,
        });
      } catch (error) {
        console.error("Failed to parse stored user:", error);
        localStorage.removeItem('guardianio_user');
        setAuthState({ ...authState, isLoading: false });
      }
    } else {
      setAuthState({ ...authState, isLoading: false });
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call
      const user = MOCK_USERS.find(
        (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
      );

      if (!user) {
        toast.error("Invalid email or password");
        return false;
      }

      const { password: _, ...userWithoutPassword } = user;
      
      // Set auth state
      setAuthState({
        user: userWithoutPassword,
        isAuthenticated: true,
        isLoading: false,
      });

      // Store user in localStorage
      localStorage.setItem('guardianio_user', JSON.stringify(userWithoutPassword));
      
      toast.success(`Welcome back, ${user.name}!`);
      return true;
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login");
      return false;
    }
  };

  const register = async (
    email: string, 
    password: string, 
    name: string, 
    role: UserRole
  ): Promise<boolean> => {
    try {
      // Check if user already exists
      const userExists = MOCK_USERS.some(
        (u) => u.email.toLowerCase() === email.toLowerCase()
      );

      if (userExists) {
        toast.error("A user with this email already exists");
        return false;
      }

      // Create new user (this would be an API call in a real app)
      const newUser = {
        id: `${MOCK_USERS.length + 1}`,
        name,
        email,
        role,
        avatar: `https://api.dicebear.com/6.x/avataaars/svg?seed=${email}`,
        createdAt: new Date(),
      };

      // Set auth state
      setAuthState({
        user: newUser,
        isAuthenticated: true,
        isLoading: false,
      });

      // Store user in localStorage
      localStorage.setItem('guardianio_user', JSON.stringify(newUser));
      
      toast.success("Account created successfully!");
      return true;
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("An error occurred during registration");
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('guardianio_user');
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
    toast.info("You've been logged out");
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
