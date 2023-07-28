import { motion } from 'framer-motion'
import useFresh from '../hook/useFresh'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import ClaimsForm from '../components/ClaimsForm'
import { InstagramIcon } from '../svg/SvgIcons'

const animationCard = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, delay: 0.7 } }
}

export default function Contact (): JSX.Element {
  const { isClaimsForm, handleClaimsForm } = useFresh()

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

          <section className="w-full flex gap-5 md:gap-0 flex-col items-center md:block px-5 md:w-1/2">
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
            >¿Tienes alguna queja o reclamo? Cambia el modo del Formulario</label>

            {isClaimsForm
              ? (
                  <ClaimsForm />
                )
              : (
                  <ContactForm />
                )}
          </section>
        </main>
      </motion.article>
    </>
  )
}
