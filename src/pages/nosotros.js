import Layout from "../../components/layout";

export default function Nosotros() {
  return (
    <div>
        <Layout
            title="Nosotros"
            description="I mas D - Nosotros, conócenos."
        >

        <div
          className="bg-cover bg-center h-screen flex flex-col justify-center items-center sm:h-screen mt-10"
          style={{ backgroundImage: "url('/img/1.jpg')" }}
        >
          <h1 className="text-4xl md:text-6xl text-indigo-400 font-bold text-center mb-4 sm:text-xs">
            ¿Quienes <span className="text-orange-400">somos?</span>
          </h1>
          <div className="bg-white bg-opacity-20 md:m-20 m-5 ">
          <p className="md:m-20 font-bold text-justify text-white md:text-xl  text-base m-14">
          Somos una empresa creada con el  objetivo de impulsar a las organizaciones a través de la digitalización, a alcanzar sus objetivos estratégicos y extender el alcance de sus servicios y productos.​
          En la actualidad con la Industria 4.0 en auge, todos estamos inmersos en las mismas posibilidades de crecimiento gracias a la tecnología, es necesario considerar automatizar procesos, analizar toda la información que produce nuestra organización y sacarle el máximo provecho para la toma de desiciones.
          En I+D somos especialistas en Desarrollo de Software y Consultoría Especializada para base de datos e inteligencia de negocios, por lo que podemos ofrecer servicios que apoyen su transformación hacia la digitalización.
          </p>
          </div>
        </div>

        <div
          className="bg-cover bg-center h-screen flex flex-col justify-center items-center sm:h-screen mt-5 mb-5"
          style={{ backgroundImage: "url('/img/8.jpg')" }}
        >
          <h1 className="text-4xl md:text-6xl text-indigo-400 font-bold text-center mb-4 sm:text-xs">
            Mis<span className="text-orange-400">ión</span>
          </h1>
          <div className="bg-white bg-opacity-20 md:m-20 m-5 ">
          <p className="md:m-20 font-bold text-justify text-white md:text-xl  text-base m-14">
          Contribuir con las actividades laborales a los colaborades, ofreciendo innovación y mejora en los programas.
          </p>
          </div>
        </div>

        <div
          className="bg-cover bg-center h-screen flex flex-col justify-center items-center sm:h-screen mb-10"
          style={{ backgroundImage: "url('/img/9.jpg')" }}
        >
          <h1 className="text-4xl md:text-6xl text-indigo-400 font-bold text-center mb-4 sm:text-xs">
            Vis<span className="text-orange-400">ión</span>
          </h1>
          <div className="bg-white bg-opacity-20 md:m-20 m-5 ">
          <p className="md:m-20 font-bold text-justify text-white md:text-xl  text-base m-14">
          Ser reconocido por el liderazgo tecnológico de la información, por las soluciones innovadores, las mejoras constantes y la simplicidad del sistema.
          </p>
          </div>
        </div>

        </Layout>
    </div>
  )
}
