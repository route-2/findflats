import '../styles/globals.css'
import { DOMAttributes } from "react";
import type { AppProps } from 'next/app'
import { AuthContextProvider } from '@modules/auth/context/auth.context'
import Navbar from '@common/components/Navbar'
function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    
    <AuthContextProvider>
      
       
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
