"use client";

import { createContext, useContext, useState } from "react";

const PantryContext = createContext();

export const usePantry = () => {
  return useContext(PantryContext);
};

// Create the Pantry provider component
export const PantryProvider = ({ children }) => {
  // Initial pantry items for development
  const initialPantry = [
    { id: 1, name: "tomato" },
    { id: 2, name: "onion" },
    { id: 3, name: "garlic" },
    { id: 4, name: "olive oil" },
  ];

  const [pantry, setPantry] = useState([...initialPantry]);

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
