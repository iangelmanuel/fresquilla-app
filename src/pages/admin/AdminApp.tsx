import { motion } from 'framer-motion'

export default function AdminApp (): JSX.Element {
  return (
    <motion.article
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-5 justify-center mt-10"
    >
      <img
        src="public/img/logo.png"
        alt="Logo Fresquilla"
        className="w-48 h-48 mx-auto"
      />
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center text-3xl md:text-4xl lg:text-6xl font-extrabold"
      >Bienvenido/a <span className="text-[#FF0D48]">(name)</span></motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="text-center text-xl lg:text-2xl font-bold"
      >en la derecha las opciones para <span className="text-[#FF0D48]">Administrar</span></motion.p>

    </motion.article>
  )
}
