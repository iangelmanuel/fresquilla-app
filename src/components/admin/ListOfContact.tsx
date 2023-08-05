import { motion } from 'framer-motion'
import useFresh from '../../hook/useFresh'

interface DataContact {
  contact: {
    _id: string
    name: string
    email: string
    phone: string
    message: string
  }
}

export default function ListOfContact ({ contact }: DataContact): JSX.Element {
  const { _id, name, email, phone, message } = contact
  const { deleteContactData } = useFresh()
  return (
    <motion.article
      initial={{ y: -50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row lg:mx-40 bg-zinc-50 shadow-lg rounded-lg p-5"
    >
      <section className="md:w-1/2">
        <p className="text-base font-bold">Nombre:{' '}<span className="font-normal">{name}</span></p>
        <p className="text-base font-bold mt-2">Correo:{' '}<span className="font-normal">{email}</span></p>
        <p className="text-base font-bold mt-2">Telefono:{' '}<span className="font-normal">{phone}</span></p>
        <p className="text-base font-bold mt-2">Mensaje:{' '}<span className="font-normal">{message}</span></p>
      </section>
      <section className="md:w-1/2 flex justify-end mt-5 md:mt-0">
        <button
          type="button"
          onClick={async () => { await deleteContactData(_id) }}
          className="bg-[#FF0D48] hover:bg-[#e20048] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full h-10 md:w-auto"
        >Eliminar</button>
      </section>
    </motion.article>
  )
}
