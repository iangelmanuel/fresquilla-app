import { motion } from 'framer-motion'
import { animationDescriptionMC, animationSvgMC, animationTitleMC } from '../../framer-motion/animations'

interface MiddleContentProps {
  item: {
    title: string
    description: string
    content: () => JSX.Element
  }
}

export default function MiddleContent ({ item }: MiddleContentProps): JSX.Element {
  return (
    <div className="text-center px-10">
      <motion.div
        variants={animationSvgMC}
        initial="hidden"
        whileInView="visible"
        className="w-full flex justify-center mb-3"
      >
        <item.content />
      </motion.div>
      <motion.h4
        variants={animationTitleMC}
        initial="hidden"
        whileInView="visible"
        className="text-xl font-bold mb-3"
        >
          {item.title}
        </motion.h4>

      <motion.p
        variants={animationDescriptionMC}
        initial="hidden"
        whileInView="visible"
        className="text-sm"
      >
        {item.description}
      </motion.p>
    </div>
  )
}
