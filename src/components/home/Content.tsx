import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import Lottie from 'lottie-react'
import testing from '../../../public/animations/strawberrya.json'

export default function Content (): JSX.Element {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  const titleVariant = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  }

  const titleVariant2 = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } }
  }

  return (
    <>
      <article className="container flex justify-center gap-5 mx-auto mb-10">
        <section className="container mx-auto">
          <div className="flex-col justify-center mb-10">
            <motion.h1
              ref={ref}
              variants={titleVariant}
              initial="hidden"
              animate={control}
              className="text-6xl font-extrabold text-center mb-5"
            >
              Bienvenidos a Fresquilla
            </motion.h1>
            <motion.p
              ref={ref}
              variants={titleVariant2}
              initial="hidden"
              animate={control}
              className="text-2xl text-center mx-auto"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nostrum sint impedit dignissimos iste accusantium inventore quo beatae quidem rerum.
            </motion.p>
          </div>
          <div className="flex justify-center items-center">
            <Lottie
              animationData={testing}
              style={{ width: 500, height: 500 }}
            />
          </div>
        </section>
        <article className="w-full bg-black">
          <img src="../../../public/img/product1.PNG" alt="Imagen producto" />
        </article>
      </article>

      <section className="w-full my-20">
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <h1 className="text-6xl font-extrabold text-center">Nuestros productos</h1>
          </div>
        </div>
      </section>
    </>
  )
}
