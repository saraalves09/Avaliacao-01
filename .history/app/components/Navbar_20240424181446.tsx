// Importa as dependências necessárias
import Image from "next/image"; 
import Logo from "../../public/assets/Logo.svg"; 
import Menu from "../../public/assets/Menu.svg";
import Link from 'next/link'; // Para criar links entre páginas no Next.js

// Define os links de navegação
const navLinks = [
  { name: "Cadastrar Item", path: '/' }, // Link para a página principal
  { name: "Lista de Itens", path: '/list/' }, // Link para a página de lista de itens
];

// Define o componente Navbar
export function Navbar() {
  //JSX
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
      </div>
    </nav>
  );
}
