import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { LinkBlog } from '../../src/svg/SvgIcons'
import { formatedDate } from '../helpers/formatedDate'
import { animationBlogPost } from '../framer-motion/animations'

export interface PostKeys {
  post: {
    id: string
    title: string
    desc: string
    date: string
    ingredients?: string[]
    image?: string
    link?: string
  }
}

export default function Post ({ post }: PostKeys): JSX.Element {
  const { title, desc, date } = post
  return (
    <motion.article
      variants={animationBlogPost}
      initial="hidden"
      whileInView="visible"
      className="bg-zinc-50 shadow-lg rounded-lg px-8 pb-8 mb-4"
    >
      <section className="mb-4">
        <div className="flex justify-end items-end mt-5">
          <Link to="#">
            <LinkBlog />
          </Link>
        </div>
        <h2 className="text-xl text-center text-[#F3133D] font-bold my-5">{title}</h2>
        <p className="text-gray-600 text-xs">{desc}</p>
      </section>
      <section className="flex justify-between">
        <p className="text-gray-400 text-sm">{formatedDate(date)}</p>
      </section>
    </motion.article>
  )
}
