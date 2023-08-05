import { motion } from 'framer-motion'
import useFresh from '../hook/useFresh'

export default function WhiteBar (): JSX.Element {
  const { isTransparent } = useFresh()
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={isTransparent ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white border-b border-zinc-100 shadow-2xl fixed top-0 left-0 -z-10 w-full py-7 md:py-6"
    />
  )
}
