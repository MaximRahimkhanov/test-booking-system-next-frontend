import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createBooking } from '@/lib/api';
import iziToast from 'izitoast';

const useCreateBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
      iziToast.success({
        title: 'Успіх',
        message: 'Звпис успішно створений',
        position: 'topRight',
        timeout: 3000,
      });
    },
    onError: () => {
      iziToast.error({
        title: 'Помилка',
        message: 'Звпис успішно створений',
        position: 'topRight',
        timeout: 3000,
      });
    },
  });
};

export default useCreateBooking;
