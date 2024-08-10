import { createContext, useCallback, useEffect, useState } from 'react'
import { getProducts } from '@/services/product'
import { IProduct } from '@/services/product/interfaces'
import { toast } from 'react-toastify'

export interface ProductContextType {
  products: IProduct[]
  total: number
  search: string
  setSearch: (value: string) => void
  handleLimit: () => void
}

export const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType,
)

interface IProductContext {
  children: React.ReactNode
}

const INITIAL_ROW_NUMBER = 4

const Product: React.FC<IProductContext> = ({ children }) => {
  const offset = 0
  const [limit, setLimit] = useState<number>(INITIAL_ROW_NUMBER)
  const [total, setTotal] = useState<number>(0)
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState<IProduct[]>([])

  const manageProducts = useCallback(async () => {
    try {
      const { products: productsResponse, total } = await getProducts({
        name: search,
        offset,
        limit,
      })

      setProducts(productsResponse)
      setTotal(total)
    } catch (error) {
      toast.error('Error ao listar os produtos!')
    }
  }, [search, limit])

  const handleLimit = async () => {
    setLimit(limit + INITIAL_ROW_NUMBER)
  }

  useEffect(() => {
    manageProducts()
  }, [manageProducts])

  return (
    <ProductContext.Provider
      value={{ products, total, search, setSearch, handleLimit }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default Product
