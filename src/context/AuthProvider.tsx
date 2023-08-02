import { useState, useEffect, createContext } from 'react'
import axiosClient from '../config/axiosClient'

interface FreshProviderProps {
  children: JSX.Element | JSX.Element[]
}

export interface FreshContextValue {
  auth: Auth
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

const initialValues: FreshContextValue = {
  auth: authValues,
  setAuth: () => {},
  loading: true,
  handleLogout: () => {}
}

export const AuthContext = createContext(initialValues)

export default function AuthProvider ({ children }: FreshProviderProps): JSX.Element {
  const [auth, setAuth] = useState<Auth>(authValues)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const authAdmin = async (): Promise<void> => {
      setLoading(true)
      const token = localStorage.getItem('token') as string
      if (token === null && token === '') {
        setLoading(false)
        return
      }

      const config = {
        headers: {
          Autorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
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
