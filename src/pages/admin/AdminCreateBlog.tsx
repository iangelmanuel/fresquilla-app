import { motion } from 'framer-motion'
import AdminFormBlog from '../../components/admin/AdminFormBlog'

export default function AdminCreateBlog (): JSX.Element {
  return (
    <article>
      <section>
        <motion.h2
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-center font-bold mt-10"
        >
          Blog de la página de <span className="text-[#FF0D48]">Fresquilla</span>
        </motion.h2>
      </section>
      <section className="flex justify-center">
        <AdminFormBlog />
      </section>
    </article>
  )
}
