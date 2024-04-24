import { create } from 'zustand';
import { StoreState } from './types';

const useStore = create<StoreState>((set) => ({
  items: [
    { name: 'Maçã', quantity: 5 },
    { name: 'Farinha de trigo', quantity: 10 },
    { name: 'Arroz', quantity: 3 },
  ],
  addItem: (item: Item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (index: number) => set((state) => ({ items: state.items.filter((_, i) => i !== index) })),
}));

export default useStore;