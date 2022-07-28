import Image from 'next/image'
import logo from '../public/icon/logo.png'
import plant from '../public/illustration/plant.png'

export default function Profile() {
  return (
    <>
      <div className='bg-primary/70 my-6 mx-4 px-3 py-4 rounded shadow'>
        <div className='w-40 pb-4 mx-auto'>
          <Image alt='Logo Rancang Creative' src={logo} />
        </div>
        <div className='flex flex-col gap-3'>
          <p>
            Rancang Kreatif adalah layanan jasa yang membantumu meRancang secara Kreatif konten digital untuk optimalisasi media sosial penjualan atau layanan jasa yang kamu tawarkan di lini masa online.
          </p>
          <p>
            Kenapa, sih, ini penting? Analoginya saat kamu naksir seseorang, kebanyakan, sebelum jatuh ke hati tentu bermula dari mata, ya, kan? Maka dari itu, desain usaha barang atau jasa kamu cakep dan menarik secara tampilan semakin meningkatkan kepercayaan. Pada akhirnya, konsumen berdatangan, deh!
          </p>
          <p>
            Untuk itu, Rancang Creative siap membantumu mikirin ide dan desain konten secara profesional dengan harga kompetitif dengan mengedepankan kepuasan konsumen untuk meRancang apa yang diinginkan secara Kreatif!
          </p>
        </div>
      </div>
      <div className='px-8 mb-6'>
        <div className='w-full pb-4 px-10 border-[6px] border-black'>
          <Image alt='' src={plant} />
        </div>
        <h3 className='text-center font-bold my-4'>
          Jangan Pilih Dia, Pilih Aku Aja! Loh, Kenapa?
        </h3>
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
          <li>
            BEBAS REVISI!!!!
          </li>
        </ol>
      </div>
    </>
  )
}