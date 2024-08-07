import Banner from '@/components/Home/Banner'
import ProductsSection from '@/components/Home/ProductsSection'

import { getProducts } from '@/services/product/services'
import { IProduct } from '@/services/product/interfaces'
import { useState, useEffect } from 'react'

const INITIAL_ROW_NUMBER = 4

export default function Home() {
  const limit = INITIAL_ROW_NUMBER
  const [offset, setOffset] = useState<number>(0)
  const [products, setProducts] = useState<IProduct[]>([])
  const [total, setTotal] = useState<number>(0)

  const manageProducts = async () => {
    const { products: productsResponse, total } = await getProducts({
      offset,
      limit,
    })
    setProducts([...products, ...productsResponse])
    setTotal(total)
  }

  const handleSearch = async () => {
    setOffset(offset + INITIAL_ROW_NUMBER)
  }

  useEffect(() => {
    manageProducts()
  }, [offset])

  return (
    <main className='flex w-full flex-col items-center'>
      <Banner />
      <ProductsSection
        products={products}
        total={total}
        handleSearch={handleSearch}
      />
    </main>
  )
}
