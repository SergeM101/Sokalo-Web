// filepath: src/contexts/AuthContext.ts
import { createContext } from 'react';

export interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
    store?: {
    storeID: string;
  };
}

export const AuthContext = createContext<AuthContextType | null>(null);