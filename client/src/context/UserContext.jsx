import { createContext, useState, useContext } from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = (email, password) => {
    // Simulate login - in real app, call API
    if (email && password) {
      setUser({ email, name: 'Demo User' })
      return true
    }
    return false
  }

  const register = (name, email, password) => {
    // Simulate register - in real app, call API
    if (name && email && password) {
      setUser({ email, name })
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)