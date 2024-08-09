import Link from 'next/link';
import Image from 'next/image';

const RecipeCard = ({ id, image, label, mealType, calories }) => {
  return (
    <Link href={`/recipe/${id}`}>
      <div className="m-2 p-2 rounded-lg w-72 md:w-80 lg:w-96 flex flex-col items-center cursor-pointer">
        <div className="relative w-full h-40 md:h-48 lg:h-56 border-2 border-neutral-950 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={label}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-2 text-center">
          <h2 className="text-lg font-semibold mb-1">{label}</h2>
          <p className="text-sm text-gray-600 capitalize">{mealType}</p>
          <p className="text-sm text-gray-600">Calories: {calories}cal</p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
