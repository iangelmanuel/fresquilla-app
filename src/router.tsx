import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import AdminLayout from './layouts/AdminLayout'
import FreshProvider from './context/FreshProvider'
import AuthProvider from './context/AuthProvider'

// Public Pages
import App from './pages/App'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'

// Admin Pages
import AdminApp from './pages/admin/AdminApp'
import AdminCreateBlog from './pages/admin/AdminCreateBlog'
import AdminBlogs from './pages/admin/AdminBlogs'
import AdminContacts from './pages/admin/AdminContacts'
import AdminClaims from './pages/admin/AdminClaims'

export default function Router (): JSX.Element {
  return (
    <AuthProvider>
      <FreshProvider>
        <Routers>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<App />} />
              <Route path="/nosotros" element={<About />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
            </Route>
              <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="/admin" element={<AdminApp />} />
              <Route path="/admin/create-blog" element={<AdminCreateBlog />} />
              <Route path="/admin/blogs" element={<AdminBlogs />} />
              <Route path="/admin/contacts" element={<AdminContacts />} />
              <Route path="/admin/claims" element={<AdminClaims />} />
            </Route>
          </Routes>
        </Routers>
      </FreshProvider>
    </AuthProvider>
  )
}
