'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createBooking } from '@/lib/api';

const useCreateBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBooking,

    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });

      const iziToast = (await import('izitoast')).default;
      iziToast.success({
        title: 'Успіх',
        message: 'Запис успішно створений',
        position: 'topRight',
        timeout: 3000,
      });
    },

    onError: async () => {
      const iziToast = (await import('izitoast')).default;
      iziToast.error({
        title: 'Помилка',
        message: 'Не вдалося створити запис',
        position: 'topRight',
        timeout: 3000,
      });
    },
  });
};

export default useCreateBooking;
