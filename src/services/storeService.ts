// in src/services/storeService.ts
import api from './api';

// Define a type for a single Store object to ensure type safety
export interface Store {
  storeID: number;
  officialName: string;
  address: string;
  category: string;
  // Add any other fields your API returns for a public store
}

// Define the shape of the paginated response from your Laravel API
interface PaginatedStoresResponse {
  data: Store[];
  // You can add other pagination fields here later if needed
  // (e.g., current_page, last_page, etc.)
}

// Create a function to fetch all stores
export const getStores = async (): Promise<Store[]> => {
  // Your API returns a paginated object, so we access the 'data' property
  const response = await api.get<PaginatedStoresResponse>('/stores');
  return response.data.data;
};