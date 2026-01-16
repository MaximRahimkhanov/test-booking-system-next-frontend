'use client';

import { useState } from 'react';
import useUsers from '@/app/hooks/useUsers';
import useCreateBooking from '@/app/hooks/useCreateBooking';

const BookingForm = ({ clientId, onClose }: { clientId: string; onClose: () => void }) => {
  const { data: users } = useUsers();
  const businesses = users?.filter((u) => u.role === 'business') || [];

  const createBooking = useCreateBooking();

  const [business, setBusiness] = useState('');
  const [date, setDate] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');

  const submit = () => {
    createBooking.mutate(
      {
        clientId: clientId,
        businessId: business,
        date,
        timeFrom,
        timeTo,
      },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  };

  return (
    <div>
      <h3>Записатися</h3>

      <select onChange={(e) => setBusiness(e.target.value)}>
        <option value="">Оберіть бізнес</option>
        {businesses.map((b) => (
          <option key={b._id} value={b._id}>
            {b.name}
          </option>
        ))}
      </select>

      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <input type="time" onChange={(e) => setTimeFrom(e.target.value)} />
      <input type="time" onChange={(e) => setTimeTo(e.target.value)} />

      <button onClick={submit}>Записатися</button>
    </div>
  );
};

export default BookingForm;
