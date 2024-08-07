import API from '../base'
import { IOrderProduct } from './interfaces'

export const createOrderProduct = async (params: {
  userId: number
}): Promise<IOrderProduct> => {
  try {
    const { data } = await API.post<IOrderProduct>('/order', { params })

    return data
  } catch (error) {
    console.error('error ->>', error)
    throw new Error('')
  }
}

export const patchOrderProduct = async (params: {
  id: number
  quantity: number
}): Promise<IOrderProduct> => {
  try {
    const { data } = await API.patch<IOrderProduct>('/order', { params })

    return data
  } catch (error) {
    console.error('error ->>', error)
    throw new Error('')
  }
}
