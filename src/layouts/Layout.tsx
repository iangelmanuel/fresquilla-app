import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from '../components/Header'
import Footer from '../components/Footer'
import 'react-toastify/dist/ReactToastify.css'

export default function Layout (): JSX.Element {
  return (
    <>
      <header className="z-10">
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      <ToastContainer />
    </>
  )
}
