import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Content from '../components/home/Content'

export default function App (): JSX.Element {
  return (
    <motion.article
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ y: '100%', transition: { duration: 0.3 } }}
    >
      <header className="mb-20">
        <Hero
          title="Hola! Bienvenido a"
          color="Fresquilla"
          desc="Somos una empresa dedicada a la venta de productos de panaderia y pasteleria"
          width="95" />
      </header>

      <main className="w-full">
        <Content />
      </main>
    </motion.article>
  )
}
