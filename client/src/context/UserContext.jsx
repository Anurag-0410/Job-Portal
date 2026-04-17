import { createContext, useState, useContext } from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [savedJobs, setSavedJobs] = useState([])

  const login = (email, password) => {
    // Demo admin credentials
    if (email === 'admin@jobportal.com' && password === 'admin123') {
      setUser({ email, name: 'Admin', role: 'admin' })
      return true
    }
    // Regular user login
    if (email && password) {
      setUser({ email, name: 'Demo User', role: 'user' })
      return true
    }
    return false
  }

  const register = (name, email, password) => {
    if (name && email && password) {
      setUser({ email, name, role: 'user' })
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    setSavedJobs([])
  }

  const toggleSaveJob = (jobId) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter(id => id !== jobId))
    } else {
      setSavedJobs([...savedJobs, jobId])
    }
  }

  const isJobSaved = (jobId) => savedJobs.includes(jobId)

  return (
    <UserContext.Provider value={{ user, login, register, logout, savedJobs, toggleSaveJob, isJobSaved }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)