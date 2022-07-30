import Image from 'next/image'
import sitting from '../public/illustration/sitting.svg'

export default function Pricing() {
  return (
    <>
      <div className='max-w-md md:max-w-2xl mx-auto px-6 mb-10 md:mb-20'>
        <div className='relative max-w-md bg-cyan-100 rounded-t-md rounded-r-md px-3 py-2 mb-4 ml-10 '>
          Ah... kemarin aja order di sebelah udah mahal, hasilnya kurang memuaskan lagi.
          <div className='absolute -bottom-2 left-0 bg-cyan-100 rounded-full h-4 w-4' />
        </div>
        <div className='relative'>
          <div className='w-52 mb-6'>
            <Image alt='' src={sitting} layout='responsive' />
          </div>
          <div className='md:absolute top-0 right-0 max-w-md mx-auto md:max-w-md md:bg-red-100 rounded-t-md rounded-l-md md:px-3 md:py-2 md:ml-16'>
            <p className='mb-3'>
              Santai, di <b>Rancang Creative</b> selain designer yang terlatih dan profesional, kami juga menyediakan berbagai macam pilihan list paket yang pastinya sesuai dengan keinginan dan kebutuhan kamu, dong.
            </p>
            <p className='mb-3'>
              Jadi gimana? Masih ragu dengan pelayanan kami?
            </p>
            <p>
              Tenang, masalah konten kami yang tangani kamu tinggal duduk manis sambil ngopi.
            </p>
            <div className='hidden md:block absolute -bottom-2 right-0 bg-red-100 rounded-full h-4 w-4' />
          </div>
        </div>
      </div>
    </>
  )
}