"use client";

import React, { useState } from 'react';

// Define a componente Cta
const Cta = () => {
  // Utiliza o useState hook para uma variável showAlert e função
  const [showAlert, setShowAlert] = useState(false);
  // O valor inicial de showAlert é false, para que o alerta não seja exibido por padrão.

  // Função para manipular o botão e exibir o alerta
  const handleCadastro = () => {
    // Define showAlert como true para mostrar o alerta
    setShowAlert(true);
  };

  // JSX
  return (
    <div className="w-full rounded-lg bg-gradient-to-br from-pink-500/50 via-red-500/50 to-yellow-500/50 py-8 px-4 text-center lg:my-12 lg:px-10 lg:py-20">
      {/* Renderiza o alerta apenas se showAlert for true */}
      {showAlert && (
        <div className="bg-green-500 p-3 text-white mb-4">
          Produto cadastrado com sucesso!
        </div>
      )}
      {/* Campo para o nome do produto */}
      <label className="mb-4 lg:mb-8">
        <h1 className="text-white text-lg lg:text-2xl font-medium mb-2 lg:mb-4"> Nome do produto: </h1>
        <input type="text" style={{ width: '40%', height: '40px', borderRadius: '8px', border: '1px solid #ccc', textAlign: 'center',  marginBottom: '15px' }} />
      </label>
      <br />
      {/* Campo para a quantidade */}
      <label className="mb-4 lg:mb-8">
        <h1 className="text-white text-lg lg:text-2xl font-medium mb-2 lg:mb-4"> Quantidade: </h1>
        <input type="number" style={{ width: '40%', height: '40px', borderRadius: '8px', border: '1px solid #ccc', textAlign: 'center', fontSize: '16px' }} />
      </label>

      {/* Botão para cadastrar o produto */}
      <div className="mt-4 flex flex-col w-full items-center lg:mt-6 lg:flex-row lg:justify-center gap-x-4">
        <button className="py-2 px-4 bg-white rounded-md text-pink-500 font-medium" onClick={handleCadastro}>
          Cadastrar!
        </button>
      </div>
    </div>
  );
}

// Exporta a componente Cta
export default Cta;
