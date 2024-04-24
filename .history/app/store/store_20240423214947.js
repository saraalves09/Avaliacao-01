import create from 'zustand';

const useStore = create((set) => ({
  items: [
    { name: 'Maçã', quantity: 5 },
    { name: 'Farinha de trigo', quantity: 10 },
    { name: 'Arroz', quantity: 3 },
  ],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (index) => set((state) => ({ items: state.items.filter((_, i) => i !== index) })),
}));

export default useStore;