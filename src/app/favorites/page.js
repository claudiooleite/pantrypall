"use client";

import { useState } from "react";
import axios from "axios";
import RecipeCard from "../components/recipeCard/RecipeCard";

// Diet labels
const dietLabels = [
  { name: "Balanced", value: "balanced" },
  { name: "High-Fiber", value: "high-fiber" },
  { name: "High-Protein", value: "high-protein" },
  { name: "Low-Carb", value: "low-carb" },
  { name: "Low-Fat", value: "low-fat" },
];

// API credentials
const KEY = "974f7f2b0bd545bbbd319a94fac1a359";
const APP_ID = "968644ec";
const URL = "https://api.edamam.com/api/recipes/v2";

const Favorites = () => {
  const [selectedLabel, setSelectedLabel] = useState(null);
  const [recipes, setRecipes] = useState([]);

  const handleSelectLabel = (label) => {
    setSelectedLabel(label);
    fetchRecipes(label);
  };

  const fetchRecipes = (label) => {
    const query = encodeURIComponent(label);
    const urlConcat = `${URL}?type=public&diet=${query}&app_id=${APP_ID}&app_key=${KEY}`;

    axios
      .get(urlConcat)
      .then((response) => setRecipes(response.data.hits))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="bg-orange-300 w-full h-44 p-4 flex flex-col items-center border-b-2 border-b-neutral-950 rounded-b-xl">
        <h1 className="text-lg font-semibold mb-4">Select a Diet Label</h1>
        <div className="flex flex-wrap justify-center mb-4">
          {dietLabels.map((item) => (
            <button
              key={item.value}
              onClick={() => handleSelectLabel(item.value)}
              className={`m-2 px-4 py-2 border-2 border-neutral-950 rounded-full ${
                selectedLabel === item.value
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-black"
              }`}>
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full pb-20">
        <h2 className="text-lg font-semibold mb-4">Recipes</h2>
        <div className="flex flex-wrap justify-center">
          {recipes.slice(0, 4).map((recipe, index) => (
            <RecipeCard
              key={index}
              image={recipe.recipe.image}
              label={recipe.recipe.label}
              mealType={recipe.recipe.mealType}
              calories={Math.round(recipe.recipe.calories)}
              id={recipe.recipe.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorites;
