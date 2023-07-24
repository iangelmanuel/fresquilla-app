import { motion } from 'framer-motion'

import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import { InstagramIcon } from '../svg/SvgIcons'

const animationCard = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, delay: 0.7 } }
}

export default function Contact (): JSX.Element {
  return (
    <>
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
            width="50"
          />
        </header>
        <main className="md:w-full md:flex my-10">

          <article className="md:flex md:px-32 md:w-1/2">
            <div className="md:flex md:justify-center md:items-center">
              <div className="flex flex-wrap">
                <section className="w-full shrink-0 grow-0 basis-auto md:w-2/12 lg:w-3/12">
                  <motion.img
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    src="../../../public/img/logoV2.JPG"
                    alt="logoV2"
                    className="hidden md:block mb-6 rounded-lg shadow-lg"
                  />
                </section>

                <section className="w-full shrink-0 grow-0 basis-auto text-center md:w-10/12 md:pl-6 md:text-left lg:w-9/12 mb-10 md:mb-0 bg-zinc-200 p-5 md:bg-transparent md:p-0">
                  <motion.h3
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mb-6 text-xl font-semibold"
                  >Información de Fresquilla</motion.h3>
                  <motion.ul
                    variants={animationCard}
                    initial="hidden"
                    whileInView="visible"
                    className="list-inside mb-6 flex justify-center space-x-4 md:justify-start"
                  >
                    <motion.a
                      variants={animationCard}
                      initial="hidden"
                      whileInView="visible"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.instagram.com/fresquilla_bq/"
                      className="w-5 h-5"
                    >
                      <InstagramIcon />
                    </motion.a>
                  </motion.ul>
                    <motion.p
                      variants={animationCard}
                      initial="hidden"
                      whileInView="visible"
                    >Barranquilla - Atlántico</motion.p>
                    <motion.p
                      variants={animationCard}
                      initial="hidden"
                      whileInView="visible"
                    >Tel: XXX XXXX XXX</motion.p>
                </section>
              </div>
            </div>
          </article>

          <section className="w-full px-5 md:w-1/2">
            <ContactForm />
          </section>

        </main>
      </motion.article>
    </>
  )
}
