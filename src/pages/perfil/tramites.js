import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Layout from "../../../components/layout";
import { useLogin } from "../../../hooks/useLogin";

export default function Tramites() {
    
  return (
    <Layout title="Perfil - Tramites">
        <h1 className="text-center text-6xl font-bold mt-5 uppercase">Trámites</h1>
        <p className="text-center text-2xl text-orange-400 font-bold uppercase">Descargar los formatos haciendo click en documento requerido</p>
       <div className="flex justify-between m-10 flex-col lg:flex-row ">
        <Link href='/docs/F_HorasExtras.xlsx' download={true}><button className="bg-orange-400 text-white p-5 uppercase font-bold lg:mb-0 mb-5">Horas Extras</button> </Link>
        <Link href='/docs/F_Multiple.xlsx' download={true}><button className="bg-orange-400 text-white p-5 uppercase font-bold lg:mb-0 mb-5">Múltiple de Administración de personal</button></Link>
        <Link href='/docs/F_Prestamo.xls' download={true}><button className="bg-orange-400 text-white p-5 uppercase font-bold lg:mb-0 mb-5">Solicitud de prestamo</button></Link>
        <Link href='/docs/F_Contratacion.xls' download={true}><button className="bg-orange-400 text-white p-5 uppercase font-bold lg:mb-0 mb-5">Formatos Contratación</button></Link>
        <Link href='/docs/F_Personal.xlsx' download={true}><button className="bg-orange-400 text-white p-5 uppercase font-bold lg:mb-0 mb-5">Solicitid de personal</button></Link>
       </div>

       <div className="flex justify-around mb-10">
        <Link href='/perfil/solicitudes'><button className="bg-gray-900 text-white p-5 uppercase font-bold hover:bg-orange-400">Ver solicitudes Realizadas</button></Link>
        <Link href='/perfil/archivo'><button className="bg-gray-900 text-white p-5 uppercase font-bold hover:bg-orange-400">Cargar archivo</button></Link>
       </div>
    </Layout>
  )
}
