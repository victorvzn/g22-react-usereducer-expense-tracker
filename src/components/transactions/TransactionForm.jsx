import { useState } from "react"

const TransactionForm = () => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault();

    // Lógica para guardar las transacciones
    
    setDescription('')
    setAmount(0)
  }

  return (
    <form className="mt-6" onSubmit={handleSubmit}>
      <h4 className="text-white font-bold my-2">Transaction Form</h4>
      <input
        type="text"
        placeholder="Enter a description"
        className="bg-zinc-600 text-white px-3 py-2 rounded-md block mb-2 w-full"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        type="number"
        placeholder="0.00"
        step="0.01"
        className="bg-zinc-600 text-white px-3 py-2 rounded-md block mb-2 w-full"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />
      <button
        className="bg-indigo-700 text-white px-3 py-2 rounded-md block mv-2 w-full disabled:opacity-50"
      >
        Add Transaction
      </button>
    </form>
  )
}

export default TransactionForm