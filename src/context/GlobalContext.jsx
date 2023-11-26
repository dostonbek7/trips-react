import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  return (
    <GlobalContext.Provider value={{ count: 10 }}>
      {children}
    </GlobalContext.Provider>
  );
}
