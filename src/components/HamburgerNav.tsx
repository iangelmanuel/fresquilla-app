import { motion, AnimatePresence } from 'framer-motion'
import useFresh from '../hook/useFresh'
import HamburgerMenu from './HamburgerMenu'
import { OpenedNavBar } from '../svg/SvgIcons'

export default function HamburgerNav (): JSX.Element {
  const { isOpen, handleHamburgerNavBar } = useFresh()
  return (
    <div className="mt-2">
      <button
        type="button"
        onClick={handleHamburgerNavBar}
        className="w-10 h-10 focus:outline-none"
      >
        <AnimatePresence>
          {isOpen
            ? (
                <HamburgerMenu />
              )
            : (
                <motion.div
                  key="closedNavBar"
                >
                  <OpenedNavBar />
                </motion.div>
              )}
        </AnimatePresence>
      </button>
    </div>
  )
}
