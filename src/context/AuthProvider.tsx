import { useState, useEffect, createContext } from 'react'
import axiosClient from '../config/axiosClient'
import type { AuthContextValue, Auth } from '../interfaces/type'

interface FreshProviderProps {
  children: JSX.Element | JSX.Element[]
}

export const AuthContext = createContext<AuthContextValue>({} as AuthContextValue)
export default function AuthProvider ({ children }: FreshProviderProps): JSX.Element {
  const [auth, setAuth] = useState<Auth>({} as Auth)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const authAdmin = async (): Promise<void> => {
      const token = localStorage.getItem('token') as string

      if (token === null && token === '') {
        setLoading(false)
        return
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          Application: 'application/json'
        }
      }

      try {
        const { data } = await axiosClient('/admin', config)
        setAuth(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    authAdmin()
  }, [])

  const handleLogout = (): void => {
    localStorage.removeItem('token')
    setAuth({} as Auth)
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        loading,
        handleLogout
      }}>
      {children}
    </AuthContext.Provider>
  )
}
