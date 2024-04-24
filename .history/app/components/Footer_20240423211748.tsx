import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";

export function Footer() {
  return (
    <div className="pt-[80px] pb-[40px]">
      <div className="flex items-center justify-center gap-x-[12px]">
      <Image src={Logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
        <p className="font-bold text-[#36485C] text-[17px]">Market.io</p>
      </div>

      <p className="pt-[56px] text-center text-[14px] font-medium text-[#5F7896] sm:pt-5">
        © Copyright 2024.
      </p>
    </div>
  );
}
