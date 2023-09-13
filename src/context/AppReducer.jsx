const reducer = (state, action) => {

  if (action.type === 'ADD_TRANSACTION') {
    // logica para transformar el estado(state)
    return {
      ...state,
      transactions: [action.payload, ...state.transactions]
    }
  }

  return state
}

export default reducer