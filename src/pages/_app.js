import '@/styles/globals.css'
import { LoginProvider } from '../../context/loginProvider'

export default function App({ Component, pageProps }) {

  return (
    <LoginProvider> 
      <Component {...pageProps} />
    </LoginProvider> 
  )
}
