const reducer = (state, action) => {

  if (action.type === 'ADD_TRANSACTION') {
    // logica para transformar el estado(state)
    return {
      ...state,
      transactions: [action.payload, ...state.transactions]
    }
  }

  if (action.type === 'REMOVE_TRANSACTION') {
    const id = action.payload

    const newTransactions = state.transactions.filter(
      transaction => transaction.id !== id
    )

    return {
      ...state,
      transactions: newTransactions
    }
  }

  return state
}

export default reducer