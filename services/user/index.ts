import API from '../base'
import { IUser } from './interfaces'

export const getOrCreateUser = async (params: {
  name: string
  email: string
}): Promise<IUser> => {
  try {
    const { data } = await API.post<IUser>('/user', params)

    return data
  } catch (error) {
    console.error('error ->>', error)
    throw new Error('')
  }
}
