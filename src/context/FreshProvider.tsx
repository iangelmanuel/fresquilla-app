import { createContext, useState, useEffect } from 'react'

interface FreshProviderProps {
  children: JSX.Element | JSX.Element[]
}

export interface FreshContextValue {
  isOpen: boolean
  handleHamburgerNavBar: () => void
  isTransparent: boolean
  isClaimsForm: boolean
  handleClaimsForm: () => void
}

const initialValues: FreshContextValue = {
  isOpen: false,
  handleHamburgerNavBar: () => {},
  isTransparent: true,
  isClaimsForm: false,
  handleClaimsForm: () => {}
}

export const FreshContext = createContext(initialValues)

export default function FreshProvider ({ children }: FreshProviderProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isTransparent, setIsTransparent] = useState<boolean>(true)
  const [isClaimsForm, setIsClaimsForm] = useState<boolean>(false)

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

    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [])

  const handleHamburgerNavBar = (): void => { setIsOpen(!isOpen) }
  const handleClaimsForm = (): void => { setIsClaimsForm(!isClaimsForm) }

  return (
    <FreshContext.Provider
      value={{
        isOpen,
        handleHamburgerNavBar,
        isTransparent,
        isClaimsForm,
        handleClaimsForm
      }}
    >{children}</FreshContext.Provider>
  )
}
