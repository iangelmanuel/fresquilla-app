import { useContext } from 'react'
import { FreshContext, type FreshContextValue } from '../context/FreshProvider'

export default function useFresh (): FreshContextValue {
  return useContext(FreshContext)
}
