import React, {useState, useEffect} from 'react'
const Context = React.createContext()


function ContextProvider({children}) {

    
    return (
        <Context.Provider
        // value={{photosArray, cartItems, toggleFavorite, addToCart, removeFromCart, emptyCart}}
        >
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}