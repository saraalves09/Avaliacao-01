// List.js
interface Item {
  name: string;
  quantity: number;
}

interface ListProps {
  items: Item[];
}

export function List({ items }: ListProps) {
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
            </li>
          ))}
        </ul>
      </div>
      <div className="relative flex h-full w-full justify-center">
        <div className="px-[20px] lg:container lg:px-20 mx-auto"></div>
      </div>
    </div>
  );
}
