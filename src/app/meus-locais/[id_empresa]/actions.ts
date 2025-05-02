'use server';
import axios from 'axios';
import { getToken } from '@/app/utils/getToken';

export async function getLocais(empresaId: string) {
  const token = await getToken();
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/local/${empresaId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Acesss-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${token}`,
    },
  });

    const transformedData = response.data.map((item: any) => ({
      ...item,
      local: item.nome,
    }));

    return { status: response.status, data: transformedData };


}

export async function createLocal(payload: any) {
  delete payload.id;
  const token = await getToken();
  const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/local`, payload, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Acesss-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (response.status === 201) {
    return { message: 'Local criado com sucesso!', status: response.status, data: response.data };
  } else {
    return { message: 'Erro ao criar local!', status: response.status };
  }
}

export async function deleteLocal(empresaId: string, localId: string) {
  const token = await getToken();
  const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/local/${empresaId}/${localId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Acesss-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (response.status === 200) {
    return { message: 'Local deletado com sucesso!', status: response.status };
  } else {
    return { message: 'Erro ao deletar local!', status: response.status };
  }
}

export async function updateLocal(empresaId: string, localId: string, payload: any) {
  const token = await getToken();
  const formatPayload = {
    nome: payload.nome,
    empresaId: payload.empresaId,
  };
  const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/local/${empresaId}/${localId}`, formatPayload, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Acesss-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (response.status === 200) {
    return { status: response.status, data: response.data };
  } else {
    return { status: response.status, data: response.data };
  }
}
