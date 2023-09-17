import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import useAuth from '../hook/useAuth'
import axiosClient from '../config/axiosClient'
import { emailValidation, passwordValidation } from '../validation/loginValidation'

export default function Login (): JSX.Element {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const { setAuth } = useAuth()
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token !== null && token !== undefined) {
      navigate('/admin')
    }
  }, [token, navigate])

  const onSubmit = handleSubmit(async ({ email, password }) => {
    try {
      const { data } = await axiosClient.post('/admin/login', { email, password })
      localStorage.setItem('token', data.token)
      setAuth(data)
      navigate('/admin')
    } catch (error) {
      console.log(error)
    }
    reset()
  })

  return (
    <main className="mt-10">
      <article className="flex gap-y-20 flex-col items-center">
        <section className="w-96">
          <h1 className="text-center text-4xl font-extrabold">
            Iniciar Sesión como <span className="text-[#FF0D48]">Administrador en Fresquilla</span>
          </h1>
        </section>

        <section className="bg-white px-14 py-10 rounded-lg shadow-xl space-y-10">
          <div className="md:flex md:items-center">
            <img
              src="/img/logoV2.JPG"
              alt="logo v2"
              className="w-60 h-60 object-cover"
            />
          </div>
          <div>
            <form onSubmit={onSubmit} noValidate>
              <div className="flex flex-col justify-center mb-6">
                <label htmlFor="email" className="font-bold">Correo</label>
                <input
                  type="email"
                  id="email"
                  {...register('email', emailValidation)}
                  placeholder="Email del administrador"
                  className="border-2 border-gray-300 rounded-lg shadow-lg p-2"
                />
                {(errors.email != null) && <span className="text-sm text-red-500">{errors.email?.message as string}</span>}
              </div>
              <div className="flex flex-col justify-center mb-6">
                <label htmlFor="username" className="font-bold">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  {...register('password', passwordValidation)}
                  placeholder="Contraseña del administrador"
                  className="w-full border-2 border-gray-300 rounded-lg shadow-lg p-2"
                />
                {(errors.password != null) && <span className="text-sm text-red-500">{errors.password?.message as string}</span>}
              </div>
              <div className="flex justify-end">
                <input
                  type="submit"
                  value="Iniciar Sesión"
                  className="w-full md:w-auto bg-[#FF0D48] text-white font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-[#FF0D48] hover:opacity-80 transition duration-300"
                />
              </div>
            </form>
          </div>
        </section>

        <section className="bg-red-300 border-l-8 border-red-500 p-5 rounded shadow-lg mb-20">
          <p className="text-lg text-center text-zinc-700 font-bold">
            ¡Si no eres propietario o una persona autorizada regresa a la <Link to="/" className="text-[#FF0D48] hover:underline">página principal!</Link>
          </p>
        </section>
      </article>
    </main>
  )
}
