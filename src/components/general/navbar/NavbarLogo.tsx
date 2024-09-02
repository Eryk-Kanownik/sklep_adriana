import localFont from "next/font/local";

import { diploma } from "@/fonts/font-init";

const NavbarLogo = () => {
  return (
    <div>
      <p className={`${diploma.className} text-red-600 text-xl`}>
        Sklep Adriana
      </p>
    </div>
  );
};

export default NavbarLogo;
