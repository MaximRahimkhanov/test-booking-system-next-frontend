'use cliemt';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '@/lib/api';
import { User } from '@/types/user';
import iziToast from 'izitoast';

interface UpdateUserArgs {
  id: string;
  data: Partial<User>;
}

const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: UpdateUserArgs) => updateUser(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      iziToast.success({
        title: 'Успіх',
        message: 'Дані користувача були відредаговані',
        position: 'topRight',
        timeout: 3000,
      });
    },
  });
};

export default useUpdateUser;
