import Image from 'next/image'
import logo from '../public/icon/logo.png'
import plant from '../public/illustration/plant.svg'

export default function Profile() {
  return (
    <>
      <div className='bg-cyan-100 my-6 mx-4 px-3 py-4 rounded shadow'>
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
      </div>
      <div className='px-8 mb-6'>
        <div className='relative w-full mb-3'>
          <div className='w-60 pt-6'>
            <Image alt='' src={plant} layout='responsive' />
          </div>
          <div className='bg-cyan-100 rounded-xl px-3 py-2 absolute w-36 top-0 right-0 shadow'>
            Jangan Pilih Dia, Pilih Aku Aja! Loh, Kenapa?
            <div className='h-4 w-4 rounded-full absolute -left-6 top-0 bg-cyan-100' />
          </div>
        </div>
        <ol className='list-decimal ml-6 flex flex-col gap-2'>
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
    </>
  )
}