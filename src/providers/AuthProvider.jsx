import { createContext, useContext, useMemo, useState } from 'react'

const AuthContext = createContext({ user: null, login: () => {}, logout: () => {} })

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = (email) => {
    // TODO: integrate with backend auth
    setUser({ id: 'u1', name: 'Member', email, role: 'member' })
  }
  const logout = () => setUser(null)

  const value = useMemo(() => ({ user, login, logout }), [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
