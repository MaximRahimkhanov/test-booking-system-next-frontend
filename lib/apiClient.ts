import { User } from '@/types/user';
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://http://localhost:3000/',
  withCredentials: false,
});

export async function getAllUsersClient(role?: 'client' | 'business'): Promise<User[]> {
  const { data } = await apiClient.get<User[]>('/users', {
    params: role ? { role } : {},
  });
  return data;
}
