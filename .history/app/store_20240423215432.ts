import { createStore, devtools } from 'zustand';

interface State {
  count: number;
}

const store = createStore<State>(
  devtools(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }),
  ),
);

export default store;