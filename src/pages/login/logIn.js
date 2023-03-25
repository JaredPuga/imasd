import { useState } from 'react';
import Router from 'next/router';
import { useLogin } from '../../../hooks/useLogin';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorS, setError] = useState(null);
  const [mensajeError, setMensajeError] = useState('')

  const { setLoggeado, setName, setId } = useLogin()

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();

    setName(data.name)
    setId(data.id)
    
    if (response.ok) {
      Router.push('/');
      setLoggeado(true)
      setMensajeError('')
      setError(false)

    } else {
      console.error('Error al iniciar sesión:', response.statusText);
      setError(true)
      setLoggeado(false)
      setMensajeError('Ha ocurrido un error al iniciar sesión')
    }
    return data;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>
        {errorS ? <p className="form-error mb-4 text-red-700 font-bold uppercase bg-red-300">{mensajeError}</p> : ''}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errorS && 'input-error'}`}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errorS && 'input-error'}`}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
      
  );
}

