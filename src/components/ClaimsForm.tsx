import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import useFresh from '../hook/useFresh'
import Alert from './Alert'
import { type DataClaim } from '../context/FreshProvider'

interface ProblemCase {
  id: number
  text: string
}

const PROBLEMCASES: ProblemCase[] = [
  {
    id: 1,
    text: 'Problemas con el producto'
  },
  {
    id: 2,
    text: 'Problemas con el envio'
  },
  {
    id: 3,
    text: 'Recomendaciones'
  },
  {
    id: 4,
    text: 'Otro'
  }
]

export default function ClaimsForm (): JSX.Element {
  const { register, handleSubmit, reset } = useForm()
  const { alert, setAlert, sendClaimsData } = useFresh()

  const formData = async (data: DataClaim): Promise<void> => {
    const { problem, name, email, phone, message } = data
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

    if ([problem, name, email, phone, message].includes('')) {
      setAlert({ error: true, msg: 'Todos los campos son obligatorios' })
      return
    }

    if (!validEmail.test(data.email)) {
      setAlert({ error: true, msg: 'El correo no es válido' })
      return
    }

    if (data.phone.length < 10 || data.phone.length > 13) {
      setAlert({ error: true, msg: 'El télefono debe contener al menos 10 caracteres' })
      return
    }

    setAlert({ error: false, msg: '' })
    await sendClaimsData(data)
    reset()
  }

  return (
    <form
      noValidate
      onSubmit={ handleSubmit(data => { formData(data as DataClaim) })}
      className="bg-zinc-50 shadow-lg rounded-lg px-8 py-5 pb-8 mb-4"
    >
      {alert.error && <Alert />}
      <motion.h3
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-xl font-bold mb-5"
      >Quejas y Reclamos</motion.h3>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="problem">¿De qué tipo es tu inconveniente?</label>
        <select
          id="problem"
          placeholder="Ej. Ricardo"
          {...register('problem')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Seleccione</option>
          {PROBLEMCASES.map(problem => (
            <option
              key={problem.id}
              value={problem.text}
            >{problem.text}</option>
          ))}
        </select>
      </motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">Nombre</label>
        <input
          id="text"
          type="name"
          placeholder="Ej. Maria Alejandra"
          {...register('name')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">Correo</label>
        <input
          id="email"
          type="email"
          placeholder="Ej. correo@correo.com"
          {...register('email')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="phone">Télefono</label>
        <input
          id="phone"
          type="phone"
          placeholder="Ej. +57 123 456 7890"
          {...register('phone')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="message">Descripción del problema</label>
        <textarea
          id="message"
          placeholder="Ej. Hola, tuve un problema con el envio..."
          {...register('message')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
        />
      </motion.div>
      <motion.div className="md:flex md:items-center md:justify-end">
        <input
          type="submit"
          value="Enviar"
          className="bg-[#FF0D48] hover:bg-[#e20048] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full md:w-auto cursor-pointer"
        />
      </motion.div>
    </form>
  )
}
