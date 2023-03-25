import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../../../components/layout";
import { useLogin } from "../../../hooks/useLogin";

export default function Solicitudes() {
    
    const {name} = useLogin()

    const [data, setData] = useState([]);

    useEffect(() => {
      const consultarAPI = async() => {
        const url = `http://localhost:5000/api/perfil/tramites/${name}`
        const { data } = await axios(url)
        setData(data) 
      }
      consultarAPI()
    }, [name])

  return (
    <Layout title="Solicitudes">
        <div className="flex flex-col">
          <h1 className="text-bold text-center text-4xl mt-5 uppercase">Lista de solicitudes de <span className="text-orange-400">{name}</span></h1>
          {
              data.map(d => (
                <div key={d.idsolicitudes} className="m-10">
                  <h1 className="text-bold text-2xl" >{d.nombre}</h1>
                  <h2 className={`font-bold uppercase ${d.status === "Aprobado" ? 'text-green-600' : d.status === "En revisión" ? 'text-orange-400' : d.status === "Rechazado" ? 'text-red-700' : ''}`}>{d.status}</h2>
                </div>
              ))
          }

          <Link href='/perfil/tramites' className="m-10 bg-orange-400 text-white uppercase p-5 text-center text-2xl hover:bg-gray-900">Regresar</Link>
        </div>
    </Layout>
  )
}
