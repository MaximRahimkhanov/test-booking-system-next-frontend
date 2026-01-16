'use client';

import useCreateUser from '@/app/hooks/useCreateUser';
import { Role } from '@/types/user';
import { useState } from 'react';

interface UserFormProps {
  onClose: () => void;
}

const UserForm = ({ onClose }: UserFormProps) => {
  const { mutate, isPending } = useCreateUser();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<Role>('client');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate(
      { name, email, role, password },
      {
        onSuccess: () => onClose(),
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Створити користувача</h2>

      <input placeholder="Імʼя" value={name} onChange={(e) => setName(e.target.value)} required />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <select value={role} onChange={(e) => setRole(e.target.value as Role)}>
        <option value="client">Клієнт</option>
        <option value="business">Бізнес</option>
      </select>

      <button type="submit" disabled={isPending}>
        Створити
      </button>
    </form>
  );
};

export default UserForm;
