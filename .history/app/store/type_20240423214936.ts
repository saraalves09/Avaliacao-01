interface Item {
    name: string;
    quantity: number;
  }
  
  type StoreState = {
    items: Item[];
    addItem: (item: Item) => void;
    removeItem: (index: number) => void;
  };