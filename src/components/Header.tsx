import { Link } from 'react-router-dom'

const NAVIGATION = [
  { name: 'Inicio', path: '/' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Contact', path: '/contacto' },
  { name: 'Blog', path: '/blog' }
]

export default function Header (): JSX.Element {
  return (
    <section className="flex justify-between bg-[#F7B9C3] px-5 py-3 shadow-lg">
      <div>
        <Link to="/" className="flex items-center gap-2">
          <img
            src="../../public/img/logo.png"
            alt="Logotipo"
            className="w-10 h-10"
          />
          <h1 className="text-2xl text-[#FF0D48] font-extrabold underline">Fresquilla</h1>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        {NAVIGATION.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className="text-[#FF0D48] font-bold hover:underline"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  )
}
