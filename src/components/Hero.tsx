import { motion } from 'framer-motion'

interface HeroProps {
  title: string
  color?: string
  desc?: string
  width?: string | 100
}

export default function Hero ({ title, color = '', desc = '', width = 100 }: HeroProps): JSX.Element {
  const isDesc = desc !== ''
  const isColor = color !== ''
  return (
    <article
      className="relative overflow-hidden bg-cover bg-no-repeat"
      style={{
        backgroundPosition: '50%',
        backgroundImage: "url('../../public/img/background.jpg')",
        height: `${width}vh`,
        width: '100%'
      }}
    >
      <section className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center text-white/80 md:px-12">
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="md:mt-2 mb-3 text-4xl font-bold tracking-tight md:text-6xl xl:text-7xl"
            >{title} {isColor && (<span className="text-[#FF0D48]">{color}</span>)}</motion.h1>
            {isDesc && (
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="text-sm md:text-xl font-semibold md:leading-10"
              >{desc}</motion.p>
            )}
          </div>
        </div>
      </section>
    </article>
  )
}
