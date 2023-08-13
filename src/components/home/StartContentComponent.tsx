import { motion } from 'framer-motion'

interface StartContentProps {
  title: string
  desc: string
  img: string
}

export default function StartContentComponent ({ title, desc, img }: StartContentProps): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <div className="flex justify-center items-center mb-16 flex-wrap">
        <div className="mb-6">
          <div
            className="flex justify-center"
            data-te-ripple-init data-te-ripple-color="light">
            <img
              src={img}
              alt={`Imagen de ${title}`}
              className="w-64 rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
          <h3 className="mb-4 text-2xl font-bold text-center md:text-left">{title}</h3>
          <p className="text-zinc-600 text-center md:text-left">{desc}</p>
        </div>
      </div>
    </motion.div>
  )
}
