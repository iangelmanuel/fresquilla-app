import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { InstagramIcon } from '../svg/SvgIcons'
import { NAVIGATION } from '../data/navigationItems'

export default function Footer (): JSX.Element {
  return (
    <>
      <motion.footer
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row gap-14 lg:gap-20 lg:justify-center lg:items-start bg-[#333] p-5 relative bottom-0 left-0">

        <section className="mt-5">
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl text-center lg:text-start text-white font-bold">Contacto</h3>
            <p className="text-base text-center lg:text-start text-white font-bold">Telefono: <span className="text-base font-normal">+57 XXX XXXX XXX</span></p>
            <p className="text-base text-center lg:text-start text-white font-bold">Correo: <span className="text-base font-normal">correo@correo.com</span></p>
            <p className="text-base text-center lg:text-start text-white font-bold">Dirección: <span className="text-base font-normal">Calle 42 #42 - 42</span></p>
          </div>
        </section>

        <section className="flex flex-col gap-5 mt-5">
          <h3 className="text-white text-center lg:text-start text-2xl font-bold">Navegación</h3>
          <div className="flex flex-col gap-2">
            {NAVIGATION.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className="text-white text-center text-base hover:text-sky-600 hover:underline"
              >{item.name}</Link>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-5 mt-5">
          <h3 className="text-white text-center lg:text-start text-2xl font-bold">Redes Sociales</h3>
          <div className="flex justify-center lg:justify-start gap-5">
            <a
              href="https://www.instagram.com/fresquilla_bq/"
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 items-center text-base text-white font-bold"
              >
              <InstagramIcon />
              <p>@Fresquilla</p>
            </a>
          </div>
        </section>

        <section className="mt-5">
          <div className="flex flex-col gap-5">
            <h3 className="text-center lg:text-start text-2xl text-white font-bold">Horarios</h3>
            <p className="text-center lg:text-start text-base text-white font-bold">Lunes a Viernes: <span className="text-base font-normal">8:00 am - 6:00 pm</span></p>
            <p className="text-center lg:text-start text-base text-white font-bold">Sabados: <span className="text-base font-normal">8:00 am - 2:00 pm</span></p>
            <p className="text-center lg:text-start text-base text-white font-bold">Domingos: <span className="text-base font-normal">Cerrado</span></p>
          </div>
        </section>

        <section className="flex justify-center lg:justify-end items-center mb-10 lg:mb-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d149070.50750552!2d-74.77666345243811!3d10.942456420315807!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1690348269804!5m2!1ses!2sco"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-80 h-60"
          ></iframe>
        </section>
      </motion.footer>

      <footer
        className="flex flex-col lg:flex-row gap-14 lg:gap-20 lg:justify-center lg:items-start bg-[#FF0D48] p-2 relative bottom-0 left-0">
        <p className="text-xl text-center text-white font-bold ">Fresquilla - Todos los derechos reservados {new Date().getFullYear()} &copy;</p>
      </footer>
    </>
  )
}
