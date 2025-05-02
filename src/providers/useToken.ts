import { create } from 'zustand';

const useToken = create<{
  token: string;
  setToken: (newToken: string) => void;
}>((set) => ({
  token: '',

  setToken: (newToken: string) => set(() => ({ token: newToken })),
}));

export default useToken;
