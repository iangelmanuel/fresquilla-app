import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import useFresh from '../hook/useFresh'
import { NAVIGATION, type NavUrl } from '../data/navigationItems'
import { ClosedNavBar } from '../svg/SvgIcons'

export default function HamburgerMenu (): JSX.Element {
  const { handleHamburgerNavBar } = useFresh()
  return (
    <motion.article
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      exit={{ x: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed z-10 top-0 right-0 w-3/4 h-full bg-white"
    >
      <header className="flex justify-between items-end mt-2 mx-5">
        <img
          src="../../public/img/logo.png"
          alt="Logotipo"
          className="w-10 h-10"
        />
        <button
          type="button"
          onClick={handleHamburgerNavBar}
          className="focus:outline-none"
        >
          <ClosedNavBar />
        </button>
      </header>
      <main>
        <ul className="flex flex-col items-center justify-center h-full">
          {NAVIGATION.map((item: NavUrl) => (
            <li key={item.path} className="my-5">
              <Link
                to={item.path}
                className="text-2xl text-gray-700 hover:text-gray-900"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <footer className="flex h-full items-end">
        <h1>Test</h1>
      </footer>
    </motion.article>
  )
}
