import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '@/lib/api';
import iziToast from 'izitoast';

const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      iziToast.success({
        title: 'Успіх',
        message: 'Користувач успішно видалений',
        position: 'topRight',
        timeout: 3000,
      });
    },
  });
};

export default useDeleteUser;
