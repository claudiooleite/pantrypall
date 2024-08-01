import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";

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
              <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                <Image
                  src={recipe.recipe.image}
                  alt="card-image"
                  width={150}
                  height={300}
                />
                <div class="p-6">
                  <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {recipe.recipe.label}
                  </h5>
                </div>
                <div class="p-6 pt-0">
                  <button
                    class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">
                    Read More
                  </button>
                </div>
              </div>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

export default Recipes;
