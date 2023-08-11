import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useFresh from '../hook/useFresh'
import useAuth from '../hook/useAuth'
import axiosClient from '../config/axiosClient'
import Alert from '../components/Alert'
import axios, { type AxiosError } from 'axios'

interface ApiError {
  message?: string
}

export default function Login (): JSX.Element {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { alert, setAlert } = useFresh()
  const { setAuth } = useAuth()
  const navigate = useNavigate()

  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token !== null && token !== undefined) {
      navigate('/admin')
    }
  }, [token, navigate])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

    if ([email, password].includes('')) {
      setAlert({ error: true, msg: 'Todos los campos son obligatorios' })
      return
    }

    if (!validEmail.test(email)) {
      setAlert({ error: true, msg: 'El correo no es válido' })
      return
    }

    setAlert({ error: false, msg: '' })
    setEmail('')
    setPassword('')

    try {
      const { data } = await axiosClient.post('/admin/login', { email, password })
      localStorage.setItem('token', data.token)
      setAuth(data)
      navigate('/admin')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ApiError>
        setAlert({ error: true, msg: axiosError?.response?.data?.message ?? 'Error desconocido' })
        console.log(error)
      }
    }
  }

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value)
  }

  return (
    <main>
      <article className="flex gap-5 flex-col items-center mt-5 md:mt-10">
        <section className="bg-red-300 border-l-8 border-red-500 p-5 rounded shadow-lg">
          <p className="text-lg text-center text-zinc-700 font-bold">¡Si no eres propietario o una persona autorizada regresa a la página principal!</p>
        </section>
        <section className="w-96">
          <h1 className="text-center text-4xl font-extrabold">Iniciar Sesión como{' '}
            <span className="text-[#FF0D48]">Administrador en Fresquilla</span>
          </h1>
        </section>

        <section className="flex gap-5 flex-col md:flex-row items-center bg-gray-100 p-2 py-20 md:py-10 md:p-10 rounded-lg shadow-lg">
          <div className="w-1/2">
            <img
              src="/public/img/logo.png"
              alt="Logo Fresquilla"
              className="w-48 mx-auto mb-5"
            />
          </div>
          <div className="w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col" noValidate>
              {alert.error && <Alert />}
              <div className="mb-5">
                <label htmlFor="email" className="font-bold mb-5">Correo</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleChangeEmail}
                  placeholder="Email del administrador"
                  className="border-2 border-gray-300 rounded-lg p-2"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="username" className="font-bold mb-5">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handleChangePassword}
                  placeholder="Password"
                  className="border-2 border-gray-300 rounded-lg p-2"
                />
              </div>

              <div className="flex justify-end">
                <input
                  type="submit"
                  value="Login"
                  className="w-full md:w-auto bg-[#FF0D48] text-white font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-[#FF0D48] hover:opacity-80 transition duration-300"
                />
              </div>
            </form>
          </div>
        </section>
      </article>
    </main>
  )
}
