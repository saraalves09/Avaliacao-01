import React, { useState } from 'react';

export const List: React.FC = () => {
  // Estado para controlar o modo de tema (modo de dia ou modo de noite)
  const [modoNoite, setModoNoite] = useState<boolean>(false);

  // Função para alternar entre o modo de dia e o modo de noite
  const alternarModoNoite = () => {
    setModoNoite(!modoNoite);
  };

  // Estilos condicionais com base no modo de tema
  const listaEstilos = modoNoite ? 'lista-noite' : 'lista-dia';
  const tituloEstilos = modoNoite ? 'titulo-noite' : 'titulo-dia';

  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[50px]">
        <h1 className={text-center text-[32px] leading-[40px] font-medium lg:text-[64px] lg:leading-[72px] ${tituloEstilos}}>
          Lista de itens
        </h1>
      </div>
      <div className={flex justify-center text-center text-[25px] ${listaEstilos}}>
        <ul style={{ marginTop: '45px' }}>
          <li>Maçã - Quantidade: 5</li>
          <li>Farinha de trigo - Quantidade: 10</li>
          <li>Arroz - Quantidade: 3</li>
        </ul>
      </div>
      <div className="relative flex h-full w-full justify-center">
        <div className="px-[20px] lg:container lg:px-20 mx-auto"></div>
      </div>
      {/* Botão para alternar entre os modos de tema */}
      <button onClick={alternarModoNoite} className="fixed bottom-5 right-5 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        {modoNoite ? 'Modo Dia' : 'Modo Noite'}
      </button>
    </div>
  );
};