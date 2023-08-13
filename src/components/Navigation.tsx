import { Link, useLocation } from 'react-router-dom'

interface NavigationProps {
  item: {
    name: string
    path: `/${string}`
  }
}

export default function Navigation ({ item }: NavigationProps): JSX.Element {
  const { name, path } = item
  const location = useLocation()
  return (
    <Link
      to={path}
      className={`${path === location.pathname ? 'text-white bg-[#FF0D48] py-1 px-3 rounded-full' : 'text-[#FF0D48]'} text-lg font-bold hover:underline`}
    >{name}</Link>
  )
}
