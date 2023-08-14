import { motion } from 'framer-motion'

export default function FinalContent (): JSX.Element {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16 flex flex-wrap lg:flex-row-reverse"
    >
      <section className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6">
        <div className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg">
          <img
            src="/img/bgfinalcontent.PNG"
            alt="Louvre"
            className="w-full"
          />
          <a href="#!">
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
            </div>
          </a>
        </div>
      </section>

      <section className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
        <h3 className="mb-4 text-2xl font-bold">Beneficios de la Fresa</h3>
        <p className="mb-6 text-zinc-600">
          Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta
          dui, sit amet rutrum enim massa in ante. Curabitur in justo at
          lorem laoreet ultricies. Nunc ligula felis, sagittis eget nisi
          vitae, sodales vestibulum purus. Vestibulum nibh ipsum, rhoncus
          vel sagittis nec, placerat vel justo. Duis faucibus sapien eget
          tortor finibus, a eleifend lectus dictum. Cras tempor convallis
          magna id rhoncus. Suspendisse potenti. Nam mattis faucibus
          imperdiet. Proin tempor lorem at neque tempus aliquet. Phasellus
          at ex volutpat, varius arcu id, aliquam lectus. Vestibulum mattis
          felis quis ex pharetra luctus. Etiam luctus sagittis massa, sed
          iaculis est vehicula ut.
        </p>
      </section>
    </motion.footer>
  )
}
