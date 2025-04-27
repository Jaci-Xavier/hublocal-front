// src/stores/useStore.js
import create from 'zustand';

const useStore = create((set) => ({
  // Estado inicial
  count: 0,
  
  // Funções para alterar o estado
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export default useStore;
