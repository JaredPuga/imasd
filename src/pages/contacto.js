import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Layout from '../../components/layout'

export default function Contacto() {

  const onHandleSubmit = e => {
    e.preventDefault()
  }

  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [mensaje, setMensaje] = useState('')

  const reset = () => {
    setNombre('')
    setCorreo('')
    setMensaje('')
  }

  const notify = () => {toast.success('Formulario enviado correctamente', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });}

    const notifyErr = () => {toast.error('Rellena todos los datos', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });}


  return (
    <Layout title='Contacto' description='Ponte en contacto con nuestro equipo de desarrollo para proporcionarte más información'>
    
      <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-10 text-center border-2">
          <h1 className="text-4xl font-bold mb-8">Formulario de Contacto</h1>
          <form className="w-full max-w-lg" onSubmit={onHandleSubmit}>
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="mb-2 font-bold text-lg text-gray-900">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="px-3 py-2 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                onChange={e => setNombre(e.target.value)}
                value={nombre}
                placeholder="Nombre completo"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="mb-2 font-bold text-lg text-gray-900">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="px-3 py-2 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                onChange={e => {setCorreo(e.target.value)}}
                value={correo}
                placeholder="Ingresa tu correo aquí"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="message" className="mb-2 font-bold text-lg text-gray-900">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                className="px-3 py-2 border-2 border-gray-400 rounded-lg h-32 focus:outline-none focus:border-blue-500"
                onChange={e => setMensaje(e.target.value)}
                value={mensaje}
                placeholder="Escribe tu mensaje aquí"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
                if (nombre === '' || correo === '' || mensaje === '') {
                  notifyErr()
                } else {
                  reset()
                  notify()
                }
              }}>
                Enviar
              </button>
            </div>
          </form>
        </main>
      </div>
      
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
/>
    </Layout>
  )
}
