import Image from 'next/image';

const RecipeCard = ({ image, label, mealType, calories }) => {
  return (
    <div className="m-2 p-2 rounded-lg w-72 flex flex-col items-center bg-white border-2 border-gray-300 shadow-md">
      <div className="relative w-full h-40 border-2 border-neutral-950 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={label}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="p-2 text-center">
        <h2 className="text-lg font-semibold mb-1">{label}</h2>
        <p className="text-sm text-gray-600 capitalize">{mealType}</p>
        <p className="text-sm text-gray-800 mt-1">Calories: {calories}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
