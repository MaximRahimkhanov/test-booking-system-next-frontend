import { NextResponse } from 'next/server';
import { getAllUsers } from '@/lib/api';

export async function GET() {
  try {
    const users = await getAllUsers();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ message: 'Помилка сервера' }, { status: 500 });
  }
}
