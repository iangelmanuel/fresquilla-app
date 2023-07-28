import { motion } from 'framer-motion'
import useFresh from '../../hook/useFresh'
import AdminHamburgerNavItems from './AdminHamburgerNavItems'
import { adminNavigation } from '../../data/adminNavigation'
import { ClosedNavBar } from '../../svg/SvgIcons'

export default function AdminHamburgerMenu (): JSX.Element {
  const { handleHamburgerNavBar } = useFresh()
  return (
    <motion.article
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      exit={{ x: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col justify-between lg:justify-normal fixed z-10 top-0 right-0 w-3/4 h-full bg-white shadow-2xl"
    >
      <header className="flex justify-between mt-2 mb-10 mx-5">
        <div className="flex gap-2 items-start">
          <img
            src="../../public/img/logo.png"
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
          {adminNavigation.map(item => (
            <AdminHamburgerNavItems
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
