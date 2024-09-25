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

  // Clear localStorage and fetch new recipes on page load (reload)
  useEffect(() => {
    if (performance.navigation.type === 1) {
      // Check if page is reloaded
      localStorage.removeItem("recipes"); // Clear stored recipes on reload
    }
    const savedRecipes = localStorage.getItem("recipes");
    if (savedRecipes) {
      setRecipes(JSON.parse(savedRecipes)); // Load recipes from localStorage
    } else {
      loadRecipes(); // Fetch new recipes if none found
    }
  }, []);

  // Fetch new recipes and store them in localStorage
  const loadRecipes = async () => {
    const query = "random";
    const data = await fetchRandomRecipes(query);
    setRecipes(data);
    localStorage.setItem("recipes", JSON.stringify(data)); // Save fetched recipes
  };

  return (
    <main className="flex min-h-screen flex-col items-center pb-20">
      <div className="bg-salmon w-full h-52 p-4 justify-center flex flex-col items-center border-b-2 border-b-neutral-950 rounded-b-xl">
        <h1 className="text-2xl font-extrabold">come to Pantry Pall</h1>
      </div>
      <div className="p-4 w-full flex flex-col -m-24 items-center">
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
