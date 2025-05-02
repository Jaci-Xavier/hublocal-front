'use server';
import axios from 'axios';
import { cookies } from 'next/headers';

export async function loginUser(payload: any) {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, payload, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Acesss-Control-Allow-Origin': '*',
    },
  });

  const { token } = response.data;

  (await cookies()).set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24,
    path: '/',
  });

  return token;
}

export async function logoutUser() {
  const cookieStore = await cookies();
  cookieStore.delete('token');
  return;
};