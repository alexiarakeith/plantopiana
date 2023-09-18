import '@/styles/globals.css'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className='navbar bg-[#0C98BA] text-black-600'>
        <Link className='btn btn-ghost normal-case text-xl font-fig' href='/'>
          Plantopia Admin Panel
        </Link>
      </div>
      <div className='mx-[2%] my-5 font-fig'>
        <Component {...pageProps} />
      </div>
    </>
  )
}
