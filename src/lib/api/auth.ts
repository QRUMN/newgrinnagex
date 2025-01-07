import { axiosInstance } from './axios';
import type { User, LoginFormData } from '../../types/auth';

interface AuthResponse {
  user: User;
  token: string;
}

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'user_data';
const REMEMBER_ME_KEY = 'remember_me';

export const authApi = {
  login: async (credentials: LoginFormData): Promise<AuthResponse> => {
    try {
      // In production, this would be a real API call
      const response = await mockLoginApi(credentials);
      
      // Store auth data
      if (credentials.rememberMe) {
        localStorage.setItem(TOKEN_KEY, response.token);
        localStorage.setItem(USER_KEY, JSON.stringify(response.user));
        localStorage.setItem(REMEMBER_ME_KEY, 'true');
      } else {
        sessionStorage.setItem(TOKEN_KEY, response.token);
        sessionStorage.setItem(USER_KEY, JSON.stringify(response.user));
      }
      
      return response;
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Invalid credentials');
    }
  },

  logout: async () => {
    try {
      // Clear auth data from both storage types
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
      localStorage.removeItem(REMEMBER_ME_KEY);
      sessionStorage.removeItem(TOKEN_KEY);
      sessionStorage.removeItem(USER_KEY);
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  },

  getCurrentUser: async (): Promise<User> => {
    // Check both storage types
    const token = localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);
    const userData = localStorage.getItem(USER_KEY) || sessionStorage.getItem(USER_KEY);
    
    if (!token || !userData) {
      throw new Error('No authenticated user');
    }
    
    return JSON.parse(userData);
  },

  isAuthenticated: (): boolean => {
    const token = localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);
    return !!token;
  }
};

// Mock API functions for development
const mockLoginApi = async (credentials: LoginFormData): Promise<AuthResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const mockUsers = [
    {
      id: '1',
      email: 'residential@example.com',
      password: 'password123',
      fullName: 'John Residential',
      role: 'residential',
      clientType: 'residential'
    },
    {
      id: '2',
      email: 'commercial@example.com',
      password: 'password123',
      fullName: 'Jane Commercial',
      role: 'commercial',
      clientType: 'commercial'
    },
    {
      id: '3',
      email: 'admin@example.com',
      password: 'password123',
      fullName: 'Admin User',
      role: 'admin'
    }
  ];

  const user = mockUsers.find(u => 
    u.email === credentials.email && 
    u.password === credentials.password &&
    u.role === credentials.userType
  );

  if (!user) {
    throw new Error('Invalid credentials');
  }

  const { password, ...userWithoutPassword } = user;
  
  return {
    user: userWithoutPassword,
    token: 'mock-jwt-token'
  };
};