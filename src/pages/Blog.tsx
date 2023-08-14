import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import useFresh from '../hook/useFresh'
import Hero from '../components/Hero'
import Post from '../components/Post'

export default function Blog (): JSX.Element {
  const { id } = useParams()
  const { blog, getBlogData } = useFresh()
  const isBlogExists = blog !== null

  useEffect(() => {
    getBlogData(id as string)
  }, [])

  return (
    <motion.article
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ y: '100%' }}
    >
      <header className="mb-20">
        <Hero
          title={blog.title}
          width="30"
        />
      </header>
      <main className="w-full">
        {isBlogExists && <Post blog={blog} /> }
      </main>
    </motion.article>
  )
}
