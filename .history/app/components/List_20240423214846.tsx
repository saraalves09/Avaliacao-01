import useStore from '../store/store';

export function List() {
  const items = useStore((state) => state.items);
  const addItem = useStore((state) => state.addItem);
  const removeItem = useStore((state) => state.removeItem);

  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[50px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
          Lista de itens
        </h1>
      </div>
      <div className="flex justify-center text-center text-[25px]"> 
      <ul style={{ marginTop: '45px' }}>  
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - Quantidade: {item.quantity}
              <button onClick={() => removeItem(index)}>Remover</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative flex h-full w-full justify-center">
        <div className="px-[20px] lg:container lg:px-20 mx-auto">
          <input type="text" placeholder="Nome do item" />
          <input type="number" placeholder="Quantidade" />
          <button onClick={() => addItem({ name: 'Novo item', quantity: 1 })}>Adicionar</button>
        </div>
      </div>
    </div>
  );
}