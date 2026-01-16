'use client';

import { useState } from 'react';
import { Booking } from '@/types/booking';
import css from './EditBookingForm.module.css';
import useUpdateBooking from '@/app/hooks/useUpdateBooking';
import Modal from '../Modal/Modal';

interface Props {
  booking: Booking;
  onClose: () => void;
}

const EditBookingModal = ({ booking, onClose }: Props) => {
  const [date, setDate] = useState(booking.date);
  const [timeFrom, setTimeFrom] = useState(booking.timeFrom);
  const [timeTo, setTimeTo] = useState(booking.timeTo);

  const updateBooking = useUpdateBooking();

  const submitHandler = () => {
    updateBooking.mutate(
      {
        id: booking._id,
        data: { date, timeFrom, timeTo },
      },
      {
        onSuccess: onClose,
      }
    );
  };

  return (
    <Modal onClose={onClose}>
      <h3>Редагувати запис</h3>
      <div className={css.div}>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

        <input type="time" value={timeFrom} onChange={(e) => setTimeFrom(e.target.value)} />

        <input type="time" value={timeTo} onChange={(e) => setTimeTo(e.target.value)} />

        <button onClick={submitHandler} disabled={updateBooking.isPending}>
          Зберегти
        </button>

        <button onClick={onClose}>Закрити</button>
      </div>
    </Modal>
  );
};

export default EditBookingModal;
