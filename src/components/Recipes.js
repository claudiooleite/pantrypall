import axios from "axios";
import { useEffect, useState, useMemo, useCallback } from "react";
import RecipeCard from "./recipeCard/RecipeCard";
import { useRouter } from "next/navigation";

// API credentials
const KEY = "974f7f2b0bd545bbbd319a94fac1a359";
const APP_ID = "968644ec";
const URL = "https://api.edamam.com/api/recipes/v2";

function Recipes({ pantry }) {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Memoize pantry items to avoid unnecessary re-renders
  const pantryItems = useMemo(
    () => pantry.map((item) => item.name).join(" "),
    [pantry],
  );

  // Fetch recipes when pantry items change
  const getRecipes = useCallback(async () => {
    try {
      const query = encodeURIComponent(pantryItems);
      const urlConcat = `${URL}?type=public&q=${query}&app_id=${APP_ID}&app_key=${KEY}`;
      const response = await axios.get(urlConcat);
      console.log(response.data.hits);
      setRecipes(response.data.hits);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setError("Failed to load recipes.");
      setRecipes([]); // Clear recipes on error
    }
  }, [pantryItems]);

  useEffect(() => {
    if (pantryItems.trim()) {
      getRecipes();
    } else {
      setRecipes([]); // Clear recipes if pantry is empty
    }
  }, [pantryItems, getRecipes]);

  const handleClick = () => {
    router.push("/pantry"); // Navigates to the /pantry page
  };

  return (
    <div className="flex-1 pb-20">
      <h1 className="text-xl font-semibold my-4 text-center">Recipes</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {recipes.length === 0 && !error ? (
        <div className="text-center">
          <p>No recipes found based on your pantry items.</p>
          <p>
            Add them to your pantry
            <button
              onClick={handleClick}
              className="bg-slate-300 rounded-lg p-1 hover:bg-orange-400 ml-2">
              here.
            </button>
          </p>
        </div>
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
