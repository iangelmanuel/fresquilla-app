import { createContext, useState, useEffect } from 'react'
import { type FieldValues } from 'react-hook-form'
import { toast } from 'react-toastify'
import axiosClient from '../config/axiosClient'
import type { FreshContextValue, Alert, DataBlogs, DataClaims, DataContacts } from '../interfaces/type'

interface FreshProviderProps {
  children: JSX.Element | JSX.Element[]
}

export const FreshContext = createContext({} as FreshContextValue)
export default function FreshProvider ({ children }: FreshProviderProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isTransparent, setIsTransparent] = useState<boolean>(true)
  const [isClaimsForm, setIsClaimsForm] = useState<boolean>(false)
  const [alert, setAlert] = useState<Alert>({} as Alert)
  const [contacts, setContacts] = useState<DataContacts[]>([])
  const [claims, setClaims] = useState<DataClaims[]>([])
  const [blogs, setBlogs] = useState<DataBlogs[]>([])

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
      setContacts([...contacts, data])
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
      const { data } = await axiosClient.get<DataContacts[]>('/contact', config)
      setContacts(data)
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
      const { data } = await axiosClient.get<DataClaims[]>('/claim', config)
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
      const newData = contacts.filter(contact => contact._id !== data.contactDeleted._id)
      setContacts(newData)
    } catch (error) {
      console.log(error)
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
      const newData = claims.filter(claim => claim._id !== data.claimDeleted._id)
      setClaims(newData)
    } catch (error) {
      console.log(error)
    }
  }

  const sendBlogData = async (blogData: FieldValues): Promise<void> => {
    const token = localStorage.getItem('token') as string
    if (token === null && token === '') return

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        Application: 'application/json'
      }
    }

    try {
      const { data } = await axiosClient.post('/blog/post-info', blogData, config)
      setBlogs([...blogs, data])
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

  const getBlogsData = async (): Promise<void> => {
    try {
      const { data } = await axiosClient.get<DataBlogs[]>('/blog/post-info')
      setBlogs(data)
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
        contacts,
        claims,
        setAlert,
        blogs,
        handleClaimsForm,
        handleHamburgerNavBar,
        sendContactData,
        sendClaimsData,
        getContactsData,
        getClaimsData,
        deleteContactData,
        deleteClaimData,
        sendBlogData,
        getBlogsData
      }}
    >{children}</FreshContext.Provider>
  )
}
