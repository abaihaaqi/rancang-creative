import Image from 'next/image'
import { BookmarkSimple } from 'phosphor-react'
import clumsy from '../public/illustration/clumsy.svg'
import jumping from '../public/illustration/jumping.svg'
import dancing from '../public/illustration/dancing.svg'
import loving from '../public/illustration/loving.svg'
import meditating from '../public/illustration/meditating.svg'
import reading from '../public/illustration/reading.svg'
import iceCream from '../public/illustration/ice-cream.svg'

export default function Estetika() {
  return (
    <>
      <div className='grid grid-cols-1 justify-items-center px-8 py-6'>
        <div className='w-full'>
          <div className='w-full'>
            <Image alt='' src={jumping} layout='responsive' />
          </div>
          <div className='flex justify-end gap-1 p-2'>
            <BookmarkSimple size={25} weight='fill' className='text-secondary' />
          </div>
        </div>
        <div className='px-1'>
          <h3 className='font-bold pb-2'>
            Emang penting, ya, estetika desain Instagram? 
          </h3>
          <p className='text-sm pb-3'>
            Instagram usaha atau jasa yang kamu kelola merupakan cerminan dari toko kamu. Orang akan menyangka bahwa toko yang kamu kelola kurang profesional jika desainnya saja tidak rapi. Akan tetapi, apabila feed rapi, enak dilihat, dan eye cathing, para calon pembeli akan melirik Instagram tokomu.
          </p>
          <p className='text-sm pb-3'>
            Beberapa fakta mengatakan, bahwa kebanyakan konsumen akan mengikuti sosial media suatu brand untuk mencari informasi, promo, dan diskon.
          </p>
          <p className='text-sm'>
            Review, testimoni, dan konsep desain yang menarik juga akan memengaruhi keputusan mereka untuk berbelanja.
          </p>
        </div>
      </div>
      <div className='bg-primary'>
        <h3 className='font-bold text-center px-8 pt-6'>
          Beberapa pengaruh apabila desain Instagrammu enak dilihat, dan rapi:
        </h3>
        <div className='grid grid-cols-1 justify-items-center px-8 py-6'>
          <div className='w-full bg-white border-[6px] border-black mb-3'>
            <Image alt='' src={iceCream} layout='responsive' />
          </div>
          <div className='px-1'>
            <h3 className='font-bold pb-1'>
              Pembeli jadi makin minat
            </h3>
            <p className='text-sm'>
              Selain review dan testimoni, desain yang menarik akan membuat konsumen gak ragu buat beli produkmu.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 justify-items-center px-8 py-6'>
          <div className='w-full bg-white border-[6px] border-black mb-3'>
            <Image alt='' src={loving} layout='responsive' />
          </div>
          <div className='px-1'>
            <h3 className='font-bold pb-1'>
              Kepercayaan pun meningkat
            </h3>
            <p className='text-sm'>
              Tampilan visual yang menarik akan membuat konsumen jadi percaya sama kualitas barangmu.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 justify-items-center px-8 py-6'>
          <div className='w-full bg-white border-[6px] border-black mb-3'>
            <Image alt='' src={meditating} layout='responsive' />
          </div>
          <div className='px-1'>
            <h3 className='font-bold pb-1'>
              Jadi toko yang profesional
            </h3>
            <p className='text-sm'>
              Orang-orang akan menyangka jika Instagram tokomu dikelola dengan baik
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 justify-items-center px-8 py-6'>
          <div className='w-full bg-white border-[6px] border-black mb-3'>
            <Image alt='' src={dancing} layout='responsive' />
          </div>
          <div className='px-1'>
            <h3 className='font-bold pb-1'>
              Follower bisa jadi nambah
            </h3>
            <p className='text-sm'>
              Konten yang baik akan membuat orang-orang auto ngestalk atau follow Instagrammu, percaya, deh!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}