import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../../components/layout";

export default function Gestion() {
    
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([])

  useEffect(() => {
    const consultarAPI = async() => {
      const url = `http://localhost:5000/api/db/proyects`
      const { data } = await axios(url)
      setData(data)
    }
    consultarAPI()
  }, [])

  useEffect(() => {
    const consultarAPI = async() => {
      const url = `http://localhost:5000/api/db/proyects/programers`
      const { data } = await axios(url)
      setData2(data)
    }
    consultarAPI()
  }, [])

  return (

    <Layout title="Perfil - Gestión">
        {
            data.map(d => {
                return (
                    <div key={d.id} className='text-4xl m-10'>
                        <h1 className='text-4xl font-bold text-center mt-5'>{d.name}</h1>
                        <div className="flex gap-8 flex-col">
                            <h2> Fecha de inicio: <span className="text-orange-400 font-bold">{d.start_date}</span></h2>
                            <h2> Fecha de entrega: <span className="text-orange-400 font-bold">{d.final_date}</span></h2>
                            <h2> Jefe de Proyecto: <span className="text-orange-400 font-bold">{d.admin}</span></h2>
                            
                            {
                                data2.map(d => (
                                    <h1 key={d.user_id} className='text-2xl ml-10'>Programadores: <span className="text-gray-900 font-bold">{d.user_name}</span></h1>
                                ))
                            }
                        </div>
                    </div>
                )
            })
        }
    </Layout>
  )
}

