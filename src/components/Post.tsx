import { Link } from 'react-router-dom'
import type { DataBlogs } from '../interfaces/type'
import { formatedDate } from '../helpers/formatedDate'

interface PostProps {
  blog: DataBlogs
}

export default function Post ({ blog }: PostProps): JSX.Element {
  const { title, ingredients, description, links, image, createdAt } = blog
  const isIngredients = ingredients?.length > 0
  const isLink = links?.length > 0
  const handleClick = (): void => {
    window.history.back()
  }
  console.log(links)
  return (
    <article className="bg-zinc-100 shadow-lg rounded-lg p-8 mx-auto mb-20 space-y-5 max-w-3xl">

      <section className="flex justify-between items-center">
        <button
          onClick={handleClick}
          className="bg-[#FF0D48] hover:bg-[#e20048] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full md:w-auto cursor-pointer"
          >Volver</button>
        <p className="text-end text-gray-500 text-sm">{formatedDate(createdAt)}</p>
      </section>

      <section>
        {isIngredients && (
          <div className="my-10">
            <h2 className="text-2xl font-bold">Ingredientes</h2>
            <ul className="list-disc list-inside space-y-2">
                <li>{ingredients}</li>
            </ul>
          </div>
        )}
      </section>

      <section className="my-10 space-y-5">
        <p className="text-gray-500 text-sm">{description}</p>
      </section>

      <section className="my-10">
        {isLink && (
          <div className="my-10">
            <h2 className="text-2xl font-bold">Links:</h2>
            <Link
              to={links}
              className="text-[#FF0D48] text-sm hover:underline"
            >{links}</Link>
          </div>
        )}
      </section>

      <section className="flex justify-center my-10">
        <img
          src={image}
          alt={`Imagen de ${title}`}
          className="w-auto h-96 object-cover"
        />
      </section>
    </article>
  )
}
