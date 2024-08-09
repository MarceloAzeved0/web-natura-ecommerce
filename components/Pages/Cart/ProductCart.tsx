import { OrderProduct } from '@/contexts/order'
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/outline'
import Image from 'next/image'

interface ProductCartProps {
  product: OrderProduct
  addProduct: (data: OrderProduct) => void
  decreaseProduct: (data: OrderProduct) => void
  removeOrderProduct: (data: OrderProduct) => void
}

const ProductCart: React.FC<ProductCartProps> = ({
  product,
  addProduct,
  decreaseProduct,
  removeOrderProduct,
}) => {
  return (
    <article className='flex h-32 justify-between border-b-2 p-3'>
      <Image
        width={96}
        height={96}
        className='rounded-sm'
        src={product.imageURL}
        alt={product.name}
      />
      <div className='flex flex-1 flex-col justify-between'>
        <p>{product.name}</p>
        <p>
          {product.price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
      </div>

      <div className='ite flex flex-col items-end justify-between'>
        <button
          onClick={() => removeOrderProduct(product)}
          type='button'
          aria-label='Remove'
        >
          <TrashIcon className='h-6 w-6 cursor-pointer text-red-500' />
        </button>
        <div className='flex justify-center gap-4'>
          <button
            type='button'
            onClick={() => decreaseProduct(product)}
            aria-label='Decrease'
          >
            <MinusIcon className='h-6 w-6 cursor-pointer text-red-500' />
          </button>
          <b>{product.quantity}</b>
          <button
            type='button'
            onClick={() => addProduct(product)}
            aria-label='Increase'
          >
            <PlusIcon className='h-6 w-6 cursor-pointer text-green-500' />
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCart
