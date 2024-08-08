import { OrderContext } from '@/contexts/order'
import Link from 'next/link'
import { useContext } from 'react'
import ProductCart from '@/components/Pages/Cart/ProductCart'

const Cart: React.FC = () => {
  const { orderProducts } = useContext(OrderContext)

  return (
    <main className='w-100 container mt-16 flex flex-col'>
      <h1 className='my-4'>Seu carrinho</h1>
      <section className='w-100 flex min-h-96 gap-4'>
        <div className='flex w-2/3 flex-1 flex-col justify-center rounded-md border-2'>
          {orderProducts.length === 0 ? (
            <div className='flex w-full flex-col items-center gap-4'>
              <p>Nenhum produto no carrinho!</p>
              <Link
                href='/'
                className='rounded-full border-2 bg-white px-3 py-3 hover:bg-slate-100'
              >
                Ver produtos
              </Link>
            </div>
          ) : (
            orderProducts.map((product) => (
              <ProductCart key={product.id} product={product} />
            ))
          )}
        </div>
        <div className='flex w-1/3 flex-col rounded-md border-2'></div>
      </section>
    </main>
  )
}

export default Cart
