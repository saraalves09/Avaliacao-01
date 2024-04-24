import Image from "next/image"; 
import Logo from "../../public/assets/Logo.svg"; 
import MenuIcon from "../../public/assets/Menu.svg"; // Ícone do menu
import { useState } from 'react'; // Importar useState para controlar o estado do menu
import Link from 'next/link'; 

const navLinks = [
  { name: "Cadastrar Item", path: '/' }, 
  { name: "Lista de Itens", path: '/list/' }, 
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar se o menu está aberto ou fechado

  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" className="w-10 h-auto" />
        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((link, index) => (
            <Link href={link.path} key={index}>
              <p className="text-[#36485C] font-medium">{link.name}</p>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Container para o botão de menu */}
      <div className="flex gap-x-5">
        {/* Ícone de menu */}
        <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Image src={MenuIcon} alt="Menu" className="cursor-pointer" />
        </div>
        {/* Lista suspensa do menu */}
        {isMenuOpen && (
          <div className="absolute top-[60px] right-[20px] bg-white border border-gray-200 shadow-lg rounded-md p-2">
            {navLinks.map((link, index) => (
              <Link href={link.path} key={index}>
                <p className="text-[#36485C] font-medium py-1 cursor-pointer">{link.name}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
