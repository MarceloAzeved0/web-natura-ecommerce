import { IProduct } from '@/services/product/interfaces'
import { createContext, useState } from 'react'

import { createOrder } from '@/services/order'
import { toast } from 'react-toastify'
export interface OrderProduct extends IProduct {
  quantity: number
}

export interface CartDataType {
  quantity: number
  subtotal: number
  discount: number
  total: number
}

export interface OrderContextType {
  orderProducts: OrderProduct[]
  cartData: CartDataType
  addProduct: (data: IProduct) => void
  decreaseProduct: (data: IProduct) => void
  removeOrderProduct: (data: IProduct) => void
  finishOrder: (userId: number) => Promise<void>
}

export const OrderContext = createContext<OrderContextType>(
  {} as OrderContextType,
)

interface OrderContextProps {
  children: React.ReactNode
}

const INITIAL_CART_STATE = {
  quantity: 0,
  subtotal: 0,
  discount: 0,
  total: 0,
}

const Order: React.FC<OrderContextProps> = ({ children }) => {
  const [orderProducts, setOrderProducts] = useState<OrderProduct[]>([])
  const [cartData, setCartData] = useState<CartDataType>(INITIAL_CART_STATE)

  const addProduct = (product: IProduct) => {
    const index = orderProducts.findIndex((orderP) => orderP.id === product.id)

    setCartData({
      quantity: cartData.quantity + 1,
      subtotal: cartData.subtotal + product.price,
      discount: cartData.discount + product.discount,
      total: cartData.total + (product.price - product.discount),
    })

    if (index === -1) {
      setOrderProducts((oldItems) => [...oldItems, { ...product, quantity: 1 }])
      toast.success('Produto adicionado no carrinho!')
      return
    }

    const newOrderProducts = orderProducts
    const newQuantity = orderProducts[index].quantity + 1

    newOrderProducts.splice(index, 1, {
      ...orderProducts[index],
      quantity: newQuantity,
    })

    toast.success('Adicionado mais um item!')

    setOrderProducts(newOrderProducts)
  }

  const decreaseProduct = (product: IProduct) => {
    const index = orderProducts.findIndex((orderP) => orderP.id === product.id)

    if (index === -1) return

    const quantityProduct = orderProducts[index].quantity

    if (quantityProduct === 1) {
      return removeOrderProduct(product)
    }

    const newOrderProducts = orderProducts
    const newQuantity = orderProducts[index].quantity - 1

    newOrderProducts.splice(index, 1, {
      ...orderProducts[index],
      quantity: newQuantity,
    })

    setOrderProducts(newOrderProducts)
    setCartData({
      quantity: cartData.quantity - 1,
      subtotal: cartData.subtotal - product.price,
      discount: cartData.discount - product.discount,
      total: cartData.total - (product.price - product.discount),
    })
    toast.success('Removido mais um item!')
  }

  const removeOrderProduct = (product: IProduct) => {
    const index = orderProducts.findIndex((orderP) => orderP.id === product.id)

    if (index === -1) {
      return
    }
    const decreaseQuantity = orderProducts[index].quantity

    const newOrderProducts = orderProducts
    newOrderProducts.splice(index, 1)

    setOrderProducts(newOrderProducts)
    setCartData({
      quantity: cartData.quantity - decreaseQuantity,
      subtotal: cartData.subtotal - product.price * decreaseQuantity,
      discount: cartData.discount - product.discount * decreaseQuantity,
      total:
        cartData.total - (product.price - product.discount) * decreaseQuantity,
    })

    toast.success('Produto removido do carrinho!')
  }

  const finishOrder = async (userId: number) => {
    try {
      await createOrder({
        userId,
        productIds: orderProducts.map((orderP) => ({
          id: orderP.id,
          quantity: orderP.quantity,
        })),
      })

      setCartData(INITIAL_CART_STATE)
      setOrderProducts([])

      toast.success('Compra finalizada!')
    } catch (error) {
      toast.error('Error ao finalizar as compras!')
    }
  }

  return (
    <OrderContext.Provider
      value={{
        orderProducts,
        cartData,
        addProduct,
        decreaseProduct,
        removeOrderProduct,
        finishOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export default Order
