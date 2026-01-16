import Link from 'next/link';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} Booking system. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Rahimkhanov Maksym</p>
          <p>
            Contact me:
            <Link href="https://github.com/MaximRahimkhanov/test-booking-system-next-frontend">
              Git-Hub
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
