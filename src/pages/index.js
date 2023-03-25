
import Link from "next/link";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Layout from "../../components/layout";
import Typewriter from "../../components/typewriter";

export default function Home() {

  return (
    <div>
      <Layout
        title="Inicio"
        description="Desarrollo de Software y consultoría Especializada"
      >
        <div
          className="bg-cover bg-center h-screen flex flex-col justify-center items-center sm:h-screen"
          style={{ backgroundImage: "url('/img/2.jpg')" }}
        >
          <h1 className="text-4xl md:text-6xl text-indigo-400 font-bold text-center mb-4">
            ¡Bienvenido a <span className="text-orange-400">I + D!</span>
          </h1>
          <Typewriter text="Desarrollo de Software y consultoría Especializada"></Typewriter>
          <Link href="/contacto">
            <button className="bg-gray-800 text-white rounded-full py-3 px-8 font-bold text-lg hover:bg-orange-400 before:opacity-5">
              Contáctanos
            </button>
          </Link>
        </div>
        </Layout>
    </div>
  );
}
