import { useContext, createContext, useReducer } from 'react'
import AppReducer from './AppReducer.jsx'

const initialState = {
  transactions: []
}

export const Context = createContext(initialState)

export const useGlobalState = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('useGlobalState must be used within a GLobalState')
  }
  return context
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    AppReducer,
    initialState,
    /* fx para inicializar nuestro estado con localstorage */
  )

  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  const removeTransaction = (id) => {
    dispatch({
      type: 'REMOVE_TRANSACTION',
      payload: id
    })
  }

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        // operaciones: ej. addTransaction, removeTransaction, etc
        addTransaction,
        removeTransaction
      }}
    >
      {children}
    </Context.Provider>
  )
}