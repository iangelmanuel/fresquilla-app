import { createContext, useState, useEffect } from 'react'
import { type FieldValues } from 'react-hook-form'
import axiosClient from '../config/axiosClient'

interface FreshProviderProps {
  children: JSX.Element | JSX.Element[]
}

export interface FreshContextValue {
  isOpen: boolean
  handleHamburgerNavBar: () => void
  isTransparent: boolean
  isClaimsForm: boolean
  handleClaimsForm: () => void
  alert: {
    error: boolean
    msg: string
  }
  setAlert: (alert: { error: boolean, msg: string }) => void
  sendContactData: (contactData: FieldValues) => Promise<void>
  sendClaimsData: (claimsData: FieldValues) => Promise<void>
}

interface Alert {
  error: boolean
  msg: string
}

const initialValues: FreshContextValue = {
  isOpen: false,
  handleHamburgerNavBar: () => {},
  isTransparent: true,
  isClaimsForm: false,
  handleClaimsForm: () => {},
  alert: {
    error: false,
    msg: ''
  },
  setAlert: () => {},
  sendContactData: async () => { await Promise.resolve() },
  sendClaimsData: async () => { await Promise.resolve() }
}

const initialAlert: Alert = {
  error: false,
  msg: ''
}

export const FreshContext = createContext(initialValues)

export default function FreshProvider ({ children }: FreshProviderProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isTransparent, setIsTransparent] = useState<boolean>(true)
  const [isClaimsForm, setIsClaimsForm] = useState<boolean>(false)
  const [alert, setAlert] = useState<Alert>(initialAlert)
  const [contacts, setContact] = useState<FieldValues[]>([])
  const [claims, setClaims] = useState<FieldValues[]>([])

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

  /// ///////////////////////////// ///
  /// /////// HTTP request /////// ///
  /// /////////////////////////// ///

  const sendContactData = async (contactData: FieldValues): Promise<void> => {
    try {
      const { data } = await axiosClient.post('/contact', contactData)
      setContact([...contacts, data])
    } catch (error) {
      console.log(error)
    }
  }

  const sendClaimsData = async (claimData: FieldValues): Promise<void> => {
    console.log(claimData)
    try {
      const { data } = await axiosClient.post('/claim', claimData)
      setClaims([...claims, data])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <FreshContext.Provider
      value={{
        alert,
        isTransparent,
        isOpen,
        isClaimsForm,
        setAlert,
        handleClaimsForm,
        handleHamburgerNavBar,
        sendContactData,
        sendClaimsData
      }}
    >{children}</FreshContext.Provider>
  )
}
