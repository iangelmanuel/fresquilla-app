import { useEffect } from 'react'
import useFresh from '../../hook/useFresh'
import { motion } from 'framer-motion'
import ListOfContact from '../../components/admin/ListOfContact'

export default function AdminContacts (): JSX.Element {
  const { contacts, getContactsData } = useFresh()
  useEffect(() => {
    getContactsData()
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl text-center font-bold mt-10">
          Blog de la página de{' '}
          <span className="text-[#FF0D48]">Fresquilla</span>
        </h2>
      </motion.header>
      <main className="w-full space-y-5 my-10">
        {contacts.map(contact => (
          <ListOfContact
            key={contact._id}
            contact={contact}
          />
        ))}
      </main>
    </>
  )
}
