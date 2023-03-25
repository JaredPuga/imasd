import axios from 'axios';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Layout from '../../components/layout'



export default function Servicios() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const consultarAPI = async() => {
      const url = `http://localhost:5000/api/db/services`
      const { data } = await axios(url)
      setData(data)
    }
    consultarAPI()
  }, [])


  return (
    <Layout title='Servicios' description='Conoce nuestros servicios que ofrecemos'>
      <div className='flex justify-between h-screen w-full p-10'>
      {
       
        data.map( servicio => (
          <button key={servicio.id} onClick={() => Swal.fire({
            title: `${servicio.titulo}`,
            html: `${servicio.contenido}`,
            icon: 'info'
            
          })} className='flex flex-col items-center justify-center text-xl text-orange-400 font-bold'>{servicio.titulo}
          <Image 
            src={servicio.img}
            width={80}
            height={80}
            alt={servicio.alt}
          />
        </button>
        
        ))
      }  
      </div>

      
      
    </Layout>
  )
}
