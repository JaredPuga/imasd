import Link from 'next/link'

import React from 'react'

export default function footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 ">
      <div className="container mx-auto px-6 py-4 flex flex-wrap lg:justify-between items-center justify-center">
        <div className="flex justify-center flex-wrap mt-4 sm:mt-0">
        <p className="text-sm text-gray-400 hover:text-gray-300">© {new Date().getFullYear()} I mas D. Todos los derechos reservados.</p>
        </div>
        <div className="flex items-center mt-5 lg:mt-0">
          <p className="font-bold text-sm text-gray-400 hover:text-gray-300 mr-4">Calle 35 No. 479-E x 44 y 48 <br/> Col. Jesús Carranza. Mérida, Yucatán</p>
          <p className="font-bold text-sm text-gray-400 hover:text-gray-300 mr-4">Tel: {`(999) 124 24 30`} <br/> Email: ventas@imasd.com.mx</p>
        </div>
      </div>
    </footer>
  )
}
