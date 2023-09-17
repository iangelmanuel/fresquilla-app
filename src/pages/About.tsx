import { motion } from 'framer-motion'
import Hero from '../components/Hero'

export const animationParagraph = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, delay: 0.7 } }
}

export default function About (): JSX.Element {
  return (
    <motion.article
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ y: '100%' }}
    >
      <header className="mb-20">
        <Hero
          title="Acerca de"
          color="Fresquilla"
          desc="En este apartado vas a encontrar información sobre nosotros"
          width="40"
        />
      </header>
      <motion.main
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container my-24 mx-auto md:px-6"
      >
        <article className="mb-32">
          <div className="block rounded-lg">
            <div className="flex flex-wrap">
              <section className="mx-auto md:mx-0 shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                <motion.img
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  src="/img/product1.jpg"
                  alt="Imagen producto"
                  className="w-60 mb-10 md:mb-0 md:w-full rounded-lg lg:rounded-tr-none lg:rounded-bl-lg"
                />
              </section>
              <section className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                <div className="px-6 py-0 md:py-12 md:px-12">
                  <motion.h2
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 text-2xl font-bold"
                  >Whats the secret of the great taste?</motion.h2>
                  <motion.p
                    variants={animationParagraph}
                    initial="hidden"
                    whileInView="visible"
                    className="mb-6 text-gray-700"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Earum maxime voluptas ipsam aliquam itaque cupiditate
                    provident architecto expedita harum culpa odit, inventore rem
                    molestias laborum repudiandae corporis pariatur quo eius iste!
                    Quaerat, assumenda voluptates! Molestias, recusandae? Maxime
                    fuga omnis ducimus.
                  </motion.p>
                  <motion.p
                    variants={animationParagraph}
                    initial="hidden"
                    whileInView="visible"
                    className="text-gray-700"
                  >
                    Commodi ut nisi assumenda alias maxime necessitatibus ad rem
                    repellat explicabo, reiciendis illum suscipit iusto? Provident
                    dignissimos similique, reiciendis inventore accusantium unde
                    mollitia, deleniti quae atque error id perspiciatis illum.
                    Laboriosam aperiam ab illo dignissimos obcaecati corporis
                    similique a odio, optio iste quis placeat alias amet rerum
                    sint quos dolor pariatur inventore possimus ad consequuntur
                    fugiat perferendis consectetur laudantium.
                  </motion.p>
                </div>
              </section>
            </div>
          </div>
        </article>
      </motion.main>
    </motion.article>
  )
}
