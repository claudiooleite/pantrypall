function IngredientsInfo({ ingredients, onRemove }) {
  function handleClickRemove(id) {
    onRemove(id); // Remove from pantry
  }

  return (
    <div>
      <h1 className="text-xl font-semibold my-4 text-center">Ingredients</h1>
      <ul className="flex flex-wrap gap-4">
        {ingredients.map((ingredient) => (
          <li
            key={ingredient.id}
            className="flex items-center space-x-2 p-2 bg-gray-100 border-2 border-neutral-950 rounded-full shadow-sm">
            <div className="flex-1">
              <h2 className="text-lg font-semibold capitalize">
                {ingredient.name}
              </h2>
            </div>
            <button
              onClick={() => handleClickRemove(ingredient.id)}
              className="text-red-600 hover:text-red-800 m-0">
              <span className="material-icons-outlined pt-2">close</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientsInfo;
