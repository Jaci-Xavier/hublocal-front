'use server';
import axios from 'axios';
import { getToken } from '../utils/getToken';

export async function getEmpresas() {
  const token = await getToken();
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/empresa`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Acesss-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${token}`,
    },
  });
  
  return response.data;
}

export async function createEmpresa(payload: any) {
  const token = await getToken();
  const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/empresa`, payload, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Acesss-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (response.status === 201) {
    return { message: 'Empresa criada com sucesso!', status: response.status, data: response.data };
  } else {
    return { message: 'Erro ao criar empresa!', status: response.status };
  }
}

export async function deleteEmpresa(id: string) {
  const token = await getToken();
  const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/empresa/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Acesss-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (response.status === 200) {
    return { message: 'Empresa deletada com sucesso!', status: response.status };
  } else {
    return { message: 'Erro ao deletar empresa!', status: response.status };
  }
}

export async function updateEmpresa(payload: any) {
  const token = await getToken();
  const formatPayload = {
    nome: payload.nome,
    website: payload.website,
    cnpj: payload.cnpj,
  };
  const empresaId = payload.id;
  const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/empresa/${empresaId}`, formatPayload, {
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