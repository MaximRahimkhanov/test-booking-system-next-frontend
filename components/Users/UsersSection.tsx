'use client';

import useUsers from '@/app/hooks/useUsers';
import { UsersList } from '../UsersList/UsersList';
import { useState } from 'react';
import { User } from '@/types/user';

import UserDetails from '../UserDetails/UserDetails';
import Loader from '../Loader/Loader';
import CreateUserButton from '../CreateUserBtn/CreateUserButton';
import Modal from '../Modal/Modal';
import UserForm from '../UserForm/UserForm';

interface UsersSectionProps {
  users: User[];
}

const UsersSection = ({ users }: UsersSectionProps) => {
  const { isLoading, error } = useUsers();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  if (error) return <p>Помилка</p>;

  const clients = users?.filter((user) => user.role === 'client') || [];
  const businesses = users?.filter((user) => user.role === 'business') || [];

  const modalOpenHandler = () => {
    setIsCreateOpen(true);
  };

  return (
    <>
      {isLoading && <Loader />}
      <CreateUserButton modalOpen={modalOpenHandler} />
      {isCreateOpen && (
        <Modal onClose={() => setIsCreateOpen(false)}>
          <UserForm onClose={() => setIsCreateOpen(false)} />
        </Modal>
      )}

      {selectedUser && (
        <Modal onClose={() => setSelectedUser(null)}>
          <UserDetails user={selectedUser} onClose={() => setSelectedUser(null)} />
        </Modal>
      )}

      <h2>Клієнти</h2>
      {users && <UsersList users={clients} onSelect={setSelectedUser} />}

      <h2>Бізнес</h2>
      <UsersList users={businesses} onSelect={setSelectedUser} />
    </>
  );
};

export default UsersSection;
