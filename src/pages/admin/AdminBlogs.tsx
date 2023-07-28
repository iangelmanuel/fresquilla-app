import { motion } from 'framer-motion'
import { posts } from '../../data/posts'
import AdminPost from '../../components/admin/AdminPost'

export default function AdminApp (): JSX.Element {
  return (
    <>
      <motion.h2
        initial={{ y: -100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl text-center font-bold mt-10"
      >Blog de la página de <span className="text-[#FF0D48]">Fresquilla</span></motion.h2>
      <article className="flex mt-10">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map(post => (
            <AdminPost
              key={post.id}
              post={post}
            />
          ))}
        </section>
      </article>
    </>
  )
}
