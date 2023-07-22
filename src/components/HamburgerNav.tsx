import useFresh from '../hook/useFresh'
import HamburgerMenu from './HamburgerMenu'
import { OpenedNavBar } from '../svg/SvgIcons'

export default function HamburgerNav (): JSX.Element {
  const { isOpen, handleHamburgerNavBar } = useFresh()

  return (
    <div className="mt-2">
      <button
        type="button"
        className="focus:outline-none"
        onClick={handleHamburgerNavBar}
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
