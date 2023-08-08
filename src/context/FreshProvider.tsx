import { createContext, useState, useEffect } from 'react'
import { type FieldValues } from 'react-hook-form'
import { toast } from 'react-toastify'
import axiosClient from '../config/axiosClient'

interface FreshProviderProps {
  children: JSX.Element | JSX.Element[]
}

export interface DataContact {
  _id: string
  name: string
  email: string
  phone: string
  message: string
}

export interface DataClaim {
  _id: string
  problem: string
  name: string
  email: string
  phone: string
  message: string
}

export interface FreshContextValue {
  isOpen: boolean
  isTransparent: boolean
  isClaimsForm: boolean
  alert: {
    error: boolean
    msg: string
  }
  contacts: DataContact[]
  claims: DataClaim[]
  modalContact: boolean
  modalClaim: boolean
  handleClaimsForm: () => void
  handleHamburgerNavBar: () => void
  setAlert: (alert: { error: boolean, msg: string }) => void
  sendContactData: (contactData: DataContact) => Promise<void>
  sendClaimsData: (claimsData: DataClaim) => Promise<void>
  getContactsData: () => Promise<void>
  getClaimsData: () => Promise<void>
  deleteContactData: (id: string) => Promise<void>
  deleteClaimData: (id: string) => Promise<void>
  handleModalContact: () => void
  handleModalClaim: () => void
}

interface Alert {
  error: boolean
  msg: string
}

const initialValues: FreshContextValue = {
  isOpen: false,
  isTransparent: true,
  isClaimsForm: false,
  alert: {
    error: false,
    msg: ''
  },
  contacts: [],
  claims: [],
  modalContact: false,
  modalClaim: false,
  handleClaimsForm: () => {},
  handleHamburgerNavBar: () => {},
  setAlert: () => {},
  sendContactData: async () => { await Promise.resolve() },
  sendClaimsData: async () => { await Promise.resolve() },
  getContactsData: async () => { await Promise.resolve() },
  getClaimsData: async () => { await Promise.resolve() },
  deleteContactData: async () => { await Promise.resolve() },
  deleteClaimData: async () => { await Promise.resolve() },
  handleModalContact: () => {},
  handleModalClaim: () => {}
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
  const [contacts, setContact] = useState<DataContact[]>([])
  const [claims, setClaims] = useState<DataClaim[]>([])
  const [modalContact, setModalContact] = useState<boolean>(false)
  const [modalClaim, setModalClaim] = useState<boolean>(false)

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
  const handleModalContact = (): void => { setModalContact(!modalContact) }
  const handleModalClaim = (): void => { setModalClaim(!modalClaim) }

  /// ///////////////////////////// ///
  /// /////// HTTP request /////// ///
  /// /////////////////////////// ///

  // TODO: implementar los mensajes

  const sendContactData = async (contactData: FieldValues): Promise<void> => {
    try {
      const { data } = await axiosClient.post('/contact', contactData)
      setContact([...contacts, data])
      toast.success('La información se envió correctamente', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      })
    } catch (error) {
      console.log(error)
    }
  }

  const sendClaimsData = async (claimData: FieldValues): Promise<void> => {
    try {
      const { data } = await axiosClient.post('/claim', claimData)
      setClaims([...claims, data])
      toast.success('La información se envió correctamente', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      })
    } catch (error) {
      console.log(error)
    }
  }

  const getContactsData = async (): Promise<void> => {
    const token = localStorage.getItem('token') as string
    if (token === null && token === '') return

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        Application: 'application/json'
      }
    }

    try {
      const { data } = await axiosClient.get<DataContact[]>('/contact', config)
      setContact(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getClaimsData = async (): Promise<void> => {
    const token = localStorage.getItem('token') as string
    if (token === null && token === '') return

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        Application: 'application/json'
      }
    }

    try {
      const { data } = await axiosClient.get('/claim', config)
      setClaims(data)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteContactData = async (id: string): Promise<void> => {
    const token = localStorage.getItem('token') as string
    if (token === null && token === '') return

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        Application: 'application/json'
      }
    }

    try {
      const { data } = await axiosClient.delete(`/contact/${id}`, config)
      const newData = contacts.filter(contact => contact._id !== data._id)
      setContact(newData)
    } catch (error) {
      console.log(error)
    } finally {
      handleModalContact()
    }
  }

  const deleteClaimData = async (id: string): Promise<void> => {
    const token = localStorage.getItem('token') as string
    if (token === null && token === '') return

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        Application: 'application/json'
      }
    }

    try {
      const { data } = await axiosClient.delete(`/claim/${id}`, config)
      const newData = contacts.filter(contact => contact._id !== data._id)
      setContact(newData)
    } catch (error) {
      console.log(error)
    } finally {
      handleModalClaim()
    }
  }

  return (
    <FreshContext.Provider
      value={{
        alert,
        isTransparent,
        isOpen,
        isClaimsForm,
        contacts,
        claims,
        modalContact,
        modalClaim,
        setAlert,
        handleClaimsForm,
        handleHamburgerNavBar,
        sendContactData,
        sendClaimsData,
        getContactsData,
        getClaimsData,
        deleteContactData,
        deleteClaimData,
        handleModalContact,
        handleModalClaim
      }}
    >{children}</FreshContext.Provider>
  )
}
