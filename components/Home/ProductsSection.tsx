import Card from '@/components/Card'
import { IGetProductsResponse } from '@/services/product/interfaces'

interface ProductsSectionProps extends IGetProductsResponse {
  handleSearch: () => void
}

const ProductsSection: React.FC<ProductsSectionProps> = ({
  products,
  total,
  handleSearch,
}) => {
  return (
    <section className='center-items container flex-col justify-center'>
      <div className='flex justify-center'>
        <h1 className='m-8 text-4xl font-bold'>
          Descubra as fragâncias que combinam com você
        </h1>
      </div>

      <div className='flex w-full flex-col items-center justify-between gap-4 lg:flex-row lg:flex-wrap'>
        {products &&
          products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
      </div>

      {total > products.length && (
        <button
          type='button'
          onClick={handleSearch}
          className='my-4 rounded-full border border-black bg-white px-6 py-3 hover:bg-slate-100'
        >
          Carregar mais
        </button>
      )}
    </section>
  )
}

export default ProductsSection
