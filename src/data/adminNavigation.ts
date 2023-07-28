interface AdminNavigation {
  name: string
  path: string
}

export const adminNavigation: AdminNavigation[] = [
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
