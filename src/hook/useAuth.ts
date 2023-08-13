import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import type { AuthContextValue } from '../interfaces/type'

export default function useAuth (): AuthContextValue {
  return useContext(AuthContext)
}
