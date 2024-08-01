import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = "40112806b64e492c80aff131c766c65f";
const URL = "https://api.spoonacular.com/food/ingredients/search";

function IngredientsInfo({ ingredients, onRemove }) {
  function handleClickRemove(id) {
    onRemove(id); // Remove from pantry
  }

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Ingredients</h1>
      <ul className="space-y-4">
        {ingredients.map((ingredient) => (
          <li
            key={ingredient.id}
            className="flex items-center space-x-4 p-2 bg-gray-100 rounded-md shadow-sm">
            <div className="flex-1">
              <h2 className="text-lg font-semibold capitalize">
                {ingredient.name}
              </h2>
            </div>
            <button
              onClick={() => handleClickRemove(ingredient.id)}
              className="text-red-600 hover:text-red-800">
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientsInfo;
