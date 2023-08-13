import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import useFresh from '../../hook/useFresh'
import { titleValidation, ingredientsValidation, descValidation, linkValidation, imageValidation } from '../../validation/blogValidation'
import type { DataBlogs } from '../../interfaces/type'

export default function AdminFormBlog (): JSX.Element {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const { sendBlogData } = useFresh()

  const onSubmit = handleSubmit(async ({ title, ingredients, description, link, image }) => {
    const newData = {
      title,
      ingredients,
      description,
      link,
      image: image[0].name
    }

    await sendBlogData(newData as DataBlogs)
    reset()
  })

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="my-10"
    >
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 w-10/12 md:w-full mx-auto bg-zinc-100 p-5 md:p-20 rounded-lg shadow-lg"
      >
        <h4 className="text-center text-2xl font-bold mb-10">Crea tu Blog para Fresquilla</h4>
        <section className="flex gap-1 flex-col mb-6">
          <label htmlFor="title" className="text-xl font-bold">Título</label>
          <input
            type="text"
            id="title"
            {...register('title', titleValidation)}
            placeholder="Ej. Curiosidades de las fresas"
            className="border-2 border-gray-300 rounded-lg p-2"
          />
          {(errors.title !== null) && <span className="text-red-500">{errors.title?.message as string}</span>}
        </section>

        <section className="flex gap-1 flex-col mb-6">
          <label htmlFor="ingredients" className="text-lg font-bold">
            Ingredientes <span className="text-base font-normal">(Campo Opcional)</span>
          </label>
          <input
            type="text"
            id="ingredients"
            {...register('ingredients', ingredientsValidation)}
            placeholder="Ej. 1 taza de fresas, 1 taza de azúcar..."
            className="border-2 border-gray-300 rounded-lg p-2"
          />
          {(errors.ingredients !== null) && <span className="text-red-500">{errors.ingredients?.message as string}</span>}
        </section>

        <section className="flex gap-1 flex-col mb-6">
          <label htmlFor="description" className="text-lg font-bold">Descripción</label>
          <textarea
            id="description"
            {...register('description', descValidation)}
            placeholder="Ej. Las fresas son una fruta muy rica y nutritiva..."
            className="border-2 border-gray-300 rounded-lg p-2"
          />
          {(errors.description !== null) && <span className="text-red-500">{errors.description?.message as string}</span>}
        </section>

        <section className="flex gap-1 flex-col mb-6">
          <label htmlFor="desc" className="text-lg font-bold">
            Links <span className="text-base font-normal">(Campo Opcional)</span>
          </label>
          <input
            type="text"
            id="ingredients"
            {...register('link', linkValidation)}
            placeholder="Ej. https://www.fresquilla.com/blog/curiosidades-fresas"
            className="border-2 border-gray-300 rounded-lg p-2"
          />
          {(errors.link !== null) && <span className="text-red-500">{errors.link?.message as string}</span>}
        </section>

        <section className="flex gap-1 flex-col mb-6">
          <label htmlFor="image" className="text-lg font-bold">Imagen</label>
          <input
            type="file"
            id="image"
            {...register('image', imageValidation)}
            className="border-2 border-gray-300 rounded-lg p-2"
          />
          {(errors.image !== null) && <span className="text-red-500">{errors.image?.message as string}</span>}
        </section>

        <section className="flex justify-end">
          <input
            type="submit"
            value="Crear Blog"
            className="w-full md:w-auto bg-[#FF0D48] text-white font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-[#FF0D48] hover:opacity-80 transition duration-300"
          />
        </section>
      </form>
    </motion.div>
  )
}
