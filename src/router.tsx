import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import FreshProvider from './context/FreshProvider'

// Pages
import App from './pages/App'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import About from './pages/About'

export default function Router (): JSX.Element {
  return (
    <FreshProvider>
      <Routers>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<App />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
        </Routes>
      </Routers>
    </FreshProvider>
  )
}
