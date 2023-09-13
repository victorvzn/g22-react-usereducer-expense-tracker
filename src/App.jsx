import Header from "./components/Header";
import IncomeSection from "./components/IncomeSection";
import ExpenseSection from "./components/ExpenseSection";
import BalanceSection from "./components/BalanceSection";
import TransactionForm from "./components/transactions/TransactionForm";
import Stats from "./components/Stats";
import TransactionList from "./components/transactions/TransactionList";

function App() {
  return (
    <>
      <div className="bg-neutral-950 text-white h-screen flex justify-center items-center">
        <div className="w-full md:w-2/5 bg-neutral-800 p-10 m-5 md:m-0 rounded-md">
          <Header />
          <main className="flex flex-col md:flex-row gap-4">
            <section className="flex-1">
              <IncomeSection />
              <ExpenseSection />
              <BalanceSection />

              <TransactionForm />
            </section>

            <section className="flex-1 flex flex-col">
              <Stats />

              <TransactionList />
            </section>

          </main>
        </div>
      </div>
    </>
  )
}

export default App
