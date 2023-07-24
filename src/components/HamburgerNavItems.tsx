import { Link, useLocation } from 'react-router-dom'

interface HamburgerNavItemsProps {
  item: {
    name: string
    path: string
  }
}

export default function HamburgerNavItems ({ item }: HamburgerNavItemsProps): JSX.Element {
  const { name, path } = item
  const location = useLocation()
  return (
    <li className={`${location.pathname === path ? 'text-white bg-[#FF0D48] py-2 px-3' : ''} mb-5`}>
      <Link
        to={item.path}
        className="font-bold text-xl"
      >{name}</Link>
    </li>
  )
}
