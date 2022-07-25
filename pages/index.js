import Image from 'next/image'
import logoRancang from '../public/icon/rancang-horizontal.png'

export default function Home() {
  return (
    <div className='bg-primary/70 h-screen w-full flex flex-col justify-center items-center'>
      <div className='w-40 mb-4'>
        <Image alt='Logo Rancang' src={logoRancang} />
      </div>
      This website is under development
    </div>
  )
}
