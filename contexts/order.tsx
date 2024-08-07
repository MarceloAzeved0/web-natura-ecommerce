import { createContext, useState } from 'react'

const UserContext = createContext({})

interface IUserContext {
  children: React.ReactNode
}

const User: React.FC<IUserContext> = ({ children }) => {
  const [user, setUser] = useState()

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default User
