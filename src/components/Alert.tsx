import useFresh from '../hook/useFresh'
import { motion } from 'framer-motion'

export default function Alert (): JSX.Element {
  const { alert, setAlert } = useFresh()
  const { error, msg } = alert

  setTimeout(() => { setAlert({ error: false, msg: '' }) }, 4000)
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`${error ? 'border-l-8 border-red-500 bg-red-300' : 'border-l-8 border-green-600 bg-green-200'} text-center p-3 rounded text-zinc-700 shadow-lg font-bold text-sm my-3`}>
      {msg}
    </motion.div>
  )
}
