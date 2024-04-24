export function List() {
  return (
    <div className="pt-4 lg:pt-10">
    <div className="px-[20px] lg:px-[50px]">
    <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
          Lista de itens
        </h1>
    </div>
    <div className="w-full rounded-lg bg-gradient-to-br from-pink-500/50 via-red-500/50 to-yellow-500/50 py-8 px-4 text-center lg:my-12 lg:px-10 lg:py-20">

      <div className="flex justify-center text-center text-[20px] text-white text-lg lg:text-2xl font-medium mb-2 lg:mb-4"> 
      <ul style={{ marginTop: '20px', paddingInlineStart: '0' }}>  
        <li style={{ marginBottom: '15px' }}>Maçã - Quantidade: 5</li> 
        <li style={{ marginBottom: '15px' }}>Farinha de trigo - Quantidade: 10</li>
        <li style={{ marginBottom: '15px' }}>Arroz - Quantidade: 3</li>
      </ul>
      </div>
      <div className="relative flex h-full w-full justify-center">
        <div className="px-[20px] lg:container lg:px-20 mx-auto"></div>
      </div>
    </div>
    </div>
  );
}
