import { Booking, NewBooking } from '@/types/booking';
import { NewUser, User, UserUpdates } from '@/types/user';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://test-booking-system-node-backend.onrender.com',
  withCredentials: false,
});

//* Отримую користувача в залежності від ролі
export async function getAllUsers(role?: 'client' | 'business'): Promise<User[]> {
  const { data } = await api.get<User[]>('/users', {
    params: role ? { role } : {},
  });
  return data;
}

//* Отримую користувача по ID
export async function getUserById(userId: string): Promise<User> {
  const { data } = await api.get<User>(`/users/${userId}`);
  return data;
}

//* Створюю нового користувача
export async function createUser(newUser: NewUser): Promise<User> {
  const { data } = await api.post<User>('/users', newUser);
  return data;
}

//* Редагую користувача
export async function updateUser(userId: string, updates: UserUpdates): Promise<User> {
  const { data } = await api.patch<User>(`/users/${userId}`, updates);
  return data;
}

//* Видаляю користувача
export async function deleteUser(userId: string): Promise<User> {
  const { data } = await api.delete<User>(`/users/${userId}`);
  return data;
}

//? Booking логіка
//* Роблю запис жл бізнесу
export async function createBooking(data: NewBooking): Promise<Booking> {
  const res = await api.post<Booking>('/bookings', data);
  return res.data;
}

export async function getClientBookings(clientId: string): Promise<Booking[]> {
  const res = await api.get<Booking[]>('/bookings/my', { params: { userId: clientId } });
  return res.data;
}

//* Роблю редагування букінгу

export async function updateBooking(
  bookingId: string,
  updates: Partial<Pick<Booking, 'date' | 'timeFrom' | 'timeTo'>>
): Promise<Booking> {
  const res = await api.patch<Booking>(`/bookings/${bookingId}`, updates);
  return res.data;
}

export async function cancelBooking(bookingId: string): Promise<Booking> {
  const res = await api.delete<Booking>(`/bookings/${bookingId}`);
  return res.data;
}
