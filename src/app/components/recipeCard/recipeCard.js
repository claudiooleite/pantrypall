import Link from 'next/link';
import Image from 'next/image';

const RecipeCard = ({ id, image, label, mealType, calories }) => {
  return (
    <Link href={`/recipe/${id}`}>
      <div className="m-2 p-2 rounded-lg w-72 flex flex-col items-center cursor-pointer">
        <div className="relative w-full h-40 border-2 border-neutral-950 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={label}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>
        <div className="p-2 text-center">
          <h2 className="text-lg font-semibold mb-1">{label}</h2>
          <p className="text-sm text-gray-600 capitalize">{mealType}</p>
          <p className="text-sm text-gray-600">Calories: {calories}</p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
