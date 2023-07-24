export default function Footer (): JSX.Element {
  return (
    <footer className="w-full bg-gradient-to-r from-[#ff8297] via-[#F3133D] to-[#ff8297] p-5 relative bottom-0 left-0">
      <section className="text-center text-white font-bold">
        <h1>Todos los derechos de Fresquilla reservados {new Date().getFullYear()}</h1>
      </section>
    </footer>
  )
}
