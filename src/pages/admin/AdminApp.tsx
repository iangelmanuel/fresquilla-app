import { motion } from 'framer-motion'

export default function AdminApp (): JSX.Element {
  return (
    <motion.article
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-5 justify-center mt-10"
    >
      <section>
        <img
          src="/img/logo.PNG"
          alt="Logo Fresquilla"
          className="w-48 h-48 mx-auto"
        />
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-3xl md:text-4xl lg:text-6xl font-extrabold"
        >Bienvenida <span className="text-[#FF0D48]">Maria Alejandra</span></motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="hidden lg:block text-center text-xl lg:text-2xl font-bold"
        >en la derecha las opciones para <span className="text-[#FF0D48]">Administrar</span></motion.p>

        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="block lg:hidden text-center text-xl lg:text-2xl font-bold"
        >Arriba a la derecha tienes el menu para <span className="text-[#FF0D48]">Administrar</span></motion.p>
      </section>
    </motion.article>
  )
}
