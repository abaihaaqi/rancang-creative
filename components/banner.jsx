import Image from 'next/image'
import clumsy from '../public/illustration/clumsy.png'
import { ChatCircle, Heart, PaperPlaneTilt } from 'phosphor-react'

export default function Banner() {
  return (
    <>
      <div className='bg-primary grid grid-cols-1 justify-items-center px-8 py-6'>
        <div className='w-full'>
          <div className='w-full bg-white border-[6px] border-black'>
            <Image alt='' src={clumsy} layout='responsive' />
          </div>
          <div className='flex gap-1 p-2'>
            <Heart size={25} weight='fill' className='text-secondary' />
            <ChatCircle size={25} />
            <PaperPlaneTilt size={25} />
          </div>
        </div>
        <div className='px-1'>
          <h3 className='font-bold pb-1'>
            Aduuuh... Kepikiran ide-ide baru tapi gak ada yang bantu desain, nih.
          </h3>
          <p className='text-sm'>
            Mau rekrut tim content planner dan graphic designer, tapi biayanya mahal-mahal. Duh, jadi pusing, nih. Kalo gini terus, ide-ide bisa pada kabur. Gimana solusinya, yaa?
          </p>
        </div>
      </div>
    </>
  )
}