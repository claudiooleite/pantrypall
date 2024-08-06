"use client";

import { useState } from "react";
import Recipes from "./components/recipes";
import IngredientsInfo from "./components/ingredientsInfo";
import IngredientForm from "./components/ingredientsForm";
import Navbar from "./components/navbar";

export default function Home() {
  const [pantry, setPantry] = useState([]); //manages state of ingredients in the pantry

  const handleAddIngredient = (ingredientName) => {
    setPantry([...pantry, { id: Date.now(), name: ingredientName }]);
  };

  const handleRemove = (id) => {
    setPantry(pantry.filter((item) => item.id !== id));
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      {console.log("Pantry:", pantry)}
      <IngredientForm onAddIngredient={handleAddIngredient} />
      <IngredientsInfo ingredients={pantry} onRemove={handleRemove} />
      <Recipes pantry={pantry} />
      <Navbar />
    </main>
  );
}
