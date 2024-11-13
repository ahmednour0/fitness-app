import React, { createContext, useState } from "react";
const FitnessItems = createContext();
const FitnessContext = ({ children }) => {
  const [completed, setcompleted] = useState([]);
  const [workout, setworkout] = useState(0);
  const [colories, setcolories] = useState(0);
  const [minutes, setminutes] = useState(0);

  return (
    <FitnessItems.Provider
      value={{
        completed,
        setcompleted,
        workout,
        setworkout,
        colories,
        setcolories,
        minutes,
        setminutes,
      }}
    >
      {children}
    </FitnessItems.Provider>
  );
};
export {FitnessContext,FitnessItems}