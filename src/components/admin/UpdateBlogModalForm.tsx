import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDropzone, type FileRejection, type DropzoneOptions } from 'react-dropzone'
import { toast } from 'react-toastify'
import useFresh from '../../hook/useFresh'
import { titleValidation, ingredientsValidation, descValidation, linkValidation } from '../../validation/blogValidation'
import type { DataBlogs } from '../../interfaces/type'

interface UpdateBlogModalProps {
  blog: DataBlogs
  handleModalUpdateToggle: () => void
}

export default function UpdateBlogModalForm ({ blog, handleModalUpdateToggle }: UpdateBlogModalProps): JSX.Element {
  const { setValue, register, handleSubmit, formState: { errors }, reset } = useForm()
  const [imageDroped, setImageDroped] = useState<string>('')
  const { updateBlogData } = useFresh()
  const navigate = useNavigate()
  const { _id, title, ingredients, description, image, links } = blog

  useEffect(() => {
    setValue('title', title)
    setValue('ingredients', ingredients.join(', '))
    setValue('description', description.join('\n'))
    setValue('links', links.join(', '))
  }, [title, ingredients, description, links])

  const onDrop = useCallback((acceptedFiles: File[], fileRejections: FileRejection[]): void => {
    if (fileRejections.length > 0) {
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
      setImageDroped(reader.result as string)
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
    const listOfIngredients = ingredients.split(', ')
    const listOfLinks = links.split(', ')
    const separateTextDescription = description.split('\n')
    const newData = {
      _id,
      title,
      ingredients: listOfIngredients,
      description: separateTextDescription,
      links: listOfLinks,
      image: imageDroped.length > 0 ? imageDroped : image
    }

    await updateBlogData(newData as DataBlogs)
    setImageDroped('')
    reset()
    handleModalUpdateToggle()
    navigate('/admin/blogs')
  })

  return (
    <form onSubmit={onSubmit} className="my-10">
      <div className="mb-5">
        <label htmlFor="title" className="text-gray-700 uppercase font-bold text-sm">Nombre</label>
        <input
          type="text"
          id="title"
          placeholder="Ej. Fresa con crema"
          {...register('title', titleValidation)}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg"
        />
        {(errors.title !== null) && <span className="text-red-500">{errors.title?.message as string}</span>}
      </div>
      <div className="mb-5">
        <label htmlFor="ingredients" className="text-gray-700 uppercase font-bold text-sm">Ingredientes</label>
        <input
          type="text"
          id="ingredients"
          placeholder="Ej. Fresa, crema, leche, etc."
          {...register('ingredients', ingredientsValidation)}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg"
        />
        {(errors.ingredients !== null) && <span className="text-red-500">{errors.ingredients?.message as string}</span>}
      </div>
      <div className="mb-5">
        <label htmlFor="description" className="text-gray-700 uppercase font-bold text-sm">Descripción</label>
        <textarea
          id="description"
          rows={12}
          placeholder="Ej. Para la preparación de este postre debes..."
          {...register('description', descValidation)}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg"
        />
        {(errors.description !== null) && <span className="text-red-500">{errors.description?.message as string}</span>}
      </div>
      <div className="mb-5">
        <label htmlFor="links" className="text-gray-700 uppercase font-bold text-sm">Links</label>
        <input
          type="text"
          id="links"
          placeholder="Ej. https://fresquilla.com"
          {...register('links', linkValidation)}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg"
        />
        {(errors.links !== null) && <span className="text-red-500">{errors.links?.message as string}</span>}
      </div>
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
          {imageDroped?.length > 0 && (
            <img
              src={imageDroped}
              alt="Imagen subida"
              className="w-40 h-40 object-cover rounded-lg shadow-lg"
            />
          )}
        </div>
        <div className="flex gap-2 flex-col items-center">
          <p className="text-sm font-semibold text-gray-700">Imagen actual</p>
          <img
            src={image?.url}
            alt={`Imagen de ${title}`}
            className="h-20 w-20 object-cover shadow-lg"
          />
        </div>
      </section>
      <section className="flex justify-end">
        <input
          type="submit"
          value="Actualizar Blog"
          className="w-full md:w-auto bg-[#FF0D48] text-white font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-[#FF0D48] hover:opacity-80 transition duration-300"
        />
      </section>
    </form>
  )
}
