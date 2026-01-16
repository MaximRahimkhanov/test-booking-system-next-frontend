'use client';

import css from './ClientBookings.module.css';
import Loading from '@/app/loading';
import { Booking } from '@/types/booking';
import { useState } from 'react';
import useClientBookings from '@/app/hooks/useClientBookings';
import useCancelBooking from '@/app/hooks/useCancelBooking';
import EditBookingModal from '../EditBookingForm/EditBookingForm';

const ClientBookings = ({ clientId }: { clientId: string }) => {
  const [editingBooking, setEditingBooking] = useState<Booking | null>(null);

  const { data: bookings, isLoading } = useClientBookings(clientId);

  const cancelBooking = useCancelBooking();

  if (isLoading) return <Loading />;
  if (!bookings || bookings.length === 0) return <p>Записів немає</p>;

  return (
    <div>
      <h3>Мої записи</h3>

      {bookings.map((b: Booking) => (
        <div key={b._id} className={css.div}>
          <p>
            Бізнес:{' '}
            {b.business && typeof b.business === 'object'
              ? b.business.name
              : (b.business ?? 'Невідомо')}
          </p>

          <p>Дата: {b.date}</p>
          <p>
            Час: {b.timeFrom} - {b.timeTo}
          </p>

          <p className={b.status === 'CANCELLED' ? css.cancelled : css.active}>
            Статус: {b.status}
          </p>

          {b.status === 'ACTIVE' && (
            <>
              <button onClick={() => setEditingBooking(b)}>Редагувати</button>

              <button
                onClick={() => cancelBooking.mutate(b._id)}
                disabled={cancelBooking.isPending}
              >
                Скасувати
              </button>
            </>
          )}

          {editingBooking && (
            <EditBookingModal booking={editingBooking} onClose={() => setEditingBooking(null)} />
          )}
        </div>
      ))}
    </div>
  );
};
export default ClientBookings;
