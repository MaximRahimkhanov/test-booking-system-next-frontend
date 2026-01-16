import { NextResponse } from 'next/server';
import { getAllUsers } from '@/lib/api';
import { isAxiosError } from 'axios';
import { logErrorResponse } from '../utils/utils';

export async function GET() {
  try {
    const users = await getAllUsers();
    return NextResponse.json(users);
  } catch (error) {
    if (isAxiosError(error)) {
      logErrorResponse(error.response?.data);

      return NextResponse.json({ message: 'Помилка сервера' }, { status: 500 });
    }
  }
}
