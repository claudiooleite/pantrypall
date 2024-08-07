"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

// API credentials
const API_KEY = "974f7f2b0bd545bbbd319a94fac1a359";
const APP_ID = "968644ec";
const URL = "https://api.edamam.com/api/recipes/v2/";

const RecipeDetailPage = ({ params }) => {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const { id } = params; // Extracting id from params

  useEffect(() => {
    if (id) {
      fetchRecipeDetails();
    }
  }, [id]);

  const fetchRecipeDetails = async () => {
    try {
      const response = await axios.get(
        `${URL}${id}?type=public&app_id=${APP_ID}&app_key=${API_KEY}`
      );
      setRecipe(response.data.recipe);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
      setError("Failed to load recipe details.");
    }
  };

  if (error) return <p className="text-red-500">{error}</p>;
  if (!recipe) return <p>Loading...</p>;

  const nutrition = recipe.nutrition || {}; // Ensure nutrition is defined
  const calories = nutrition.calories ? Math.round(nutrition.calories) : "N/A"; // Handle undefined calories

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <div className="relative w-full h-80 border-2 border-neutral-950 rounded-lg overflow-hidden mb-4">
        <Image
          src={recipe.image}
          alt={recipe.label}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4">{recipe.label}</h1>
      <p className="text-lg mb-4">Total Time: {recipe.totalTime} minutes</p>
      <div className="w-full max-w-4xl">
        <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
        <ul className="list-disc list-inside pl-4 mb-4">
          {recipe.ingredientLines.map((ingredient, index) => (
            <li key={index} className="text-sm text-gray-700">
              {ingredient}
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mb-2">Preparation Steps:</h2>
        <ol className="list-decimal list-inside pl-4 mb-4">
          {recipe.instructions &&
            recipe.instructions.split(". ").map((step, index) => (
              <li key={index} className="text-sm text-gray-700">
                {step}
              </li>
            ))}
        </ol>
        <h2 className="text-xl font-semibold mb-2">Nutritional Information:</h2>
        <ul className="text-sm text-gray-700 mb-4">
          <li>Calories: {calories} kcal</li>
          <li>Protein: {nutrition.protein || "N/A"} g</li>
          <li>Fat: {nutrition.fat || "N/A"} g</li>
          <li>Carbs: {nutrition.carbs || "N/A"} g</li>
          {/* Add more nutritional details if needed */}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetailPage;
