import { Outlet, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ToastContainer } from 'react-toastify'
import useAuth from '../hook/useAuth'
import AdminNavigation from '../components/admin/AdminNavigation'
import AdminHamburgerNav from '../components/admin/AdminHamburgerNav'
import { ADMINAV } from '../data/adminNavigation'
import 'react-toastify/dist/ReactToastify.css'

export default function AdminLayout (): JSX.Element {
  const { auth, loading, handleLogout } = useAuth()
  const isAuthenticated = auth?._id !== undefined && auth?._id !== null && auth?._id !== ''
  if (loading) return (<h1>Cargando...</h1>)
  return (
    <>
      {isAuthenticated
        ? (
            <article className="flex flex-col lg:flex-row">
              <aside className="hidden lg:block lg:w-1/6 lg:min-h-screen lg:bg-[#FF0D48] lg:shadow-2xl">
                <section className="flex flex-col sticky top-0 left-0">
                  <header className="bg-[#C21116] pb-3 rounded-lg shadow-xl">
                    <div className="flex gap-2 justify-center items-center">
                      <img
                        src="/img/logo.PNG"
                        alt="Logo Fresquilla"
                        className="w-20 h-20"
                      />
                      <h1 className="text-center text-2xl text-white font-extrabold mt-5">Fresquilla Admin</h1>
                    </div>
                    <div>
                      <p className="text-xl text-white font-bold mt-10 ml-5">Admin: Maria Alejandra</p>
                    </div>
                  </header>
                  <nav className="mt-5">
                    <ul>
                      {ADMINAV.map(item => (
                        <AdminNavigation
                          key={item.path}
                          item={item}
                        />
                      ))}
                    </ul>
                  </nav>
                  <footer className="flex gap-3 flex-col items-center mt-10">
                    <div className="flex">
                      <div>
                        <Link
                          to="/"
                        >
                          <motion.p
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleLogout}
                            className="text-white font-bold py-2 px-5 hover:bg-[#C21116] hover:shadow-xl hover:rounded-full hover:cursor-pointer"
                          >
                            Ir a Fresquilla
                          </motion.p>
                        </Link>
                      </div>
                      <div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={handleLogout}
                          className="text-white font-bold py-2 px-5 hover:bg-[#C21116] hover:shadow-xl hover:rounded-full hover:cursor-pointer"
                        >Cerrar Sesión</motion.button>
                      </div>
                    </div>
                    <div className="bg-[#C21116] w-full p-2 shadow-2xl">
                      <p className="text-center text-white font-semibold">Fresquilla Admin { new Date().getFullYear() }</p>
                    </div>
                  </footer>
                </section>
              </aside>

              <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
                className="w-full flex justify-between items-center fixed top-0 left-0 lg:hidden bg-white py-2 shadow-lg z-10"
              >
                <section className="px-5">
                  <img
                    src="/img/logo.PNG"
                    alt="Logo Fresquilla"
                    className="w-10 h-10"
                  />
                </section>
                <section className="px-5">
                  <AdminHamburgerNav />
                </section>
              </motion.nav>

              <main className="flex flex-col justify-center lg:flex lg:flex-col lg:justify-start mt-20 lg:mt-0 lg:w-5/6 lg:px-10">
                <Outlet />
              </main>
            </article>
          )
        : (<Navigate to="/login" />)}
      <ToastContainer />
    </>
  )
}
