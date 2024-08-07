"use client";

import { usePantry } from "../utilities/PantryContext";
import IngredientsInfo from "../components/IngredientsInfo";
import IngredientForm from "../components/IngredientsForm";

export default function Pantry() {
  const { pantry, addIngredient, removeIngredient } = usePantry();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <IngredientForm onAddIngredient={addIngredient} />
      <IngredientsInfo ingredients={pantry} onRemove={removeIngredient} />
    </main>
  );
}
