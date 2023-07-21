import { motion } from 'framer-motion'

import Lottie from 'lottie-react'
import animation from '../../public/animations/strawberrya.json'

import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'

export default function Contact (): JSX.Element {
  return (
    <>
      <motion.article
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ y: '100%', transition: { duration: 0.5 } }}
      >
        <header className="mb-20">
          <Hero
            title="¿Tienes dudas o deseas comunicarte con nosotros?"
            color="¡Contactanos!"
            desc="Por este medio podrás contactarnos y te responderemos lo mas pronto posible con un correo electronico"
            width="30"
          />
        </header>
        <main className="w-full flex gap-4 justify-center items-center mb-20">
          <section className="w-2/6">
            <Lottie
              animationData={animation}
              className="w-9/12"
            />
          </section>
          <section className="w-2/6">
            <ContactForm />
          </section>
        </main>
      </motion.article>
    </>
  )
}
