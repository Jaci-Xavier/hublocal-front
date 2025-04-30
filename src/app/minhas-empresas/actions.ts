'use server';
import axios from 'axios';
import { cookies } from 'next/headers';

export async function getEmpresas() {
  const cookieStore = cookies();
  const token = (await cookieStore).get('token')?.value;

  const response = { status: 204, data: [] };


  // const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/empresa`, {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json',
  //     'Acesss-Control-Allow-Origin': '*',
  //     'Authorization': `Bearer ${token}`,
  //   },
  // });

  // return response.data;

  return response; 

}

// const resp2 = [
//   {
//     "id": "cm9ysyrn80001ihw4adv7zqcg",
//     "nome": "Empresa Exemplo",
//     "cnpj": "12345678000190",
//     "website": "https://www.empresaexemplo.com",
//     "createdAt": "2025-04-26T22:39:12.351Z",
//     "updatedAt": "2025-04-26T22:39:12.351Z",
//     "usuarioId": "cm9xkl1bz0000ihesdm8yqpy3"
//   },
//   {
//     "id": "cm9yt0xg40001ihb40buootle",
//     "nome": "Empresa Exemplo 2",
//     "cnpj": "12345678000199",
//     "website": "https://www.empresaexemplo2.com.br",
//     "createdAt": "2025-04-26T22:40:53.196Z",
//     "updatedAt": "2025-04-26T22:40:53.196Z",
//     "usuarioId": "cm9xkl1bz0000ihesdm8yqpy3"
//   }
// ]