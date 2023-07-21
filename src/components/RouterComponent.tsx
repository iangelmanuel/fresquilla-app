import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from '../layouts/Layout'
import { AnimatePresence } from 'framer-motion'

// Pages
import App from '../pages/App'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import About from '../pages/About'

export default function AnimatedRoutes (): JSX.Element {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes>
        {/* TODO: Repair the type */}
        <Route location={location} key={location.pathname} path="/" element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
