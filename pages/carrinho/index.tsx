import { OrderContext } from '@/contexts/order'
import Link from 'next/link'
import { useContext, useState } from 'react'
import ProductCart from '@/components/Pages/Cart/ProductCart'
import Breadcrumb from '@/components/Breadcrumb'
import UserModal from '@/components/Modals/User'

const Cart: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const {
    orderProducts,
    addProduct,
    decreaseProduct,
    removeOrderProduct,
    cartData,
    finishOrder,
  } = useContext(OrderContext)

  return (
    <main className='container mt-16 flex w-full flex-col'>
      <Breadcrumb />
      <h1 className='my-4 text-xl font-bold'>Seu carrinho</h1>
      <section className='flex min-h-96 w-full flex-col gap-4 md:flex-row'>
        <div className='flex w-full flex-1 flex-col rounded-md border-2 md:w-2/3'>
          {orderProducts.length === 0 ? (
            <div className='flex h-full w-full flex-col items-center justify-center gap-4'>
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
              <ProductCart
                key={product.id}
                product={product}
                addProduct={addProduct}
                decreaseProduct={decreaseProduct}
                removeOrderProduct={removeOrderProduct}
              />
            ))
          )}
        </div>
        <div className='flex max-h-96 w-full flex-col justify-between rounded-md border-2 p-4 md:w-1/3'>
          <h2 className='text-xl font-bold'>Sumário</h2>
          <div className='flex flex-col gap-2'>
            <div className='flex justify-between'>
              <p>Subtotal</p>
              <b>
                {cartData.subtotal.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </b>
            </div>
            <div className='flex justify-between'>
              <p>Desconto</p>
              <b>
                {cartData.discount.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </b>
            </div>
          </div>
          <div className='flex justify-between'>
            <p>Total</p>
            <b>
              {cartData.total.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </b>
          </div>
          <div className='flex justify-between'>
            <button
              disabled={orderProducts?.length === 0}
              onClick={() => setOpenModal(true)}
              type='button'
              className={`my-4 w-full rounded-full ${orderProducts?.length === 0 ? 'opacity-30' : 'opacity-100'} bg-orange-500 px-6 py-3 text-white`}
            >
              Finalizar compra
            </button>
          </div>
        </div>
        <UserModal
          open={openModal}
          setClosed={() => setOpenModal(false)}
          finishOrder={async (userData) => {
            await finishOrder(userData)
            setOpenModal(false)
          }}
        />
      </section>
    </main>
  )
}

export default Cart
