'use client';

import { useState } from 'react';
import { User } from '@/types/user';
import useUpdateUser from '@/app/hooks/useUpdateUser';
import useDeleteUser from '@/app/hooks/useDeleteUser';
import Modal from '../Modal/Modal';
import BookingForm from '../BookingForm/BookingForm';
import ClientBookings from '../Bookings/ClientBookings';

interface UserDetailsProps {
  user: User;
  onClose: () => void;
}

const UserDetails = ({ user, onClose }: UserDetailsProps) => {
  const [name, setName] = useState(user.name);
  const [openBooking, setOpenBooking] = useState(false);

  const updateUser = useUpdateUser();
  const deleteUser = useDeleteUser();

  return (
    <div>
      <h3>Деталі користувача</h3>
      <label>
        {`Ім'я`}
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <button
        onClick={() =>
          updateUser.mutate(
            { id: user._id, data: { name } },
            {
              onSuccess: () => {
                onClose();
              },
            }
          )
        }
      >
        Редагувати користувача
      </button>

      <button
        onClick={() =>
          deleteUser.mutate(user._id, {
            onSuccess: () => {
              onClose();
            },
          })
        }
      >
        Видалити
      </button>

      <button onClick={onClose}>Закрити</button>

      <hr />

      {user.role === 'client' && (
        <>
          <button onClick={() => setOpenBooking(true)}>Записатися</button>

          {openBooking && (
            <Modal onClose={() => setOpenBooking(false)}>
              <BookingForm clientId={user._id} onClose={() => setOpenBooking(false)} />
            </Modal>
          )}
        </>
      )}

      {user.role === 'client' && (
        <>
          <ClientBookings clientId={user._id} />
        </>
      )}
    </div>
  );
};

export default UserDetails;
