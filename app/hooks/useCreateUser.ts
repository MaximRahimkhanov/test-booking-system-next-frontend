'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser } from '@/lib/api';
import iziToast from 'izitoast';

const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      iziToast.success({
        title: 'Успіх',
        message: 'Користувач успішно створений',
        position: 'topRight',
        timeout: 3000,
      });
    },
    onError: () => {
      iziToast.error({
        title: 'Помилка',
        message: 'НЕ ВІЛІДНИЙ PASSWORD АБО EMAIL ',
        position: 'topRight',
        timeout: 3000,
      });
    },
  });
};

export default useCreateUser;
