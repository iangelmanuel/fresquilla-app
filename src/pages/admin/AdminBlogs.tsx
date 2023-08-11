import { motion } from 'framer-motion'
import AdminPost from '../../components/admin/AdminPost'
import { posts } from '../../data/posts'

export default function AdminApp (): JSX.Element {
  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl text-center font-bold mt-10">
          Blog de la página de{' '}
          <span className="text-[#FF0D48]">Fresquilla</span>
        </h2>
      </motion.header>
      <main className="flex mt-10">
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map(post => (
            <AdminPost
              key={post.id}
              post={post}
            />
          ))}
        </article>
      </main>
    </>
  )
}
