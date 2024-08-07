import API from '../base'
import { IGetProductsResponse } from './interfaces'

export const getProducts = async ({
  limit = 3,
  offset = 0,
  name = '',
  description = '',
}): Promise<IGetProductsResponse> => {
  try {
    const params: { [key: string]: unknown } = {}

    params.limit = limit
    params.offset = offset

    if (name) {
      params.name = name
    }

    if (description) {
      params.description = description
    }

    const { data } = await API.get<IGetProductsResponse>('/product', { params })

    return data
  } catch (error) {
    console.error('error ->>', error)
    throw new Error('')
  }
}
