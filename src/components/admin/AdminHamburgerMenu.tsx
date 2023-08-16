import { motion } from 'framer-motion'
import useFresh from '../../hook/useFresh'
import useAuth from '../../hook/useAuth'
import AdminHamburgerNavItems from './AdminHamburgerNavItems'
import { ADMINAV } from '../../data/adminNavigation'
import { ClosedNavBar } from '../../svg/SvgIcons'

const menuAnimation = {
  initial: { x: 500, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1 } },
  exit: { x: 500, opacity: 0, transition: { duration: 1 } }
}

export default function AdminHamburgerMenu (): JSX.Element {
  const { handleHamburgerNavBar } = useFresh()
  const { handleLogout } = useAuth()
  return (
    <motion.article
      variants={menuAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      key="openedNavBar"
      className="flex flex-col justify-between lg:justify-normal fixed z-10 top-0 right-0 w-3/4 h-full bg-white shadow-2xl"
    >
      <header className="flex justify-between mt-2 mb-10 mx-5">
        <div className="flex gap-2 items-start">
          <img
            src="/img/logo.PNG"
            alt="Logotipo"
            className="w-10 h-10"
          />
          <h2 className="text-xl text-[#FF0D48] font-extrabold underline">Fresquilla</h2>
        </div>
        <button
          type="button"
          onClick={handleHamburgerNavBar}
          className="focus:outline-none"
        >
          <ClosedNavBar />
        </button>
      </header>
      <main>
        <ul className="flex flex-col">
          {ADMINAV.map(item => (
            <AdminHamburgerNavItems
              key={item.path}
              item={item}
            />
          ))}
        </ul>
      </main>
      <footer className="flex gap-10 flex-col justify-center md:mt-20 mx-5">
        <div>
          <button
            onClick={handleLogout}
            className="text-white font-bold py-2 px-5 bg-[#FF0D48] rounded-lg shadow-xl"
          >Cerrar Sesión</button>
        </div>
        <div>
          <p className="text-sm">Todos los derechos reservados Fresquilla { new Date().getFullYear() }</p>
        </div>
      </footer>
    </motion.article>
  )
}
