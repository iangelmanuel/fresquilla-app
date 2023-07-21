import { motion } from 'framer-motion'

interface MiddleContentProps {
  item: {
    title: string
    description: string
    content: () => JSX.Element
  }
}

export default function MiddleContent ({ item }: MiddleContentProps): JSX.Element {
  const animationTitle = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7 } }
  }
  const animationDescription = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  }
  const animationSvg = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  }

  return (
    <div className="text-center px-10">
      <motion.div
        variants={animationSvg}
        initial="hidden"
        whileInView="visible"
        className="w-full flex justify-center mb-3"
      >
        <item.content />
      </motion.div>
      <motion.h4
        variants={animationTitle}
        initial="hidden"
        whileInView="visible"
        className="text-xl font-bold mb-3"
        >
          {item.title}
        </motion.h4>

      <motion.p
        variants={animationDescription}
        initial="hidden"
        whileInView="visible"
        className="text-sm"
      >
        {item.description}
      </motion.p>
    </div>
  )
}
