import { createContext, useReducer } from "react";

export const themecontext = createContext();

const initialState = { darkmode: false };

const themereducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { darkmode: !state.darkmode };
    default:
      return state;
  }
};

export const Themeprovider = (props) => {
  const [state, dispatch] = useReducer(themereducer, initialState);
  return (
    <themecontext.Provider value={{ state, dispatch }}>
      {props.children}
    </themecontext.Provider>
  );
};
