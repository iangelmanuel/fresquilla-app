import { motion } from 'framer-motion'
import useFresh from '../../hook/useFresh'
import DeleteClaimModal from './DeleteClaimModal'

interface DataClaim {
  claim: {
    _id: string
    problem: string
    name: string
    email: string
    phone: string
    message: string
  }
}

export default function ListOfClaim ({ claim }: DataClaim): JSX.Element {
  const { _id, problem, name, email, phone, message } = claim
  const { modalClaim, handleModalClaim } = useFresh()
  return (
    <>
      <motion.article
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row lg:mx-40 bg-zinc-50 shadow-lg rounded-lg p-5"
      >
        <section className="md:w-1/2">
          <p className="text-base font-bold">Razon:{' '}<span className="font-normal">{problem}</span></p>
          <p className="text-base font-bold mt-2">Nombre:{' '}<span className="font-normal">{name}</span></p>
          <p className="text-base font-bold mt-2">Correo:{' '}<span className="font-normal">{email}</span></p>
          <p className="text-base font-bold mt-2">Telefono:{' '}<span className="font-normal">{phone}</span></p>
          <p className="text-base font-bold mt-2">Mensaje:{' '}<span className="font-normal">{message}</span></p>
        </section>
        <section className="md:w-1/2 flex justify-end mt-5 md:mt-0">
          <button
            type="button"
            onClick={handleModalClaim}
            className="bg-[#FF0D48] hover:bg-[#e20048] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full h-10 md:w-auto"
          >X</button>
        </section>
      </motion.article>
      {modalClaim && <DeleteClaimModal id={_id} />}
    </>
  )
}
