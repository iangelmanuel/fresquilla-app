import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import useFresh from '../../hook/useFresh'
import AdminPost from '../../components/admin/AdminPost'

export default function AdminBlog (): JSX.Element {
  const { id } = useParams()
  const { blog, getBlogData } = useFresh()
  const isBlogExists = blog !== null

  useEffect(() => {
    getBlogData(id as string)
  }, [id])

  return (
    <motion.article
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <section>
      {isBlogExists && <AdminPost blog={blog} /> }
    </section>
  </motion.article>
  )
}
