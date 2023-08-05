import { motion, AnimatePresence } from 'framer-motion'
import Atropos from 'atropos/react'
import useFresh from '../hook/useFresh'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import ClaimsForm from '../components/ClaimsForm'
import { InstagramIcon } from '../svg/SvgIcons'
import 'atropos/css'

const animationCard = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, delay: 0.7 } }
}

const formAnimation = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, delay: 0.7 } },
  exit: { y: 50, opacity: 0, transition: { duration: 0.5 } }
}

export default function Contact (): JSX.Element {
  const { isClaimsForm, handleClaimsForm } = useFresh()
  return (
      <motion.article
        variants={animationCard}
        initial="hidden"
        animate="visible"
      >
        <header className="mb-5">
          <Hero
            title="¿Tienes dudas o deseas comunicarte con nosotros?"
            color="¡Contactanos!"
            desc="Por este medio podrás contactarnos y te responderemos lo mas pronto posible con un correo electronico"
            width="50"
          />
        </header>
        <main className="md:w-full md:flex md:flex-col md:items-center my-10">
          <Atropos className="">
            <article className="bg-gray-300 md:flex md:px-32 rounded-lg shadow-lg px-8 py-5 pb-8 mb-10">
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
                      className="text-xl font-bold text-center"
                    >Información de Fresquilla:</motion.h3>
                  </div>
                  <div className="mb-3">
                    <motion.a
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      href="https://www.instagram.com/fresquilla_bq/"
                      className="flex gap-2 justify-center"
                    >
                      <InstagramIcon />
                      <span>fresquilla_bq</span>
                    </motion.a>
                  </div>
                  <div className="mb-3">
                    <motion.p
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-center text-gray-700 font-semibold"
                    >Telefono: <span className="font-normal text-gray-500">+57 324 419 2998</span></motion.p>
                    <motion.p
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-center text-gray-700 font-semibold"
                    >Correo: <span className="font-normal text-gray-500">Fresquillabq@gmail.com</span></motion.p>
                    <motion.p
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-center text-gray-700 font-semibold"
                    >Dirección: <span className="font-normal text-gray-500">Altamira - Miramar</span></motion.p>
                  </div>
                </section>
              </div>
            </article>
          </Atropos>

          <article
            className="w-full flex gap-5 md:gap-0 flex-col items-center md:block px-5 md:w-1/2">
            <input
              type="checkbox"
              id="flexSwitchCheckDefault"
              role="switch"
              onChange={handleClaimsForm}
              className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#FF0D48] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
            />
            <label
              htmlFor="flexSwitchCheckDefault"
              className="inline-block pl-[0.15rem] hover:cursor-pointer text-center mb-5"
            >{isClaimsForm ? '¿Tienes alguna queja o reclamo? Cambia el modo del Formulario' : '¿Quieres contactarnos con nosotros? Cambia el modo del Formulario'}</label>
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
