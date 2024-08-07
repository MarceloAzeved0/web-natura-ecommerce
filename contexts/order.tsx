import { IOrder } from '@/services/order/interfaces'
import { createContext, useState } from 'react'

export interface UserContextType {
  order: IOrder
  setOrder: (data: IOrder) => void
}

const OrderContext = createContext<UserContextType>({} as UserContextType)

interface OrderContextProps {
  children: React.ReactNode
}

const Order: React.FC<OrderContextProps> = ({ children }) => {
  const [order, setOrder] = useState<IOrder>({} as IOrder)

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  )
}

export default Order
