import Image from 'next/image'
import clumsy from '../public/illustration/clumsy.svg'

export default function Banner() {
  return (
    <>
      <div className='grid grid-cols-1 justify-items-center px-8 py-6'>
        <div className='w-full mb-4'>
          <Image alt='' src={clumsy} layout='responsive' />
        </div>
        <div className='px-1'>
          <h1 className='font-bold pb-3'>
            Aduuuh... Kepikiran ide-ide baru tapi gak ada yang bantu desain, nih.
          </h1>
          <p>
            Mau rekrut tim <i>Content Planner</i> dan <i>Graphic Designer</i> , tapi biayanya mahal-mahal. Duh, jadi pusing, nih. Kalo gini terus, ide-ide bisa pada kabur. Gimana solusinya, yaa?
          </p>
        </div>
      </div>
    </>
  )
}