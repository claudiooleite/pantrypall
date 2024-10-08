"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "@/components/recipeCard/RecipeCard";

// API credentials
const API_KEY = "974f7f2b0bd545bbbd319a94fac1a359";
const APP_ID = "968644ec";
const URL = "https://api.edamam.com/api/recipes/v2";

// Function to fetch random recipes
const fetchRandomRecipes = async (query) => {
  try {
    const response = await axios.get(
      `${URL}?type=public&q=${encodeURIComponent(
        query,
      )}&app_id=${APP_ID}&app_key=${API_KEY}&random=true`,
    );
    return response.data.hits;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};

// Main Home component
export default function Home() {
  const [recipes, setRecipes] = useState([]);

  // Load recipes from local storage if available
  useEffect(() => {
    const savedRecipes = localStorage.getItem("recipes");
    if (savedRecipes) {
      setRecipes(JSON.parse(savedRecipes));
    } else {
      loadRecipes();
    }
  }, []);

  // Fetch new recipes if none exist in local storage
  const loadRecipes = async () => {
    const query = "random"; // set a specific query here if needed
    const data = await fetchRandomRecipes(query);
    setRecipes(data);
    localStorage.setItem("recipes", JSON.stringify(data)); // Save recipes to local storage
  };

  // Optional: Button to manually fetch new recipes
  // const handleFetchNewRecipes = () => {
  //   localStorage.removeItem('recipes'); // Clear local storage
  //   loadRecipes(); // Fetch new recipes
  // };

  return (
    <main className="flex min-h-screen flex-col items-center pb-20">
      <div className="bg-orange-300 w-full h-52 p-4 justify-center flex flex-col items-center border-b-2 border-b-neutral-950 rounded-b-xl">
        <h1 className=" text-h1 ">
          Welcome to Pantry Pall
        </h1>
        {/* <button onClick={handleFetchNewRecipes} className="mt-4 p-2 bg-orange-500 text-white rounded">
          Fetch New Recipes
        </button> */}
      </div>
      <div className="p-4 w-full flex flex-col -m-24 items-center">
        <h2 className="text-xl font-semibold -mb-2 ">
          Recommended Meals for Today
        </h2>
        <div className="flex flex-wrap justify-center mb-16">
          {recipes.slice(0, 8).map((recipe, index) => (
            <RecipeCard
              key={index}
              image={recipe.recipe.image}
              label={recipe.recipe.label}
              mealType={recipe.recipe.mealType}
              calories={Math.round(recipe.recipe.calories)}
              id={recipe.recipe.uri.split("#")[1]}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
