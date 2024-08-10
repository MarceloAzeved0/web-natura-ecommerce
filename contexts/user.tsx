import { createContext, useEffect, useState } from 'react'
import { getOrCreateUser as getOrCreateUserAPI } from '@/services/user'
import { IUser, IUserParams } from '@/services/user/interfaces'
import { toast } from 'react-toastify'

export interface UserContextType {
  user: IUser
  setUser: (data: IUser) => void
  getOrCreateUser: (params: IUserParams) => Promise<void>
}

export const UserContext = createContext<UserContextType>({} as UserContextType)

interface IUserContext {
  children: React.ReactNode
}

const User: React.FC<IUserContext> = ({ children }) => {
  const [user, setUser] = useState<IUser>({} as IUser)

  useEffect(() => {
    const userStorage = localStorage.getItem('user')

    if (userStorage) {
      setUser(JSON.parse(userStorage))
    }
  }, [])

  const getOrCreateUser = async (params: IUserParams) => {
    try {
      const data = await getOrCreateUserAPI(params)

      localStorage.setItem('user', JSON.stringify(data))

      setUser(data)
    } catch (error) {
      toast.error('Error ao buscar ou criar usuário!')
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser, getOrCreateUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default User
