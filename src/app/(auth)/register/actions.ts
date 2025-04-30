'use server';
import axios from 'axios';

export async function registerUser(payload: any) {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user`, payload, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Acesss-Control-Allow-Origin': '*',
    },
  });

  if (response.status == 201) {
    return { message: response.data.message, status: response.status };
  } else {
    return { message: 'Erro ao registrar usuário', status: response.status };
  }
}