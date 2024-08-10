import Card from '@/components/Card'
import { IGetProductsResponse } from '@/services/product/interfaces'
import { useContext } from 'react'
import { OrderContext } from '@/contexts/order'

interface ProductsSectionProps extends IGetProductsResponse {
  handleLimit: () => void
  search: string
}

const ProductsSection: React.FC<ProductsSectionProps> = ({
  products,
  total,
  search,
  handleLimit,
}) => {
  const { addProduct } = useContext(OrderContext)

  return (
    <section className='center-items container flex-col justify-center'>
      <div className='flex justify-center'>
        <h1 className='m-8 text-4xl font-bold'>
          Descubra as fragâncias que combinam com você
        </h1>
      </div>

      <div className='flex w-full flex-col items-center gap-8 lg:flex-row lg:flex-wrap'>
        {products &&
          products.map((product) => (
            <Card
              key={product.id}
              product={product}
              action={() => addProduct(product)}
            />
          ))}
      </div>

      {total > products.length && !search && (
        <button
          type='button'
          onClick={handleLimit}
          className='my-4 rounded-full border border-black bg-white px-6 py-3 hover:bg-slate-100'
        >
          Carregar mais
        </button>
      )}
    </section>
  )
}

export default ProductsSection
