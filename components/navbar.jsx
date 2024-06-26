import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { WhatsappLogo, List, X } from 'phosphor-react'
import style from './navbar.module.css'
import logoHorizontal from '../public/icon/logo-horizontal.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='bg-white sticky top-0 z-50'>
        <div className='flex justify-between items-center px-2 lg:max-w-screen-lg lg:mx-auto lg:items-end'>
          <Link href='#top'>
            <a className='w-24 py-1'  onClick={() => setIsOpen(false)}>
              <Image alt='Logo Rancang Creative' src={logoHorizontal} />
            </a>
          </Link>
          <button className='lg:hidden' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={35} color='black' />
            ) : (
              <List size={35} color='black' />
            )}
          </button>
          <div className='hidden font-daxline lg:flex gap-6'>
            <Link href='#top'>
              <a className='hover:underline mb-2'>
                Home
              </a>
            </Link>
            <Link href='#profile'>
              <a className='hover:underline mb-2'>
                Profile
              </a>
            </Link>
            {/* <Link href='#project'>
              <a className='hover:underline mb-2'>
                Project
              </a>
            </Link> */}
            <a href='http://wa.me/6285624200502?text=Hi,+mau+dong+sosmednya+dirapihin' target='_blank' rel='noopener noreferrer' className='hover:underline mb-2'>
              Contact &#8599;
            </a>
          </div>
        </div>
        {isOpen && (
          <div className='bg-white absolute inset-x-0 font-daxline flex flex-col'>
            <Link href='#profile'>
              <a className={style.link} onClick={() => setIsOpen(false)}>
                Profile
              </a>
            </Link>
            {/* <Link href='#project'>
              <a className={style.link}>
                Project
              </a>
            </Link> */}
              <a href='http://wa.me/6285624200502?text=Hi,+mau+dong+sosmednya+dirapihin' target='_blank' rel='noopener noreferrer' className={style.link} onClick={() => setIsOpen(false)}>
                Contact &#8599;
              </a>
          </div>
        )}
      </div>
      <a href='http://wa.me/6285624200502?text=Hi,+mau+dong+sosmednya+dirapihin' target='_blank' rel='noopener noreferrer' className='fixed bottom-0 right-0 m-3 z-40'>
        <WhatsappLogo size={42} className='text-green-600 mx-auto' /> 
      </a>
    </>
  )
}