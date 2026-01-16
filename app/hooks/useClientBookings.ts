import { useQuery } from '@tanstack/react-query';
import { getClientBookings } from '@/lib/api';

const useClientBookings = (clientId: string) => {
  return useQuery({
    queryKey: ['bookings', clientId],
    queryFn: () => getClientBookings(clientId),
    enabled: !!clientId,
  });
};

export default useClientBookings;
