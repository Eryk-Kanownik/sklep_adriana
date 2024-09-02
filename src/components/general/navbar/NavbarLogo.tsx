import { diploma } from "@/fonts/font-init";
import Link from "next/link";

const NavbarLogo = () => {
  return (
    <Link href="/">
      <p className={`${diploma.className} text-red-600 text-xl`}>
        Sklep Adriana
      </p>
    </Link>
  );
};

export default NavbarLogo;
