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
        `${URL}${id}?type=public&app_id=${APP_ID}&app_key=${API_KEY}`,
      );
      setRecipe(response.data.recipe);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
      setError("Failed to load recipe details.");
    }
  };

  if (error) return <p className="text-red-500">{error}</p>;
  if (!recipe) return <p>Loading...</p>;

  const protein = recipe.totalNutrients.PROCNT?.quantity
    ? Math.round(recipe.totalNutrients.PROCNT?.quantity)
    : "N/A";
  const fat = recipe.totalNutrients.FAT?.quantity
    ? Math.round(recipe.totalNutrients.FAT?.quantity)
    : "N/A";
  const carbs = recipe.totalNutrients.CHOCDF?.quantity
    ? Math.round(recipe.totalNutrients.CHOCDF?.quantity)
    : "N/A";
  const calories = recipe.calories ? Math.round(recipe.calories) : "N/A"; // Handle undefined calories

  return (
    <>
      <div className="relative w-full h-80 ">
        <Image
          src={recipe.image}
          alt={recipe.label}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="min-h-screen flex flex-col items-center pb-20 p-4 relative -mt-20">
        <h1 className="text-2xl text-center p-1 font-bold bg-orange-300  m-4 border-2 border-neutral-950 rounded-xl ">
          {recipe.label}
        </h1>
        <p className="text-lg mb-4 p-1  border-2 border-neutral-950 rounded-xl ">
          Total Time: {recipe.totalTime} minutes
        </p>
        <div className="w-full max-w-4xl">
          <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
          <ul className="list-inside p-4 mb-4 border-2 border-neutral-950 rounded-xl">
            {recipe.ingredientLines.map((ingredient, index) => (
              <li
                key={index}
                className="text-sm text-gray-700 pt-1 border-b-2 border-b-zinc-600 ">
                {ingredient}
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-2">Preparation Steps:</h2>
          {recipe.url ? (
            <a
              href={recipe.url} // Use the instructions URL
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security measure for external links
              className="inline-block my-2 px-4 py-2 bg-orange-300 rounded-md hover:bg-blue-600">
              View Full Instructions
            </a>
          ) : (
            <p>No instructions available.</p>
          )}

          <h2 className="text-xl font-semibold mb-2">
            Nutritional Information:
          </h2>
          <ul className="text-sm text-gray-700 mb-4">
            <li className="border-b-2 border-b-zinc-600">Calories: {calories} kcal</li>
            <li className="border-b-2 border-b-zinc-600">Protein: {protein || "N/A"} g</li>
            <li className="border-b-2 border-b-zinc-600">Fat: {fat || "N/A"} g</li>
            <li className="border-b-2 border-b-zinc-600">Carbs: {carbs || "N/A"} g</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RecipeDetailPage;
