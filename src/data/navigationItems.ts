export interface NavUrl {
  name: string
  path: string
}

export const NAVIGATION: NavUrl[] = [
  { name: 'Inicio', path: '/' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Contacto', path: '/contacto' },
  { name: 'Blog', path: '/blog' }
]
