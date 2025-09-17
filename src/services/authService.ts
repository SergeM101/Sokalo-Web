// in src/services/authService.ts
import api from './api'; // We assume api.ts with axios is already created

// Define the expected response shape from your API's login/register endpoints
export interface AuthResponse {
  user: {
    userID: number;
    userName: string;
    email: string;
    role: 'consumer' | 'store_owner' | 'admin';
  };
  access_token: string;
  token_type: string;
}

// Create a function to handle the login API call
export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/login', {
    email,
    password,
  });

  // If the login is successful, save the token
  if (response.data.access_token) {
    localStorage.setItem('authToken', response.data.access_token);
  }

  return response.data;
};

// Define the shape of the registration data we will send to the API
export interface RegisterData {
  userName: string;
  email: string;
  password: string;
  password_confirmation: string;
  role: 'consumer' | 'store_owner';
}

// Create a function to handle the register API call
export const register = async (userData: RegisterData): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/register', userData);
  // If registration is successful, automatically save the token
  if (response.data.access_token) {
    localStorage.setItem('authToken', response.data.access_token);
  }
  return response.data;
};