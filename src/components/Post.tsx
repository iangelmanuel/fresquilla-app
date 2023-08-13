import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { DataBlogs } from '../interfaces/type'
import { formatedDate } from '../helpers/formatedDate'
import { LinkBlog } from '../../src/svg/SvgIcons'

interface PostProps {
  blog: DataBlogs
}

export default function Post ({ blog }: PostProps): JSX.Element {
  const { title, description, createdAt } = blog
  return (
    <motion.article
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-50 shadow-lg rounded-lg px-8 pb-8 mb-4"
    >
      <section className="mb-4">
        <div className="flex justify-end items-end mt-5">
          <Link to="#">
            <LinkBlog />
          </Link>
        </div>
        <h2 className="text-xl text-center text-[#F3133D] font-bold my-5">{title}</h2>
        <p className="text-gray-600 text-xs">{description}</p>
      </section>
      <section className="flex justify-between">
        <p className="text-gray-400 text-sm">{formatedDate(createdAt)}</p>
      </section>
    </motion.article>
  )
}
