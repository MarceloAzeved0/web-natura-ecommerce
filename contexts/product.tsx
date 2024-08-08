import { IProduct } from '@/services/product/interfaces'
import { createContext, useState } from 'react'

export interface ProductContextType {
  products: IProduct[]
  addProduct: (data: IProduct) => void
  removeProduct: (data: IProduct) => void
}

export const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType,
)

export interface ProductContextProps {
  children: React.ReactNode
}

const Product: React.FC<ProductContextProps> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([])

  const addProduct = (product: IProduct) => {
    setProducts([...products, product])
  }

  const removeProduct = (product: IProduct) => {
    const filterProducts = products.filter(
      (filterProduct) => filterProduct.id !== product.id,
    )

    setProducts(filterProducts)
  }

  return (
    <ProductContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

export default Product
