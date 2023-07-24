import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import strawberryAnimation from '../../public/animations/futurepinkgirld.json'

export default function NoPost (): JSX.Element {
  return (
    <motion.section
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center mb-20"
    >
      <h3 className="text-center text-4xl font-extrabold">No existe ningun Post aún</h3>
      <div className="flex justify-center">
        <Lottie
          className="w-96 h-96"
          animationData={strawberryAnimation}
        />
      </div>
    </motion.section>
  )
}
