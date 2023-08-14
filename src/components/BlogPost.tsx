import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { DataBlogs } from '../interfaces/type'
import { formatedDate } from '../helpers/formatedDate'
import { LinkBlog } from '../svg/SvgIcons'

interface PostProps {
  blog: DataBlogs
  index: number
}

const articleAnimation = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: ({ delay }: { delay: number }) => ({
    opacity: 1,
    transition: {
      delay
    }
  }),
  exit: {
    opacity: 0
  }
}

export default function BlogPost ({ blog, index }: PostProps): JSX.Element {
  const { _id, title, description, createdAt } = blog
  return (
    <motion.article
      variants={articleAnimation}
      custom={{ delay: (index + 1) * 0.1 }}
      initial="hidden"
      animate="visible"
      exit="exit"
      layoutId={_id}
      className="bg-zinc-50 shadow-lg rounded-lg px-8 pb-8 mb-4"
    >
      <section className="mb-4">
        <div className="flex justify-end items-end mt-5">
          <Link to={`/blog/${_id}`}>
            <LinkBlog />
          </Link>
        </div>
        <h2 className="text-xl text-center text-[#F3133D] font-bold my-5">{title}</h2>
        <p className="text-gray-600 text-xs truncate">{description}</p>
      </section>
      <section className="flex justify-between">
        <p className="text-gray-400 text-sm">{formatedDate(createdAt)}</p>
      </section>
    </motion.article>
  )
}
