import Link from 'next/link'
import Layout from '../../../components/layout'
import { useLogin } from '../../../hooks/useLogin'


export default function Perfil() {
    const {name} = useLogin()

  return (
    <Layout title='Perfil'>
        <h1 className='text-3xl font-bold text-center uppercase m-5'>¡Bienvenido, <span className='text-orange-400'>{name}</span>!</h1>   
        <div className='flex flex-row justify-between p-20'>
            <Link href='/perfil/gestion'><button className='border-3 p-5 bg-orange-400 text-white border-solid border-black rounded-md text-3xl uppercase font-bold h-56 hover:bg-gray-900'>Gestión de Proyectos</button></Link>
            <Link href='/perfil/tramites'><button className='border-3 p-5 bg-orange-400 text-white border-solid border-black rounded-md text-3xl uppercase font-bold h-56 hover:bg-gray-900'>Tramites</button></Link>
            <Link href='/perfil/directorio'><button className='border-3 p-5 bg-orange-400 text-white border-solid border-black rounded-md text-3xl uppercase font-bold h-56 hover:bg-gray-900'>Directorio</button></Link>
        </div> 
    </Layout>
  )
}
