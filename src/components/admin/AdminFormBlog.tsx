import { motion } from 'framer-motion'

export default function AdminFormBlog (): JSX.Element {
  return (
    <motion.section
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="mt-10"
    >
      <form className="bg-zinc-100 mb-20 p-2 md:p-0 md:mb-0 md:px-14 md:py-10 rounded-lg shadow-lg">
        <h4 className="text-center text-2xl font-bold mb-10">Crea tu Blog para Fresquilla</h4>
        <div className="flex gap-3 flex-col mb-6">
          <label htmlFor="title" className="text-xl font-bold">Título:</label>
          <input
            type="text"
            id="title"
            placeholder="Ej. Curiosidades de las fresas"
            className="border-2 border-gray-300 rounded-lg p-2"
          />
        </div>

        <div className="flex gap-3 flex-col mb-6">
          <label htmlFor="desc" className="text-lg font-bold">Descripción:</label>
          <textarea
            id="desc"
            placeholder="Ej. Las fresas son una fruta muy rica y nutritiva..."
            className="border-2 border-gray-300 rounded-lg p-2"
          />
        </div>

        <div className="flex gap-3 flex-col mb-6">
          <label htmlFor="ingredients" className="text-lg font-bold">Ingredientes:</label>
          <input
            type="text"
            id="ingredients"
            placeholder="Ej. 1 taza de fresas, 1 taza de azúcar..."
            className="border-2 border-gray-300 rounded-lg p-2"
          />
        </div>

        <div className="flex gap-3 flex-col mb-6">
          <label htmlFor="desc" className="text-lg font-bold">Links:</label>
          <input
            type="text"
            id="ingredients"
            placeholder="Ej. https://www.fresquilla.com/blog/curiosidades-fresas"
            className="border-2 border-gray-300 rounded-lg p-2"
          />
        </div>

        <div className="flex gap-3 flex-col mb-6">
          <label htmlFor="image" className="text-lg font-bold">Imagen:</label>
          <input
            type="file"
            id="image"
            className="border-2 border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="flex justify-end">
          <input
            type="submit"
            value="Crear Blog"
            className="w-full md:w-auto bg-[#FF0D48] text-white font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-[#FF0D48] hover:opacity-80 transition duration-300"
          />
        </div>
      </form>
    </motion.section>
  )
}
