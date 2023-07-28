import { motion } from 'framer-motion'

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

const animationCamp = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 1
  },
  transition: {
    duration: 0.5
  }
}

export default function ClaimsForm (): JSX.Element {
  return (
    <form
      className="bg-zinc-50 shadow-lg rounded-lg px-8 py-5 pb-8 mb-4"
    >
      <motion.h3
        initial={animationCamp.initial}
        animate={animationCamp.animate}
        transition={animationCamp.transition}
        className="text-center text-xl font-bold mb-5"
      >Quejas y Reclamos</motion.h3>
      <motion.div
        initial={animationCamp.initial}
        animate={animationCamp.animate}
        transition={animationCamp.transition}
        className="mb-4"
      >
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="case">¿De qué tipo es tu inconveniente?</label>
        <select
          id="case"
          placeholder="Ej. Ricardo"
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
        initial={animationCamp.initial}
        animate={animationCamp.animate}
        transition={animationCamp.transition}
        className="mb-4"
      >
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">Nombre</label>
        <input
          id="text"
          type="name"
          placeholder="Ej. Maria Alejandra"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </motion.div>
      <motion.div
        initial={animationCamp.initial}
        animate={animationCamp.animate}
        transition={animationCamp.transition}
        className="mb-4"
      >
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">Correo</label>
        <input
          id="email"
          type="email"
          placeholder="Ej. correo@correo.com"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </motion.div>
      <motion.div
        initial={animationCamp.initial}
        animate={animationCamp.animate}
        transition={animationCamp.transition}
        className="mb-4"
      >
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="message">Descripción del problema</label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          id="message"
          placeholder="Ej. Hola, tuve un problema con el envio..."
        />
      </motion.div>
      <motion.div className="md:flex md:items-center md:justify-end">
        <input
          type="button"
          value="Enviar"
          className="bg-[#FF0D48] hover:bg-[#e20048] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full md:w-auto"
        />
      </motion.div>
    </form>
  )
}
