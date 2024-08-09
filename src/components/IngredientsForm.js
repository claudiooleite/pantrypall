import { useState } from "react";


function IngredientForm({ onAddIngredient }) {
  const [ingredientName, setIngredientName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ingredientName.trim() !== "") {
      onAddIngredient(ingredientName);
      setIngredientName("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-orange-300 w-full h-44 p-4 flex justify-center flex-col items-center border-b-2 border-b-neutral-950 rounded-b-xl">
      <h1 className="text-2xl font-extrabold">
        What do you have in your pantry?
      </h1>
      <div className="relative mt-4 flex items-center">
        <span
          type="submit"
          className="material-icons-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
          onClick={handleSubmit}>
          add
        </span>
        <input
          type="text"
          value={ingredientName}
          onChange={(e) => setIngredientName(e.target.value)}
          className="pl-10 pr-4 py-2 border-2 border-neutral-950 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add an ingredient"
        />
      </div>
    </form>
  );
}

export default IngredientForm;

