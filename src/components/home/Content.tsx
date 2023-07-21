import { motion } from 'framer-motion'
import MiddleContent from './MidleContent'

// import Lottie from 'lottie-react'
// import Strawberry from '../../../public/animations/strawberrya.json'
import { CONTENTDATA } from '../../data/homeData'

export default function Content (): JSX.Element {
  const animationTitle = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  }

  const animationParagraph = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7 } }
  }

  const animationImg = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  }

  const animationContent = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  }

  return (
    <>
      <motion.article
        variants={animationContent}
        initial="hidden"
        whileInView="visible"
        className="container my-24 mx-auto md:px-6"
      >
        <section className="mb-32">
          <div
            className="block rounded-lg">
            <div className="flex flex-wrap">
              <div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                <motion.img
                  variants={animationImg}
                  initial="hidden"
                  whileInView="visible"
                  src="../../../public/img/product1.PNG"
                  alt="Imagen producto"
                  className="w-full rounded-lg lg:rounded-tr-none lg:rounded-bl-lg"
                />
              </div>

              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                <div className="px-6 py-12 md:px-12">
                  <motion.h2
                    variants={animationTitle}
                    initial="hidden"
                    whileInView="visible"
                    className="mb-4 text-2xl font-bold"
                  >Whats the secret of the great taste?</motion.h2>
                  <motion.p
                    variants={animationParagraph}
                    initial="hidden"
                    whileInView="visible"
                    className="text-[#FF0D48] mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500"
                  >Hot news</motion.p>
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
              </div>
            </div>
          </div>
        </section>
      </motion.article>

      <motion.article
        variants={animationContent}
        initial="hidden"
        whileInView="visible"
        className="my-20"
      >
        <main className="mx-auto py-10 w-full shadow-lg">
          <section className="flex justify-center items-center">
            <h3 className="text-[#FF0D48] text-4xl font-extrabold text-center mb-10">¿Por qué preferirnos?</h3>
          </section>
          <section className="flex-col space-y-10 md:space-y-0 md:flex md:flex-row justify-around">
            {CONTENTDATA.map(item => (
              <MiddleContent
                key={item.id}
                item={item}
              />
            ))}
          </section>
        </main>
      </motion.article>
    </>
  )
}
