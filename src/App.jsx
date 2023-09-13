function App() {
  return (
    <>
      <div className="bg-neutral-950 text-white h-screen flex justify-center items-center">
        <div className="w-2/5 bg-neutral-800 p-10 rounded-md w-full">
          <header className="text-4xl font-bold text-center my-5">
            Expense Tracker
          </header>
          <main className="flex flex-col md:flex-row">
            <section>
              Formulario de ingresos/egresos
            </section>
            <section>
              Estadisticas y la lista de ingresos/egresos
            </section>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
