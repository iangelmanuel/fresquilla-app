import Hero from '../components/home/Hero'
import Content from '../components/home/Content'
import { motion } from 'framer-motion'

export default function App (): JSX.Element {
  return (
    <motion.section
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ y: '100%', transition: { duration: 0.3 } }}
    >
      <article className="mb-20">
        <Hero />
      </article>
      <article className="justify-center">
        <Content />
      </article>
    </motion.section>
  )
}
