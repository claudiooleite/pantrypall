import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import RecipeCard from "./recipeCard/RecipeCard";

// API credentials
const KEY = "974f7f2b0bd545bbbd319a94fac1a359";
const APP_ID = "968644ec";
const URL = "https://api.edamam.com/api/recipes/v2";

function Recipes({ pantry }) {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  // Memoize pantry items
  const pantryItems = useMemo(
    () => pantry.map((item) => item.name).join(" "),
    [pantry],
  );

  // Fetch recipes when pantry items change
  useEffect(() => {
    if (pantryItems.trim() !== "") {
      getRecipes();
    } else {
      setRecipes([]); // Clear recipes if pantry is empty
    }
  }, [pantryItems]);

  const getRecipes = async () => {
    try {
      const query = encodeURIComponent(pantryItems);
      const urlConcat = `${URL}?type=public&q=${query}&app_id=${APP_ID}&app_key=${KEY}`;
      const response = await axios.get(urlConcat);
      setRecipes(response.data.hits);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setError("Failed to load recipes.");
    }
  };

  return (
    <div className="flex-1 pb-20"> {/* Adjust the padding-bottom here */}
      <h1 className="text-xl font-semibold my-4">Recipes</h1>
      {error && <p className="text-red-500">{error}</p>}
      {recipes.length === 0 && !error ? (
        <p>No recipes found based on your pantry items.</p>
      ) : (
        <ul className="flex flex-wrap justify-center">
          {recipes.slice(0, 4).map((recipe) => (
            <li key={recipe.recipe.uri} className="m-4">
              <RecipeCard
                image={recipe.recipe.image}
                label={recipe.recipe.label}
                mealType={recipe.recipe.mealType}
                calories={Math.round(recipe.recipe.calories)}
                id={recipe.recipe.uri.split("#")[1]}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Recipes;
