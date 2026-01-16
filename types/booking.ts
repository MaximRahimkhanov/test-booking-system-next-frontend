import { User } from './user';

export interface Booking {
  _id: string;
  client: string | User;
  business: string | User;
  date: string;
  timeFrom: string;
  timeTo: string;
  status: 'ACTIVE' | 'CANCELLED';
  createdAt: string;
  updatedAt: string;
}

export interface NewBooking {
  clientId: string;
  businessId: string;
  date: string;
  timeFrom: string;
  timeTo: string;
}
