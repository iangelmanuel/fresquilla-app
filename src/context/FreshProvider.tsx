import { createContext } from 'react'

interface FreshProviderProps {
  children: JSX.Element
}

export interface FreshContextValue {
  name?: string
  age?: number
}

export const FreshContext = createContext<FreshContextValue | undefined>(undefined)

export default function FreshProvider ({ children }: FreshProviderProps): JSX.Element {
  return (
    <FreshContext.Provider
      value={{

      }}
    >{children}</FreshContext.Provider>
  )
}
