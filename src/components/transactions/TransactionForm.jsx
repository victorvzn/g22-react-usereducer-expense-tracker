const TransactionForm = () => {
  return (
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
  )
}

export default TransactionForm