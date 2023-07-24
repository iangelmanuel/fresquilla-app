import { createContext, useState, useEffect } from 'react'

interface FreshProviderProps {
  children: JSX.Element | JSX.Element[]
}

export interface FreshContextValue {
  isOpen: boolean
  handleHamburgerNavBar: () => void
  isTransparent: boolean
}

const initialValues: FreshContextValue = {
  isOpen: false,
  handleHamburgerNavBar: () => {},
  isTransparent: true
}

export const FreshContext = createContext(initialValues)

export default function FreshProvider ({ children }: FreshProviderProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isTransparent, setIsTransparent] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollY = window.scrollY
      const heroHeight = 50

      if (scrollY < heroHeight) {
        setIsTransparent(true)
      } else {
        setIsTransparent(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleHamburgerNavBar = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <FreshContext.Provider
      value={{
        isOpen,
        handleHamburgerNavBar,
        isTransparent
      }}
    >{children}</FreshContext.Provider>
  )
}
