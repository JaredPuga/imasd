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
      
          <section className="text-gray-700 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" width={800} height={950} src="/img/hero.jpg" />
              <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Bienvenido a I mas D</h1>
                <Typewriter text='Bienvenido a I mas D'/>
                <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur mauris felis, ut tincidunt magna suscipit sed. In hac habitasse platea dictumst.</p>
                <div className="flex justify-center">
                  <Link href="/login" className="inline-flex items-center bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Log in</Link>
                </div>
              </div>
            </div>
          </section>      
      </Layout>
    </div>
  )
}
