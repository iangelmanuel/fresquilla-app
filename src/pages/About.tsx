import Hero from '../components/Hero'
import { motion } from 'framer-motion'

export default function About (): JSX.Element {
  return (
    <motion.article
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ y: '100%', transition: { duration: 0.3 } }}
    >
      <header className="mb-20">
        <Hero
          title="Acerca de"
          color="Fresquilla"
          desc="En este apartado vas a encontrar información sobre nosotros"
          width="30"
        />
      </header>
    </motion.article>
  )
}
