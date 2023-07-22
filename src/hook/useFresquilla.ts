import { useContext } from 'react'
import { FreshContext, type FreshContextValue } from '../context/FreshProvider'

export default function useFresquilla (): FreshContextValue | undefined {
  return useContext(FreshContext)
}
