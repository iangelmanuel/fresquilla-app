import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import animationData from '../../../public/animations/strawberrya.json'
import useFresh from '../../hook/useFresh'
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
        {contacts.length > 0
          ? contacts.map(contact => (
            <ListOfContact
              key={contact._id}
              contact={contact}
            />
          ))
          : <motion.section
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl text-center font-bold mt-10">
              <p className="text-xl text-center font-bold mt-10">
                No tienes ninguna solicitud de <span className="text-[#FF0D48]">Reclamo</span> por el momento.
              </p>
              <Lottie
                className="w-1/6 mx-auto"
                animationData={animationData}
              />
            </motion.section>
        }
      </main>
    </>
  )
}
