import { motion } from 'framer-motion'
import Atropos from 'atropos/react'
import { InstagramIcon } from '../svg/SvgIcons'

export default function AtroposCard (): JSX.Element {
  return (
    <Atropos
      shadow={false}
    >
      <article className="md:flex my-5">
        <section className="fixed top-0 left-0">
          <img
            src="public/img/card2.png"
            alt="card"
            className="w-full rounded-lg"
          />
        </section>
        <div className="z-10 flex flex-col items-center">
          <section className="w-full basis-auto md:w-2/12">
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src="/img/logoV2.JPG"
              alt="logoV2"
              className="hidden md:block mb-6 shadow-lg"
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
                <span className="text-white font-bold">fresquilla_bq</span>
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
  )
}
