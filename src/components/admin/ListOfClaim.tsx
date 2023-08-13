import { useState } from 'react'
import { motion } from 'framer-motion'
import DeleteClaimModal from './DeleteClaimModal'
import { formatedDate } from '../../helpers/formatedDate'

interface DataClaim {
  claim: {
    _id: string
    problem: string
    name: string
    email: string
    phone: string
    message: string
    createdAt: string
  }
  index: number
}

const articleVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: ({ delay }: { delay: number }) => ({
    opacity: 1,
    transition: {
      delay
    }
  }),
  exit: {
    opacity: 0
  }
}

export default function ListOfClaim ({ claim, index }: DataClaim): JSX.Element {
  const { _id, problem, name, email, phone, message, createdAt } = claim
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleModalToggle = (): void => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <motion.section
        variants={articleVariants}
        custom={{ delay: (index + 1) * 0.1 }}
        initial="hidden"
        animate="visible"
        exit="exit"
        layoutId={_id}
        className="flex flex-col md:flex-row lg:mx-40 bg-[#FF0D48] shadow-lg rounded-lg p-5"
      >
        <div className="md:w-1/2">
          <p className="text-base text-center text-white md:text-start font-bold">Razon:{' '}<span className="font-normal">{problem}</span></p>
          <p className="text-base text-center text-white md:text-start font-bold mt-2">Nombre:{' '}<span className="font-normal">{name}</span></p>
          <p className="text-base text-center text-white md:text-start font-bold mt-2">Correo:{' '}<span className="font-normal">{email}</span></p>
          <p className="text-base text-center text-white md:text-start font-bold mt-2">Telefono:{' '}<span className="font-normal">{phone}</span></p>
          <p className="text-base text-center text-white md:text-start font-bold mt-2">Mensaje:{' '}<span className="font-normal">{message}</span></p>
          <p className="text-base text-center text-white md:text-start font-bold mt-2">Se envió:{' '}<span className="font-normal">{formatedDate(createdAt)}</span></p>
        </div>
        <div className="md:w-1/2 flex justify-end mt-5 md:mt-0">
          <motion.button
            whileTap={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            type="button"
            onClick={handleModalToggle}
            className="transition-colors hover:bg-[#C21116] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full h-10 md:w-auto"
          >✗</motion.button>
        </div>
      </motion.section>
      {
        isModalOpen && <DeleteClaimModal
          id={_id}
          isModalOpen={isModalOpen}
          handleModalToggle={handleModalToggle}
        />
      }
    </>
  )
}
