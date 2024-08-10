import Link from 'next/link'

const Banner = () => {
  return (
    <section
      className='relative flex h-96 w-full bg-cover bg-center'
      style={{ backgroundImage: "url('/img/banner.jpg')" }}
    >
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='container relative mx-auto flex h-full items-center px-6 py-16'>
        <div className='max-w-lg'>
          <h1 className='mb-4 text-4xl font-bold text-white'>
            Se joga no arraiá
          </h1>
          <p className='mb-6 text-lg text-white'>
            Aproveita as fetas com o melhor da maquiagem Natura.
          </p>
          <Link
            href='/carrinho'
            className='rounded-full bg-white px-6 py-3 hover:bg-slate-100'
          >
            Comprar agora
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Banner
