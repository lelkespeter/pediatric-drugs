import React, {createContext, useState} from "react";

const AppContext = createContext({
  weight: "",
  setPressed: () => {},
  pressed: false,
  setWeight: () => {},
});

export const AppContextProvider = ({children}) => {
  const [weight, setWeight] = useState("");
  const [pressed, setPressed] = useState(false);

  return (
    <AppContext.Provider value={{weight, setWeight, pressed, setPressed}}>
      {children}
    </AppContext.Provider>
  );
};
