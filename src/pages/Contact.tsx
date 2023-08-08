import { motion, AnimatePresence } from 'framer-motion'
import Atropos from 'atropos/react'
import useFresh from '../hook/useFresh'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import ClaimsForm from '../components/ClaimsForm'
import SwitchForm from '../components/SwitchForm'
import { InstagramIcon } from '../svg/SvgIcons'
import 'atropos/css'

const formAnimation = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, delay: 0.7 } },
  exit: { y: 50, opacity: 0, transition: { duration: 0.5 } }
}

export default function Contact (): JSX.Element {
  const { isClaimsForm } = useFresh()
  return (
    <motion.article
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ y: '100%', transition: { duration: 0.5 } }}
    >
      <header className="mb-5">
        <Hero
          title="¿Tienes dudas o deseas comunicarte con nosotros?"
          color="¡Contactanos!"
          desc="Por este medio podrás contactarnos y te responderemos lo mas pronto posible con un correo electronico"
          width="40"
        />
      </header>
      <main className="md:w-full md:flex md:flex-col md:items-center my-10">
        <Atropos
          shadow={false}
        >
          <article className="bg-[#000000] md:flex md:px-32 rounded-xl shadow-lg px-8 py-5 pb-8 mb-10">
            <div className="md:flex md:justify-center md:items-center flex flex-col items-center">
              <section className="w-full basis-auto md:w-2/12">
                <motion.img
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  src="/img/logoV2.JPG"
                  alt="logoV2"
                  className="hidden md:block mb-6 rounded-lg shadow-lg"
                />
              </section>

              <section className="flex gap-2 flex-col">
                <div className="mb-3">
                  <motion.h3
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center text-xl text-white font-bold"
                  >Información de Fresquilla:</motion.h3>
                </div>
                <div className="mb-3">
                  <motion.a
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    href="https://www.instagram.com/fresquilla_bq/"
                    className="flex gap-2 justify-center items-center"
                  >
                    <InstagramIcon />
                    <span className="text-white">fresquilla_bq</span>
                  </motion.a>
                </div>
                <div className="mb-3">
                  <motion.p
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center text-white font-semibold"
                  >Telefono: <span className="font-normal">+57 324 419 2998</span></motion.p>
                  <motion.p
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center text-white font-semibold"
                  >Correo: <span className="font-normal">Fresquillabq@gmail.com</span></motion.p>
                  <motion.p
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center text-white font-semibold"
                  >Dirección: <span className="font-normal">Altamira - Miramar</span></motion.p>
                </div>
              </section>
            </div>
          </article>
        </Atropos>

        <article
          className="w-full flex gap-5 md:gap-0 flex-col items-center md:block px-5 md:w-1/2">
          <SwitchForm />
          <p className="inline-block pl-[0.15rem] hover:cursor-pointer text-center mb-5">
            {isClaimsForm
              ? '¿Tienes alguna queja o reclamo? Cambia el modo del Formulario'
              : '¿Quieres contactarnos con nosotros? Cambia el modo del Formulario'
            }
          </p>
          <AnimatePresence>
            {isClaimsForm
              ? (
                  <motion.div
                    variants={formAnimation}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    key="claimsForm"
                  >
                    <ClaimsForm />
                  </motion.div>
                )
              : (
                  <motion.div
                    variants={formAnimation}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    key="contactForm"
                  >
                    <ContactForm />
                  </motion.div>
                )}
          </AnimatePresence>
        </article>
      </main>
    </motion.article>
  )
}
