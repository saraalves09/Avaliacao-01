// Define o componente Hero
export function Hero() {
  // JSX 
  return (
    <div className="pt-4 lg:pt-10"> {/* Contêiner principal */}
      <div className="px-[20px] lg:px-[50px]"> {/* Contêiner para o título e descrição */}
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
          Cadastre seus itens!
        </h1>
        <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
          Adicione o nome e a quantidade do item, para ele ser adicionado na sua lista de mercadorias!
        </p>
      </div>

      <div className="relative flex h-full w-full justify-center">
        <div className="absolute bottom-5 flex w-full flex-col items-center">
        </div>
      </div>
    </div>
  );
}