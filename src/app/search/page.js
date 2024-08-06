"use client";

import { usePantry } from "../utilities/PantryContext";
import Recipes from "../components/recipes";

export default function Search() {
  const { pantry } = usePantry();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="bg-orange-300 w-full h-44 p-4 flex flex-col items-center border-b-2 border-b-neutral-950 rounded-b-xl">
        <Recipes pantry={pantry} />
      </div>
    </main>
  );
}
