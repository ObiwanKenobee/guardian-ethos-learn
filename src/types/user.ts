
export type UserRole = 'admin' | 'educator' | 'learner' | 'organization' | 'researcher';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
  organization?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
