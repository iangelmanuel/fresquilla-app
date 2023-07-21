import { motion } from 'framer-motion'
import Hero from '../components/Hero'

export default function Blog (): JSX.Element {
  return (
    <motion.article
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ y: '100%', transition: { duration: 0.3 } }}
    >
      <header className="mb-20">
        <Hero
          title="Bienvenido al apartado de"
          color="Blog"
          desc="Aquí se subirán resetas, trucos y de mas que puedes hacer con nuestras fresas"
          width="30"
        />
      </header>
      <main className="mb-32">
        <article className="container mx-auto text-center lg:text-left xl:px-32">
          <div className="flex items-center lg:grid-cols-2">
            <section className="mb-12 lg:mb-0">
              <div
                className="block rounded-lg bg-[#F7B9C3] p-5">
                <h3 className="mb-3 text-2xl font-bold">Cabecera</h3>
                <h5 className="mb-12 text-lg font-bold text-primary dark:text-primary-400 lg:mb-10 xl:mb-12">Titulo</h5>
                <p className="mb-4 font-bold">subtitulo 3</p>
                <p className="mb-6 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                  autem numquam dolore molestias aperiam culpa alias veritatis
                  architecto eos, molestiae vitae ex eligendi libero eveniet
                  dolorem, doloremque rem aliquid perferendis.
                </p>

                <p className="mb-4 font-bold">subtitulo 2</p>
                <p className="mb-6 text-gray-700">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem iste provident. Et minus aut dignissimos ab ducimus? Exercitationem deleniti dolorem quo nobis quibusdam ullam ipsum, molestias nemo odio inventore laboriosam illo necessitatibus vero rerum praesentium quaerat voluptate molestiae beatae labore eaque sint aperiam cumque. Corrupti id temporibus saepe error!
                </p>

                <p className="mb-4 font-bold">subtitulo 3</p>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, numquam architecto sint recusandae voluptas vero eveniet laboriosam quia explicabo optio labore deleniti tempore voluptate esse dicta molestiae omnis ullam quis voluptates saepe odit nulla magnam! Similique nemo ipsa alias. Mollitia voluptatibus voluptate eos consectetur culpa nisi facere reiciendis pariatur iste?
                </p>
              </div>
            </section>
            <section>
              <img
                src="../../public/img/flayer.png"
                alt="Image blog"
                className="w-full rounded-lg shadow-lg dark:shadow-black/20"
              />
            </section>
          </div>
        </article>
      </main>
    </motion.article>
  )
}
