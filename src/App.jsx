function App() {
  return (
    <>
      <div className="bg-neutral-950 text-white h-screen flex justify-center items-center">
        <div className="w-full md:w-2/5 bg-neutral-800 p-10 m-5 md:m-0 rounded-md">
          <header className="text-4xl font-bold text-center my-5">
            Expense Tracker
          </header>
          <main className="flex flex-col md:flex-row gap-4">
            <section className="flex-1">
              <div className="flex justify-between my-2">
                <h4 className="font-semibold text-green-500">Income</h4>
                <p className="font-semibold text-green-500">S/ 0.00</p>
              </div>
              <div className="flex justify-between my-2">
                <h4 className="font-semibold text-red-500">Expense</h4>
                <p className="font-semibold text-red-500">S/ 0.00</p>
              </div>
              <div className="flex justify-between items-center my-2">
                <h4 className="text-slate-400 font-bold">Your Balance</h4>
                <p className="text-2xl font-bold text-slate-400">S/ 0.00</p>
              </div>

              <form className="mt-6">
                <h4 className="text-white font-bold my-2">Transaction Form</h4>
                <input
                  type="text"
                  placeholder="Enter a description"
                  className="bg-zinc-600 text-white px-3 py-2 rounded-md block mb-2 w-full"
                />
                <input
                  type="number"
                  placeholder="0.00"
                  step="0.01"
                  className="bg-zinc-600 text-white px-3 py-2 rounded-md block mb-2 w-full"
                />
                <button
                  className="bg-indigo-700 text-white px-3 py-2 rounded-md block mv-2 w-full disabled:opacity-50"
                >
                  Add Transaction
                </button>
              </form>
            </section>
            <section className="flex-1 ">
              <div className="py-4">Estadisticas</div>
              <div className="py-4">lista de ingresos/egresos</div>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
