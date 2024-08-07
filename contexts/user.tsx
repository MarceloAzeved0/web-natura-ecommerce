import { createContext, useState } from 'react'
import { IUser } from '@/services/user/interfaces'

const UserContext = createContext({})

interface IUserContext {
  children: React.ReactNode
}

const User: React.FC<IUserContext> = ({ children }) => {
  const [user, setUser] = useState<IUser>({} as IUser)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default User
