import { getAllUsers } from '@/lib/api';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import UsersPageClient from './Users.client';

const UsersPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['users'],
    queryFn: () => getAllUsers(),
  });
  const users = queryClient.getQueryData(['users']);
  console.log('Prefetched users:', users);

  return (
    <>
      <h1>Booking system</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <UsersPageClient />
      </HydrationBoundary>
    </>
  );
};

export default UsersPage;
