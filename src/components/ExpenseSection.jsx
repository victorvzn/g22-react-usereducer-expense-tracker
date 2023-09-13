import { useGlobalState } from "../context/GlobalState"

const ExpenseSection = () => {
  const { transactions } = useGlobalState()

  const amounts = transactions.map(transaction => transaction.amount)
  
  const expenses = amounts
    .filter(amount => amount < 0)
    .reduce((acc, amount) => (acc += amount), 0)
    .toFixed(2)

  return (
    <div className="flex justify-between my-2">
      <h4 className="font-semibold text-red-700">Expense</h4>
      <p className="font-semibold text-red-700">S/ {expenses}</p>
    </div>
  )
}

export default ExpenseSection