// FreshProvider
export interface DataContacts {
  _id: string
  name: string
  email: string
  phone: string
  message: string
  createdAt: string
}

export interface DataClaims {
  _id: string
  problem: string
  name: string
  email: string
  phone: string
  message: string
  createdAt: string
}

export interface DataBlogs {
  _id: string
  title: string
  ingredients: string
  description: string
  link: string
  image: string
  createdAt: string
}

export interface Alert {
  error: boolean
  msg: string
}

export interface FreshContextValue {
  isOpen: boolean
  isTransparent: boolean
  isClaimsForm: boolean
  alert: {
    error: boolean
    msg: string
  }
  contacts: DataContacts[]
  claims: DataClaims[]
  blogs: DataBlogs[]
  handleClaimsForm: () => void
  handleHamburgerNavBar: () => void
  setAlert: (alert: { error: boolean, msg: string }) => void
  sendContactData: (contactData: DataContacts) => Promise<void>
  sendClaimsData: (claimsData: DataClaims) => Promise<void>
  getContactsData: () => Promise<void>
  getClaimsData: () => Promise<void>
  deleteContactData: (id: string) => Promise<void>
  deleteClaimData: (id: string) => Promise<void>
  sendBlogData: (blogData: DataBlogs) => Promise<void>
  getBlogsData: () => Promise<void>
}

// AuthProvider
export interface AuthContextValue {
  auth: Auth | null | undefined
  setAuth: (auth: Auth) => void
  loading: boolean
  handleLogout: () => void
}

export interface Auth {
  _id: string
  name: string
  email: string
  token: string
}
