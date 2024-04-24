import { useState } from 'react';

export function Cta() {
  const [showAlert, setShowAlert] = useState(false);

  const handleCadastro = () => {
    // Add your validation logic here
    setShowAlert(true);
  };
  return (
    <div className="w-full rounded-lg bg-gradient-to-br from-pink-500/50 via-red-500/50 to-yellow-500/50 py-8 px-4 text-center lg:my-12 lg:px-10 lg:py-20">
      {showAlert && (
        <div className="bg-green-500 p-3 text-white mb-4">
          Produto cadastrado com sucesso!
        </div>
      )}
      <label className="mb-4 lg:mb-8">
        <h1 className="text-white text-lg lg:text-2xl font-medium mb-2 lg:mb-4"> Nome do produto: </h1>
        <input type="text" style={{ width: '40%', height: '40px', borderRadius: '8px', border: '1px solid #ccc', textAlign: 'center',  marginBottom: '15px' }} />
      </label>
      <br />
      <label className="mb-4 lg:mb-8">
        <h1 className="text-white text-lg lg:text-2xl font-medium mb-2 lg:mb-4"> Quantidade: </h1>
        <input type="number" style={{ width: '40%', height: '40px', borderRadius: '8px', border: '1px solid #ccc', textAlign: 'center', fontSize: '16px' }} />
      </label>

      <div className="mt-4 flex flex-col w-full items-center lg:mt-6 lg:flex-row lg:justify-center gap-x-4">
        <button className="py-2 px-4 bg-white rounded-md text-pink-500 font-medium" onClick={handleCadastro}>
          Cadastrar!
        </button>
      </div>
    </div>
  );
}
