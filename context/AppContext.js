import React, {createContext, useState} from "react";
import {DRUGS} from "../constants/data";
import DrugDetails from "../components/DrugDetails";

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
  const [weight, setWeight] = useState("");
  const [pressed, setPressed] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [selected, setSelected] = useState([]);

  const weightInputHandler = (enteredText) => {
    setWeight(enteredText);
  };
  const onAddSelected = (drugId) => {
    const drug = DRUGS.find((lm) => lm.drugId === drugId);
    setSelected((prevSelected) => [...prevSelected, drug]);
  };

  const value = {
    weight,
    weightInputHandler,
    onAddSelected,
    selected,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
