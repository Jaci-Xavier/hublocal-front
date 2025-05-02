import { create } from 'zustand';

interface EmpresaState {
  id: string;
  nome: string;
  website: string;
  cnpj: string;
  setId: (id: string) => void;
  setNome: (nome: string) => void;
  setWebsite: (website: string) => void;
  setCnpj: (cnpj: string) => void;
  reset: () => void;
}

const useEmpresa = create<EmpresaState>((set) => ({
  id: '',
  nome: '',
  website: '',
  cnpj: '',
  setId: (id) => set(() => ({ id })),
  setNome: (nome) => set(() => ({ nome })),
  setWebsite: (website) => set(() => ({ website })),
  setCnpj: (cnpj) => set(() => ({ cnpj })),
  reset: () => set(() => ({ nome: '', website: '', cnpj: '' })),
}));

export default useEmpresa;
