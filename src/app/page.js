"use client";

import { useState } from "react";
import Recipes from "./components/Recipes";
import IngredientsInfo from "./components/IngredientsInfo";
import IngredientForm from "./components/IngredientsForm";

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
      <div className="bg-orange-300 w-full h-44 p-4 flex flex-col items-center border-b-2 border-b-neutral-950 rounded-b-xl">
        <h1 className="text-lg font-semibold">Welcome</h1>
      </div>
    </main>
  );
}
