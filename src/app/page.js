"use client";

import { useState } from "react";

import Recipes from "./recipes";

let nextId = 0;
export default function Home() {
  const [items, setItems] = useState("");
  const [pantry, setPantry] = useState([]);

  function handleClick() {
    setPantry([
      ...pantry,
      {
        id: nextId++,
        item: items,
      },
    ]);
    setItems("");
  }

  // handle items to add to pantry
  function handleChange(e) {
    setItems(e.target.value);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }

  function handleClickRemove(id) {
    setPantry(pantry.filter((i) => i.id !== id));
  }
  // list items in the pantry
  function mapPantryItems() {
    return pantry.map((item) => (
      <div key={item.id} className="flex items-center space-x-2">
        <li className="capitalize">{item.item}</li>
        <button
          onClick={() => handleClickRemove(item.id)}
          className="text-red-600">
          delete
        </button>
      </div>
    ));
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="bg-orange-300 w-full h-44 p-4 flex flex-col items-center">
        <h1 className="text-lg font-semibold">
          What do you have in your pantry?
        </h1>
        <div className="relative mt-4 flex items-center">
          <span
            className="material-icons-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={handleClick}>
            add
          </span>
          <input
            value={items}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add an item"
          />
        </div>
      </div>
      <ul className="mt-4 space-y-2">{mapPantryItems()}</ul>
      <Recipes pantry={pantry} />
    </main>
  );
}
