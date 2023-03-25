import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const { loggeado, name } = useLogin()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6 sticky top-0 left-0 w-full z-10`">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href='/'>
          <Image 
            src='/img/logo.png'
            alt="Imagen logo"
            height={80}
            width={80}
          />
        </Link>
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
      <div className={`${
        menuOpen
          ? "absolute z-50 top-0 left-0 w-full bg-gray-800 h-screen text-center "
          : "hidden"
      } lg:hidden`}>
        <div className="px-4 pt-6 pb-8 flex content-center flex-col">
          <button 
            className="text-white absolute top-0 right-0 p-4"
            onClick={toggleMenu}
          >
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Cerrar</title>
              <path d="M14.95 5.37l.71.71-9.19 9.19-.71-.71 9.19-9.19z"/>
              <path d="M5.37 5.37l.71-.71 9.19 9.19-.71.71-9.19-9.19z"/>
            </svg>
          </button>
          <Link href='/' className="block text-lg font-bold text-white mt-4 hover:text-orange-400">Inicio</Link>
          <Link href='/nosotros' className="block text-lg font-bold text-white mt-4 hover:text-orange-400">Nosotros</Link>
          <Link href='/servicios' className="block text-lg font-bold text-white mt-4 hover:text-orange-400">Servicios</Link>
          <Link href='/contacto' className="block text-lg font-bold text-white mt-4 hover:text-orange-400">Contacto</Link>
          {loggeado ? <Link href="/perfil" className="block text-lg font-bold text-white mt-4 ">Bienvenido <span className="text-orange-400">{name}</span></Link> : <Link href='/login/logIn'><button className="text-base block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:bg-orange-400 mr-4 border-2 p-3 rounded">Iniciar Sesión</button></Link>}
          
          </div>
          </div>
          
          <div className="hidden lg:block lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
          <Link href='/' className="text-base block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-orange-400 mr-4">Inicio</Link>
          <Link href='/nosotros' className="text-base block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-orange-400 mr-4">Nosotros</Link>
          <Link href='/servicios' className="text-base block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-orange-400 mr-4">Servicios</Link>
          <Link href='/contacto' className="text-base block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-orange-400 mr-4">Contacto</Link>
          {loggeado ? <Link href="/perfil/perfilAdmin" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 mr-4 text-2xl">Bienvenido, <span className="text-orange-400">{name}</span></Link> : <Link href='/login/logIn'><button className="text-base block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:bg-orange-400 mr-4 border-2 p-3 rounded">Iniciar Sesión</button></Link>}
        </div>
      </div>
    </nav>
  );
}