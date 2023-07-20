import { motion } from 'framer-motion'

export default function About (): JSX.Element {
  return (
    <motion.section
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ y: '100%', transition: { duration: 0.3 } }}
    >
      <article className="container mx-auto my-20">
        <h1 className="text-4xl font-bold text-center">¡Contactanos!</h1>
        <p className="text-center">
          ¡Contáctanos y déjanos endulzar tu día con nuestras deliciosas fresas! Estamos aquí para responder tus preguntas, atender tus solicitudes y compartir nuestra pasión por los sabores naturales y la sostenibilidad. ¡Esperamos con ansias escucharte!
        </p>
      </article>
      <section className="bg-white p-5">
        <form>
          <div>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-400 rounded-md outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
            />
          </div>
        </form>
      </section>
    </motion.section>
  )
}
