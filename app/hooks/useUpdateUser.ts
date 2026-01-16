'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '@/lib/api';
import { User } from '@/types/user';

interface UpdateUserArgs {
  id: string;
  data: Partial<User>;
}

const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: UpdateUserArgs) => updateUser(id, data),

    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });

      const iziToast = (await import('izitoast')).default;
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
