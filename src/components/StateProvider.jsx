import React, { createContext, useReducer, useContext } from "react";
import App from "../App"
//create context:
export const StateContext = createContext();
//provider
export const StateProvider = ({initialState,reducer}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
    <App />
   </StateContext.Provider>
)
//consumer
export const Consumer = () => useContext(StateContext); 