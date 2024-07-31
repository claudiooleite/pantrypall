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

  function handleClickRemove(id) {
    setPantry(pantry.filter((i) => i.id !== id));
  }
  // list items in the pantry
  function mapPantryItems() {
    return pantry.map((item) => (
      <>
        <li key={item.id}>{item.item}</li>
        <button onClick={() => handleClickRemove(item.id)}>delete</button>
      </>
    ));
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Add items</h1>
      <input value={items} onChange={handleChange} />
      <button className="bg-red-200" onClick={handleClick}>
        Add
      </button>
      <ul>{mapPantryItems()}</ul>
      <Recipes pantry={pantry} />
    </main>
  );
}
