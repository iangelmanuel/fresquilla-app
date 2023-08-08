import { useState, useEffect, createContext } from 'react'
import axiosClient from '../config/axiosClient'

interface FreshProviderProps {
  children: JSX.Element | JSX.Element[]
}

export interface FreshContextValue {
  auth: Auth | null | undefined
  setAuth: (auth: Auth) => void
  loading: boolean
  handleLogout: () => void
}

interface Auth {
  _id: string
  name: string
  email: string
  token: string
}

const authValues: Auth = {
  _id: '',
  name: '',
  email: '',
  token: ''
}

export const AuthContext = createContext<FreshContextValue>({} as FreshContextValue)

export default function AuthProvider ({ children }: FreshProviderProps): JSX.Element {
  const [auth, setAuth] = useState<Auth | null>()
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
    setAuth(authValues)
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
