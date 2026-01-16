'use client';

import { useQuery } from '@tanstack/react-query';
import { User } from '@/types/user';
import UsersSection from '@/components/Users/UsersSection';
import { getAllUsersClient } from '@/lib/apiClient';
import Loader from '@/components/Loader/Loader';

const UsersPageClient = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => getAllUsersClient(),
  });
  console.log(users);

  if (isLoading) return <Loader />;
  if (error) return <p>Помилка завантаження</p>;

  return <UsersSection users={users ?? []} />;
};

export default UsersPageClient;
