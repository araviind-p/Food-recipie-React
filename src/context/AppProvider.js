import React, { createContext, useReducer } from 'react'

const DispatchContext = createContext()
const StateContext = createContext()

function AppProvider({ children }) {
    const initialState = {
        cartItems: [],
        cart_count: 0
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case "add_to_cart":
                return { ...state, cartItems: [...state.cartItems, action.payload], cart_count: state.cart_count + 1 }
            default: {
                return state
            }
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    )
}

export { AppProvider, DispatchContext, StateContext }