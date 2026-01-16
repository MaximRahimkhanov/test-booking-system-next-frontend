'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { cancelBooking } from '@/lib/api';

const useCancelBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => cancelBooking(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    },
  });
};

export default useCancelBooking;
