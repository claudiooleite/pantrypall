import axios from "axios";
import { useEffect, useState } from "react";

// website credentials
const KEY = "974f7f2b0bd545bbbd319a94fac1a359";
const APP_ID = "968644ec";
const URL = "https://api.edamam.com/api/recipes/v2";

// test word - to change to active search
// const searchTest = "chicken";
// const urlConcat = `${URL}?type=public&q=${searchTest}&app_id=${APP_ID}&app_key=${KEY}`;

function Recipes({ pantry }) {
  const [recipes, setRecipes] = useState([]);

  const pantryItems = pantry.map((item) => item.item).join(" ");
  // render updated items and correspondent recipes
  useEffect(() => {
    if (pantryItems) {
      getRecipes();
    }
  }, [pantryItems]);

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
          <li key={index}>Title: {recipe.recipe.label}</li>
        ))}
      </ul>
    </>
  );
}

export default Recipes;
