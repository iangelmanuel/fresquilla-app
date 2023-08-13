interface AdmiNav {
  name: string
  path: `/${string}`
}

export const ADMINAV: AdmiNav[] = [
  {
    name: 'Crear blog',
    path: '/admin/create-blog'
  },
  {
    name: 'Blogs',
    path: '/admin/blogs'
  },
  {
    name: 'Contactos',
    path: '/admin/contacts'
  },
  {
    name: 'Quejas y Reclamos',
    path: '/admin/claims'
  }
]
