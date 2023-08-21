import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import DeleteBlogModal from './DeleteBlogModal'
import UpdateBlogModal from './UpdateBlogModal'
import { GoBack, DeleteAdminPost, EditAdminPost, IngredientsList } from '../../svg/SvgIcons'
import { formatedDate } from '../../helpers/formatedDate'
import type { DataBlogs } from '../../interfaces/type'

interface AdminPostProps {
  blog: DataBlogs
}

export default function AdminPost ({ blog }: AdminPostProps): JSX.Element {
  const { _id, title, ingredients, description, links, image, createdAt } = blog
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState<boolean>(false)
  const isIngredients = ingredients.includes('') ? null : ingredients
  const isLink = links.includes('') ? null : links
  console.log(blog)
  const handleClick = (): void => { window.history.back() }
  const handleModalToggle = (): void => { setIsModalOpen(!isModalOpen) }
  const handleModalUpdateToggle = (): void => { setIsModalUpdateOpen(!isModalUpdateOpen) }
  return (
    <>
      <article className="container mx-auto px-4 py-4 md:px-0 md:max-w-5xl flex flex-col bg-white rounded-xl shadow-xl mb-20">
        <section className="flex flex-col md:flex-row gap-2 justify-between items-center bg-yellow-200 p-3 md:my-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClick}
            className="bg-[#FF0D48] text-white font-bold py-2 px-2 hover:bg-[#C21116] shadow-xl rounded-full hover:cursor-pointer"
          >
            <GoBack />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleModalToggle}
            className="flex gap-1 bg-red-500 text-white font-bold py-2 px-3 hover:bg-red-700 shadow-xl rounded-full hover:cursor-pointer"
          >
            <DeleteAdminPost />
            Eliminar
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleModalUpdateToggle}
            className="flex gap-1 bg-sky-500 text-white font-bold py-2 px-3 hover:bg-sky-600 shadow-xl rounded-full hover:cursor-pointer"
          >
            <EditAdminPost />
            Editar
          </motion.button>
          <p className="text-end text-gray-700 text-sm">Publicado: {formatedDate(createdAt)}</p>
        </section>
        <section className="flex gap-5 flex-col justify-center items-center my-10">
          <div className="w-full md:w-2/5 mb-10">
            <img
              src={image?.url}
              alt={`Imagen de ${title}`}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-center">{title}</h3>
          </div>
          <div className="w-full md:w-3/5 flex flex-col gap-10">
            {description?.map((paragraph, index) => (
              <div key={index}>
                <p className="text-gray-600 text-base md:text-xl">{paragraph}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mx-auto max-w-3xl">
          {(isIngredients != null) && (
            <div className="mb-4">
              <h2 className="text-2xl font-bold">Ingredientes para la receta:</h2>
            </div>
          )}
          <ul className="grid grid-cols-1 gap-2">
            {(isIngredients != null) &&
              ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-center bg-[#FF0D48] rounded-lg shadow-lg p-4"
                >
                  <IngredientsList />
                  <p className="text-base text-white font-bold">{ingredient}</p>
                </li>
              ))
            }
          </ul>
        </section>
        <section className="my-20">
          {(isLink != null) && (
            <div>
              <h2 className="text-2xl text-center font-bold mb-3">{links.length > 1 ? 'Links:' : 'Link:'}</h2>
            </div>
          )}
          {(isLink != null) &&
            links.map((link, index) => (
              <div key={index} className="flex justify-center gap-5">
                <Link
                  to={link}
                  className="text-[#FF0D48] hover:text-[#e20048] font-medium"
                >
                  {link}
                </Link>
              </div>
            ))}
        </section>
      </article>
      {isModalOpen && <DeleteBlogModal
          id={_id}
          isModalOpen={isModalOpen}
          handleModalToggle={handleModalToggle}
        />
      }
      {isModalUpdateOpen && <UpdateBlogModal
          blog={blog}
          isModalUpdateOpen={isModalUpdateOpen}
          handleModalUpdateToggle={handleModalUpdateToggle}
        />
      }
    </>
  )
}
