'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBooking } from '@/lib/api';
import { Booking } from '@/types/booking';
import iziToast from 'izitoast';

const useUpdateBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Partial<Pick<Booking, 'date' | 'timeFrom' | 'timeTo'>>;
    }) => updateBooking(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
      iziToast.success({
        title: 'Успіх',
        message: 'Запис успішно створено',
        position: 'topRight',
        timeout: 3000,
      });
    },
  });
};

export default useUpdateBooking;
