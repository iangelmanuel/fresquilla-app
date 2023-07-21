import { Link, useLocation } from 'react-router-dom'
import { InstagramIcon } from '../svg/SvgIcons'

const NAVIGATION = [
  { name: 'Inicio', path: '/' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Contact', path: '/contacto' },
  { name: 'Blog', path: '/blog' }
]

export default function Header (): JSX.Element {
  const location = useLocation()
  return (
    <article className="flex justify-between bg-[#F7B9C3] px-5 py-3 shadow-lg">
      <section>
        <Link to="/" className="flex items-center gap-2">
          <img
            src="../../public/img/logo.png"
            alt="Logotipo"
            className="w-10 h-10"
          />
          <h1 className="text-2xl text-[#FF0D48] font-extrabold underline">Fresquilla</h1>
        </Link>
      </section>
      <nav className="hidden md:flex items-center gap-5">
        {NAVIGATION.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`${item.path === location.pathname ? 'bg-white' : ''} text-lg uppercase text-[#FF0D48] font-bold hover:underline`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <section className="hidden md:flex items-center gap-3 hover:transition-all hover:translate-y-1">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/fresquilla_bq/">
          <InstagramIcon />
        </a>
      </section>
    </article>
  )
}
