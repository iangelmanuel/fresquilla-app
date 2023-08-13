import { motion } from 'framer-motion'
import StartContent from './StartContent'
import MiddleContent from './MidleContent'
import FinalContent from './FinalContent'
import { contentData } from '../../data/homeData'

export default function Content (): JSX.Element {
  return (
    <>
      <motion.article
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="my-20 px-5 md:px-0"
      >
        <section>
          <StartContent />
        </section>

        <article className="mx-auto bg-gray-100 py-10 w-full rounded-lg md:rounded-none">
          <section className="flex justify-center items-center">
            <h3 className="text-[#FF0D48] text-4xl font-extrabold text-center mb-10">¿Por qué preferirnos?</h3>
          </section>
          <section className="flex-col space-y-10 md:space-y-0 md:flex md:flex-row justify-around">
            {contentData.map(item => (
              <MiddleContent
                key={item.id}
                item={item}
              />
            ))}
          </section>
        </article>

        <article className="container my-24 mx-auto md:px-6 mb-32">
          <FinalContent />
        </article>
      </motion.article>
    </>
  )
}
