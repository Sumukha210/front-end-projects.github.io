import React, { createContext, useReducer, useEffect } from "react";
import ContextReducer from "../Reducers/ContextReducer";

export const DataContext = createContext();

export const DataContextProvider = (props) => {
  const [state, dispatch] = useReducer(ContextReducer, [], () =>
    localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(state));
  }, [state]);

  return (
    <DataContext.Provider value={[state, dispatch]}>
      {props.children}
    </DataContext.Provider>
  );
};
