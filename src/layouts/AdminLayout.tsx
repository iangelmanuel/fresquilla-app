import { Outlet, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import useAuth from '../hook/useAuth'
import AdminNavigation from '../components/admin/AdminNavigation'
import AdminHamburgerNav from '../components/admin/AdminHamburgerNav'
import { adminNavigation } from '../data/adminNavigation'
import 'react-toastify/dist/ReactToastify.css'

export default function AdminLayout (): JSX.Element {
  const { auth, loading } = useAuth()
  const isAuthenticated = auth?._id !== undefined && auth?._id !== null && auth?._id !== ''
  if (loading) return (<h1>Cargando...</h1>)
  return (
    <>
      {isAuthenticated
        ? (
            <div className="flex flex-col lg:flex-row">
              <aside className="hidden lg:block lg:w-1/6 lg:min-h-screen lg:bg-[#FF0D48] lg:shadow-2xl">
                <header>
                  <div className="flex gap-2 justify-center items-center">
                    <img
                      src="/img/logo.PNG"
                      alt="Logo Fresquilla"
                      className="w-14 h-14"
                    />
                    <h1 className="text-center text-2xl text-white font-extrabold mt-5">Fresquilla Admin</h1>
                  </div>
                  <p className="text-xl text-white font-bold mt-10 ml-5">Admin Maria Alejandra</p>
                </header>
                <nav className="mt-5">
                  <ul>
                    {adminNavigation.map(item => (
                      <AdminNavigation
                        key={item.path}
                        item={item}
                      />
                    ))}
                  </ul>
                </nav>
                <footer className="flex justify-center items-end">
                  <p className="text-center text-white font-semibold mt-10">Fresquilla Admin 2021</p>
                </footer>
              </aside>

              <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
                className="w-full flex justify-between items-center fixed top-0 left-0 lg:hidden bg-white py-2 shadow-lg"
              >
                <section className="px-5">
                  <img
                    src="/public/img/logo.PNG"
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
            </div>
          )
        : (<Navigate to="/login" />)}
    </>
  )
}
