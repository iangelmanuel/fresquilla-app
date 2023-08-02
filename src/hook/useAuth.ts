import { useContext } from 'react'
import { AuthContext, type FreshContextValue } from '../context/AuthProvider'

export default function useAuth (): FreshContextValue {
  return useContext(AuthContext)
}
