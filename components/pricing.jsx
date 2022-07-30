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
      <div className='px-3 max-w-screen-md mx-auto mb-10'>
        <div className='relative max-w-md bg-cyan-100 shadow-md rounded-md md:rounded-t-md md:rounded-r-md p-3 mb-5'>
          <h2 className='font-bold mb-3 text-center'>Paket Minimalis</h2>
          <h3 className='font-medium mb-3 text-center'>Rp299.000,00,-</h3>
          <ul className='list-disc ml-6 flex flex-col gap-3 mb-3'>
            <li>
              12 Feed Instagram
            </li>
            <li>
              Ide materi dan konsep design
            </li>
            <li>
              Bebas Revisi
            </li>
            <li>
              Caption dan copywriting
            </li>
            <li>
              Admin posting
            </li>
            <li>
              3 icon highlight
            </li>
            <li>
              Riset hashtag
            </li>
          </ul>
          <div className='flex justify-center'>
            <a 
              href="http://wa.me/6285624200502?text=Hi,+saya+mau+pesen+Paket+Minimalis+dong" 
              target="_blank" rel="noopener noreferrer"
              className='bg-white rounded-md shadow-md px-2 py-1'>
              Pesan
            </a>
          </div>
          <div className='hidden xs:block absolute -bottom-3 left-0 bg-cyan-100 rounded-full shadow-md h-6 w-6' />
        </div>
        <div className='flex justify-end'>
          <div className='relative max-w-md bg-slate-800 shadow-md rounded-md md:rounded-t-md md:rounded-l-md p-3 text-white'>
            <h2 className='font-bold text-center mb-3'><span className='text-red-500'>Paket</span> Merdeka 🇮🇩</h2>
            <h3 className='font-medium mb-3 text-center'>Harga merdeka</h3>
            <p className='mb-3'>
              Desain spanduk dengan harga bebas, dalam rangka merayakan kemerdekaan Indonesia yang ke-77.
            </p>
            <div className='flex justify-center'>
              <a 
                href="http://wa.me/6285624200502?text=Hi,+saya+mau+pesen+Paket+Merdeka+dong" 
                target="_blank" rel="noopener noreferrer"
                className='bg-red-700 rounded-md shadow-md px-2 py-1'>
                Pesan
              </a>
            </div>
            <div className='hidden xs:block absolute -bottom-3 right-0 bg-slate-800 rounded-full shadow-md h-6 w-6' />
          </div>
        </div>
      </div>
    </>
  )
}