import '../styles/globals.css'
import {Unbounded} from 'next/font/google'

const unbounded = Unbounded({
  weight: ['300', '600', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-unbounded',
})

export default function App({ Component, pageProps }) {
  return (
    <div className={unbounded.className}>
      <Component {...pageProps} />
    </div>
  )
}