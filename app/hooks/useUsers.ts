import { useQuery } from '@tanstack/react-query';
import { getAllUsers } from '@/lib/api';
import { User } from '@/types/user';

const useUsers = () => {
  return useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => getAllUsers(),
  });
};

export default useUsers;
