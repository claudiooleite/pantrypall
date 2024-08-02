import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import RecipeCard from "./recipeCard/recipeCard";

// Website credentials
const KEY = "974f7f2b0bd545bbbd319a94fac1a359";
const APP_ID = "968644ec";
const URL = "https://api.edamam.com/api/recipes/v2";

function Recipes({ pantry }) {
  const [recipes, setRecipes] = useState([]);

  const pantryItems = useMemo(
    () => pantry.map((item) => item.name).join(" "),
    [pantry],
  );

  // Fetch recipes when pantry items change
  useEffect(() => {
    if (pantryItems || !pantry.length) {
      getRecipes();
    }
  }, [pantryItems, pantry.length]);

  function getRecipes() {
    const query = encodeURIComponent(pantryItems);
    const urlConcat = `${URL}?type=public&q=${query}&app_id=${APP_ID}&app_key=${KEY}`;

    axios
      .get(urlConcat)
      .then((response) => setRecipes(response.data.hits))
      .catch((error) => console.error(error));
  }

  return (
    <>
      <h1>Recipes</h1>
      <ul>
        {recipes.slice(0, 4).map((recipe, index) => (
          <>
            <li key={index}>
              <RecipeCard image={recipe.recipe.image} label={recipe.recipe.label} />
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

export default Recipes;
