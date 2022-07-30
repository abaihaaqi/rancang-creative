import Image from 'next/image'
import clumsy from '../public/illustration/clumsy.svg'

export default function Banner() {
  return (
    <div id='top' className='md:max-w-screen-lg md:mx-auto grid grid-cols-1 md:grid-cols-2 justify-items-center items-center px-8 py-6 scroll-mt-14'>
      <div className='w-full mb-4'>
        <Image alt='' src={clumsy} layout='responsive' />
      </div>
      <div className='px-1'>
        <h1 className='font-bold pb-3'>
          Aduuuh bingung... mau ngembangin sosial media bisnis tapi gak ada yang bantu desain, nih.
        </h1>
        <p>
          Mau rekrut tim <i>Content Planner</i> dan <i>Graphic Designer</i> , tapi biayanya mahal-mahal. Duh, jadi pusing, nih. Kalo gini terus, ide-ide bisa pada kabur. Gimana solusinya, yaa?
        </p>
      </div>
    </div>
  )
}