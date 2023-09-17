import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Content from '../components/home/Content'

export default function App (): JSX.Element {
  return (
    <motion.article
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ y: '100%' }}
    >
      <header className="mb-20">
        <Hero
          title="Bienvenido a"
          color="Fresquilla"
          desc="Somos una empresa dedicada a la venta de fresas de la mejor calidad"
          width="100"
        />
      </header>

      <main className="w-full">
        <Content />
      </main>
    </motion.article>
  )
}
