// Import the necessary dependencies
import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import Menu from "../../public/assets/Menu.svg";
import Link from 'next/link';

// Define links de navegação
const navLinks = [
  { name: "Cadastrar Item", path: '/' },
  { name: "Lista de Itens", path: '/list/' },
];

// Define Navbar
export function Navbar() {
  //JSX
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      // Container for the logo and navigation links
      <div className="flex items-center">
        // Display the logo
        <Image src={Logo} alt="Logo" className="w-10 h-auto" />
        
        // Display the navigation links
        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {
            // Map over the navigation links and render a Link component for each
            navLinks.map((link, index) => (
              <Link href={link.path} key={index}>
                <p className="text-[#36485C] font-medium">{link.name}</p>
              </Link>
            ))
          }
        </div>
      </div>
      
      // Container for the menu button
      <div className="flex gap-x-5">
        // Display the menu button
        <Image src={Menu} alt="Menu Button" className="lg:hidden" />
      </div>
    </nav>
  );
}