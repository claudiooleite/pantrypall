"use client"

import { createContext, useContext, useState } from "react";

const PantryContext = createContext();

export const usePantry = () => {
  return useContext(PantryContext);
};

// Create the Pantry provider component
export const PantryProvider = ({ children }) => {
  const [pantry, setPantry] = useState([]);

  const addIngredient = (name) => {
    setPantry((prevPantry) => [
      ...prevPantry,
      {
        id: prevPantry.length + 1,
        name,
      },
    ]);
  };

  const removeIngredient = (id) => {
    setPantry((prevPantry) => prevPantry.filter((item) => item.id !== id));
  };

  return (
    <PantryContext.Provider value={{ pantry, addIngredient, removeIngredient }}>
      {children}
    </PantryContext.Provider>
  );
};
