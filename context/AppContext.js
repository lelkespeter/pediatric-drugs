import React, {createContext, useState} from "react";

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
  const [weight, setWeight] = useState("");
  const [pressed, setPressed] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const weightInputHandler = (enteredText) => {
    setWeight(enteredText);
  };

  const value = {
    weight,
    weightInputHandler,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
