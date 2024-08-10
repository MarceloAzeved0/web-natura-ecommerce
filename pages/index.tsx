import Breadcrumb from '@/components/Breadcrumb'
import Banner from '@/components/Pages/Home/Banner'
import ProductsSection from '@/components/Pages/Home/ProductsSection'
import { ProductContext } from '@/contexts/product'
import { useContext } from 'react'

export default function Home() {
  const { products, total, handleLimit, search } = useContext(ProductContext)

  return (
    <main className='mt-16 flex w-full flex-col items-center'>
      <Breadcrumb />

      <Banner />
      <ProductsSection
        products={products}
        total={total}
        search={search}
        handleLimit={handleLimit}
      />
    </main>
  )
}
