'use client';

interface CreateUserButtonProps {
  modalOpen: () => void;
}

const CreateUserButton = ({ modalOpen }: CreateUserButtonProps) => {
  return <button onClick={modalOpen}>Створити користувача</button>;
};

export default CreateUserButton;
