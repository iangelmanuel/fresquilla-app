import { Link } from 'react-router-dom'

interface AdminHamburgerNavItemsProps {
  item: {
    path: string
    name: string
  }
}

export default function AdminHamburgerNavItems ({ item }: AdminHamburgerNavItemsProps): JSX.Element {
  const { path, name } = item
  return (
    <li className={`${location.pathname === path ? 'text-white bg-[#FF0D48] py-2 px-3' : ''} mb-5`}>
      <Link
        to={item.path}
        className="font-bold text-xl"
      >{name}</Link>
    </li>
  )
}
