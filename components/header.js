import Link from "next/link";
import { useState } from "react";

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">I + D</span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${menuOpen ? '' : 'hidden'}`} id="menu">
        <div className="text-sm lg:flex-grow">
            <Link href='/' className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">Inicio</Link>
            <Link href='/nosotros' className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">Nosotros</Link>
            <Link href='/nosotros' className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">Servicios</Link>
            <Link href='/nosotros' className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}
