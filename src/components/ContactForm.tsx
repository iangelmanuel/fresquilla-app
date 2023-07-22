import { motion } from 'framer-motion'

export default function Form (): JSX.Element {
  const initial = {
    opacity: 0,
    y: 80
  }

  const animate = {
    opacity: 1,
    y: 0
  }

  const transition = {
    duration: 0.5,
    delay: 0.3
  }

  return (
    <motion.form
      className="bg-zinc-50 shadow-lg rounded-lg px-8 py-5 pb-8 mb-4"
    >
      <motion.div
        initial={initial}
        animate={animate}
        transition={transition}
        className="mb-4"
      >
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">Nombre</label>
        <input
          id="name"
          type="text"
          placeholder="Nombre"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </motion.div>
      <motion.div
        initial={initial}
        animate={animate}
        transition={transition}
        className="mb-4"
      >
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">Correo</label>
        <input
          id="email"
          type="email"
          placeholder="Correo"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </motion.div>
      <motion.div
        initial={initial}
        animate={animate}
        transition={transition}
        className="mb-4"
      >
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="message">Mensaje</label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          id="message"
          placeholder="Mensaje"
        />
      </motion.div>
      <motion.div className="md:flex md:items-center md:justify-end">
        <input
          type="button"
          value="Enviar"
          className="bg-[#FF0D48] hover:bg-[#e20048] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full md:w-auto"
        />
      </motion.div>
    </motion.form>
  )
}
