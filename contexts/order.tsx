import { createContext, useState } from 'react'

const OrderContext = createContext({})

interface IOrderContext {
  children: React.ReactNode
}

const Order: React.FC<IOrderContext> = ({ children }) => {
  const [user, setOrder] = useState()

  return (
    <OrderContext.Provider value={{ user, setOrder }}>
      {children}
    </OrderContext.Provider>
  )
}

export default Order
