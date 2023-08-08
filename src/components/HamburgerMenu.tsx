import { motion } from 'framer-motion'
import useFresh from '../hook/useFresh'
import { NAVIGATION, type NavUrl } from '../data/navigationItems'
import { ClosedNavBar } from '../svg/SvgIcons'
import HamburgerNavItems from './HamburgerNavItems'

const menuAnimation = {
  initial: { x: 500, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1 } },
  exit: { x: 500, opacity: 0, transition: { duration: 1 } }
}

export default function HamburgerMenu (): JSX.Element {
  const { handleHamburgerNavBar } = useFresh()
  return (
    <motion.article
      variants={menuAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      key="openedNavBar"
      className="flex flex-col justify-between md:justify-normal fixed z-10 top-0 right-0 w-3/4 h-full bg-white shadow-2xl"
    >
      <header className="flex justify-between mt-2 mb-10 mx-5">
        <div className="flex gap-2 items-start">
          <img
            src="public/img/logo.png"
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
          {NAVIGATION.map((item: NavUrl) => (
            <HamburgerNavItems
              key={item.path}
              item={item}
            />
          ))}
        </ul>
      </main>
      <footer className="flex justify-center md:mt-20 mx-5">
        <p className="text-sm">Todos los derechos reservados Fresquilla { new Date().getFullYear() }</p>
      </footer>
    </motion.article>
  )
}
