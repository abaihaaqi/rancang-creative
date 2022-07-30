import Image from 'next/image'
import logo from '../public/icon/logo.png'
import laying from '../public/illustration/laying.svg'
import jumping from '../public/illustration/jumping.svg'
import selfie from '../public/illustration/selfie.svg'
import { CaretLeft, DotsThreeVertical } from 'phosphor-react'

export default function Profile() {
  return (
    <>   
      <div className='flex justify-center items-end gap-2 mb-10 sm:mx-3' >
        <div className='max-w-screen-xs px-3'>
          <div className='bg-primary shadow-md rounded-md p-3'>
            <div className='flex items-center gap-1 border-b border-black py-2 mb-1'>
              <CaretLeft size={24} />
              <div className='w-full flex justify-between'>
                <div className='flex gap-1'>
                  <div className='bg-white/80 relative rounded-full h-6 w-6 overflow-hidden'>
                    <Image alt='' src={jumping} layout='fill' objectFit='cover' objectPosition='center' />
                  </div>
                  <p>Jeje slebew</p>
                </div>
                <DotsThreeVertical size={24} />
              </div>
            </div>
            <div className='relative bg-cyan-100 rounded mr-6 my-3 px-3 py-2'>
              Bikin konten sosmed mahal banget, ya?
              <div className='absolute -bottom-2 left-0 bg-cyan-100 rounded-full h-4 w-4 -mt-2' />
            </div>
            <div className='relative bg-red-200 rounded ml-6 my-3 px-3 py-2'>
              Iya, Rekrut Graphic Designer aja minimal Rp5 Juta sebulan.
              <div className='absolute -bottom-2 right-0 bg-red-200 rounded-full h-4 w-4 -mt-2' />
            </div>
            <div className='relative bg-cyan-100 rounded mr-6 my-3 px-3 py-2'>
              Rekrut Tim Copywriter juga minimal Rp3,5 Juta.
              <div className='absolute -bottom-2 left-0 bg-cyan-100 rounded-full h-4 w-4 -mt-2' />
            </div>
            <div className='relative bg-red-200 rounded ml-6 my-3 px-3 py-2'>
              Mau belajar sendiri, gak ada waktunya.
              <div className='absolute -bottom-2 right-0 bg-red-200 rounded-full h-4 w-4 -mt-2' />
            </div>
            <div className='relative bg-red-200 rounded ml-6 my-3 px-3 py-2'>
              Apalagi kalau device-nya gak mendukung, makin merana, deh.
              <div className='absolute -bottom-2 right-0 bg-red-200 rounded-full h-4 w-4 -mt-2' />
            </div>
            <div className='relative bg-cyan-100 rounded mr-6 my-3 px-3 py-2'>
              Huhuhu 😭
              <div className='absolute -bottom-2 left-0 bg-cyan-100 rounded-full h-4 w-4 -mt-2' />
            </div>
          </div>
        </div>
        <div className='hidden sm:block w-80'>
          <Image alt='' src={laying} layout='responsive' />
        </div>
      </div>
      <div id='profile' className='max-w-2xl mx-auto scroll-mt-14 mb-10 flex justify-end sm:pl-16 sm:pr-3'>
        <div className='relative max-w-xl bg-red-100 px-3 py-4 sm:rounded-t-md sm:rounded-l-md sm:shadow-md'>
          <div className='w-40 pb-4 mx-auto'>
            <Image alt='Logo Rancang Creative' src={logo} />
          </div>
          <div className='flex flex-col gap-3'>
            <p>
              <b>Rancang Creative</b> adalah layanan jasa yang membantumu me<b>Rancang</b> secara <b>Kreatif</b> konten digital untuk optimalisasi media sosial penjualan atau layanan jasa yang kamu tawarkan di lini masa online.
            </p>
            <p>
              Kenapa, sih, ini penting? Analoginya saat kamu naksir seseorang, kebanyakan, sebelum jatuh ke hati tentu bermula dari mata, ya, kan? Maka dari itu, desain usaha barang atau jasa kamu cakep dan menarik secara tampilan semakin meningkatkan kepercayaan. Pada akhirnya, konsumen berdatangan, deh!
            </p>
            <p>
              Untuk itu, <b>Rancang Creative</b> siap membantumu mikirin ide dan desain konten secara profesional dengan harga kompetitif dengan mengedepankan kepuasan konsumen untuk me <b>Rancang</b> apa yang diinginkan secara <b>Kreatif</b>!
            </p>
          </div>
          <div className='hidden sm:block absolute -bottom-3 right-0 shadow-md bg-red-100 rounded-full w-6 h-6'/>
        </div>
      </div>
      <div className='max-w-2xl mx-auto mb-10'>
        <div className='relative mb-6'>
          <div className='max-w-xs mx-auto md:max-w-sm md:mx-0'>
            <Image alt='' src={selfie} layout='responsive' />
          </div>
          <div className='md:absolute bottom-0 left-52 xs:px-3 mb-4'>
            <div className=' bg-gray-50 max-w-sm mx-auto xs:shadow-md xs:rounded-md p-3 '>
              <div className='relative bg-red-200 rounded ml-6 px-3 py-2 mb-2'>
                Jangan Pilih Dia, Pilih Aku Aja!
                <div className='absolute -bottom-2 right-0 bg-red-200 rounded-full h-4 w-4 -mt-2' />
              </div>
              <div className='relative bg-cyan-100 rounded mr-6 px-3 py-2'>
                Loh, Kenapa?
                <div className='absolute -bottom-2 left-0 bg-cyan-100 rounded-full h-4 w-4 -mt-2' />
              </div>
            </div>
          </div>
        </div>
        <div className='px-6'>
          <ol className='max-w-sm mx-auto list-decimal pl-8 flex flex-col gap-2'>
            <li>
              Gak usah rekrut karyawan baru
            </li>
            <li>
              Sat-set dalam dalam pengerjaan
            </li>
            <li>
              Profesional dan ramah dalam pelayanan
            </li>
            <li>
              Ide konten bantu disiapkan
            </li>
            <li>
              Desain konten sesuai brand
            </li>
            <li>
              Banyak promo menarik setiap bulannya
            </li>
            <li className='font-bold'>
              BEBAS REVISI!!!!
            </li>
          </ol>
        </div>
      </div>
    </>
  )
}