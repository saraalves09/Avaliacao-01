export function List() {
  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[50px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
          Lista de itens
        </h1>
      </div>
      <div className="flex justify-center text-center text-[25px]"> 
      <ul style={{ marginTop: '45px' }}>  
          <li>Maçã - Quantidade: 5</li>
          <li>Farinha de trigo - Quantidade: 10</li>
          <li>Arroz - Quantidade: 3</li>
        </ul>
      </div>
      <div className="relative flex h-full w-full justify-center">
        <div className="px-[20px] lg:container lg:px-20 mx-auto"></div>
        <div className={modoEscuro ? 'pagina modo-escuro' : 'pagina'}>
      {/* Botão para alternar entre os modos de tema */}
      <button onClick={alternarModo}>
        {modoEscuro ? 'Modo Claro' : 'Modo Escuro'}
      </button>
      <h1>Minha Página</h1>
      <p>Este é um exemplo de página com controle de modo de tema.</p>
    </div>
      </div>
    </div>
  );
}
