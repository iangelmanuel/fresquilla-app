import { useForm } from 'react-hook-form'
import useFresh from '../hook/useFresh'
import {
  nameValidation,
  emailValidation,
  phoneValidation,
  messageValidation
} from '../validation/publicFormsValidation'
import type { DataContacts } from '../interfaces/type'

export default function Form (): JSX.Element {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const { sendContactData } = useFresh()

  const onSubmit = handleSubmit(async ({ name, email, phone, message }) => {
    await sendContactData({ name, email, phone, message } as DataContacts)
    reset()
  })

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="bg-white shadow-xl rounded-lg px-8 py-5 pb-8 mb-4"
    >
      <h5 className="text-center text-xl font-bold mb-5">Comunicate con nosotros para dudas o realizar pedidos</h5>
      <section className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">Nombre</label>
        <input
          id="name"
          type="text"
          placeholder="Ej. Ricardo"
          {...register('name', nameValidation)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {(errors.name != null) && <span className="text-sm text-red-500">{errors.name?.message as string}</span>}
      </section>
      <section className="mb-4">
        <label className="block text-zinc-700 text-lg font-bold mb-2" htmlFor="email">Correo</label>
        <input
          id="email"
          type="email"
          placeholder="Ej. correo@correo.com"
          {...register('email', emailValidation)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {(errors.email != null) && <span className="text-sm text-red-500">{errors.email?.message as string}</span>}
      </section>
      <section className="mb-4">
        <label className="block text-zinc-700 text-lg font-bold mb-2" htmlFor="phone">Télefono</label>
        <input
          id="phone"
          type="phone"
          placeholder="Ej. +57 123 456 7890"
          {...register('phone', phoneValidation)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {(errors.phone != null) && <span className="text-sm text-red-500">{errors.phone?.message as string}</span>}
      </section>
      <section className="mb-4">
        <label className="block text-zinc-700 text-lg font-bold mb-2" htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          placeholder="Ej. Hola, me gustaría saber más sobre sus productos."
          {...register('message', messageValidation)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline h-32"
        />
        {(errors.message != null) && <span className="text-sm text-red-500">{errors.message?.message as string}</span>}
      </section>
      <section className="md:flex md:items-center md:justify-end">
        <input
          type="submit"
          value="Enviar"
          className="bg-[#FF0D48] hover:bg-[#e20048] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full md:w-auto cursor-pointer"
        />
      </section>
    </form>
  )
}
