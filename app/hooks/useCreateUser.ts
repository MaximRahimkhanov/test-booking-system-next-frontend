'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser } from '@/lib/api';

const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,

    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      const iziToast = (await import('izitoast')).default;
      iziToast.success({
        title: 'Успіх',
        message: 'Користувач успішно створений',
        position: 'topRight',
        timeout: 3000,
      });
    },

    onError: async () => {
      const iziToast = (await import('izitoast')).default;
      iziToast.error({
        title: 'Помилка',
        message: 'Невалідний пароль або email',
        position: 'topRight',
        timeout: 3000,
      });
    },
  });
};

export default useCreateUser;
