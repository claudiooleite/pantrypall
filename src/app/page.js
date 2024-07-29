"use client";

import { useState } from "react";

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

  function handleChange(e) {
    setItems(e.target.value);
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Add items</h1>
      <input value={items} onChange={handleChange} />
      <button className="bg-red-200" onClick={handleClick}>
        Add
      </button>
      <ul>
        {pantry.map((item) => (
          <li key={item.id}>{item.item}</li>
        ))}
      </ul>
    </main>
  );
}
