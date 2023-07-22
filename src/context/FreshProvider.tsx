import { createContext, useState } from 'react'

interface FreshProviderProps {
  children: JSX.Element | JSX.Element[]
}

export interface FreshContextValue {
  isOpen: boolean
  handleHamburgerNavBar: () => void
}

const initialValues: FreshContextValue = {
  isOpen: false,
  handleHamburgerNavBar: () => {}
}

export const FreshContext = createContext(initialValues)

export default function FreshProvider ({ children }: FreshProviderProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleHamburgerNavBar = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <FreshContext.Provider
      value={{
        isOpen,
        handleHamburgerNavBar
      }}
    >{children}</FreshContext.Provider>
  )
}
