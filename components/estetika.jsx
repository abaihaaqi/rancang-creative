import Image from 'next/image'
import jumping from '../public/illustration/jumping.svg'
import dancing from '../public/illustration/dancing.svg'
import loving from '../public/illustration/loving.svg'
import meditating from '../public/illustration/meditating.svg'
import iceCream from '../public/illustration/ice-cream.svg'

export default function Estetika() {
  return (
    <>
      <div className='max-w-screen-lg mx-auto flex flex-col lg:flex-row-reverse md:items-center lg:items-start px-8 py-6'>
        <div className='w-full md:w-80 lg:w-1/3'>
          <Image alt='' src={jumping} layout='responsive' />
        </div>
        <div className='px-1 lg:w-2/3'>
          <h2 className='font-bold pb-2'>
            Emang penting, ya, estetika desain Instagram? 
          </h2>
          <p className='pb-3'>
            Instagram usaha atau jasa yang kamu kelola merupakan cerminan dari toko kamu. Orang akan menyangka bahwa toko yang kamu kelola kurang profesional jika desainnya saja tidak rapi. Akan tetapi, apabila feed rapi, enak dilihat, dan eye cathing, para calon pembeli akan melirik Instagram tokomu.
          </p>
          <p className='pb-3'>
            Beberapa fakta mengatakan, bahwa kebanyakan konsumen akan mengikuti sosial media suatu brand untuk mencari informasi, promo, dan diskon.
          </p>
          <p>
            Review, testimoni, dan konsep desain yang menarik juga akan memengaruhi keputusan mereka untuk berbelanja.
          </p>
        </div>
      </div>
      <div className='bg-cyan-50 mb-10'>
        <div className='max-w-screen-lg mx-auto'>
          <h2 className='font-bold px-8 pt-6'>
            Beberapa pengaruh apabila desain Instagrammu enak dilihat, dan rapi:
          </h2>
          <div className='grid grid-cols-1 justify-items-center px-8 py-6 items-center md:grid-cols-2'>
            <div className='w-full'>
              <Image alt='' src={iceCream} layout='responsive' />
            </div>
            <div className='px-1'>
              <h3 className='font-bold pb-1'>
                Pembeli jadi makin minat
              </h3>
              <p>
                Selain review dan testimoni, desain yang menarik akan membuat konsumen gak ragu buat beli produkmu.
              </p>
            </div>
          </div>
          <div className='grid grid-cols-1 justify-items-center px-8 py-6 items-center md:grid-cols-2'>
            <div className='w-full md:order-last'>
              <Image alt='' src={loving} layout='responsive' />
            </div>
            <div className='px-1'>
              <h3 className='font-bold pb-1'>
                Kepercayaan pun meningkat
              </h3>
              <p>
                Tampilan visual yang menarik akan membuat konsumen jadi percaya sama kualitas barangmu.
              </p>
            </div>
          </div>
          <div className='grid grid-cols-1 justify-items-center px-8 py-6 items-center md:grid-cols-2'>
            <div className='w-full'>
              <Image alt='' src={meditating} layout='responsive' />
            </div>
            <div className='px-1'>
              <h3 className='font-bold pb-1'>
                Jadi toko yang profesional
              </h3>
              <p>
                Orang-orang akan menyangka jika Instagram tokomu dikelola dengan baik
              </p>
            </div>
          </div>
          <div className='grid grid-cols-1 justify-items-center px-8 py-6 items-center md:grid-cols-2'>
            <div className='w-full md:order-last'>
              <Image alt='' src={dancing} layout='responsive' />
            </div>
            <div className='px-1'>
              <h3 className='font-bold pb-1'>
                Follower bisa jadi nambah
              </h3>
              <p>
                Konten yang baik akan membuat orang-orang auto ngestalk atau follow Instagrammu, percaya, deh!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}