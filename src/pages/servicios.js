import Image from 'next/image'
import { useState } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import Layout from '../../components/layout'
import ModalContent from '../../components/modalContent';


export default function Servicios() {

  const [modalIsOpen, setIsOpen] = useState(false)
  const [texto, setTexto] = useState('')

  function openModal(texto) {
    setIsOpen(true);
    setTexto(texto)
  }

  function closeModal() {
    setIsOpen(false);
    setTexto('')
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
   
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#appp')

  const Servicios = [
    {
      id: 1,
      titulo: 'Consultoría',
      img: '/img/servicios/consulta.png',
      alt: 'imagen consultoría',
      contenido: 'Ofrecemos servicios de consultoría'
    },
    {
      id: 2,
      titulo: 'Desarrollo de Software',
      img: '/img/servicios/desarrollo.png',
      alt: 'imagen desarrollo',
      contenido: 'Ofrecemos desarrollo de software'
    },
    {
      id: 3,
      titulo: 'Inteligencia de Negocios',
      img: '/img/servicios/Inteligencia.png',
      alt: 'imagen consultoría',
      contenido: 'Ofrecemos ia de negocios'
    },
    {
      id: 4,
      titulo: 'Software Empaquetado',
      img: '/img/servicios/Empaquetado.png',
      alt: 'imagen consultoría',
      contenido: 'Ofrecemos software empaquetado'
    },
    {
      id: 5,
      titulo: 'Internet de las cosas',
      img: '/img/servicios/Internet.png',
      alt: 'imagen consultoría',
      contenido: 'IoT'
    },
  ]

  const handleServicio = (servicio) => {
    console.log(servicio.id);
    
  }

  return (
    <Layout title='Servicios' description='Conoce nuestros servicios que ofrecemos'>
      <div className='flex justify-between h-screen w-full p-10'>
      {
        Servicios.map( servicio => (
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
