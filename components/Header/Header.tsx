'use client';
import { useQueryClient } from '@tanstack/react-query';
import css from './Header.module.css';
import Link from 'next/link';
import { getAllUsers } from '@/lib/api';

const Header = () => {
  const queryClient = useQueryClient();

  const handlePrefetch = () => {
    queryClient.prefetchQuery({
      queryKey: ['users'],
      queryFn: () => getAllUsers(),
    });
  };

  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        Booking System
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/users" prefetch onMouseEnter={handlePrefetch}>
              Користувачі
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
