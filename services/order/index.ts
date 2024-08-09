import API from '../base'
import { IOrder } from './interfaces'

export const createOrder = async (params: {
  userId: number
  productIds: {
    id: number
    quantity: number
  }[]
}): Promise<IOrder> => {
  try {
    const { data } = await API.post<IOrder>('/order', { ...params })

    return data
  } catch (error) {
    console.error('error ->>', error)
    throw new Error('')
  }
}
