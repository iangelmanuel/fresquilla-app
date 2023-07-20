import { motion } from 'framer-motion'

export default function Hero (): JSX.Element {
  return (
    <div className="relative overflow-hidden bg-cover bg-no-repeat" style={
      {
        backgroundPosition: '50%',
        backgroundImage: "url('../../public/img/background.jpg')",
        height: '95vh',
        width: '100%'
      }
    }>
      <div
        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center text-white/80 md:px-12">
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-2 mb-3 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              Bienvenidos a <span className="text-[#FF0D48]">Fresquilla</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-xl"
            >
              ¡Ven y prueba nuestro producto!
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  )
}
