import { Link, useLocation } from 'react-router-dom'

interface NavigationProps {
  item: {
    name: string
    path: string
  }
}

export default function Navigation ({ item }: NavigationProps): JSX.Element {
  const location = useLocation()
  return (
    <Link
      key={item.path}
      to={item.path}
      className={`${item.path === location.pathname ? 'text-white bg-[#FF0D48] py-1 px-3 rounded-full' : 'text-[#FF0D48]'} text-lg font-bold hover:underline`}
    >{item.name}</Link>
  )
}
