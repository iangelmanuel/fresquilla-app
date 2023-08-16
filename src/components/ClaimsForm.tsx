import { useForm } from 'react-hook-form'
import useFresh from '../hook/useFresh'
import { PROBLEMCASES } from '../data/problemCases'
import {
  problemValidation,
  nameValidation,
  emailValidation,
  phoneValidation,
  messageValidation
} from '../validation/publicFormsValidation'
import type { DataClaims } from '../interfaces/type'

export default function ClaimsForm (): JSX.Element {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const { sendClaimsData } = useFresh()

  const onSubmit = handleSubmit(async ({ problem, name, email, phone, message }) => {
    await sendClaimsData({ problem, name, email, phone, message } as DataClaims)
    reset()
  })

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="bg-white shadow-xl rounded-lg px-8 py-5 pb-8 mb-4"
    >
      <h5 className="text-center text-xl font-bold mb-5">Quejas y Reclamos</h5>
      <section className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="problem">¿De qué tipo es tu inconveniente?</label>
        <select
          id="problem"
          placeholder="Ej. Ricardo"
          {...register('problem', problemValidation)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Seleccione</option>
          {PROBLEMCASES.map(problem => (
            <option
              key={problem.id}
              value={problem.text}
            >{problem.text}</option>
          ))}
        </select>
        {(errors.problem != null) && <span className="text-sm text-red-500">{errors.problem?.message as string}</span>}
      </section>
      <section className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">Nombre</label>
        <input
          id="text"
          type="name"
          placeholder="Ej. Maria Alejandra"
          {...register('name', nameValidation)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {(errors.name != null) && <span className="text-sm text-red-500">{errors.name?.message as string}</span>}
      </section>
      <section className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">Correo</label>
        <input
          id="email"
          type="email"
          placeholder="Ej. correo@correo.com"
          {...register('email', emailValidation)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {(errors.email != null) && <span className="text-sm text-red-500">{errors.email?.message as string}</span>}
      </section>
      <section className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="phone">Télefono</label>
        <input
          id="phone"
          type="phone"
          placeholder="Ej. +57 123 456 7890"
          {...register('phone', phoneValidation)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {(errors.phone != null) && <span className="text-sm text-red-500">{errors.phone?.message as string}</span>}
      </section>
      <section className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="message">Descripción del problema</label>
        <textarea
          id="message"
          placeholder="Ej. Hola, tuve un problema con el envio..."
          {...register('message', messageValidation)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
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
