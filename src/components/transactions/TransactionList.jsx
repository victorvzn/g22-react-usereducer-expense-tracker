import { useGlobalState } from "../../context/GlobalState"

import { TbTrash } from "react-icons/tb"

const TransactionList = () => {
  const { transactions, removeTransaction } = useGlobalState()

  if (transactions.length === 0) {
    return (
      <div className="bg-zinc-900 p-4 my-2 rounded-md">
        <div className="h-full flex items-center justify-center w-full flex-col">
          <h1 className="text-2xl font-semibold my-2">There are no transactions</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-zinc-900 p-4 my-2 rounded-md">
      <div className="h-full flex items-center justify-center w-full flex-col">
        <h1 className="text-2xl font-semibold my-2">History</h1>

        {/* {JSON.stringify(transactions)} */}

        <ul className="w-full">
          {transactions.map(transaction => {
            const sign = transaction.amount < 0 ? '-' : '+'

            return (
              <li
                key={transaction.id}
                className={`bg-zinc-600 text-white px-3 py-1 rounded-md mb-2 w-full flex justify-between items-center ${transaction.amount < 0 ? 'bg-red-700': 'bg-green-700' }`}
              >
                {transaction.description}
                <div className="flex items-center">
                  <span>
                    {sign} S/ {Math.abs(transaction.amount)}
                  </span>
                  <button
                    className="font-bold rounded-md ml-2"
                    onClick={() => removeTransaction(transaction.id)}
                  >
                    <TbTrash />
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default TransactionList