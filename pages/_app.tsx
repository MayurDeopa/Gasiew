
import type { AppProps } from 'next/app'


import AppContext from '@/context'


import '@/styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
  return(
    <AppContext>
      <Component {...pageProps} />
    </AppContext>
  )
}
