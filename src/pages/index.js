import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import Typewriter from "../../components/typewriter";

export default function Home() {
  return (
    <div>
      <Layout
        title="Inicio"
        description="Desarrollo de Software y consultoría Especializada"
      >
    
      <div className="relative h-screen">
      <Image
        src="/img/hero.jpg"
        alt="Hero Image"
        fill='true'
        
      />
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">¡Bienvenidos a I mas D!</h1>
        <p className="text-lg md:text-xl mt-4 text-white" ><Typewriter text='Bienvenidos a mi sitio web'/></p>
      </div>
    </div>

    <h1>Sisisis</h1>


      </Layout>
    </div>
  )
}
