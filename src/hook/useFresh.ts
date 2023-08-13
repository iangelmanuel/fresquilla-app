import { useContext } from 'react'
import { FreshContext } from '../context/FreshProvider'
import type { FreshContextValue } from '../interfaces/type'

export default function useFresh (): FreshContextValue {
  return useContext(FreshContext)
}
