export interface User {
  _id: string;
  name: string;
  email: string;
  password?: string;
  role: 'client' | 'business';
  createdAt: string;
  updatedAt: string;
}

export type NewUser = {
  name: string;
  email: string;
  role: 'client' | 'business';
  password: string;
};

export type UserUpdates = Partial<User>;
export type Role = 'client' | 'business';
