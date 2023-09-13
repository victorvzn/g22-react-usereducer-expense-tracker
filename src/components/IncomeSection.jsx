import { useGlobalState } from "../context/GlobalState"

const IncomeSection = () => {
  const { transactions } = useGlobalState()

  const amounts = transactions.map(transaction => transaction.amount)

  const incomes = amounts
    .filter(amount => amount > 0)
    .reduce((acc, amount) => (acc += amount), 0)
    .toFixed(2)

  return (
    <div className="flex justify-between my-2">
      <h4 className="font-semibold text-green-700">Income</h4>
      <p className="font-semibold text-green-700">S/ {incomes}</p>
    </div>
  )
}

export default IncomeSection