import { motion } from 'framer-motion'

interface MiddleContentProps {
  item: {
    title: string
    description: string
    content: () => JSX.Element
  }
}

const animationMC = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
}

export default function MiddleContent ({ item }: MiddleContentProps): JSX.Element {
  return (
    <div className="text-center px-10">
      <motion.div
        variants={animationMC}
        initial="hidden"
        whileInView="visible"
        className="w-full flex justify-center mb-3"
      >
        <item.content />
      </motion.div>
      <motion.h4
        variants={animationMC}
        initial="hidden"
        whileInView="visible"
        className="text-xl text-white font-bold mb-3"
      >
        {item.title}
      </motion.h4>
      <motion.p
        variants={animationMC}
        initial="hidden"
        whileInView="visible"
        className="text-sm text-zinc-50"
      >
        {item.description}
      </motion.p>
    </div>
  )
}
