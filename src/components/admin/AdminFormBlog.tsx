import { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useDropzone, type FileRejection, type DropzoneOptions } from 'react-dropzone'
import { toast } from 'react-toastify'
import useFresh from '../../hook/useFresh'
import { titleValidation, ingredientsValidation, descValidation, linkValidation } from '../../validation/blogValidation'
import type { DataBlogs } from '../../interfaces/type'

export default function AdminFormBlog (): JSX.Element {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const { sendBlogData } = useFresh()
  const [image, setImage] = useState<string>('')

  const onDrop = useCallback((acceptedFiles: File[], fileRejections: FileRejection[]): void => {
    if (fileRejections.length > 0) {
      console.log(fileRejections)
      toast.error('¡Solo se permiten imagenes!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      })
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      setImage(reader.result as string)
    }
    reader.readAsDataURL(acceptedFiles[0])
  }, [])

  const dropzoneOptions: DropzoneOptions = {
    onDrop,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png']
    },
    maxSize: 100000000
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone(dropzoneOptions)

  const onSubmit = handleSubmit(async ({ title, ingredients, description, links }) => {
    if (image.length === 0) {
      toast.error('¡El campo imagen es requerido!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      })
      return
    }

    const listOfIngredients = ingredients.split(', ')
    const listOfLinks = links.split(', ')
    const separateTextDescription = description.split('\n')
    const newData = {
      title,
      ingredients: listOfIngredients,
      description: separateTextDescription,
      links: listOfLinks,
      image
    }

    await sendBlogData(newData as DataBlogs)
    setImage('')
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
        className="flex flex-col gap-4 w-10/12 mx-auto md:w-auto bg-white p-5 md:p-10 rounded-lg shadow-xl"
      >
        <h4 className="text-center text-2xl font-bold mb-10">Crea tu Blog para Fresquilla</h4>
        <section className="flex gap-1 flex-col mb-6">
          <label htmlFor="title" className="text-xl font-bold">
            Título <span className="text-base font-normal">(Campo Obligatorio)</span>
          </label>
          <input
            type="text"
            id="title"
            {...register('title', titleValidation)}
            placeholder="Ej. Curiosidades de las fresas"
            className="border-2 border-gray-300 rounded-lg shadow-lg p-2"
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
            className="border-2 border-gray-300 rounded-lg shadow-lg p-2"
          />
          {(errors.ingredients !== null) && <span className="text-red-500">{errors.ingredients?.message as string}</span>}
        </section>

        <section className="flex gap-1 flex-col mb-6">
          <label htmlFor="description" className="text-lg font-bold">
            Descripción <span className="text-base font-normal">(Campo Obligatorio)</span>
          </label>
          <textarea
            id="description"
            rows={10}
            {...register('description', descValidation)}
            placeholder="Ej. Las fresas son una fruta muy rica y nutritiva..."
            className="border-2 border-gray-300 rounded-lg shadow-lg p-2"
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
            {...register('links', linkValidation)}
            placeholder="Ej. https://www.fresquilla.com/blog/curiosidades-fresas"
            className="border-2 border-gray-300 rounded-lg shadow-lg p-2"
          />
          {(errors.link !== null) && <span className="text-red-500">{errors.link?.message as string}</span>}
        </section>

        <section className="flex gap-1 flex-col mb-6">
          <label htmlFor="image" className="text-lg font-bold">
            Imagen <span className="text-base font-normal">(Campo Obligatorio)</span>
          </label>
          <div
            {...getRootProps()}
            className="flex gap-5 flex-col justify-center items-center border border-gray-300 px-2 py-10 rounded-lg shadow-lg cursor-pointer"
          >
            <input {...getInputProps()} />
            {
              isDragActive
                ? <p>Suelta la imagen aquí</p>
                : <p>Arrastra la imagen aquí o haz click para seleccionarla</p>
            }
            {image?.length > 0 && (
              <img
                src={image}
                alt="Imagen subida"
                className="w-40 h-40 object-cover rounded-lg shadow-lg"
              />
            )}
          </div>
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
