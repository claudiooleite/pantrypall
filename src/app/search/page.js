"use client";

import { usePantry } from "../utilities/PantryContext";
import Recipes from "@/components/Recipes";
import { useState } from "react";

export default function Search() {
  const { pantry } = usePantry();
  const [activeItems, setActiveItems] = useState([]);

  const toggleItem = (id) => {
    setActiveItems((prevActiveItems) =>
      prevActiveItems.includes(id)
        ? prevActiveItems.filter((itemId) => itemId !== id)
        : [...prevActiveItems, id],
    );
  };

  const activePantryItems = pantry.filter((item) =>
    activeItems.includes(item.id),
  );

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="bg-orange-300 w-full h-44 p-4 flex flex-col justify-center items-center border-b-2 border-b-neutral-950 rounded-b-xl">
        <h1 className="text-2xl font-extrabold">
          Select Pantry Items for Today's Meal
        </h1>
      </div>
      <div className="flex flex-wrap justify-center mt-4">
        {pantry.map((item) => (
          <button
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={`m-2 px-4 py-2 border-2 border-neutral-950 rounded-full ${
              activeItems.includes(item.id)
                ? "bg-orange-600 text-black"
                : "bg-gray-100 text-black"
            }`}>
            {item.name}
          </button>
        ))}
      </div>
      <Recipes pantry={activePantryItems} />
    </main>
  );
}
