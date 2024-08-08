import { ProductContextProps } from '@/contexts/order'

interface ProductCartProps {
  product: ProductContextProps
}

const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
  return (
    <article className='flex justify-between border-b-2 p-3'>
      <img
        className='w1/5 h-24 rounded-sm'
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

      <div className='flex w-1/5 flex-col justify-between'>
        <p>icon</p>
        <p>
          decrease <b>{product.quantity}</b> increase
        </p>
      </div>
    </article>
  )
}

export default ProductCart
