import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import Menu from "../../public/assets/Menu.svg";
import Link from 'next/link';

const navLinks = [
  { name: "Cadastrar Item", path: '' },
  { name: "Lista de Itens", path: '/list/page.tsx'},
];

export function Navbar() {
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
      <div className="flex gap-x-5">
        <Image src={Menu} alt="Menu Button" className="lg:hidden" />
      </div>
    </nav>
  );
}