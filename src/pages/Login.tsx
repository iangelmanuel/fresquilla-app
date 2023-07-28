export default function Login (): JSX.Element {
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
              className="w-40 mx-auto mb-5"
            />
          </div>
          <div className="w-1/2">
            <form className="flex flex-col">
              <div className="mb-5">
                <label htmlFor="username" className="font-bold mb-5">Nombre de administrador</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  className="border-2 border-gray-300 rounded-lg p-2"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="username" className="font-bold mb-5">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  id="password"
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
