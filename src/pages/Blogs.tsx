import { useEffect } from 'react'
import { motion } from 'framer-motion'
import useFresh from '../hook/useFresh'
import Hero from '../components/Hero'
import BlogPost from '../components/BlogPost'
import NoPost from '../components/NoPost'

export default function Blogs (): JSX.Element {
  const { blogs, getBlogsData } = useFresh()

  useEffect(() => {
    getBlogsData()
  }, [])

  return (
    <motion.article
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ y: '100%' }}
    >
      <header className="mb-10 md:mb-20">
        <Hero
          title="Bienvenido al apartado de"
          color="Blog"
          desc="Aquí se subirán resetas, trucos y de mas que puedes hacer con nuestras fresas"
          width="40"
        />
      </header>
      { blogs?.length > 0 && (
        <motion.section
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-10 p-5 bg-[#F3133D] shadow-lg"
        >
          <h1 className="text-center text-white text-4xl font-extrabold mb-3">¡Nuestro Blog!</h1>
          <p className="text-center text-white text-sm md:text-xl md:font-bold">
            Te invitamos a disfrutar de todo nuestro contenido de resetas, postres y muchas cosas divertidas que puedes hacer con las fresas y no lo sabias
          </p>
        </motion.section>
      )}
      <main className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 space-y-5 space-x-5 mb-32">
      {blogs?.length > 0 &&
        blogs.map((blog, index) => (
          <BlogPost
            key={blog._id}
            blog={blog}
            index={index}
          />
        ))
      }
      </main>
      { blogs?.length === 0 && (
        <main>
          <NoPost />
        </main>
      )}
    </motion.article>
  )
}
