import Image from 'next/image'
import Layout from '../components/layout'
import Estetika from '../components/estetika'
import Banner from '../components/banner'
import Profile from '../components/profile'
import reading from '../public/illustration/reading.png'

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Estetika />
      <div className='px-8 pt-6'>
        <div className='w-full bg-white border-[6px] border-black mb-3 px-10'>
          <Image alt='' src={reading} layout='responsive' />
        </div>
        <h3 className='font-bold text-center mb-3'>
          Bikin konten sosmed mahal banget, ya?
        </h3>
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
        <div className='w-full bg-white border-[6px] border-black mb-3 px-10'>
          <Image alt='' src={reading} layout='responsive' />
        </div>
        <h3 className='font-bold text-center mb-3'>
          {`"Ah... kemarin aja order di sebelah udah mahal, hasilnya kurang memuaskan lagi, mending mending mending".`}
        </h3>
        <div className='flex flex-col gap-3'>
          <p>
            Santai, di Rancang Creative selain designer yang terlatih dan profesional kami juga menyediakan berbagai macam pilihan list paket yang pastinya sesuai dengan keinginan dan kebutuhan kamu, dong.
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
