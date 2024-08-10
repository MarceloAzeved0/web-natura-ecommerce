import Image from 'next/image'

import { IProduct } from '@/services/product/interfaces'

interface CardProps {
  product: IProduct
  action: () => void
}

const Card: React.FC<CardProps> = ({ product, action }) => {
  const valueWithoutDiscount = product.price + (product.discount || 0)
  const percentDiscount = product.discount
    ? Math.round(product.price / product.discount)
    : 0

  return (
    <article className='my-4 flex w-full max-w-80 flex-col rounded-xl border p-6 shadow-lg hover:bg-slate-100 lg:w-1/5'>
      <div className='flex w-full items-center'>
        <Image
          src={product.imageURL}
          alt={product.name}
          width={180}
          height={150}
          className='ali mb-4 w-full rounded-xl'
        />
      </div>
      <p className='mb-2 text-lg font-bold'>{product.name}</p>
      <div className='flex flex-col justify-between lg:flex-row'>
        <p className='mb-2 text-lg font-bold'>
          {product.price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
        {valueWithoutDiscount !== product.price ? (
          <div className='-mt-0 flex items-center gap-4 lg:-mt-12'>
            <p className='mb-2 text-lg font-bold text-gray-400'>
              <s>
                {valueWithoutDiscount.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </s>
            </p>
            <p className='w-full rounded-lg bg-red-200 p-1 text-red-600'>
              {percentDiscount} %
            </p>
          </div>
        ) : (
          ''
        )}
      </div>
      <button
        onClick={action}
        className='rounded-full border border-none bg-orange-500 px-6 py-3 text-white hover:opacity-30'
      >
        Adicionar
      </button>
    </article>
  )
}

export default Card
