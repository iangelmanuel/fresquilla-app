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
      { isOpen
        ? (
          <>
            <HamburgerMenu />
          </>
          )
        : (
          <OpenedNavBar />
          )}
      </button>
    </div>
  )
}
