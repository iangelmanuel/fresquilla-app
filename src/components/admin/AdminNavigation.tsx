import { Link, useLocation } from 'react-router-dom'

interface AdminNavigationProps {
  item: {
    name: string
    path: string
  }
}

export default function AdminNavigation ({ item }: AdminNavigationProps): JSX.Element {
  const { name, path } = item
  const location = useLocation()
  return (
    <li className={`${path === location.pathname ? 'bg-white text-[#C21116]' : 'hover:bg-[#C21116] text-white'} block py-2 px-4`}>
      <Link
        key={path}
        to={path}
        className="text-xl font-bold"
      >{name}</Link>
    </li>
  )
}
