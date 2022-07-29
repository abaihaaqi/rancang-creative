import Image from 'next/image'
import Layout from '../components/layout'
import Estetika from '../components/estetika'
import Banner from '../components/banner'
import Profile from '../components/profile'
import reading from '../public/illustration/reading.svg'
import sitting from '../public/illustration/sitting.svg'

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Estetika />
      <div className='px-8 pt-6'>
        <div className='relative w-full mb-3'>
          <div className='w-60 -ml-10 pt-6'>
            <Image alt='' src={reading} layout='responsive' />
          </div>
          <div className='bg-cyan-100 shadow rounded-xl px-3 py-2 absolute w-36 top-0 right-4'>
            Bikin konten sosmed mahal banget, ya?
            <div className='h-4 w-4 rounded-full absolute -left-6 top-0 bg-cyan-100' />
          </div>
        </div>
        <ul className='list-disc ml-4 flex flex-col gap-3'>
          <li>
            Rekrut Graphic Designer aja minimal Rp5 Juta sebulan.
          </li>
          <li>
            Rekrut Tim Copywriter juga minimal Rp3,5 Juta.
          </li>
          <li>
            Mau belajar sendiri, gak ada waktunya.
          </li>
          <li>
            Apalagi kalau device-nya gak mendukung, makin merana, deh.
          </li>
        </ul>
      </div>
      <Profile />
      <div className='px-8 pb-6'>
        <div className='relative w-full mb-3'>
          <div className='relative w-60 -ml-10 pt-10'>
            <Image alt='' src={sitting} layout='responsive' />
            <p className='absolute top-4 inset-x-0 text-xs text-center'>
              {`*pusing*`}
            </p>
          </div>
          <div className='bg-cyan-100 shadow rounded-xl px-3 py-2 absolute w-44 top-0 right-0'>
            {`"Ah... kemarin aja order di sebelah udah mahal, hasilnya kurang memuaskan lagi"`}
            <p className='absolute -bottom-8 right-6 text-xs bg-cyan-100 shadow rounded px-2 py-1'>
              mending
            </p>
            <p className='absolute -bottom-16 right-12 text-xs bg-cyan-100 shadow rounded px-2 py-1'>
              mending
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <p>
            Santai, di <b>Rancang Creative</b> selain designer yang terlatih dan profesional kami juga menyediakan berbagai macam pilihan list paket yang pastinya sesuai dengan keinginan dan kebutuhan kamu, dong.
          </p>
          <p>
            Jadi gimana? Masih ragu dengan pelayanan kami?
          </p>
          <p>
            Tenang, masalah konten kami yang tangani kamu tinggal duduk manis sambil ngopi.
          </p>
        </div>
      </div>
    </Layout>
  )
}
