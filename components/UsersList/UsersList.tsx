'use client';
import css from './UserList.module.css';
import { User } from '@/types/user';

type UsersListProps = {
  users: User[];
  onSelect: (user: User) => void;
};

export function UsersList({ users, onSelect }: UsersListProps) {
  return (
    <>
      {users.map((user) => (
        <div key={user._id}>
          <button onClick={() => onSelect(user)} className={css.btn}>
            {user.name}
          </button>
        </div>
      ))}
    </>
  );
}
