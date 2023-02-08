import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../components/layout/header"
import Footer from "../components/layout/footer"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div className='relative bg-white'>
        <Header></Header>
        <div className='mx-auto max-w-7xl px-4 sm:px-6'>
          <div className="py-10">
            <Component {...pageProps} />
          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}
