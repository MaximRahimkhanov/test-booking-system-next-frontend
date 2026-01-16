import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '@/lib/api';

const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,

    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });

      const iziToast = (await import('izitoast')).default;
      iziToast.success({
        title: 'Успіх',
        message: 'Користувача успішно видалено',
        position: 'topRight',
        timeout: 3000,
      });
    },

    onError: async () => {
      const iziToast = (await import('izitoast')).default;
      iziToast.error({
        title: 'Помилка',
        message: 'Не вдалося видалити користувача',
        position: 'topRight',
        timeout: 3000,
      });
    },
  });
};

export default useDeleteUser;
