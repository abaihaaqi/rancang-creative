import Navbar from '../components/navbar'
import MetaTags from '../utils/meta-tag'
import { WhatsappLogo } from 'phosphor-react'

export default function Layout({ children, metaContent }) {
  return (
    <>
      <MetaTags {...metaContent} />
      <Navbar />
      <main>
        {children}
      </main>
      <div className='relative bg-gray-700 text-center py-2 z-50'>
        <a href='http://wa.me/6285624200502?text=Hi,+mau+dong+sosmednya+dirapihin' target='_blank' rel='noopener noreferrer'>
          <WhatsappLogo size={32} className='text-green-400 mx-auto' /> 
        </a>
        <p className='text-sm mt-2 text-white'>
          ©️ Rancang Creative - Based in Bandung
        </p>
      </div>
    </>
  )
}