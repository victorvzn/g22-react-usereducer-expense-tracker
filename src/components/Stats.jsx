import { TbChartPieFilled } from "react-icons/tb";
import { useGlobalState } from "../context/GlobalState";
import { VictoryPie, VictoryLabel } from "victory";

const Stats = () => {
  const { transactions } = useGlobalState()

  if (transactions.length === 0) {
    return (
      <div className="bg-zinc-900 p-4 my-2 rounded-md">
        <div className="h-full flex items-center justify-center w-full flex-col">
          <TbChartPieFilled className="text-6xl" />
          <h1 className="text-2xl font-semibold my-2">No data yet</h1>
        </div>
      </div>
    )
  }

  const totalIncomes = transactions
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0)
  
  const totalExpenses = transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1
  
    
  const expensesPercentage = Math.round((totalExpenses / totalIncomes) * 100)
  const incomesPercentage = 100 - (expensesPercentage)

  console.log(expensesPercentage, incomesPercentage)

  return (
    <div className="bg-zinc-900 p-4 my-2 rounded-md">
      <div className="h-full flex items-center justify-center w-full flex-col">
        <VictoryPie
          colorScale={['#e74c3c', '#2ecc71']}
          data={[
            { x: 'Expenses', y: expensesPercentage },
            { x: 'Incomes', y: incomesPercentage },
          ]}
          animate={{ duration: 2000 }}
          label={({ datum }) => datum.y }
          labelComponent={
            <VictoryLabel
              angle={45}
              style={{ fill: "white" }}
            /> 
          }
        />
      </div>
    </div>
  )
}

export default Stats