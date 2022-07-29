import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { List, X } from 'phosphor-react'
import style from './navbar.module.css'
import logoHorizontal from '../public/icon/logo-horizontal.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='sticky top-0 z-50'>
      <div className='bg-white flex justify-between items-center px-2 lg:max-w-screen-lg lg:mx-auto lg:items-end'>
        <Link href='#top'>
          <a className='w-24 py-1'>
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
          <Link href=''>
            <a className='hover:underline mb-2'>
              Contact &#8599;
            </a>
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className='bg-white absolute inset-x-0 font-daxline flex flex-col'>
          <Link href='#profile'>
            <a className={style.link}>
              Profile
            </a>
          </Link>
          {/* <Link href='#project'>
            <a className={style.link}>
              Project
            </a>
          </Link> */}
            <a href='' className={style.link}>
              Contact &#8599;
            </a>
        </div>
      )}
    </div>
  )
}