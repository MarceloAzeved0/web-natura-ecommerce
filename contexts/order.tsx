import { IOrder } from '@/services/order/interfaces'
import { IProduct } from '@/services/product/interfaces'
import { createContext, useState } from 'react'

interface OrderProduct extends IProduct {
  quantity: number
}

export interface OrderContextType {
  orderProducts: OrderProduct[]
  quantityProducts: number
  addProduct: (data: IProduct) => void
  removeProduct: (data: IProduct) => void
  order: IOrder
  setOrder: (data: IOrder) => void
}

export const OrderContext = createContext<OrderContextType>(
  {} as OrderContextType,
)

interface OrderContextProps {
  children: React.ReactNode
}

const Order: React.FC<OrderContextProps> = ({ children }) => {
  const [order, setOrder] = useState<IOrder>({} as IOrder)
  const [quantityProducts, setQuantityProducts] = useState(0)
  const [orderProducts, setOrderProducts] = useState<OrderProduct[]>([])

  const addProduct = (product: IProduct) => {
    setQuantityProducts(quantityProducts + 1)

    const index = orderProducts.findIndex((orderP) => orderP.id === product.id)

    if (index === -1) {
      setOrderProducts((oldItems) => [...oldItems, { ...product, quantity: 1 }])
      return
    }

    const newOrderProducts = orderProducts
    const newQuantity = orderProducts[index].quantity + 1

    newOrderProducts.splice(index, 1, {
      ...orderProducts[index],
      quantity: newQuantity,
    })

    setOrderProducts(newOrderProducts)
  }

  const removeProduct = (product: IProduct) => {
    const filterProducts = orderProducts.filter(
      (filterProduct) => filterProduct.id !== product.id,
    )

    setOrderProducts(filterProducts)
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        setOrder,
        orderProducts,
        quantityProducts,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export default Order
